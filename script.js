
    
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
            '<H2>question1</H2>', 
            '<H2>question2</H2>', 
            '<H2>question3</H2>'
        ],
        family: [
            '<H2>question1</H2>',
            '<H2>question2</H2>',
            '<H2>question3</H2>'
        ],
        friend: [
            '<H2>question1</H2>',
            '<H2>question2</H2>',
            '<H2>question3</H2>'
        ],
        aquaintance: [
            '<H2>question1</H2>',
            '<H2>question2</H2>',
            '<H2>question3</H2>'
        ]
    }

    quizApp.answerList = {
        partner: {
            question1: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
            ],
            question2: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
            ],
            question3: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
            ]
        },
        family: {
            question1: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
            ],
            question2: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
            ],
            question3: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
            ]
        },
        friend: {
            question1: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
            ],
            question2: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
            ],
            question3: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
            ]
        },
        aquaintance: {
            question1: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
            ],
            question2: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
            ],
            question3: [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
            ]
        },
    }
    
    quizApp.response = {
        goodGift: {
            partner: [
                'randomResponse1',
                'randomResponse2',
                'randonResponse3'
            ],            
            family: [
                'randomResponse1',
                'randomResponse2',
                'randonResponse3'
            ],
            friend: [
                'randomResponse1',
                'randomResponse2',
                'randonResponse3'
            ],      
            aquaintance: [
                'randomResponse1',
                'randomResponse2',
                'randonResponse3'
            ]
        },    
        mediocreGift: {
            partner: [
                'randomResponse1',
                'randomResponse2',
                'randonResponse3'
            ],
            family: [
                'randomResponse1',
                'randomResponse2',
                'randonResponse3'
            ],
            friend: [
                'randomResponse1',
                'randomResponse2',
                'randonResponse3'
            ],
            aquaintance: [
                'randomResponse1',
                'randomResponse2',
                'randonResponse3'
            ]
        },    
        noGift: {
            partner: [
                'randomResponse1',
                'randomResponse2',
                'randonResponse3'
            ],
            family: [
                'randomResponse1',
                'randomResponse2',
                'randonResponse3'
            ],
            friend: [
                'randomResponse1',
                'randomResponse2',
                'randonResponse3'
            ],
            aquaintance: [
                'randomResponse1',
                'randomResponse2',
                'randonResponse3'
            ]
        }
    }    
        

    quizApp.init = function() {
        quizApp.getNames();
        quizApp.answerCollector('relationshipChoice');
        quizApp.provideQuestionsToUser();
        quizApp.answerCollector('firstAnswer');
        quizApp.answerCollector('secondAnswer');
        quizApp.answerCollector('thirdAnswer');
        quizApp.giftTypeCalculator();
    }
    
    quizApp.getNames = function() {
        $('.names').on('submit', function(event){
            event.preventDefault();
            // console.log('submitted');
            quizApp.userName = $('#user-name').val();
            quizApp.recieverName = $('#reciever-name').val();
            // console.log(quizApp.userName);
            // console.log(quizApp.recieverName);
        });
    }   

    quizApp.answerCollector = function(question){
        $(`.${question}`).on('submit', function(event){
            console.log(question);
            event.preventDefault();
            // console.log('submitted');                        
            quizApp[question] = $(`.${question} input[type=radio]:checked`).val();
            console.log(quizApp[question]);
        });
    } 

    //take the relationshipChoice variable and pass it through custom questions object to get the question array
    
    quizApp.provideQuestionsToUser = function() {
        $('.relationshipChoice').on('submit', function(){
            // console.log('provide Questions');
            let i = 1;
            quizApp.customQuestionList[quizApp.relationshipChoice].forEach(function(question){
                $(`.question${i}`).prepend(question);  
                let n = 1;            
                quizApp.answerList[quizApp.relationshipChoice][`question${i}`].forEach(function(answer){
                    $(`.question${i}-answer${n}`).prepend(answer);
                    // console.log(n);
                    n++;
                });
                i++;
            });
        });
    };

    
    //tally points and drop reciever in one of three gift buckets
    quizApp.giftTypeCalculator = function() {
        $('.generateResponse').on('click', function(){
            quizApp.score = parseInt(quizApp.firstAnswer) + parseInt(quizApp.secondAnswer) + parseInt(quizApp.thirdAnswer);
            console.log(quizApp.score);
            if (quizApp.score <= 4){
                quizApp.giftType = 'noGift';
            } else if (quizApp.score <= 8){
                quizApp.giftType = 'mediocreGift';
            } else {
                quizApp.giftType = 'goodGift';
            }
            console.log(quizApp.giftType);
            quizApp.responseGenerator();
        });
    }

    quizApp.responseGenerator = function() {
        //tally points from questions - if total is over 8 award 'goodGift' over 4 award 'mediocreGift' below 4 'noGift'
        //choose the array that matches the 'relationshipChoice' variable as well as the gift
        const arrayNumber = Math.floor(Math.random() * 3);
        console.log(`arrayNumber is ${arrayNumber}`);
        const response = quizApp.response[quizApp.giftType][quizApp.relationshipChoice][0];
        console.log(response);

    }



    //give answers value













//Should I get this person a gift






//provide a slider that allows the user to imput their christmas spirit <<<maybe
//store christmas spirit as a variable <<<maybe





//***Data Management */

//Create an object that contains 4 arrays
//Object should be named Results
//Each array within the object should have at least 



//each array will contain 3 final options that will be selected at random to ensure variation in responses


