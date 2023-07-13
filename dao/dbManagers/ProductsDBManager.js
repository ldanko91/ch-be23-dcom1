import productsModel from "../../models/productos.js";

export default class ProductsDBManager {
    constructor(){
        console.log('Trabajando con MongoDB')
    }

    getProducts = async()=>{
        let productos = await productsModel.find().lean();
        return productos
    }

    addProduct = async (newProd) =>{
        let upload = await productsModel.create(newProd)
        return upload
    }
}