import { toast } from "react-toastify";
const cancel =()=> {
    toast.error('payment has been canceled!', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
  
    return(
        <div className="container mb-5"><h3>Cancel </h3>
        <p>your payment was canceled!</p>
        </div>
        )
}
export default cancel;