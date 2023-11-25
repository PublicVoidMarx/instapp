const { db } = require('@vercel/postgres');
const {
  chats
} = require('../app/lib/placeholder-data.js');
async function seedChats(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS chats (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    chat_id UUID NOT NULL,
    content VARCHAR(255) NOT NULL,
    members VARCHAR(255) NOT NULL,
    photo VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "invoices" table`);

    // Insert data into the "invoices" table
    const insertedChats = await Promise.all(
      chats.map(
        (chat) => client.sql`
        INSERT INTO chats (chat_id, content, members, photo)
        VALUES (${chat.id}, ${chat.content}, ${chat.members}, ${chat.photo})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedChats.length} chats`);

    return {
      createTable,
      chats: insertedChats,
    };
  } catch (error) {
    console.error('Error seeding chats:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedChats(client);
  // await seedCustomers(client);
  // await seedInvoices(client);
  // await seedRevenue(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});