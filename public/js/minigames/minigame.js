
/**
 * Contains minigame session info and fundamental functions
 * @constructor
 * @param {number} instanceID id of minigame instance
 * @param {Socket} socket client's instance of Socket.io
 * @param {Element} canvas canvas to render stuff to
 */

class Minigame{
    constructor(instanceID, socket, canvas){
        this.instanceID = instanceID;
        this.socket = socket;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.gameData;

        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        this.handleServerInput = this.handleServerInput.bind(this);
        this.getGameData = this.getGameData.bind(this);
    }

    /**
     * Performs update tasks
     * @param {number} deltaTime deltaTime in milliseconds
     */
    update(deltaTime){
        
    }

    render(){
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }

    /**
     * 
     * Sends data about minigame to server
     * @param {{backgroundData: Object, gameData: Object}} data data to emit through socket
     */
    emitData(data){
        this.socket.emit('clientMinigameData', data);
    }

    handleServerInput(data){
        if(data){
            if(data.hasOwnProperty('gameData')){
                this.gameData = data.gameData;
            }
        }
    }

    getGameData(){
        return this.gameData;
    }

}