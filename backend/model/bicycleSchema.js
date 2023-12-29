import { Schema, model } from "mongoose";

const bicycleSchema  = new Schema(
    {
        _id:{
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true,
        },
        color:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        type:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        size:{
            type: Number,
            required: true,
        },
        status:{
            type: String,
            required: true,
            default: 'available'
        },

    }
)

export default model('Bicycle', bicycleSchema )