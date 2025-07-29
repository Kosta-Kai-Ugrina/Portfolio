import { Divider } from "@mui/material";
import React, { type FC, type PropsWithChildren } from "react";
import "./EducationSection.css";

type Props = {
  educationType: string;
  universityName: string;
  yearFrom: string;
  yearTo: string;
};

export const EducationSection: FC<PropsWithChildren<Props>> = ({
  educationType,
  universityName,
  yearFrom,
  yearTo,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className="EducationSectionContainer">
      <Divider />
      <br />
      <strong>{educationType}</strong>
      <h3>{universityName}</h3>
      <p>
        {yearFrom} - {yearTo}
      </p>
      <p>{children}</p>
      <br />
    </div>
  );
};
