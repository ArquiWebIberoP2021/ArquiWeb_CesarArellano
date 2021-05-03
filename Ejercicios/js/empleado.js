class Empleado {

  nombreEmpleado;
  edadEmpleado;
  comisionEmpleado;
  #sueldoEmpleado = 12000;

  constructor(nombre, edad, comision) {
    this.nombreEmpleado = nombre;
    this.edadEmpleado = edad;
    this.comisionEmpleado = (1 + comision * 0.1);
  }

  pagoTotal() {
    return this.#sueldoEmpleado * this.comisionEmpleado;
  }
}

const cesar = new Empleado("César", 21, 0);
console.log(cesar.pagoTotal());
console.log(cesar.sueldoEmpleado);