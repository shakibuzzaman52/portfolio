(function () {
    const style = document.createElement('style');
    style.textContent = `
        #bg-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);

    let canvas, ctx;
    let columns = [];
    const mouse = { x: null, y: null, active: false, glowAlpha: 0 };
    const revealRadius = 150;
    const topRevealHeight = 160;

    function init() {
        canvas = document.createElement('canvas');
        canvas.id = 'bg-canvas';
        document.body.insertBefore(canvas, document.body.firstChild);
        ctx = canvas.getContext('2d');

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.pageX;
            mouse.y = e.pageY;
            mouse.active = true;
        });

        window.addEventListener('mouseleave', () => {
            mouse.active = false;
        });

        window.addEventListener('touchstart', (e) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].pageX;
                mouse.y = e.touches[0].pageY;
                mouse.active = true;
            }
        });

        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].pageX;
                mouse.y = e.touches[0].pageY;
                mouse.active = true;
            }
        });

        window.addEventListener('touchend', () => {
            mouse.active = false;
        });

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('load', resizeCanvas);
        
        resizeCanvas();
        animate();
    }

    class PremiumColumn {
        constructor(x) {
            this.x = x;
            this.y = (Math.random() * 2 - 1) * canvas.height;
            this.fontSize = 12;
            this.speed = 0.45 + Math.random() * 0.5;
        }

        update() {
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.y = -20;
            }
        }

        draw() {
            ctx.font = `300 ${this.fontSize}px "DM Mono", monospace`;

            const trailLength = 8;
            for (let i = 0; i < trailLength; i++) {
                const charY = this.y - (i * this.fontSize * 1.3);
                if (charY < 0 || charY > canvas.height) continue;

                let revealAlpha = 0;
                if (mouse.glowAlpha > 0 && mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - charY;
                    const distance = Math.hypot(dx, dy);
                    if (distance < revealRadius) {
                        revealAlpha = (1 - distance / revealRadius) * 0.22 * mouse.glowAlpha;
                    }
                }

                let topAlpha = 0;
                if (charY < topRevealHeight) {
                    topAlpha = (1 - charY / topRevealHeight) * 0.22;
                }

                const alpha = Math.max(revealAlpha, topAlpha);

                if (alpha > 0.005) {
                    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                    ctx.fillText(Math.random() > 0.5 ? '1' : '0', this.x, charY);
                }
            }
        }
    }

    function resizeCanvas() {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            window.innerHeight
        );

        const colWidth = 18;
        const numColumns = Math.floor(canvas.width / colWidth) + 1;

        if (columns.length < numColumns) {
            for (let i = columns.length; i < numColumns; i++) {
                columns.push(new PremiumColumn(i * colWidth));
            }
        } else if (columns.length > numColumns) {
            columns.length = numColumns;
        }

        columns.forEach(col => {
            if (col.y > canvas.height) {
                
                col.y = -20;
            }
        });
    }

    function updateGlowAlpha() {
        if (mouse.active) {
            if (mouse.glowAlpha < 1) {
                mouse.glowAlpha += 0.08;
                if (mouse.glowAlpha > 1) mouse.glowAlpha = 1;
            }
        } else {
            if (mouse.glowAlpha > 0) {
                mouse.glowAlpha -= 0.04;
                if (mouse.glowAlpha < 0) mouse.glowAlpha = 0;
            }
        }
    }

    function drawVolumetricGlow() {
        if (mouse.glowAlpha <= 0 || mouse.x === null || mouse.y === null) return;

        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, revealRadius);
        glow.addColorStop(0, `rgba(255, 255, 255, ${0.02 * mouse.glowAlpha})`);
        glow.addColorStop(0.5, `rgba(255, 255, 255, ${0.006 * mouse.glowAlpha})`);
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, revealRadius, 0, Math.PI * 2);
        ctx.fill();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        updateGlowAlpha();
        drawVolumetricGlow();
        columns.forEach(col => {
            col.update();
            col.draw();
        });
        requestAnimationFrame(animate);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();