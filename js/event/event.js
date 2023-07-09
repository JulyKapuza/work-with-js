const btn = document.querySelector("button");
const container = document.querySelector(".container");
const API = "https://jsonplaceholder.typicode.com/users";

function getUser(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API);

  xhr.addEventListener("load", () => {
    const resp = JSON.parse(xhr.responseText);
    cb(resp);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send();
}

function getUserById(id, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${API}/${id}`);

  xhr.addEventListener("load", () => {
    const resp = JSON.parse(xhr.responseText);
    cb(resp);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send();
}

btn.addEventListener("click", (e) => {
  getUser((resp) => {
    const fragment = document.createDocumentFragment();
    const list = document.createElement("ul");
    list.classList.add("list");
    resp.forEach((user) => {
      const item = document.createElement("li");
      item.classList.add("list-item");
      item.textContent = user.name;
      item.setAttribute("data-id", user.id);
      list.appendChild(item);
      console.log(list);
      fragment.appendChild(list);
    });
    container.appendChild(fragment);
  });
});

let openUser = null;

container.addEventListener("click", (e) => {
  const child = e.target;
  const id = child.dataset.id;
  
  if (child.classList.contains("show")) {
    // Клікнули на вже відкритого користувача - закриваємо
    child.classList.remove("show");
    const wrap = child.querySelector("span");
    wrap.classList.add("hide");
  } else {
    // Закриваємо попередню додаткову інформацію
    if (openUser && openUser !== child) {
      openUser.classList.remove("show");
      const wrap = openUser.querySelector("span");
      wrap.classList.add("hide");
    }

    // Відкриваємо нового користувача
    openUser = child;
    const wrap = document.createElement("span");
    wrap.classList.add("hide");
    getUserById(id, (user)=>{
      console.log(user)
      const username = document.createElement("p");
      username.textContent = user.username;
      wrap.insertAdjacentHTML(
        "beforeend",
        `<ul class="wrap"><li>
        <p><b>Username:</b> ${user.username}</p>
        <p><b>Email:</b> ${user.email}</p> 
        <p><b>City:</b> ${user.address.city}</p> 
        <p><b>Phone:</b> ${user.phone}</p>
        </li></ul>`
      );
      child.appendChild(wrap);
      child.classList.add("show");
      wrap.classList.remove("hide");
        })
 
  }
});