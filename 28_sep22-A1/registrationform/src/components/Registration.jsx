
import "./Registration.css";

const Registration = (props) =>{
return(
    <div className="formInput">
    <label>Firstname</label>
    <input name={props.name} placeholder={props.placeholder} />
    </div>
);
}
export default Registration;