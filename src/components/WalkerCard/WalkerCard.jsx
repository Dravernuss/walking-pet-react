import "./_WalkerCard.scss";
import imagenes from "../../images/imagenes.jsx";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

const WalkerCard = ({
  photo,
  price,
  name,
  ratingValue,
  text,
  calification,
}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={photo} alt="..."></img>
      <figcaption>
        <span>S./ {price}</span>
      </figcaption>
      <h2 className="card-title">{name}</h2>
      <Rating
        name="read-only"
        value={ratingValue}
        precision={0.5}
        size="large"
        readOnly
      />
      <p className="card-calification">{ratingValue}</p>
      <p className="card-text">
        {text}
        <br></br>
        <br></br>
        <span>{calification}</span>
      </p>
      <Button className="btn" href="/walkerprofile">
        <img className="dogButton" src={imagenes.img9} alt="..."></img>
        Quiero un paseo
      </Button>
    </div>
  );
};

export default WalkerCard;
