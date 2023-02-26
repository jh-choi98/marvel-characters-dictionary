import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/components/Character.module.css";

function Character({ id, thumbnailPath, name }) {
  return (
    <div>
      <Link to={`/character/${id}`} className={styles.container}>
        <img
          src={`${thumbnailPath}/portrait_xlarge.jpg`}
          alt={name}
          className={styles.coverImg}
        />
        <span className={styles.name}>{name}</span>
      </Link>
    </div>
  );
}

Character.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnailPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Character;
