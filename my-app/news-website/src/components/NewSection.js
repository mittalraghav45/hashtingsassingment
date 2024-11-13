import {React,useState,useEffect} from "react";
import axios from 'axios'; 
import "../App.css"

function NewSection() {

// const navigate= useNavigate();
const[data,setData]=useState('');
const[news,setNewsData]=useState('');

useEffect(() => {
  axios
    .get("http://localhost:3002/data")
    .then((response) => { 
      setData(response.data.mainArticle); 
      setNewsData(response.data.sidebar);  
     
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);

 

  return (
    <div className="content">
      <section className="main-article">
        <img src="/images/image-web-3-desktop.jpg" alt="Web 3.0 illustration" />

        <div className="main-text" style={{ display: "flex" }}>
          <h2 class="new-head-3">{data.title}</h2>
          <span>{data.description} <br />
            <button className="read"><strong>
              READ MORE </strong></button>
          </span>
        </div>
      </section>
      {/* {console.log('news ',news)} */}
   
   
      <div className="sidebar">
      <h1 class="new-head" >New</h1>

        {news.articles ? (
          <ul class="new-head-1">
            {news.articles.map((article, index) => (
              <li key={index}>
                <strong>{article.title}</strong> <br />
                <p className="new-head-2">{article.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>


    </div>
  );
}

export default NewSection;
