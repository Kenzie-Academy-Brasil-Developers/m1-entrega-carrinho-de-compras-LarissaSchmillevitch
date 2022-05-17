const productsCart = [
    {
        id: 1,
        name: "Uva Cimson",
        price: 44.99
    },

    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },

    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },

    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },

    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    }
]

const tagMain = document.createElement("main")
const tagLista = document.createElement("ul")
const body = document.querySelector("body")
const section = document.createElement("section")

body.appendChild(tagMain)


function criarCardProdutos(produto){

    const nome = productsCart.name
    const preco = productsCart.price
    const tagTitulo = document.createElement("h1")
    const productsLi= document.createElement("li")
    const tagNome = document.createElement("span")
    const tagPreco = document.createElement("span")

    tagNome.innerText = produto.name
    tagPreco.innerHTML = `R$${produto.price}`

    tagMain.appendChild(tagLista)
    tagMain.appendChild(tagTitulo)
    tagLista.appendChild(productsLi)
    productsLi.appendChild(tagNome)
    productsLi.appendChild(tagPreco)

    return productsLi

}


let soma = 0
function listarProdutos(listaProdutos){
    for(let i=0; i<listaProdutos.length; i++){
       const produto = listaProdutos[i]

       const cardProdutos = criarCardProdutos(produto)
       tagLista.appendChild(cardProdutos)
       //listaProdutos.push("Total", soma)
    }
    somaPrecos(listaProdutos)
}

listarProdutos(productsCart)

function somaPrecos(listaProdutos){
for(let i=0; i<listaProdutos.length; i++){
    soma+=listaProdutos[i].price
 }
}

const valorTotal= document.createElement("h5")
valorTotal.innerText= "Total:" + soma

tagMain.appendChild(valorTotal)

console.log(soma)

tagMain.appendChild(section)
let button = document.createElement("button")
button.innerText = "Finalizar"

//section.appendChild(soma)
section.appendChild(button)

/*
<body>
    <main>
        <h1>Virtual Market</h1>
        <ul>
            <p>Item Valor</p>
            <li><strong>Uva Crimson</strong> R$44.99</li>
            <li><strong>Vinho Canção</strong> R$17.98</li>
            <li><strong>Água de coco</strong> R$8.99</li>
            <li><strong>Mamão</strong>R$9.98 </li>
            <li><strong>Água tônica</strong> R$17.98</li>
            <li>Total R$99.98</li>
        </ul>
        <button>Finalizar compra</button>

    </main>
</body>
*/
