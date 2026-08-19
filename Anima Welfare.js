/* ==========================================
        SAMPARK - ANIMAL WELFARE JS
========================================== */


/* ==========================================
        MOBILE MENU
========================================== */

function toggleMenu() {

    const nav = document.querySelector(".nav-links");

    if (nav) {

        nav.classList.toggle("active");

    }

}


/* ==========================================
        SMOOTH SCROLL
========================================== */

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* ==========================================
        SCROLL REVEAL
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

});


/* ==========================================
        ANIMAL FACTS
========================================== */

const animalFacts = [

    "🐶 Dogs can understand many human words and emotions.",

    "🐱 Cats use different sounds and body language to communicate.",

    "🐘 Elephants show strong social bonds and care for members of their herd.",

    "🐬 Dolphins are highly intelligent and communicate with one another.",

    "🐢 Sea turtles can travel thousands of kilometres during their lives.",

    "🐝 Bees play an important role in pollinating plants.",

    "🦜 Many birds can learn sounds and communicate with complex calls.",

    "🐄 Cows are social animals and can form strong bonds with other cows.",

    "🐕 Adoption gives abandoned animals a second chance at a loving home.",

    "💚 A bowl of clean water can make a huge difference to an animal on a hot day.",

    "🐾 Kindness towards animals helps create kinder communities.",

    "❤️ Every animal deserves food, safety, care and compassion."

];


function showAnimalFact() {

    const factBox =
        document.getElementById("animalFact");

    if (!factBox) {

        return;

    }


    const randomIndex =
        Math.floor(
            Math.random() * animalFacts.length
        );


    factBox.style.opacity = "0";


    setTimeout(function () {

        factBox.innerHTML =
            animalFacts[randomIndex];

        factBox.style.opacity = "1";

    }, 200);

}


/* ==========================================
        ANIMAL HELP POPUP
========================================== */

