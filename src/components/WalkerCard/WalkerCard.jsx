import "./_WalkerCard.scss";
import imagenes from "../../images/imagenes.jsx";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOneWalkerAsync } from "../../slices/walkerSlice.js";
const WalkerCard = ({
  photo_url,
  price,
  firstname,
  lastname,
  rating,
  greeting,
  total_rating,
  total_walking,
  _id,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleToProfile = async () => {
    await dispatch(getOneWalkerAsync(_id));
    navigate(`/walker/${_id}`);
  };
  return (
    <div className="card">
      <Avatar className="card-img-top" src={photo_url} alt="..."></Avatar>
      <figcaption>
        <span>S./ {price}</span>
      </figcaption>
      <h2 className="card-title">
        {firstname} {lastname}
      </h2>
      <Rating
        name="read-only"
        value={Number(rating)}
        precision={0.5}
        size="large"
        readOnly
      />
      <p className="card-calification">{Number(Number(rating).toFixed(1))}</p>
      <p className="card-text">
        {greeting}
        <br></br>
        <br></br>
        <span>
          {total_rating}{" "}
          {total_rating === 1
            ? "calificación / paseo realizado"
            : "calificaciones / paseos realizados"}{" "}
          {/* {total_walking}{" "}
          {total_walking === 1 ? "paseo realizado" : "paseos realizados"} */}
        </span>
      </p>
      <Button className="btn" onClick={handleToProfile}>
        <img className="dogButton" src={imagenes.img9} alt="..."></img>
        Quiero un paseo
      </Button>
    </div>
  );
};

export default WalkerCard;
