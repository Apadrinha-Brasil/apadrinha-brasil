import Image from "next/image";

function ProfileInfo({ }) {
  return (
    <>
      <h1 className="text-2xl font-black">
        Jéssica, 13 anos
      </h1>
      <Image
        src="/child/perfil-principal.png"
        alt="First photo of child"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', }}
      />
    </>
  );
};

export default ProfileInfo;