import * as service from '../service/service.js'

export const  addBicycle = async (req, res, next) =>{
  try {
    await service.createBicycle(res.body)
    res.status(201).json({message: 'Bicycle added successfully'})
  } catch (error) {
    next(error)
  }
}


export const getBiycles = async (req, res, next)=>{
  try {
    const bicycles = await service.getAll()
    if (bicycles) {
      res.status(200).json(bicycles)
    } else {
      res.status(200).json([])
             
    }
  } catch (error) {
    next(error)
  }

} 
export const getStats = async (req, res, next)=>{
  try {
       
    const statistics = await service.getBiyclesStats()
    if (statistics) {
      res.status(200).json(statistics)
    } else {
      res.status(200).json([])
             
    }
  } catch (error) {
    next(error)
  }

    
} 
export const updateStatus = async (req, res, next)=>{
  try {
    const {id} = req.params
    const {value} = req.body
        
       

    if (!id) {
      res.status(400).json({message: 'no id found'})
    }
    if (!value){
      res.status(400).json({message: 'no status found'})
    }
    const newStatus = await service.updateBicycleStatus(id, value)
    res.status(200).json({message: 'status updated successfully', newStatus})
  } catch (error) {
    next(error)
  }
} 
export const deleteBicycle = async (req, res, next)=>{
  try {
    const {id} = req.params
    if (!id) {
      res.status(400).json({message: 'no id found'})
    }
    await service.removeBicycle(id)
    res.status(200).json({message: 'Bicycle deleted successfully'})

  } catch (error) {
    next(error)
  }

    
} 
