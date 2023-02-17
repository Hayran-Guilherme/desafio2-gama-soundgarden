
const Enviar = document.getElementById('enviar')
Enviar.addEventListener("click", function(event){ 
   
event.preventDefault()

const nome = document.getElementById('nome').value
const atracoes = document.getElementById('atracoes').value
const descricao = document.getElementById('descricao').value
const data = document.getElementById('data').value
const lotacao = document.getElementById('lotacao').value
console.log(nome)
console.log(atracoes)
console.log(descricao)
console.log(data)
console.log(lotacao)

body = {
    "name": nome,
    "atracoes": atracoes,
    "descricao": descricao,
    "data": data,
    "lotacao": lotacao
}
console.log(body)

// objeto com as informações do evento
const evento = {
    name: nome,
    attractions: [atracoes],
    description: descricao,
    scheduled: new Date().toISOString(),
    number_tickets: parseInt(lotacao),
    poster: 'pai pelo amor de Deus'
}


// requisição http utilizando fetch
fetch('https://soundgarden-api.vercel.app/events', {
    method: 'POST',
    body: JSON.stringify(evento),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (response.ok) {
        //evento criado com sucesso
        console.log('Evento criado com sucesso!')
    } else {
        // Erro ao criar evento
        console.error('Erro ao criar evento:', response.status)
    }
})
.catch(error => {
    // erro na requisição
    console.dir(error)
})
})