import bicycleModel from "../model/bicycleSchema.js"
export const createBicycle = async (id,  name, color, price, size, type, description, res) => {
    const bicycle = await bicycleModel.findOne({_id: id }); 
    if(bicycle){
        res.status(400)
        throw new Error("Bicycle with the id is already exist, try another one")
    }
    const newBicycle = new bicycleModel({
        _id: id,
       name,
       color,
       description,
       type,
       size,
        price,
      });
        await newBicycle.save();
        return newBicycle
    }

    export const getAll = async ()=>{
        const data = await bicycleModel.find();
        return data
    }
    export const getBiyclesStats = async()=>{
        const data = await bicycleModel.find();

        const allCount = data.length;
        const availableCount = data.filter(bicycle => bicycle.status === 'available').length;
        const busyCount = data.filter(bicycle => bicycle.status === 'busy').length;
        const totalPrices = data.reduce((acc, bicycle) => acc + bicycle.price, 0);
        const averagePrice = allCount > 0 ? totalPrices / allCount : 0;
    
        return {
          all: allCount,
          available: availableCount,
          booked: busyCount,
          average: averagePrice,
        };
    }
    export const updateBicycleStatus = async ( id, status)=>{
        
        const data = await bicycleModel.findOne({_id: id });
        if(!data) throw new Error("no data found")
        data.status = status
        await data.save();
        return data.status
    }
    export const removeBicycle = async (id)=>{
        await bicycleModel.findByIdAndDelete({ _id: id } );
        
    }
