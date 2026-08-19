/* ==========================================
        SAMPARK - HELPING ORPHANAGES JS
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

    const section =
        document.getElementById(sectionId);

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

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const elements =
            document.querySelectorAll(".reveal");


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

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.12
                }

            );


        elements.forEach(
            function (element) {

                observer.observe(element);

            }
        );

    }
);


/* ==========================================
        BOOK DONATION POPUP
========================================== */

function openBookDonation() {

    const popup =
        document.getElementById(
            "bookDonationPopup"
        );

    if (popup) {

        popup.style.display = "flex";

        document.body.style.overflow =
            "hidden";

    }

}


function closeBookDonation() {

    const popup =
        document.getElementById(
            "bookDonationPopup"
        );

    if (popup) {

        popup.style.display = "none";

        document.body.style.overflow =
            "";

    }

}


/* ==========================================
        SUBMIT BOOK DONATION
========================================== */

function submitBookDonation() {

    const name =
        document.getElementById(
            "bookDonorName"
        ).value.trim();


    const phone =
        document.getElementById(
            "bookDonorPhone"
        ).value.trim();


    const quantity =
        document.getElementById(
            "bookQuantity"
        ).value.trim();


    const details =
        document.getElementById(
            "bookDetails"
        ).value.trim();


    if (
        name === "" ||
        phone === "" ||
        quantity === "" ||
        details === ""
    ) {

        alert(
            "📚 Please fill in all the fields."
        );

        return;

    }


    document.querySelector(
        "#bookDonationPopup .popup-content"
    ).innerHTML = `

        <span
            class="close"
            onclick="closeBookDonation()">

            &times;

        </span>

        <h2>
            📚 Thank You!
        </h2>

        <p>
            Thank you,
            <strong>${name}</strong>!
        </p>

        <p>
            Your books can become someone's
            next favourite story or their
            first step towards a new dream.
        </p>

        <p>
            We'll get in touch with you
            regarding the donation.
        </p>

        <button
            onclick="closeBookDonation()">

            💛 Done

        </button>

    `;

}


/* ==========================================
        SCHOOL SUPPLIES POPUP
========================================== */

function openSupplyDonation() {

    const popup =
        document.getElementById(
            "supplyDonationPopup"
        );

    if (popup) {

        popup.style.display = "flex";

        document.body.style.overflow =
            "hidden";

    }

}


function closeSupplyDonation() {

    const popup =
        document.getElementById(
            "supplyDonationPopup"
        );

    if (popup) {

        popup.style.display = "none";

        document.body.style.overflow =
            "";

    }

}


/* ==========================================
        SUBMIT SCHOOL SUPPLIES
========================================== */

function submitSupplyDonation() {

    const name =
        document.getElementById(
            "supplyDonorName"
        ).value.trim();


    const phone =
        document.getElementById(
            "supplyDonorPhone"
        ).value.trim();


    const details =
        document.getElementById(
            "supplyDetails"
        ).value.trim();


    if (
        name === "" ||
        phone === "" ||
        details === ""
    ) {

        alert(
            "🎒 Please complete all the fields."
        );

        return;

    }


    document.querySelector(
        "#supplyDonationPopup .popup-content"
    ).innerHTML = `

        <span
            class="close"
            onclick="closeSupplyDonation()">

            &times;

        </span>

        <h2>
            🎒 Thank You!
        </h2>

        <p>
            Thank you,
            <strong>${name}</strong>!
        </p>

        <p>
            Your school supplies can help
            make learning a little easier
            and a lot more enjoyable.
        </p>

        <p>
            We'll contact you with the
            next steps. 💛
        </p>

        <button
            onclick="closeSupplyDonation()">

            ✏️ Done

        </button>

    `;

}


/* ==========================================
        CLOTHES POPUP
========================================== */

function openClothesDonation() {

    const popup =
        document.getElementById(
            "clothesDonationPopup"
        );

    if (popup) {

        popup.style.display = "flex";

        document.body.style.overflow =
            "hidden";

    }

}


function closeClothesDonation() {

    const popup =
        document.getElementById(
            "clothesDonationPopup"
        );

    if (popup) {

        popup.style.display = "none";

        document.body.style.overflow =
            "";

    }

}


/* ==========================================
        SUBMIT CLOTHES
========================================== */

function submitClothesDonation() {

    const name =
        document.getElementById(
            "clothesDonorName"
        ).value.trim();


    const phone =
        document.getElementById(
            "clothesDonorPhone"
        ).value.trim();


    const details =
        document.getElementById(
            "clothesDetails"
        ).value.trim();


    if (
        name === "" ||
        phone === "" ||
        details === ""
    ) {

        alert(
            "👕 Please complete all the fields."
        );

        return;

    }


    document.querySelector(
        "#clothesDonationPopup .popup-content"
    ).innerHTML = `

        <span
            class="close"
            onclick="closeClothesDonation()">

            &times;

        </span>

        <h2>
            👕 Thank You!
        </h2>

        <p>
            Thank you,
            <strong>${name}</strong>!
        </p>

        <p>
            Your donation can provide
            comfort, warmth and dignity
            to a child.
        </p>

        <p>
            We'll contact you with the
            next steps. 💛
        </p>

        <button
            onclick="closeClothesDonation()">

            👕 Done

        </button>

    `;

}


