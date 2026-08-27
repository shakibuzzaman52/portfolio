/**
 * Dynamic Footer & Extended Curved Hero Section Integration
 * Theme: Balanced 90%/135% Curve with Sleek Single-Row Minimal Links
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
            margin: 120px 0 0 0; /* Reduced margin space above the curve */
            padding: 0;
            overflow: hidden;
        }

        .curvedHeroContentContainer {
            background: linear-gradient(180deg, #18181b 0%, #000000 100%);
            width: 100%;
            padding: 35px 0 65px 0; /* Reduced top padding from 55px to bring top section closer */
            display: flex;
            flex-direction: column;
            align-items: center;
            /* Fine-tuned baseline curve */
            clip-path: ellipse(var(--curve-rx, 90%) 100% at 50% 100%);
            will-change: clip-path;
        }

        /* Elongated Visual Graphic Container */
        .visualContainer {
            position: relative;
            width: 100%;
            height: 460px; /* Marginally reduced height to control space above image */
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
            height: 92%; /* Slightly adjusted scale to fit tightly */
            object-fit: contain;
            mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
        }

        /* Minimal Grid Container - Spacing pulled closer to the image */
        .footer-grid-container {
            width: min(760px, 85%); /* Adjusted slightly for longer single row links */
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 30px;
            padding-top: 35px; 
            margin-top: 10px; 
            z-index: 5;
            border-top: 1px solid rgba(255, 255, 255, 0.05); /* Soft premium top border */
        }

        /* Brand Column with Contrast Typography */
        .footer-brand-column {
            flex: 0.9; 
            min-width: 260px;
            display: flex;
            flex-direction: column;
            gap: 12px; 
        }

        /* Large, elegant contrast tagline */
        .footer-tagline {
            color: #ffffff;
            font-size: 1.35rem;
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
            font-weight: bold;
        }

        /* Sleek Single-Row Minimal Links */
        .footer-nav-minimal {
            display: flex;
            align-items: center;
            gap: 14px; /* Slightly tighter gap for more links */
            flex-wrap: wrap;
            justify-content: flex-end;
            min-width: 300px;
        }

        .footer-nav-minimal a {
            color: #888888;
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 400;
            transition: color 0.25s ease;
        }

        .footer-nav-minimal a:hover {
            color: #ffffff;
        }

        .nav-divider {
            color: #333333;
            font-size: 0.85rem;
            user-select: none;
        }

        /* Responsive Layout Adjustments */
        @media (max-width: 768px) {
            .backToTop { right: 20px; bottom: 20px; }
            .curvedHero {
                margin: 70px 0 0 0; 
            }
            .curvedHeroContentContainer {
                padding: 20px 0 40px 0; /* Reduced top padding on mobile */
                clip-path: ellipse(var(--curve-rx, 135%) 100% at 50% 100%);
            }
            .visualContainer { height: 340px; }
            .heroBgText { font-size: clamp(90px, 22vw, 130px); top: 56%; letter-spacing: -0.02em; }
            .heroImage { height: 90%; }

            .footer-grid-container {
                width: 88%;
                flex-direction: column;
                align-items: center;
                text-align: center;
                gap: 25px; 
                padding-top: 25px; 
                border-top: 1px solid rgba(255, 255, 255, 0.08);
            }
            
            .footer-brand-column {
                min-width: 100%;
                gap: 12px;
                align-items: center;
            }
            
            .footer-tagline {
                font-size: 1.2rem;
                max-width: 100%;
            }
            
            .footer-nav-minimal {
                width: 100%;
                gap: 10px 14px;
                min-width: unset;
                justify-content: center;
            }

            .nav-divider {
                display: none; /* Hide dividers on mobile for better wrapping */
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

                <!-- Right: Sleek minimal single-row links list with requested navigation items -->
                <div class="footer-nav-minimal">
                    <a href="index.html">Home</a>
                    <span class="nav-divider">/</span>
                    <a href="blog.html">Blog</a>
                    <span class="nav-divider">/</span>
                    <a href="project.html">Projects</a>
                    <span class="nav-divider">/</span>
                    <a href="resources.html">Resources</a>
                    <span class="nav-divider">/</span>
                    <a href="education.html">Education</a>
                    <span class="nav-divider">/</span>
                    <a href="#">Resume</a>
                    <span class="nav-divider">/</span>
                    <a href="mailto:shakibuzzaman52@gmail.com">Email</a>
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
        
        // Base curves adjusted (Desktop: 90%, Mobile: 135%) with slightly softer max curve transitions
        const baseRx = window.innerWidth <= 768 ? 135 : 90;
        const rx = baseRx + eased * (350 - baseRx);
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