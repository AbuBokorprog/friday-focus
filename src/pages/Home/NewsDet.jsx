// import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsDet = () => {
  const { _id } = useParams();
  //   console.log(_id);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

  const singleNews = news.find((n) => n._id === _id);

  return (
    <div className="my-6">
      <div className="card w-full bg-base-100 shadow-xl">
        <img
          src={singleNews?.image}
          alt={singleNews?.title}
          className="w-full max-h-80"
        />
        <div className="card-body">
          <h2 className="card-title">{singleNews?.title}</h2>
          <p>{singleNews?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDet;
