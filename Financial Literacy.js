/* =========================================================
        SAMPARK FINANCIAL LITERACY JAVASCRIPT
========================================================= */


/* =========================================================
                    MOBILE MENU
========================================================= */

function toggleMenu() {

    const nav = document.querySelector(".nav-links");

    if (nav) {
        nav.classList.toggle("active");
    }

}


/* =========================================================
                CLOSE MOBILE MENU
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            const nav = document.querySelector(".nav-links");

            if (nav) {
                nav.classList.remove("active");
            }

        });

    });

});


/* =========================================================
                FINANCIAL LEARNING POPUP
========================================================= */

function openFinancialPopup() {

    const popup =
        document.getElementById("financialPopup");

    if (popup) {

        popup.style.display = "flex";

    }

}


function closeFinancialPopup() {

    const popup =
        document.getElementById("financialPopup");

    if (popup) {

        popup.style.display = "none";

    }

}


/* =========================================================
                FINANCIAL LEARNING FORM
========================================================= */

function submitFinancialInterest() {

    const name =
        document.getElementById("financialName").value.trim();

    const category =
        document.getElementById("financialAge").value;

    const topic =
        document.getElementById("financialTopic").value;


    if (
        name === "" ||
        category === "" ||
        topic === ""
    ) {

        alert(
            "💙 Please fill in all the details!"
        );

        return;

    }


    const popupContent =
        document.querySelector(
            "#financialPopup .popup-content"
        );


    popupContent.innerHTML = `

        <span class="close"
              onclick="closeFinancialPopup()">

            &times;

        </span>


        <h2>
            🎉 Welcome to Sampark!
        </h2>


        <p>

            Hey <strong>${name}</strong>! 💙

        </p>


        <p>

            We're happy that you want to learn
            about <strong>${topic}</strong>.

        </p>


        <p>

            Your category:
            <strong>${category}</strong>

        </p>


        <p>

            Keep learning, keep asking questions
            and make smart financial decisions! 🚀

        </p>


        <button class="donate-btn"
                onclick="closeFinancialPopup()">

            Let's Learn! 💰

        </button>

    `;

}


/* =========================================================
                    MONEY QUIZ
========================================================= */

const quizQuestions = [

    {
        question:
            "What is the best reason to save money?",

        options: [

            "To spend everything immediately",

            "To prepare for future needs",

            "To impress your friends",

            "Because saving is boring"

        ],

        answer: 1

    },


    {
        question:
            "What does a budget help you do?",

        options: [

            "Track and plan your money",

            "Spend without thinking",

            "Borrow more money",

            "Avoid saving"

        ],

        answer: 0

    },


    {
        question:
            "Which of these is usually a NEED?",

        options: [

            "Gaming console",

            "Designer shoes",

            "Food",

            "Expensive watch"

        ],

        answer: 2

    },


    {
        question:
            "What should you do before buying something expensive?",

        options: [

            "Buy it immediately",

            "Compare prices and think about it",

            "Borrow money",

            "Ignore the price"

        ],

        answer: 1

    },


    {
        question:
            "Which is a good financial habit?",

        options: [

            "Spending everything",

            "Saving regularly",

            "Sharing your PIN",

            "Clicking every link"

        ],

        answer: 1

    },


    {
        question:
            "What should you NEVER share with strangers?",

        options: [

            "Your favourite colour",

            "Your favourite food",

            "Your OTP or PIN",

            "Your favourite movie"

        ],

        answer: 2

    }

];


let currentQuestion = 0;

let quizScore = 0;


/* =========================================================
                OPEN MONEY QUIZ
========================================================= */

function openMoneyQuiz() {

    const popup =
        document.getElementById("moneyQuizPopup");

    if (!popup) return;


    popup.style.display = "flex";


    currentQuestion = 0;

    quizScore = 0;


    showQuizQuestion();

}


/* =========================================================
                CLOSE MONEY QUIZ
========================================================= */

function closeMoneyQuiz() {

    const popup =
        document.getElementById("moneyQuizPopup");

    if (popup) {

        popup.style.display = "none";

    }

}


/* =========================================================
                SHOW QUESTION
========================================================= */

function showQuizQuestion() {

    const questionBox =
        document.getElementById("quizQuestion");

    const optionsBox =
        document.getElementById("quizOptions");

    const resultBox =
        document.getElementById("quizResult");

    const nextButton =
        document.getElementById("nextQuestionBtn");


    if (
        !questionBox ||
        !optionsBox
    ) {

        return;

    }


    const question =
        quizQuestions[currentQuestion];


    questionBox.innerHTML =

        `<strong>
            Question ${currentQuestion + 1}
            of ${quizQuestions.length}
        </strong>
        <br><br>
        ${question.question}`;


    optionsBox.innerHTML = "";


    if (resultBox) {

        resultBox.innerHTML = "";

    }


    question.options.forEach(
        function (option, index) {

            const button =
                document.createElement("button");


            button.className =
                "quiz-option";


            button.innerHTML =
                option;


            button.onclick =
                function () {

                    selectQuizAnswer(
                        index,
                        button
                    );

                };


            optionsBox.appendChild(button);

        }
    );


    if (nextButton) {

        nextButton.style.display = "none";

    }

}


/* =========================================================
                SELECT ANSWER
========================================================= */

