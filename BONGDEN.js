function drawLamp(x,y) {
    if(switchbutton.getStatus()){
        turnOn1(x,y);
    }else if (!switchbutton.getStatus()){
        tunrOff1(x,y);
    }
}
function turnOn1(x, y) {
    let pen = document.getElementById('myCanvas').getContext("2d");
    pen.beginPath();
    pen.arc(x, y, 200, 0, Math.PI * 2);
    pen.fillStyle = "yellow";
    pen.fill();
    pen.strokeStyle = "yellow";
    pen.stroke();
}

function tunrOff1(x, y) {
    let pen = document.getElementById('myCanvas').getContext("2d");
    pen.beginPath();
    pen.arc(x, y, 200, 0, Math.PI * 2);
    pen.fillStyle = "white";
    pen.fill();
    pen.strokeStyle = "black";
    pen.stroke();
}

let SwitchButton = function (status) {
    this.status = status;
    this.lamp = ElectricLamp;
    this.getStatus = function () {
        return this.status;
    };
    this.setStatus = function (value) {
        this.status = value;
    };
    this.setSwitchOn = function () {
        this.setStatus(true);
        this.lamp.turnOn();
    };
    this.setSwitchOff = function () {
         this.setStatus(false);
         this.lamp.turnOff();
    };
    this.setConnect = function (value) {
        this.lamp = value;
    }

};

let ElectricLamp = function (status,x,y) {
    this.status = status;
    this.getStatus = function () {
        return this.status;
    };
    this.setStatus = function (value){
        this.status = value;
    };
    this.turnOn = function () {
        this.setStatus(true);
        drawLamp(x,y);
    };
    this.turnOff = function () {
        this.setStatus(false);
        drawLamp(x,y);
    };

};
let switchbutton = new SwitchButton(false);
let lamp1 = new ElectricLamp(false,600,300);
switchbutton.setConnect(lamp1);


function connect() {
    if (switchbutton.getStatus()){
        switchbutton.setSwitchOff();
    }else if (!switchbutton.getStatus()){
        switchbutton.setSwitchOn()
    }
}