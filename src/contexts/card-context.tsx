import { createContext, useContext, useState } from "react";

interface CardItem {
  productId: string;
  quantity: number;
}

interface CardContextProps {
  items: CardItem[];
  addToCart: (productId: string) => void;
}

const CardContext = createContext({} as CardContextProps);

export function CardProvider({ children }: { children: React.ReactNode }) {
  const [cardItems, setCardItems] = useState<CardItem[]>([]);

  function addToCart(productId: string) {}

  return (
    <CardContext.Provider value={{ items: cardItems, addToCart }}>
      {children}
    </CardContext.Provider>
  );
}

export const useCard = () => useContext(CardContext);
