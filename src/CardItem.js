import './App.css';

function CardItem({ card, onClick }) {
  if (!card || !card.ImageURL) {
    return null;
  }

  return (
    <div className={`card ${card.Rarity}`} onClick={onClick}>
      <div className="background-img">
        <img src={card.ImageURL} alt={card.Name}></img>
      </div>
      <h2>{card.Name}</h2>
      <p className="type">{card.Type}</p>
      <p className="description">{card.Description}</p>
    </div>
  );
}

export default CardItem;
