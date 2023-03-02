import Votefunc from "./Votef";

function Menu(props) {
  return (
    <div className="Menu">
      <img className="pic" src={props.src} alt=""></img>
      <h3 className="design">{props.type}</h3>
      <h4 className="design">{props.name}</h4>
      <p className="design">{props.description}</p>
      <Votefunc />
    </div>
  );
}
export default Menu;
