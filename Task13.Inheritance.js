

let Person = {
    constructor: function(name, age) {
        this.name = name;
        this.age = age;
        return this;
    },
    showObjInfo: function (){
        console.log(`Name: ${this.name}, age: ${this.age}`);
    }
}

let Tester = Object.create(Person);
Tester.constructor = function(name, age, skill) {
Person.constructor.apply(this, arguments);
this.skill = skill;
return this;
};
Tester.work = function() {
    console.log(`${this.name} testing`);
};
Tester.showObjInfo = function (){
    Person.showObjInfo.apply(this, arguments);
    console.log(`Skill: ${this.skill}`);
}

module.exports = Tester;