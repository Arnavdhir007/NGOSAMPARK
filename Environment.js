/* =========================================================
                    MOBILE MENU
========================================================= */

function toggleMenu() {

    const navLinks =
        document.querySelector(".nav-links");

    if (navLinks) {

        navLinks.classList.toggle("active");

    }

}


/* =========================================================
                ECO VOLUNTEER POPUP
========================================================= */

function openEcoVolunteerPopup() {

    const popup =
        document.getElementById("ecoVolunteerPopup");

    if (popup) {

        popup.style.display = "flex";

    }

}


function closeEcoVolunteerPopup() {

    const popup =
        document.getElementById("ecoVolunteerPopup");

    if (popup) {

        popup.style.display = "none";

    }

}


/* =========================================================
                ECO VOLUNTEER FORM
========================================================= */

function submitEcoVolunteer() {

    const name =
        document
            .getElementById("ecoVolunteerName")
            .value
            .trim();

    const phone =
        document
            .getElementById("ecoVolunteerPhone")
            .value
            .trim();

    const email =
        document
            .getElementById("ecoVolunteerEmail")
            .value
            .trim();

    const interest =
        document
            .getElementById("ecoVolunteerInterest")
            .value;


    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        interest === ""
    ) {

        alert(
            "🌱 Please fill in all the fields."
        );

        return;

    }


    document.querySelector(
        "#ecoVolunteerPopup .popup-content"
    ).innerHTML = `

        <span class="close"
              onclick="closeEcoVolunteerPopup()">

            &times;

        </span>

        <h2>
            🎉 Welcome To Sampark!
        </h2>

        <p>

            Thank you,
            <b>${name}</b>! 🌱

        </p>

        <p>

            We're excited to have you join
            our environmental community.

        </p>

        <p>

            Your interest in
            <b>${interest}</b>
            can help create a greener future.

        </p>

        <button class="donate-btn"
                onclick="closeEcoVolunteerPopup()">

            Let's Make A Difference 💚

        </button>

    `;

}


/* =========================================================
                GREEN MISSION POPUP
========================================================= */

function openGreenMissionPopup() {

    const popup =
        document.getElementById("greenMissionPopup");

    if (popup) {

        popup.style.display = "flex";

    }

}


function closeGreenMissionPopup() {

    const popup =
        document.getElementById("greenMissionPopup");

    if (popup) {

        popup.style.display = "none";

    }

}


/* =========================================================
                GREEN MISSION FORM
========================================================= */

function submitGreenMission() {

    const name =
        document
            .getElementById("greenMissionName")
            .value
            .trim();

    const type =
        document
            .getElementById("greenMissionType")
            .value;

    const message =
        document
            .getElementById("greenMissionMessage")
            .value
            .trim();


    if (
        name === "" ||
        type === "" ||
        message === ""
    ) {

        alert(
            "🌍 Please complete the form."
        );

        return;

    }


    document.querySelector(
        "#greenMissionPopup .popup-content"
    ).innerHTML = `

        <span class="close"
              onclick="closeGreenMissionPopup()">

            &times;

        </span>

        <h2>
            🌱 You're In!
        </h2>

        <p>

            Thank you,
            <b>${name}</b>! 💚

        </p>

        <p>

            We've received your interest in
            <b>${type}</b>.

        </p>

        <p>

            Every person who joins the mission
            makes our green community stronger.

        </p>

        <button class="donate-btn"
                onclick="closeGreenMissionPopup()">

            🌍 Let's Go!

        </button>

    `;

}


/* =========================================================
                ENVIRONMENT DONATION POPUP
========================================================= */

function openEnvironmentDonatePopup() {

    const popup =
        document.getElementById(
            "environmentDonatePopup"
        );

    if (popup) {

        popup.style.display = "flex";

    }

}


function closeEnvironmentDonatePopup() {

    const popup =
        document.getElementById(
            "environmentDonatePopup"
        );

    if (popup) {

        popup.style.display = "none";

    }

}


/* =========================================================
                DONATION COMPLETE
========================================================= */

function environmentPaymentDone() {

    const name =
        document
            .getElementById("donorName")
            .value
            .trim();

    const amount =
        document
            .getElementById("donationAmount")
            .value
            .trim();


    if (
        name === "" ||
        amount === ""
    ) {

        alert(
            "💚 Please enter your name and amount."
        );

        return;

    }


    document.querySelector(
        "#environmentDonatePopup .popup-content"
    ).innerHTML = `

        <span class="close"
              onclick="closeEnvironmentDonatePopup()">

            &times;

        </span>

        <h2>
            🌱 Thank You!
        </h2>

        <p>

            Thank you,
            <b>${name}</b>! 💚

        </p>

        <p>

            Your support of
            <b>₹${amount}</b>
            can help strengthen environmental
            initiatives.

        </p>

        <p>

            Together, we're growing a greener
            tomorrow. 🌍

        </p>

        <button class="donate-btn"
                onclick="closeEnvironmentDonatePopup()">

            Done 💚

        </button>

    `;

}


