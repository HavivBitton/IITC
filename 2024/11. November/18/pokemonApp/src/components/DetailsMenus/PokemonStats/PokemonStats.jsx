import getStatsNameShort from "../../../utils/getStatsNameShort";
import styles from "./PokemonStats.module.css";

const PokemonStats = ({ stats }) => {
  return (
    <div className={styles.StatContainer}>
      <div className={styles.StatContainer}>
        {stats.map((stat) => (
          <div key={stat.stat.name} className={styles.StatNameContainer}>
            <div className={styles.statContainerOfName}>
              <h4 className={stat.stat.name}>
                {getStatsNameShort(stat.stat.name)}
              </h4>
            </div>
            <div className={styles.statValue}>
              <h4>{stat.base_stat}</h4>
            </div>
            <div className={styles.StatSliderValue}>
              <progress max={100} value={stat.base_stat}></progress>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;
