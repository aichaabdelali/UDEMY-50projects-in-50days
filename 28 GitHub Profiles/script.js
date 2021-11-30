const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

function createUser(user) {
  const createHTML = `      
       <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt="${user.login}"
            class="avatar"
          />
        </div>

        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
            ${user.bio}
          </p>

          <ul>
            <li>${user.followers} <strong>followers</strong></li>
            <li>${user.following} <strong>following</strong></li>
            <li>${user.public_repos} <strong>repos</strong></li>
          </ul>

          <div id="repos">
          </div>
        </div>
      </div>`;

  main.innerHTML = createHTML;
}

function createError(msg) {
  const cardHTML = `
  <div class="card">
    <h3>${msg}</h3>
  </div>
  `;

  main.innerHTML = cardHTML;
}

async function getUsers(username) {
  try {
    const { data } = await axios(APIURL + username);
    //axios() = axios.get()

    createUser(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status === 404) {
      createError("No profile with this username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    //axios() = axios.get()

    addRepos(data);
  } catch (error) {
    createError("Problems finding the repos");
  }
}

function addRepos(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUsers(user);

    search.value = "";
  }
});
