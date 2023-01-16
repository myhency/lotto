import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import { PersistPartial } from "redux-persist/es/persistReducer";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import { LottoNumbersAction } from "../actions/lottoNumbers";
import { lottoNumbersReducer } from "../reducers/lottoNumbers";

const rootReducer = combineReducers({
    numbers: lottoNumbersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
const persistedReducer = persistReducer<RootState, LottoNumbersAction>(
    {
        key: "root",
        storage: AsyncStorage,
        stateReconciler: hardSet,
    },
    rootReducer
);

export const store = createStore(persistedReducer, applyMiddleware(logger));
export const persistor = persistStore(store);
