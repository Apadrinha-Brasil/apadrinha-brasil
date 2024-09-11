import Image from "next/image";


interface PhotoProps {
  photoSrc: string;
  subtitle: string;
}

interface PhotoGalleryProps {
  gallery: PhotoProps[];
}

function PhotoGallery({ gallery }: PhotoGalleryProps) {
  return (
    <>
      {gallery.map((photo, index) => {
        return (
          <div key={photo.photoSrc}>
            <Image
              height={343}
              width={320}
              src={photo.photoSrc}
              alt=""
              className={`${photo.subtitle ? 'rounded-t-lg' : 'rounded-lg'}`}
            />
            <div className="bg-abGray p-2 rounded-b-lg">
              {photo.subtitle && (
                <p className="text-abGrayText text-sm font-medium">
                  {photo.subtitle}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default PhotoGallery;