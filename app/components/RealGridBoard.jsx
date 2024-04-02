import { useDrop } from "react-dnd";
import { useState, useRef } from "react";
import Picture from "./Picture";
import cat0 from "../../const/cat0.png";
import cat1 from "../../const/cat1.png";
import cat2 from "../../const/cat2.png";
import ShowGridBG from "../absorb/ShowGridBG";
import { randomUUID } from "crypto";

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

export default function RealGridBoard() {
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
    const startcol = Math.floor(getx / 144) + 1; //144 is the size of the grid, startcol from 1
    const startrow = Math.floor(gety / 144) + 1;
    const addpic = {
      ...pictureList[0],
      style: {
        gridColumnStart: startcol,
        gridRowStart: startrow,
      },
    };
    console.log(x, y);
    console.log(offset);
    console.log(getx, gety);
    console.log(startcol, startrow);
    console.log(addpic.style);
    setBoard((board) => [...board, addpic]);
  };

  const handleOnDrag = (e, id) => {
    e.dataTransfer.setData("id", id);
    console.log(id);
  };

  const boardStyle = {
    // width: "400px",
    // height: "400px",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",
    position: "relative",
    zIndex: 10,
  };

  const gridBgStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  };

  const pictureStyle = {
    position: "absolute",
    zIndex: 10,
  };

  //absorb need pic size, board size, and grid size, and calculate the start grid all align

  //next todo: show bgGrid right now without Z stack

  return (
    <div
      className="w-[720px] h-[720px] border relative border-white ml-8"
      ref={drop}
      style={boardStyle}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* <ShowGridBG style={gridBgStyle} /> */}
      {board.map((picture) => {
        return (
          <Picture
            url={picture.url.src}
            id={picture.id}
            style={{ ...picture.style, ...pictureStyle }}
          />
        );
      })}
    </div>
  );
}
