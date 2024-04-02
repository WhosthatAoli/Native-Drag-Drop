import { useDrop } from "react-dnd";
import { useState, useRef } from "react";
import Picture from "./Picture";
import cat0 from "../../const/cat0.png";
import cat1 from "../../const/cat1.png";
import cat2 from "../../const/cat2.png";

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
export default function AnyPositionBoard() {
  const [board, setBoard] = useState([]);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [nowId, setNowId] = useState(0);

  const [{ isOver, addOffset }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => {
      //addImageToBoard(item.id);
      //setNowId(item.id);
      console.log("drop");
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      //addOffset: monitor.getSourceClientOffset(),
    }),
  }));

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log(e);
    const { clientX, clientY } = e;
    const targetRect = e.target.getBoundingClientRect();
    const offsetX = clientX - targetRect.left;
    const offsetY = clientY - targetRect.top;
    setOffset({ x: offsetX, y: offsetY });
    setX(offsetX);
    setY(offsetY);
    console.log(offset);
  };

  const addImageToBoard = (id) => {
    handleDrop(id);

    // console.log(offset);
    // const pictureList = PictureList.filter((picture) => id === picture.id);
    // const getx = offset.x;
    // const gety = offset.y;
    // const addpic = {
    //   ...pictureList[0],
    //   style: {
    //     position: "absolute",
    //     top: Number(gety) + "px",
    //     left: getx + "px",
    //   },
    // };
    // console.log(x, y);
    // console.log(offsetRef.current);
    // console.log(offset);
    // console.log(getx, gety);
    // console.log(addpic.style);
    // setBoard((board) => [...board, addpic]);
  };

  const handleDrop = (e) => {
    const id = Number(e.dataTransfer.getData("id"));
    //var id = nowId;
    console.log(id);
    const MouseOffsetFromDragX = Number(
      e.dataTransfer.getData("MouseOffsetFromDragX")
    );
    const MouseOffsetFromDragY = Number(
      e.dataTransfer.getData("MouseOffsetFromDragY")
    );
    console.log(MouseOffsetFromDragX, MouseOffsetFromDragY);
    const pictureList = PictureList.filter((picture) => id === picture.id);
    console.log(pictureList);
    const getx = offset.x - MouseOffsetFromDragX;
    const gety = offset.y - MouseOffsetFromDragY;
    const addpic = {
      ...pictureList[0],
      style: {
        position: "absolute",
        top: Number(gety) + "px",
        left: getx + "px",
      },
    };
    console.log(x, y);
    console.log(offset);
    console.log(getx, gety);
    console.log(addpic.style);
    setBoard((board) => [...board, addpic]);
  };

  const handleOnDrag = (e, id) => {
    e.dataTransfer.setData("id", id);
    console.log(id);
  };

  return (
    <div
      className="w-3/4 border relative border-white ml-8 flex flex-wrap flex-row gap-2"
      ref={drop}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {board.map((picture) => {
        return (
          <Picture
            url={picture.url.src}
            id={picture.id}
            style={picture.style}
          />
        );
      })}
    </div>
  );
}
