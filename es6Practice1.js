
const princesses = [
    { name: 'Rapunzel', age: 18 },
    { name: 'Mulan', age: 16 },
    { name: 'Anna', age: 18 },
    { name: 'Moana', age: 16 }
];


princesses.forEach(function (princess) {
    console.log(`${princess.name}: ${princess.age}`);
});

const names = princesses.map(function (princess) {
    return princess.name;
});
console.log('name: ', names);

const mNames = names.filter(function (name) {
    return name.startsWith('M');
});
console.log("m-names: ", mNames);

const sum = princesses.reduce(function (sum, princess) {
    return sum + princess.age;
}, 0);
const average = sum / princesses.length;

console.log("average age: ", average);


princesses.forEach(princess => console.log(`${princess.name}: ${princess.age}`));
princesses.forEach(princess => console.log(`${princess.name}: ${princess.age}`));

const names = princesses.map(princess => princess.name);
console.log("names: ", names);

const names = princesses.map(princess => princess.name);
console.log('names: ', names);

const names = princesses.map(princes => princess.name);
console.log(`names: `, names);

const mNames = names.filter(name => name.startsWith("M"));
console.log("m-names: ", mNames);

const mNames = names.filter((name) => name.startsWith('M'));
console.log('m-names: ', mNames);

const mNames = names.filter((name) => name.startsWith('M'));
console.log('m-names: ', mNames);