// import React from "react";

import { useEffect, useState } from "react";

const FeatureNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-4xl">Feature News</h2>
      {news.map((n) => (
        <div key={n._id}>
          <div className="card my-2 w-96 card-side bg-base-100 shadow-xl">
            <img src={n.image} alt="Movie" className="w-32" />
            <div className="card-body">
              <h2 className="card-title">{n.title}</h2>
              <div className="flex justify-start items-center gap-4">
                <img
                  src={n.author_img}
                  alt={n.author_name}
                  className="w-8 h-8 rounded-full"
                />
                <h4 className="">{n.author_name}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureNews;
