// Classes

// data modifiers ( public, private, protected)
class Character{
    private name?: string
    readonly stregth: number
    protected skill: number

    constructor(stregth: number, skill: number){
        this.stregth = stregth
        this.skill = skill
    }

    public attack(): void{
        console.log(`Attack with ${this.stregth} points`)
    }
}

// character : Super class
// magician :  Subclass
class Magician extends Character{
    magicPoints: number
    constructor(stregth: number, skill: number, magicPoints: number){
        super( stregth, skill)
        this.magicPoints = magicPoints
    }
}

const p1 = new Character(10, 98)
const p2 = new Magician(09, 30, 100)
console.log(p1.attack())


