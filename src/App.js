import './App.css';
import { useState } from 'react';
function App() {
  // const [fname, setFname] = useState('');
  // const [lname, setLname] = useState('');
  // function changeFnameHandler(event){
  //   // console.log(event.target.value);
  //   setFname(event.target.value);
  // }
  // function changeLnameHandler(event){
  //   // console.log(event.target.value);
  //   setLname(event.target.value);
  // }
  // console.log(lname, fname);
  const [formData, setFormData]=useState({firstName:'', lastName:'',email:'',comments:'',isVisible:false ,mode:"",FavCar:""});
  
  function changeHandler(event){
    const {name, value, type, checked} = event.target;
    setFormData((prevData)=>{
      return{
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }
  });
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("final data")
    console.log(formData);
  }
//  console.log(formData)
  return (
    <div className="App">
    <form onSubmit={submitHandler}>
      <h1>Form</h1>
      <label>First Name</label>
      <input type="text"  
      placeholder='First Name' 
      onChange={changeHandler} 
      name="firstName"
      value={formData.firstName}
      />
      <br></br>
      <br></br>
      <label>Last Name</label>
      <input type='text' 
      placeholder='Last Name' 
      onChange={changeHandler} 
      name="lastName"
      value={formData.lastName}
      />
      <br></br>
      <br></br>
      <label>Email</label>
      <input type='email' 
      placeholder='Email' 
      onChange={changeHandler} 
      name="email"
      value={formData.email}
      />
      <br></br>
      <br></br>
      <label>Message</label>
      <textarea
      placeholder='Enter your comments here...'
      onChange={changeHandler}
      name="comments"
      value={formData.comments}
      />
      <br></br>
      <br></br>
      <input
      type='checkbox'
      onChange={changeHandler}
      name="isVisible"
      id='isVisible'
      checked={formData.isVisible}
      />
      <label htmlFor='isVisible' > Am I Visible ?</label>

      <br></br>
      <br></br>
    <fieldset>
      <legend>Mode</legend>
      <input
     type='radio'
     onChange={changeHandler}
     name="mode"
     value="online-mode"
     id='online-mode'
     checked={formData.mode === 'online-mode'}
     />

     <label htmlFor='online-mode'>Online Mode</label>

     <input
     type='radio'
     onChange={changeHandler}
     name="mode"
     value="offline-mode"
     id='offline-mode'
     checked={formData.mode === 'offline-mode'}
     />

     <label htmlFor='offline-mode'>Offline Mode</label>
    </fieldset>
     <br/>
    <label htmlFor='Favcar'>Select Your Favourite Car</label>
     <select
        name="FavCar"
        onChange={changeHandler}
        value={formData.FavCar}
        >
        <option value="volvo">Volvo</option>
        <option value="thar">Thar</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        <option value="bmw">BMW</option>
        <option value="audi">Audi</option>
     </select>
  
      <br></br>
      <br></br>
      {/* <input type="submit" value='submit'></input> */}
     <button> Submit</button>
    </form>
    </div>
  );
}

export default App;
