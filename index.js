

class Person {
    constructor(name) {
        this.name = name;
    }
}


function foo(value) {
    // value += '!!';
    value *= 10;
    // 

    return value;
}

function bar(value) {
    value.name += '!!';
}



let a = 'mariele';

const b = {
    name: 'mariele'
}

const c = new Person('leonardo')
foo(a)
bar(b)
bar(c)

console.log(a)
console.log(b.name)
console.log(c.name)