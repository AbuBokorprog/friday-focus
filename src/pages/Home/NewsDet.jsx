// import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsDet = () => {
  const { _id } = useParams();
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
          <div className="flex justify-start items-center gap-4">
            <img
              src={singleNews?.author_img}
              alt={singleNews?.author_name}
              className="w-12 h-12 rounded-full"
            />
            <h4 className="">{singleNews?.author_name}</h4>
            <p>{singleNews?.created_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDet;
