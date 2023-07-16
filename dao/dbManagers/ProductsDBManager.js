import productsModel from "../../models/productos.js";

export default class ProductsDBManager {
    constructor(){
        console.log('Trabajando con MongoDB')
    }

    getProducts = async()=>{
        let productos = await productsModel.find().lean();
        return productos
    }

    getProductByCode = async(getCode)=>{
        let productos = await productsModel.find({code:getCode}).lean();
        return productos
    }

    addProduct = async (newProd) =>{
        let upload = await productsModel.create(newProd);
        return upload
    }

    updateProductByCode = async (updCode,updProd) =>{
        let update = await productsModel.updateOne({code:updCode},updProd);
        return update
    }

    deleteProductByCode = async (delCode) =>{
        let deleteOne = await productsModel.deleteOne({code:delCode});
        return deleteOne
    }
}