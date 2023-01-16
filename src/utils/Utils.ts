export const getRandomSixNumber = () => {
    const numberArray = [];

    while (numberArray.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;

        const hasNumber =
            numberArray.filter((number) => number === randomNumber).length > 0;

        if (!hasNumber) {
            numberArray.push(randomNumber);
        }
    }

    return numberArray.sort((a, b) => a - b);
};
