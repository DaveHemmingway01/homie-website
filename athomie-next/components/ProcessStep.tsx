type ProcessStepProps = {
  number: string;
  title: string;
  text: string;
};

export function ProcessStep({ number, title, text }: ProcessStepProps) {
  return (
    <li>
      <span>{number}</span>
      <strong>{title}</strong>
      <p>{text}</p>
    </li>
  );
}
