import { MainList } from "./StyledCard";

const CardListItem = ({ dataList, onClickItem }) => {
  return (
    <MainList>
      {dataList.map((data) => (
        <div key={data.idDrink}>
          <div className="box-img">
            <p name={data.strDrink} id={data.idDrink} className="title" onClick={onClickItem}>
              {data.strDrink}
            </p>
            <img src={data.strDrinkThumb} alt="drink" />
          </div>
        </div>
      ))}
    </MainList>
  );
};

export default CardListItem;
