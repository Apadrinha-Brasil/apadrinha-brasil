'use client'

import Comments from "@/components/Comments"
import Description from "@/components/Description"
import Header from "@/components/Header"
import InstitutionDescription from "@/components/InstitutionDescription"
import LocationInfo from "@/components/LocationInfo"
import ProfileInfo from "@/components/ProfileInfo"
import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";

function ChildProfilePage() {

  const profileDescription = {
    title: 'Como ela se descreve?',
    description: 'Uma menina calma, que gosta de cuidar da aparência e gosta de sair com as amigas no fim de semana.',
    videoSrc: 'https://www.youtube.com/embed/1y_kfWUCFDQ'
  };

  const profileInterests = {
    title: 'Atividades que se interessa',
    description: 'Gosto de jogar handebol e vôlei. Gosto de pintura e queria aprender a dançar ballet e jogar tênis.',
    videoSrc: 'https://www.youtube.com/embed/1y_kfWUCFDQ'
  }

  const galery = [
    {
      photoSrc: '/child/profile-1.jpg',
      subtitle: 'Dia de sair com a amiga hahaha'
    },
    {
      photoSrc: '/child/profile-2.jpg',
      subtitle: 'Ganhei esse jogo!! ⚽🏆'
    },
  ]

  return (
    <div className="m-4 min-h-screen">
      <Header />

      <div className="flex flex-col gap-4 w-full">
        <ProfileInfo />
        <LocationInfo />
        <Description
          title={profileDescription.title}
          descriptionText={profileDescription.description}
          videoSrc={profileDescription.videoSrc}
        />
        <Comments />
        <InstitutionDescription />
        <div className="bg-abLightPink border border-solid border-abDarkPink p-4 rounded-md space-y-4 text-sm">
          <h3 className="text-lg font-black text-abDarkPink">
            Para ela, uma família legal...
          </h3>
          <article className="space-y-4">
            <p>Uma família unida, que sai para passear, que me ajuda quando preciso, me ajuda nas tarefas de casa e sai para viajar nas férias.</p>
            <p>Uma família em que eu possa ter irmãos (gosto muito de brincar com crianças) e cachorros. Não gosto de pessoas preconceituosas. </p>
          </article>

          <h3 className="text-lg font-black">🚨Restrições...?</h3>
          <article className="space-y-4">
            <p>Gente pra baixo e muito parada.</p>
          </article>
        </div>
        <Description
          title={profileInterests.title}
          descriptionText={profileInterests.description}
          videoSrc={profileInterests.videoSrc}
        />
        <Description
          title='Curiosidades ou fatos'
          descriptionText='Amo assistir Friends e sempre leio romance!'
        />
        <PhotoGallery
          gallery={galery}
        />
      </div>
    </div>
  )
}

export default ChildProfilePage