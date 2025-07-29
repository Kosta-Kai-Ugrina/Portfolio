import { type PropsWithChildren } from "react";
import { Box as MuiBox } from "@mui/material";
import "./Box.css";

type Props = {
  width?: number | string | undefined;
  height?: number | string | undefined;
};

export const Box = ({ children, width, height }: PropsWithChildren<Props>) => {
  return (
    <MuiBox
      component="section"
      sx={{
        justifyContent: "flex-start",
        alignItems: "start",
        borderRadius: 3,
        width: width ?? "auto",
        height: height ?? "auto",
        color: "#333",
        background: "#fffc",
        m: 2,
        p: 2,
        border: "1px solid grey",
        transition: "background-color 0.5s ease",
        "&:hover": {
          background: "#eeef",
        },
      }}
    >
      {children}
    </MuiBox>
  );
};
