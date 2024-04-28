class HashMap {

  constructor(size = 100) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
    this.contador = 0;
  }


  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % 100;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    this.contador++;
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1]; // Devuelve el valor si la clave existe
      }
    }
    return null; // Devuelve undefined si la clave no existe
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    if (this.has(key)) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1); // aca se elimina el valor de acuerdo a la clave 
          this.contador--;
          return true;                                                           
        }
      }
      
    }
    return false;
  }

  length()
  {
    return this.contador;
  }

  values(){
    const valores = [];
    this.buckets.forEach( cubeta =>{
        cubeta.forEach( par => {
          valores.push(par[1]);
        });
    } );
    return valores;
  }

  entries()
  {
    const valores = [];
    this.buckets.forEach( cubeta =>{
        cubeta.forEach( par => {
          valores.push(par);
        });
    } );
    return valores;
  }



}

export default HashMap;
