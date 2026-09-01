/* =========================================================
   SAKSHI MADGUNDI — WEB SERVICES
   Main JavaScript
========================================================= */


/* =========================================================
   SERVICE DATA
========================================================= */

const services = {

    "wordpress-fix": {

        title: "WordPress Issue Fix",

        category: "WORDPRESS",

        price: "₹799 – ₹5,999",

        icon: "✦",

        description:
            "Fix a specific issue on your existing WordPress website. The final price depends on the complexity of the issue and the work required.",

        features: [

            "Fix one specific WordPress website issue",

            "Layout and styling corrections",

            "Frontend functionality fixes",

            "Mobile or desktop display fixes",

            "Price confirmed according to the actual requirement"

        ]

    },


    "woocommerce-fix": {

        title: "WooCommerce Fix",

        category: "WOOCOMMERCE",

        price: "₹799 – ₹5,999",

        icon: "🛒",

        description:
            "Fix problems with an existing WooCommerce website, including product, cart, checkout and related frontend issues.",

        features: [

            "WooCommerce issue diagnosis",

            "Cart-related fixes",

            "Product page fixes",

            "Checkout-related frontend fixes",

            "Responsive WooCommerce corrections",

            "Final price depends on the required work"

        ]

    },


    "responsive-fix": {

        title: "Header / Menu Responsive Fix",

        category: "RESPONSIVE DESIGN",

        price: "₹799 – ₹5,999",

        icon: "☰",

        description:
            "Make your website header, navigation or menu work correctly across mobile, tablet and desktop screen sizes.",

        features: [

            "Desktop layout correction",

            "Mobile layout correction",

            "Header spacing fixes",

            "Navigation and menu fixes",

            "Responsive CSS corrections",

            "Testing across common screen sizes"

        ]

    },


    "custom-page": {

        title: "Landing / Product Page",

        category: "CUSTOM WEB PAGE",

        price: "₹1,500 – ₹3,000",

        icon: "◇",

        description:
            "A custom hand-coded webpage built according to your requirements using HTML, CSS and JavaScript.",

        features: [

            "One custom webpage",

            "Responsive desktop and mobile design",

            "HTML and CSS implementation",

            "JavaScript functionality where required",

            "Custom layout according to your requirement"

        ]

    },


    "ecommerce": {

        title: "E-Commerce Website",

        category: "COMPLETE WEBSITE",

        price: "₹6,666 – ₹9,999",

        icon: "✚",

        description:
            "A complete basic e-commerce website with essential pages and functionality. Premium or advanced features can be quoted separately.",

        features: [

            "Complete basic e-commerce website",

            "Responsive desktop and mobile design",

            "Product/service listing",

            "Product/service detail pages",

            "Basic navigation and website structure",

            "Essential website pages",

            "Advanced or premium features can be added for an additional price"

        ]

    }

};


/* =========================================================
   THEME
========================================================= */

const themeToggle =
    document.getElementById("themeToggle");


function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeToggle) {
            themeToggle.textContent = "☾";
        }

    } else {

        document.body.classList.remove("dark-mode");

        if (themeToggle) {
            themeToggle.textContent = "☼";
        }

    }
}


const savedTheme =
    localStorage.getItem("sakshi-theme");


if (savedTheme) {

    applyTheme(savedTheme);

} else {

    applyTheme("light");
}


if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        const isDark =
            document.body.classList.contains("dark-mode");

        const newTheme =
            isDark ? "light" : "dark";

        applyTheme(newTheme);

        localStorage.setItem(
            "sakshi-theme",
            newTheme
        );

    });

}


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


if (
    mobileMenuButton &&
    mobileMenu
) {

    mobileMenuButton.addEventListener(
        "click",
        function () {

            mobileMenu.classList.toggle("show");

        }
    );


    mobileMenu
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileMenu.classList.remove("show");

                }
            );

        });

}


/* =========================================================
   SERVICE PAGE
========================================================= */

const serviceTitle =
    document.getElementById("serviceTitle");


if (serviceTitle) {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const serviceId =
        params.get("service");

    const service =
        services[serviceId];


    /*
     * If somebody opens:
     *
     * service.html
     *
     * without a valid service,
     * send them safely back to the shop.
     */

    if (!service) {

        window.location.replace(
            "index.html"
        );

    } else {

        const category =
            document.getElementById(
                "serviceCategory"
            );

        const price =
            document.getElementById(
                "servicePrice"
            );

        const description =
            document.getElementById(
                "serviceDescription"
            );

        const icon =
            document.getElementById(
                "serviceIcon"
            );

        const features =
            document.getElementById(
                "serviceFeatures"
            );


        document.title =
            service.title +
            " | Sakshi Madgundi";


        serviceTitle.textContent =
            service.title;


        if (category) {

            category.textContent =
                service.category;

        }


        if (price) {

            price.textContent =
                service.price;

        }


        if (description) {

            description.textContent =
                service.description;

        }


        if (icon) {

            icon.textContent =
                service.icon;

        }


        if (features) {

            features.innerHTML = "";


            service.features.forEach(
                function (feature) {

                    const li =
                        document.createElement("li");

                    li.textContent =
                        feature;

                    features.appendChild(li);

                }
            );

        }


        /* =====================================================
           BOOK BUTTON
        ===================================================== */

        const bookButton =
            document.getElementById(
                "bookButton"
            );


        const paymentOverlay =
            document.getElementById(
                "paymentOverlay"
            );


        const paymentServiceName =
            document.getElementById(
                "paymentServiceName"
            );


        const closePayment =
            document.getElementById(
                "closePayment"
            );


        if (
            bookButton &&
            paymentOverlay
        ) {

            bookButton.addEventListener(
                "click",
                function () {

                    paymentServiceName.textContent =
                        service.title;

                    paymentOverlay.classList.add(
                        "open"
                    );

                    paymentOverlay.setAttribute(
                        "aria-hidden",
                        "false"
                    );

                    document.body.style.overflow =
                        "hidden";

                }
            );

        }


        /* =====================================================
           CLOSE PAYMENT
        ===================================================== */

        function closePaymentBox() {

            if (!paymentOverlay) {
                return;
            }

            paymentOverlay.classList.remove(
                "open"
            );

            paymentOverlay.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.style.overflow =
                "";

        }


        if (closePayment) {

            closePayment.addEventListener(
                "click",
                closePaymentBox
            );

        }


        if (paymentOverlay) {

            paymentOverlay.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        paymentOverlay
                    ) {

                        closePaymentBox();

                    }

                }
            );

        }


        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    closePaymentBox();

                }

            }
        );

    }

}
