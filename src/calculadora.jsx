import { useState } from "react";
import Operacion from "./operaciones";

const Calculadora = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const ejecutarOperacion = async (tipoOperacion) => {
    console.log("Realizando operación...");
    const operacionNueva = new Operacion(parseFloat(num1), parseFloat(num2));

    try {
      let resultadoOperacion;
      switch (tipoOperacion) {
        case 1:
          resultadoOperacion = operacionNueva.sumar();
          break;
        case 2:
          resultadoOperacion = operacionNueva.restar();
          break;
        case 3:
          resultadoOperacion = operacionNueva.multiplicar();
          break;
        case 4:
          resultadoOperacion = operacionNueva.dividir();
          break;
        default:
          return;
      }
      setResultado(resultadoOperacion);
      console.log("Operación resuelta");
    } catch (error) {
      console.error("Error:", error.message);
      setResultado(error.message);
    }
  };

  return (
    <div className="calculadora">
      <h2 className="Titulo">Calculadora</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
      />
      <div>
        <button onClick={() => ejecutarOperacion(1)}>Sumar</button>
        <button onClick={() => ejecutarOperacion(2)}>Restar</button>
        <button onClick={() => ejecutarOperacion(3)}>Multiplicar</button>
        <button onClick={() => ejecutarOperacion(4)}>Dividir</button>
      </div>
      {resultado !== null && <h3>Resultado: {resultado}</h3>}
    </div>
  );
};

export default Calculadora;
