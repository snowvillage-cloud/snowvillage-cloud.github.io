document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    if (document.getElementById('event-grid')) {
        loadEvents();
    }
});

// --- ハンバーガーメニュー制御 ---
const initNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) { link.style.animation = ''; } 
            else { link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`; }
        });
        burger.classList.toggle('toggle');
    });
};

// --- スクロールフェードイン制御 ---
const initScrollReveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('active'); }
        });
    }, { threshold: 0.1 });
    reveals.forEach(reveal => { observer.observe(reveal); });
};

// --- イベントデータ動的生成 ---
const loadEvents = () => {
    const eventGrid = document.getElementById('event-grid');

    const eventsData = [
        {
            image: '../images/events/event_1.jpg', // events/index.html から見た相対パス
            title: '第1回 Snowflake入門 & LT大会',
            date: '2026.04.15 (水)',
            tags: ['初心者歓迎', 'Zoom', 'LT募集'],
            desc: '記念すべき第1回！基礎セッションとユーザーによるLT(ライトニングトーク)を行います。'
        },
        {
            image: '../images/events/event_2.jpg',
            title: 'Data Engineering Deep Dive',
            date: '2026.05.20 (水)',
            tags: ['中級者向け', 'Tech', 'オフライン'],
            desc: 'Dynamic TablesやSnowparkを使った高度なデータパイプライン構築について学びます。'
        },
        {
            image: '../images/events/event_3.jpg',
            title: 'Snowflake Summer Festival 2026',
            date: '2026.07.10 (金)',
            tags: ['大型イベント', '全ユーザー向け', '都内'],
            desc: '夏の大感謝祭！特別ゲストを招いた基調講演と、複数の分科会、懇親会を開催します。'
        }
    ];

    eventsData.forEach((event, index) => {
        const card = document.createElement('div');
        card.className = 'card reveal event-card';
        card.style.transitionDelay = `${index * 0.1}s`; 

        const tagsHtml = event.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
            <div class="event-image-container">
                <img src="${event.image}" alt="${event.title}" class="event-photo">
            </div>
            <div class="event-content">
                <div class="event-date">${event.date}</div>
                <h3>${event.title}</h3>
                <div class="tags">${tagsHtml}</div>
                <p>${event.desc}</p>
                <a href="#" class="btn-text">詳細・参加申込 →</a>
            </div>
        `;
        eventGrid.appendChild(card);
    });

    addEventStyles();
};

// --- イベントカード専用レイアウト調整 ---
const addEventStyles = () => {
    if (!document.getElementById('event-styles')) {
        const style = document.createElement('style');
        style.id = 'event-styles';
        style.innerHTML = `
            .event-card { padding: 0; overflow: hidden; display: flex; flex-direction: column; }
            .event-content { padding: 30px; flex-grow: 1; display: flex; flex-direction: column; }
            .event-date { color: var(--primary); font-weight: bold; margin-bottom: 10px; font-size: 1.1rem; }
            .tags { margin-bottom: 20px; display: flex; gap: 10px; flex-wrap: wrap; }
            .tag { background-color: var(--acc-blue); color: var(--secondary); padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500; }
            .btn-text { color: var(--primary); text-decoration: none; font-weight: 600; transition: var(--transition); display: inline-block; margin-top: auto; padding-top: 15px;}
            .btn-text:hover { color: var(--secondary); transform: translateX(5px); }
        `;
        document.head.appendChild(style);
    }
};

// --- 🌟 規約同意チェックボックスの制御---
document.addEventListener('DOMContentLoaded', () => {
    const agreeCheckbox = document.getElementById('agree-checkbox');
    const slackJoinBtn = document.getElementById('slack-join-btn');

    if (agreeCheckbox && slackJoinBtn) {
        agreeCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                // チェックが入ったら disabled クラスを外す
                slackJoinBtn.classList.remove('disabled');
            } else {
                // チェックが外れたら disabled クラスをつける
                slackJoinBtn.classList.add('disabled');
            }
        });
    }
});

// --- 🌟 共通ヘッダーの生成 ---
const renderHeader = (pathToRoot, activeMenu) => {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;

    headerContainer.innerHTML = `
    <header>
        <div class="container nav-container">
            <a href="${pathToRoot}/index.html" class="logo">Snow<span>Village</span></a>
            <ul class="nav-links">
                <li><a href="${pathToRoot}/index.html" class="${activeMenu === 'home' ? 'active' : ''}">ホーム</a></li>
                <li><a href="${pathToRoot}/guide/" class="${activeMenu === 'guide' ? 'active' : ''}">歩き方</a></li> <li><a href="${pathToRoot}/about/" class="${activeMenu === 'about' ? 'active' : ''}">運営について</a></li>
                <li><a href="${pathToRoot}/events/" class="${activeMenu === 'events' ? 'active' : ''}">イベント</a></li>
                <li><a href="${pathToRoot}/calendar/" class="${activeMenu === 'calendar' ? 'active' : ''}">カレンダー</a></li>
                <li><a href="${pathToRoot}/join/" class="btn ${activeMenu === 'join' ? 'active' : ''}">Slackに参加</a></li>
            </ul>
            <div class="burger">
                <div class="line1"></div><div class="line2"></div><div class="line3"></div>
            </div>
        </div>
    </header>
    `;
    
    // ヘッダーのHTMLが画面に作られた後に、ハンバーガーメニューの動きを紐付ける
    initNav();
};

// --- 🌟 共通フッターの生成---
const renderFooter = () => {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
    <footer>
        <div class="container">
            <p>&copy; 2026 Japan Snowflake User Group SnowVillage.</p>
        </div>
    </footer>
    `;
};