/* ==========================================
        FOOD SUPPORT POPUP
========================================== */

function openFoodSupport() {

    const popup =
        document.getElementById(
            "foodSupportPopup"
        );

    if (popup) {

        popup.style.display = "flex";

        document.body.style.overflow =
            "hidden";

    }

}


function closeFoodSupport() {

    const popup =
        document.getElementById(
            "foodSupportPopup"
        );

    if (popup) {

        popup.style.display = "none";

        document.body.style.overflow =
            "";

    }

}


/* ==========================================
        SUBMIT FOOD SUPPORT
========================================== */

function submitFoodSupport() {

    const name =
        document.getElementById(
            "foodDonorName"
        ).value.trim();


    const phone =
        document.getElementById(
            "foodDonorPhone"
        ).value.trim();


    const details =
        document.getElementById(
            "foodDetails"
        ).value.trim();


    if (
        name === "" ||
        phone === "" ||
        details === ""
    ) {

        alert(
            "🍎 Please complete all the fields."
        );

        return;

    }


    document.querySelector(
        "#foodSupportPopup .popup-content"
    ).innerHTML = `

        <span
            class="close"
            onclick="closeFoodSupport()">

            &times;

        </span>

        <h2>
            🍎 Thank You!
        </h2>

        <p>
            Thank you,
            <strong>${name}</strong>!
        </p>

        <p>
            Your support can help provide
            nutritious food and happier,
            healthier days.
        </p>

        <p>
            We'll contact you with the
            next steps. ❤️
        </p>

        <button
            onclick="closeFoodSupport()">

            🍎 Done

        </button>

    `;

}


/* ==========================================
        VOLUNTEER POPUP
========================================== */

function openOrphanVolunteer() {

    const popup =
        document.getElementById(
            "orphanVolunteerPopup"
        );

    if (popup) {

        popup.style.display = "flex";

        document.body.style.overflow =
            "hidden";

    }

}


function closeOrphanVolunteer() {

    const popup =
        document.getElementById(
            "orphanVolunteerPopup"
        );

    if (popup) {

        popup.style.display = "none";

        document.body.style.overflow =
            "";

    }

}


/* ==========================================
        SUBMIT VOLUNTEER
========================================== */

function submitOrphanVolunteer() {

    const name =
        document.getElementById(
            "orphanVolunteerName"
        ).value.trim();


    const phone =
        document.getElementById(
            "orphanVolunteerPhone"
        ).value.trim();


    const role =
        document.getElementById(
            "orphanVolunteerRole"
        ).value;


    if (
        name === "" ||
        phone === "" ||
        role === ""
    ) {

        alert(
            "🤝 Please complete all the fields."
        );

        return;

    }


    document.querySelector(
        "#orphanVolunteerPopup .popup-content"
    ).innerHTML = `

        <span
            class="close"
            onclick="closeOrphanVolunteer()">

            &times;

        </span>

        <h2>
            💛 Welcome To Sampark!
        </h2>

        <p>
            Thank you,
            <strong>${name}</strong>!
        </p>

        <p>
            We're so happy that you want
            to give your time and kindness
            to children who need support.
        </p>

        <p>
            Every helping hand matters. 🤝
        </p>

        <button
            onclick="closeOrphanVolunteer()">

            🌟 Awesome!

        </button>

    `;

}


/* ==========================================
        CLOSE POPUPS ON OUTSIDE CLICK
========================================== */

window.addEventListener(
    "click",
    function (event) {

        const bookPopup =
            document.getElementById(
                "bookDonationPopup"
            );

        const supplyPopup =
            document.getElementById(
                "supplyDonationPopup"
            );

        const clothesPopup =
            document.getElementById(
                "clothesDonationPopup"
            );

        const foodPopup =
            document.getElementById(
                "foodSupportPopup"
            );

        const volunteerPopup =
            document.getElementById(
                "orphanVolunteerPopup"
            );


        if (event.target === bookPopup) {

            closeBookDonation();

        }


        if (event.target === supplyPopup) {

            closeSupplyDonation();

        }


        if (event.target === clothesPopup) {

            closeClothesDonation();

        }


        if (event.target === foodPopup) {

            closeFoodSupport();

        }


        if (event.target === volunteerPopup) {

            closeOrphanVolunteer();

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

            closeBookDonation();

            closeSupplyDonation();

            closeClothesDonation();

            closeFoodSupport();

            closeOrphanVolunteer();

        }

    }
);


/* ==========================================
        CLOSE MOBILE MENU
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
        SCROLL TO TOP
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

            } else {

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
        PAGE LOAD
========================================== */

window.addEventListener(
    "load",
    function () {

        document.body.style.opacity =
            "1";

    }
);


/* ==========================================
        PREVENT DEFAULT FORM SUBMISSION
========================================== */

document.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

    }
);
