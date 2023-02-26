import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CharDetail from "../components/CharDetail";
import headerStyles from "../css/components/Header.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const getDetail = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setDetail(json.data.results[0]);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, []);

  console.log(detail);
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
          <CharDetail
            name={detail.name}
            thumbnailPath={detail.thumbnail.path}
            series={detail.series.items}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
