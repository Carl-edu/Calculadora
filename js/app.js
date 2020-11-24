let btn = document.getElementById('add');
let tabela = document.getElementById('corpo');

btn.onclick = () => {
    criarLinha();
};

function criarLinha(){
    let linha = document.createElement('tr');
    
    let ids = ['nome','quantidade','preco','total']

    ids.forEach (i => {
        let input = document.createElement('input');
        input.name = i;
        input.type = 'text';
        input.placeholder = 'Nome';

        if(i == 'total'){
            input.disabled = 'disabled';
            input.placeholder = 'R$ 0.00';
        }
        else if (i == 'quantidade' || i == 'preco'){
            input.placeholder = '';
            input.value = 1;
            input.onkeyup = () => {
                calcular(linha);
            };
        }

        let coluna = document.createElement('td');
        coluna.appendChild(input)

        linha.appendChild(coluna);
    });

    linha.appendChild(botaoApagar(linha));

    tabela.appendChild(linha);
};

let botaoApagar = (l) =>{
    let botao = document.createElement('button');
    botao.classList = 'btn btn-danger mt-2';
    botao.innerHTML = '<h6>X</h6>';
    botao.onclick = () =>{
        l.remove();
    }
    return botao;
}

function calcular(container){

    let quant = parseFloat(container.getElementsByTagName('input')[1].value);
    let preco = parseFloat(container.getElementsByTagName('input')[2].value);
    let resultado = parseFloat(document.getElementById('resultado').value);

    let total = container.getElementsByTagName('input')[3];
    
    total.value = `R$ ${(quant * preco).toFixed(2)}`;

    resultado.value = `R$`;
}

function verTodosValores(){
    
}