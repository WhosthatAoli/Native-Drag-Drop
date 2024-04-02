import { useDrop } from "react-dnd";
import { useState } from "react";
import Picture from "./Picture";
import cat0 from "../../const/cat0.png";
import cat1 from "../../const/cat1.png";
import cat2 from "../../const/cat2.png";
import { v4 as uuidv4 } from "uuid";

const PictureList = [
  {
    id: 1,
    url: cat0, //this is the path to the image, from index.html (not from this file)
  },
  {
    id: 2,
    url: cat1,
  },
  {
    id: 3,
    url: cat2,
  },
];

export default function NormalBoard() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  return (
    <div
      className="BoardContainer w-3/4 border border-white ml-8 flex flex-wrap flex-row gap-2"
      ref={drop}
    >
      {board.map((picture) => {
        return (
          <Picture
            url={picture.url.src}
            id={picture.id}
            key={picture.id} // use picture.id instead of uuidv4() to avoid redundant re-rendering
          />
        );
      })}
    </div>
  );
}
