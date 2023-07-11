//=========== Async/Await
const urlAPI = 'https://jsonplaceholder.typicode.com/posts';

async function getPost(id) {
  try {
    const response = await fetch(`${urlAPI}/${id}`)
  .then(res =>res.json());
  // const data = await response.json();
  //  console.log(data)
  return response;
  } catch (error) {
    err => console.log(err)
    throw err
  }
  
}

getPost(7)
  .then(data => console.log(data))
  .catch(err => console.log(err));
