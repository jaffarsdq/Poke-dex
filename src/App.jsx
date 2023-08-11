import './App.css'

// components import
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'

//router import
import MainRoutes from './routes/MainRoutes'


function App() {


  return (
    <>
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </>
  )
}

export default App
