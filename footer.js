/**
 * Dynamic Footer & Extended Curved Hero Section Integration
 * Theme: Fine-Tuned Elegant Curves (80% Desktop, 142% Mobile) & Tight-Knit Spacing
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
            margin: 100px 0 0 0; /* Clear top separation, absolutely zero side margins */
            padding: 0;
            overflow: hidden;
        }

        .curvedHeroContentContainer {
            background: linear-gradient(180deg, #18181b 0%, #000000 100%);
            width: 100%;
            padding: 60px 0 60px 0; /* Elegant bottom padding */
            display: flex;
            flex-direction: column;
            align-items: center;
            /* Fine-tuned desktop curve with slightly flatter 80% starting ratio */
            clip-path: ellipse(var(--curve-rx, 80%) 100% at 50% 100%);
            will-change: clip-path;
        }

        /* Elongated Visual Graphic Container */
        .visualContainer {
            position: relative;
            width: 100%;
            height: 520px; /* Extended height for dynamic visual look */
            display: flex;
            justify-content: center;
            align-items: flex-end;
            overflow: hidden;
        }

        .heroBgText {
            position: absolute;
            top: 52%; left: 50%;
            transform: translate(-50%, -50%);
            font-family: "Inter", sans-serif;
            font-size: 210px; /* Massive display text */
            font-weight: 500; /* Medium weight, matching "Building elegant code," perfectly */
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.03) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.03em; /* Clean, modern spacing matching the tagline */
            z-index: 1;
            pointer-events: none;
            user-select: none;
        }

        .heroImage {
            position: relative;
            z-index: 2;
            height: 100%;
            object-fit: contain;
            mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
        }

        /* Minimal Grid Container */
        .footer-grid-container {
            width: min(700px, 80%); /* Aligns perfectly with main site content container */
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 50px;
            padding-top: 80px; /* Soft space padding instead of hard divider line */
            margin-top: 20px;
            z-index: 5;
        }

        /* Brand Column with Contrast Typography */
        .footer-brand-column {
            flex: 1.2;
            min-width: 280px;
            display: flex;
            flex-direction: column;
            gap: 20px; /* Space between tagline and metadata */
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
            color: #555555; /* Muted contrast styling */
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
            color: #eab308; /* Premium gold dot */
            font-weight: bold;
        }

        /* Link columns style mimicking screenshot aesthetics with tightened spacing */
        .footer-nav-columns {
            display: flex;
            gap: 45px; /* Brought closer together for tighter, cohesive layout */
            min-width: 240px;
            flex: 1;
            justify-content: flex-end;
        }

        .footer-column {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .column-title {
            color: #ffffff; /* Crisp white header matching screenshot */
            font-size: 1.05rem;
            font-weight: 500;
            letter-spacing: -0.01em;
            margin-bottom: 4px;
        }

        .column-links {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 15px; /* Generous link gap */
            padding: 0;
            margin: 0;
        }

        .column-links li a {
            color: #888888; /* Sophisticated gray link */
            text-decoration: none;
            font-size: 1.05rem;
            font-weight: 400;
            transition: color 0.25s ease;
        }

        .column-links li a:hover {
            color: #ffffff;
        }

        /* Responsive Layout Adjustments */
        @media (max-width: 768px) {
            .backToTop { right: 20px; bottom: 20px; }
            .curvedHeroContentContainer {
                padding: 45px 0 40px 0;
                /* Standardized starting curve on mobile viewports (142% ratio) */
                clip-path: ellipse(var(--curve-rx, 142%) 100% at 50% 100%);
            }
            .visualContainer { height: 380px; }
            .heroBgText { font-size: clamp(100px, 24vw, 150px); letter-spacing: -0.02em; }

            .footer-grid-container {
                width: 88%;
                flex-direction: column;
                gap: 50px;
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
            .footer-nav-columns {
                width: 100%;
                justify-content: flex-start; /* Align columns left on mobile instead of stretching */
                gap: 40px; /* Brought closer together on mobile to eliminate empty space */
            }
            .column-title { font-size: 1rem; }
            .column-links li a { font-size: 1rem; }
        }
    `;
    document.head.appendChild(styleTag);

    // 2. Create the unified full-width Curved Section containing the visual elements followed by the grid footer
    const curvedHero = document.createElement("section");
    curvedHero.className = "curvedHero";
    curvedHero.innerHTML = `
        <div class="curvedHeroContentContainer">
            <!-- Top: Extended graphic visual elements -->
            <div class="visualContainer">
                <div class="heroBgText">Shakib</div>
                <img src="index-myphoto.png" alt="Shakib" class="heroImage">
            </div>

            <!-- Bottom: Center-aligned multi-column grid footer -->
            <div class="footer-grid-container">
                <!-- Left brand and metadata block (Restored and aligned) -->
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

                <!-- Right link navigation columns matching actual portfolio pages -->
                <div class="footer-nav-columns">
                    <div class="footer-column">
                        <h3 class="column-title">Pages</h3>
                        <ul class="column-links">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="project.html">Projects</a></li>
                            <li><a href="resources.html">Resources</a></li>
                            <li><a href="achievement.html">Achievements</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3 class="column-title">Info</h3>
                        <ul class="column-links">
                            <li><a href="education.html">Education</a></li>
                            <li><a href="movie.html">Movies</a></li>
                            <li><a href="#">Resume</a></li>
                            <li><a href="mailto:shakibuzzaman52@gmail.com">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Append to body so it stretches full viewport width bypassing <main> constraints
    document.body.appendChild(curvedHero);

    // 3. Real-time scroll deformation calculations with adjusted curvature base
    const container = curvedHero.querySelector(".curvedHeroContentContainer");
    window.addEventListener("scroll", () => {
        const rect = curvedHero.getBoundingClientRect();
        const start = window.innerHeight * 0.45;
        const total = start - (-150);
        const ratio = Math.max(0, Math.min((start - rect.top) / total, 1));
        const eased = ratio * ratio * (3 - 2 * ratio);
        
        // Custom curved arc starting base: Flatter on mobile (142%), deeper on desktop (80%)
        const baseRx = window.innerWidth <= 768 ? 142 : 80;
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