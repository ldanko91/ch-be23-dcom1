import mongoose from "mongoose";

const cartsCollection = 'carts'

const cartsSchema = mongoose.Schema({
    code:{
        type: String,
        required: true,
        unique: true
    },
    products:{
        type: Array,
        required: true
    },
})

const cartsModel = mongoose.model(cartsCollection, cartsSchema)

export default cartsModel;