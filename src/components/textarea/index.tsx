interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {}

function TextArea({ ...props }: TextAreaProps) {
  return <textarea rows={3} autoComplete="off" spellCheck={false} {...props} />;
}

export default TextArea;
