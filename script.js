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
        <img class="w-full" src=${user.avatar_url} alt=${user.name}>
        <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">${user.name ? user.name : "this user has no name"}</div>
        <p class="text-gray-700 text-base">${user.bio}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">followers: ${user.followers}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${user.following}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${user.public_repos}</span>
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


