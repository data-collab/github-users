// async function showUserAvatar() {
//     // Get github user
//     const githubResponse = await fetch('https://api.github.com/users/gaearon')
//     const githubUser = await githubResponse.json()
//
//     // show user avatar on page
//     const img = document.createElement('img')
//     // <img src="" />
//     img.src = githubUser.avatar_url
//     // <img src="avatar_url" />
//     document.body.append(img)
//
// }

//
// async function f() {
//     try {
//         const response = await fetch('https://no-url')
//         const user = await response.json()
//     } catch (err) {
//         alert()
//     }
// }
//
// f()

// async function sendData() {
//     const user = {
//         name: 'John',
//         surname: "Doe",
//     }
//
//     const response = await fetch('https://some-url', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//
//     let result = await response.json()
//     alert(result.meesage)
// }
//
// sendData()

const form = document.querySelector('#form')
const usersSection = document.querySelector('#users')
const API_BASE_URL = "http://localhost:3000"
let users = []

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch(`${API_BASE_URL}/users`)
    const responseUsers = await response.json()

    users = responseUsers
    renderUsers(users)
})

async function handleSubmit() {
    const name = document.querySelector('#name').value
    const surname = document.querySelector('#surname').value

    const data = {
        name,
        surname
    }

    const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const res = await response.json()
    console.log(res);
}

form.addEventListener('submit', handleSubmit)

function renderUsers(users) {
    let html = ''
    users.forEach(user => {
        html += `
        <div>
        ${user.name}
        </div>
        `
    })

    usersSection.innerHTML = html
}

// დავალება 1
//  დაწერეთ კოდის ფრაგმენტი რომელიც await
//  ის გამოყენებით დაელოდება 5წმ და 5 წამის მერე წაშლის ამ ფოტოს
//  ( დოკუმენტიდან გააქრობს ფოტოს)
// დავალება 2
//    github ის მომხმარებლების დავალების async await ზე გადაწერა
// დავალება 3
// showUserAvatar ფუნქცია გადააკეთეთ try/catch-ზე და ერორის შემთხვვაში ვანახოთ მესიჯი.
