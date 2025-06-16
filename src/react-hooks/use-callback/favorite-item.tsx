import { memo } from "react";

export type FavoriteItemProps = {
  id: string | number;
  name: string;
  favorite: boolean;
  onToggle: (id: number | string) => void;
};

export const FavoriteItemComponent = memo(
  ({ id, name, favorite, onToggle }: FavoriteItemProps) => {
    return (
      <div className="flex items-center gap-4 w-96 justify-between">
        <span>{name}</span>
        <button
          onClick={() => {
            onToggle(id);
          }}
          className="px-3 py-1 rounded bg-blue-100"
        >
          {favorite ? "Unfavorite" : "Favorite"}
        </button>
      </div>
    );
  }
);
