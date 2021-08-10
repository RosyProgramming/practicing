/*
 Function() constructor
    * expressão new
    *criar um novo objeto
    * this keyword
*/

function Person(name) {
    //this se refere rosy que esta fora
    this.name = name
    // this.walk = function() {
    //     return "andando"
    // }
    this.walk = function() {
        return this.name + " está andando"
    }

    
}

const rosy = new Person("Rosana")
const joao = new Person("Joao")
console.log(rosy.walk())
console.log(joao.walk())