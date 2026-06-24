interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex justify-center items-center py-20">
      <p className="text-red-400 text-sm">{message}</p>
    </div>
  );
}
