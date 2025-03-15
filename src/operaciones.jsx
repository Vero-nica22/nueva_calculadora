class Operacion {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  sumar() {
    return this.num1 + this.num2;
  }

  restar() {
    return this.num1 - this.num2;
  }

  multiplicar() {
    return this.num1 * this.num2;
  }

  dividir() {
    if (this.num2 === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return this.num1 / this.num2;
  }
}

export default Operacion;
