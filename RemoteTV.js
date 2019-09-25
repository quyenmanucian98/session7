let Remote = function (turnOnTV, turnOffTV, buttonchangechannel) {
    this.changebutton = buttonchangechannel;
    this.turnOnTV = turnOnTV;
    this.turnOffTV = turnOffTV;
    this.getButtonchangechannel = function () {
        return this.changebutton;
    };
    this.setButtonchangechannel = function (value) {
        this.changebutton = value;
    };
    this.getTurnonTV = function () {
        return this.turnonTV;
    };
    this.setTurnonTV = function (value) {
        this.turnOnTV = value;
    };
    this.getTurnOffTV = function () {
        return this.turnOffTV;
    };
    this.setTurnOffTV = function (value) {
        this.turnoffTV = value;
    };
};

let Tivi = function (channelisplaying, volumenow) {
    this.channelisplaying = channelisplaying;
    this.volumenow = volumenow;

    this.getChannelisplaying = function () {
        return this.channelisplaying;
    };
    this.setChannelisplaying = function (value) {
        this.channelisplaying = value;
    };
    this.getVolumenow = function () {
        return this.volumenow
    };
    this.setVolumenow = function (value) {
        this.volumenow = value;
    };
    this.UpVolum = function () {
        this.volumenow++;
    };
    this.DownVolume = function () {
        this.volumenow--;
    }
};

let remote = new Remote();
let tivi = new Tivi("Sport TV", 75);
display();
document.getElementById('show').value = tivi.channelisplaying;

function ontivi() {
    display();
}

function offtivi() {
    document.getElementById('volume').innerHTML = "";
    document.getElementById('show').value = "";
}

function changeChannel() {
    let channel = Number(prompt('Kênh bạn muốn mở'));
    document.getElementById('show').value = "Kênh " + channel;
}

function upVolume() {
    tivi.UpVolum();
    display();
}

function downVolume() {
    tivi.DownVolume();
    display();
}

function display() {
    document.getElementById('volume').innerHTML = "Volume:" + tivi.getVolumenow();
}

