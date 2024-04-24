import React from "react";
import { useVisualContainer } from "../../context/VisualContext";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const UpDownButton = ({
  id,
  className,
}: {
  id: number | null;
  className: string;
}) => {
  const { moveUp, moveDown } = useVisualContainer();
  return (
    id && (
      <>
        <button
          className="flex-grow-0"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            moveUp(id);
          }}
        >
          <FaArrowCircleUp className={className} />
        </button>

        <button
          className="flex-grow-0"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            moveDown(id);
          }}
        >
          <FaArrowCircleDown className={className} />
        </button>
      </>
    )
  );
};

export default React.memo(UpDownButton);
