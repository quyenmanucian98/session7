let Apple = function (weight) {
    this.weight = weight;
    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (value) {
        this.weight = value;
    };
    this.decreaseApple = function () {
        this.weight--;
    }

};
let Person = function (name, gender, weight, said) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.said = said;

    this.getName = function () {
        return this.name;
    };
    this.setName = function (value) {
        this.name = value;
    };
    this.getGender = function () {
        return this.gender;
    };
    this.setGender = function (value) {
        this.gender = value;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (value) {
        this.weight = value;
    };
    this.getSaid = function () {
        return this.said;
    };
    this.setSaid = function (value) {
        this.said = value;
    };
    this.PersonIncrease = function () {
        this.weight++;
    }
};
let apple = new Apple(10);
let adam = new Person("Adam", "Male", 69, "Hi! I'm Adam");
let eva = new Person("Eva", "female", 40, "Hi! I'm Eva");
display();

function EatAnApple(name) {
    apple.decreaseApple();
    name.PersonIncrease();
    console.log(apple.getWeight());
    console.log(name.getWeight());
    if (apple.getWeight() <= 0) {
        alert("Hết táo rồi")
    }
    display();
}

function display() {
    document.getElementById('weightApple').innerHTML = "Apple: " + apple.getWeight();
    document.getElementById('weightAdam').innerHTML = "Adam: " + adam.getWeight();
    document.getElementById('weightEva').innerHTML = "Eva: " + eva.getWeight();
}