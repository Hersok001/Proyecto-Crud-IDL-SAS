export class Ciudad {
    id?: number;
    nombre: string;
    departamento: string;

    constructor(nombre: string, departamento: string){
        this.nombre=nombre;
        this.departamento=departamento;
    }
}

