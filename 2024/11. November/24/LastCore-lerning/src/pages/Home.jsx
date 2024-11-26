import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [isApple, serIsApple] = useState("false");
  const [isAsus, serIsAsus] = useState("false");
  const [isDell, serIsDell] = useState("false");
  return (
    <>
      <div>Home</div>
      <button>
        <Link to={`/signin`}>Sing In</Link>
      </button>

      <form>
        <button onClick={() => serIsApple((v) => !v)}>Apple</button>
        <button onClick={() => serIsAsus((v) => !v)}>Asus</button>
        <button onClick={() => serIsDell((v) => !v)}>Dell</button>
      </form>

      <button>
        <Link to={`/query-print?apple?`}>Query Print</Link>
      </button>
    </>
  );
};

export default Home;
