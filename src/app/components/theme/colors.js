const lightColors = {
  background: "#ffffff",
  contactBg:"#f5f5dc",
  surface: "#FFFDF9",
  primary: "#1976d2",
  secondary: "#9c27b0",
  textPrimary: "#212121",
  textSecondary: "#666",
  border: "#e0e0e0",
  cardShadow:"0 0 9px 7px rgba(0, 0, 0, 0.08)",
  buttonBackground: "#1976d2",
  headingColor:"#120061",
  buttonText: "#ffffff",
  titleColor:"linear-gradient(to right, #7e6dff, #120061)",
  bg:"linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
};

const darkColors = {
  background: "#121212",
  surface: "#1e1e1e",
  primary: "#90caf9",
  secondary: "#ce93d8",
  contactBg:"#1e1e1e",
  textPrimary: "#ffffff",
  textSecondary: "#bbbbbb",
   headingColor: "#ce93d8",
  border: "#333",
  titleColor:"linear-gradient(to right, #7e61ff, #adcced)",
  cardShadow:"0 0 16px 4px rgba(255, 255, 255, 0.02)",
  buttonBackground: "#90caf9",
  buttonText: "#000000",
  bg:"linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)"
};

export const getColors = (mode = "dark") => {
  return mode === "dark" ? darkColors : lightColors;
};
