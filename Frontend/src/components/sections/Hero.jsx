import { Box, Typography, Button, Container } from "@mui/material";

export default function Hero() {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "80vh",
                overflow: "hidden",
            }}
        >
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            >
                <source src="https://res.cloudinary.com/dyxmm2qpt/video/upload/v1772755400/Hero_Section_Video_tmpg8o.mp4" type="video/mp4" />
            </video>

            {/* Overlay content */}
            {/* <Container
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    textAlign: "center",
                    backgroundColor: "rgba(0,0,0,0.4)", // optional dark overlay
                }}
            >

            </Container> */}
        </Box>
    );
}