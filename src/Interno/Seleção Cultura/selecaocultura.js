import React from "react";
import "./styleselecaocultura.css";
import cafeImage from "../../components/Images/Interno/cafe.jpg";
import laranjaImage from "../../components/Images/Interno/laranja.jpg";
import sojaImage from "../../components/Images/Interno/soja.jpg";
import tabacoImage from "../../components/Images/Interno/tabaco.jpg";
import cacauImage from "../../components/Images/Interno/cacau.jpg";
import milhoImage from "../../components/Images/Interno/milho.jpg";
import tomateImage from "../../components/Images/Interno/tomate.jpg";
import arrozImage from "../../components/Images/Interno/arroz.jpg";

export const SelecaoDeCultura = () => {
  return (
    <div className="seleo-de-cultura">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="ellipse" />
            <div className="text-wrapper">S</div>
            <a className="div" href="mailto:spandan@gmail.com" rel="noopener noreferrer" target="_blank">
              spandan@gmail.com
            </a>
            <div className="text-wrapper-2">admin</div>
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <a className="text-wrapper-4" href="/regiao">Região e Estação</a>
            <img className="house" alt="House" src="https://c.animaapp.com/fkXnBuii/img/house-4@2x.png" />
            <a className="text-wrapper-5" href="/plano" >Plano Plantio</a>
            <img className="calendar" alt="Calendar" src="https://c.animaapp.com/fkXnBuii/img/house-4@2x.png" />
            <img className="img" alt="House" src="https://c.animaapp.com/fkXnBuii/img/house-4@2x.png" />
            <a className="text-wrapper-6" href="/suporte" >Suporte</a>
            <a className="text-wrapper-7" href="/historico" >Histórico Plantio</a>
            <img className="house-2" alt="House" src="https://c.animaapp.com/fkXnBuii/img/house-4@2x.png" />
            <a className="text-wrapper-8" href="/dadossolo" >Dados do Solo</a>
            <a className="text-wrapper-9" exact href="/">AgroBoys</a>
            <div className="group">
              <a className="text-wrapper-10" href="/pesticidas" >Pragas e Agrotóxico</a>
              <img className="house-3" alt="House" src="https://c.animaapp.com/fkXnBuii/img/house-4@2x.png" />
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="rectangle-5" />
                <a className="text-wrapper-11" href="/selcultura" >Seleção Cultura</a>
              </div>
            </div>
            <div className="div-wrapper">
              <a className="text-wrapper-12" href="/controle">Controle</a>
            </div>
            <img className="controle-house" alt="House" src="https://c.animaapp.com/fkXnBuii/img/house-4@2x.png" />
            <img className="house-4" alt="House" src="https://c.animaapp.com/fkXnBuii/img/house-4@2x.png" />
            <div className="rotter">
              <div className="overlap-2">
                <div className="rectangle-6" />
                <div className="rectangle-7" />
                <div className="text-wrapper-13">Location, street, 1234</div>
                <div className="text-wrapper-14">Email@gmail.com</div>
                <div className="text-wrapper-15">+55 (61) 999123456</div>
                <div className="text-wrapper-16">www.AgroBoys.com</div>
                <div className="text-wrapper-17">Sobre AgroBoys</div>
                <div className="text-wrapper-18">Contacts</div>
                <p className="p">
                  Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de
                  maneira eficiente.
                </p>
                <img className="envelope" alt="Envelope" src="https://c.animaapp.com/fkXnBuii/img/envelope@2x.png" />
                <img
                  className="hand-with-smartphone"
                  alt="Hand with smartphone"
                  src="https://c.animaapp.com/fkXnBuii/img/hand-with-smartphone@2x.png"
                />
                <img className="internet" alt="Internet" src="https://c.animaapp.com/fkXnBuii/img/internet@2x.png" />
                <img className="copyright" alt="Copyright" src="https://c.animaapp.com/fkXnBuii/img/copyright@2x.png" />
                <p className="copyright-2">
                  <span className="text-wrapper-19">copyright 2024 </span>
                  <span className="text-wrapper-20">AgroBoys</span>
                </p>
                <img
                  className="place-marker"
                  alt="Place marker"
                  src="https://c.animaapp.com/fkXnBuii/img/place-marker@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-21">Seleção de Cultura</div>
            <p className="text-wrapper-22">Gostaria de mudar a plantação pré-selecionada na página Home?</p>
          </div>
          {/* <div className="text-wrapper-23">Ver Mais</div> */}
          <div className="overlap-4">
            <div className="rectangle-8" />
            <div className="text-wrapper-24">Confirmar</div>
          </div>
          <div className="overlap-5">
            <div className="group-2">
              <div className="overlap-group-3">
                <img
                  className="rectangle-9"
                  alt="Rectangle"
                  src={cacauImage}
                />

                <div className="text-wrapper-25">Cacau
                </div>
              </div>
            </div>
            <div className="group-3">
              <div className="overlap-group-3">
                <img
                  className="rectangle-9"
                  alt="Rectangle"
                  src={milhoImage}
                />
                <div className="text-wrapper-25">Milho</div>
              </div>
            </div>
            <div className="group-4">
              <div className="overlap-group-3">
                <img
                  className="rectangle-9"
                  alt="Rectangle"
                  src={tomateImage}
                />
                <div className="text-wrapper-25">Tomate</div>
              </div>
            </div>
            <div className="group-5">
              <div className="overlap-group-3">
                <img
                  className="rectangle-9"
                  alt="Rectangle"
                  src={arrozImage}
                />
                <div className="text-wrapper-25">Arroz</div>
              </div>
            </div>
            <div className="frame">
              <div className="group-6">
                <div className="overlap-group-3">
                  <img
                    className="rectangle-9"
                    alt="Rectangle"
                    src={cafeImage}
                  />
                  <div className="text-wrapper-25">Café</div>
                </div>
              </div>
              <div className="group-6">
                <div className="overlap-group-3">
                  <img
                    className="rectangle-9"
                    alt="Rectangle"
                    src={laranjaImage}
                  />
                  <div className="text-wrapper-25">Laranja</div>
                </div>
              </div>
              <div className="group-6">
                <div className="overlap-group-3">
                  <img
                    className="rectangle-9"
                    alt="Rectangle"
                    src={sojaImage}
                  />
                  <div className="text-wrapper-25">Soja</div>
                </div>
              </div>
              <div className="group-6">
                <div className="overlap-group-3">
                  <img
                    className="rectangle-9"
                    alt="Rectangle"
                    src={tabacoImage}
                  />
                  <div className="text-wrapper-25">Tabaco</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelecaoDeCultura