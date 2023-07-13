import cartsModel from "../../models/carritos.js";

export default class CartsDBManager {
    constructor(){
        console.log('Trabajando con colección carts de MongoDB')
    }

    getCarts = async()=>{
        let carritos = await cartsModel.find().lean();
        return carritos
    }

    addCart = async (newCart) =>  {
        let upload = await cartsModel.create(newCart);
        return upload
    }
}