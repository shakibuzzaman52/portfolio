let favicon = document.querySelector("link[rel*='icon']");
if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/svg+xml";
    document.head.appendChild(favicon);
}
favicon.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'%3E%3Crect x='5.2' y='5.2' width='39.6' height='39.6' fill='none' stroke='%23ffffff' stroke-width='4.4'/%3E%3Cpath d='M 31.9,17.1 L 19.1,17.1 L 19.1,25 L 30.9,25 L 30.9,32.9 L 18.1,32.9' fill='none' stroke='%23ffffff' stroke-width='3.5' stroke-linecap='square' stroke-linejoin='miter'/%3E%3C/svg%3E";

if (!document.querySelector("link[href*='Material+Symbols+Outlined']")) {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";
    document.head.appendChild(fontLink);
}

if (!document.querySelector("header")) {
    const style = document.createElement("style");
    style.textContent = `
        header {  
            width: 100%;  
        }  
        nav {  
            display: flex;  
            justify-content: space-between;  
            align-items: center;  
            width: 100%;  
            height: 80px;  
            padding: 0 6%;  
        }  
        .left {  
            display: flex;  
            align-items: center;  
        }  
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
        .right ul {  
            display: flex;  
            align-items: center;  
            gap: 16px;  
            list-style: none;  
        }  
        .right ul li a {  
            color: #b0b0b0;  
            text-decoration: none;  
            font-size: 0.98rem;  
            transition: color 0.3s ease;  
        }  
        .right ul li a:hover {  
            color: #ffffff;  
        }  
        .right ul li a .nav-icon {  
            display: block;  
            font-size: 1.38rem;  
        }  
        .right ul li a .nav-text {  
            display: none;  
        }  
        @media (min-width: 768px) {  
            nav {  
                height: 90px;  
                padding: 0 3%;  
            }  
            .right ul {  
                gap: 28px;  
            }  
            .right ul li a {  
                font-size: 1.08rem;  
            }  
            .right ul li a .nav-icon {  
                display: none;  
            }  
            .right ul li a .nav-text {  
                display: inline;  
            }  
        }
    `;
    document.head.appendChild(style);

    const header = document.createElement("header");
    header.innerHTML = `
        <nav>
            <div class="left">
                <a href="index.html" class="logo-box" aria-label="Home">
                    <svg viewBox="0 0 32 32" width="100%" height="100%">
                        <path class="logo-svg-path" d="M 23,8 L 10,8 L 10,16 L 22,16 L 22,24 L 9,24" />
                    </svg>
                </a>
            </div>
            <div class="right">
                <ul>
                    <li>
                        <a href="education.html" title="Education">
                            <span class="material-symbols-outlined nav-icon">school</span>
                            <span class="nav-text">Education</span>
                        </a>
                    </li>
                    <li>
                        <a href="achievement.html" title="Achievements">
                            <span class="material-symbols-outlined nav-icon">trophy</span>
                            <span class="nav-text">Achievements</span>
                        </a>
                    </li>
                    <li>
                        <a href="project.html" title="Projects">
                            <span class="material-symbols-outlined nav-icon">folder_open</span>
                            <span class="nav-text">Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="resources.html" title="Resources">
                            <span class="material-symbols-outlined nav-icon">note_stack</span>
                            <span class="nav-text">Resources</span>
                        </a>
                    </li>
                    <li>
                        <a href="blog.html" title="Blog">
                            <span class="material-symbols-outlined nav-icon">news</span>
                            <span class="nav-text">Blog</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
    document.body.prepend(header);
}