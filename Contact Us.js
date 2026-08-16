/* =========================================================
                    SAMPARK CONTACT US JS
========================================================= */


/* =========================================================
                    MOBILE MENU
========================================================= */

function toggleMenu() {

    const nav =
        document.querySelector(".nav-links");

    if (nav) {

        nav.classList.toggle("active");

    }

}


/* =========================================================
                    CLOSE MOBILE MENU
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

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

    }
);


/* =========================================================
                    WHATSAPP
========================================================= */

function openWhatsApp() {

    /*
        REPLACE THIS NUMBER WITH
        YOUR REAL WHATSAPP NUMBER.

        Format:
        Country code + number
        WITHOUT + OR SPACES
    */

    const phoneNumber =
        "919999999999";


    const message =
        "Hello Sampark! 💜 I would like to know more about your work.";


    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =========================================================
                    VOLUNTEER POPUP
========================================================= */

function openVolunteerPopup() {

    const popup =
        document.getElementById(
            "volunteerPopup"
        );


    if (popup) {

        popup.style.display =
            "flex";

        document.body.style.overflow =
            "hidden";

    }

}


function closeVolunteerPopup() {

    const popup =
        document.getElementById(
            "volunteerPopup"
        );


    if (popup) {

        popup.style.display =
            "none";

        document.body.style.overflow =
            "";

    }

}


/* =========================================================
                    VOLUNTEER FORM
========================================================= */

function submitVolunteer() {

    const name =
        document
            .getElementById(
                "volunteerName"
            )
            .value
            .trim();


    const phone =
        document
            .getElementById(
                "volunteerPhone"
            )
            .value
            .trim();


    if (
        name === "" ||
        phone === ""
    ) {

        alert(
            "💜 Please fill in your name and phone number."
        );

        return;

    }


    const popupContent =
        document.querySelector(
            "#volunteerPopup .popup-content"
        );


    if (!popupContent) {

        return;

    }


    popupContent.innerHTML = `

        <span class="close"
              onclick="closeVolunteerPopup()">

            &times;

        </span>


        <div class="success-icon">
            🎉
        </div>


        <h2>
            Welcome To Sampark!
        </h2>


        <p>

            Thank you,
            <strong>${name}</strong>! 💜

        </p>


        <p>

            We're so happy that you want
            to become part of our volunteer
            community.

        </p>


        <p>

            Someone from the Sampark team
            will contact you at:

            <br><br>

            <strong>${phone}</strong>

        </p>


        <button
            class="popup-btn"
            onclick="closeVolunteerPopup()">

            Awesome! 💜

        </button>

    `;

}


/* =========================================================
                    CONTACT FORM
========================================================= */

function submitContactForm(event) {

    event.preventDefault();


    const name =
        document
            .getElementById("name")
            .value
            .trim();


    const email =
        document
            .getElementById("email")
            .value
            .trim();


    const phone =
        document
            .getElementById("phone")
            .value
            .trim();


    const subject =
        document
            .getElementById("subject")
            .value;


    const message =
        document
            .getElementById("message")
            .value
            .trim();


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert(
            "💜 Please complete all required fields."
        );

        return;

    }


    /*
        Basic email validation
    */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
        !emailPattern.test(email)
    ) {

        alert(
            "📧 Please enter a valid email address."
        );

        return;

    }


    const successPopup =
        document.getElementById(
            "successPopup"
        );


    if (successPopup) {

        successPopup.style.display =
            "flex";

        document.body.style.overflow =
            "hidden";

    }


    /*
        Reset the form
    */

    document
        .getElementById(
            "contactForm"
        )
        .reset();

}


/* =========================================================
                    CLOSE SUCCESS POPUP
========================================================= */

function closeSuccessPopup() {

    const popup =
        document.getElementById(
            "successPopup"
        );


    if (popup) {

        popup.style.display =
            "none";

        document.body.style.overflow =
            "";

    }

}


/* =========================================================
                    SCROLL TO CONTACT FORM
========================================================= */

function scrollToContactForm() {

    const form =
        document.getElementById(
            "contact-form"
        );


    if (form) {

        form.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

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
                window.scrollY > 400
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
                CLOSE POPUPS BY CLICKING OUTSIDE
========================================================= */

window.addEventListener(
    "click",
    function (event) {

        const volunteerPopup =
            document.getElementById(
                "volunteerPopup"
            );


        const successPopup =
            document.getElementById(
                "successPopup"
            );


        if (
            event.target ===
            volunteerPopup
        ) {

            closeVolunteerPopup();

        }


        if (
            event.target ===
            successPopup
        ) {

            closeSuccessPopup();

        }

    }
);


/* =========================================================
                ESC KEY CLOSES POPUPS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeVolunteerPopup();

            closeSuccessPopup();

        }

    }
);


/* =========================================================
                    FADE-IN EFFECT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const elements =
            document.querySelectorAll(

                ".intro-card, " +
                ".contact-card, " +
                ".reason-card, " +
                ".help-card, " +
                ".social-card"

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
                    threshold: 0.15
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