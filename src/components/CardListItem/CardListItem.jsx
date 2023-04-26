import { MainList } from "./StyledCard";

const CardListItem = ({ dataList, onClickItem }) => {
  return (
    <MainList>
      {dataList.map((data) => (
        <div className="carditem glow-on-hover" key={data.idDrink}>
          
            <img className="face" src={data.strDrinkThumb} alt="drink" />
        
          <div className="body">
            <p
              className="title"
              name={data.strDrink}
              id={data.idDrink}
              onClick={onClickItem}
            >
              {data.strDrink}
            </p>
            <button
              name={data.strDrink}
              id={data.idDrink}
              onClick={onClickItem}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </MainList>
  );
};

export default CardListItem;
