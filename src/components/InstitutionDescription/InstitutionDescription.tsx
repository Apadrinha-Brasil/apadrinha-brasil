import Image from 'next/image';
import TextTag from '../TextTag';

function InstitutionDescription() {
  const tags = ['Estudar', 'Regras', 'Construir uma Familia', 'Amor', 'Respeito']
  return (
    <div className="my-2">
      <div className="flex items-center gap-2">
        <Image
          src="/document.jpg"
          alt=""
          width="20"
          height="20"
          className="object-cover mb-1"
        />
        <h3 className="text-lg font-black text-abOrange">
          Relatório Técnico da Instituição
        </h3>
      </div>
      <div className="text-abGrayText flex flex-col gap-5 text-justify px-1 ">
        <p>
          - Jéssica teve um histórico de violência no lar e veio ao lar quando tinha 10 anos. Desde o início sempre foi muito compreensiva e soube respeitar as regras. Gosta muito de estudar e respeita os horários.
        </p>
        <p>
          Na escola enfrenta dificuldades nas matérias de exatas. Não toma remédios e faz acompanhamento psicológico. Sente falta da mãe e o sonho dela é um dia construir sua família com muito amor.
        </p>

        <div className="flex gap-2 overflow-x-scroll w-screen">
          {tags.map((tag, index) => (
            <TextTag key={index} text={tag} color="abOrange" bgColor="abOrangeLight" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default InstitutionDescription;