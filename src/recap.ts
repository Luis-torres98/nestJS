const myName = "Luis";

// myName.

const suma = (a: number, b: number) => {
	return a + b;
}

suma(12, 12)

class Persona {

	constructor(private age: number, private name: string) {
		this.age = age;
		this.name = name
	}

	getSummary() {
		return ` My name is ${this.name}, ${this.age}`
	}
}

const luis = new Persona(15, 'Luis');
// luis.getSummary();
