export default class ModelCart {

    constructor() {
        this.store = JSON.parse(localStorage.getItem('cartItems'));
        this.arr = this.store === null ? [] : this.store
        this.uniqList = this.store === null ? new Set() : new Set(this.store);
        this.renderList = [];
    }


    addToCart = data => {
        this.arr.push(data);

        this.uniqList.add(data)

        this.renderList = [];
        this.uniqList.forEach(el => {
            const count = this.arr.reduce((c, prod) => prod === el ? ++c : c , 0);
            this.renderList.push({
                count,
                ...el
            })
        })


        console.log(this.renderList)

        // this.arr.forEach(el => {
        //     el.count = 1;
        // });
        localStorage.setItem('cartItems', JSON.stringify(this.renderList))
    }

    getElement = (data, type) => {
        let list = JSON.parse(localStorage.getItem('cartItems'));
        console.log(list)
        // const methods = {
        //     'minus': count--,
        //     'plus': count++
        // }
        let newList = list.map(el => {


            if(el.val === data){
                if(type === 'minus'){
                    el.count > 1 ? el.count-- : el.count
                }else{
                    el.count++
                }
            }
            return el
        })

        localStorage.setItem('cartItems', JSON.stringify(newList))
        console.log(newList)
    }

    getSum = () => {
        let list = JSON.parse(localStorage.getItem('cartItems'));

        if(list === null){
            return 0
        }
        let sum = 0;

        list.forEach(el => {
            sum += +el.PRICE * el.count
        })

        return sum
    }

    onDelete = data => {
        let list = JSON.parse(localStorage.getItem('cartItems'));
        let idx;
        let newList = list.map((el, index) => {
            if(el.val === data){
                idx = index
                return el;
            }else{
                return el;
            }
        });
        newList.splice(idx,1);
        console.log(newList);
        this.arr.splice(idx, 1);
        this.uniqList = new Set(this.arr);


        localStorage.setItem('cartItems', JSON.stringify(newList))
        this.renderList = [];
    }


};