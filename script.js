/* style.css */
:root {
    --void-core: #1a0832;
    --neon-purple: #bc13fe;
    --hologram-cyan: #e90ff1;
    --obsidian: #050505;
    --kafka-pink: #d94d9b;
    --sova-blue: #87ceeb;
}

/* 粒子背景 */
#voidParticles {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}

body {
    background: radial-gradient(ellipse at bottom, var(--void-core) 0%, var(--obsidian) 100%);
    color: var(--hologram-cyan);
    font-family: 'Oxanium', sans-serif;
    min-height: 200vh;
    margin: 0;
    overflow-x: hidden;
}

/* 主卡片系统 */
.monarch-card {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70vh;
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
}

.card-shell {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}

.card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: linear-gradient(45deg,
            rgba(42, 11, 77, 0.9) 0%,
            rgba(26, 8, 50, 0.95) 100%);
    border: 2px solid var(--neon-purple);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 0 50px rgba(188, 19, 254, 0.3);
}

/* 大卡片布局 */
.big-card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.header-section {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 1.5rem;
}

.avatar-pulse {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid var(--neon-purple);
    box-shadow: 0 0 30px var(--neon-purple);
    object-fit: cover;
    animation: avatar-pulse 2s infinite;
}

@keyframes avatar-pulse {
    0% {
        box-shadow: 0 0 10px var(--neon-purple);
    }

    50% {
        box-shadow: 0 0 30px var(--neon-purple);
    }

    100% {
        box-shadow: 0 0 10px var(--neon-purple);
    }
}

.title-void {
    font-size: 3.5rem;
    text-shadow: 0 0 20px var(--neon-purple);
    margin: 0;
}

.poem-container {
    font-size: 1.5rem;
    flex-grow: 1;
    padding: 2rem 0;
    border-top: 1px solid var(--neon-purple);
    border-bottom: 1px solid var(--neon-purple);
    line-height: 1.8;
}

.kafka-quote {
    position: absolute;
    top: 27rem;
    right: 2rem;
    color: var(--kafka-pink);
    font-size: 2rem;
    text-shadow: 0 0 10px var(--kafka-pink);
    text-align: right;
    padding-right: 1rem;
    border-right: 3px solid var(--neon-purple);
    color: var(--kafka-pink);
    text-shadow: 0 0 10px var(--kafka-pink);
    line-height: 2;

}

/* 滑動提示 */
.scroll-prompt {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    position: relative;
    left: 90%;
}

.scroll-text {
    font-size: 1.25rem;
    color: var(--hologram-cyan);
}

.arrow-down {
    display: inline-block;
    width: 10px;
    height: 10px;
    border: solid var(--hologram-cyan);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    animation: arrow-down 1s infinite;
}

@keyframes arrow-down {
    0% {
        transform: rotate(45deg) translate(0, 0);
    }

    50% {
        transform: rotate(45deg) translate(5px, 5px);
    }

    100% {
        transform: rotate(45deg) translate(0, 0);
    }
}


.links {
    display: flex;
    gap: 30px;
    background: rgba(248, 98, 241, 0.1);
    padding: 20px 40px;
    border-radius: 30px;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin: -100px auto 10PX;
    width: fit-content;
}

.links div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.links img {
    width: 30px;
    height: 30px;
    padding: 5px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
}

.id-text {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.75em;
    margin-top: 3px;
}

