import {ReactNode} from "react";
import {Box, Container, CssBaseline} from "@mui/material";

type AuthCardProps = {
    children: ReactNode
}

export default function AuthCard({ children }: AuthCardProps) {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                // TODO: styleの見直し、直接数値指定をやめる
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 2,
                }}
            >
                {children}
            </Box>
        </Container>
    )
}

