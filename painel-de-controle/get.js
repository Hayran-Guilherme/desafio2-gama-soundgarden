fetch('https://soundgarden-api.vercel.app/events')
.then(response => response.json())
.then( data => {
    console.log(data)
})
.catch(error => {
    console.dir(error)
})