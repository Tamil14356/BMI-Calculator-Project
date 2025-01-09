import React, { useState } from 'react'
import './Bmi.css'

const Bmi = () => {
    const [height, setHeight] = useState('')
    const [weight,setWeight] = useState('')
    const [bmi,setBmi] = useState(null)
    const [bmiStatus, setBmiStatus] = useState('')
    const [errormessage,setErrormessage] = useState('');

    const calculateBmi = () =>{
        const isValidHeight = /^\d+$/.test(height)
        const isValidWeight = /^\d+$/.test(weight)

            if ( isValidHeight && isValidWeight ) {
                const heightInMeters = height / 100;
                const bmiValue = weight / ( heightInMeters * heightInMeters );
                setBmi(bmiValue.toFixed(2));
                if (bmiValue < 18.5 ){
                    setBmiStatus('UnderWeight')
                }else if (bmiValue >= 18.5 && bmiValue < 24.9){
                    setBmiStatus('Normal Weight')
                }else if (bmiValue >= 25 && bmiValue < 29.9){
                    setBmiStatus('Over Weight')
                }
                else {
                    setBmiStatus('Obese')
                }
                setErrormessage("")
               }
              
            else{
                setBmi(null)
                setBmiStatus('')
                setErrormessage("Please Enter Numeric value for height and wight")
            }
    }
    const clearAll  = ()=> {
        setHeight('')
        setWeight('')
        setBmi(null)
        setBmiStatus('')
        setErrormessage('')
    }

  return (
    <div>
        <div className="bmi-calculator">
            <div className="box">
                <img src="https://getmeds.ph/blog/wp-content/uploads/2021/09/body-mass-index-1-1-1024x576.jpg" width={"320px"} height={"420px"} alt="" />
            </div>
            <div className="data">
                <h1>BMI Calculator</h1>
                {errormessage && <p className='error'> {errormessage} </p> }
                <div className="input-container">
                    <label htmlFor="height"> Height (cm) : </label>
                    <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} id='height' />
                </div>
                <div className="input-container">
                    <label htmlFor="weight"> Weight (kg) : </label>
                    <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} id='weight' />
                </div>
                <button onClick={calculateBmi}> Calculate BMI </button>
                <button onClick={clearAll}>Clear</button>
                {bmi !== null && (
                <div className="result">
                    <p> Your BMI is : {bmi} </p>
                    <p> Status : {bmiStatus} </p>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Bmi