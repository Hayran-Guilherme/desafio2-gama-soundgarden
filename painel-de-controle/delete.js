const Excluir = document.getElementById('excluir')
Excluir.addEventListener("click", function(event){

event.preventDefault()    

// objeto com as informações do evento
const evento = {
    name: nome,
    attractions: [atracoes],
    description: descricao,
    scheduled: new Date().toISOString(),
    number_tickets: parseInt(lotacao),
    poster: 'pai pelo amor de Deus'
}

// fazer requisição http utilizando fetch
fetch('https://soundgarden-api.vercel.app/events/:id', {
    method: 'DELETE',
    body: JSON.stringify(evento),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (response.ok) {
        //evento deletado com sucesso
        console.log('Evento deletado com sucesso!')
    } else {
        // Erro ao deletado evento
        console.error('Erro ao deletado evento:', response.status)
    }
})
.catch(error => {
    // erro na requisição
    console.dir(error)
})

})
   
