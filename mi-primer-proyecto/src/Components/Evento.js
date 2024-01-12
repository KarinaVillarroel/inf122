import react from"react";
import '../Styles/Evento.css';
function Evento(){

return (
    
    <div className="card-container">
        <img className="card-image"
        src={require("../Images/evento1.jpg")}alt="foto de evnto"/>
        <h2 className="card-title">py es Pizza </h2>
        <p className="card-dato"> es de dicimebre de 2023</p>
        <p className="card-place">  mdkjhdjsnd,snlmdlkv</p>
        <p className="card-descriptio "> Hola pythonista
        participe en est evento precencial de la comunidad Pytho,
        ¿cunado conoces de Python?
        Aprende a trabajar en equipo resolviendo increibles 
        </p>
        
    </div>
);
}
export default Evento;