import React, { PropsWithChildren } from "react";
import Button from "../button/Button";

interface People {
  name: string;
  height: number;
  birth_year: string;
  gender: string;
}

interface Planets {
  name: string;
  population: number;
  climate: string;
}

interface ItemTilesProps extends PropsWithChildren {
  item: People | Planets;
  handleClick: () => void;
  buttonText?: string;
  key: string | number;
}

const ItemTiles: React.FC<ItemTilesProps> = ({ item, handleClick, buttonText, key }) => {
  return (
    <>
          <div className="items" key={key}>
            <div className="items-info">
              <div className="item-info__name">{item.name}</div>
              <div className="item-info__details">
                <p className="item-info__detail">{'height' in item && item.height}</p>
                <p className="item-info__detail">{'birth_year' in item && item.birth_year}</p>
                <p className="item-info__detail">{'gender' in item && item.gender}</p>
                <p className="item-info__detail">{'population' in item && item.population}</p>
                <p className="item-info__detail">{'climate' in item && item.climate}</p>
              </div>
            </div>
            <div className="items-proceed">
              {buttonText ? (
                <Button onClick={() => handleClick} buttonType={"button"}>{buttonText}</Button>
              ) : (
                ""
              )}
            </div>
          </div>
    </>
  );
};

export default ItemTiles;
