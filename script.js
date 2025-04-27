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

        for (let i = 0; i < 150; i++) {
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

    gsap.from('.monarch-card', {
        duration: 1.5,
        scale: 0.8,
        opacity: 0,
        ease: "power4.out"
    });
});


// 增强版触控处理
let touchY = 0;
const SCROLL_THRESHOLD = 30;

document.addEventListener('touchstart', e => {
    touchY = e.touches[0].clientY;
});

document.addEventListener('touchmove', e => {
    const deltaY = e.touches[0].clientY - touchY;
    if (Math.abs(deltaY) > SCROLL_THRESHOLD) {
        e.preventDefault();
    }
}, { passive: false });

// 滚动边界检测
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 30;
    document.body.classList.toggle('scrolled', scrolled);

    // 移动端弹性边界
    if (window.innerWidth <= 768 && window.scrollY < 0) {
        window.scrollTo(0, 0);
    }
});

// 视口重置
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        document.querySelector('.monarch-card').style.transform = '';
    }
});
