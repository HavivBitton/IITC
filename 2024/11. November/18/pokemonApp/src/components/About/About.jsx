// Import CSS
import SideBar from "../SideBar/SideBar";
import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      <SideBar />
      <div className={styles.title}>About</div>;
    </div>
  );
};

export default About;
