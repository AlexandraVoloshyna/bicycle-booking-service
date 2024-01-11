import { useState } from 'react';
import style from './bicycle-item.module.css'
import chevron from '../../../assets/chevron-icon.svg'
import remove from '../../../assets/cross-icon.svg'
import { useDeleteMutation, useUpdateMutation } from '../../../redux/apiSlice';
import { toast } from 'react-toastify';

function BicycleItem ({ name, color, type, price, status, id, slug}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(status);
  const [updateStatus] = useUpdateMutation()
  const [deleteOne] = useDeleteMutation() 

    
    
  const handleOption = value => async () => {
    try {
      setSelectedOption(value);
      setIsOpen(false);
      await updateStatus({id, value}).unwrap()
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
        
  };
  const handleDelete = async () => {
    try {
      await deleteOne(id);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className={`${style.bicycle} ${style[`${selectedOption}`]}`}>
      <div className={style['col-1']}>
        <p className={style.name}>
          <span>{name}</span> - {type}({color})
        </p>
        <p className={style.slug}> id: {slug}</p>
        <div className={style.status}>Status: 
          <div className={style.select}>
            <div className={style['select-header']}>
              {selectedOption}
              <button type="button" className={style['select-btn']} onClick={ ()=>setIsOpen(!isOpen)}>
                <img src={chevron} alt="arrow-icon" className={isOpen ? `${style.open}` : `${style.closed}`}/>
              </button>
            </div>
            { isOpen && 
                    <ul className={style['select-list']}>
                      {['available', 'unavailable', 'busy']
                        .filter(option => option !== selectedOption)
                        .map(option => (
                          <li onClick={handleOption(option)} className={style['select-item']} key={option}>
                            {option}
                          </li>
                        ))} 
                    </ul>
            }
          </div>
        </div>
      </div>
      <div className={style['col-2']}>
        <button type="button" className={style.btn} onClick={handleDelete}>
          <img src={remove} alt="delete button"  />
        </button>
        <p className={style.price}>{price} UAH/hr.</p>
      </div>
    </div>
  )
}

export default BicycleItem