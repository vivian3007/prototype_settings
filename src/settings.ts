import * as PIXI from 'pixi.js'
import { Button } from './button'
import { Game } from './game'

export class Settings {
    private pixiWidth = innerWidth
    private pixiHeight = innerHeight
    private buttonContinue: Button
    private buttonRestart: Button
    private pixi: PIXI.Application
    private game: Game

    constructor() {
        console.log("startmenu")

        // this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight, backgroundColor: 0x00FF00 });
        // document.body.appendChild(this.pixi.view)

        this.buttonContinue = new Button(
            this.pixi.screen.width/2,
            100,
            "Doorgaan")
        this.pixi.stage.addChild(this.buttonContinue)

        this.buttonRestart = new Button(
            this.pixi.screen.width/2,
            200,
            "Opnieuw spelen")
        this.pixi.stage.addChild(this.buttonRestart)

        this.buttonContinue.on("pointerdown", () => this.onClickContinue())
        this.buttonRestart.on("pointerdown", () => this.onClickRestart())
    }

    private onClickContinue() {
        this.buttonContinue.destroy()
        this.buttonRestart.destroy()
    }

    private onClickRestart(){
        this.buttonContinue.destroy()
        this.buttonRestart.destroy()

        // destroy game and make a new one
        new Game()
    }
}

new Settings()