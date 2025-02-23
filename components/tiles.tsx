"use client";

import { useState, useEffect } from "react";
import {
  faAtom,
  faAnchor,
  faGamepad,
  faRocket,
  faCar,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const shuffledIcons = <T,>(array: T[]): T[] =>
  [...array].sort(() => Math.random() - 0.5);

interface Tile {
  id: number;
  icon: any;
  isFlipped: boolean;
  isMatched: boolean;
}

export default function Tiles() {
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
  const uniqueIcons = [faAtom, faAnchor, faGamepad, faRocket, faCar, faCamera];

  const [tiles, setTiles] = useState<Tile[]>([]);

  useEffect(() => {
    setTiles(
      shuffledIcons([...uniqueIcons, ...uniqueIcons]).map((icon, index) => ({
        id: index,
        icon,
        isFlipped: false,
        isMatched: false,
      }))
    );
  }, []);

  const handleTileClick = (index: number) => {
    if (!tiles.length) return;
    if (tiles[index].isMatched || selectedIndex.length >= 2) return;

    setTiles((prevTiles) =>
      prevTiles.map((tile, i) =>
        i === index ? { ...tile, isFlipped: true } : tile
      )
    );

    setSelectedIndex((prevSelectedIndex) => [...prevSelectedIndex, index]);

    if (selectedIndex.length + 1 == 2) {
      setTimeout(() => {
        checkMatch([selectedIndex[0], index]);
      }, 1000);
    }
  };

  const checkMatch = (selected: number[]) => {
    if (tiles[selected[0]].icon === tiles[selected[1]].icon) {
      setTiles((prevTiles) =>
        prevTiles.map((tile, i) =>
          selected.includes(i) ? { ...tile, isMatched: true } : tile
        )
      );
    } else {
      setTiles((prevTiles) =>
        prevTiles.map((tile, i) =>
          selected.includes(i) ? { ...tile, isFlipped: false } : tile
        )
      );
    }

    setSelectedIndex([]);
  };

  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {tiles.map((tile, index) => (
        <div
          key={tile.id}
          onClick={() => handleTileClick(index)}
          className={`w-32 h-32 flex items-center justify-center 
                      ${
                        tile.isFlipped
                          ? "bg-theme-clicked"
                          : "bg-theme-notclicked"
                      } 
                      ${
                        tile.isMatched 
                        ? "border border-green-500"
                        : ""
                      }
                      m-2 rounded-md shadow-md cursor-pointer`}
        >
          {tile.isFlipped && (
            <FontAwesomeIcon icon={tile.icon} className="text-white" />
          )}
        </div>
      ))}
    </div>
  );
}
