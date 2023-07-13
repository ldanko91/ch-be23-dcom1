import { Router } from "express";
import CartsDBManager from "../dao/dbManagers/CartsDBManager.js";

const dbCartsRouter = Router();
const DBCartsManager = new CartsDBManager();

dbCartsRouter.get('/', async(req,res)=>{
    let carritos = await DBCartsManager.getCarts();
    console.table(carritos);
    res.send({status:"success",payload:carritos}) 
})

dbCartsRouter.post('/', async(req,res)=>{
    const {code, products} = req.body;
    let newCart = {code, products};
    
    const upload = await DBCartsManager.addCart(newCart);
    res.send({status:"success", payload:upload})
})

export default dbCartsRouter;