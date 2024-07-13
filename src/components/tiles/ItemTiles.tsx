import React, { PropsWithChildren } from "react";
import Button from "../button/Button";

interface Item {
  name: string;
  height: number;
  birth_year: string;
  gender: string;
}

interface ItemTilesProps extends PropsWithChildren {
  items: Item[];
  handleClick: () => void;
  buttonText?: string;
}

const ItemTiles = ({ items, handleClick, buttonText }: ItemTilesProps) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <div className="items" key={index}>
            <div className="items-info">
              <div className="item-info__name">{item.name}</div>
              <div className="item-info__details">
                <p className="item-info__height">{item.height}</p>
                <p className="item-info__birth">{item.birth_year}</p>
                <p className="item-info__gender">{item.gender}</p>
              </div>
            </div>
            <div className="items-proceed">
              {buttonText ? (
                <Button onClick={() => handleClick}>{buttonText}</Button>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemTiles;
