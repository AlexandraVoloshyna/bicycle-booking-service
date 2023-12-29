  import style from "./header.module.css"
 
 function Header() {
   return (
    <header>
    <div className="container">
    <h1 className={style.logo}>ADMIN.BIKE-BOOKING.COM</h1>
    </div>
    </header>
   )
 }
 
 export default Header