const RestroCard = ({ img, name, dsc, price, rate }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="content">
        <h2 className="dish-name">{name}</h2>
        <p className="desc">{dsc}</p>
        <p className="rate">⭐ {rate}</p>
        <p className="price">
          Price - <b>₹{price}</b>
        </p>
      </div>
    </div>
  );
};

export default RestroCard;
