/**
 * Dynamic Footer & Extended Curved Hero Section Integration
 * Content: Shakib Personal Portfolio Content (With "Achievements" added)
 * Design: Minimal Left-Aligned Multi-Column Layout (Finely adjusted subtle curve)
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
            margin: 120px 0 0 0; 
            padding: 0;
            overflow: hidden;
            background-color: #000000;
        }

        .curvedHeroContentContainer {
            background: linear-gradient(180deg, #18181b 0%, #000000 100%);
            width: 100%;
            padding: 35px 0 80px 0; 
            display: flex;
            flex-direction: column;
            align-items: center;
            /* Finely adjusted to 88% to slightly flatten the curve further while preserving the look */
            clip-path: ellipse(var(--curve-rx, 88%) 100% at 50% 100%);
            will-change: clip-path;
        }

        /* Original Visual Graphic Container */
        .visualContainer {
            position: relative;
            width: 100%;
            height: 460px; 
            display: flex;
            justify-content: center;
            align-items: flex-end;
            overflow: hidden;
            margin-bottom: 50px;
        }

        /* Refined Background Typography Settings */
        .heroBgText {
            position: absolute;
            top: 65%; 
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: "Inter", "Plus Jakarta Sans", -apple-system, sans-serif;
            font-size: 175px; 
            font-weight: 700; 
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.02) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.04em; 
            z-index: 1;
            pointer-events: none;
            user-select: none;
        }

        .heroImage {
            position: relative;
            z-index: 2;
            height: 92%; 
            object-fit: contain;
            mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
        }

        /* Content wrapper aligned strictly left matching the layout width of the screenshot */
        .footer-content-wrapper {
            width: min(760px, 85%); 
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            z-index: 5;
        }

        /* Spaced Tagline with high-low contrast division */
        .footer-tagline-main {
            font-family: "Inter", -apple-system, sans-serif;
            font-size: 1.85rem;
            font-weight: 500;
            line-height: 1.4;
            letter-spacing: -0.02em;
            color: #ffffff;
            margin: 0 0 24px 0;
            max-width: 580px;
        }

        .footer-tagline-main span {
            color: #4b5563; /* Dimmed text for secondary clause */
        }

        /* Meta block styling with yellow dot separator */
        .footer-meta-line {
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: "Inter", -apple-system, sans-serif;
            font-size: 0.95rem;
            color: #6b7280;
            margin-bottom: 56px;
        }

        .meta-author {
            color: #ffffff;
        }

        .meta-dot-yellow {
            color: #f59e0b; /* Amber/Yellow dot */
            font-size: 1.1rem;
            line-height: 1;
        }

        /* Multi-column grid for standard lists */
        .footer-links-grid {
            display: flex;
            gap: 120px; 
            width: 100%;
        }

        .footer-col {
            display: flex;
            flex-direction: column;
            gap: 18px;
        }

        .col-title {
            font-family: "Inter", -apple-system, sans-serif;
            font-size: 1rem;
            font-weight: 500;
            color: #ffffff;
            margin: 0;
        }

        .col-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .col-list a {
            font-family: "Inter", -apple-system, sans-serif;
            font-size: 1rem;
            color: #6b7280;
            text-decoration: none;
            transition: color 0.2s ease;
        }

        .col-list a:hover {
            color: #ffffff;
        }

        /* Responsive Layout Adjustments */
        @media (max-width: 768px) {
            .backToTop { right: 20px; bottom: 20px; }
            .curvedHero {
                margin: 70px 0 0 0; 
            }
            .curvedHeroContentContainer {
                padding: 20px 0 50px 0;
                /* Adjusted to 138% for mobile curve adjustment */
                clip-path: ellipse(var(--curve-rx, 138%) 100% at 50% 100%);
            }
            .visualContainer { height: 340px; margin-bottom: 25px; }
            .heroBgText { font-size: clamp(90px, 22vw, 130px); top: 65%; letter-spacing: -0.02em; }
            .heroImage { height: 90%; }

            .footer-content-wrapper {
                width: 88%;
            }
            .footer-tagline-main {
                font-size: 1.45rem;
                margin-bottom: 20px;
            }
            .footer-meta-line {
                margin-bottom: 40px;
            }
            .footer-links-grid {
                gap: 70px;
            }
            .col-list {
                gap: 12px;
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

            <!-- Bottom: Organized in the layout style of the screenshot -->
            <div class="footer-content-wrapper">
                
                <!-- Left aligned contrast Tagline -->
                <h2 class="footer-tagline-main">
                    Building elegant code 
                    <span>and solving complex algorithms.</span>
                </h2>

                <!-- Author Meta Details (with Yellow Dot) -->
                <div class="footer-meta-line">
                    <span class="meta-author">Built by Shakib</span>
                    <span class="meta-dot-yellow">•</span>
                    <span>All rights reserved</span>
                </div>

                <!-- Structured Link Columns -->
                <div class="footer-links-grid">
                    <!-- Column 1: Pages -->
                    <div class="footer-col">
                        <h4 class="col-title">Pages</h4>
                        <ul class="col-list">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="project.html">Projects</a></li>
                            <li><a href="resources.html">Resources</a></li>
                        </ul>
                    </div>

                    <!-- Column 2: Info (with Achievements added) -->
                    <div class="footer-col">
                        <h4 class="col-title">Info</h4>
                        <ul class="col-list">
                            <li><a href="education.html">Education</a></li>
                            <li><a href="achievement.html">Achievements</a></li>
                            <li><a href="#">Resume</a></li>
                            <li><a href="mailto:shakibuzzaman52@gmail.com">Email</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    `;

    // Append to body so it stretches full viewport width
    document.body.appendChild(curvedHero);

    // 3. Real-time scroll deformation calculations
    const container = curvedHero.querySelector(".curvedHeroContentContainer");
    window.addEventListener("scroll", () => {
        const rect = curvedHero.getBoundingClientRect();
        const start = window.innerHeight * 0.45;
        const total = start - (-150);
        const ratio = Math.max(0, Math.min((start - rect.top) / total, 1));
        const eased = ratio * ratio * (3 - 2 * ratio);
        
        // Base values (88 / 138)
        const baseRx = window.innerWidth <= 768 ? 138 : 88;
        const rx = baseRx + eased * (360 - baseRx);
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