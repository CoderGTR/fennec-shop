export default class SortSearchModel {
    goods;
    sortMethods = {
        'price-exp' : (a, b) => b.PRICE - a.PRICE,
        'price-cheap' : (a, b) => a.PRICE - b.PRICE
    };

    sort = type => {
        this.goods = this.goods.sort(this.sortMethods[type]);

        return this.goods;
    }

    search = text => {
        const textLower = text.toLowerCase().trim();
        return this.goods.filter(({ PRODUCT_NAME }) => PRODUCT_NAME.toLowerCase().includes(textLower))
    }

    getCategories = list => {
        const category = [];
        list.map(el => {
            if(category.includes(el.CATEGORY)){

            } else {
                category.push(el.CATEGORY)
            }
        });

        return category;
    }

    sortCategory = cat => {
        const filteredData = this.goods.filter(el => el.CATEGORY === cat);

        return filteredData;
    }
}