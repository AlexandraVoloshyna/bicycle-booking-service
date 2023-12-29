import style from './bicycles-list.module.css'
import BicycleItem from './bicycle-item/bicycle-item-component'
import { useGetAllQuery } from '../../redux/apiSlice'
import { toast } from 'react-toastify';

function BicyclesList() {
  const { data: bikes, error:err, isLoading} = useGetAllQuery();
  

  if (isLoading) return <div>Loading...</div>
  if (err) return toast.error(err?.data?.message || err.error);


  return (
    <div className={style.bicycles}>
        {bikes?.map((bike)=><BicycleItem 
                            key={bike._id} 
                            name={bike.name} 
                            color={bike.color} 
                            description={bike.description} 
                            type={bike.type} 
                            size={bike.size}
                            price={bike.size}
                            status={bike.status}
                            id={bike._id}
                              />)}
    </div>
  )
}

export default BicyclesList