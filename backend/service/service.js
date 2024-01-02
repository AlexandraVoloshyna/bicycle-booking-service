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
       const allCount = await bicycleModel.countDocuments();
        const availableCount = await bicycleModel.countDocuments({ status: 'available' });
        const busyCount = await bicycleModel.countDocuments({ status: 'busy' });
        const totalPricesResult = await bicycleModel.aggregate([
          {
            $group: {
              _id: null,
              totalPrices: { $sum: '$price' }
            }
          }
        ]);
        
        const totalPrices = totalPricesResult.length > 0 ? totalPricesResult[0].totalPrices : 0;
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
