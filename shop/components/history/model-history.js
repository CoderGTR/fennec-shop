export default class ModelHistory {

    countPrice = data => {
        let sum = 0;

        data.forEach(el => {
            sum += +el.PRICE * el.count;
        })

        return sum;
    }
};