
import Footer from './components/footer/footer-component'
import Header from './components/header/header-component'
import Main from './components/main/main-component'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App () {
  

  return (
    <>
      <ToastContainer /> 
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
