// generics
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens)
}

const numArray = concatArray<number[]>([1, 5], [3])
const stringArray = concatArray<string[]>(["Gustavo", "goku"], ["Vegita"])

console.log(stringArray)
console.log(numArray)