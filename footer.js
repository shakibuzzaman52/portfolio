/**
 * Dynamic Footer & Extended Curved Hero Section Integration
 * Theme: Balanced 84%/148% Curve & Tight-Knit Real Navigation Columns
 */

(function () {
    // 1. Inject combined CSS styles into the document head
    const styleTag = document.createElement("style");
    styleTag.textContent = `
        /* Back to Top Button Styling */
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
            text-decoration: none;
            opacity: 0;
            pointer-events: none;
            transition: 0.3s ease;
            z-index: 9999;
        }
        .backToTop:hover { color: #fff; background: #111111; border-radius: 50%; }
        .backToTop.active { opacity: 1; pointer-events: auto; }

        /* Full-Width (Edge-to-Edge) Curved Footer Section */
        .curvedHero {
            width: 100%;
            position: relative;
            margin: 150px 0 0 0; /* Premium margin space above the curve */
            padding: 0;
            overflow: hidden;
        }

        .curvedHeroContentContainer {
            background: linear-gradient(180deg, #18181b 0%, #000000 100%);
            width: 100%;
            padding: 55px 0 65px 0; 
            display: flex;
            flex-direction: column;
            align-items: center;
            /* Fine-tuned curve using ellipse formula */
            clip-path: ellipse(var(--curve-rx, 84%) 100% at 50% 100%);
            will-change: clip-path;
        }

        /* Elongated Visual Graphic Container */
        .visualContainer {
            position: relative;
            width: 100%;
            height: 490px; 
            display: flex;
            justify-content: center;
            align-items: flex-end;
            overflow: hidden;
        }

        .heroBgText {
            position: absolute;
            top: 55%; left: 50%;
            transform: translate(-50%, -50%);
            font-family: "Inter", sans-serif;
            font-size: 175px; 
            font-weight: 500; 
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.03) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.03em; 
            z-index: 1;
            pointer-events: none;
            user-select: none;
        }

        .heroImage {
            position: relative;
            z-index: 2;
            height: 90%; 
            object-fit: contain;
            mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
        }

        /* Minimal Grid Container */
        .footer-grid-container {
            width: min(700px, 80%); 
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 50px;
            padding-top: 70px; 
            margin-top: 20px;
            z-index: 5;
        }

        /* Brand Column with Contrast Typography */
        .footer-brand-column {
            flex: 0.8; 
            min-width: 260px;
            display: flex;
            flex-direction: column;
            gap: 20px; 
        }

        /* Large, elegant contrast tagline */
        .footer-tagline {
            color: #ffffff;
            font-size: 1.45rem;
            font-weight: 500;
            line-height: 1.45;
            letter-spacing: -0.02em;
            max-width: 360px;
        }

        .footer-tagline span {
            color: #555555; 
        }

        .footer-meta {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.85rem;
            color: #555555;
            letter-spacing: 0.02em;
        }

        .meta-dot {
            color: #eab308; 
            font-weight: bold;
        }

        /* Vertical Columns Flow (Desktop: Max 3 items vertically before wrapping to next column) */
        .footer-nav-flow {
            display: grid;
            grid-template-rows: repeat(3, auto); /* Max 3 rows (vertical items) */
            grid-auto-flow: column; /* Flow items vertically top-to-bottom first */
            grid-auto-columns: 1fr; /* All columns share equal width */
            gap: 25px 30px; 
            flex: 1.5;
            min-width: 340px;
        }

        .footer-nav-flow a {
            color: #888888;
            text-decoration: none;
            font-size: 1.05rem;
            font-weight: 400;
            transition: color 0.25s ease;
        }

        .footer-nav-flow a:hover {
            color: #ffffff;
        }

        /* Responsive Layout Adjustments */
        @media (max-width: 768px) {
            .backToTop { right: 20px; bottom: 20px; }
            .curvedHero {
                margin: 90px 0 0 0; 
            }
            .curvedHeroContentContainer {
                padding: 30px 0 40px 0;
                clip-path: ellipse(var(--curve-rx, 148%) 100% at 50% 100%);
            }
            .visualContainer { height: 360px; }
            .heroBgText { font-size: clamp(90px, 22vw, 130px); top: 56%; letter-spacing: -0.02em; }
            .heroImage { height: 88%; }

            .footer-grid-container {
                width: 88%;
                flex-direction: column;
                gap: 40px;
                padding-top: 40px;
            }
            .footer-brand-column {
                min-width: 100%;
                gap: 16px;
            }
            .footer-tagline {
                font-size: 1.25rem;
                max-width: 100%;
            }
            
            /* Vertical Columns Flow (Mobile: Max 4 items vertically before wrapping) */
            .footer-nav-flow {
                width: 100%;
                grid-template-rows: repeat(4, auto); /* Max 4 rows (vertical items) on mobile */
                grid-auto-flow: column; 
                grid-auto-columns: 1fr;
                gap: 15px 15px; 
                min-width: unset;
            }
            .footer-nav-flow a { 
                font-size: clamp(0.8rem, 2.8vw, 1rem); 
                word-break: break-word;
            }
        }
    `;
    document.head.appendChild(styleTag);

    // 2. Create the unified full-width Curved Section
    const curvedHero = document.createElement("section");
    curvedHero.className = "curvedHero";
    curvedHero.innerHTML = `
        <div class="curvedHeroContentContainer">
            <!-- Top: Spaced dynamic visual elements -->
            <div class="visualContainer">
                <div class="heroBgText">Shakib</div>
                <img src="index-myphoto.png" alt="Shakib" class="heroImage">
            </div>

            <!-- Bottom: Center-aligned flow grid footer -->
            <div class="footer-grid-container">
                <!-- Left brand and metadata block -->
                <div class="footer-brand-column">
                    <p class="footer-tagline">
                        Building elegant code,<br><span>and solving complex algorithms.</span>
                    </p>
                    <div class="footer-meta">
                        <span>Built by Shakib</span>
                        <span class="meta-dot">•</span>
                        <span>All rights reserved</span>
                    </div>
                </div>

                <!-- Right continuous Grid flow (Vertically ordered top-to-bottom) -->
                <div class="footer-nav-flow">
                    <!-- Column-based flow -->
                    <a href="blog.html">Blog</a>
                    <a href="project.html">Projects</a>
                    <a href="resources.html">Resources</a>
                    <a href="achievement.html">Achievements</a>
                    <a href="education.html">Education</a>
                    <a href="movie.html">Movies</a>
                    <a href="#">Resume</a>
                    <a href="https://github.com/shakibuzzaman52" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/shakibuzzaman52" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com/shakibuzzaman_52" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.facebook.com/shakibuzzaman52" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://x.com/shakibuzzaman52" target="_blank" rel="noopener noreferrer">X</a>
                </div>
            </div>
        </div>
    `;

    // Append to body so it stretches full viewport width bypassing <main> constraints
    document.body.appendChild(curvedHero);

    // 3. Real-time scroll deformation calculations
    const container = curvedHero.querySelector(".curvedHeroContentContainer");
    window.addEventListener("scroll", () => {
        const rect = curvedHero.getBoundingClientRect();
        const start = window.innerHeight * 0.45;
        const total = start - (-150);
        const ratio = Math.max(0, Math.min((start - rect.top) / total, 1));
        const eased = ratio * ratio * (3 - 2 * ratio);
        
        const baseRx = window.innerWidth <= 768 ? 148 : 84;
        const rx = baseRx + eased * (500 - baseRx);
        container.style.setProperty("--curve-rx", `${rx}%`);
    }, { passive: true });

    // 4. Back to Top button registration
    document.body.insertAdjacentHTML("beforeend", `
        <a href="#" class="backToTop" id="backToTop" title="Back to top">
            <i class="fa-solid fa-arrow-up"></i>
        </a>
    `);

    const backBtn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        backBtn.classList.toggle("active", window.scrollY > 150);
    });
    backBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
})();