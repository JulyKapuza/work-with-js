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


/* teacher example
  const apiURL = "https://jsonplaceholder.typicode.com";
    // DOM Elements
    const usersListEl = document.querySelector(".users-list");
    const userInfoEl = document.querySelector(".user-info");

    // Events
    usersListEl.addEventListener("click", onUserClickHandler);

    // Event handlers
    function onUserClickHandler(e) {
      e.preventDefault();

      if (e.target.dataset.userId) {
        getUserHTTP(e.target.dataset.userId, onGetUserInfoCallback);
      }
    }

    // HTTP Functions
    function getUsersHTTP(cb) {
      const xhr = new XMLHttpRequest();

      xhr.open("GET", `${apiURL}/users`);

      xhr.addEventListener("load", () => {
        console.log(xhr);
        if (xhr.status !== 200) {
          console.log("Error", xhr.status);
          return;
        }

        const res = JSON.parse(xhr.responseText);
        cb(res);
      });

      xhr.send();
    }

    function onGetUsersCallback(users) {
      if (!users.length) {
        return;
      }

      renderUsersList(users);
      console.log(users);
    }

    function getUserHTTP(id, cb) {
      const xhr = new XMLHttpRequest();

      xhr.open("GET", `${apiURL}/users/${id}`);

      xhr.addEventListener("load", () => {
        console.log(xhr);
        if (xhr.status !== 200) {
          console.log("Error", xhr.status);
          return;
        }

        const res = JSON.parse(xhr.responseText);
        cb(res);
      });

      xhr.send();
    }

    function onGetUserInfoCallback(user) {
      if (!user.id) {
        console.log("User not found");
        return;
      }

      renderUserInfo(user);
    }

    // Render functions
    function renderUsersList(users) {
      let fragment = users.reduce((acc, user) => {
        return acc + userListItemTemplate(user);
      }, "");

      usersListEl.insertAdjacentHTML("afterbegin", fragment);
    }

    function renderUserInfo(user) {
      userInfoEl.innerHTML = "";

      const template = userDetailedInfoTemplate(user);

      userInfoEl.insertAdjacentHTML("afterbegin", template);
    }

    // Template functions
    function userListItemTemplate(user) {
      // На каждый элемент списка мы устанавливаем атрибут data-user-id что бы потом по нему получить информацию о пользователе
      return `
      <button type="button" class="list-group-item list-group-item-action" data-user-id="${user.id}">
        ${user.name}
      </button>
      `;
    }

    function userDetailedInfoTemplate(user) {
      return `
      <div class="card border-dark mb-3">
        <div class="card-header">${user.name}</div>
        <div class="card-body text-dark">
          <h5 class="card-title">${user.email}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Nickname:</b> ${user.username}</li>
            <li class="list-group-item"><b>Website:</b> ${user.website}</li>
            <li class="list-group-item"><b>Company:</b> ${user.company.name}</li>
            <li class="list-group-item"><b>City:</b> ${user.address.city}</li>
          </ul>
        </div>
        <div class="card-footer bg-transparent border-dark">Phone: ${user.phone}</div>
      </div>
      `;
    }

    // Init App
    getUsersHTTP(onGetUsersCallback); 
    */