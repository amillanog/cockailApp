import { useCallback, useEffect, useMemo, useState } from "react";
import Header from "./components/layout/Header";
import Logo from "./components/Logo/Logo";
import logoImg from "./assets/image/logo.svg";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import CardListItem from "./components/CardListItem/CardListItem";
import Search from "./components/search/Search";
import Button from "./components/Button/Button";
import Showdetail from "./components/showDetail/Showdetail";
import Modal from "./components/modal/Modal";
import useModal from "./hook/useModal";
import { CocktailAPI } from "./assets/api/cocktailApi";
import s from "./style.module.css";

function App() {
  const [currentCocktail, setCurrentCocktail] = useState([]);
  const [btnActivo, setBtnActivo] = useState("1");
  const [mainTitle, setMainTitle] = useState("");
  const [isOpenShowDetail, openShowDetail, closeShowDetail] = useModal();
  const [dataShowDetail, setDataShowDetail] = useState([]);

  const fechtCocktail = useMemo(() => {
    return async (categori) => {
      const response = await CocktailAPI.fechtCocktail(categori);
      if (response.length > 0) {
        setCurrentCocktail(response);
      }
    };
  }, [currentCocktail]);

  const changeDrink = ({ target: { id } }) => {
    setBtnActivo(id);
    switch (id) {
      case "1":
        fechtCocktail("Non_Alcoholic");
        setBtnActivo("1");
        setMainTitle("drinks without alcohol");

        break;
      case "2":
        fechtCocktail("Alcoholic");
        setBtnActivo("2");
        setMainTitle("drinks with alcohol");

        break;

      default:
        fechtCocktail("Non_Alcoholic");
        setBtnActivo("1");
        setMainTitle("drinks without alcohol");

        break;
    }
  };

  const fetchSearch = useCallback(async (value) => {

    const response = await CocktailAPI.fetchSearch(value);

    if (response !== null) {
      setCurrentCocktail(response);
      setMainTitle(`drinks found by "${value}"`);
      setBtnActivo("");
    } else {
      setCurrentCocktail([]);
      setMainTitle(`no drinks found "${value}"`);
    }
  }, []);

  const fechtShowDetails = useCallback(async ({ target: { id } }) => {
    const response = await CocktailAPI.fechtShowDetails(id);

    if (response.length > 0) {
      let transformResult = Object.entries(response[0])
        .map(([key, value]) => ({
          description: value,
          title: key,
        }))
        .filter((item) => item.description !== null);

      let ingredient = transformResult.filter((item) =>
        item.title.includes("strIngredient")
      );

      let measure = transformResult.filter((item) =>
        item.title.includes("strMeasure")
      );
  
      let newObj = {
        id: response[0].idDrink,
        name: response[0].strDrink,
        category: response[0].strCategory,
        alcoholic: response[0].strAlcoholic,
        imgDrink: response[0].strDrinkThumb,
        instructions: response[0].strInstructions,
        ingredient: ingredient.map((item) => item.description),
        measure: measure.map((item) => item.description),
      };
      openShowDetail();
      setDataShowDetail(newObj);
    }
  }, []);

  useEffect(() => {
    fechtCocktail("Non_Alcoholic");
    setBtnActivo("1");
    setMainTitle("drinks without alcohol");
  }, []);

  return (
    <>
      <Header>
        <div className="main-header">
          <Logo src={logoImg} />
        </div>
      </Header>
      <Main>
        <section>
          <div className={s.box_search}>
            <Search onSubmit={fetchSearch} />
          </div>
          <div className={s.box_btn_categori}>
            <Button
              id="1"
              onClick={changeDrink}
              title="drinks without alcohol"
              activo={btnActivo === "1" ? true : false}
            />
            <Button
              id="2"
              title="drinks with alcohol"
              onClick={changeDrink}
              activo={btnActivo === "2" ? true : false}
            />
          </div>

          <div>
            <h1 className={s.main_title}>{mainTitle}</h1>
            <CardListItem
              onClickItem={fechtShowDetails}
              dataList={currentCocktail}
            />
          </div>
        </section>
        <Modal
          title="Detail"
          isOpen={isOpenShowDetail}
          closeModal={closeShowDetail}
        >
          <Showdetail data={dataShowDetail} />
        </Modal>
      </Main>
      <Footer />
    </>
  );
}

export default App;
