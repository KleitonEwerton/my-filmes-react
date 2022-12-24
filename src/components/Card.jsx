import '../css/Card.css'

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <img className='card-image' src={props.image}></img>
        <h5 className="card-title">{props.title || "title 404"}</h5>
        <p className="card-text">{props.text || "text 404"}</p>
        <button className='card-btn-learn-more'>Learn more</button>
      </div>
    </div>
  );
}

export default Card;
