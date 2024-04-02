"use client";
import Image from "next/image";
import Picture from "../components/Picture";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import RealGridBoard from "../components/RealGridBoard";
import ShowGridBG from "./ShowGridBG";
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

export default function Home() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        <div className="flex flex-col gap-2 ml-8">
          {PictureList.map((picture) => {
            //@ts-ignore
            return (
              <Picture url={picture.url.src} id={picture.id} key={picture.id} />
            );
          })}
        </div>
        <RealGridBoard />
      </div>
    </DndProvider>
  );
}
