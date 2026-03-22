// --- 🌟 ページ読み込み完了時の処理を一元管理 ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. イベントカードの動的生成（※必ずフェードイン監視の「前」に行うこと！）
    if (document.getElementById('event-grid')) {
        loadEvents();
    }

    // 2. スクロールフェードイン制御の開始（生成されたカードもここで監視対象になる）
    initScrollReveal();

    // 3. 規約同意チェックボックスの制御 (joinページ用)
    const agreeCheckbox = document.getElementById('agree-checkbox');
    const slackJoinBtn = document.getElementById('slack-join-btn');

    if (agreeCheckbox && slackJoinBtn) {
        agreeCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                slackJoinBtn.classList.remove('disabled');
            } else {
                slackJoinBtn.classList.add('disabled');
            }
        });
    }
});

// --- ハンバーガーメニュー制御 ---
const initNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (!burger || !nav) return; // ヘッダーがないページでのエラー防止

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) { 
                link.style.animation = ''; 
            } else { 
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`; 
            }
        });
        burger.classList.toggle('toggle');
    });
};

// --- スクロールフェードイン制御 ---
const initScrollReveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { 
                entry.target.classList.add('active'); 
            }
        });
    }, { threshold: 0.1 });
    
    reveals.forEach(reveal => { observer.observe(reveal); });
};

// --- イベントデータ動的生成 ---
const loadEvents = () => {
    const eventGrid = document.getElementById('event-grid');

    const eventsData = [
        {
            image: '../images/events/sample.png', // events/index.html から見た相対パス
            title: 'Snowflake World Tour Tokyo',
            date: '2026.XX.XX (X)',
            tags: ['オンライン', 'XXXXX', 'XXXX'],
            desc: 'XXXXXXXX'
        },
        {
            image: '../images/events/sample.png',
            title: 'XXXXXXX',
            date: '2026.05.20 (水)',
            tags: ['Tech', 'XXXX'],
            desc: 'aaaaa'
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
                <a href="https://techplay.jp/community_group/snowflake_users" target="_blank" rel="noopener noreferrer" class="btn-text">TECH PLAY で詳細を見る →</a>
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
            .event-image-container { width: 100%; height: 200px; overflow: hidden; }
            .event-photo { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
            .event-card:hover .event-photo { transform: scale(1.1); }
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

// --- 🌟 共通ヘッダーの生成 ---
const renderHeader = (pathToRoot, activeMenu) => {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;

    // リンク先を `${pathToRoot}/` に統一
    const logoHtml = activeMenu === 'home' 
        ? `<a href="${pathToRoot}/" class="logo" style="font-size: 1.2rem;">Japan Snowflake User Group <span>SnowVillage</span></a>`
        : `<a href="${pathToRoot}/" class="logo">Snow<span>Village</span></a>`;

    headerContainer.innerHTML = `
    <header>
        <div class="container nav-container">
            ${logoHtml}
            <ul class="nav-links">
                <li><a href="${pathToRoot}/" class="${activeMenu === 'home' ? 'active' : ''}">ホーム</a></li>
                <li><a href="${pathToRoot}/guide/" class="${activeMenu === 'guide' ? 'active' : ''}">歩き方</a></li>
                <li><a href="${pathToRoot}/about/" class="${activeMenu === 'about' ? 'active' : ''}">運営について</a></li>
                <li><a href="${pathToRoot}/events/" class="${activeMenu === 'events' ? 'active' : ''}">イベント</a></li>
                <li><a href="${pathToRoot}/calendar/" class="${activeMenu === 'calendar' ? 'active' : ''}">カレンダー</a></li>
                
                <li><a href="${pathToRoot}/links/" class="${activeMenu === 'links' ? 'active' : ''}">リンク集</a></li>
                
                <li><a href="${pathToRoot}/join/" class="btn ${activeMenu === 'join' ? 'active' : ''}">Slackに参加</a></li>
            </ul>
            <div class="burger">
                <div class="line1"></div><div class="line2"></div><div class="line3"></div>
            </div>
        </div>
    </header>
    `;
    
    initNav();
};

// --- 🌟 共通フッターの生成 ---
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

// --- 🌟 ニュース生成 ---
function loadLatestNews() {
    const newsList = document.getElementById('news-ticker-list');
    const archiveLink = document.getElementById('news-archive-link');
    
    if (!newsList || typeof newsData === 'undefined' || newsData.length === 0) return;

    // 最新の5件だけを取得
    const latestFive = newsData.slice(0, 5);

    // 🌟 修正：mapにindex引数を追加
    newsList.innerHTML = latestFive.map((item, index) => `
        <li class="news-item">
            <a href="${item.link}" class="news-link" ${item.isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                ${index === 0 ? '<span class="latest-pulse" aria-hidden="true"></span>' : ''}
                
                <span class="news-date">${item.date}</span>
                <span class="news-text">${item.text}</span>
                <span class="news-arrow">→</span>
            </a>
        </li>
    `).join('');

    // 6件以上データがあれば、アーカイブへのリンクを表示
    if (newsData.length > 5 && archiveLink) {
        archiveLink.style.display = 'block';
    }
}