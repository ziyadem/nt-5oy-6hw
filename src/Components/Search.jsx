import React from 'react'
import {useRef , useEffect,useState} from 'react'
// import SearchCard from './SearchCard';

const Search = () => {
  let a=[];
    
    let useReff=useRef();
    let [produc,setProduct]=useState([])
    let [b,setB]=useState([])
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProduct(json)) 
    },[useReff]);
    function renderInput(e){
        e.preventDefault();
        let inputVal= useReff.current.value.toLowerCase();
        
        if(produc){
          produc.forEach(function(elm) {
            if (elm.title.toLowerCase().includes(inputVal)) {
              a.push(elm.id);
            }
          }
        );
        }
        setB(a)   
      }
      console.log(b);
 
  return (
    <>
    <div className="container d-flex justify-content-center gap-5 my-5 ">
         <form onSubmit={renderInput} className='w-50'>
         <input ref={useReff} className="input form-control w-100 bg-primary p-2 text-dark bg-opacity-10" type="text" placeholder="Card Name" aria-label="default input example" />
         </form>
         <button type="button" className="btn btn-primary">Primary</button>
    </div>
    
         {/* <div >
         <SearchCard card={b}/>
         </div> */}
    </>
  )
}

export default Search
