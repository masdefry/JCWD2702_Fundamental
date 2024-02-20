class Player{
    name = '';

    constructor(name, health = 100, power = 10){
        this.name = name; 
        this.health = health;
        this.power = power;
    }

    damage(power){
        this.health = this.health - power
    }

    showStatus(){
        return `${this.name} = Health: ${this.health} & Power ${this.power}`
    }
}

class ShootingGame{
    constructor(player1, player2){
        this.player1 = player1 
        this.player2 = player2
    }

    getRandomItem(){
        const oddOrEven = (Math.floor(Math.random() * 10)) % 2 === 0 // === 0 : GENAP(TRUE) : GANJIL(FALSE)

        const item1 = { health: 0, power: 10 }
        const item2 = { health: 10, power: 0 }

        if(oddOrEven === true) return item1 
        if(oddOrEven === false) return item2
    }

    start(){
        const oddOrEven = (Math.floor(Math.random() * 10)) % 2 === 0 // === 0 : GENAP(TRUE) : GANJIL(FALSE)
        
        if(oddOrEven === true){
            // player2 first
            console.log(this.getRandomItem()) 
        }else{
            // player1 first
            console.log(this.getRandomItem()) 
        }
    }
}

let player1 = new Player('AAA')
let player2 = new Player('BBB')

let startShootingGame = new ShootingGame(player1, player2)
startShootingGame.start()
console.log(startShootingGame)
