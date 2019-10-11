// CODE here for your Lambda Classes

class Person {
    constructor(settings) {
        this.name = settings.name;
        this.location = settings.location;
        this.age = settings.age;
        this.money = settings.money;
        this.wage = settings.wage;
        this.catchPhrase = settings.catchPhrase;
    }

    spendMoney(obj, cost) {
        this.money -= cost;
        console.log(`${this.name} spent ${cost} on a ${obj}. ${this.money} left.`);
    }

    getPaid() {
        this.money += this.wage;
        console.log(`${this.name} earned ${this.wage}! ${this.money} left.`);
        console.log(this.catchPhrase);
    }
}

class Student extends Person {
    constructor(settings) {
        super(settings);
        this.school = settings.school;
        this.track = settings.track;
        this.toDo = settings.toDo;
    }

    doAssignment() {
        if (this.toDo.length > 0) {
            this.toDo.pop();
        }
    }
}

class Instructor extends Person {
    constructor(settings) {
        super(settings);
        this.school = settings.school;
        this.favLanguage = settings.favLanguage;
        this.specialty = settings.specialty;
    }

    giveAssignment(description, student) {
        student.toDo.push(description);
    }
}

class TeamLead extends Instructor {
    constructor(settings) {
        super(settings);
        this.teamName = settings.teamName;
        this.team = settings.team;
    }

    giveAssignment(description, student) {
        if (student === undefined) {
            this.team.forEach(s => s.toDo.push(description));
        }
        else {
            super.giveAssignment(description, student);
        }
    }
}

const person = new Person({
    name: "doug dimmadome",
    location: "dimmsdale",
    age: 40,
    money: 1000000,
    wage: 10000,
    catchPhrase: "owner of the dimmsdale dimmadome"
});
person.spendMoney("parfait", 100000);

const student1 = new Student({
    name: "ben hall",
    location: "america",
    age: 26,
    money: 123456,
    wage: 123,
    catchPhrase: "Ok",
    school: "lambda",
    track: "full stack web PT 11",
    toDo: [],
});
const student2 = new Student({
    name: "ben hall 2",
    location: "america 2",
    age: 26,
    money: 123456,
    wage: 123,
    catchPhrase: "Ok again",
    school: "lambda 2",
    track: "full stack web PT 12",
    toDo: [],
});
const instructor = new Instructor({
    name: "John Smith",
    location: "canada",
    age: 6000,
    money: 1000000000,
    wage: 0,
    catchPhrase: "H̸̡̪̯ͨ͊̽̅̾̎Ȩ̬̩̾͛ͪ̈́̀́͘ ̶̧̨̱̹̭̯ͧ̾ͬC̷̙̲̝͖ͭ̏ͥͮ͟Oͮ͏̮̪̝͍M̲̖͊̒ͪͩͬ̚̚͜Ȇ̴̟̟͙̞ͩ͌͝S̨̥̫͎̭ͯ̿̔̀ͅ",
    school: "Lambda",
    favLanguage: "javascript",
    specialty: "baking",
});
const teamLead = new TeamLead({
    name: "Beethoven",
    location: "Germany",
    age: 50,
    money: 2000,
    wage: 42,
    catchPhrase: "Can you say that again?",
    school: "Lambda",
    favLanguage: "music",
    specialty: "piano",
    teamName: "fortes",
    team: [student1, student2],
});

teamLead.spendMoney("piano", 1000);
teamLead.getPaid();
instructor.giveAssignment("Javascript-IV", student1);
instructor.spendMoney("book", 0.5);
teamLead.giveAssignment("compose piano sonata");
student1.doAssignment();
student2.doAssignment();

console.log(student1);
console.log(student2);
console.log(instructor);
console.log(teamLead);