
    const quizApp = {};
    
    $(function(){
        quizApp.init();
    }); //end of doc ready

    quizApp.init = function () {
        quizApp.getNames();
        quizApp.nextSection();
        quizApp.answerCollector('relationshipChoice');
        quizApp.answerCollector('firstAnswer');
        quizApp.answerCollector('secondAnswer');
        quizApp.answerCollector('thirdAnswer');
        quizApp.giftTypeCalculator();
    }

    //create object with an array of questions

    customQuestionList = {
        partner: [
            '<H3>How long have you been together?</H3>', 
            `<H3>How likely is it that ${quizApp.receiverName} has heard "Thankyou, Next"?</H3>`, 
            `<H3>Is ${quizApp.receiverName} generally a big fan of the holidays?</H3>`
        ],
        family: [
            '<H3>How likely is it you are going to see this person over the holidays?</H3>',
            `<H3>How likely is it that ${quizApp.receiverName} will get you something?</H3>`,
            `<H3>How often do you see ${quizApp.receiverName} through the year?</H3>`
        ],
        friend: [
            `<H3>How often do you see ${quizApp.receiverName} through the year?</H3>`,
            `<H3>How likely is it that ${quizApp.receiverName} will get you something?</H3>`,
            `<H3>Is ${quizApp.receiverName} generally a big fan of the holidays?</H3>`
        ],
        aquaintance: [
            `<H3>How likely is it that ${quizApp.receiverName} will get you something?</H3>`,
            `<H3>How often do you run into ${quizApp.receiverName}?</H3>`,
            '<H3>Would it be difficult to cut them out of your life entirely?</H3>'
        ]
    }

    answerList = {
        partner: {
            question1: [
                'Over a year',
                'Under a year',
                'Under a month',
                'I barely know this person'
            ],
            question2: [
                `${quizApp.receiverName} has that song on loop!`,
                `I have heard them singing along`,
                `${quizApp.receiverName} isn't really an Ariana Grande Fan`,
                `${quizApp.receiverName} may have caught it on the radio...Also, ${quizApp.receiverName} listens to the radio...`
            ],
            question3: [
                `${quizApp.receiverName} is on a steady diet of cinimon and candy canes as soon as halloween ends`,
                `They've been known to enjoy the holidays`,
                'They participate',
                'No, not really'
            ]
        },
        family: {
            question1: [
                `${quizApp.receiverName} is unavoidable this time of year`,
                `It's quite likely`,
                '50/50',
                `I doubt I'll be running into them.`
            ],
            question2: [
                `Oh, ${quizApp.receiverName} is always giving out thoughful gifts`,
                `Likely they'll get me something`,
                `I don't know`,
                `${quizApp.receiverName} hasn't given me anything in years!`
            ],
            question3: [
                'A few times a month',
                'Once a month',
                'Once every 3 months',
                'Maybe once...this time of year...'
            ]
        },
        friend: {
            question1: [
                'A few times a month',
                'Once a month',
                'Once every 3 months',
                'Maybe once...this time of year...'
            ],
            question2: [
                `Oh, ${quizApp.receiverName} is always giving out thoughful gifts`,
                `Likely they'll get me something`,
                `I don't know`,
                `${quizApp.receiverName} hasn't given me anything in years!`
            ],
            question3: [
                `${quizApp.receiverName} is on a steady diet of cinimon and candy canes as soon as halloween ends`,
                `They've been known to enjoy the holidays`,
                'They participate',
                'No, not really'
            ]
        },
        aquaintance: {
            question1: [
                `Oh, ${quizApp.receiverName} is always giving out thoughful gifts`,
                `Likely they'll get me something`,
                `I don't know`,
                `${quizApp.receiverName} hasn't given me anything as long as I've known them`
            ],
            question2: [
                'Constantly, at least once a day.',
                'Every week at least',
                'At least once a month',
                'Once every few months'
            ],
            question3: [
                'Avoiding them would make a lot of things more inconvenient',
                `I'd have to change my schedule sligtly`,
                'Doable!',
                `Wouldn't miss them at all!`
            ]
        },
    }
    
    response = {
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
        

    
    
    quizApp.getNames = function() {
        $('.name-collection-form').on('submit', function(event){
            event.preventDefault();
            quizApp.userName = $('#user-name').val();
            quizApp.receiverName = $('#receiver-name').val();
            quizApp.addArraysToQuizApp();
            quizApp.provideQuestionsToUser();
        });
    }   

    quizApp.answerCollector = function(question){
        $(`.${question}`).on('submit', function(event){
            event.preventDefault();     
            quizApp[question] = $(`.${question} input[type=radio]:checked`).val();
        });
    } 

    //take the relationshipChoice variable and pass it through custom questions object to get the question array
    
    quizApp.provideQuestionsToUser = function() {
        console.log(quizApp.userName);
        console.log(quizApp.receiverName);
        $('.base-question .question-container').append(`<H3>How do you know ${quizApp.receiverName}?</H3>`);
        $('.relationshipChoice').on('submit', function(){
            let i = 1;
            quizApp.customQuestionList[quizApp.relationshipChoice].forEach(function(question){
                $(`.question${i} .question-container`).prepend(question); 
                console.log(question); 
                let n = 1;            
                quizApp.answerList[quizApp.relationshipChoice][`question${i}`].forEach(function(answer){
                    $(`.question${i}-answer${n} .answer-button`).prepend(`<p>${answer}</p>`);
                    console.log(answer);
                    n++;
                });
                i++;
            });
        });
    };
    
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

    quizApp.addArraysToQuizApp = function() {
        quizApp.customQuestionList = customQuestionList;
        quizApp.answerList = answerList;
        quizApp.response = response;
    }


// JS STYLING

   