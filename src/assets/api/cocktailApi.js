import axios from "axios";
import {
  BASE_URL,
  SEARCH_LETTER,
  FILTER_CATEGORI_ALCOHOLIC,
  SEARCH_LOOKUP_DETAILS,
} from "../../config";

export class CocktailAPI {
  static async fechtCocktail(categori) {
    try {
      const response = await axios.get(
        `${BASE_URL}${FILTER_CATEGORI_ALCOHOLIC}${categori}`
      );
      return response.data.drinks;
    } catch (e) {
      console.log(e);
    }
  }
  static async fechtShowDetails(id) {
    try {
      const response = await axios.get(
        `${BASE_URL}${SEARCH_LOOKUP_DETAILS}${id}`
      );
      return response.data.drinks;
    } catch (e) {
      console.log(e);
    }
  }
  static async fetchSearch(search) {
    try {
      const response = await axios.get(`${BASE_URL}${SEARCH_LETTER}${search}`);
      return response.data.drinks;
    } catch (e) {
      console.log(e);
    }
  }
}
