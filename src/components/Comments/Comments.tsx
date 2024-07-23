import Image from 'next/image';
import ProfileVideo from '../ProfileVideo';

function Comments() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 rounded-lg border-abPink border-solid border p-3 shadow-simple">
        <div className="flex items-center gap-3">
          <Image
            src="/icon-user-comment.png"
            alt=""
            width="35"
            height="35"
          />
          <h3 className="text-lg font-black">Os amigos dizem...</h3>
        </div>
        <p className="text-abGrayText">
          A Jéssica é a menina mais zen do lar!!! Ela gosta de ficar de boa, ouvir sertanejo, ama os animais (principalmente o charlie, nosso cachorro) e a cama dela tá sempre arrumada (diferente da minha hahaha). Ela é muito determinada, amorosa, zen e torce pro Coritiba! 💗💗💗💗💗💗💗💗💗
        </p>
      </div>

      <ProfileVideo
        src="https://www.youtube.com/embed/9XB49E2b6m4?si=Y91ph9PS5JMqxZts"
      />
    </div>
  )
}

export default Comments; 