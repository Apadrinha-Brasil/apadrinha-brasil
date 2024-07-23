import ProfileVideo from "../ProfileVideo";

function Description() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-black pt-2">Como ela se descreve?</h2>
        <p className="text-abGrayText">
          Uma menina calma, que gosta de cuidar da aparência e gosta de sair com as amigas no fim de semana.
        </p>
        <ProfileVideo
          src="https://www.youtube.com/embed/1y_kfWUCFDQ"
        />
      </div>
    </>
  );
}

export default Description;