function openAnimalHelp() {

    const popup =
        document.getElementById(
            "animalHelpPopup"
        );

    if (popup) {

        popup.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

}


function closeAnimalHelp() {

    const popup =
        document.getElementById(
            "animalHelpPopup"
        );

    if (popup) {

        popup.style.display = "none";

        document.body.style.overflow = "";

    }

}


/* ==========================================
        SUBMIT ANIMAL HELP
========================================== */

function submitAnimalHelp() {

    const name =
        document.getElementById(
            "animalName"
        ).value.trim();


    const phone =
        document.getElementById(
            "animalPhone"
        ).value.trim();


    const location =
        document.getElementById(
            "animalLocation"
        ).value.trim();


    const description =
        document.getElementById(
            "animalDescription"
        ).value.trim();


    if (

        name === "" ||

        phone === "" ||

        location === "" ||

        description === ""

    ) {

        alert(
            "🐾 Please complete all the fields."
        );

        return;

    }


    const popupContent =
        document.querySelector(
            "#animalHelpPopup .popup-content"
        );


    popupContent.innerHTML = `

        <span
            class="close"
            onclick="closeAnimalHelp()">

            &times;

        </span>


        <h2>
            🐾 Thank You!
        </h2>


        <p>

            Thank you,
            <strong>${name}</strong>.

        </p>


        <p>

            Your animal help request has been
            received.

        </p>


        <p>

            A Sampark volunteer will try to
            contact you as soon as possible.

        </p>


        <button
            onclick="closeAnimalHelp()">

            💚 Done

        </button>

    `;

}


/* ==========================================
        ADOPTION POPUP
========================================== */

function openAdoptionPopup() {

    const popup =
        document.getElementById(
            "adoptionPopup"
        );

    if (popup) {

        popup.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

}


function closeAdoptionPopup() {

    const popup =
        document.getElementById(
            "adoptionPopup"
        );

    if (popup) {

        popup.style.display = "none";

        document.body.style.overflow = "";

    }

}


/* ==========================================
        SUBMIT ADOPTION
========================================== */

function submitAdoption() {

    const name =
        document.getElementById(
            "adopterName"
        ).value.trim();


    const phone =
        document.getElementById(
            "adopterPhone"
        ).value.trim();


    const reason =
        document.getElementById(
            "adoptionReason"
        ).value.trim();


    if (

        name === "" ||

        phone === "" ||

        reason === ""

    ) {

        alert(
            "🏠 Please fill in all the fields."
        );

        return;

    }


    const popupContent =
        document.querySelector(
            "#adoptionPopup .popup-content"
        );


    popupContent.innerHTML = `

        <span
            class="close"
            onclick="closeAdoptionPopup()">

            &times;

        </span>


        <h2>
            🐶 Thank You!
        </h2>


        <p>

            Thank you,
            <strong>${name}</strong>!

        </p>


        <p>

            Your interest in adopting an animal
            has been received.

        </p>


        <p>

            Giving an animal a forever home is
            an amazing act of kindness. ❤️

        </p>


        <button
            onclick="closeAdoptionPopup()">

            🐾 Done

        </button>

    `;

}


/* ==========================================
        VOLUNTEER POPUP
========================================== */

function openAnimalVolunteer() {

    const popup =
        document.getElementById(
            "animalVolunteerPopup"
        );

    if (popup) {

        popup.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

}


function closeAnimalVolunteer() {

    const popup =
        document.getElementById(
            "animalVolunteerPopup"
        );

    if (popup) {

        popup.style.display = "none";

        document.body.style.overflow = "";

    }

}


/* ==========================================
        SUBMIT VOLUNTEER
========================================== */

function submitAnimalVolunteer() {

    const name =
        document.getElementById(
            "animalVolunteerName"
        ).value.trim();


    const phone =
        document.getElementById(
            "animalVolunteerPhone"
        ).value.trim();


    const role =
        document.getElementById(
            "animalVolunteerRole"
        ).value;


    if (

        name === "" ||

        phone === "" ||

        role === ""

    ) {

        alert(
            "💚 Please complete all the fields."
        );

        return;

    }


    const popupContent =
        document.querySelector(
            "#animalVolunteerPopup .popup-content"
        );


    popupContent.innerHTML = `

        <span
            class="close"
            onclick="closeAnimalVolunteer()">

            &times;

        </span>


        <h2>
            🐾 Welcome To Sampark!
        </h2>


        <p>

            Thank you,
            <strong>${name}</strong>!

        </p>


        <p>

            We're happy that you want to help
            animals through Sampark.

        </p>


        <p>

            Together, we can make a difference. 💚

        </p>


        <button
            onclick="closeAnimalVolunteer()">

            🤝 Awesome!

        </button>

    `;

}


/* ==========================================
        CLOSE POPUPS WHEN CLICKING OUTSIDE
========================================== */

window.addEventListener(
    "click",
    function (event) {

        const animalHelpPopup =
            document.getElementById(
                "animalHelpPopup"
            );


        const adoptionPopup =
            document.getElementById(
                "adoptionPopup"
            );


        const volunteerPopup =
            document.getElementById(
                "animalVolunteerPopup"
            );


        if (
            event.target === animalHelpPopup
        ) {

            closeAnimalHelp();

        }


        if (
            event.target === adoptionPopup
        ) {

            closeAdoptionPopup();

        }


        if (
            event.target === volunteerPopup
        ) {

            closeAnimalVolunteer();

        }

    }
);


/* ==========================================
        ESC KEY CLOSES POPUPS
========================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeAnimalHelp();

            closeAdoptionPopup();

            closeAnimalVolunteer();

        }

    }
);


/* ==========================================
        CLOSE MOBILE MENU AFTER LINK CLICK
========================================== */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                const nav =
                    document.querySelector(
                        ".nav-links"
                    );


                if (nav) {

                    nav.classList.remove(
                        "active"
                    );

                }

            }
        );

    });


/* ==========================================
        SCROLL TO TOP BUTTON
========================================== */

const topBtn =
    document.getElementById("topBtn");


if (topBtn) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                topBtn.style.display =
                    "block";

            }

            else {

                topBtn.style.display =
                    "none";

            }

        }
    );


    topBtn.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* ==========================================
        FACT BOX TRANSITION
========================================== */

const factBox =
    document.getElementById(
        "animalFact"
    );


if (factBox) {

    factBox.style.transition =
        "opacity 0.3s ease";

}


/* ==========================================
        PAGE LOAD
========================================== */

window.addEventListener(
    "load",
    function () {

        document.body.style.opacity = "1";

    }
);


/* ==========================================
        PREVENT EMPTY FORM SUBMISSION
========================================== */

document.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

    }
);
