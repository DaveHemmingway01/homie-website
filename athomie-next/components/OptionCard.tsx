import Image from "next/image";

type OptionCardProps = {
  image: string;
  title: string;
  text: string;
  active?: boolean;
};

export function OptionCard({ image, title, text, active = false }: OptionCardProps) {
  return (
    <article className={`option-card ${active ? "active" : ""}`}>
      <div className="option-card-media">
        <Image src={image} alt={`${title} option preview`} fill sizes="(max-width: 760px) 50vw, 20vw" />
      </div>
      <strong>{title}</strong>
      <span>{text}</span>
    </article>
  );
}
