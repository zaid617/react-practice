import { AttachMoney, Cached, LocalShipping, SafetyCheck } from "@mui/icons-material"
import "./features.css"

export default function Features() {
  return (
    <div className="features animate__animated animate__fadeIn">

        <div className="feature">

            <div className="icon"><LocalShipping sx={{ fontSize: 40 }} /></div>
            <div className="text">Free Shipping</div>

        </div>

        <div className="feature">

            <div className="icon"><AttachMoney sx={{ fontSize: 40 }} /></div>
            <div className="text">100% Money Back Gaurantee</div>

        </div>

        <div className="feature">

            <div className="icon"><Cached sx={{ fontSize: 40 }} /></div>
            <div className="text">High Quality Material</div>

        </div>

        <div className="feature">

            <div className="icon"><SafetyCheck sx={{ fontSize: 40 }} /></div>
            <div className="text">Safe & Secure Checkout</div>

        </div>

      
    </div>
  )
}
