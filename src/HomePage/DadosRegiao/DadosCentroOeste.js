import React from "react"
import "../styleLandingPageDesign.css"

function DadosCentroOeste({ currentWeather, bioma }) {
  // Função para determinar a estação com base na data
  function getEstacao(data) {
    const mes = data.getMonth() + 1; // Os meses são indexados a partir de zero (janeiro = 0)
    if (mes >= 3 && mes <= 5) {
      return "Outono";
    } else if (mes >= 6 && mes <= 8) {
      return "Inverno";
    } else if (mes >= 9 && mes <= 11) {
      return "Primavera";
    } else {
      return "Verão";
    }
  }

  // Supondo que currentWeather.max e currentWeather.min são variáveis que contêm os números floats
  var max = currentWeather.max;
  var min = currentWeather.min;
  var media = (max + min) / 2; // Calcula a média e arredonda

  const estacao = getEstacao(new Date()); // Obtém a estação atual com base na data atual

  return (
    <>
      <img
        className="img-centro"
        alt="NorteOverlay"
        src="https://c.animaapp.com/ZUyH8RTL/img/objects-2@2x.png"
      />
      <div className="overlap">
        <div className="text-wrapper-11">Informações da Região</div>
        <div className="text-wrapper-12">Temperatura:</div>
        <div className="text-wrapper-13">
          <p>Media: {media.toFixed(2)}</p>
        </div>
      </div>
      <div className="text-wrapper-14">Estação: {estacao}</div>
      <div className="text-wrapper-15">Informações climaticas:</div>
      <div className="text-wrapper-16">
        <p>Umidade: {currentWeather.humidity}%</p>
      </div>
      <div className="text-wrapper-17"><p>Clima: {currentWeather.weather}</p></div>
      <div className="text-wrapper-19">
        <p>Máxima: {currentWeather.max}</p>
      </div>
      <div className="text-wrapper-20">
        <p>Mínima: {currentWeather.min}</p>
      </div>
      <div className="text-wrapper-21"><p>Bioma: {bioma}</p></div>
    </>
  )
}

export default DadosCentroOeste
