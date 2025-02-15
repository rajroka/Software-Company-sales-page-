

// Endpoints:
// Get all posts: GET /posts
// Get a single post: GET /posts/:id
// Create a new post: POST /posts
// Update a post: PUT /posts/:id
// Delete a post: DELETE /posts/:id
"https://jsonplaceholder.typicode.com"

import axios from "axios"

async function getPost(){

    const response =  await axios.get("https://jsonplaceholder.typicode.com/posts")

    return response.data;
}


async function getPostById(id){
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return response.data;
}

export {getPost , getPostById}