const obj = {
    foo: {
        bar : 14,
    },
} as const


// obj.foo.bar = 15; won't let us change it
// It makes the insides of the const unchangabel



interface Pica {
    topping: string;
}

const pica : Readonly<Pica> = {
    topping: "salami",
}

// pica.topping = "cheese"
// Protects the atributes of types


// The immutability of of objects, types and variables is very important when we don't want data to change and we do not allow for change to happen.