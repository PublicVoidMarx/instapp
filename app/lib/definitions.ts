export type Post = {
  image: string,
  likes: number,
  comment: string,
  date: string
}

export type AvatarStory = {
  image: string
}

export type Chat = {
  id: string,
  title?: string,
  content: string,
  members: string[],
  photo: string
}