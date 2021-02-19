const items = document.querySelector(".items")
const searchInput = document.querySelector("#search")
let usersArray = []
const fetchUsers = () => {
    fetch('https://api.github.com/users')
        .then((response) => {
            response.json()
                .then((users) => {
                    usersArray = users;
                    renderUsers(usersArray)
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
};

const renderUsers = (users) => {
    let output = '';
    users.forEach((user) =>
    {
        console.log(user);
        output +=
         `<tr>
         <td class="py-2 pl-5 border-b border-gray-200 bg-white">
         <div class="flex items-center">
             <div class="flex-shrink-0 w-10 h-10">
                 <img class="w-full h-full rounded-full" src=${user.avatar_url}>
             </div>
             <div class="ml-3">
                 <h1 class="capitalize font-semibold text-base text-gray-900 whitespace-no-wrap">
                     ${user.login}
                 </h1>
             </div>
         </div>
     </td>
     <td class="py-2 text-center border-b border-gray-200 bg-white text-sm">
         <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-gray-200"
             href=${user.html_url}>See profile
         </a>
     </td>
     </tr>`
    });
items.innerHTML = output;
};
searchInput.addEventListener('input', (event)=>{
    const  value = event.target.value.toLowerCase()
    const  newUsers = usersArray.filter(user =>
        user.login.toLowerCase().includes(value));
    renderUsers(newUsers)
})

document.addEventListener("DOMContentLoaded", fetchUsers)