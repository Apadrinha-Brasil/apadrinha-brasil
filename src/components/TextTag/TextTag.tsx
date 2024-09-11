interface TextTagProps {
  text: string;
}

function TextTag({ text }: TextTagProps) {
  return (
    <div className={`text-abOrange bg-abOrangeLight font-medium rounded-lg p-2 whitespace-nowrap`}>
      {text}
    </div>
  )
}

export default TextTag;