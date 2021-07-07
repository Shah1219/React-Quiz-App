

const INITIAL_STATE = {
quiz:[
    {
        question:"what is HTML?",
        option:["hyper text markup language",'abc','def'],
        correctAnswer:"hyper text markup language"
    },
    {
        question:"what is CSS?",
        option:["cascading style sheet",'abc','def'],
        correctAnswer:"cascading style sheet"  
    },
    {
        question:"what is JS?",
        option:["JAVA SCRIPT",'abc','def'],
        correctAnswer:"JAVA SCRIPT"  
    }
]
}

const reducer = (state = INITIAL_STATE)=> {
    return state
}

export default reducer