/* 小卡片布局 */
.small-card-content {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.pr {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid var(--neon-purple);
    box-shadow: 0 0 30px var(--neon-purple);
    object-fit: cover;
    animation: avatar-pulse 2s infinite;
    margin-top: -50px;
}

.title-void2 {
    font-size: 2.5rem;
    text-shadow: 0 0 20px var(--neon-purple);
    margin: 5px;
}

.small-kafka-quote {
    margin-top: 1rem;
    font-size: rem;
    color: var(--kafka-pink);
    text-shadow: 0 0 10px var(--kafka-pink);
    text-align: center;
}


body.scrolled .monarch-card {
    width: 300px;
    height: 400px;
    top: auto;
    bottom: 5%;
    right: 5%;
    left: auto;
    transform: rotateZ(-5deg);
}

body.scrolled .big-card-content {
    display: none;
}

body.scrolled .small-card-content {
    display: flex;
}

body.scrolled .avatar-pulse {
    width: 120px;
    height: 120px;
}

/* 作品区块 */
.works-section {
    position: absolute;
    top: calc(100vh + 5rem);
    padding: 5rem;
    width: 100%;
    opacity: 0;
    transition: opacity 0.5s 0.3s;
    z-index: 999;
}

body.scrolled .works-section {
    opacity: 1;
}

.work-card {
    position: relative;
    background: rgba(26, 8, 50, 0.9);
    border: 2px solid;
    border-radius: 10px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    max-width: 600px;
    cursor: pointer;
    transition: all 0.3s;
}

.work-card:nth-child(1) {
    border-color: #6c1d45;
    background: linear-gradient(45deg,
            rgba(108, 29, 69, 0.2) 0%,
            rgba(76, 21, 50, 0.4) 100%);
}

.work-card:nth-child(1) h3 {
    color: var(--kafka-pink);
    text-shadow: 0 0 15px var(--kafka-pink);
}

.work-card:nth-child(2) {
    border-color: var(--sova-blue);
    background: linear-gradient(45deg,
            rgba(135, 206, 235, 0.1) 0%,
            rgba(70, 130, 180, 0.3) 100%);
}

.work-card:nth-child(2) h3 {
    color: var(--sova-blue);
    text-shadow: 0 0 15px var(--sova-blue);
}

.hologram-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: var(--hologram-cyan);
    box-shadow: 0 0 10px var(--hologram-cyan);
}

.work-card:hover {
    transform: translateX(20px);
    box-shadow: 0 0 30px var(--hologram-cyan);
}

