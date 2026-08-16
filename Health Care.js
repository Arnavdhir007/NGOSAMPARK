/* =========================================================
                    MOBILE MENU
========================================================= */

function toggleMenu() {

    const navLinks = document.querySelector(".nav-links");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }

}


/* =========================================================
                HEALTHCARE POPUP
========================================================= */

function openHealthPopup() {

    const popup = document.getElementById("healthPopup");

    if (popup) {
        popup.style.display = "flex";
    }

}


function closeHealthPopup() {

    const popup = document.getElementById("healthPopup");

    if (popup) {
        popup.style.display = "none";
    }

}


/* =========================================================
                HEALTHCARE REQUEST
========================================================= */

function submitHealthRequest() {

    const name =
        document.getElementById("healthName").value.trim();

    const phone =
        document.getElementById("healthPhone").value.trim();

    const location =
        document.getElementById("healthLocation").value.trim();

    const type =
        document.getElementById("healthType").value;

    const description =
        document.getElementById("healthDescription").value.trim();


    if (
        name === "" ||
        phone === "" ||
        location === "" ||
        type === "" ||
        description === ""
    ) {

        alert("❤️ Please complete the entire form.");

        return;

    }


    document.querySelector("#healthPopup .popup-content").innerHTML = `

        <span class="close"
              onclick="closeHealthPopup()">

            &times;

        </span>

        <h2>
            ✅ Request Received
        </h2>

        <p>
            Thank you, <b>${name}</b>.
        </p>

        <p>
            Your healthcare support request has been received.
        </p>

        <p>
            A Sampark volunteer will contact you
            as soon as possible.
        </p>

        <button class="donate-btn"
                onclick="closeHealthPopup()">

            OK ❤️

        </button>

    `;

}


/* =========================================================
            MEDICAL VOLUNTEER POPUP
========================================================= */

function openMedicalVolunteerPopup() {

    const popup =
        document.getElementById("medicalVolunteerPopup");

    if (popup) {
        popup.style.display = "flex";
    }

}


function closeMedicalVolunteerPopup() {

    const popup =
        document.getElementById("medicalVolunteerPopup");

    if (popup) {
        popup.style.display = "none";
    }

}


/* =========================================================
            MEDICAL VOLUNTEER FORM
========================================================= */

function submitMedicalVolunteer() {

    const name =
        document.getElementById("medicalVolunteerName")
            .value.trim();

    const phone =
        document.getElementById("medicalVolunteerPhone")
            .value.trim();

    const email =
        document.getElementById("medicalVolunteerEmail")
            .value.trim();

    const type =
        document.getElementById("medicalVolunteerType")
            .value;


    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        type === ""
    ) {

        alert("😊 Please fill in all the fields.");

        return;

    }


    document.querySelector(
        "#medicalVolunteerPopup .popup-content"
    ).innerHTML = `

        <span class="close"
              onclick="closeMedicalVolunteerPopup()">

            &times;

        </span>

        <h2>
            🎉 Welcome To Sampark!
        </h2>

        <p>
            Thank you, <b>${name}</b>!
        </p>

        <p>
            We are excited to have you join
            our healthcare volunteer team.
        </p>

        <p>
            Together, we can make healthcare
            more accessible and compassionate.
        </p>

        <button class="donate-btn"
                onclick="closeMedicalVolunteerPopup()">

            Wonderful! ❤️

        </button>

    `;

}


/* =========================================================
                    DONATION POPUP
========================================================= */

function openDonatePopup() {

    const popup =
        document.getElementById("donatePopup");

    if (popup) {
        popup.style.display = "flex";
    }

}


function closeDonatePopup() {

    const popup =
        document.getElementById("donatePopup");

    if (popup) {
        popup.style.display = "none";
    }

}


/* =========================================================
                    DONATION COMPLETE
========================================================= */

function paymentDone() {

    document.querySelector(
        "#donatePopup .popup-content"
    ).innerHTML = `

        <span class="close"
              onclick="closeDonatePopup()">

            &times;

        </span>

        <h2>
            🎉 Thank You!
        </h2>

        <p>
            Your support means a lot to Sampark.
        </p>

        <p>
            Together, we can help create
            healthier communities. ❤️
        </p>

        <button class="donate-btn"
                onclick="closeDonatePopup()">

            Done 💛

        </button>

    `;

}


/* =========================================================
                    FAQ ACCORDION
========================================================= */

function toggleFAQ(button) {

    const item = button.parentElement;

    const answer =
        item.querySelector(".faq-answer");


    /* Close other FAQ answers */

    document.querySelectorAll(".faq-item").forEach(
        otherItem => {

            if (otherItem !== item) {

                otherItem.classList.remove("active");

                const otherAnswer =
                    otherItem.querySelector(".faq-answer");

                otherAnswer.style.maxHeight = null;

            }

        }
    );


    /* Open / close selected FAQ */

    item.classList.toggle("active");


    if (item.classList.contains("active")) {

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

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            topBtn.style.display = "block";

        }

        else {

            topBtn.style.display = "none";

        }

    });


    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =========================================================
                FADE-IN SECTIONS
========================================================= */

const fadeElements =
    document.querySelectorAll(
        "section, .mission-card, .service-card, .awareness-card, .step, .team-card, .impact-card, .why-card"
    );


const fadeObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


fadeElements.forEach(function (element) {

    fadeObserver.observe(element);

});


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


    counters.forEach(function (counter) {

        const target =
            parseInt(
                counter.innerText.replace(/\D/g, "")
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

    });

}


/* Start counters when impact section appears */

const impactSection =
    document.getElementById("impact");


if (impactSection) {

    const impactObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        animateCounters();

                    }

                });

            },

            {
                threshold: 0.4
            }

        );


    impactObserver.observe(impactSection);

}


/* =========================================================
            CLOSE POPUPS WHEN CLICKING OUTSIDE
========================================================= */

window.addEventListener("click", function (event) {

    const healthPopup =
        document.getElementById("healthPopup");

    const volunteerPopup =
        document.getElementById(
            "medicalVolunteerPopup"
        );

    const donatePopup =
        document.getElementById("donatePopup");


    if (event.target === healthPopup) {

        closeHealthPopup();

    }


    if (event.target === volunteerPopup) {

        closeMedicalVolunteerPopup();

    }


    if (event.target === donatePopup) {

        closeDonatePopup();

    }

});


/* =========================================================
            CLOSE MOBILE MENU AFTER LINK CLICK
========================================================= */

document.querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            const navLinks =
                document.querySelector(".nav-links");

            if (navLinks) {

                navLinks.classList.remove("active");

            }

        });

    });


/* =========================================================
                    ESCAPE KEY
========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeHealthPopup();

        closeMedicalVolunteerPopup();

        closeDonatePopup();

    }

});


/* =========================================================
                    MASCOT
========================================================= */

const mascot =
    document.getElementById("mascot");


if (mascot) {

    mascot.addEventListener("click", function () {

        alert(
            "💛 Sampark is here to spread kindness, care and hope!"
        );

    });

}


/* =========================================================
                    PAGE READY
========================================================= */

window.addEventListener("load", function () {

    document.body.style.opacity = "1";

});