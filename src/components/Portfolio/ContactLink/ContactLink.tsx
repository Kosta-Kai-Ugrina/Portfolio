import { type FC } from "react";
import "./ContactLink.css";

type Props = {
  icon: string;
  href: string;
  text: string;
};

export const ContactLink: FC<Props> = ({ icon, text, href }: Props) => {
  return (
    <a target="_blank" className="Container" href={href}>
      <img className="Icon" src={icon} alt={text} />
      {text}
    </a>
  );
};
