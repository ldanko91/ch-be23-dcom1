import mongoose from "mongoose";

const productsCollection = 'products'

const productsSchema = mongoose.Schema({
    code:{
        type: String,
        required: true,
        unique: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    thumbnail:{
        type: Array,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    status:{
        type: Boolean,
        default: true
    },
    category:{
        type: String,
        required: true
    }
})

const productsModel = mongoose.model(productsCollection, productsSchema)

export default productsModel;