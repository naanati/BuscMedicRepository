import "./home.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import NavbarHome from "../component/NavBarHome/NavBarHome";

const HomePage = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('');
  const [comentario, setComentario] = useState('');

  const enviarFormularioPorEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'BuscMed',
      from_name: nomeCompleto,
      from_email: email,
      tipo_mensagem: tipoMensagem,
      comentario: comentario,
    };

    emailjs
      .send('service_ul61s1s', 'template_ltolg7d', templateParams, '__wgu03ejKupMJMAA')
      .then(
        (response) => {
          console.log('E-mail enviado com sucesso!', response);
          alert('Mensagem enviada com sucesso!');
        },
        (error) => {
          console.error('Erro ao enviar mensagem:', error);
          alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
        }
      );
      // Limpar os campos do formulário após o envio
    setNomeCompleto('');
    setEmail('');
    setTipoMensagem('');
    setComentario('');
  };

  return (
    // O componente principal é envolvido em uma div com a classe
    <div><NavbarHome/>
    <div className="container-HomePage"> 
    {/* imagem no topo da página*/}
    <div className="background-container">
  {/* imagem no topo da página e configurações */}
  <div className="content">
    <a href="/PesquisaMed">
      <img className="cadastro-image" src="src/img/PESQMED.png" alt="Imagem de Cadastro"/>
    </a>
  </div>
          </div>
        <div className="main-content">
           {/* Seção da página um */}
           <div id="page-one" className="page-one">
              <div>
            <h2>Uma plataforma que você pode contar.</h2>
            <p>
              Desenvolvido para facilitar a busca de medicamentos disponíveis em postos de saúde. 
              Proporcionando uma Experiência eficiente e transparente.
            </p>
              </div>
            {/* Seção de avaliação */}
          <div className="Avaliation"> 
          <div className="rectangleCliente">
          <img src="/src/img/logodrsaude.png" alt="LogoCliente1" width="54" height="55" />
          <div className="stars">  {/* ícones das estrelas de avaliação */}
            <img src="/src/img/estrela.png" alt="Estrela preenchida" width="21" height="21" />
            <img src="/src/img/estrela.png" alt="Estrela preenchida" width="21" height="21" />
            <img src="/src/img/estrela.png" alt="Estrela preenchida" width="21" height="21" />
            <img src="src/img/meia estrela.png" alt="Estrela Metade" width="21" height="21" />
            <img src="src/img/estrela vazia.png" alt="Estrela vazia" width="21" height="21" />
          </div>
          <p>Dr. Saúde</p>
          <p>86%</p>
          <p>
            Em fase de implementação, já estamos obtendo resultados satisfatórios,
            evitando longas esperas dos pacientes e insatisfações.
          </p>
          </div>
          <div className="rectangleCliente">
          <img src="src/img/logomedac.jpg" alt="LogoCliente2" width="54" height="55" />
          <div className="stars"> {/* ícones das estrelas de avaliação */}
            <img src="/src/img/estrela.png" alt="Estrela preenchida" width="21" height="21" />
            <img src="/src/img/estrela.png" alt="Estrela preenchida" width="21" height="21" />
            <img src="/src/img/estrela.png" alt="Estrela preenchida" width="21" height="21" />
            <img src="/src/img/estrela.png" alt="Estrela preenchida" width="21" height="21" />
            <img src="src/img/estrela vazia.png" alt="Estrela vazia" width="21" height="21" />
          </div>
          <p>Medac</p>
          <p>92%</p>
          <p>
            Resultados satisfatórios, evita retrabalho e auxilia uma melhor comunicação entre o posto e o paciente.
          </p>
          </div>
          </div>
        <h2>Gestão inovadora que você pode confiar.</h2>
        {/* Seção de retangulos com destaques da plataforma */}
          <div className="rectangle-container">
            <div className="rectangle1">
              <img src="src/img/mao-segurando-a-caixa.png" alt="bloco1" width="60" height="60" />
              <p>Verifique a disponibilidade de  medicamentos na palma das mãos.</p>
            </div>
            <div className="rectangle1">
              <img src="src/img/equipe-medica.png" alt="bloco2" width="60" height="60" />
              <p>Agilidade no atendimento dos pacientes.</p>
            </div>
            <div className="rectangle1">
              <img src="src/img/wi-fi.png" alt="bloco3" width="60" height="60" />
              <p>Experiência 100% digital, fácil de usar.</p>
            </div>
          </div>
        </div>
        {/* Seção página dois */}
        <div id="page-two" className="page-two">
          <img src="src/img/LOGO BUSCMED.png" alt="LogoCliente1" width="300" height="300" />
          <h2>Bem-vindo a BuscMed</h2>
            <div className="rectanglePage2">
                <p>
                A BUSCMED é uma plataforma projetada para simplificar a busca por medicamentos disponíveis. 
                Sua interface intuitiva permite aos usuários localizar rapidamente os remédios necessários 
                em postos de saúde. Com a BUSCMED, a experiência de busca se torna mais eficiente e transparente, 
                tornando o processo de encontrar medicamentos mais fácil e ágil. A plataforma beneficia tanto os 
                usuários, ao proporcionar uma maneira conveniente de encontrar remédios, quanto os estabelecimentos 
                de saúde, que podem gerenciar melhor a disponibilidade de medicamentos em suas unidades.
                Junte-se a nós nesta jornada para alcançarmos nosso objetivo de proporcionar uma vida mais saudável e plena à população.
              </p>
              <div>
              <Link to="/cadastro">
                <button className="cadastro-button">Junte-se a nós</button>
              </Link>
              </div>
              </div>
        </div>
        {/* Seção da página três */}
        <div id="page-tree" className="page-tree">
              <div className="container-Localiza">
                <h2>Onde nos encontrar</h2>
                {/* Seção de localização */}
                <div className="localization-rectangle">
                  <p>Nossa Localização</p>
                    </div>
                    {/* Iframe de localização e configuração*/}
                    <iframe
                      title="Google Maps"
                      width="100%"
                      height="400"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.993888341423!2d-34.88891218466581!3d-8.059983494191126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18c0dab30523%3A0x1fe82e8387d2a09a!2sR.%20Gerv%C3%A1sio%20Pires%2C%20234%20-%20Santo%20Amaro%2C%20Recife%20-%20PE%2C%2050060-090!5e0!3m2!1sen!2sbr!4v1633746560808!5m2!1sen!2sbr"
                      allowFullScreen >
                      </iframe>
                  </div>
                  {/* Seção da página quatro com config. do linkedin*/}
              <div className="linkedin-rectangle">
                <div className="linkedin-person">
                  <a href="https://www.linkedin.com/in/layza-nicolle-6911a0197">
                    <div className="linkedin-person-image"
                      style={{
                        backgroundImage: 'url(src/img/fotoLayza.jpeg)',
                        backgroundSize: 'cover'}}>
                      </div>
                          </a>
                          <p>Layza Nicolle</p>
                          <a href="https://www.linkedin.com/in/layza-nicolle-6911a0197">LinkedIn</a>
                        </div>
              <div className="linkedin-person">
                <a href="https://www.linkedin.com/in/nataliamffarias/">
                  <div className="linkedin-person-image"
                    style={{
                      backgroundImage: 'url(src/img/fotonatalia.jpeg)',
                      backgroundSize: 'cover'}}>
                      </div>
                        </a>
                          <p>Natália Farias</p>
                          <a href="https://www.linkedin.com/in/nataliamffarias/">LinkedIn</a>
                        </div>
              <div className="linkedin-person">
                <a href="https://www.linkedin.com/in/pedro-vitor-86a517231/">
                  <div className="linkedin-person-image"
                    style={{
                      backgroundImage: 'url(src/img/pedrofoto.jpeg)',
                      backgroundSize: 'cover'}}>
                    </div>
                        </a>
                        <p>Pedro Vitor</p>
                        <a href="https://www.linkedin.com/in/pedro-vitor-86a517231/">LinkedIn</a>
                      </div>
              <div className="linkedin-person">
                <a href="https://www.linkedin.com/in/tatiane-clemente-7040ba235/">
                  <div className="linkedin-person-image"
                      style={{
                        backgroundImage: 'url(src/img/fototati.jpeg)',
                        backgroundSize: 'cover'}}>
                      </div>
                        </a>
                        <p>Tatiane Clemente</p>
                        <a href="https://www.linkedin.com/in/tatiane-clemente-7040ba235/">LinkedIn</a>
                      </div>  
                      </div>          
        </div>
        {/* Seção da página quatro */}
        <div id="page-four" className="page-four">
      <h2 className="contact-title">Entre em Contato Conosco</h2>
      <div className="contato-container">
        <div className="ret-direito">
          <div className="contato-image">
            <img src="src/img/contatos conosco.png" alt="Imagem de contato" />
          </div>
        </div>
        <div className="ret-esquerdo">
          <div className="contato-form">
          <h2>BuscMed</h2>
        <p>Deixe sua mensagem, entraremos em contato.</p>
            <form onSubmit={enviarFormularioPorEmail}>
              <label htmlFor="nomeCompleto">Nome Completo</label>
              <input
                type="text"
                id="nomeCompleto"
                placeholder="Digite seu nome completo"
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
              />

              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="tipoMensagem">Tipo de Mensagem</label>
              <select
                id="tipoMensagem"
                value={tipoMensagem}
                onChange={(e) => setTipoMensagem(e.target.value)}
              >
                <option value="..."> </option>
                <option value="sugestao">Sugestões</option>
                <option value="duvidas">Dúvidas</option>
                <option value="elogios">Elogios</option>
                <option value="critica">Crítica</option>
              </select>

              <label htmlFor="comentario">Comentário</label>
              <textarea
                id="comentario"
                rows="4"
                placeholder="Deixe seu comentário"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
              ></textarea>

              <button className="enviar-button" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
          </div>
          {/* Seção do radapé da página*/}
           <div className="baseboard"> 
           <img src="src/img/fenix.png" alt="Imagem de rodapé" className="baseboard-image" />
        </div>
        </div>
        </div>
        </div>

  );
};


export default HomePage;