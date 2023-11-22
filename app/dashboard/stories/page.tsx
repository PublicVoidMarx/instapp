'use client'
import { AvatarStory } from "@/app/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const stories: AvatarStory[] = [
  { image: 'https://cdn.pixabay.com/photo/2012/04/23/17/06/number-39114_1280.png' },
  { image: 'https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/number_2_green-512.png' },
  { image: 'https://steamuserimages-a.akamaihd.net/ugc/366280865472644785/B691F4FE51FFC45C2962845A95BB43437F276C79/' },
  { image: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7811755/number-four-clipart-sm.png' },
  { image: 'https://static.wikia.nocookie.net/numberjacks7573/images/0/0b/Dftsdln-c432cd92-563f-45ed-bb46-088f315af3e8.png/revision/latest?cb=20230630003318' },
  { image: 'https://img.freepik.com/free-photo/beauty-face-young-beautiful-woman_186202-6149.jpg' }]

export default function StoriesPage() {
  const [activeStory, setActiveStory] = useState(0)
  const router = useRouter()

  function handleNextStory() {
    if (activeStory + 1 < stories.length) {
      setActiveStory(activeStory + 1)
    } else {
      router.replace('/dashboard')
    }
  }

  function handlePreviousStory() {
    if (activeStory - 1 >= 0) {
      setActiveStory(activeStory - 1)
    } else {
      router.replace('/dashboard')
    }
  }

  function handleSendMessage() {
    console.log('AAA mensage enviado')
  }
  return (
    <>
      <Image
        alt="Active Story"
        src={stories[activeStory]?.image}
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />
      <div className="flex justify-between">
        <div className="z-0 w-2/5 h-screen bg-lime-500" onClick={handlePreviousStory}>Previous</div>
        <div className="z-0 w-2/5 h-screen bg-rose-800" onClick={handleNextStory}>Next</div>
      </div >
      <div className="w-screen h-24 fixed bottom-0 bg-purple-950 text-center" onClick={handleSendMessage}>
        Comentario
      </div>
    </>
  )
}
