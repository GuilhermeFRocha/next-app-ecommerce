import { createContext } from "react";

interface CardContextProps {}

const CardContext = createContext({} as CardContextProps);

export function CardProvider({ children }: { children: React.ReactNode }) {
  return <CardContext.Provider value={{}}>{children}</CardContext.Provider>;
}
