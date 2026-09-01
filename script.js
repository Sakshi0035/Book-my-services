/* =========================================================
   SAKSHI MADGUNDI
   SERVICE BOOKING WEBSITE
   PURE VANILLA JAVASCRIPT
========================================================= */


/* =========================================================
   EDIT THESE BUSINESS DETAILS
========================================================= */

const BUSINESS_NAME = "Sakshi Madgundi";

/*
 * IMPORTANT:
 * Replace this with your real WhatsApp number.
 *
 * Example:
 * const BUSINESS_WHATSAPP = "919876543210";
 *
 * Use country code.
 * Do NOT use +, spaces or dashes.
 */
const BUSINESS_WHATSAPP = "REPLACE_WITH_YOUR_WHATSAPP_NUMBER";


const BUSINESS_EMAIL = "YOUR_EMAIL@example.com";


const QR_IMAGE_PATH = "assets/images/kotak-qr.png";


/* =========================================================
   SERVICES
========================================================= */

const SERVICES = [

    {
        id: "wordpress-fix",

        category: "WEBSITE FIXES",

        name: "WordPress Issue Fix",

        price: 499,

        icon: "⚙",

        description:
            "Fix a specific issue affecting an existing WordPress website's layout, functionality or appearance."

    },


    {
        id: "woocommerce-cart",

        category: "WEBSITE FIXES",

        name: "WooCommerce / Cart Fix",

        price: 599,

        icon: "🛒",

        description:
            "Fix specific WooCommerce, cart, product or shopping-flow issues on an existing website."

    },


    {
        id: "header-menu",

        category: "WEBSITE FIXES",

        name: "Header / Menu Customization",

        price: 599,

        icon: "☰",

        description:
            "Customize or create a website header, navigation or menu according to your requirements."

    },


    {
        id: "design-webpage",

        category: "WEBSITE FIXES",

        name: "Design to Webpage",

        price: 599,

        icon: "◈",

        description:
            "Convert a provided design, reference or visual layout into a responsive webpage."

    },


    {
        id: "landing-page",

        category: "PAGE DEVELOPMENT",

        name: "Complete Landing Page",

        price: 1500,

        icon: "▣",

        description:
            "A responsive landing page designed around your business, product, service or campaign."

    },


    {
        id: "product-page",

        category: "PAGE DEVELOPMENT",

        name: "Product Page",

        price: 2000,

        icon: "◫",

        description:
            "A custom product page built according to your requirements. Additional functionality can be requested."

    },


    {
        id: "ui-ux",

        category: "UI / UX",

        name: "Website UI / UX",

        price: 1500,

        icon: "✦",

        description:
            "Website interface and user-experience design based on your requirements, references and desired visual style."

    },


    {
        id: "shopify",

        category: "E-COMMERCE",

        name: "Shopify E-Commerce Website",

        price: 6666,

        icon: "◇",

        description:
            "Build a Shopify e-commerce website from scratch according to your requirements."

    },


    {
        id: "woocommerce-store",

        category: "E-COMMERCE",

        name: "WooCommerce E-Commerce Website",

        price: 6666,

        icon: "🛍",

        description:
            "Build a WooCommerce e-commerce website from scratch according to your requirements."

    },


    {
        id: "wordpress-store",

        category: "E-COMMERCE",

        name: "WordPress E-Commerce Website",

        price: 6666,

        icon: "▤",

        description:
            "Build a WordPress-based e-commerce website according to your requirements."

    }

];


/* =========================================================
   STATE
========================================================= */

let selectedService = null;

let generatedBookingMessage = "";


/* =========================================================
   DOM
========================================================= */

const servicesGrid =
    document.getElementById("servicesGrid");

const bookingServices =
    document.getElementById("bookingServices");

const summaryService =
    document.getElementById("summaryService");

const summaryPrice =
    document.getElementById("summaryPrice");

const paymentAmount =
    document.getElementById("paymentAmount");

const summaryCustom =
    document.getElementById("summaryCustom");

const customRequirements =
    document.getElementById("customRequirements");

const additionalRequirements =
    document.getElementById("additionalRequirements");

const generateBooking =
    document.getElementById("generateBooking");

