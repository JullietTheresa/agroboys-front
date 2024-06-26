import { useEffect } from "react";
import React, {useState} from "react";
import "./styleDadosSolo.css";
import perfilImagem from "../../components/Images/Interno/TerraTechIcon.png"

export const DadosDeSolo = () => {
  // Constantes
  const [ph, setph] = useState(null);
  const [fertilidade, setFertilidade] = useState(null);
  const [salinidade, setSalinidade] = useState(null);
  const [materiaOrganica, setMateriaOrganica] = useState(null);
  const [saturacao, setSaturacao] = useState(null);
  const [texturaSolo, setTexturaSolo] = useState(null);
  const [porcentAreia, setporcentAreia] = useState(null);
  const [porcentSilt, setporcentSilt] = useState(null);
  const [nutrientes, setNutrientes] = useState(null);
  const [porcentArgila, setporcentArgila] = useState(null);
  const [usuario, setUsuario] = useState(null);
  
  useEffect(() => {
    const RecebeDados = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/EnviarDadosSolo');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados do solo no BackEnd');
        }
        const data = await response.json();
        setph(data[0].ph);
        setFertilidade(data[0].fertilidade);
        setNutrientes(data[0].nutrientes);
        setSaturacao(data[0].saturacao);
        setMateriaOrganica(data[0].materiaOrganica);
        setSalinidade(data[0].salinidade);
        setporcentArgila(data[0].porcentArgila);
        setporcentSilt(data[0].porcentSilt);
        setporcentAreia(data[0].porcentAreia);
        setTexturaSolo(data[0].texturaSolo);

      } catch (error) {
        console.error('Erro ao buscar a cidade temporária:', error);
      }
    };

    RecebeDados();
  }, []); // Executa apenas uma vez após a montagem inicial do componente

  useEffect(() => {
    console.log("Os dados que chegaram foram", ph, fertilidade, nutrientes, saturacao, materiaOrganica, salinidade, porcentArgila, porcentSilt, porcentAreia, texturaSolo)
  }, [ph, fertilidade, nutrientes, saturacao, materiaOrganica, salinidade, porcentArgila, porcentSilt, porcentAreia, texturaSolo]);

  useEffect(() => {
    const pegaUsuario = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/enviaUsuario");
        if (!response.ok) {
          throw new Error("Erro ao buscar usuário");
        }
        const data = await response.json(); // Extrai os dados da resposta
        setUsuario(data[0].nomeUsuario); // Define o estado com os dados obtidos
      } catch (error) {
        console.error("Erro ao buscar usuário: ", error);
      }
    };
  
    pegaUsuario();
  }, []);
  

  return (
    <div className="dados-de-solo">
      <div className="div">
        <div className="fotter">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <p className="copyright">
              <span className="text-wrapper">copyright 2024 </span>
              <span className="span">TerraTech</span>
            </p>
            <img className="internet" alt="Internet" src="https://c.animaapp.com/Jx8XCm2E/img/internet@2x.png" />
            <div className="text-wrapper-2">www.TerraTech.com</div>
            <img
              className="hand-with-smartphone"
              alt="Hand with smartphone"
              src="https://c.animaapp.com/Jx8XCm2E/img/hand-with-smartphone@2x.png"
            />
            <div className="text-wrapper-3">+55 (61) 999123456</div>
            <img className="envelope" alt="Envelope" src="https://c.animaapp.com/Jx8XCm2E/img/envelope@2x.png" />
            <div className="text-wrapper-4">Email@gmail.com</div>
            <img
              className="place-marker"
              alt="Place marker"
              src="https://c.animaapp.com/Jx8XCm2E/img/place-marker@2x.png"
            />
            <div className="text-wrapper-5">Location, street, 1234</div>
            <div className="text-wrapper-6">Contacts</div>
            <p className="sobre">
              Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de maneira
              eficiente.
            </p>
            <div className="text-wrapper-7">Sobre TerraTech</div>
          </div>
        </div>

          <div className="dados-do-solo">
            <div className="analise">
              <div className="overlap-group-2">
              <div className="overlap-2">
              <div className="text-wrapper-8">Porcentagem Areia: <span className="normal-text">{porcentAreia}</span></div>
              <div className="text-wrapper-9">Textura do solo: <span className="normal-text">{texturaSolo}</span></div>
            </div>
            <div className="overlap-3">
              <div className="text-wrapper-10">Porcentagem Argila: <span className="normal-text">{porcentArgila}</span></div>
              <div className="text-wrapper-11">Análise granulométrica</div>
            </div>
            <div className="text-wrapper-12">Porcentagem Silte: <span className="normal-text">{porcentSilt}</span></div>

              </div>
            </div>
            <div className="analise-quimica">
              <div className="overlap-4">
              <div className="text-wrapper-13">Nutrientes: <span className="normal-text">{nutrientes}</span></div>
              <div className="text-wrapper-14">Saturação: <span className="normal-text">{saturacao}</span></div>
              <div className="text-wrapper-15">Matéria orgânica: <span className="normal-text">{materiaOrganica}</span></div>
              <div className="text-wrapper-16">Salinidade: <span className="normal-text">{salinidade}</span></div>
              <div className="text-wrapper-17">PH: <span className="normal-text">{ph}</span></div>
              <div className="text-wrapper-18">Analise Quimica</div>
              <div className="text-wrapper-19">Fertilidade: <span className="normal-text">{fertilidade}</span></div>
              </div>
            </div>
            <div className="text-wrapper-20">Dados do Solo</div>
          </div>

            <div className="menu">
              <div className="overlap-5">
                <img
                  className="suporte-house"
                  alt="Suporte house"
                  src="https://c.animaapp.com/Jx8XCm2E/img/controle-house@2x.png"
                />
                <a className="text-wrapper-21" href="/suporte">Suporte</a>
                <img
                  className="histrico-plantio"
                  alt="Histrico plantio"
                  src="https://c.animaapp.com/Jx8XCm2E/img/controle-house@2x.png"
                />
                <div className="overlap-6">
                  <a className="text-wrapper-22" href="/historico">Histórico Plantio</a>
                  
                </div>
                
                <div className="overlap-7">
                  <div className="overlap-8">
                    <div className="overlap-group-3">
                      <div className="rectangle-3" />
                      <div className="text-wrapper-24">Dados do solo</div>
                      <a className="text-wrapper-25" href="/selcultura">Seleção Cultura</a>
                    </div>
                    <img
                      className="seleo-cultura-house"
                      alt="Seleo cultura house"
                      src="https://c.animaapp.com/Jx8XCm2E/img/controle-house@2x.png"
                    />
                  </div>
                  <a className="text-wrapper-26" href="/regiao">Região e Estação</a>
                </div>
                <img
                  className="regio-e-estao-house"
                  alt="Regio e estao house"
                  src="https://c.animaapp.com/Jx8XCm2E/img/controle-house@2x.png"
                />
                <img
                  className="plano-plantio-house"
                  alt="Plano plantio house"
                  src="https://c.animaapp.com/Jx8XCm2E/img/controle-house@2x.png"
                />
                <a className="text-wrapper-27" href="/plano">Plano Plantio</a>
                <img
                  className="controle-house"
                  alt="Controle house"
                  src="https://c.animaapp.com/Jx8XCm2E/img/controle-house@2x.png"
                />
                <a className="text-wrapper-28" href="/controle">Controle</a>
              </div>
            </div>
            <div className="headder">
              <div className="overlap-9">
                <div className="overlap-group-4">
                  <div className="ellipse" />
                  <img className="text-wrapper-29" alt="FotoPerfil" src={perfilImagem} />
                </div>
                <p className="usuario-gmail-com">
                  <p className="text-wrapper-30">{usuario}</p>
                </p>
                <div className="text-wrapper-31">admin</div>
              </div>
              <a className="text-wrapper-32" href="/">TerraTech</a>
            </div>
          </div>
        </div>


  );
};

export default DadosDeSolo