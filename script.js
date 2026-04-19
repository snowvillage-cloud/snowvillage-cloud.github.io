// --- 🌟 ページ読み込み完了時の処理を一元管理 ---
document.addEventListener("DOMContentLoaded", () => {
  // 🌟 追加：ヘッダーのスクロール連動エフェクト
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (header) {
      // 下に50px以上スクロールしたら 'scrolled' クラスを付与する
      header.classList.toggle("scrolled", window.scrollY > 50);
    }
  });
  // スクロールフェードイン制御の開始（各ページで描画されたカードも監視対象になる）
  initScrollReveal();

  // 3. 規約同意チェックボックスの制御 (joinページ用)
  const agreeCheckbox = document.getElementById("agree-checkbox");
  const slackJoinBtn = document.getElementById("slack-join-btn");

  if (agreeCheckbox && slackJoinBtn) {
    agreeCheckbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        slackJoinBtn.classList.remove("disabled");
      } else {
        slackJoinBtn.classList.add("disabled");
      }
    });
  }

  // ==========================================================================
  // 🌟 追加：スクロールプログレスバーの生成と制御
  // ==========================================================================
  // 1. バーの要素を動的に作成してbodyに追加
  const progressBar = document.createElement("div");
  progressBar.id = "scroll-indicator";
  document.body.appendChild(progressBar);

  // 2. スクロール量に応じて幅を計算する関数
  window.addEventListener("scroll", () => {
    // 現在のスクロール位置
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // ページ全体の高さ - 表示領域の高さ = スクロール可能な総距離
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // 割合を計算（0〜100）
    const scrolled = (winScroll / height) * 100;

    // バーの幅に反映
    progressBar.style.width = scrolled + "%";
  });
});

// --- ハンバーガーメニュー制御 ---
const initNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  if (!burger || !nav) return; // ヘッダーがないページでのエラー防止

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

// --- スクロールフェードイン制御 ---
const initScrollReveal = () => {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 },
  );

  reveals.forEach((reveal) => {
    observer.observe(reveal);
  });
};

// --- 🌟 ナビゲーション定義（一元管理） ---
const NAV_ITEMS = [
  { key: "guide", label: "歩き方", path: "/guide/" },
  { key: "about", label: "運営", path: "/about/" },
  { key: "events", label: "イベント", path: "/events/" },
  { key: "calendar", label: "カレンダー", path: "/calendar/" },
  { key: "contents", label: "コンテンツ", path: "/contents/" },
  { key: "links", label: "リンク集", path: "/links/" },
];

// --- 🌟 ページタイトル一元設定 ---
const PAGE_TITLES = {
  home: "SnowVillage",
  guide: "歩き方",
  about: "運営",
  mayors: "Mayors",
  neighbors: "Neighbors",
  departments: "部門紹介",
  alumni: "歴代の貢献者",
  events: "イベント",
  calendar: "カレンダー",
  contents: "コンテンツ",
  links: "リンク集",
  join: "Slackに参加",
  news: "お知らせ",
};

const setPageTitle = (menuKey) => {
  const name = PAGE_TITLES[menuKey];
  document.title = !name || menuKey === "home" ? "SnowVillage" : `${name} - SnowVillage`;
};

// --- 🌟 favicon を全ページ共通で注入 ---
const injectFavicon = (pathToRoot) => {
  if (document.querySelector("link[rel='icon']")) return;
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = `${pathToRoot}/images/brand/favicon.png`;
  document.head.appendChild(link);
};

// --- 🌟 共通ヘッダーの生成 ---
const renderHeader = (pathToRoot, activeMenu) => {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  injectFavicon(pathToRoot);
  setPageTitle(activeMenu);

  const logoSrc = `${pathToRoot}/images/brand/logo-white.png`;
  const logoHtml =
    activeMenu === "home"
      ? `<a href="${pathToRoot}/" class="logo logo-home" aria-label="SnowVillage">
           <img src="${logoSrc}" alt="" class="logo-mark" />
           <span class="logo-text">SnowVillage</span>
         </a>`
      : `<a href="${pathToRoot}/" class="logo logo-icon" aria-label="SnowVillage">
           <img src="${logoSrc}" alt="SnowVillage" class="logo-mark" />
         </a>`;

  // about 配下のサブページも「運営」タブをアクティブ扱い
  const isActive = (key) => {
    if (key === "about") return ["about", "mayors", "neighbors", "departments", "alumni"].includes(activeMenu);
    return key === activeMenu;
  };

  const navItemsHtml = NAV_ITEMS.map(
    (item) => `<li><a href="${pathToRoot}${item.path}" class="${isActive(item.key) ? "active" : ""}">${item.label}</a></li>`
  ).join("");

  headerContainer.innerHTML = `
    <header>
        <div class="container nav-container">
            ${logoHtml}
            <ul class="nav-links">
                ${navItemsHtml}
                <li><a href="${pathToRoot}/join/" class="btn ${activeMenu === "join" ? "active" : ""}">Slackに参加</a></li>
                <li id="nav-slider"></li>
            </ul>
            <div class="burger">
                <div class="line1"></div><div class="line2"></div><div class="line3"></div>
            </div>
        </div>
    </header>
    `;

  initNav();
  initNavSlider();
};