const bookingReady =
    document.getElementById("bookingReady");

const whatsappBtn =
    document.getElementById("whatsappBtn");

const copyBtn =
    document.getElementById("copyBtn");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


/* =========================================================
   FORMAT PRICE
========================================================= */

function formatPrice(number) {

    return Number(number).toLocaleString("en-IN");

}


/* =========================================================
   CREATE SERVICE CARDS
========================================================= */

function renderServices() {

    servicesGrid.innerHTML = "";

    bookingServices.innerHTML = "";


    SERVICES.forEach(service => {

        /* -----------------------------------------------
           MAIN SERVICE CARD
        ------------------------------------------------ */

        const card =
            document.createElement("article");

        card.className =
            "service-card";


        card.innerHTML = `

            <div class="service-image">

                <div class="service-icon">
                    ${service.icon}
                </div>

            </div>

            <div class="service-info">

                <span class="service-category">
                    ${service.category}
                </span>

                <h3>
                    ${service.name}
                </h3>

                <p>
                    ${service.description}
                </p>

                <div class="service-bottom">

                    <div class="service-price">

                        <small>
                            Starting at
                        </small>

                        <strong>
                            ₹${formatPrice(service.price)}
                        </strong>

                    </div>

                    <button
                        type="button"
                        class="service-book"
                        data-service-id="${service.id}"
                    >
                        Book Service →
                    </button>

                </div>

            </div>
        `;


        servicesGrid.appendChild(card);


        /* -----------------------------------------------
           BOOKING SERVICE CARD
        ------------------------------------------------ */

        const wrapper =
            document.createElement("label");

        wrapper.className =
            "booking-service-option";


        wrapper.innerHTML = `

            <input
                type="radio"
                name="selectedService"
                value="${service.id}"
            >

            <span class="booking-service-card">

                <small>
                    ${service.category}
                </small>

                <strong>
                    ${service.name}
                </strong>

                <span>
                    ${service.description}
                </span>

                <b>
                    Starting at ₹${formatPrice(service.price)}
                </b>

            </span>

        `;


        bookingServices.appendChild(wrapper);

    });


    addServiceCardListeners();

}


/* =========================================================
   SERVICE CARD BUTTONS
========================================================= */

function addServiceCardListeners() {

    document
        .querySelectorAll(".service-book")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        this.dataset.serviceId;

                    selectService(id);

                    document
                        .getElementById("booking")
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }
            );

        });


    document
        .querySelectorAll(
            'input[name="selectedService"]'
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                function () {

                    selectService(this.value);

                }
            );

        });

}


/* =========================================================
   SELECT SERVICE
========================================================= */

function selectService(serviceId) {

    const service =
        SERVICES.find(
            item => item.id === serviceId
        );


    if (!service) {
        return;
    }


    selectedService =
        service;


    summaryService.textContent =
        service.name;


    summaryPrice.textContent =
        formatPrice(service.price);


    paymentAmount.textContent =
        formatPrice(service.price);


    const matchingInput =
        document.querySelector(
            `input[name="selectedService"][value="${serviceId}"]`
        );


    if (matchingInput) {

        matchingInput.checked = true;

    }


    hideBookingReady();

}


/* =========================================================
   CUSTOM REQUIREMENTS TOGGLE
========================================================= */

document
    .querySelectorAll(
        'input[name="customChoice"]'
    )
    .forEach(input => {

        input.addEventListener(
            "change",
            function () {

                const customSelected =
                    this.value === "custom";


                customRequirements
                    .classList
                    .toggle(
                        "visible",
                        customSelected
                    );


                summaryCustom.textContent =
                    customSelected
                        ? "Custom requirements"
                        : "Standard service";


                hideBookingReady();

            }
        );

    });


/* =========================================================
   GET CUSTOM CHOICE
========================================================= */

function getCustomChoice() {

    const selected =
        document.querySelector(
            'input[name="customChoice"]:checked'
        );


    return selected
        ? selected.value
        : "standard";

}


/* =========================================================
   GET FORM DATA
========================================================= */

