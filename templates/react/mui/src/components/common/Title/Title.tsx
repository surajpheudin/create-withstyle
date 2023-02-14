import { Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const Title: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Typography
            variant="h1"
            sx={{
                borderBlock: "1px solid transparent",
                borderColor: "border.gray.dark",
                my: 4,
                position: "sticky",
                top: 0,
                backgroundColor: "bg.gray.light",
            }}
        >
            {children}
        </Typography>
    );
};

export default Title;
