import { useSelector } from 'react-redux'
import { useState } from 'react';

function Quiz() {
    const state = useSelector(state => state)
    console.log(state)


    const [ind, setInd] = useState(0)
    const [selectedValue, setSelectedValue] = useState("")
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)


    function change() {
        let correctValue = state.quiz[ind].correctAnswer;
        if (selectedValue == correctValue) {
            setScore(score + 1);
        }
        if (state.quiz.length == ind + 1) {
            setShowResult(true);
        } else {
            setInd(ind + 1);
        }


    }
    console.log(selectedValue)
    console.log(score)




    return (
        <div>
            <div className="container">
                {showResult ? (
                    <div className="p-3 bg-warning rounded shadow text-dark">
                        <p className="fs-3">Result</p>
                        <progress
                            className="p-3"
                            id="file"
                            value={score}
                            max={state.quiz.length}
                        ></progress>
                        <h3>{((score / state.quiz.length) * 100).toFixed(2)} %</h3>
                        <h3>
                            {(score / state.quiz.length) * 100 < 60 ? "Fail" : "Pass"}{" "}
                        </h3>
                    </div>
                ) : null}
            </div>
            {!showResult ? (
                <div className='container p-5 my-2 rounded shahdow bg-primary text-white'>

                    <p className='fs-4'>
                        Question <span className='fs-1 fw-bold'>{ind + 1}</span> of <span>{state.quiz.length}</span>
                    </p>
                    <h3>
                        {state.quiz[ind].question}
                    </h3>
                </div>
            ) : null}
            {!showResult ? (
                <div className="container p-5 my-2 rounded shadow bg-info">
                    <div className="row">
                        {state.quiz[ind].option.map((v, i) => {
                            return (

                                <div key={i} className="col-md-4 py-2">
                                    <button onClick={() => setSelectedValue(v)} className="btn btn-light rounded px-5">
                                        {v}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : null}
            {!showResult ? (
                <div className="container">
                    <button
                        onClick={() => change()}
                        className="btn btn-danger px-5 rounded-pill"
                    >
                        Next
                    </button>
                </div>
            ) : null}

        </div>



    )
}

export default Quiz;





