import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({ category }) {
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = "81a76f845026418aba99594938be846d"; // Check if API key is defined
      console.log("API Key:", apiKey); // Debugging step

      if (!apiKey) {
        console.error("API Key is missing!");
        return;
      }

      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

      try {
        let response = await axios.get(url);
        console.log("API Response:", response.data); // Check response
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:");
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container">
      <h2 className="text-center">
        Latest <span className="badge bg-danger text-white fs-4">News</span>
      </h2>
      <div className="row">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default NewsBoard;
