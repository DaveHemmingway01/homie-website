type SectionHeadingProps = {
  label?: string;
  title: string;
  lede?: string;
};

export function SectionHeading({ label, title, lede }: SectionHeadingProps) {
  return (
    <div className="section-intro">
      {label ? <small>{label}</small> : null}
      <h2>{title}</h2>
      {lede ? <p>{lede}</p> : null}
    </div>
  );
}