function selectQuizAnswer(
    selectedAnswer,
    selectedButton
) {

    const question =
        quizQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            "#quizOptions .quiz-option"
        );


    buttons.forEach(
        function (button) {

            button.disabled = true;

        }
    );


    if (
        selectedAnswer ===
        question.answer
    ) {

        quizScore++;


        selectedButton.classList.add(
            "correct"
        );


        showQuizMessage(
            "🎉 Correct! Great job!",
            true
        );

    }

    else {

        selectedButton.classList.add(
            "wrong"
        );


        if (buttons[question.answer]) {

            buttons[
                question.answer
            ].classList.add(
                "correct"
            );

        }


        showQuizMessage(
            "💡 Not quite! The highlighted answer is correct.",
            false
        );

    }


    const nextButton =
        document.getElementById(
            "nextQuestionBtn"
        );


    if (nextButton) {

        nextButton.style.display =
            "inline-block";

    }

}


/* =========================================================
                QUIZ MESSAGE
========================================================= */

function showQuizMessage(
    message,
    correct
) {

    const resultBox =
        document.getElementById(
            "quizResult"
        );


    if (!resultBox) return;


    resultBox.innerHTML =
        message;


    if (correct) {

        resultBox.style.color =
            "#16a34a";

    }

    else {

        resultBox.style.color =
            "#ef4444";

    }

}


/* =========================================================
                NEXT QUESTION
========================================================= */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        quizQuestions.length
    ) {

        showQuizResult();

        return;

    }


    showQuizQuestion();

}


/* =========================================================
                QUIZ RESULT
========================================================= */

function showQuizResult() {

    const questionBox =
        document.getElementById(
            "quizQuestion"
        );

    const optionsBox =
        document.getElementById(
            "quizOptions"
        );

    const resultBox =
        document.getElementById(
            "quizResult"
        );

    const nextButton =
        document.getElementById(
            "nextQuestionBtn"
        );


    if (questionBox) {

        questionBox.innerHTML =
            "🎉 Quiz Complete!";

    }


    if (optionsBox) {

        optionsBox.innerHTML = "";

    }


    if (resultBox) {

        resultBox.innerHTML =

            `You scored
            <strong>
                ${quizScore}
            </strong>
            out of
            <strong>
                ${quizQuestions.length}
            </strong>! 💰`;

        resultBox.style.color =
            "#075bd8";

    }


    if (nextButton) {

        nextButton.innerHTML =
            "🔄 Try Again";

        nextButton.style.display =
            "inline-block";


        nextButton.onclick =
            function () {

                nextButton.innerHTML =
                    "Next Question ➡️";

                openMoneyQuiz();

            };

    }

}


/* =========================================================
                    MONEY TIPS
========================================================= */

const moneyTips = [

    "💰 Save a little before spending the rest.",

    "📊 A budget helps you understand where your money goes.",

    "🐷 Small savings can become a big habit.",

    "🧠 Think before making an unnecessary purchase.",

    "🔐 Never share your OTP, PIN or password.",

    "🎯 Set a clear goal before you start saving.",

    "💳 Be careful with unknown payment links.",

    "📚 Learn before making financial decisions."

];


function showMoneyTip() {

    const tipBox =
        document.getElementById(
            "moneyTip"
        );


    if (!tipBox) return;


    const random =
        Math.floor(
            Math.random() *
            moneyTips.length
        );


    tipBox.innerHTML =
        moneyTips[random];

}


/* =========================================================
                        FAQ
========================================================= */

function toggleFAQ(button) {

    const item =
        button.parentElement;


    const answer =
        item.querySelector(
            ".faq-answer"
        );


    const allItems =
        document.querySelectorAll(
            ".faq-item"
        );


    allItems.forEach(
        function (otherItem) {

            if (
                otherItem !== item
            ) {

                otherItem.classList.remove(
                    "active"
                );


                const otherAnswer =
                    otherItem.querySelector(
                        ".faq-answer"
                    );


                if (otherAnswer) {

                    otherAnswer.style.maxHeight =
                        null;

                }

            }

        }
    );


    item.classList.toggle(
        "active"
    );


    if (
        item.classList.contains(
            "active"
        )
    ) {

        answer.style.maxHeight =
            answer.scrollHeight +
            "px";

    }

    else {

        answer.style.maxHeight =
            null;

    }

}


/* =========================================================
                    SCROLL TO TOP
========================================================= */

const topBtn =
    document.getElementById(
        "topBtn"
    );


if (topBtn) {

    window.addEventListener(
        "scroll",
        function () {

            if (
                window.scrollY > 350
            ) {

                topBtn.style.display =
                    "block";

            }

            else {

                topBtn.style.display =
                    "none";

            }

        }
    );


    topBtn.onclick =
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        };

}


/* =========================================================
                CLOSE POPUPS
========================================================= */

window.addEventListener(
    "click",
    function (event) {

        const financialPopup =
            document.getElementById(
                "financialPopup"
            );

        const quizPopup =
            document.getElementById(
                "moneyQuizPopup"
            );


        if (
            event.target ===
            financialPopup
        ) {

            closeFinancialPopup();

        }


        if (
            event.target ===
            quizPopup
        ) {

            closeMoneyQuiz();

        }

    }
);


/* =========================================================
                    FADE-IN
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const elements =
            document.querySelectorAll(

                "section, " +
                ".mission-card, " +
                ".why-card, " +
                ".money-card, " +
                ".saving-card, " +
                ".digital-card, " +
                ".fraud-card, " +
                ".investment-card, " +
                ".student-card, " +
                ".program-card, " +
                ".impact-card"

            );


        const observer =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show"
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.1
                }

            );


        elements.forEach(
            function (element) {

                observer.observe(
                    element
                );

            }

        );

    }
);


/* =========================================================
                PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    function () {

        document.body.style.opacity =
            "1";

    }
);