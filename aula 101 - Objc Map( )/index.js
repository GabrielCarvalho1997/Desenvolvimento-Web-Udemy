const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' },
];

const novasPessoas1 = {};

for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas1[id] = {...pessoa};
};

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

for (const pessoa of novasPessoas.keys()) {
    console.log(pessoa);
}

console.log(novasPessoas1);
console.log(novasPessoas);