import React, { createContext, useState, ReactNode, useContext } from "react";

/**
 * Type for the theme mode, which can be either "light" or "dark".
 * @typedef {"light" | "dark"} ThemeMode
 */
type ThemeMode = "light" | "dark";

/**
 * Context type for ThemeContext.
 * @typedef {Object} ThemeContextType
 * @property {ThemeMode} mode - The current theme mode.
 * @property {function(ThemeMode): void} setMode - Function to set the theme mode.
 */
interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

/**
 * Creates a context for the theme with a default value of undefined.
 * @type {React.Context<ThemeContextType | undefined>}
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Props for the ThemeProvider component.
 * @typedef {Object} ThemeProviderProps
 * @property {ReactNode} children - The children elements to be wrapped by the provider.
 */
interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider component to provide the theme context to its children.
 * @param {ThemeProviderProps} props - The props for ThemeProvider.
 * @returns {JSX.Element} The provider component with the theme context.
 */
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to use the theme context.
 * @returns {ThemeContextType} The theme context value.
 * @throws {Error} If the hook is used outside of a ThemeProvider.
 */
const useTheme = () => {
  const context: ThemeContextType | undefined = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
