// Add your code here
function submitData(name, email){
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'

        },
        body: JSON.stringify({
            //pass in obj key arguments
            name,
            email
        }),
    })
    .then(response => response.json())
    .then(object => {
        let id = object["id"]
        const body = document.querySelector("body")
        const idDiv = document.createElement("div")
        idDiv.textContent = id
        body.appendChild(idDiv)
    })
    .catch(error => {
        const body = document.querySelector("body")
        const errorDiv = document.createElement("div")
        errorDiv.textContent = error.message
        body.appendChild(errorDiv)
    })
}