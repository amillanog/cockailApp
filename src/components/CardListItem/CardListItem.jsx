import { MainList } from "./StyledCard";

const CardListItem = ({ dataList, onClickItem }) => {
  return (
    <MainList>
      {dataList.map((data) => (
        <div className="carditem glow-on-hover" key={data.idDrink}>
          <div className="box-img">
            <img className="img-card" src={data.strDrinkThumb} alt="drink" />
          </div>

          <div className="body">
            <div className="box-title">
              <span
                className="title"
                name={data.strDrink}
                id={data.idDrink}
                onClick={onClickItem}
              >
                {data.strDrink}
              </span>
            </div>
            <button
              name={data.strDrink}
              id={data.idDrink}
              onClick={onClickItem}
            >
              <p>Read More</p>
            </button>
          </div>
        </div>
      ))}
    </MainList>
  );
};

export default CardListItem;
