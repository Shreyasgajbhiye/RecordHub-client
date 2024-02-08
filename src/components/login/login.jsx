import React, {useState, useEffect} from 'react'
import COVER_IMG from '../../assets/login.jpg';



const Login = () => {
  const initialvalues = {email: "", password:""};
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) =>{
    console.log(e.target);
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
    console.log(formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const error = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2.}$/i;
    if(!values.email){
      error.email = "email is required!";
    }
    if(!values.password){
      error.password = "password is required!";
    }
    return error;
  };

  useEffect(() => {

    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className="w-full h-full object-cover " src={COVER_IMG} alt="" />
      </div>
      
      <div className='bg-gray-100 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
          <h2 className='text-4xl font-bold text-center py-6'>Login</h2>
          <div className='flex flex-col py-2'>
            <label>Email</label>
            <input  className='border p-2' type='email' name="email" id="email" placeholder='Email' value={formValues.email} onChange={handleChange}/>
          </div>
          <p className='text-red-700'>{formErrors.email}</p>
          <div className='flex flex-col py-2'>
            <label>Password</label>
            <input className='border p-2' type='password' name='password' id='password' placeholder='Password' value={formValues.password} onChange={handleChange}/>
          </div>
          <p className='text-red-700'>{formErrors.password}</p>
          <button className='border w-full my-5 py-2 bg-indigo-500 hover:bg-indigo-400 text-white'>Login in</button>
          <div className='flex justify-between'>
            <p className='flex items-center'><input className='mr-2' type="checkbox"/>Remember me</p>
          </div>
          <p className='text-center mt-8'>Don't have account? Create account</p>
        </form>
      </div>
    </div>
  )
}

export default Login






