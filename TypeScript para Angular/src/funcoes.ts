//funções
function addNumber(x: number, y: number ): number{
    return x + y
}

function addToHello(name: string): string{
    return `Hello ${name}`
}

let soma: number = addNumber( 4, 7)

console.log(addToHello("Felipe"))

//funções multi tipos

function CallToPhone(phone: number | string): number | string{
    return phone
}

console.log(CallToPhone(1312313123))

// funções Async

async function getDatabase(id: number): Promise<string>{
    return "Gustavo"
}