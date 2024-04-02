import React from "react";
import { useDrag } from "react-dnd";

function Picture({ id, url, style = null }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleOnDrag = (e, id) => {
    const { clientX, clientY } = e;
    const targetRect = e.target.getBoundingClientRect();
    const offsetX = clientX - targetRect.left;
    const offsetY = clientY - targetRect.top;
    console.log(offsetX, offsetY);
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("MouseOffsetFromDragX", offsetX);
    e.dataTransfer.setData("MouseOffsetFromDragY", offsetY);
    console.log(id);
  };

  return (
    <img
      className="w-36 h-36 object-cover"
      ref={drag}
      src={url}
      style={style ? style : { border: isDragging ? "5px solid pink" : "0px" }}
      onDragStart={(e) => handleOnDrag(e, id)}
    />
  );
}

export default Picture;
