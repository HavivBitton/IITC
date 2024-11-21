import { useParams } from "react-router-dom";

const Tech = () => {
  const { id } = useParams();

  return <h1>This is the Tech Page</h1>;
};

export default Tech;