function getFormData() {

    return {

        fullName:
            document
                .getElementById("fullName")
                .value
                .trim(),

        email:
            document
                .getElementById("email")
                .value
                .trim(),

        whatsapp:
            document
                .getElementById("whatsapp")
                .value
                .trim(),

        businessName:
            document
                .getElementById("businessName")
                .value
                .trim(),

        websiteUrl:
            document
                .getElementById("websiteUrl")
                .value
                .trim(),

        referenceUrl:
            document
                .getElementById("referenceUrl")
                .value
                .trim(),

        deadline:
            document
                .getElementById("deadline")
                .value,

        projectDescription:
            document
                .getElementById("projectDescription")
                .value
                .trim(),

        additionalRequirements:
            additionalRequirements
                .value
                .trim(),

        utr:
            document
                .getElementById("utr")
                .value
                .trim(),

        customChoice:
            getCustomChoice()

    };

}


/* =========================================================
   VALIDATION
========================================================= */

function validateBooking(data) {

    if (!selectedService) {

        showToast(
            "Please select a service first."
        );

        return false;

    }


    if (!data.fullName) {

        showToast(
            "Please enter your full name."
        );

        document
            .getElementById("fullName")
            .focus();

        return false;

    }


    if (!data.email) {

        showToast(
            "Please enter your email address."
        );

        document
            .getElementById("email")
            .focus();

        return false;

    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(data.email)) {

        showToast(
            "Please enter a valid email address."
        );

        document
            .getElementById("email")
            .focus();

        return false;

    }


    if (!data.whatsapp) {

        showToast(
            "Please enter your WhatsApp number."
        );

        document
            .getElementById("whatsapp")
            .focus();

        return false;

    }


    if (!data.projectDescription) {

        showToast(
            "Please describe your project."
        );

        document
            .getElementById("projectDescription")
            .focus();

        return false;

    }


    if (
        data.customChoice === "custom" &&
        !data.additionalRequirements
    ) {

        showToast(
            "Please describe your custom requirements."
        );

        additionalRequirements.focus();

        return false;

    }


    return true;

}


/* =========================================================
   GENERATE BOOKING MESSAGE
========================================================= */

function createBookingMessage(data) {

    const customText =
        data.customChoice === "custom"
            ? data.additionalRequirements
            : "No additional custom requirements";


    return `
NEW SERVICE BOOKING

--------------------------------
SERVICE PROVIDER
--------------------------------

Sakshi Madgundi

--------------------------------
CUSTOMER DETAILS
--------------------------------

Name:
${data.fullName}

Email:
${data.email}

WhatsApp:
${data.whatsapp}

Business / Brand:
${data.businessName || "Not provided"}

--------------------------------
SERVICE
--------------------------------

Service:
${selectedService.name}

Category:
${selectedService.category}

Starting Price:
₹${formatPrice(selectedService.price)}

--------------------------------
PROJECT
--------------------------------

Existing Website:
${data.websiteUrl || "Not provided"}

Reference:
${data.referenceUrl || "Not provided"}

Preferred Deadline:
${data.deadline || "Not specified"}

Project Description:
${data.projectDescription}

--------------------------------
CUSTOM REQUIREMENTS
--------------------------------

${customText}

--------------------------------
PAYMENT
--------------------------------

Starting Payment Amount:
₹${formatPrice(selectedService.price)}

Transaction / UTR ID:
${data.utr || "Not provided"}

--------------------------------

IMPORTANT:

This booking uses the listed starting price.

Additional/custom requirements may affect the final price.

Please review the project requirements and confirm the final price.

Thank you.
`.trim();

}


/* =========================================================
   GENERATE BOOKING
========================================================= */

generateBooking.addEventListener(
    "click",
    function () {

        const data =
            getFormData();


        if (!validateBooking(data)) {
            return;
        }


        generatedBookingMessage =
            createBookingMessage(data);


        bookingReady
            .classList
            .add("visible");


        showToast(
            "Booking request prepared."
        );


        bookingReady.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }
);


/* =========================================================
   WHATSAPP
========================================================= */

whatsappBtn.addEventListener(
    "click",
    function () {

        if (!generatedBookingMessage) {

            showToast(
                "Prepare your booking first."
            );

            return;

        }


        if (
            BUSINESS_WHATSAPP.includes(
                "REPLACE_WITH"
            )
        ) {

            showToast(
                "Add your WhatsApp number in script.js first."
            );

            return;

        }


        const encodedMessage =
            encodeURIComponent(
                generatedBookingMessage
            );


        const whatsappURL =
            `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodedMessage}`;


        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    }
);


