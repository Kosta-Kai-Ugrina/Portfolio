import { type FC } from "react";
import "./LanguageSection.css";

type Props = {
  language: string;
  skillLevel: string;
};

export const LanguageSection: FC<Props> = ({ language, skillLevel }: Props) => {
  return (
    <div>
      <div className="LanguageSpan">{language}</div>
      <strong>{skillLevel}</strong>
    </div>
  );
};
