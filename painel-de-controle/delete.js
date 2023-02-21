fetch('https://soundgarden-api.vercel.app/events')
.then(response => response.json())
.then( data => {
    console.log(data)
})
.catch(error => {
    console.dir(error)
})

fetch('https://soundgarden-api.vercel.app/events/63f414dba63acad41dd27c45')
.then(response => response.json())
.then( data => {
    console.log(data)
})
.catch(error => {
    console.dir(error)
})

// objeto com as informações do evento
const evento = {
    id: '63f4091ba63acad41dd27baf',
    name: nome,
    attractions: [atracoes],
    description: descricao,
    scheduled: new Date().toISOString(),
    number_tickets: parseInt(lotacao),
    poster: 'pai pelo amor de Deus'
}

// fazer requisição http utilizando fetch
fetch('https://soundgarden-api.vercel.app/events/63f414dba63acad41dd27c45', {
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
   
