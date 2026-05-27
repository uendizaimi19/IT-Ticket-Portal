import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";


const Register = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const [formData,setFormData]=useState({

name:"",
email:"",
password:"",
password2:""

});

const {name,email,password,password2}=formData;

const onChange=(e)=>{

setFormData(prevState=>({

...prevState,
[e.target.name]:e.target.value

}));

};

const onSubmit=(e)=>{

e.preventDefault();

if(password!==password2){

toast.error("Passwords do not match");

return;

}

dispatch(setUser({

name,
email

}));

toast.success("Registration successful!");
navigate("/login");
};

return(

<>

<section>

<h1>Register</h1>

<p>Please create an account</p>

</section>

<section>

<form onSubmit={onSubmit}>

<div>

<input
type="text"
id="name"
name="name"
value={name}
placeholder="Enter your name"
onChange={onChange}
/>

</div>

<br/>

<div>

<input
type="email"
id="email"
name="email"
value={email}
placeholder="Enter your email"
onChange={onChange}
/>

</div>

<br/>

<div>

<input
type="password"
id="password"
name="password"
value={password}
placeholder="Enter password"
onChange={onChange}
/>

</div>

<br/>

<div>

<input
type="password"
id="password2"
name="password2"
value={password2}
placeholder="Confirm password"
onChange={onChange}
/>

</div>

<br/>

<button type="submit">

Register

</button>

</form>

</section>

</>

)

}

export default Register