import React, { useState } from "react";
import { fetchNews, createPost, updatePost, deletePost } from "./api";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [myTitle, setMyTitle] = useState("");
  const [myDesc, setMyDesc] = useState("");

  // GET NEWS
  const loadNews = async () => {
    const response = await fetchNews();
    setArticles(response.data.articles);
  };

  // ADD NEWS (POST)
  const addMyNews = () => {
    if (!myTitle || !myDesc) {
      alert("Enter both fields");
      return;
    }

    const newArticle = {
      title: myTitle,
      description: myDesc,
      urlToImage: "",
    };

    setArticles([newArticle, ...articles]);
    setMyTitle("");
    setMyDesc("");

    createPost(); // dummy POST
  };

  // EDIT NEWS (PUT)
  const editNews = (index) => {
    const newTitle = prompt("New title?");
    const newDesc = prompt("New description?");
    if (!newTitle || !newDesc) return;

    const updated = [...articles];
    updated[index].title = newTitle;
    updated[index].description = newDesc;

    setArticles(updated);
    updatePost(); // dummy PUT
  };

  // DELETE NEWS
  const removeNews = (index) => {
    setArticles(articles.filter((_, i) => i !== index));
    deletePost(); // dummy DELETE
  };

  return (
    <div className="container">
      <h1>React News App</h1>

      <button onClick={loadNews}>GET NEWS</button>

      <div className="form-box">
        <input
          type="text"
          placeholder="Title"
          value={myTitle}
          onChange={(e) => setMyTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={myDesc}
          onChange={(e) => setMyDesc(e.target.value)}
        ></textarea>
        <button onClick={addMyNews}>ADD NEWS</button>
      </div>

      <div className="grid">
        {articles.map((item, index) => (
          <div className="card" key={index}>
            {item.urlToImage && <img src={item.urlToImage} alt="" />}
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <button onClick={() => editNews(index)}>EDIT</button>
            <button onClick={() => removeNews(index)}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

