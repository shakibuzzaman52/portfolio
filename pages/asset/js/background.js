const style = document.createElement('style');
style.textContent = `
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