const fs = require('fs');

let file = fs.readFileSync('new 1.txt', 'utf8');
console.log('file\n', file);

let splitted = file.split('\n');
console.log('\nsplitted\n', splitted);

let mapped = splitted.map((line) => {
    return line.replace('\r','').split('\t');
})
console.log('\nmapped\n', mapped);

let reduced = mapped.reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3]
    });
    return customers;
}, {})
console.log('\nreduced\n', reduced);

console.log('\nJSON\n', JSON.stringify(reduced, null, 2));