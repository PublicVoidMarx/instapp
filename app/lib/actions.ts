export type likePostProps = {
  idPost: string
}

export async function likePost({ idPost }: likePostProps) {
  console.log('liked post', idPost)
}