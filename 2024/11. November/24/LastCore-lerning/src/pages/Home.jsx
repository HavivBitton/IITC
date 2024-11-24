import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to={`/signin`}>
        <button>Sing In </button>
      </Link>
    </>
  );
};

export default Home;
