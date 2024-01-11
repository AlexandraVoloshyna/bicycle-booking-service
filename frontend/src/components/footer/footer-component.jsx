
import style from './footer.module.css'


function Footer () {

  return (
    <footer>
      <div className="container">
        <p className={style.copyright} >
          <span>Developer</span> Oleksandra Voloshyna
        </p> 
      </div>
    </footer>
  )
}

export default Footer