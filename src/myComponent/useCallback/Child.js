import React, { useEffect } from "react";

const Child = ({ getItems }) => {
  const [items, setItems] = React.useState([]);
  useEffect(() => {
    setItems(getItems());
  }, [getItems]);
  return (
    <div>
      {items &&
        items.map((curElem, index) => {
          return <div key={index}>{curElem} This is Child</div>;
        })}
    </div>
  );
};

export default Child;
