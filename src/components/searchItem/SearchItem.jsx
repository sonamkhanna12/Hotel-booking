import { useNavigate } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ele}) => {
  // console.log(ele);
  const {name, img, price, rating} = {...ele};
  // console.log(name, img, price, rating);
  const navigate = useNavigate();

  const fun=()=>{
    navigate("/hotels/id");
  }

  return (
    <div className="searchItem">
      <img
        src={img}
        alt=""
        className="siImg"
        onClick={()=>{fun()}}
      />
      <div className="siDesc">
        <h1 className="siTitle">{name}</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹{price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
