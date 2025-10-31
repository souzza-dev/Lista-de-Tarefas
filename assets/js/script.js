// mapeamento
const tarefaInput = document.querySelector('#tarefa');
const botao = document.querySelector('#botao')
const lista = document.querySelector('ul')

botao.addEventListener('click', () => {
    event.preventDefault()
    const tarefa = tarefaInput.value;

    if(!tarefa.trim()){
        alert('digite alguma tarefa')
    }
    else{
        const span = document.createElement('span')
        span.classList = 'item';

        const SpanBotoes = document.createElement('span')
        SpanBotoes.classList = 'SpanBotoes'

        const li = document.createElement('li')
        li.textContent = tarefa;
    
        const check = document.createElement('input')
        check.classList = 'checkbox';
        check.type = 'checkbox';

        const checkInput = document.createElement('span')
        checkInput.classList = 'checkInput'

        const botaoRemover = document.createElement('button')
        botaoRemover.classList = 'botaoRemover'
        botaoRemover.textContent = '🗑';
        botaoRemover.style.fontWeight = 'bolder';
        botaoRemover.style.fontSize = '20px'

        const botaoEditar = document.createElement('button')
        botaoEditar.classList = 'botaoEditar';
        botaoEditar.textContent = '✏'


        // Funcoes

        // Check
        check.addEventListener('click', () => {
            if (check.checked){
                li.style.textDecoration = 'line-through';
            }
            else{
                li.style.textDecoration = 'none';
            }
        })

        // BotaoRemover
        botaoRemover.addEventListener('click', () => {
            lista.removeChild(span)
        })

        // BotaoEditar
        botaoEditar.addEventListener('click', () => {
            
        })


        // colocando no html
        SpanBotoes.appendChild(botaoEditar)
        SpanBotoes.appendChild(botaoRemover)

        checkInput.appendChild(check)
        checkInput.appendChild(li)

        span.appendChild(checkInput)
        span.appendChild(SpanBotoes)
        lista.appendChild(span)
    }
})