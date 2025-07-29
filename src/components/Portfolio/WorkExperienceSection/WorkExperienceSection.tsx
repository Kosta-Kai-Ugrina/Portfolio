import React, { type FC, type PropsWithChildren } from "react";
import { FlexRow } from "../../FlexRow/FlexRow";
import "./WorkExperienceSection.css";
import { Divider } from "@mui/material";

type Props = {
  role: string;
  companyName: string;
  from: string;
  to: string;
  jobType: "Full-time";
};

export const WorkExperienceSection: FC<PropsWithChildren<Props>> = ({
  role,
  from,
  to,
  companyName,
  jobType,
  children,
}) => {
  return (
    <div className="WorkExperienceSectionContainer">
      <Divider />
      <FlexRow justifyContent="space-between">
        <h3>{role}</h3>
        <h5></h5>
        <span style={{ alignSelf: "center" }}>
          {from} - {to}
        </span>
      </FlexRow>
      <p>
        <strong>{companyName}</strong> - {jobType}
      </p>
      <p>{children}</p>
    </div>
  );
};
