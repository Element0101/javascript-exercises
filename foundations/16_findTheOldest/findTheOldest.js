const findTheOldest = function(persons) {

    let peopleAge = persons.map(function(person) {
        const d = new Date();
        let currentYear = d.getFullYear();
        if (person.yearOfDeath == undefined) {
            person.age = currentYear - person.yearOfBirth;
        }else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
        return person;
    });
    console.log(peopleAge);
    let sortedList = peopleAge.sort(function (a, b) {
        return (b.age - a.age);
    });
    return sortedList[0];
};

// Do not edit below this line
module.exports = findTheOldest;
