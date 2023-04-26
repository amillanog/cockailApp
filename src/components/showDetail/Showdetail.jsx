import { MainShowDetail } from "./StyledShowDetail";

const Showdetail = ({ data = [] }) => {
  return (
    <MainShowDetail>
      <div className="head">
        <p className="title">
          {data.name} {data.category}-{data.alcoholic}
        </p>
      </div>
      <div className="body">
        <div className="box-img-main">
          <img src={data.imgDrink} alt="drink" />
        </div>
        <div className="main-ingredients">
          <p className="title-ingredient">Ingredients</p>
          {data.ingredient !== undefined ? (
            <div className="list-ingredient">
              {data.ingredient.map((item, indexIngr) => (
                <div key={indexIngr} className="items">
                  <p key={indexIngr}>
                    {item}
                    {data.measure
                      .filter((indexMea) => indexMea === indexIngr)
                      .map((item) => (
                        <span key={indexIngr}>{item}</span>
                      ))}
                  </p>
                  <img
                    className="img-ingredients"
                    src={`https://www.thecocktaildb.com/images/ingredients/${item}.png`}
                    alt={`${item}`}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="main-instructions">
        <p className="title">instructions</p>
        <p>{data.instructions}</p>
      </div>
    </MainShowDetail>
  );
};

export default Showdetail;
