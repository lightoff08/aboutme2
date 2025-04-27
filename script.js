// script.js
class VoidParticleSystem {
    constructor() {
        this.canvas = document.getElementById('voidParticles');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());

        // 調整粒子數量 - 在手機上生成較少的粒子
        const particleCount = window.innerWidth < 768 ? 80 : 150;
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2,
                speed: Math.random() * 0.5 + 0.1,
                color: `hsl(${Math.random() * 60 + 260}, 70%, 50%)`
            });
        }
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.ctx.fillStyle = 'rgba(5,5,5,0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            particle.y -= particle.speed;
            if (particle.y < 0) {
                particle.y = this.canvas.height;
                particle.x = Math.random() * this.canvas.width;
            }
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();
        });
        requestAnimationFrame(() => this.animate());
    }
}

// 滚动逻辑
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    document.body.classList.toggle('scrolled', scrolled);
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    new VoidParticleSystem();

    // 根據設備尺寸調整動畫效果
    const isMobile = window.innerWidth < 768;
    
    gsap.from('.monarch-card', {
        duration: isMobile ? 1.2 : 1.5,
        scale: isMobile ? 0.9 : 0.8,
        opacity: 0,
        ease: "power4.out"
    });
});


