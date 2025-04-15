export const getDesignTokens = (mode: "light" | "dark") => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#6200ea",
          },
          background: {
            default: "#f5f5f5",
            paper: "#ffffff",
          },
        }
      : {
          primary: {
            main: "#bb86fc",
          },
          background: {
            default: "#121212",
            paper: "#1f1f1f",
          },
        }),
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  shape: {
    borderRadius: 16,
  },
});
