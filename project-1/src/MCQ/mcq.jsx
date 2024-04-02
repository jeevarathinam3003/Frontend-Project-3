import React, { useState, useEffect } from 'react';
import './mcq.css';
import questionData from '../questiondetails';

export const Mcq = () => {

    const [questionList, setQuestionList] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        setQuestionList(questionData);
    }, []);

    const handleRadioChange = (event) => {
        setSelectedOptions({
            ...selectedOptions,
            [currentQuestionIndex]: event.target.value
        });
        document.getElementById("output").innerHTML = "";
    }

    const handleSubmit = () => {
        const currentQuestion = questionList[currentQuestionIndex];
        const selectedOption = selectedOptions[currentQuestionIndex];

        if (selectedOption !== undefined) {
            if (selectedOption === currentQuestion.ans) {
                setScore(score + 1);
                // console.log("correctAns");   
            } 
            // else {
            //     console.log("Wrong answer");
            // }
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } 
        else {
            document.getElementById("output").innerHTML = "Note : Please select an option.";
        }
    }

    return (
        <div>
            <div className='brand'>
                <div className='o1'>Login</div>
                <div className='o2'>360</div>
            </div>
            <div className="question_div">
                {questionList.length > 0 && currentQuestionIndex < questionList.length ? 
                <div className='main'>
                    <div className="head">
                        <p>This TEST will help you to TEST your skill </p>
                        <hr />
                    </div>
                    <p className='mcq_p'>Q.no : {questionList[currentQuestionIndex].qno}/10</p>
                    <div className='cards'>
                        <p className='question'><span className='qno'>{questionList[currentQuestionIndex].qno}<span className='dot'>. </span></span>{questionList[currentQuestionIndex].question}</p>
                        <form className='mcq_form'>
                            <div className='forcenter'>
                                <input type="radio" id="radio1" name="radios" value="a)" onChange={handleRadioChange} checked={selectedOptions[currentQuestionIndex] === 'a)'} />
                                <label htmlFor="radio1">{questionList[currentQuestionIndex].op1}</label><br></br>
                                <input type="radio" id="radio2" name="radios" value="b)" onChange={handleRadioChange} checked={selectedOptions[currentQuestionIndex] === 'b)'} />
                                <label htmlFor="radio2">{questionList[currentQuestionIndex].op2}</label><br></br>
                                <input type="radio" id="radio3" name="radios" value="c)" onChange={handleRadioChange} checked={selectedOptions[currentQuestionIndex] === 'c)'} />
                                <label htmlFor="radio3">{questionList[currentQuestionIndex].op3}</label><br></br>
                                <input type="radio" id="radio4" name="radios" value="d)" onChange={handleRadioChange} checked={selectedOptions[currentQuestionIndex] === 'd)'} />
                                <label htmlFor="radio4">{questionList[currentQuestionIndex].op4}</label><br></br>
                            </div>
                            
                        </form>
                        <div className="submitbutton">
                            <button className='mcq_submit' onClick={handleSubmit}>Submit</button>
                        </div>
                        <p id="output" style={{color:"white",textAlign:"center",borderRadius:"20px"}} ></p>
                    </div>
                </div>
                : <h1 className='box'>Your score is : {score}/10</h1> }
            </div>
        </div>
    )
}
