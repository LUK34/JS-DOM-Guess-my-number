'use strict';

/*
//------------------------------------------------ PART 1 START -------------------------------------------------------------------

//The below code will give entire tag associated will the class='message'

//CODE:
//console.log(document.querySelector('.message'));

//------------------------------------------------ PART 1 END -------------------------------------------------------------------
*/

//------------------------------------------------ PART 2 START -------------------------------------------------------------------
//If you want the value and not the entire tag use the below line of code

//CODE:
//document.querySelector('.message').textContent;
//console.log(document.querySelector('.message').textContent)

//------------------------------------------------- PART 2 END ------------------------------------------------------------------


//--------------------------------------------------- PART 3 START ----------------------------------------------------------------
//To put Emoji use the below cmd

//CMD:
//Win + . 

//CODE:
//document.querySelector('.message').textContent='🎉 Correct Number'

//--------------------------------------------------- PART 3 END ----------------------------------------------------------------


//--------------------------------------------------- PART 4 START ----------------------------------------------------------------
//Refer the index.html and fetch the class names of the following:

//The place where the question mark number is displayed.
//The place where the live score is displayed.

//CODE:
/*
document.querySelector('.number').textContent=14;
document.querySelector('.score').textContent=21;
document.querySelector('.guess').value=12;
*/
//----------------------------------------------------PART 4 END ---------------------------------------------------------------

//--------------------------------------------------- PART 5 START ----------------------------------------------------------------
//Below code we use addEventListener to get classname that has btn check
//Remember there are 2 btn...we need to take btn with check value
//The objective  of addEventListner here is when the user 'click' on the btn
//we must get the value from user and display in console.

//CODE:
/*
document.querySelector('.check').addEventListener('click', 
    function()
    {
        console.log(document.querySelector('.guess').value);
    }

);
*/
//--------------------------------------------------- PART 5 END ----------------------------------------------------------------

//--------------------------------------------------- PART 6: BUSINESS LOGIC START ----------------------------------------------------------------

let numberRandom = Math.trunc(Math.random()*20) + 1;
let updatedScore=20;//Staged variable
let highScore=0;

const displayMessage=function(messageToBeUpdated)
{   
    document.querySelector('.message').textContent=messageToBeUpdated;
}

//CODE:
document.querySelector('.check').addEventListener('click', 
    function()
    {
        let guessedNumber= Number(document.querySelector('.guess').value);

        if(!guessedNumber)
        {
            displayMessage('😡No Number entered. Please enter Number.😡');
        }
        else if (guessedNumber === numberRandom)
        {
            //document.querySelector('.message').textContent='🎉 Correct Number';
            displayMessage('🎉 Correct Number');//--REFACTORED CODE

            //When player wins. The Logic should display the number
            document.querySelector('.number').textContent=numberRandom;

            //Whenever we manipulate style.We must note teh following:
            //1. The style that must be changed must be camel case. 
            //2. The style value that is to be manipulated by DOM must be in qoutes.
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width='30rem';

            //If updatedScore is greater than highScore then update it.
            if(updatedScore > highScore)
            {
                highScore=updatedScore;
                document.querySelector('.highscore').textContent=highScore;
            }
        }
        //When the guessedNumber is wrong -> REFACTORED CODE using DRY principle
        else if (guessedNumber !== numberRandom)
        {
            if(updatedScore >1)
            {
                //document.querySelector('.message').textContent= (guessedNumber > numberRandom) ? '📈 Number too High !!' :'📉 Number too Low !!';
                displayMessage((guessedNumber > numberRandom) ? '📈 Number too High !!' :'📉 Number too Low !!');
                updatedScore--;
                document.querySelector('.score').textContent=updatedScore;
            }
            else
            {
               // document.querySelector('.message').textContent='You LOST !!';
                displayMessage('You LOST !!');//--REFACTORED CODE
                document.querySelector('.score').textContent=updatedScore;
            }
        }
    }

);

document.querySelector('.again').addEventListener('click', 
    function()
    {
        updatedScore=20
        numberRandom=Math.trunc(Math.random()*20) + 1;
        document.querySelector('.score').textContent=updatedScore;
        //document.querySelector('.message').textContent='Start guessing ...';
        displayMessage('Start guessing ...');//--REFACTORED CODE
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width='15rem';
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value='';
    }
);

//--------------------------------------------------- PART 6: BUSINESS LOGIC END ----------------------------------------------------------------









