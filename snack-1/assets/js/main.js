const bikes =
[
    {
        nome : "bici da corsa",
        peso : 7
    },
    {
        nome : "bici da passeggio",
        peso : 15
    },
    {
        nome : "bici da montagna",
        peso : 14
    },
    {
        nome : "bici da gravel",
        peso : 11
    },
];

let lightBike = "";
let weight = 100;

for (let i=0; i < bikes.length; i++) {
   const thisBikeWeight = bikes[i].peso;
   if (thisBikeWeight <= weight) {
    lightBike = bikes[i].nome;
    weight = thisBikeWeight;
   }
}

console.log( "Di seguito l'elenco delle bici con il minor peso: " + lightBike + "." );