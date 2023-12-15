import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllNews = ({ searchQuery }) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiUrl = searchQuery
      ? `https://hn.algolia.com/api/v1/search?query=${searchQuery}`
      : "https://hn.algolia.com/api/v1/search?query=test";

    setLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setNews(data?.hits);
        setLoading(false);
      });
  }, [searchQuery]);

  return (
    <div>
      {loading ? (
        <p className="mx-auto">Loading....</p>
      ) : searchQuery ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-6">
          {news.map((n) => (
            <div key={n.objectID}>
              <Link to={`/news/${n.objectID}`}>
                <div className="card w-96 h-52 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{n.title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    {/* <div className="card-actions justify-between">
                      <a className="btn" href={n.url}>
                        View
                      </a>
                      <Link to={`/news/${n.objectID}`} className="btn">
                        Details
                      </Link>
                    </div> */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-6">
          {news.slice(0, 10).map((n) => (
            <div key={n.objectID}>
              <Link to={`/news/${n.objectID}`}>
                <div className="card w-96 h-52 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{n.title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllNews;
