import { type FC, type PropsWithChildren } from "react";

type Props = { justifyContent?: "flex-start" | "space-between" };

export const FlexRow: FC<PropsWithChildren<Props>> = ({
  justifyContent = "flex-start",
  children,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: justifyContent,
      }}
    >
      {children}
    </div>
  );
};
