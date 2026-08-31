const style = document.createElement('style');
style.textContent = `
    :root {
        --glow-radius-x: 360px;
        --glow-radius-y: 290px;
        --glow-opacity-multiplier: 0.8;
    }

    @media (min-width: 1024px) {
        :root {
            --glow-radius-x: 1000px;
            --glow-radius-y: 650px;
            --glow-opacity-multiplier: 1;
        }
    }

    body {
        background: 
            radial-gradient(
                ellipse var(--glow-radius-x) var(--glow-radius-y) at 100% 0%,
                rgba(0, 145, 135, calc(0.46 * var(--glow-opacity-multiplier))) 0%,
                rgba(0, 140, 130, calc(0.40 * var(--glow-opacity-multiplier))) 6%,
                rgba(0, 125, 115, calc(0.32 * var(--glow-opacity-multiplier))) 18%,
                rgba(0, 95, 90, calc(0.20 * var(--glow-opacity-multiplier))) 30%,
                rgba(0, 65, 62, calc(0.11 * var(--glow-opacity-multiplier))) 45%,
                rgba(0, 35, 34, calc(0.04 * var(--glow-opacity-multiplier))) 58%,
                transparent 68%
            ),
            radial-gradient(
                ellipse var(--glow-radius-x) var(--glow-radius-y) at 0% 0%,
                rgba(150, 150, 150, calc(0.46 * var(--glow-opacity-multiplier))) 0%,
                rgba(145, 145, 145, calc(0.40 * var(--glow-opacity-multiplier))) 6%,
                rgba(135, 135, 135, calc(0.32 * var(--glow-opacity-multiplier))) 18%,
                rgba(110, 110, 110, calc(0.21 * var(--glow-opacity-multiplier))) 32%,
                rgba(75, 75, 75, calc(0.11 * var(--glow-opacity-multiplier))) 45%,
                rgba(40, 40, 40, calc(0.04 * var(--glow-opacity-multiplier))) 58%,
                transparent 68%
            ),
            #000000;
    }

    body::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
        background-size: 1px 100%;
        background-repeat: no-repeat;
        -webkit-mask-image: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.85) 12%, rgba(0, 0, 0, 0.2) 32%, transparent 45%);
        mask-image: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.85) 12%, rgba(0, 0, 0, 0.2) 32%, transparent 45%);
        background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px);
        background-position: 
            8% 0, 
            23% 0, 24.5% 0, 
            38% 0, 39.5% 0, 
            53% 0, 54.5% 0, 
            68% 0, 69.5% 0, 
            83% 0, 84.5% 0, 
            94% 0;
    }

    @media (max-width: 768px) {
        body::before {
            background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
                linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
                linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
                linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
                linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
                linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
                linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
                linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px);
            background-position: 
                6% 0, 
                24% 0, 31% 0, 
                47% 0, 54% 0, 
                70% 0, 77% 0, 
                94% 0;
        }
    }
`;
document.head.appendChild(style);