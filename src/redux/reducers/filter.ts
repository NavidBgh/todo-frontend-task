import { SET_FILTER } from "../actions/types";
import { FILTERS } from "./constants";

const initialState = FILTERS.ALL;

const visibilityFilter = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
