import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import shortid from "shortid";
import strContains from "../utils/strContains";
import { UseSelector } from "react-redux/es/hooks/useSelector";


export const getFilteredCards = ({ cards, searchString }, columnId) => cards
    .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));

export const columns = useSelector(getAllColumns);
// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
        default:
            return state;
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;