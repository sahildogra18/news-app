import React from "react";
import img from "../assets/react.svg";

function NewsItem({ title, description, src, url }) {
  return (
    <div className="col-md-4">
      <div className="card news-card">
        <img
          src={src ? src : img}
          className="card-img-top news-img"
          alt="news"
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">{description}</p>
          <a
            href={url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