/* =========================================================
                    FAQ ACCORDION
========================================================= */

function toggleFAQ(button) {

    const item =
        button.parentElement;

    const answer =
        item.querySelector(".faq-answer");


    /* Close every other FAQ */

    document
        .querySelectorAll(".faq-item")
        .forEach(function (otherItem) {

            if (otherItem !== item) {

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

        });


    /* Toggle selected FAQ */

    item.classList.toggle("active");


    if (
        item.classList.contains("active")
    ) {

        answer.style.maxHeight =
            answer.scrollHeight + "px";

    }

    else {

        answer.style.maxHeight = null;

    }

}


/* =========================================================
                    SCROLL TO TOP
========================================================= */

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


/* =========================================================
                    FADE-IN
========================================================= */

const fadeElements =
    document.querySelectorAll(
        "section, .mission-card, .service-card, " +
        ".awareness-card, .step, .biodiversity-card, " +
        ".education-card, .action-card, .why-card, " +
        ".impact-card"
    );


const fadeObserver =
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
            threshold: 0.15
        }

    );


fadeElements.forEach(
    function (element) {

        fadeObserver.observe(element);

    }
);


/* =========================================================
                    IMPACT COUNTERS
========================================================= */

const counters =
    document.querySelectorAll(
        ".impact-card h1"
    );


let countersStarted = false;


function animateCounters() {

    if (countersStarted) {

        return;

    }

    countersStarted = true;


    counters.forEach(
        function (counter) {

            const target =
                parseInt(
                    counter.innerText
                        .replace(/\D/g, "")
                );


            let current = 0;


            const increment =
                Math.max(
                    1,
                    Math.ceil(target / 100)
                );


            function updateCounter() {

                current += increment;


                if (current < target) {

                    counter.innerText =
                        current + "+";

                    requestAnimationFrame(
                        updateCounter
                    );

                }

                else {

                    counter.innerText =
                        target + "+";

                }

            }


            updateCounter();

        }
    );

}


/* Start counters when impact section appears */

const impactSection =
    document.getElementById("impact");


if (impactSection) {

    const impactObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            animateCounters();

                        }

                    }
                );

            },

            {
                threshold: 0.4
            }

        );


    impactObserver.observe(
        impactSection
    );

}


/* =========================================================
                CLOSE POPUPS OUTSIDE
========================================================= */

window.addEventListener(
    "click",
    function (event) {

        const ecoPopup =
            document.getElementById(
                "ecoVolunteerPopup"
            );

        const missionPopup =
            document.getElementById(
                "greenMissionPopup"
            );

        const donationPopup =
            document.getElementById(
                "environmentDonatePopup"
            );


        if (
            event.target === ecoPopup
        ) {

            closeEcoVolunteerPopup();

        }


        if (
            event.target === missionPopup
        ) {

            closeGreenMissionPopup();

        }


        if (
            event.target === donationPopup
        ) {

            closeEnvironmentDonatePopup();

        }

    }
);


/* =========================================================
            CLOSE MOBILE MENU AFTER LINK CLICK
========================================================= */

document
    .querySelectorAll(".nav-links a")
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    const navLinks =
                        document.querySelector(
                            ".nav-links"
                        );

                    if (navLinks) {

                        navLinks.classList.remove(
                            "active"
                        );

                    }

                }
            );

        }
    );


/* =========================================================
                    ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeEcoVolunteerPopup();

            closeGreenMissionPopup();

            closeEnvironmentDonatePopup();

        }

    }
);


/* =========================================================
                    MASCOT
========================================================= */

const mascot =
    document.getElementById("mascot");


if (mascot) {

    mascot.addEventListener(
        "click",
        function () {

            alert(
                "🌱 Every small action can help protect our planet! 🌍"
            );

        }
    );

}


/* =========================================================
                HERO PARALLAX EFFECT
========================================================= */

window.addEventListener(
    "scroll",
    function () {

        const hero =
            document.querySelector(".hero");

        if (!hero) {

            return;

        }


        const scrollPosition =
            window.scrollY;


        if (scrollPosition < 700) {

            hero.style.backgroundPosition =
                "center " +
                (scrollPosition * 0.25) +
                "px";

        }

    }
);


/* =========================================================
                CLOSE MENU ON RESIZE
========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 768) {

            const navLinks =
                document.querySelector(
                    ".nav-links"
                );

            if (navLinks) {

                navLinks.classList.remove(
                    "active"
                );

            }

        }

    }
);


/* =========================================================
                    PAGE READY
========================================================= */

window.addEventListener(
    "load",
    function () {

        document.body.style.opacity =
            "1";

    }
);