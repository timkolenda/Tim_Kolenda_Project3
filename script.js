
    
    // ask user for their name
    //store their name in a variable
    //prompt user for the person they are shopping for "Who are you shopping for"
    //store name as a variable
    const quizApp = {};
    
    $(function(){
        quizApp.init();
    }); //end of doc ready

    //create object with an array of questions

    quizApp.customQuestionList = {
        partner: [
            'question1', 
            'question2', 
            'question3'
        ],
        family: ['question1', 'question2', 'question3'],
        friend: ['question1', 'question2', 'question3'],
        aquaintance: ['question1', 'question2', 'question3']
    }
    
    quizApp.responses = {
        goodgift: ['positive family responses', 'positive SO responese', 'positive friend responses', 'positive aquaintance responces'],
        something: ['ok family responses', 'ok SO responese', 'ok friend responses', 'ok aquaintance responces'],
        noGift: ['negitive family responses', 'negitive SO responese', 'negitive friend responses', 'negitive aquaintance responces']
    }

    

    quizApp.init = function() {
        quizApp.getNames();
        quizApp.answerCollector('relationshipChoice');
        quizApp.provideQuestionsToUser();
    }
    
    quizApp.getNames = function() {
        $('.names').on('submit', function(event){
            event.preventDefault();
            // console.log('submitted');
            quizApp.userName = $('#user-name').val();
            quizApp.recieverName = $('#reciever-name').val();
            console.log(quizApp.userName);
            console.log(quizApp.recieverName);
        });
    }   

    quizApp.answerCollector = function(question){
        $(`.${question}`).on('submit', function(event){
            event.preventDefault();
            // console.log('submitted');                        
            quizApp[question] = $('input[type=radio]:checked').val();
            console.log(quizApp[question]);
        });
    } 



    //take the relationshipChoice variable and pass it through custom questions object to get the question array
    
    quizApp.provideQuestionsToUser = function() {
        $('.relationshipChoice').on('submit', function(){
            console.log('provide Questions');
            let i = 1;
            quizApp.customQuestionList[quizApp.relationshipChoice].forEach(function(){
                //find the section with the class of question1, then prepend the first array item to that element
                console.log(i);
                i ++;
                
    
            });
        });
    };











//Should I get this person a gift






//provide a slider that allows the user to imput their christmas spirit <<<maybe
//store christmas spirit as a variable <<<maybe





//***Data Management */

//Create an object that contains 4 arrays
//Object should be named Results
//Each array within the object should have at least 



//each array will contain 3 final options that will be selected at random to ensure variation in responses


