import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

export default function Home() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [farm_name, setFarmName] = useState('');
  const [farm_type, setFarmType] = useState('');
  const [farm_size, setFarmSize] = useState('');
  const [products, setProducts] = useState('');


  // Submit handler
  const submitHandler = async (event) =>{
    event.preventDefault();
    await axios.post('http://localhost:3000/api/submit', {
      first_name, last_name, farm_name, farm_type, farm_size, products
      })
      .then(
        response =>{
          console.log(response.data);
          if (response.status === 201){
              alert("Registration was successful");
              setFirstName('');
              setLastName('');
              setFarmName('');
              setFarmSize('');
              setFarmType('');
              setProducts('');
          }
        }
      ).catch(
        error => {
          console.log(error);
          alert('Please re-check all input fields') 
        }
      )
  }

  return (
    <body>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com"  /> 
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
      </Head>

{/* background image */}
    <div className="form-container">
    
    </div>
     <form onSubmit={submitHandler}>    
       <h3>Farmers Registration Form</h3>
         <div>
             <label>
                First Name
             </label>
             <input type="text" placeholder="John" name="first_name" required value={first_name} onChange={(event) => setFirstName(event.target.value)}/>
         </div>
         <div >
             <label>
               Last  Name
             </label>
             <input type="text" placeholder="Doe" name="last_name" required value={last_name} onChange={(event) => setLastName(event.target.value)}/>
         </div>
         <div >
             <label>
               Farm  Name
             </label>
             <input type="text" placeholder="Farm XYZ" name="farm_name"  required value={farm_name} onChange={(event) => setFarmName(event.target.value)}/>
         </div>
         <div >
             <label>
               Farm  Type
             </label>
             <select name="farm-type" id="farm-type" required value={farm_type} onChange={(event) => setFarmType(event.target.value)}>
                 <option value="fish">Fish Farm</option>
                 <option value="snail">Snail Farm</option>
                 <option value="poultry">Poultry</option>
                 <option value="rabbit">Rabbit Farm</option>
               </select>
         </div>
         <div >
             <label>
               Size of Farm
             </label>
             <select id="farm-size" name="farm_size" value={farm_size} onChange={(event) => setFarmSize(event.target.value)} required>
                 <option value="1-10">1-10</option>
                 <option value="11-50">11-50</option>
                 <option value="51-100">51-100</option>
                 <option value="above 100">100 and above</option>
               </select>
         </div>
         <div >
             <label>
               Products
             </label>
             <input type="text" placeholder="Fish, Snail, chickens" required name="products" value={products} onChange={(event) =>setProducts(event.target.value)}/>
         </div>
         <div className="submit-btn-div">
             <button className="submit-btn" type="submit">Register</button>
         </div>
   </form>
 </body>
  )
}
