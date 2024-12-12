import { Button } from "@/components/ui/button";
import png from "../../public/demo-png.jpeg";

// Import route link
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="w-full h-screen bg-slate-300">
      <img className="w-full" src={png} alt="demo-png" />
      <p className="text-[1.5rem]">30k+ premium recipes</p>
      <div className="flex justify-center">
        <h1 className="text-[20vw] w-4/5 leading-tight">Cook like a Chef</h1>
      </div>
      <div className="flex justify-center">
        <Link to={"/RecipeListPage"}>
          <Button
            className="bg-orange-500 hover:bg-orange-600"
            size="welcomePage"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
