import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  //jscode 
  const [Interest,setIntcerest]=useState(0)
  const [Priciple,setPriciple]=useState(0)
  const [Rate,setRate]=useState(0)
  const [Year,setYear]=useState(0)
  const [IsPriciple,setIsPriciple]=useState(true)
  const [IsRate,setIsRate]=useState(true)
  const [IsYear,setIsYear]=useState(true)

  const validate = (e)=>{
    const {name,value}=e.target
    //console.log(name,value);
    //console.log(value.match(/^[0-9]+$/));
    
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){ /* !! is used to convert it into boolean ,that which only return whether the statment is true or false */
      if(name==='priciple'){
        setPriciple(value)
        setIsPriciple(true)
      }
      else if(name==='rate'){
        setRate(value)
        setIsRate(true)
      }
      else if(name==='year'){
        setYear(value)
        setIsYear(true)
      }
    }
    else{
      if(name==='priciple'){
        setPriciple(value)
        setIsPriciple(false)
      }
      else if(name==='rate'){
        setRate(value)
        setIsRate(false)
      }
      else if(name==='year'){
        setYear(value)
        setIsYear(false)
      }
    }
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!Priciple || !Rate || !Year){
      alert('Please fill the form')
    }
    else{
      //alert('Form submitted')
      setIntcerest(Priciple*Rate*Year/100)

    }
  }  

  const handleReset=(e)=>{
    setIntcerest(0)
    setPriciple(0)
    setRate(0)
    setYear(0)
    setIsPriciple(true)
    setIsRate(true)
    setIsYear(true)

  }
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div style={{width:'500px'}} className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your Simple Interest Easily</p>
        <div style={{height:'150px'}} className='flex-column mt-5 bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
          <h1>₹{' '}{Interest}</h1>
          <p>Total simple interest</p>
        </div>
        <form className='mt-4' onSubmit={handleCalculate}>
          <div className='mb-3'>
          <TextField className='w-100' name='priciple' value={Priciple ||''} onChange={(e)=>validate(e)} id="outlined-basic" label="₹ Priciple Amount" variant="outlined" />
          { !IsPriciple &&
          <div>
            <p className='text-danger'>Invalid input</p>
          </div>
          }
          </div>
          <div className='mb-3'>
          <TextField className='w-100' name='rate' value={Rate ||''} onChange={(e)=>validate(e)} id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
          </div>
          { !IsRate &&
          <div>
            <p className='text-danger'>Invalid input</p>
          </div>
          }
          <div className='mb-3'>
          <TextField className='w-100' name='year' value={Year ||''} onChange={(e)=>validate(e)} id="outlined-basic" label="Year (Yr)" variant="outlined" />
          </div>
          { !IsYear &&
          <div>
            <p className='text-danger'>Invalid input</p>
          </div>
          }
          <div className='mt-5'>
            <Stack direction="row" spacing={2}>
              <Button type='submit' disabled={IsPriciple && IsRate && IsYear?false:true} className='bg-success' style={{width:'200px',height:'50px'}} variant="contained">Calculate</Button>
              <Button onClick={handleReset} color='success' style={{width:'200px',height:'50px'}} variant="outlined">Reset</Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App
