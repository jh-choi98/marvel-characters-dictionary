import styles from "../css/screen/Detail.module.css";

function CharDetail({ name, thumbnailPath, series }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{name}</h1>
      </div>
      <div className={styles.content}>
        <img
          src={`${thumbnailPath}/standard_fantastic.jpg`}
          alt={name}
          className={styles.coverImg}
        />
        <div>
          <span
            className={styles.seriesNumber}
          >{`${series.length} Series`}</span>
          <ul className={styles.seriesList}>
            {series.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default CharDetail;
