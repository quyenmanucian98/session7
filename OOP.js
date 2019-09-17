let Mobile = function () {

    this.battery = 100;
    this.inbox = [];
    this.outbox = [];
    this.message = "";

    this.writeMessage = function (value) {
        this.message = value;
    };
    this.sendMessage = function (mobile) {
        this.outbox.push(this.message);
        mobile.reveiceMessage(this.message);
        this.decreseBattery();
    };
    this.reveiceMessage = function (message) {
        this.inbox.push(message);
    };
    this.getBattery = function () {
        return this.battery;
    };
    this.decreseBattery = function () {
        this.battery--;
    }
};
let nokia = new Mobile("nokia");
let iphone = new Mobile("iphone");
display();

function sendMessages(mobile1, mobile2) {
    mobile1.sendMessage(mobile2);
    display();
}

function display() {
    document.getElementById('nokiaTo').innerHTML = showMessage(nokia.inbox);
    document.getElementById('iphoneTo').innerHTML = showMessage(iphone.inbox);
    document.getElementById('nokiaFrom').innerHTML = showMessage(nokia.outbox);
    document.getElementById('iphoneFrom').innerHTML = showMessage(iphone.outbox);
    document.getElementById('nokia').value = "";
    document.getElementById('iphone').value = "";
    document.getElementById('batteryNokia').innerHTML = nokia.getBattery();
}

function showMessage(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + "<br>";

    }

    return str;

}
