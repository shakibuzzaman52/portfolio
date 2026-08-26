// 1. Inject CSS styles directly into the document head
const styleTag = document.createElement("style");
styleTag.textContent = `
    /* Footer Styling */
    .footerSection {
        width: min(700px, 80%);
        margin: 60px auto 0 auto;
        padding: 20px 0 40px 0;
        border-top: 1px solid #1c1c1c;
    }
    .footer-layout {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
    }
    .footer-text-left { color: #888; font-size: 0.85rem; line-height: 1.6; }
    .footer-text-right { color: #555; font-size: 0.85rem; font-family: "DM Mono", monospace; }

    /* Back to Top Button */
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

    /* Curved Hero Graphic */
    .curvedHero { width: 100%; position: relative; margin: 35px 0 45px 0; }
    .curvedHeroContentContainer {
        background: linear-gradient(180deg, #18181b 0%, #000000 100%);
        width: 100%;
        padding: 55px 24px 0 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        clip-path: ellipse(var(--curve-rx, 90%) 100% at 50% 100%);
        will-change: clip-path;
    }
    .visualContainer {
        position: relative;
        width: 100%;
        height: 380px;
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
        font-size: 165px;
        font-weight: 900;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.03) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -4px;
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

    /* Responsive Adjustments */
    @media (max-width: 768px) {
        .footerSection { width: 88%; }
        .footer-layout { flex-direction: column; align-items: flex-start; gap: 8px; }
        .backToTop { right: 20px; bottom: 20px; }
        .curvedHeroContentContainer { padding: 45px 16px 0 16px; clip-path: ellipse(var(--curve-rx, 92%) 100% at 50% 100%); }
        .visualContainer { height: 300px; }
        .heroBgText { font-size: clamp(80px, 22vw, 115px); letter-spacing: -2px; }
    }
`;
document.head.appendChild(styleTag);

// 2. Add Curved Hero to any page containing a <main> tag
const mainElement = document.querySelector("main");
if (mainElement) {
    const curvedHero = document.createElement("section");
    curvedHero.className = "curvedHero";
    curvedHero.innerHTML = `
        <div class="curvedHeroContentContainer">
            <div class="visualContainer">
                <div class="heroBgText">Shakib</div>
                <img src="index-myphoto.png" alt="Shakib" class="heroImage">
            </div>
        </div>
    `;
    mainElement.appendChild(curvedHero);

    // Scroll animation logic for the curve deformation
    const container = curvedHero.querySelector(".curvedHeroContentContainer");
    window.addEventListener("scroll", () => {
        const rect = curvedHero.getBoundingClientRect();
        const start = window.innerHeight * 0.45;
        const total = start - (-150);
        const ratio = Math.max(0, Math.min((start - rect.top) / total, 1));
        const eased = ratio * ratio * (3 - 2 * ratio);
        
        const baseRx = window.innerWidth <= 768 ? 92 : 90;
        const rx = baseRx + eased * (500 - baseRx);
        container.style.setProperty("--curve-rx", `${rx}%`);
    }, { passive: true });
}

// 3. Create and append the Footer and Back to Top button
const currentYear = new Date().getFullYear();
document.body.insertAdjacentHTML("beforeend", `
    <footer class="footerSection">
        <div class="footer-layout">
            <p class="footer-text-left">Thanks for visiting! Let's keep learning, creating and improving together.</p>
            <p class="footer-text-right">© ${currentYear} Shakib</p>
        </div>
    </footer>
    <a href="#" class="backToTop" id="backToTop" title="Back to top">
        <i class="fa-solid fa-arrow-up"></i>
    </a>
`);

// 4. Back to Top button functionality
const backBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    backBtn.classList.toggle("active", window.scrollY > 150);
});
backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});