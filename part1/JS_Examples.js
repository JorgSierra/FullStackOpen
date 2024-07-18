let t = [1, -1, 3];

console.log('use of push');
t.push(5);
console.log('length', t.length); // 4 is printed
console.log('array pos 1', t[1]);     // -1 is printed

console.log('\nuse of forEach');
t.forEach(value => {
  console.log(value);  // numbers 1, -1, 3, 5 are printed, each on its own line
});     

console.log('\nuse of concat');
const t2 = t.concat(10);  // creates new array
console.log('concat on new array t2, t1 and t2 printed respectively:');
console.log('t', t);  // [1, -1, 3] is printed
console.log('t2', t2); // [1, -1, 3, 5] is printed

console.log('\nuse of map');
t = [1, 2, 3];

console.log('print new mapped array m1:');
const m1 = t.map(value => value * 2);
console.log(m1);   // [2, 4, 6] is printed

console.log('print new mapped array m2:');
const m2 = t.map(value => '<li>' + value + '</li>');
console.log(m2);

console.log('\ndestructuring assigment');
t = [1, 2, 3, 4, 5];

const [first, second, ...rest] = t;
console.log('first', first);
console.log('second', second);
console.log('rest', rest);

console.log('\ndestructuring object');
let props = {
    name: 'Arto Hellas',
    age: 35,
}
const { name, age, other } = props;
console.log('name', name);
console.log('age', age);
console.log('other', other);

console.log('\nobject literals');
const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
};
  
const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
};

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
};

console.log('obj1 name referenced by dot notation');
console.log(object1.name);         // Arto Hellas is printed
console.log('obj1 age referenced by bracket notation');
const fieldName = 'age';
console.log(object1[fieldName]);    // 35 is printed

console.log('\nobj1 before adding properties on the fly');
object1.address = 'Helsinki';
// This addition has to use bracket notation because of the space character
object1['secret number'] = 12341;

console.log(object1);