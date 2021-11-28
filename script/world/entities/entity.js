const Vector2 = require("../physics/vector2.js");
const PhysicsObject = require("../physics/physicsObject.js")

//an Entity represents an object within the world

class Entity extends PhysicsObject{
    constructor(id, name, position = new Vector2(0, 0)){
        super(position);
        this.id = id;
        this.name = name;

        this.setRoom = this.setRoom.bind(this);
    }

    setRoom(newRoom){
        this.room = newRoom;
    }
}

module.exports = Entity;