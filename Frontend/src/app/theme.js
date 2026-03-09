import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#E51E26",
            dark: "#212121"
        },
        text: {
            primary: "#fff"
        },

    },
    typography: {
        h1: { fontFamily: "inherit" },
        h2: { fontFamily: "inherit" },
        h3: { fontSize: "24px", color: "#E51E26", fontWeight: 600, fontFamily: "inherit" },
        h4: { fontFamily: "inherit" },
        h5: { fontFamily: "inherit" },
        h6: { fontFamily: "inherit" }
    }
});

export default theme;