// --- 🌟 スライディング・ナビゲーションの制御 ---
const initNavSlider = () => {
  const navLinks = document.querySelector(".nav-links");
  const slider = document.getElementById("nav-slider");
  const links = document.querySelectorAll(".nav-links a:not(.btn)");

  if (!navLinks || !slider) return;

  const moveSlider = (element) => {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const parentRect = navLinks.getBoundingClientRect();
    slider.style.left = `${rect.left - parentRect.left}px`;
    slider.style.width = `${rect.width}px`;
    slider.style.opacity = "1";
  };

  const activeLink = document.querySelector(".nav-links a.active");
  if (activeLink) {
    setTimeout(() => moveSlider(activeLink), 150);
  }

  links.forEach((link) => {
    link.addEventListener("mouseenter", (e) => moveSlider(e.target));
  });

  navLinks.addEventListener("mouseleave", () => {
    const currentActive = document.querySelector(".nav-links a.active");
    if (currentActive) moveSlider(currentActive);
  });
};

// --- 🌟 共通フッターの生成 ---
const renderFooter = () => {
  const footerContainer = document.getElementById("footer-container");
  if (!footerContainer) return;

  // 現在見ているページのURLを自動取得してシェア用にエンコード
  const currentUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("SnowVillage 公式サイトをチェック！");
  const hashtag = "SnowVillage";

  // 🌟 X (旧Twitter) 用のシェアURL生成
  const xShareUrl = `https://x.com/intent/tweet?text=${shareText}&url=${currentUrl}&hashtags=${hashtag}`;

  // 🌟 LinkedIn 用のシェアURL生成（直接投稿画面を開くパラメータ）
  const linkedInShareUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${shareText}%0A%23${hashtag}%0A${currentUrl}`;

  footerContainer.innerHTML = `
    <style>
        /* フッター専用のSNSアイコンホバーエフェクト */
        .footer-sns-link {
            color: var(--text-light);
            transition: transform 0.3s ease, color 0.3s ease;
            display: inline-flex;
            align-items: center;
        }
        .footer-sns-link:hover {
            transform: translateY(-3px);
        }
        .footer-sns-link.x-icon:hover {
            color: #ffffff; /* Xは白に光る */
        }
        .footer-sns-link.li-icon:hover {
            color: #0a66c2; /* LinkedInは公式ブルーに光る */
        }
    </style>
    <footer style="padding: 40px 0; background-color: var(--secondary); border-top: 1px solid rgba(255,255,255,0.1);">
        <div class="container" style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
            
            <div style="display: flex; align-items: center; gap: 20px;">
                <span style="color: var(--text-light); font-size: 0.9rem; font-weight: 600; letter-spacing: 1px;">SHARE ON</span>
                
                <a href="${xShareUrl}" target="_blank" rel="noopener noreferrer" class="footer-sns-link x-icon" aria-label="Share on X">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </a>
                
                <a href="${linkedInShareUrl}" target="_blank" rel="noopener noreferrer" class="footer-sns-link li-icon" aria-label="Share on LinkedIn">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
                </a>
            </div>

            <p style="color: var(--text-light); font-size: 0.85rem; margin: 0;">&copy; 2026 SnowVillage</p>
        </div>
    </footer>
    `;
};

// --- 🌟 ニュース生成 ---
function loadLatestNews() {
  const newsList = document.getElementById("news-ticker-list");
  const archiveLink = document.getElementById("news-archive-link");

  if (!newsList || typeof newsData === "undefined" || newsData.length === 0) return;

  // 最新の5件だけを取得
  const latestFive = newsData.slice(0, 5);

  // 🌟 修正：mapにindex引数を追加
  newsList.innerHTML = latestFive
    .map(
      (item, index) => `
        <li class="news-item">
            <a href="${item.link}" class="news-link" ${item.isExternal ? 'target="_blank" rel="noopener noreferrer"' : ""}>
                <span class="news-date">${item.date}</span>
                <span class="news-badge-slot">${index === 0 ? '<span class="news-badge-new">NEW</span>' : ""}</span>
                <span class="news-text">${item.text}</span>
                <span class="news-arrow">→</span>
            </a>
        </li>
    `,
    )
    .join("");

  // 6件以上データがあれば、アーカイブへのリンクを表示
  if (newsData.length > 5 && archiveLink) {
    archiveLink.style.display = "block";
  }
}

// --- 🎮 イースターエッグ：コナミコマンド監視 ---
// コマンド: ↑ ↑ ↓ ↓ ← → ← → B A
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
let konamiPosition = 0;

document.addEventListener("keydown", (e) => {
  // 入力されたキーがコマンドの現在の位置と一致するか
  if (e.code === konamiCode[konamiPosition]) {
    konamiPosition++;
    // 最後まで正しく入力されたら
    if (konamiPosition === konamiCode.length) {
      // 🎉 エフェクト＆隠しページへ遷移
      alert("❄️ Easter Egg Unlocked! ❄️\nWelcome to SnowTris!");
      // ルートからの絶対パスか、相対パスで /secret/ へ遷移
      // (ローカル環境・本番環境に合わせて適宜調整してください)
      const basePath = window.location.pathname.includes("/SnowVillage") ? "/SnowVillage" : "";
      window.location.href = `${basePath}/secret/`;
      konamiPosition = 0; // リセット
    }
  } else {
    // 間違えたら最初からやり直し
    konamiPosition = 0;
  }
});
