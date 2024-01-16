import logo from './logo.svg';
import './App.css';
import Evento from './Components/Evento'
import EventoB from './Components/EventoB';
 

function App() {
  return (
    <div className="App">
      <Evento/>
     <EventoB title="Py Pizza B3" 
         image="evento1"
         dateLiteral="009 de diciembre de 20023 "
         placeLiteral="mr pizaza d ocubre frente a la plaza"
         description=" participe en est evento precencial de la comunidad Pytho,
        ¿cunado conoces de Python?
        Aprende a trabajar en equipo resolviendo increibles"
        />
         <EventoC title="Meetup 11 -3 pitfalls de la imge"
         image="evwnto1"
         dateLiteral="009 de diciembre de 20023 "
         placeLiteral="mr pizaza d ocubre frente a la plaza"
         description=" participe en est evento precencial de la comunidad Pytho,
        ¿cunado conoces de Python?
        Aprende a trabajar en equipo resolviendo increibles"
         /> 
    </div>

    
  );

  
}
 

export default App;
