(function () {
    const styleTag = document.createElement("style");
    styleTag.textContent = `
        .backToTop {
            position: fixed;
            right: 25px;
            bottom: 25px;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #b0b0b0; 
            text-decoration: none;
            opacity: 0;
            pointer-events: none;
            transition: 0.3s ease;
            z-index: 9999;
        }
        .backToTop:hover { color: #fff; background: #18181b; border-radius: 50%; } 
        .backToTop.active { opacity: 1; pointer-events: auto; }

        .curvedHero {
            width: 100%;
            position: relative;
            margin: 100px 0 0 0; 
            padding: 0;
            overflow: hidden;
            background-color: #000000; 
        }

        .curvedHeroContentContainer {
            background: linear-gradient(180deg, #121214 0%, #0f0f0f 100%); 
            width: 100%;
            padding: 35px 0 70px 0; 
            display: flex;
            flex-direction: column;
            align-items: center;
            clip-path: ellipse(var(--curve-rx, 88%) 100% at 50% 100%);
        }

        .visualContainer {
            position: relative;
            width: 100%;
            height: 410px; 
            display: flex;
            justify-content: center;
            align-items: flex-end;
            overflow: hidden;
            margin-bottom: 45px;
        }

        .heroBgText {
            position: absolute;
            top: 65%; 
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: "Inter", Arial, Helvetica, sans-serif;
            font-size: 155px; 
            font-weight: 700; 
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.35) 100%); 
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.04em; 
            z-index: 1;
        }

        .heroImage {
            position: relative;
            z-index: 2;
            height: 86%; 
            object-fit: contain;
            mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
            user-select: none;
            -webkit-user-select: none;
            -webkit-user-drag: none;
            pointer-events: none;
        }

        .footer-content-wrapper {
            width: min(760px, 85%); 
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            z-index: 5;
        }

        .footer-tagline-main {
            font-family: "Inter", Arial, Helvetica, sans-serif;
            font-size: 1.55rem;
            font-weight: 600;
            line-height: 1.6;
            letter-spacing: -0.02em;
            color: #ffffff;
            margin: 0 0 16px 0;
            max-width: 580px;
        }

        .footer-tagline-main span {
            color: #b0b0b0; 
        }

        .footer-meta-line {
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: "Inter", Arial, Helvetica, sans-serif;
            font-size: 0.95rem; 
            color: #b0b0b0; 
            margin-bottom: 40px; 
        }

        .meta-author {
            color: #ffffff;
        }

        .meta-dot-yellow {
            color: #ff7500; 
            font-size: 1.0rem;
            line-height: 1;
        }

        .footer-links-grid {
            display: flex;
            gap: 80px; 
            width: 100%;
        }

        .footer-col {
            display: flex;
            flex-direction: column;
            gap: 14px; /* হেডিং (যেমন: Pages) থেকে লিস্টের প্রথম আইটেমের দূরত্ব */
        }

        .col-title {
            font-family: "Inter", Arial, Helvetica, sans-serif;
            font-size: 0.98rem; 
            font-weight: 500;
            color: #ffffff;
            margin: 0;
            letter-spacing: 0.02em;
        }

        .col-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 6px; /* লিস্টের নিজস্ব আইটেমগুলো (Home, Blog) পরস্পরের আরও কাছাকাছি আনা হয়েছে */
        }

        .col-list a {
            font-family: "Inter", Arial, Helvetica, sans-serif;
            font-size: 1.0rem; 
            color: #b0b0b0; 
            text-decoration: none;
            transition: color 0.2s ease;
        }

        .col-list a:hover {
            color: #ffffff;
        }

        @media (min-width: 768px) {
            .footer-content-wrapper {
                width: min(1100px, 85%);
            }
            .footer-tagline-main {
                font-size: 1.85rem;
                max-width: 700px;
                margin-bottom: 20px;
            }
            .footer-meta-line {
                font-size: 1.05rem;
                margin-bottom: 50px;
            }
            .footer-col {
                gap: 18px; /* ডেস্কটপে টাইটেল থেকে লিস্টের চমৎকার দূরত্ব */
            }
            .col-title {
                font-size: 1.1rem; 
            }
            .col-list {
                gap: 8px; /* ডেস্কটপে লিস্ট আইটেমগুলোর মাঝের সমন্বিত গ্যাপ */
            }
            .col-list a {
                font-size: 1.12rem; 
            }
            .footer-links-grid {
                gap: 120px;
            }
        }

        @media (max-width: 768px) {
            .backToTop { right: 20px; bottom: 20px; }
            .curvedHero {
                margin: 70px 0 0 0; 
                background-color: #000000;
            }
            .curvedHeroContentContainer {
                padding: 20px 0 50px 0;
                background: linear-gradient(180deg, #121214 0%, #0f0f0f 100%);
                clip-path: ellipse(var(--curve-rx, 138%) 100% at 50% 100%);
            }
            .visualContainer { height: 300px; margin-bottom: 25px; }
            .heroBgText { font-size: clamp(80px, 20vw, 115px); top: 65%; letter-spacing: -0.02em; }
            .heroImage { height: 84%; }

            .footer-content-wrapper {
                width: 88%;
            }
            .footer-tagline-main {
                font-size: 1.35rem;
                margin-bottom: 14px;
            }
            .footer-meta-line {
                margin-bottom: 35px;
            }
            .footer-links-grid {
                gap: 60px;
            }
        }
    `;
    document.head.appendChild(styleTag);

    const curvedHero = document.createElement("section");
    curvedHero.className = "curvedHero";
    curvedHero.innerHTML = `
        <div class="curvedHeroContentContainer">
            <div class="visualContainer">
                <div class="heroBgText">Shakib</div>
                <img src="index-myphoto.webp" alt="Shakib" class="heroImage" draggable="false">
            </div>

            <div class="footer-content-wrapper">
                <h2 class="footer-tagline-main">
                    Building elegant code 
                    <span>and solving complex algorithms.</span>
                </h2>

                <div class="footer-meta-line">
                    <span class="meta-author">Built by Shakib</span>
                    <span class="meta-dot-yellow">•</span>
                    <span>All rights reserved</span>
                </div>

                <div class="footer-links-grid">
                    <div class="footer-col">
                        <h4 class="col-title">Pages</h4>
                        <ul class="col-list">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="project.html">Projects</a></li>
                            <li><a href="resources.html">Resources</a></li>
                        </ul>
                    </div>

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
    document.body.appendChild(curvedHero);

    document.body.insertAdjacentHTML("beforeend", `
        <a href="#" class="backToTop" id="backToTop" title="Back to top">
            <i class="fa-solid fa-arrow-up"></i>
        </a>
    `);

    const backBtn = document.getElementById("backToTop");
    const container = curvedHero.querySelector(".curvedHeroContentContainer");

    window.addEventListener("scroll", () => {
        backBtn.classList.toggle("active", window.scrollY > 150);

        const rect = curvedHero.getBoundingClientRect();
        const start = window.innerHeight * 0.45;
        const total = start + 150; 
        const ratio = Math.max(0, Math.min((start - rect.top) / total, 1));
        
        const baseRx = window.innerWidth <= 768 ? 138 : 88;
        const rx = baseRx + ratio * (360 - baseRx); 
        container.style.setProperty("--curve-rx", `${rx}%`);
    }, { passive: true });

    backBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
})();