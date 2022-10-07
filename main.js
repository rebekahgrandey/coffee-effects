const coffees = [
    "light colombian roast", "hawaiian dark roast", "guatemalan blend medium roast",
    "dark madagascar blend", "jamaican dark blue", "jamaican medium roast",
    "salvador robusto light"
]

let output = ""

for (const coffee of coffees) {
    if (coffee.includes("light")) {
        output += `I'll have the ${coffee} and drink it black`
    }
    else if (coffee.includes("medium")) {
        output += `I'll have the ${coffee} and add cream only`
    }
    else if (coffee.includes("dark")) {
        output += `I'll have the ${coffee} and add cream and sugar`
    }
    output += "\n"
}

console.log(output)

/*  If it is a light roast, you drink it black. If it is a medium roast, you put cream in it. If it is a dark roast, you put cream and sugar in it. */