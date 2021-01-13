export default class ModelBot {
    history = [];
    userData = [];
    constructor(onUserData) {

    }
    get url() {
        return 'https://api.telegram.org/bot1560626585:AAEbtGXCJINmo-IbGQTjBDDvWTizYyWb2d8/sendMessage?chat_id=343598574&text='
    }

    validMsg = order => {
        debugger;
        let msg = '';




        let objects = order.map((el, index) => {
            let str = '';
            if(el.ID === undefined){
                str+= ` 
                * SUMMARY = ${el.sum} UAH*
                `.replace(/\./g, '\.');
            }else {
                str += `
                 ------
                *Product *  : ${index}, 
                *ID: *${el.ID}, 
                *Product : * ${el.PRODUCT_NAME}, 
                *Quantity: * ${el.count}
                 ------
                `.replace(/\./g, '\.');

            }
            console.log(str)
            return str
        }).join('');
        let user = this.userData.map(el => {
            const date = new Date();
            return `
                ------
             *Client Name:* ${el.name},
             *phoneNumber:* ${el.phone}, 
             *email:* ${el.email} 
             *time:* ${date.toLocaleDateString()} , ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                .replace(/\./g, '\.');
        }).join('');
        msg = objects + user;
        return msg;
    }

    getUserData = data => {
        this.userData.push(data);
        return data
    }

    send = msg => {
        const message = encodeURI(msg);
        return fetch(`${ this.url }${ message }&parse_mode=markdown`).then(d =>  location.reload());
    }



};