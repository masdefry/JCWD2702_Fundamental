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

    random(){
        return (Math.floor(Math.random() * 10)) % 2 === 0 // === 0 : GENAP(TRUE) : GANJIL(FALSE)
    }

    getRandomItem(){
        const item1 = { health: 0, power: 10 }
        const item2 = { health: 10, power: 0 }
        const randomResult = this.random()
        if(randomResult === true) return item1 // {health, power}
        if(randomResult === false) return item2 // {health, power}
    }

    start(){
        if(true){
            // player2 first
            let playerHit = this.player2
            let played = 'player2'
          
            while(playerHit.health > 0){
                
                console.log(`${played}`)
                const {health, power} = this.getRandomItem()

                // GET RANDOM ITEM
                if(health) playerHit.health = playerHit.health + health
                if(power) playerHit.power = playerHit.power + power 

                // HIT
                if(played === 'player2'){
                    this.player1.health = this.player1.health - playerHit.power
                    playerHit = this.player1
                    played = 'player1'
                }else{
                    this.player2.health = this.player2.health - playerHit.power
                    playerHit = this.player2
                    played = 'player2'
                }
                console.log(`${health}, ${power}`)
                console.log(player1)
                console.log(player2)
            }

            if(this.player1.health > this.player2.health){
                console.log('Player-1 Menang')
            }else{
                console.log('Player-2 Menang')
            }
        }

        // return {
        //     player1: this.player1,
        //     player2: this.player2
        // }
    }
}

let player1 = new Player('AAA')
let player2 = new Player('BBB')

let startShootingGame = new ShootingGame(player1, player2)
startShootingGame.start()
// console.log(startShootingGame)
