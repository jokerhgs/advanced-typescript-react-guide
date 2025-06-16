import { useCallback, useState } from "react";
import { FavoriteItemComponent, type FavoriteItemProps } from "./favorite-item";

export const FavoriteList = () => {
  const initialItems = [
    { id: 1, name: "React", favorite: false },
    { id: 2, name: "TypeScript", favorite: true },
    { id: 3, name: "Next.js", favorite: false },
    { id: 4, name: "GraphQL", favorite: false },
    { id: 5, name: "Tailwind CSS", favorite: true },
  ];
  const [favoriteItems, setFavoriteItems] =
    useState<Omit<FavoriteItemProps, "onToggle">[]>(initialItems);

  const handleToggleFavorite = useCallback((id: string | number) => {
    setFavoriteItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {favoriteItems.map((item) => {
        return (
          <FavoriteItemComponent
            key={item.id}
            id={item.id}
            favorite={item.favorite}
            name={item.name}
            onToggle={handleToggleFavorite}
          />
        );
      })}
    </div>
  );
};
