import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatureNews from "../../Component/FeatureNews/FeatureNews";

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
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid lg:grid-cols-8 mx-auto gap-10">
          <aside className="lg:col-span-3 mx-auto">
            <FeatureNews />
          </aside>
          <div className="grid lg:col-span-5 gap-2 w-80 lg:w-full grid-cols-1 lg:grid-cols-2 mx-auto">
            {news.slice(0, 10).map((n) => (
              <div key={n.objectID} className="">
                <Link to={`/news/${n.objectID}`} className="">
                  <div className="card  lg:w-80 h-48 my-4 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{n.title}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllNews;
