import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/data")
      .then((response) => {
        setArticles(response.data.articles); 
      })
      .catch((error) => {
        console.error("Error fetching articles data:", error);
      });
  }, []);

  return (
    <div className="articles">
      {articles.map((article, index) => (
        <div className="article" style={{ display: "flex", marginBottom: "20px" }} key={index}>
          <div>
            <img src={article.imageUrl} alt={article.title} />
          </div>
          <div className='img-text'>
            <div class="text-num">{"0"+`${index + 1}`}</div>
            <div><strong>{article.title}</strong></div>
            <div>{article.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