.copyright {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
}
/* ======================== */
/* Mobile Styles (<= 768px) */
/* ======================== */
@media (max-width: 768px) {

    body {
        min-height: 150vh; /* 調整手機版最小高度 */
    }

    /* --- 手機版初始大卡片樣式 --- */
    .monarch-card {
        width: 90%; /* 手機版卡片寬度增加 */
        height: 80vh; /* 手機版卡片高度調整 */
        max-height: 600px; /* 限制最大高度 */
        top: 50%;
        left: 50%;
        bottom: auto;
        right: auto;
        transform: translate(-50%, -50%) rotateZ(0deg); /* 取消桌面版的旋轉 */
        /* 確保 transition 在這裡也定義或繼承，以便滾動縮放時有動畫 */
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); /* 調整動畫時間 */
    }

    .card-face {
        padding: 1.5rem; /* 調整手機版內距 */
    }

    .big-card-content {
        display: flex; /* 確保是 flex 排版 */
        flex-direction: column; /* 垂直排列 */
        align-items: center; /* 水平置中 */
        text-align: center; /* 文字置中 */
        gap: 1rem; /* 調整元件間距 */
        height: 100%; /* 確保內容填滿卡片高度 */
        overflow-y: auto; /* 如果內容過多，允許內部滾動 */
    }

    .header-section {
        flex-direction: column; /* 頭像和名字垂直排列 */
        gap: 0.5rem; /* 縮小頭像和名字間距 */
        margin-bottom: 0; /* 移除底部 margin */
        width: 100%; /* 確保寬度 */
    }

    .avatar-pulse {
        width: 120px; /* 縮小頭像 */
        height: 120px;
    }

    .title-void {
        font-size: 2.5rem; /* 縮小標題字體 */
    }

    .links {
        /* 將 links 移到頭像和名字下方 */
        order: 1; /* 調整顯示順序 */
        margin: 0 auto; /* 置中 */
        padding: 10px 20px; /* 調整內距 */
        gap: 15px; /* 調整圖標間距 */
        width: auto; /* 寬度自動 */
        flex-shrink: 0; /* 防止被壓縮 */
    }

    .links img {
        width: 25px; /* 縮小圖標 */
        height: 25px;
    }

    .poem-container {
        /* 將短句放在 links 下方 */
        order: 2; /* 調整顯示順序 */
        font-size: 1.1rem; /* 調整詩句字體大小 */
        padding: 1rem 0; /* 調整上下內距 */
        border-top: none; /* 移除上下框線 */
        border-bottom: none;
        width: 100%; /* 確保寬度 */
        line-height: 1.6; /* 調整行高 */
         flex-shrink: 0; /* 防止被壓縮 */
    }

    .kafka-quote {
        /* 調整卡夫卡引言位置和樣式 */
        order: 3; /* 調整顯示順序 */
        position: static; /* 取消絕對定位 */
        font-size: 1.2rem; /* 調整字體大小 */
        text-align: center; /* 置中 */
        margin-top: 1rem; /* 增加上方間距 */
        padding: 0 1rem; /* 左右加點內距避免貼邊 */
        border: none; /* 移除邊框 */
        line-height: 1.5; /* 調整行高 */
        width: 100%; /* 確保寬度 */
         flex-shrink: 0; /* 防止被壓縮 */
    }

    .scroll-prompt {
        /* 移到最下面中間 */
        order: 4; /* 調整顯示順序 */
        position: static; /* 取消絕對定位 */
        margin-top: auto; /* 推到底部 */
        margin-bottom: 0.5rem; /* 增加底部間距 */
        left: auto; /* 取消 left 定位 */
        justify-content: center; /* 內部元件置中 */
        width: 100%; /* 確保寬度 */
         flex-shrink: 0; /* 防止被壓縮 */
    }

    .scroll-text {
        font-size: 1rem; /* 調整提示文字大小 */
    }

    /* --- 手機版滾動後的小卡片樣式 --- */
    body.scrolled .monarch-card {
        /* 右下角小卡片 */
        width: 180px;   /* 調整小卡片寬度 */
        height: 240px;  /* 調整小卡片高度 */
        bottom: 3%;     /* 調整底部距離 */
        right: 4%;      /* 調整右側距離 */
        left: auto;     /* 取消 left */
        top: auto;      /* 取消 top */
        transform: rotateZ(0deg); /* 取消旋轉效果 */
        z-index: 1001; /* 確保小卡片在作品之上 */
    }

    body.scrolled .big-card-content {
        display: none; /* 滾動後隱藏大卡片內容 */
    }

    body.scrolled .small-card-content {
        display: flex; /* 滾動後顯示小卡片內容 */
        padding: 1rem; /* 增加內距 */
        gap: 0.5rem; /* 調整間距 */
        text-align: center; /* 小卡片文字置中 */
    }

    /* 小卡片內的頭像 */
    .pr { /* 確保這個 class 名稱與 HTML 中的 img 標籤 class 一致 */
        width: 80px; /* 調整小卡片頭像大小 */
        height: 80px;
        margin-top: 0; /* 移除上方 margin */
        margin-bottom: 0.5rem; /* 增加下方間距 */
    }

    /* 小卡片內的標題 */
    .title-void2 {
        font-size: 1.2rem; /* 調整小卡片標題 */
        margin: 5px 0;
    }

    /* 小卡片內的引言 */
    .small-kafka-quote {
        font-size: 0.9rem; /* 調整小卡片引言 */
        margin-top: 0.5rem;
        line-height: 1.3; /* 調整行高 */
    }


    /* --- 手機版作品區塊樣式 --- */
    .works-section {
        /* 滾動後直接顯示按鈕 (作品區塊) */
        position: static; /* 手機版改為靜態定位，隨頁面滾動 */
        padding: 2rem 1rem; /* 調整手機版內距 */
        width: auto; /* 取消固定寬度 */
        margin-top: 2rem; /* 增加上方間距 */
        opacity: 0; /* 初始隱藏，由 scrolled 控制 */
        transition: opacity 0.5s ease-in-out; /* 添加過渡 */
        display: flex; /* 使用 flex 排版 */
        flex-direction: column; /* 垂直排列 */
        align-items: center; /* 置中 */
        z-index: 1; /* 降低層級，避免蓋住固定的小卡片 */
    }

    body.scrolled .works-section {
         opacity: 1; /* 滾動後顯示 */
    }

    .work-card {
        max-width: 90%; /* 調整作品卡片寬度 */
        margin-bottom: 1rem; /* 調整間距 */
        transform: none; /* 移除 hover 效果的位移 */
        box-shadow: none; /* 移除預設陰影 */
        border-width: 1px; /* 稍微細一點的邊框 */
    }

    .work-card:hover {
        transform: none; /* 取消 hover 位移 */
        box-shadow: 0 0 15px var(--hologram-cyan); /* 保留或調整 hover 光暈 */
    }

    /* 版權宣告 */
    .copyright {
        position: static; /* 手機版改為靜態定位 */
        margin-top: 2rem; /* 增加上方間距 */
        padding-bottom: 1rem; /* 增加底部內距 */
        font-size: 0.7rem; /* 調整字體大小 */
        text-align: center; /* 置中 */
        width: 100%;
    }
}
