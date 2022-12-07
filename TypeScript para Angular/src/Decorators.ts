// decorators

// function ExibirNome(target: any){
//     console.log(target)
// }

// @ExibirNome
// class Funcionario{

// }

// @ExibirNome
// class Quincas{

// }

function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Gustavo"})
    }
}


// Attribute decorator

function minLength(length: number){
    return (target: any, key: string) => {
        let _value = target[key]

        const getter = () => "[play]" + _value
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`tamanho menor que ${length}`)
            }else{
                _value = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

class Api {
    @minLength(10)
    name: string

    constructor(name: string){
        this.name = name
    }
}

const api = new Api("usuariosss")
console.log(api.name)