import Character from "../components/Character";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import headerStyles from "../css/components/Header.module.css";
import homeStyles from "../css/screen/Home.module.css";

const IMGNA = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    const json = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
      )
    ).json();
    const charactersList = json.data.results.filter(
      (char) => char.thumbnail.path !== IMGNA
    );
    setCharacters(charactersList);
    setLoading(false);
  };
  useEffect(() => {
    getCharacters();
  }, []);
  console.log(characters);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>
            <Link to="/" className={headerStyles.container}>
              <span className={headerStyles.marvel}>marvel</span>
            </Link>
          </div>
          <div className={homeStyles.container}>
            {characters.map((char) => (
              <Character
                id={char.id}
                key={char.id}
                thumbnailPath={char.thumbnail.path}
                name={char.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
