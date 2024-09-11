import ProfileVideo from "../ProfileVideo";

interface DescriptionProps {
  title: string;
  descriptionText: string;
  videoSrc?: string;
}

function Description({
  title,
  descriptionText,
  videoSrc
}: DescriptionProps) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-black pt-2">{title}</h2>
        <p className="text-abGrayText text-sm">
          {descriptionText}
        </p>
        {
          videoSrc && (
            <ProfileVideo
              src={videoSrc}
            />
          )
        }
      </div>
    </>
  );
}

export default Description;