
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
                `Sound's like ${quizApp.receiverName} is a pretty great partner! Kinda weird that you are taking a quiz to find out if you should get them a gift. Maybe you can get them the gift of not having to date you next year!`,
                `Sound's like ${quizApp.receiverName} is a pretty great partner! Kinda weird that you are taking a quiz to find out if you should get them a gift. Maybe you can get them the gift of not having to date you!`,
                `Sound's like ${quizApp.receiverName} is a pretty great partner! Kinda weird that you are taking a quiz to find out if you should get them a gift. Maybe you can get them the gift of not having to date you!`
            ],            
            family: [
                `You're family loves you! Stop being cheap, get them something nice!`,
                `You're family loves you! Stop being cheap, get them something nice!`,
                `You're family loves you! Stop being cheap, get them something nice!`,
            ],
            friend: [
                `You're friend loves you! Stop being cheap, get them something nice!`,
                `You're friend loves you! Stop being cheap, get them something nice!`,
                `You're friend loves you! Stop being cheap, get them something nice!`
            ],      
            aquaintance: [
                `Might be a good idea to build some goodwill. It would be worthwile to grab ${quizApp.receiverName}`,
                `Might be a good idea to build some goodwill. It would be worthwile to grab ${quizApp.receiverName}`,
                `Might be a good idea to build some goodwill. It would be worthwile to grab ${quizApp.receiverName}`
            ]
        },    
        mediocreGift: {
            partner: [
                `You could probably get away with some drug store flowers if I'm being honest`,
                `You could probably get away with some drug store flowers if I'm being honest`,
                `You could probably get away with some drug store flowers if I'm being honest`
            ],
            family: [
                `Sounds like ${quizApp.receiverName} is in cheap bottle of wine territory.`,
                `Sounds like ${quizApp.receiverName} is in cheap bottle of wine territory.`,
                `Sounds like ${quizApp.receiverName} is in cheap bottle of wine territory.`
            ],
            friend: [
                `Sounds like ${quizApp.receiverName} is in cheap bottle of wine territory.`,
                `Sounds like ${quizApp.receiverName} is in cheap bottle of wine territory.`,
                `Sounds like ${quizApp.receiverName} is in cheap bottle of wine territory.`
            ],
            aquaintance: [
                `${quizApp.receiverName} seems alright. Sign a card if you see one going around.`,
                `${quizApp.receiverName} seems alright. Sign a card if you see one going around.`,
                `${quizApp.receiverName} seems alright. Sign a card if you see one going around.`
            ]
        },    
        noGift: {
            partner: [
                `I wouldn't bother, I don't anticipate this lasting anyway.`,
                `I wouldn't bother, I don't anticipate this lasting anyway.`,
                `I wouldn't bother, I don't anticipate this lasting anyway.`
            ],
            family: [
                `Family is family for life! I say take the free pass and don't bother.`,
                `Family is family for life! I say take the free pass and don't bother.`,
                `Family is family for life! I say take the free pass and don't bother.`
            ],
            friend: [
                `A real friend doesn't need material gestures. Don't bother.`,
                `A real friend doesn't need material gestures. Don't bother.`,
                `A real friend doesn't need material gestures. Don't bother.`
            ],
            aquaintance: [
                `You don't owe ${quizApp.receiverName} anything.`,
                `You don't owe ${quizApp.receiverName} anything.`,
                `You don't owe ${quizApp.receiverName} anything.`
            ]
        }
    }    
        

    
    
    quizApp.getNames = function() {
        $('.name-collection-form').on('submit', function(event){
            event.preventDefault();
            quizApp.userName = $('#user-name').val();
            quizApp.receiverName = $('#receiver-name').val();
            quizApp.addArraysToQuizApp();
            if (quizApp.userName === undefined || quizApp.receiverName === undefined) {
                console.log("names aren't entered");
                return 
            } else {
                quizApp.provideQuestionsToUser();
            }
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
        $('.base-question .question-container').append(`<H3>How do you know ${quizApp.receiverName}?</H3>`);
        $('.relationshipChoice').on('submit', function(){
            let i = 1;
            quizApp.customQuestionList[quizApp.relationshipChoice].forEach(function(question){
                $(`.question${i} .question-container`).prepend(question); 
                // console.log(question); 
                let n = 1;            
                quizApp.answerList[quizApp.relationshipChoice][`question${i}`].forEach(function(answer){
                    $(`.question${i}-answer${n} .answer-button`).prepend(`<p>${answer}</p>`);
                    // console.log(answer);
                    n++;
                });
                i++;
            });
        });
    };
    
    quizApp.giftTypeCalculator = function() {
        $('.generate-response').on('click', function(){
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
        $('.response h3').append(response);
    }

    quizApp.nextSection = function() {
        $('.game-section-button').on('click', function(){
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

   