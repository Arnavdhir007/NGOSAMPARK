/* ==========================================
            RANDOM KINDNESS QUOTES
========================================== */

const quotes = [

    "💛 No act of kindness, no matter how small, is ever wasted.",

    "🌍 Together we can build a kinder tomorrow.",

    "❤️ Helping one person might not change the world, but it could change the world for one person.",

    "🌈 Kindness is free. Sprinkle it everywhere.",

    "🤝 Alone we can do so little. Together we can do so much.",

    "🌱 Small actions create big changes.",

    "😊 Compassion is the heart of every community.",

    "✨ Be someone's reason to smile today."

];

const quoteBtn = document.getElementById("quoteBtn");

if (quoteBtn) {

    quoteBtn.addEventListener("click", function () {

        const random =
            Math.floor(Math.random() * quotes.length);

        document.getElementById("quote").innerHTML =
            quotes[random];

    });

}



/* ==========================================
            MOBILE MENU
========================================== */

function toggleMenu() {

    document.querySelector(".nav-links").classList.toggle("active");

}



/* ==========================================
            DONATE POPUP
========================================== */

function openPopup() {

    document.getElementById("donatePopup").style.display = "flex";

}

function closePopup() {

    document.getElementById("donatePopup").style.display = "none";

}



/* ==========================================
            DONATION COMPLETE
========================================== */

function paymentDone() {

    document.querySelector("#donatePopup .popup-content").innerHTML = `

<span class="close"
onclick="closePopup()">
&times;
</span>

<h2>
🎉 Thank You!
</h2>

<p>

Your donation helps bring
hope to children,
families and animals.

</p>

<p>

Together,
we're creating a kinder world.

💛

</p>

`;

}



/* ==========================================
            SCROLL TO TOP
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 350) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/* ==========================================
            VOLUNTEER POPUP
========================================== */

function openVolunteerPopup() {

    document.getElementById("volunteerPopup").style.display = "flex";

}

function closeVolunteerPopup() {

    document.getElementById("volunteerPopup").style.display = "none";

}



/* ==========================================
            VOLUNTEER FORM
========================================== */

function submitVolunteer() {

    const name =
        document.getElementById("volunteerName").value.trim();

    const phone =
        document.getElementById("volunteerPhone").value.trim();

    if (name === "" || phone === "") {

        alert("😊 Please fill in all the fields.");

        return;

    }

    document.querySelector("#volunteerPopup .popup-content").innerHTML = `

    <span class="close"
          onclick="closeVolunteerPopup()">
          &times;
    </span>

    <h2>🎉 Welcome to Sampark!</h2>

    <p>

        Thank you, <b>${name}</b>!

    </p>

    <p>

        We're so excited to have you as one of
        our volunteers.

    </p>

    <p>

        Click below to join our WhatsApp Community.

    </p>

    <button class="donate-btn"
            onclick="joinVolunteerGroup()">

        Join WhatsApp 💚

    </button>

    `;

}



/* ==========================================
            WHATSAPP GROUP
========================================== */

function joinVolunteerGroup() {

    window.open(

        "PASTE-YOUR-WHATSAPP-LINK-HERE",

        "_blank"

    );

}



/* ==========================================
            HELP POPUP
========================================== */

function openHelpPopup() {

    document.getElementById("helpPopup").style.display = "flex";

}

function closeHelpPopup() {

    document.getElementById("helpPopup").style.display = "none";

}



/* ==========================================
            HELP REQUEST
========================================== */

function submitHelp() {

    const name =
        document.getElementById("helpName").value.trim();

    const phone =
        document.getElementById("helpPhone").value.trim();

    const location =
        document.getElementById("helpLocation").value.trim();

    const helpType =
        document.getElementById("helpType").value;

    const description =
        document.getElementById("helpDescription").value.trim();



    if (

        name === ""

        ||

        phone === ""

        ||

        location === ""

        ||

        helpType === ""

        ||

        description === ""

    ) {

        alert("❤️ Please complete the entire form.");

        return;

    }



    document.querySelector("#helpPopup .popup-content").innerHTML = `

    <span class="close"
          onclick="closeHelpPopup()">

        &times;

    </span>

    <h2>

        ✅ Request Submitted

    </h2>

    <p>

        Thank you,
        <b>${name}</b>.

    </p>

    <p>

        Your request has been received.

    </p>

    <p>

        A Sampark volunteer will contact you
        as soon as possible.

    </p>

    <button class="donate-btn"
            onclick="closeHelpPopup()">

        OK 💛

    </button>

    `;

}

/* ==========================================
            FADE-IN ANIMATION
========================================== */

const fadeElements = document.querySelectorAll(

    "section, .impact-card, .cause-card, .mission-card"

);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.2

    }

);

fadeElements.forEach(element => {

    observer.observe(element);

});



/* ==========================================
            IMPACT COUNTERS
========================================== */

const counters = document.querySelectorAll(".impact-card h1");

let counterStarted = false;

function animateCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        let current = 0;

        const speed = target / 120;

        const updateCounter = () => {

            current += speed;

            if (current < target) {

                counter.innerText = Math.floor(current) + "+";

                requestAnimationFrame(updateCounter);

            }

            else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

}

const impactSection = document.getElementById("impact");

if (impactSection) {

    const impactObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

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



/* ==========================================
        CLOSE MENU AFTER CLICKING A LINK
========================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector(".nav-links")

            .classList.remove("active");

    });

});



/* ==========================================
        CLOSE POPUP WHEN CLICKING OUTSIDE
========================================== */

window.onclick = function (event) {

    const popups = [

        document.getElementById("donatePopup"),

        document.getElementById("volunteerPopup"),

        document.getElementById("helpPopup")

    ];

    popups.forEach(popup => {

        if (event.target === popup) {

            popup.style.display = "none";

        }

    });

};



/* ==========================================
            PAGE LOAD ANIMATION
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

})