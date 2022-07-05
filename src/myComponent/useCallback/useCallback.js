import React from "react";
import Child from "./Child";

const UseCallback = () => {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const getItems = React.useCallback(() => {
    console.log(count2 + 1, count2 - 1);
    return [count2 + 1, count2 - 1];
  }, [count2]);
  return (
    <>
      <div>
        <button onClick={() => setCount1(count1 + 1)}>
          Count one: {count1}
        </button>
        <button onClick={() => setCount2(count2 + 1)}>
          Count two: {count2}
        </button>
      </div>
      <Child getItems={getItems} />
    </>
  );
};

export default UseCallback;
