import './App.css'
const Quiz=()=>{
    const data=[{
        id:1,
        ques:'What is the capital of India',
        op1:'Kolkata',
        op2:'Mumbai',
        opt3:'Delhi',
        op4:'Chennai'
    },
    {
        id:2,
        ques:'What is the capital of USA',
        op1:'London',
        op2:'Washington DC',
        opt3:'Delhi',
        op4:'New York'}
]
    const handleNext=()=>{
        alert('hello')
    }
    const handlePrevious=()=>{
        alert('hello')
    }
    return(
      
        <>
        <div id="question">
            Question.{data[0].id}:{data[0].ques}
            <div><input type="radio" value={data[0].op1}/>{data[0].op1}</div>
            <div><input type="radio" value={data[0].op2}/>{data[0].op2}</div>
            <div><input type="radio" value={data.opt3}/>{data[0].opt3}</div>
            <div><input type="radio" value={data.op4}/>{data[0].op4}</div>
            <button id='prev' onClick={handlePrevious}>Previous</button>
            <button id='next' onClick={handleNext}>Next</button>
        </div>
        </>
    )
}
export default Quiz;