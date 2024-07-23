import Image from "next/image";

function LocationInfo() {
  return (
    <div className="bg-abGray p-4 rounded-lg flex items-start justify-start space-x-2 shadow">
      <Image
        src="/local-point.jpg"
        alt="Location icon"
        width='16'
        height='16'
        style={{ paddingTop: '0.2rem' }}
      />
      <div>
        <div className="font-bold">
          Curitiba, Paraná
        </div>
        <div className="text-abGrayText">
          Lar Lisa, Santa Felicidade
        </div>
      </div>
    </div>
  )
}

export default LocationInfo;