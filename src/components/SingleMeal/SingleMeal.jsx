import React from "react";
import EllipsisText from "react-ellipsis-text";
const SingleMeal = ({ meal }) => {
  const {
    strDrink,
    strCategory,
    strDrinkThumb,
    dateModified,
    strInstructions,
  } = meal;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="h-full">
          <img className="h-full" src={strDrinkThumb} alt={strDrink} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strDrink}</h2>
          <p>
            <EllipsisText text={strInstructions} length={"70"} />
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
