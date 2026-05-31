type SpecCardProps = {
  number: string;
  title: string;
  text: string;
};

export function SpecCard({ number, title, text }: SpecCardProps) {
  return (
    <article>
      <span>{number}</span>
      <strong>{title}</strong>
      <p>{text}</p>
    </article>
  );
}
