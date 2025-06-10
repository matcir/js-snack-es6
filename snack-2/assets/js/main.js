const teams = 
[
    {
        nome : "Napoli",
        punti : 0,
        falli : 0
    },
    
    {
        nome : "Inter",
        punti : 0,
        falli : 0
    },
    
    {
        nome : "Atalanta",
        punti : 0,
        falli : 0
    }
];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let thisPoints;
let thisFaults;

for (let i=0; i < teams.length; i++) {
    thisPoints = getRndInteger(1, 114);
    thisFaults = getRndInteger(1, 999);
    teams[i].punti = thisPoints;
    teams[i].falli = thisFaults;
}

const faults = [];

for (let i=0; i < 2; i++) {
    const team = { nome: teams[i].nome, falli: teams[i].falli};
    faults.push(team);
}

console.log(teams);
console.log(faults);