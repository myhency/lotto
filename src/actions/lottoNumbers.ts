import { getRandomSixNumber } from "../utils/Utils";

export const CREATE_NEW_NUMBERS = "CREATE_NEW_NUMBERS" as const;

export const createNewNumbers = () => {
    const numbers = getRandomSixNumber();
    return {
        type: CREATE_NEW_NUMBERS,
        payload: numbers,
    };
};

export type LottoNumbersAction = ReturnType<typeof createNewNumbers>;
