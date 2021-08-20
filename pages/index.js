import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <body>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com"  /> 
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
      </Head>
    <div className="form-container">
     
    </div>
     <form>
         <div>
             <label>
                First Name
             </label>
             <input type="text" placeholder="John" />
         </div>
         <div >
             <label>
               Last  Name
             </label>
             <input type="text" placeholder="Doe" />
         </div>
         <div >
             <label>
               Farm  Name
             </label>
             <input type="text" placeholder="Farm XYZ" />
         </div>
         <div >
             <label>
               Farm  Type
             </label>
             <select name="farm-type" id="farm-type">
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
             <select name="farm-size" id="farm-size">
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
             <input type="text" placeholder="Fish, Snail, chickens" />
         </div>
         <div className="submit-btn-div">
             <button className="submit-btn">Submit</button>
         </div>
   </form>
 </body>
  )
}
