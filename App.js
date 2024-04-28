import HashMap from "./HashMap.js";

let mapa = new HashMap();

console.log('**** Prueba claves # HASH ****')
console.log(mapa.hash('Bulbasaur'));
console.log(mapa.hash('Ivysaur'));
console.log(mapa.hash('Venusaur'));

console.log(mapa.hash('Squirtle'));
console.log(mapa.hash('Wartortle'));
console.log(mapa.hash('Blastoise'));

console.log(mapa.hash('Charmander'));
console.log(mapa.hash('Charmeleon'));
console.log(mapa.hash('Charizard'));

mapa.set('001','Bulbasaur');
mapa.set('002','Ivysaur');
mapa.set('003','Venusaur');

console.log('Prueba metodo Get');
console.log(mapa.get('001'));
console.log(mapa.get('002'));
console.log(mapa.get('003'));

console.log('Metodo HAS');
console.log(mapa.has('001'));
console.log(mapa.has('002'));
console.log(mapa.has('003'));

console.log('Metodo REMOVE y LENGTH')
mapa.set('004','Squirtle');
console.log(mapa.has('004'));
console.log(mapa.length());
console.log(mapa.remove('004'));
console.log(mapa.has('004'));
console.log(mapa.length());

console.log('Metodo Values');
console.log(mapa.values());

console.log('Metodo Entries');
console.log(mapa.entries());


