import { type FC } from "react";
import { Box } from "../Box/Box";
import mugshot from "../../../assets/mugshot.png";
import "./TitleBox.css";

export const TitleBox: FC = () => {
  return (
    <Box>
      <div className="Container">
        <img className="Mugshot" src={mugshot} alt="Kosta Kai Ugrina"></img>
        <div>
          <h1>Kosta Kai Ugrina</h1>
          <h2>Senior software developer</h2>
        </div>
      </div>
    </Box>
  );
};
