// 1. Inject Favicon dynamically using flat and optimized SVG coordinates (No nested groups or transforms)
let favicon = document.querySelector("link[rel*='icon']");
if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/svg+xml";
    document.head.appendChild(favicon);
}
favicon.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'%3E%3Crect x='5.2' y='5.2' width='39.6' height='39.6' fill='none' stroke='%23ffffff' stroke-width='4.4'/%3E%3Cpath d='M 31.9,17.1 L 19.1,17.1 L 19.1,25 L 30.9,25 L 30.9,32.9 L 18.1,32.9' fill='none' stroke='%23ffffff' stroke-width='3.5' stroke-linecap='square' stroke-linejoin='miter'/%3E%3C/svg%3E";

// 2. Inject Header Logo and its styles in a single clean operation
const logoContainer = document.querySelector(".left");
if (logoContainer) {
    logoContainer.innerHTML = `
        <style>
            .logo-box {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 25px;
                height: 25px;
                border: 2.5px solid #ffffff; 
                text-decoration: none;
                transition: opacity 0.2s ease;
                padding: 1px;
                background: transparent;
            }
            .logo-box:hover {
                opacity: 0.8;
            }
            .logo-svg-path {
                fill: none;
                stroke: #ffffff;
                stroke-width: 3.5;
                stroke-linecap: square;
                stroke-linejoin: miter;
            }
        </style>
        <a href="index.html" class="logo-box" aria-label="Home">
            <svg viewBox="0 0 32 32" width="100%" height="100%">
                <path class="logo-svg-path" d="M 23,8 L 10,8 L 10,16 L 22,16 L 22,24 L 9,24" />
            </svg>
        </a>
    `;
}