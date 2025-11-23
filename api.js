import axios from "axios";

// GET NEWS
export const fetchNews = async () => {
  const key = "6ef6f897674545b08c812292eeacff2d";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
  return axios.get(url);
};

// POST
export const createPost = async () => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: "My New Post",
    body: "Dummy POST request",
  });
  alert("POST Successful!");
  return res;
};

// PUT
export const updatePost = async () => {
  const res = await axios.put("https://jsonplaceholder.typicode.com/posts/1", {
    title: "Updated Title",
  });
  alert("PUT Successful!");
  return res;
};

// DELETE
export const deletePost = async () => {
  const res = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
  alert("DELETE Successful!");
  return res;
};
