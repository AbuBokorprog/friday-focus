import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { objectID } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/items/${objectID}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setDetails(data);
      });
  }, [objectID]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="my-10">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{details.title}</h2>
              <p>{details.children[2].text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetails;
