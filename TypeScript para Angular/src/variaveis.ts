// tipos primitivos
let ligado: boolean = false
let nome: string = "gustavo"
let idade: number = 30
let altura: number = 1.9

// tipos especiais
let nulo : null = null
let indefinido : undefined = undefined

// tipos abrangentes
let retorno: void 
let qualquerTipo: any = true 

// objeto sem previsibilidade
let produto:object = {
    name:"gustavo",
    cidade: "SP",
    idade: 23
}

// objeto tipado com previsibilidade
type ProdutoLoja = {
    nome: string,
    preco: number,
    unidades: number
}

let meuProduto: ProdutoLoja ={
    nome: "Tenis",
    preco: 89.99,
    unidades: 5
}

// arrays
let dados : string[] = ["Gustavo", "ana", "adiano"]
let dados2: Array<string> = ["Gustavo", "ana", "adiano"]

//arrays de multi tipos
let infos: (string | number)[] = ["Gustavo", 23, "Felipe", 30]

// Tuplas
let boleto:[string, number, number] = ["Agua conta", 199.90, 324231423]

// arrays metodos mesmo do JavaScript
dados.pop()

// datas
let aniversario:Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString())
