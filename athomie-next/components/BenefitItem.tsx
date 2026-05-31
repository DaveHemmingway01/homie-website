type BenefitItemProps = {
  title: string;
  text: string;
};

export function BenefitItem({ title, text }: BenefitItemProps) {
  return (
    <article>
      <strong>{title}</strong>
      <span>{text}</span>
    </article>
  );
}
