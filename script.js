//welcoming word using alert\
function game (){
    alert('Welcome to Math Tester pro')
//Qestion1
let selectNum = prompt('Select a difficulty 1)easy 2)medium 3)hard')
var score = 0
function outResult(){
    alert('task completed')
    let percentage = (score/5) * 100
    alert(`you scored ${score}/ 5 which is ${percentage}%`)
    if(percentage < 49 ){
        alert('Your grade is fail')
    }
    else if (percentage < 59 &&  percentage >= 50 ){
        alert('your grade is pass')
    }
    else if (percentage < 69 && percentage >= 60){
        alert('your grade is credit')
    }
    else if (percentage < 79 && percentage >= 70){
        alert('your grade is good')
    }
    else if (percentage <= 100 && percentage >= 80){
        alert('your grade is high')
    }
}

//asking challenge question function
function ask_question(maximum,minimum){
    let num1 = Math.floor(Math.random()*maximum)
    let num2 = Math.floor(Math.random()*minimum) 
    let array = ['+','-']
    let operator = array[Math.floor(Math.random()*2)]
    let que = `${num1} ${operator} ${num2}`
    let ans = prompt(que)
    var result = 0
    if(operator === '+'){
        result = num1+ num2
    }
    else{
        result = num1- num2
    }
    if (ans == result ){
        alert('Correct!')
        score+= 1 }
    else{
        alert('Incorrect')
        score -=0
    }
    
    
}

if(selectNum ==='easy' || selectNum ==1 || selectNum ==='e'){
    var lives = 3
    alert('Easy Mode Selected')
    alert('you have 3 lives remaining and 5 question')
    for(question = 1 ; question <= 5 ; question++) {
        let num1 = Math.floor(Math.random()*10)
        let num2 = Math.floor(Math.random()*10) 
        let array = ['+','-']
        let operator = array[Math.floor(Math.random()*2)]
        let que = `${num1} ${operator} ${num2}`
        let ans = prompt(que)
        //defining result 
        var result = 0
        if(operator === '+'){
            result = num1+ num2
        }
        else{
            result = num1- num2
        
        }
        if (ans == result ){
            alert('Correct!')
            score+= 1 }
        else{
            --lives
            if(lives==1){
                alert('1 life remaining')
                ask_question(10,10)
                break
            }
            else{
                alert('incorrect!')
                alert(`Question ${question} of 5 and ${lives} lives remaining`)
            }    
        }
    }
    outResult()
}
//for medium mode
else if(selectNum === 'medium' || selectNum == 2 || selectNum ==='m'){
    var lives = 2
    alert('Middle Mode Selected')
    alert('you have 2 lives remaining and 10 question')
    for(question = 1 ; question <= 10 ; question++) {
        let num1 = Math.floor(Math.random()*25)
        let num2 = Math.floor(Math.random()*25) 
        let array = ['+','-']
        let operator = array[Math.floor(Math.random()*2)]
        let que = `${num1} ${operator} ${num2}`
        let ans = prompt(que)
        //defining result 
        var result = 0
        if(operator === '+'){
            result = num1+ num2
        }
        else{
            result = num1- num2
        
        }
        if (ans == result ){
            alert('Correct!')
            score+= 1 }
        else{
            --lives
            if(lives==1){
                alert('1 life remaining')
                ask_question(25,25)
                break
            }
        }      
    }
outResult()
}
else if(selectNum === 'hard' || selectNum ==3 || selectNum ==='h'){
    var lives = 1
    alert('Hard Mode Selected')
    alert('you have only 1 live and 15 question')
    for(question = 1 ; question <= 15 ; question++) {
        let num1 = Math.floor(Math.random()*50)
        let num2 = Math.floor(Math.random()*50) 
        let array = ['+','-']
        let operator = array[Math.floor(Math.random()*2)]
        let que = `${num1} ${operator} ${num2}`
        let ans = prompt(que)
        //defining result 
        var result = 0
        if(operator === '+'){
            result = num1+ num2
        }
        else{
            result = num1- num2
        
        }
        if (ans == result ){
            alert('Correct!')
            score+= 1 }
        else{
            break
        }

    }

outResult()
}
}

game()
let wish = prompt("Do you wish to start again? Type y or yes for 'YES' OR n or no for 'NO")
if(wish === 'y' || wish ==='yes'){
    game()
}
else{
    alert('Thank you ')
}