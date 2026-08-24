/**
 * Dynamic Footer Generator
 * Theme: Ultra-Minimalist (Simple Solid Line & Auto-updating Year)
 */

(function () {
    // 1. Clean & Minimal CSS Styles
    const footerStyles = `
        /* Footer Section Styling */
        .footerSection {
            width: min(700px, 80%);
            margin: 60px auto 0 auto;
            padding: 20px 0 40px 0;
            border-top: 1px solid #1c1c1c; /* একদম সাধারণ ও হালকা সলিড লাইন */
            position: relative;
            z-index: 1;
            clear: both;
        }

        /* Footer Text Layout */
        .footer-layout {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
        }

        .footer-text-left {
            color: #888; /* নরম ধূসর রঙ */
            font-size: 0.85rem;
            line-height: 1.6;
        }

        .footer-text-right {
            color: #555;
            font-size: 0.85rem;
            font-family: "DM Mono", monospace;
            white-space: nowrap;
        }

        /* Simple Back to Top Button */
        .backToTop {
            position: fixed;
            right: 25px;
            bottom: 25px;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #666;
            background: transparent;
            border-radius: 50%;
            text-decoration: none;
            font-size: 0.9rem;
            opacity: 0;
            pointer-events: none;
            transition: 0.3s ease;
            z-index: 9999;
        }

        .backToTop:hover {
            color: #fff;
            background: #111111;
        }

        .backToTop.active {
            opacity: 1;
            pointer-events: auto;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
            .footerSection {
                width: 88%;
            }
            .footer-layout {
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
            }
            .footer-text-left {
                font-size: 0.8rem;
            }
            .footer-text-right {
                font-size: 0.8rem;
            }
            .backToTop {
                right: 20px;
                bottom: 20px;
            }
        }
    `;

    // 2. Inject CSS into document head
    const styleTag = document.createElement("style");
    styleTag.textContent = footerStyles;
    document.head.appendChild(styleTag);

    // 3. Generate HTML structure on DOM Load
    document.addEventListener("DOMContentLoaded", function () {
        // Automatic Year Fetching logic
        const currentYear = new Date().getFullYear();

        // Create Footer element
        const footer = document.createElement("footer");
        footer.className = "footerSection";
        footer.innerHTML = `
            <div class="footer-layout">
                <p class="footer-text-left">Thanks for visiting! Let's keep learning, creating and improving together.</p>
                <p class="footer-text-right">© ${currentYear} Shakib</p>
            </div>
        `;

        // Create Back to Top button
        const backToTopBtn = document.createElement("a");
        backToTopBtn.href = "#";
        backToTopBtn.className = "backToTop";
        backToTopBtn.id = "backToTop";
        backToTopBtn.title = "Back to top";
        backToTopBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;

        // Append both dynamically to the body
        document.body.appendChild(footer);
        document.body.appendChild(backToTopBtn);

        // 4. Back to Top Button Logic
        window.addEventListener("scroll", function () {
            if (window.scrollY > 150) {
                backToTopBtn.classList.add("active");
            } else {
                backToTopBtn.classList.remove("active");
            }
        });

        backToTopBtn.onclick = function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
    });
})();