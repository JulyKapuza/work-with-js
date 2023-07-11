//=========== FETCH

const urlAPI = 'https://jsonplaceholder.typicode.com/posts';

/* Simple example
fetch(urlAPI)
  .then(res => {
    return res.json();
  })
  .then(posts => console.log(posts))
  .catch(err => console.log(err))
*/

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`${urlAPI}/${id}`)
      .then(resp => resp.json())
      .then(post => resolve(post))
      .catch(err => reject(err));
  });
}

getPost(25).then(post=> console.log(post))

function getPost2(id) {
  return fetch(`${urlAPI}/${id}`)
    .then(resp => resp.json())
}

getPost2(5).then(post=> console.log(post)).catch(err => console.log(err))