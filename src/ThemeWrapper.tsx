import { useMemo, useState } from "react";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getDesignTokens } from "./theme/theme";
import { createTheme } from "@mui/material/styles";

const ThemeWrapper = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App
        toggleTheme={() =>
          setMode((prev) => (prev === "light" ? "dark" : "light"))
        }
      />
    </ThemeProvider>
  );
};

export default ThemeWrapper;
