
    
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
            '<H3>How long have you been together?</H3>', 
            '<H3>How likely is it your parnter has heard "Thankyou, Next" by Ariana Grande</H3>', 
            '<H3>How likely is it you partner will get you something?</H3>'
        ],
        family: [
            '<H3>How likely is it you are going to see this person over the holidays?</H3>',
            '<H3>How likely is it you partner will get you something?</H3>',
            '<H3>question3</H3>'
        ],
        friend: [
            '<H3>asldkjfla;ksdjflasdjf</H3>',
            '<H3>How likely is it you partner will get you something?</H3>',
            '<H3>question3</H3>'
        ],
        aquaintance: [
            '<H3>How likely is it you partner will get you something?</H3>',
            '<H3>How often do you run into this person?</H3>',
            '<H3>Would it be difficult to cut them out of your life entirely?</H3>'
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
        quizApp.nextSection();
        quizApp.answerCollector('relationshipChoice');
        quizApp.provideQuestionsToUser();
        quizApp.answerCollector('firstAnswer');
        quizApp.answerCollector('secondAnswer');
        quizApp.answerCollector('thirdAnswer');
        quizApp.giftTypeCalculator();
        quizApp.activeOption();
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
                $(`.question${i} .question-container`).prepend(question);  
                let n = 1;            
                quizApp.answerList[quizApp.relationshipChoice][`question${i}`].forEach(function(answer){
                    $(`.question${i}-answer${n} .answer-button`).prepend(`<p>${answer}</p>`);
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
            console.log(`score ${quizApp.score}`);
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
        console.log('set');
        //tally points from questions - if total is over 8 award 'goodGift' over 4 award 'mediocreGift' below 4 'noGift'
        //choose the array that matches the 'relationshipChoice' variable as well as the gift
        const arrayNumber = Math.floor(Math.random() * 3);
        console.log(`arrayNumber is ${arrayNumber}`);
        const response = quizApp.response[quizApp.giftType][quizApp.relationshipChoice][0];
        console.log(response);
        $('.response').append(response);
    }

    quizApp.nextSection = function() {
        $('.game-section-button').on('click', function(){
            console.log("clicked");
            $(this).parents('.game-section').toggleClass('visuallyhidden');
            $(this).parents('.game-section').next().toggleClass('visuallyhidden');
        });
    }



// JS STYLING

    quizApp.activeOption = function() {
        $('.radio-button-answer:active').on()
    }
