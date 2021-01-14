export default class ModelRecord {

    link = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json';

    records = [];
    names = [
        {
            name: 'ID',
            type: 'float'
        },
        {
            name: 'PRODUCT_NAME',
            type: 'string'
        },
        {
            name: 'MANUFACTURE',
            type: 'string'
        },
        {
            name: 'CATEGORY',
            type: 'string'
        },
        {
            name: 'INGRIDIENTS',
            type: 'string'
        },
        {
            name: 'AMOUNT',
            type: 'string'
        },
        {
            name: 'UNITS',
            type: 'string'
        },
        {
            name: 'PRICE',
            type: 'string'
        },
        {
            name: 'IMG_LINK',
            type: 'string'
        }
    ];

    loadRecords = () => {
            return fetch(this.link)
                .then(r =>  r.json())
                .then(d => {
                    this.records = this.parseData(d.feed.entry);
                    return this.records.sort(( a , b ) => b.PRICE - a.PRICE);
                });
        }

     parseData = arr =>  {


        const shift = this.names.length;

        return arr.reduce((acc, {content}, i) => {


                    const index = Math.floor(i / shift);
                    const {name, type} = this.names[i % shift];

                    if (!acc[index]) {
                        acc[index] = {}
                    }

                    acc[index][name] = this.parseContent(content.$t, type)

                    return acc

        }, []).slice(1, arr.length).map(el => {

            el.val = (+`${ Date.now() }${ Math.random().toString().slice(3,7) }`).toString(16);
            return el;
        });
    }

    parseContent = (content, type = 'string') => {
        let answ = content;

        switch (type) {
            case 'float' : {
                answ = +(content.replace(',' , '.'));
                break;
            }
            case 'date': {
                answ = new Date(content);
                answ = answ.toLocaleDateString();
                break;
            }
            default:{
                answ = content
                break;
            }
        }

        return answ;
    }

    sort = type => {
        const sortMethods = {
            'price-exp' : (a, b) => b.PRICE - a.PRICE,
            'price-cheap' : (a, b) => a.PRICE - b.PRICE
        }

        this.records.sort(sortMethods[type]);

        return this.records;
    }

    search = text => {
        const textLower = text.toLowerCase().trim();
        return this.records.filter(({ PRODUCT_NAME }) => PRODUCT_NAME.toLowerCase().includes(textLower))
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

        const filteredData = this.records.filter(el => el.CATEGORY === cat);

        return filteredData;
    }


    getRecordById = id => {
        return this.records.find(el => el.val == id);
    }




}