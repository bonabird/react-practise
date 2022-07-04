import { useEffect, useState } from "react";

const StarBoi = () => {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);
  return (
    <div>
      <h2>The count is {count}</h2>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Generate next character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Generate previous character
      </button>
    </div>
  );
};

export default StarBoi;
