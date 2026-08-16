/* =========================================================
                    EDUCATION PAGE JS
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
                    POPUP HELPERS
========================================================= */

function openPopup(id) {

    const popup = document.getElementById(id);

    if (popup) {

        popup.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

}


function closePopup(id) {

    const popup = document.getElementById(id);

    if (popup) {

        popup.style.display = "none";

        document.body.style.overflow = "auto";

    }

}


/* =========================================================
                    BOOK DONATION
========================================================= */

function openBookDonationPopup() {

    openPopup("bookDonationPopup");

}


function closeBookDonationPopup() {

    closePopup("bookDonationPopup");

}


function submitBookDonation() {

    const name =
        document.getElementById("bookDonorName").value.trim();

    const phone =
        document.getElementById("bookDonorPhone").value.trim();

    const count =
        document.getElementById("bookCount").value.trim();

    const type =
        document.getElementById("bookType").value;


    if (
        name === "" ||
        phone === "" ||
        count === "" ||
        type === ""
    ) {

        alert(
            "📚 Please fill in all the details before submitting."
        );

        return;

    }


    closeBookDonationPopup();


    showSuccessMessage(
        "Thank you, " +
        name +
        "! ❤️ Your " +
        count +
        " book(s) can help another child continue their learning journey."
    );

}


/* =========================================================
                    SCHOOL SUPPLIES
========================================================= */

function openSupplyPopup() {

    openPopup("supplyPopup");

}


function closeSupplyPopup() {

    closePopup("supplyPopup");

}


function submitSupplyDonation() {

    const name =
        document.getElementById("supplyName").value.trim();

    const phone =
        document.getElementById("supplyPhone").value.trim();

    const supply =
        document.getElementById("supplyType").value;


    if (
        name === "" ||
        phone === "" ||
        supply === ""
    ) {

        alert(
            "🎒 Please complete the form first."
        );

        return;

    }


    closeSupplyPopup();


    showSuccessMessage(
        "Thank you, " +
        name +
        "! 🎒 Your contribution of " +
        supply +
        " can help make school a little easier for a child."
    );

}


/* =========================================================
                    TUTOR
========================================================= */

function openTutorPopup() {

    openPopup("tutorPopup");

}


function closeTutorPopup() {

    closePopup("tutorPopup");

}


function submitTutorForm() {

    const name =
        document.getElementById("tutorName").value.trim();

    const phone =
        document.getElementById("tutorPhone").value.trim();

    const subject =
        document.getElementById("tutorSubject").value.trim();


    if (
        name === "" ||
        phone === "" ||
        subject === ""
    ) {

        alert(
            "👩‍🏫 Please enter your name, phone number and subject."
        );

        return;

    }


    closeTutorPopup();


    showSuccessMessage(
        "That's amazing, " +
        name +
        "! 👩‍🏫 Thank you for offering to teach " +
        subject +
        ". Your time could make a real difference."
    );

}


/* =========================================================
                    TECHNOLOGY
========================================================= */

function openTechPopup() {

    openPopup("techPopup");

}


function closeTechPopup() {

    closePopup("techPopup");

}


function submitTechDonation() {

    const name =
        document.getElementById("techName").value.trim();

    const phone =
        document.getElementById("techPhone").value.trim();

    const device =
        document.getElementById("techType").value;


    if (
        name === "" ||
        phone === "" ||
        device === ""
    ) {

        alert(
            "💻 Please complete all the details."
        );

        return;

    }


    closeTechPopup();


    showSuccessMessage(
        "Thank you, " +
        name +
        "! 💻 Your " +
        device +
        " could give a child access to new ways of learning."
    );

}


/* =========================================================
                    SPONSOR EDUCATION
========================================================= */

function openSponsorPopup() {

    openPopup("sponsorPopup");

}


function closeSponsorPopup() {

    closePopup("sponsorPopup");

}


function submitSponsorForm() {

    const name =
        document.getElementById("sponsorName").value.trim();

    const phone =
        document.getElementById("sponsorPhone").value.trim();

    const area =
        document.getElementById("sponsorArea").value;


    if (
        name === "" ||
        phone === "" ||
        area === ""
    ) {

        alert(
            "🎓 Please complete all the details."
        );

        return;

    }


    closeSponsorPopup();


    showSuccessMessage(
        "Thank you, " +
        name +
        "! 🎓 Your interest in supporting " +
        area +
        " can help create better learning opportunities."
    );

}


/* =========================================================
                    COMMUNITY LIBRARY
========================================================= */

function openLibraryPopup() {

    openPopup("libraryPopup");

}


function closeLibraryPopup() {

    closePopup("libraryPopup");

}


function submitLibraryForm() {

    const name =
        document.getElementById("libraryName").value.trim();

    const phone =
        document.getElementById("libraryPhone").value.trim();

    const location =
        document.getElementById("libraryLocation").value.trim();


    if (
        name === "" ||
        phone === "" ||
        location === ""
    ) {

        alert(
            "🏫 Please enter your name, phone number and location."
        );

        return;

    }


    closeLibraryPopup();


    showSuccessMessage(
        "Thank you, " +
        name +
        "! 🏫 We love your interest in building a community library in " +
        location +
        "."
    );

}


/* =========================================================
                    SUCCESS POPUP
========================================================= */

function showSuccessMessage(message) {

    const successPopup =
        document.getElementById(
            "educationSuccessPopup"
        );

    const successMessage =
        document.getElementById(
            "educationSuccessMessage"
        );


    if (
        successPopup &&
        successMessage
    ) {

        successMessage.innerHTML =
            message +
            "<br><br>" +
            "The Sampark team will get in touch with you soon. 💜";

        successPopup.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

}


function closeEducationSuccessPopup() {

    closePopup(
        "educationSuccessPopup"
    );

}


/* =========================================================
                    FAQ
========================================================= */

function toggleFAQ(button) {

    const faqItem =
        button.parentElement;

    const answer =
        faqItem.querySelector(".faq-answer");


    const allItems =
        document.querySelectorAll(".faq-item");


    allItems.forEach(function (item) {

        if (item !== faqItem) {

            item.classList.remove("active");

            const otherAnswer =
                item.querySelector(".faq-answer");

            if (otherAnswer) {

                otherAnswer.style.maxHeight = null;

            }

        }

    });


    faqItem.classList.toggle("active");


    if (
        faqItem.classList.contains("active")
    ) {

        answer.style.maxHeight =
            answer.scrollHeight + "px";

    }

    else {

        answer.style.maxHeight = null;

    }

}


/* =========================================================
                    IMPACT COUNTERS
========================================================= */

let countersStarted = false;


function animateCounters() {

    if (countersStarted) {

        return;

    }


    countersStarted = true;


    const counters =
        document.querySelectorAll(
            ".impact-card h3"
        );


    counters.forEach(function (counter) {

        const target =
            parseInt(
                counter.getAttribute(
                    "data-target"
                )
            );


        if (isNaN(target)) {

            return;

        }


        let current = 0;

        const duration = 1800;

        const startTime =
            performance.now();


        function updateCounter(currentTime) {

            const elapsed =
                currentTime - startTime;

            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            current =
                Math.floor(
                    target * eased
                );


            counter.textContent =
                current + "+";


            if (progress < 1) {

                requestAnimationFrame(
                    updateCounter
                );

            }

            else {

                counter.textContent =
                    target + "+";

            }

        }


        requestAnimationFrame(
            updateCounter
        );

    });

}


/* =========================================================
                    COUNTER OBSERVER
========================================================= */

const impactSection =
    document.querySelector(
        ".impact-section"
    );


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

                            impactObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.25
            }

        );


    impactObserver.observe(
        impactSection
    );

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
                    "flex";

                topBtn.style.alignItems =
                    "center";

                topBtn.style.justifyContent =
                    "center";

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
                CLOSE MOBILE MENU
