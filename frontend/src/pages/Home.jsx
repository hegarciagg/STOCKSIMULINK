import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import m_correlation from "../assets/Images/m-correlation.png";
import frontera_eficiente from "../assets/Images/fronteraeficiente.png";
import min_variance from "../assets/Images/min_varianza  .png";
const stocks = [
  "CIB",
  "EC",
  "GLD",
  "GOOGL",
  "IRBO",
  "MSFT",
  "QCOM",
  "RTX",
  "SCHH",
  "SOXX",
  "TSM",
  "VNQ",
  "VOO",
];

function SimulationPage() {
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [customStock, setCustomStock] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numSimulations, setNumSimulations] = useState(1);
  // Estado para los resultados (placeholder para el ejemplo)
  const [results, setResults] = useState(null);

  const handleCheckboxChange = (stock) => {
    setSelectedStocks((prevSelectedStocks) =>
      prevSelectedStocks.includes(stock)
        ? prevSelectedStocks.filter((s) => s !== stock)
        : [...prevSelectedStocks, stock]
    );
  };

  const handleSimulate = () => {
    // Lógica para realizar la simulación y generar resultados
    // setResults(simulationResults);
  };

  return (
    <div className="simulation-page flex flex-col md:flex-row">
      <div className="md:w-1/2 p-5 space-y-6">
        <h1 className="text-4xl font-bold mb-8">Simulador de Bolsa</h1>

        <div className="stock-selection grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
          {stocks.map((stock) => (
            <label
              key={stock}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedStocks.includes(stock)}
                className="form-checkbox rounded text-orange-500 focus:ring focus:ring-orange-300"
                onChange={() => handleCheckboxChange(stock)}
              />
              <span className="text-gray-700">{stock}</span>
            </label>
          ))}
        </div>

        <div className="custom-stock mb-4">
          <input
            type="text"
            value={customStock}
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            onChange={(e) => setCustomStock(e.target.value)}
            placeholder="Adiciona otra acción"
          />
        </div>

        <div className="date-selection flex space-x-4 mb-6">
          <DatePicker
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <DatePicker
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>

        <div className="simulation-inputs mb-6">
          <input
            type="number"
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            value={numSimulations}
            onChange={(e) => setNumSimulations(e.target.value)}
            placeholder="Número de simulaciones"
          />
        </div>

        <button
          onClick={handleSimulate}
          className="w-full md:w-auto btn bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors px-6 py-3"
        >
          Simular
        </button>
      </div>
      <div className="md:w-1/2 p-5 space-y-6">
        <h2 className="text-xl font-semibold text-center">
          Resultados simulación{" "}
        </h2>
        <img src={m_correlation} alt="" className="rounded-lg shadow-xl" />
        <h2 className="text-xl font-semibold text-center">
          Frontera Eficiente
        </h2>
        <img
          src={frontera_eficiente}
          alt=""
          className=" px-10 w-3/5 rounded-lg shadow-xl"
        />
        <h2 className="text-xl font-semibold text-center">
          Portafolios Eficientes
        </h2>
        <img
          src={min_variance}
          alt=""
          className=" px-20 rounded-lg shadow-xl"
        />
      </div>
      <div className="results mt-8">
        {/* Componentes o elementos para mostrar los resultados de la simulación */}
        {results && (
          <>
            {/* Componentes para visualizar la matriz de correlación y la frontera eficiente */}
          </>
        )}
      </div>
    </div>
  );
}

export default SimulationPage;
