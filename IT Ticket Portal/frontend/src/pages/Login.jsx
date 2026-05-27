import { useState } from "react";

const Login=()=>{

const [formData,setFormData]=useState({

email:"",
password:""

});

const {email,password}=formData;

const onChange=(e)=>{

setFormData(prevState=>({

...prevState,
[e.target.name]:e.target.value

}));

};

const onSubmit=(e)=>{

e.preventDefault();

console.log(formData);

};

return(

<>

<section>

<h1>Login</h1>

<p>Login and start creating tickets</p>

</section>

<section>

<form onSubmit={onSubmit}>

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

<button type="submit">

Login

</button>

</form>

</section>

</>

)

}

export default Login