import { useState } from "react";
const Show = (props) => {
  let display = props.count;
  if (props.count === 0) display = "MIN";
  if (props.count === 10) display = "MAX";
  return <span id="vote2">{display}</span>;
};
const Votefunc = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => {
      if (c < 10) return c + 1;
      else window.alert("Cannot vote");
      return c;
    });
  };

  const decrement = () => {
    setCount((c) => {
      if (c > 0) return c - 1;
      else window.alert("Cannot unvote");
      return c;
    });
  };

  return (
    <div className="box">
      <button className="vote" onClick={increment}>
        Click to Vote
      </button>
      <Show count={count} />
      <button className="vote" onClick={decrement}>
        Click to Unvote
      </button>
    </div>
  );
};

export default Votefunc;
