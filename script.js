function gameFirst() {
    let number = prompt('Enter a number from 1 to 12');

    if (number === '12' || number === '1' || number === '2') {
        alert('Winter');
        } else if (number === '3' || number === '4' || number === '5'){
        alert('Spring');
        } else if (number === '6'|| number === '7'|| number === '8'){
        alert('Summer');
        }else if (number === '9'|| number === '10'|| number === '11'){
        alert('Autumn');
        } else { 
        alert('Try entering another number')
    }
}


function gameSecond() {
    let words = ['Apple', 'Pineapple', 'Melon', 'Grape', 'Peach', 'Orange', 'Mandarin'];
    words = words.sort(() => Math.random() - 0.5);
    alert ('Remember all the words presented '  + words);
    let question1 = prompt('What was the first element of the array equal to?');
    let question2 = prompt('What was the last element of the array equal to?');
    
    let answer1 = words[0];
    let answer2 = words[6];
    
    if (question1.toLowerCase() === answer1.toLowerCase() && question2.toLowerCase() === answer2.toLowerCase()) {
        alert('Congratulations, you guessed all the words!');
    } else if (question1.toLowerCase() === answer1.toLowerCase() || question2.toLowerCase() === answer2.toLowerCase()) {
        alert('You were close to victory!');
    } else {
        alert('Try again! You will succeed!');
    } 
}

function gameThird() {

    let mysteryAnswer;
 
    mysteryAnswer = prompt('What belongs to you, but others use it more often?');
    
    
    if (mysteryAnswer.toLowerCase() === 'name' || mysteryAnswer.toLowerCase() === 'my name' || mysteryAnswer.toLowerCase() === 'your name') {
        alert('Congratulations, you guessed it!');
    
    
    } else {
    alert('Try again!'); 
    

        mysteryAnswer = prompt('What belongs to you, but others use it more often?' + '\n' +    'Hint 1: Everyone has it.');
        
        if (mysteryAnswer.toLowerCase() === 'name' || mysteryAnswer.toLowerCase() === 'my name' || mysteryAnswer.toLowerCase() === 'your name') {
            alert('Congratulations, you guessed it!');
        } else {
        alert('You have one last attempt left!'); 


            mysteryAnswer = prompt('What belongs to you, but others use it more often?' + '\n' + 'Hint 2: You were given this at birth.'); 

            if (mysteryAnswer.toLowerCase() === 'name' || mysteryAnswer.toLowerCase() === 'my name' || mysteryAnswer.toLowerCase() === 'your name') {
                alert('Congratulations, you guessed it!');
            } else {
                alert('Alas, but you have not solved the riddle, try another time. You will definitely get lucky!');
            }
        }
    }
}
