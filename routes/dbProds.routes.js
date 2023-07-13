import { Router } from "express";
import ProductsDBManager from "../dao/dbManagers/ProductsDBManager.js";

const dbProdsRouter = Router();
const DBProdsManager = new ProductsDBManager();

dbProdsRouter.get('/', async(req,res)=>{
    let productos = await DBProdsManager.getProducts();
    console.table(productos);
    // res.send({status:"success",payload:productos})
    res.render('home',{
        productos,
        title: "Listado de productos"
    })
    

})

dbProdsRouter.post('/', async(req,res)=>{
    const {code, title, description, price, thumbnail, stock, category} = req.body;
    let newProd = {code, title, description, price, thumbnail, stock, category};
    
    const upload = await DBProdsManager.addProduct(newProd);
    res.send({status:"success", payload:upload})
})

export default dbProdsRouter;