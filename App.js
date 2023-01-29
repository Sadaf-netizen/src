
import './App.css';
import { useState } from 'react';

const App=()=>{

   const [result, setResult]=useState("");

   const clickHandler=(event)=>{
        setResult(result.concat(event.target.value))
   }

   const clearDisplay=()=>{
     setResult("");
   }

   const calculate=()=>{
      setResult(eval(result).toString());
   }

             return(

              <div className="calc">
                <input type= "text" placeHolder="0" id="answer" value={result}/>
                <input type="button" value="9" className="button" onClick={clickHandler}/>
                <input type="button" value="8" className="button" onClick={clickHandler}/>
                <input type="button" value="7" className="button" onClick={clickHandler}/>
                <input type="button" value="6" className="button" onClick={clickHandler}/>
                <input type="button" value="5" className="button" onClick={clickHandler}/>
                <input type="button" value="4" className="button" onClick={clickHandler}/>
                <input type="button" value="3" className="button" onClick={clickHandler}/>
                <input type="button" value="2" className="button" onClick={clickHandler}/>
                <input type="button" value="1" className="button" onClick={clickHandler}/>
                <input type="button" value="0" className="button" onClick={clickHandler}/>
                <input type="button" value="." className="button" onClick={clickHandler}/>
                <input type="button" value="+" className="button" onClick={clickHandler}/>
                <input type="button" value="-" className="button" onClick={clickHandler}/>
                <input type="button" value="*" className="button" onClick={clickHandler}/>
                <input type="button" value="/" className="button" onClick={clickHandler}/>
                <input type="button" value="%" className="button" onClick={clickHandler}/>
                <input type="button" value="Clear" className="button button1" onClick={clearDisplay}/>
                <input type="button" value="=" className="button button1" onClick={calculate}/>
                
              </div>

             )
        }   
export default App;



































    










     





















































































































































































































//    <div className='container'>
//       <div className='wrapper'>
//       <div className='screen'>
//           {input !== "" || input === "0" ? (
//             <NumberFormat
//               value={input}
//               displayType={"text"}
//               thousandSeparator={true}
//             />
//           ) : (
//             <NumberFormat
//               value={preState}
//               displayType={"text"}
//               thousandSeparator={true}
//             />
//           )}
//         </div>
//        <div className='btn light-gray' onClick={reset}>AC</div>
//         <div className='btn light-gray' onClick={percent}>%</div>
//         <div className='btn light-gray' onClick={minusPlus}>+/-</div>
//         <div className='btn orange' onClick={operatorType}>/</div>
       
//         <div className="btn" onClick={inputNum}>7</div>
//         <div className="btn" onClick={inputNum}>8</div>
//         <div className="btn" onClick={inputNum}>9</div>
//         <div className='btn orange' onClick={operatorType}>X</div>
//         <div className="btn" onClick={inputNum}>4</div>
//         <div className="btn" onClick={inputNum}>5</div>
//         <div className="btn" onClick={inputNum}>6</div>
//         <div className='btn orange' onClick={operatorType}>+</div>
//         <div className="btn" onClick={inputNum}>1</div>
//         <div className="btn" onClick={inputNum}>2</div>
//         <div className="btn" onClick={inputNum}>3</div>
//         <div className='btn orange' onClick={operatorType}>-</div>
//         <div className="btn zero" onClick={inputNum}>0</div>
//         <div className="btn" onClick={inputNum}>.</div>
//         <div className="btn" onClick={equals}>=</div>

//     </div>
//   </div>
// </div>
// );
// } 

// export default App;
