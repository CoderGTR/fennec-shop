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
        let msg = ``;


        console.log('STRINGIFY', this.userData)

        let objects = order.map((el, index) => {
            let str = '';
            if(el.ID === undefined){
                str+= ` ----- SUMMARY = ${el.sum} ----- `
            }else {
                str += `*${index} PRODUCT*
                 \n --- *ID: *${el.ID}, \n 
                 * Product : * ${el.PRODUCT_NAME}, 
                 \n * Quantity: * ${el.count}, \n`;
                 str =  str.replace(/\./g, '\.')
            }
            return str
        }).join('');
        let user = this.userData.map(el => {
            return `******** CLIENT - Name: ${el.name}, phoneNumber: ${el.phone}, email: ${el.email} ***********`
        }).join('');

        // msg = `${JSON.stringify(order)} , ${JSON.stringify(this.userData)}`;
        msg = JSON.stringify(objects) + JSON.stringify(user);

        console.log(msg)
        return msg;
    }

    getUserData = data => {
        this.userData.push(data);
        console.log('UUUUUSSSEEERR DATTTA', this.userData)
        return data
    }

    send = msg => {
        const message = encodeURI(msg);
        return fetch(`${ this.url }${ message }`);
    }



};