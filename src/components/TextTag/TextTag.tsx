interface TextTagProps {
  text: string;
  color: string;
  bgColor: string;
}

function TextTag({ text, color, bgColor }: TextTagProps) {
  return (
    <div className={`text-${color} bg-${bgColor} font-medium rounded-lg p-2 whitespace-nowrap`}>
      {text}
    </div>
  )
}

export default TextTag;