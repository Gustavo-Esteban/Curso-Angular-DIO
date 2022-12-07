// interfaces (types x interface)
type robot = {
    readonly id: number | string,
    name: string,
}

interface robot2{
    id: number | string,
    name: string,
    sayHello(): string
}

const bot: robot = {
    id: 1,
    name: "megaman"
}

const bot2: robot2 = {
    id: 1,
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.")
    }
}

console.log(bot)
console.log(bot2)


class Pessoa implements robot2 {
    id: string | number
    name: string
    
    constructor(id: number | string, name: string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return "Hello"
    }
}

const p = new Pessoa(1, "gutman")
console.log(p.sayHello)