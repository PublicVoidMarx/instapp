import React from 'react'

export default async function ChatPage({ params }: { params: { id: string } }) {
  // const invoices = await fetchFilteredInvoices(params.id);
  return (
    <div className='h-screen bg-green-900'>
      <div></div>
      {params.id}
    </div>
  )
}
