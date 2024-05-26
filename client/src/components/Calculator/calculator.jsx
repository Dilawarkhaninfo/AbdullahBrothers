import "react-toastify/dist/ReactToastify.css";
import {FcHome} from "react-icons/fc"
import './calculator'
import Form from "./form";
function Calculator(){
  return(
    <div className="calculator container" style={{maxWidth:"600", margin:"2rem auto", backgroundColor: "#004AAD"}}>
    <h1 className="display-4 mb-5 pt-5 text-center" style={{color:"#fff"}}><FcHome/>Mortage Estate Calculator</h1>
    <Form/>
    </div>
  )
}

export default Calculator;