========================================================= */

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


/* =========================================================
            CLOSE POPUPS BY CLICKING OUTSIDE
========================================================= */

window.addEventListener(
    "click",
    function (event) {

        const popupIds = [

            "bookDonationPopup",

            "supplyPopup",

            "tutorPopup",

            "techPopup",

            "sponsorPopup",

            "libraryPopup",

            "educationSuccessPopup"

        ];


        popupIds.forEach(
            function (id) {

                const popup =
                    document.getElementById(id);


                if (
                    popup &&
                    event.target === popup
                ) {

                    popup.style.display =
                        "none";

                    document.body.style.overflow =
                        "auto";

                }

            }
        );

    }
);


/* =========================================================
                ESC KEY CLOSE POPUPS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            const popupIds = [

                "bookDonationPopup",

                "supplyPopup",

                "tutorPopup",

                "techPopup",

                "sponsorPopup",

                "libraryPopup",

                "educationSuccessPopup"

            ];


            popupIds.forEach(
                function (id) {

                    const popup =
                        document.getElementById(
                            id
                        );


                    if (popup) {

                        popup.style.display =
                            "none";

                    }

                }
            );


            document.body.style.overflow =
                "auto";

        }

    }
);


/* =========================================================
                    HERO BUTTONS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const buttons =
            document.querySelectorAll(
                ".hero-btn"
            );


        buttons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const href =
                            button.getAttribute(
                                "href"
                            );


                        if (
                            href &&
                            href.startsWith("#")
                        ) {

                            const target =
                                document.querySelector(
                                    href
                                );


                            if (target) {

                                setTimeout(
                                    function () {

                                        target.scrollIntoView(
                                            {
                                                behavior:
                                                    "smooth"
                                            }
                                        );

                                    },
                                    50
                                );

                            }

                        }

                    }
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


/* =========================================================
                    CONSOLE MESSAGE 😎
========================================================= */

console.log(
    "📚 Sampark Education Page Loaded Successfully! 💜"
);