/* =========================================================
   COPY BOOKING
========================================================= */

copyBtn.addEventListener(
    "click",
    async function () {

        if (!generatedBookingMessage) {

            showToast(
                "Prepare your booking first."
            );

            return;

        }


        try {

            await navigator.clipboard.writeText(
                generatedBookingMessage
            );


            showToast(
                "Booking details copied."
            );


        } catch (error) {

            const textarea =
                document.createElement("textarea");


            textarea.value =
                generatedBookingMessage;


            document.body.appendChild(
                textarea
            );


            textarea.select();


            document.execCommand(
                "copy"
            );


            textarea.remove();


            showToast(
                "Booking details copied."
            );

        }

    }
);


/* =========================================================
   HIDE BOOKING READY
========================================================= */

function hideBookingReady() {

    bookingReady
        .classList
        .remove("visible");

    generatedBookingMessage = "";

}


/* =========================================================
   FAQ
========================================================= */

document
    .querySelectorAll(".faq-question")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const item =
                    this.closest(".faq-item");

                const answer =
                    item.querySelector(".faq-answer");


                const isActive =
                    item.classList.contains(
                        "active"
                    );


                document
                    .querySelectorAll(".faq-item")
                    .forEach(otherItem => {

                        otherItem
                            .classList
                            .remove("active");

                        otherItem
                            .querySelector(".faq-answer")
                            .style.maxHeight =
                            null;

                    });


                if (!isActive) {

                    item.classList.add(
                        "active"
                    );


                    answer.style.maxHeight =
                        answer.scrollHeight + "px";

                }

            }
        );

    });


/* =========================================================
   THEME
========================================================= */

function setTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add(
            "dark"
        );

        themeIcon.textContent =
            "☀";

    } else {

        document.body.classList.remove(
            "dark"
        );

        themeIcon.textContent =
            "☾";

    }


    localStorage.setItem(
        "sakshi-theme",
        theme
    );

}


/* LOAD SAVED THEME */

const savedTheme =
    localStorage.getItem(
        "sakshi-theme"
    );


if (savedTheme) {

    setTheme(savedTheme);

} else {

    /*
     * Default is light theme.
     */
    setTheme("light");

}


/* THEME BUTTON */

themeToggle.addEventListener(
    "click",
    function () {

        const isDark =
            document.body.classList.contains(
                "dark"
            );


        setTheme(
            isDark
                ? "light"
                : "dark"
        );

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

mobileMenuBtn.addEventListener(
    "click",
    function () {

        const isOpen =
            mobileMenu.classList.contains(
                "open"
            );


        mobileMenu.classList.toggle(
            "open"
        );


        mobileMenuBtn.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

    }
);


/* CLOSE MOBILE MENU AFTER CLICK */

mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            function () {

                mobileMenu
                    .classList
                    .remove("open");


                mobileMenuBtn
                    .setAttribute(
                        "aria-expanded",
                        "false"
                    );

            }
        );

    });


/* =========================================================
   DATE MINIMUM
========================================================= */

const deadlineInput =
    document.getElementById(
        "deadline"
    );


const today =
    new Date()
        .toISOString()
        .split("T")[0];


deadlineInput.min =
    today;


/* =========================================================
   INITIALIZE
========================================================= */

renderServices();


/* =========================================================
   SMOOTH HEADER BEHAVIOR
========================================================= */

let lastScroll = 0;

window.addEventListener(
    "scroll",
    function () {

        const currentScroll =
            window.scrollY;


        const header =
            document.getElementById(
                "siteHeader"
            );


        if (currentScroll > lastScroll &&
            currentScroll > 150) {

            header.style.boxShadow =
                "0 10px 35px rgba(0,0,0,.06)";

        } else {

            header.style.boxShadow =
                "none";

        }


        lastScroll =
            currentScroll;

    },
    {
        passive: true
    }
);


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    `${BUSINESS_NAME} service website loaded successfully.`
);
