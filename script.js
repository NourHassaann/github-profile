const APIURL = "http://api.github.com/users";
const main = document.getElementById('main'); 
const form = document.getElementById('form'); 
const search = document.getElementById('search');     

async function getUser (user){
    const resp = await fetch(`${APIURL}/${user}`);
    const respData = await resp.json();
    createUserCard(respData);
}
function createUserCard(user){
    const cardHTML = `
    <div class="max-w-sm mt-4 rounded overflow-hidden shadow-lg">
        <img class="w-full bg-white-200" src=${user.avatar_url} alt=${user.name}>
            <div class="px-6 py-4 bg-purple-200">
            <div class="font-bold text-xl mb-2 ">${user.name ? user.name : "This user has no name"}</div>
            <p class="text-gray-700 text-base">${user.bio ? user.bio : "No bio yet !"}</p>
            </div>
            <div class="px-6 pt-4 pb-2 bg-orange-200">
                <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">Followers: ${user.followers}</span>
                <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">Following: ${user.following}</span>
                <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">Public_repos: ${user.public_repos}</span>
            </div>
    </div>
    `
    main.innerHTML = cardHTML;
}
function myFunction() {
    alert("Page is loaded");
  }
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = search.value;
        if(user){
            getUser(user);
            search.value ="";
        }
});


