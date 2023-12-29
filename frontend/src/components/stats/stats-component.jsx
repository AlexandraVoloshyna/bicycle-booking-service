import style from './stats.module.css'
import { useGetStatsQuery } from '../../redux/apiSlice';
import { toast } from 'react-toastify';
function Stats() {
  const { data: stats, error:err, isLoading} = useGetStatsQuery();

  if (isLoading) return <div>Loading...</div>
  if (err) return toast.error(err?.data?.message || err.error);

  return (
    <div className={style.stats}>
        <h2 className={style.title}>STATISTICS</h2>
        <p className={style.text}>Total Bikes: <span className={style.count}>{stats.all}</span></p>
        <p className={style.text}> Available Bikes : <span className={style.count}>{stats.available}</span> </p>
        <p className={style.text}>Booked Bikes: <span className={style.count}>{stats.booked}</span> </p>
        <p className={style.text}>Average bike cost: <span className={style.count}>{stats.average}</span> UAH/hr.</p>
    </div>
  )
}

export default Stats