//This example shows to implement a factory function that encapsulates private properties or methids and expose only a set of public properties and methods

function createPerson(name){
    const privateProperties = {};

    const person = {
        setName (name) {
            if(!name) throw new Error('Name is required');
            privateProperties.name = name;
        },
        getName () {
            return privateProperties.name;
        }
    }

    person.setName(name);
    return person;
}



const person = createPerson('Yeison Caicedo');
//We can not access to the object privateProperties or the property name.
console.log(person.getName(), person);