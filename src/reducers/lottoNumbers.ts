import {
    CREATE_NEW_NUMBERS,
    LottoNumbersAction,
} from "../actions/lottoNumbers";
import { History } from "../models/History";

interface LottoNumbersState {
    currentNumbers: number[];
    history: History[];
}

const defaultState: LottoNumbersState = {
    currentNumbers: [],
    history: [],
};

export const lottoNumbersReducer = (
    state = defaultState,
    action: LottoNumbersAction
) => {
    const date = new Date();
    switch (action.type) {
        case CREATE_NEW_NUMBERS:
            return {
                ...state,
                currentNumbers: action.payload,
                history: state.history.concat([
                    {
                        date: `${date.getFullYear()}-${
                            date.getMonth() + 1
                        }-${date.getDate()}`,
                        numbers: action.payload,
                    },
                ]),
            };
        default:
            return state;
    }
};
