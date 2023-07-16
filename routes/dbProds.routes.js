import { Router } from "express";
import ProductsDBManager from "../dao/dbManagers/ProductsDBManager.js";

const dbProdsRouter = Router();
const DBProdsManager = new ProductsDBManager();

dbProdsRouter.get('/', async(req,res)=>{
    let productos = await DBProdsManager.getProducts();
    console.table(productos);
    res.render('home',{
        productos,
        title: "Listado de productos"
    })
})

dbProdsRouter.get('/:pid', async(req,res)=>{
    let {pid} = req.params
    let productos = await DBProdsManager.getProductByCode(pid);
    console.log(productos);
    res.render('home',{
        productos,
        title: `${productos[0].title} código ${pid}`
    })
})

dbProdsRouter.post('/', async(req,res)=>{
    let {code, title, description, price, thumbnail, stock, category} = req.body;
    let newProd = {code, title, description, price, thumbnail, stock, category};
    let upload = await DBProdsManager.addProduct(newProd);
    res.send({status:"success", payload:upload})
})

dbProdsRouter.put('/:pid', async(req,res)=>{
    let {title, description, price, thumbnail, stock, category} = req.body;
    let updProd = {title, description, price, thumbnail, stock, category};
    let {pid} = req.params
    let update = await DBProdsManager.updateProductByCode(pid,updProd);
    res.send({status:"success", payload:update})
})

dbProdsRouter.delete('/:pid', async(req,res)=>{
    let {pid} = req.params
    let delProd = await DBProdsManager.deleteProductByCode(pid);
    res.send({status:"success", payload:delProd})
})

export default dbProdsRouter;