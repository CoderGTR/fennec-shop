export default class OrderModel {
    data = [];



    checkInputData = (data, type) => {
        const reg = {
            Email: /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i,
            Phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
            Name: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
        };

        let result = `${type} is invalid`;

        if (reg[type].test(data)) {
            if (type === 'Email'){
               result =  this.checkEmpty(data);
               return result;
            }
            result = true;
        }

        return result;
    };

    addData = data => {
        this.data.push(data);
    };

    checkEmpty = inp => {
        let result = true;

        if (inp.trim() === '') {
            result = 'Empty E-mail!';
        }

        return result;
    }

    sendToStorage = data => {
        const arr = [];
        const history = localStorage.getItem('OrderHistory');
        const order = JSON.parse(localStorage.getItem('cartItems'));
        const historyOrder = JSON.parse(history) ?? [];
        historyOrder.forEach(el => arr.push(el));
        arr.push([data , ...order]);
        localStorage.removeItem('cartItems');
        localStorage.setItem('OrderHistory', JSON.stringify(arr));
    }

};