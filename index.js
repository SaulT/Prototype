class Vec {
    constructor(x, y){
        this.x = x
        this.y = y
    }
    mas(vector){
        let aux = new Vec()
        aux.x = this.x + vector.x
        aux.y = this.y + vector.y
        return aux
    }
    menos(vector){
        let aux = new Vec()
        aux.x = this.x - vector.x
        aux.y = this.y - vector.y
        return aux
    }
    get longitud(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
}

// Casos de prueba
console.log(new Vec(1, 2).mas(new Vec(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vec(1, 2).menos(new Vec(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vec(3, 4).longitud);
// → 5