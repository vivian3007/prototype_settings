// import * as PIXI from 'pixi.js'
// import settingsImage from "./images/settings.png"
// import { Settings } from './settings'

// export class Game {
//     private pixiWidth = 800
//     private pixiHeight = 500
    
//     public pixi: PIXI.Application
//     private loader: PIXI.Loader

//     constructor() {
//         // this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight, backgroundColor: 0x1099bb });
//         // document.body.appendChild(this.pixi.view)

//         this.loader = new PIXI.Loader();
//         this.loader.add('settingsTexture', settingsImage)
//         this.loader.load(()=>this.loadCompleted());
//     }

//     public loadCompleted() {
//         //create ui
//         // this.interface = new UI(this)
//         // this.pixi.stage.addChild(this.interface)
//     }
// }

// let game = new Game()

import * as PIXI from 'pixi.js'
import girlImage from "./images/farmer.png"
import { Application } from 'pixi.js'
import { Girl } from './girl'
 
export class Game{
    pixi: PIXI.Application
    loader: PIXI.Loader
    girl: Girl

    private pixiWidth = 800
    private pixiHeight = 500

    constructor(){
        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight })
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader.add('girlTexture', girlImage)
        this.loader.load(() => this.loadCompleted())
    }

    loadCompleted(){
        for (let i = 0; i < 1; i++) {
            this.girl = new Girl(this.loader.resources["girlTexture"].texture!, this)   
            this.pixi.stage.addChild(this.girl)  
        }

        this.pixi.ticker.add((delta: number) => this.update(delta))    
    }

    update(delta: number){
            this.girl.update(delta)
    }
}

