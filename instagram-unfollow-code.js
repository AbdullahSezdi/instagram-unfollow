(function() {
  // Takipten çıkarılacak kullanıcı listesi
  var unfollowList = [
    "gokhanunver","demetakalin","oguzhankoctv","muratsoner","atademirerofficial","acunilicali","hayrettin","gulsebir","oguzalperoktem","halitergencresmi","berguzarkorel","alperenduymaz","aycaaysinturan","ozgetorer",    "danlabilic","hasancankayahck","muratboz","mahsunkirmizigulofficial",
    "talha_sezdi","prof_demirtas","haluklevent","okanbayulgen","teoman","25resul","25yahya","25recoo","yilmaz.erdogan","berfuyenenler","eseryenenler","evcenf","ebrarkarakurt18","kadir_ezildi","nusr_et","m10_official","demetozdemir","esraezmecii","karsudonmez","busezeynep","sedasayan",   
    "dogudemirkol","barisokanbelovacikli","hilalaltinbilek","ceyhancihangir","keremakturkoglu","enginaltandzytn",
    "cakal.95","alperrende","ozanakbaba","oktaykaynarca","brkokty23","simaybarlass","ozgeyagizz","halitozgursari",
    "hazalkaya","ilaydalisan","gokce.bhdr","ismailyk","gupseo","belginnsimsek","atakanozyurt","bilalhanci","fatihyasinim","barisozcan","besiktas","fenerbahce","galatasaray","ultraslan","tugkangonultas",
    "heyysila","cmylmz","naletbebee","ebo","gulben123","enesbatur","neslihanatagul","hulyavsr","iynemliarasbulut","ibrahimbuyukak","rimelaskina","yasemoz88","seymasubasi","normenderonline","aymirakk","ezgifindik","handemiyy","burakozcivit","aykutelmas","cemozkook","sukruozyildiz"
  ];

  // Tema ve renkler - Instagram'ın 2023 tasarım diline uygun
  const theme = {
    background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
    cardBackground: '#262626',
    primary: '#0095f6',
    secondary: '#8e8e8e',
    danger: '#ed4956',
    success: '#58c322',
    warning: '#fdcb5c',
    text: '#ffffff',
    textSecondary: '#a8a8a8',
    border: 'rgba(255, 255, 255, 0.1)',
    shadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
  };

  // Yazı tipleri
  const typography = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    heading: {
      fontSize: '24px',
      fontWeight: '600',
      lineHeight: '1.2'
    },
    subheading: {
      fontSize: '18px',
      fontWeight: '600',
      lineHeight: '1.4'
    },
    body: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '1.5'
    },
    small: {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '1.4'
    }
  };

  // Animasyonlar
  const animations = {
    transition: 'all 0.3s ease',
    hover: 'transform 0.2s ease',
    fadeIn: 'fadeIn 0.3s ease',
    pulse: 'pulse 1.5s infinite'
  };

  // Stil oluşturma
  function createStyles() {
    // Mevcut stil elementini kontrol et ve kaldır
    const existingStyle = document.getElementById('ig-unfollow-tool-styles');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    const style = document.createElement('style');
    style.id = 'ig-unfollow-tool-styles';
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes pulse {
        0% { opacity: 0.6; }
        50% { opacity: 1; }
        100% { opacity: 0.6; }
      }
      
      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }
      
      .ig-unfollow-tool * {
        box-sizing: border-box;
        font-family: ${typography.fontFamily};
        margin: 0;
        padding: 0;
      }
      
      .ig-unfollow-tool {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${theme.background};
        color: ${theme.text};
        z-index: 999999;
        display: flex;
        flex-direction: column;
        padding: 24px;
        overflow: hidden;
        animation: ${animations.fadeIn};
        pointer-events: auto;
      }
      
      .ig-unfollow-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        margin-bottom: 24px;
        border-bottom: 1px solid ${theme.border};
      }
      
      .ig-unfollow-title {
        font-size: ${typography.heading.fontSize};
        font-weight: ${typography.heading.fontWeight};
        color: ${theme.text};
        display: flex;
        align-items: center;
        gap: 12px;
      }
      
      .ig-unfollow-title-icon {
        width: 32px;
        height: 32px;
      }
      
      .ig-unfollow-close {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1);
        color: ${theme.text};
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 20px;
        transition: ${animations.transition};
      }
      
      .ig-unfollow-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transform: scale(1.05);
      }
      
      .ig-unfollow-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-bottom: 24px;
      }
      
      .ig-unfollow-stat {
        background-color: ${theme.cardBackground};
        border-radius: 12px;
        padding: 16px;
        text-align: center;
        box-shadow: ${theme.shadow};
        transition: ${animations.transition};
      }
      
      .ig-unfollow-stat:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
      }
      
      .ig-unfollow-stat-value {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 8px;
        color: ${theme.text};
      }
      
      .ig-unfollow-stat-label {
        font-size: ${typography.small.fontSize};
        color: ${theme.textSecondary};
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      .ig-unfollow-content {
        display: flex;
        flex: 1;
        gap: 24px;
        overflow: hidden;
      }
      
      .ig-unfollow-user-list {
        flex: 2;
        display: flex;
        flex-direction: column;
        background-color: ${theme.cardBackground};
        border-radius: 12px;
        overflow: hidden;
        box-shadow: ${theme.shadow};
      }
      
      .ig-unfollow-search {
        padding: 16px;
        border-bottom: 1px solid ${theme.border};
        position: relative;
      }
      
      .ig-unfollow-search-icon {
        position: absolute;
        left: 28px;
        top: 50%;
        transform: translateY(-50%);
        color: ${theme.textSecondary};
      }
      
      .ig-unfollow-search-input {
        width: 100%;
        padding: 12px 16px 12px 40px;
        border: 1px solid ${theme.border};
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.1);
        color: ${theme.text};
        font-size: ${typography.body.fontSize};
        transition: ${animations.transition};
      }
      
      .ig-unfollow-search-input:focus {
        outline: none;
        border-color: ${theme.primary};
        background-color: rgba(255, 255, 255, 0.15);
      }
      
      .ig-unfollow-search-input::placeholder {
        color: ${theme.textSecondary};
      }
      
      .ig-unfollow-users {
        flex: 1;
        overflow-y: auto;
        padding: 16px;
      }
      
      .ig-unfollow-user-card {
        display: flex;
        align-items: center;
        padding: 16px;
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        margin-bottom: 12px;
        transition: ${animations.transition};
        border: 1px solid transparent;
      }
      
      .ig-unfollow-user-card:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-color: ${theme.border};
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }
      
      .ig-unfollow-user-checkbox {
        appearance: none;
        width: 22px;
        height: 22px;
        border-radius: 6px;
        border: 2px solid ${theme.secondary};
        margin-right: 16px;
        cursor: pointer;
        position: relative;
        transition: ${animations.transition};
      }
      
      .ig-unfollow-user-checkbox:checked {
        background-color: ${theme.primary};
        border-color: ${theme.primary};
      }
      
      .ig-unfollow-user-checkbox:checked::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 7px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
      
      .ig-unfollow-user-avatar-container {
        position: relative;
        margin-right: 16px;
      }
      
      .ig-unfollow-user-avatar {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid ${theme.cardBackground};
        transition: ${animations.transition};
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      
      .ig-unfollow-user-card:hover .ig-unfollow-user-avatar {
        border-color: ${theme.primary};
      }
      
      .ig-unfollow-user-info {
        flex: 1;
        overflow: hidden;
      }
      
      .ig-unfollow-username {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${theme.text};
      }
      
      .ig-unfollow-fullname {
        font-size: ${typography.small.fontSize};
        color: ${theme.textSecondary};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .ig-unfollow-status {
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      
      .ig-unfollow-status-following {
        background-color: rgba(0, 149, 246, 0.2);
        color: ${theme.primary};
      }
      
      .ig-unfollow-status-not-following {
        background-color: rgba(255, 255, 255, 0.1);
        color: ${theme.textSecondary};
      }
      
      .ig-unfollow-status-unfollowed {
        background-color: rgba(237, 73, 86, 0.2);
        color: ${theme.danger};
      }
      
      .ig-unfollow-log {
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: ${theme.cardBackground};
        border-radius: 12px;
        overflow: hidden;
        box-shadow: ${theme.shadow};
      }
      
      .ig-unfollow-log-header {
        padding: 16px;
        border-bottom: 1px solid ${theme.border};
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .ig-unfollow-log-title {
        font-size: ${typography.subheading.fontSize};
        font-weight: ${typography.subheading.fontWeight};
        color: ${theme.text};
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .ig-unfollow-log-content {
        flex: 1;
        overflow-y: auto;
        padding: 16px;
      }
      
      .ig-unfollow-log-entry {
        margin-bottom: 12px;
        padding: 12px 16px;
        border-radius: 8px;
        font-size: 13px;
        line-height: 1.5;
        border-left: 4px solid transparent;
        animation: fadeIn 0.3s ease;
      }
      
      .ig-unfollow-log-info {
        background-color: rgba(255, 255, 255, 0.05);
        border-left-color: ${theme.secondary};
      }
      
      .ig-unfollow-log-success {
        background-color: rgba(88, 195, 34, 0.1);
        border-left-color: ${theme.success};
      }
      
      .ig-unfollow-log-error {
        background-color: rgba(237, 73, 86, 0.1);
        border-left-color: ${theme.danger};
      }
      
      .ig-unfollow-progress-container {
        margin-top: 24px;
        margin-bottom: 24px;
      }
      
      .ig-unfollow-progress-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
      }
      
      .ig-unfollow-progress-title {
        font-size: ${typography.small.fontSize};
        color: ${theme.textSecondary};
      }
      
      .ig-unfollow-progress-percentage {
        font-size: ${typography.small.fontSize};
        color: ${theme.primary};
        font-weight: 600;
      }
      
      .ig-unfollow-progress {
        height: 6px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        overflow: hidden;
      }
      
      .ig-unfollow-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, ${theme.primary} 0%, #00c6ff 100%);
        width: 0%;
        transition: width 0.5s ease;
        border-radius: 3px;
      }
      
      .ig-unfollow-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        gap: 16px;
      }
      
      .ig-unfollow-button {
        flex: 1;
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: ${animations.transition};
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      
      .ig-unfollow-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      
      .ig-unfollow-button-secondary {
        background-color: rgba(255, 255, 255, 0.1);
        color: ${theme.text};
      }
      
      .ig-unfollow-button-secondary:hover:not(:disabled) {
        background-color: rgba(255, 255, 255, 0.15);
        transform: translateY(-2px);
      }
      
      .ig-unfollow-button-primary {
        background-color: ${theme.primary};
        color: white;
      }
      
      .ig-unfollow-button-primary:hover:not(:disabled) {
        background-color: #0081d6;
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(0, 149, 246, 0.3);
      }
      
      .ig-unfollow-button-danger {
        background-color: ${theme.danger};
        color: white;
      }
      
      .ig-unfollow-button-danger:hover:not(:disabled) {
        background-color: #d63031;
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(237, 73, 86, 0.3);
      }
      
      /* Scrollbar styling */
      .ig-unfollow-tool *::-webkit-scrollbar {
        width: 8px;
      }
      
      .ig-unfollow-tool *::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
      }
      
      .ig-unfollow-tool *::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
      }
      
      .ig-unfollow-tool *::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
      
      /* Loading animation */
      .ig-unfollow-loading {
        animation: ${animations.pulse};
      }
      
      .ig-unfollow-shimmer {
        background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%);
        background-size: 1000px 100%;
        animation: shimmer 2s infinite;
      }
      
      /* Responsive design */
      @media (max-width: 768px) {
        .ig-unfollow-content {
          flex-direction: column;
        }
        
        .ig-unfollow-stats {
          grid-template-columns: repeat(3, 1fr);
        }
        
        .ig-unfollow-user-avatar {
          width: 48px;
          height: 48px;
        }
      }
      
      @media (max-width: 576px) {
        .ig-unfollow-tool {
          padding: 16px;
        }
        
        .ig-unfollow-stats {
          grid-template-columns: repeat(1, 1fr);
        }
        
        .ig-unfollow-buttons {
          flex-direction: column;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Stilleri ekle
  createStyles();
  
    // Mevcut aracı kontrol et ve kaldır
    var existingTool = document.querySelector('.ig-unfollow-tool');
    if (existingTool) {
      existingTool.remove();
    }
    
    // Ana konteyner oluştur
    var container = document.createElement('div');
    container.className = 'ig-unfollow-tool';
    container.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 999999 !important; pointer-events: auto !important;';
    document.body.appendChild(container);
  
    // Başlık
    var header = document.createElement('div');
    header.className = 'ig-unfollow-header';
    container.appendChild(header);
  
    var title = document.createElement('h1');
    title.className = 'ig-unfollow-title';
    
    // Instagram logo ikonu
    var titleIcon = document.createElement('div');
    titleIcon.className = 'ig-unfollow-title-icon';
    titleIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32" height="32">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>`;
    title.appendChild(titleIcon);
    
    var titleText = document.createElement('span');
    titleText.textContent = 'Instagram Takipten Çıkarma';
    title.appendChild(titleText);
    
    header.appendChild(title);
  
    // Kapat butonu
    var closeButton = document.createElement('button');
    closeButton.className = 'ig-unfollow-close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() { document.body.removeChild(container); };
    header.appendChild(closeButton);
  
    // İstatistik bölümü
    var statsContainer = document.createElement('div');
    statsContainer.className = 'ig-unfollow-stats';
    container.appendChild(statsContainer);
  
    // Toplam istatistiği
    var totalStat = document.createElement('div');
    totalStat.className = 'ig-unfollow-stat';
    
    var totalValue = document.createElement('div');
    totalValue.className = 'ig-unfollow-stat-value';
    totalValue.textContent = unfollowList.length;
    totalStat.appendChild(totalValue);
    
    var totalLabel = document.createElement('div');
    totalLabel.className = 'ig-unfollow-stat-label';
    totalLabel.textContent = 'TOPLAM';
    totalStat.appendChild(totalLabel);
    
    statsContainer.appendChild(totalStat);
  
    // Seçilen istatistiği
    var selectedStat = document.createElement('div');
    selectedStat.className = 'ig-unfollow-stat';
    
    var selectedValue = document.createElement('div');
    selectedValue.className = 'ig-unfollow-stat-value';
    selectedValue.textContent = '0';
    selectedStat.appendChild(selectedValue);
    
    var selectedLabel = document.createElement('div');
    selectedLabel.className = 'ig-unfollow-stat-label';
    selectedLabel.textContent = 'SEÇİLEN';
    selectedStat.appendChild(selectedLabel);
    
    statsContainer.appendChild(selectedStat);
  
    // Takip edilen istatistiği
    var followingStat = document.createElement('div');
    followingStat.className = 'ig-unfollow-stat';
    
    var followingValue = document.createElement('div');
    followingValue.className = 'ig-unfollow-stat-value ig-unfollow-loading';
    followingValue.textContent = '...';
    followingStat.appendChild(followingValue);
    
    var followingLabel = document.createElement('div');
    followingLabel.className = 'ig-unfollow-stat-label';
    followingLabel.textContent = 'TAKİP EDİLEN';
    followingStat.appendChild(followingLabel);
    
    statsContainer.appendChild(followingStat);
  
    // İçerik bölümü
    var igUnfollowContent = document.createElement('div');
    igUnfollowContent.className = 'ig-unfollow-content';
    container.appendChild(igUnfollowContent);
  
    // Kullanıcı listesi
    var userListContainer = document.createElement('div');
    userListContainer.className = 'ig-unfollow-user-list';
    igUnfollowContent.appendChild(userListContainer);
  
    // Arama kutusu
    var searchContainer = document.createElement('div');
    searchContainer.className = 'ig-unfollow-search';
    userListContainer.appendChild(searchContainer);
  
    // Arama ikonu
    var searchIcon = document.createElement('div');
    searchIcon.className = 'ig-unfollow-search-icon';
    searchIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>`;
    searchContainer.appendChild(searchIcon);
  
    var searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'ig-unfollow-search-input';
    searchInput.placeholder = 'Kullanıcı ara...';
    searchContainer.appendChild(searchInput);
  
    // Kullanıcı listesi
    var igUserList = document.createElement('div');
    igUserList.className = 'ig-unfollow-users';
    userListContainer.appendChild(igUserList);
  
    // Log alanı
    var logContainer = document.createElement('div');
    logContainer.className = 'ig-unfollow-log';
    igUnfollowContent.appendChild(logContainer);
  
    var logHeader = document.createElement('div');
    logHeader.className = 'ig-unfollow-log-header';
    logContainer.appendChild(logHeader);
  
    var logTitle = document.createElement('h3');
    logTitle.className = 'ig-unfollow-log-title';
    logTitle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg> İşlem Günlüğü`;
    logHeader.appendChild(logTitle);
  
    var logArea = document.createElement('div');
    logArea.className = 'ig-unfollow-log-content';
    logContainer.appendChild(logArea);
  
    // İlerleme çubuğu
    var progressContainer = document.createElement('div');
    progressContainer.className = 'ig-unfollow-progress-container';
    progressContainer.style.display = 'none';
    container.appendChild(progressContainer);
    
    var progressHeader = document.createElement('div');
    progressHeader.className = 'ig-unfollow-progress-header';
    progressContainer.appendChild(progressHeader);
    
    var progressTitle = document.createElement('div');
    progressTitle.className = 'ig-unfollow-progress-title';
    progressTitle.textContent = 'İŞLEM DURUMU';
    progressHeader.appendChild(progressTitle);
    
    var progressPercentage = document.createElement('div');
    progressPercentage.className = 'ig-unfollow-progress-percentage';
    progressPercentage.textContent = '0%';
    progressHeader.appendChild(progressPercentage);
    
    var progressBar = document.createElement('div');
    progressBar.className = 'ig-unfollow-progress';
    progressContainer.appendChild(progressBar);
    
    var progressBarInner = document.createElement('div');
    progressBarInner.className = 'ig-unfollow-progress-bar';
    progressBar.appendChild(progressBarInner);
  
    // Butonlar - Arama kutusunun altına ekle
    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'ig-unfollow-buttons';
    // Butonları userListContainer'a ekle, igUserList'ten önce
    userListContainer.insertBefore(buttonContainer, igUserList);
    
    // Takipten çık butonu - daha görünür ve dikkat çekici
    var unfollowButton = document.createElement('button');
    unfollowButton.className = 'ig-unfollow-button ig-unfollow-button-danger';
    unfollowButton.style.fontSize = '16px'; // Daha büyük font
    unfollowButton.style.padding = '12px 20px'; // Daha geniş buton
    unfollowButton.style.marginRight = '10px';
    unfollowButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <line x1="23" y1="11" x2="17" y2="11"></line>
    </svg> Takipten Çık (0)`;
    unfollowButton.disabled = true;
    buttonContainer.appendChild(unfollowButton);
    
    var selectAllButton = document.createElement('button');
    selectAllButton.className = 'ig-unfollow-button ig-unfollow-button-secondary';
    selectAllButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 11 12 14 22 4"></polyline>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg> Tümünü Seç`;
    buttonContainer.appendChild(selectAllButton);
  
    var deselectAllButton = document.createElement('button');
    deselectAllButton.className = 'ig-unfollow-button ig-unfollow-button-secondary';
    deselectAllButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
      <line x1="18" y1="9" x2="12" y2="15"></line>
      <line x1="12" y1="9" x2="18" y2="15"></line>
    </svg> Tümünü Kaldır`;
    buttonContainer.appendChild(deselectAllButton);
  
    // Log mesajı ekle
    function addLog(message, type) {
      type = type || 'info';
      var log = document.createElement('div');
      log.className = 'ig-unfollow-log-entry ig-unfollow-log-' + type;
      
      var timestamp = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      log.innerHTML = `<span style="color: #8e8e8e; margin-right: 8px;">[${timestamp}]</span> ${message}`;
      
      logArea.appendChild(log);
      logArea.scrollTop = logArea.scrollHeight;
      
      // Maksimum 100 log göster, eskiler silinsin
      if (logArea.children.length > 100) {
        logArea.removeChild(logArea.children[0]);
      }
    }
  
    // CSRF token al
    function getCsrfToken() {
      // Önce cookie'den CSRF token'i almaya çalış
      var match = document.cookie.match(/csrftoken=([^;]+)/);
      if (match && match[1]) {
        return match[1];
      }
      
      // Eğer cookie'de yoksa, Instagram'in window._sharedData veya window.__initialData objelerinden almaya çalış
      if (window._sharedData && window._sharedData.config && window._sharedData.config.csrf_token) {
        return window._sharedData.config.csrf_token;
      }
      
      if (window.__initialData && window.__initialData.data && window.__initialData.data.config && window.__initialData.data.config.csrf_token) {
        return window.__initialData.data.config.csrf_token;
      }
      
      // Son çare olarak meta tag'inden almaya çalış
      var metaTag = document.querySelector('meta[name="csrf-token"]');
      if (metaTag) {
        return metaTag.getAttribute('content');
      }
      
      console.error('CSRF token bulunamadı!');
      return null;
    }
  
    // Kullanıcı bilgilerini kontrol et
    var userStatus = {};
    var selectedUsers = [];
  
    // Kullanıcı takip durumunu kontrol et
    function checkFollowingStatus(username, callback) {
      // Hata sayacı
      if (!window.errorRetryCount) {
        window.errorRetryCount = 0;
      }
      
      // Instagram'ın güncel API'sini kullanarak kullanıcı bilgilerini al
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://www.instagram.com/api/v1/users/web_profile_info/?username=' + username, true);
      
      // Instagram'ın gerekli başlıklarını ekle
      xhr.setRequestHeader('x-ig-app-id', '936619743392459'); // Instagram web uygulaması ID'si
      xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest');
      
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            try {
              var responseText = xhr.responseText;
              
              // Instagram bazen yanıtın başına "for (;;);" ekliyor, bunu temizle
              if (responseText.startsWith('for (;;);')) {
                responseText = responseText.substring(9);
              }
              
              var data = JSON.parse(responseText);
              
              if (data && data.data && data.data.user) {
                var user = data.data.user;
                callback(null, {
                  id: user.id,
                  username: user.username,
                  fullName: user.full_name,
                  isFollowing: user.followed_by_viewer,
                  profilePic: user.profile_pic_url
                });
              } else {
                callback(new Error('Kullanıcı bilgileri bulunamadı'));
              }
            } catch (error) {
              callback(new Error('JSON parse hatası: ' + error.message));
            }
          } else {
            // Rate limit hatası olduğunda bekle ve yeniden dene
            if (xhr.status === 429 && window.errorRetryCount < 3) {
              window.errorRetryCount++;
              var waitTime = 5000 * window.errorRetryCount;
              addLog(`⚠️ Rate limit aşıldı (HTTP 429). ${waitTime/1000} saniye bekleniyor ve yeniden deneniyor...`, 'warning');
              
              setTimeout(function() {
                checkFollowingStatus(username, callback);
              }, waitTime);
              return;
            }
            callback(new Error('HTTP hatası! Durum: ' + xhr.status));
          }
        }
      };
      xhr.send();
    }
  
    // Takipten çıkar
    function unfollow(userId, callback) {
      // Hata sayacı
      if (!window.unfollowErrorRetryCount) {
        window.unfollowErrorRetryCount = 0;
      }
      
      var xhr = new XMLHttpRequest();
      // Güncel Instagram API endpoint'i
      xhr.open('POST', 'https://www.instagram.com/api/v1/web/friendships/' + userId + '/unfollow/', true);
      
      // Gerekli başlıklar
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.setRequestHeader('x-csrftoken', getCsrfToken());
      xhr.setRequestHeader('x-ig-app-id', '936619743392459'); // Instagram web uygulaması ID'si
      xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest');
      
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            try {
              var responseText = xhr.responseText;
              
              // Instagram bazen yanıtın başına "for (;;);" ekliyor, bunu temizle
              if (responseText.startsWith('for (;;);')) {
                responseText = responseText.substring(9);
              }
              
              var data = JSON.parse(responseText);
              callback(null, data.status === 'ok');
            } catch (error) {
              callback(new Error('JSON parse hatası: ' + error.message));
            }
          } else {
            // Rate limit hatası olduğunda bekle ve yeniden dene
            if (xhr.status === 429 && window.errorRetryCount < 3) {
              window.errorRetryCount++;
              var waitTime = 5000 * window.errorRetryCount;
              addLog(`⚠️ Rate limit aşıldı (HTTP 429). ${waitTime/1000} saniye bekleniyor ve yeniden deneniyor...`, 'warning');
              
              setTimeout(function() {
                checkFollowingStatus(username, callback);
              }, waitTime);
              return;
            }
            callback(new Error('HTTP hatası! Durum: ' + xhr.status));
          }
        }
      };
      xhr.send();
    }
  
    // Kullanıcı kartı oluştur
    function createUserCard(user) {
      var card = document.createElement('div');
      card.className = 'ig-unfollow-user-card';
  
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'ig-unfollow-user-checkbox';
      checkbox.dataset.username = user.username;
      checkbox.dataset.userId = user.id;
      
      // Eğer kullanıcı takip ediliyorsa, otomatik olarak seç
      if (user.isFollowing) {
        checkbox.checked = true;
        // Otomatik olarak seçildiği için seçili kullanıcılar listesine ekle
        if (!selectedUsers.some(u => u.username === user.username)) {
          selectedUsers.push(user);
        }
      }
      
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          // Zaten listede yoksa ekle
          if (!selectedUsers.some(u => u.username === user.username)) {
            selectedUsers.push(user);
          }
        } else {
          selectedUsers = selectedUsers.filter(function(u) { return u.username !== user.username; });
        }
        selectedValue.textContent = selectedUsers.length;
        unfollowButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg> Takipten Çık (${selectedUsers.length})`;
        
        if (selectedUsers.length > 0) {
          unfollowButton.disabled = false;
        } else {
          unfollowButton.disabled = true;
        }
      });
      card.appendChild(checkbox);
  
      var avatarContainer = document.createElement('div');
      avatarContainer.className = 'ig-unfollow-user-avatar-container';
      card.appendChild(avatarContainer);
  
      var profilePic = document.createElement('img');
      profilePic.className = 'ig-unfollow-user-avatar';
      profilePic.src = user.profilePic;
      profilePic.alt = user.username;
      profilePic.onerror = function() {
        // Profil fotoğrafı yüklenemezse varsayılan avatar göster
        this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="%23ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
      };
      avatarContainer.appendChild(profilePic);
  
      var userInfo = document.createElement('div');
      userInfo.className = 'ig-unfollow-user-info';
      card.appendChild(userInfo);
  
      var userName = document.createElement('div');
      userName.className = 'ig-unfollow-username';
      userName.textContent = user.username;
      userInfo.appendChild(userName);
  
      var fullName = document.createElement('div');
      fullName.className = 'ig-unfollow-fullname';
      fullName.textContent = user.fullName || '';
      userInfo.appendChild(fullName);
  
      var statusBadge = document.createElement('div');
      statusBadge.className = 'ig-unfollow-status';
      
      if (user.isFollowing) {
        statusBadge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <polyline points="17 11 19 13 23 9"></polyline>
        </svg> Takip Ediliyor`;
        statusBadge.classList.add('ig-unfollow-status-following');
        userStatus[user.username] = true;
      } else {
        statusBadge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="18" y1="8" x2="23" y2="13"></line>
          <line x1="23" y1="8" x2="18" y2="13"></line>
        </svg> Takip Edilmiyor`;
        statusBadge.classList.add('ig-unfollow-status-not-following');
        userStatus[user.username] = false;
      }
      
      card.appendChild(statusBadge);
  
      return card;
    }
  
    // Kullanıcı listesini oluştur
    function loadUserList() {
      addLog('Kullanıcı listesi yükleniyor...', 'info');
      
      var followingCounter = 0;
      var loadedCounter = 0;
      var userCards = [];
      var errorCards = [];
      
      unfollowList.forEach(function(username) {
        checkFollowingStatus(username, function(error, user) {
          loadedCounter++;
          
          if (error) {
            addLog('❌ ' + username + ' bilgileri alınamadı: ' + error.message, 'error');
            
            // Hata alınan kullanıcılar için basit kart oluştur
            var simpleCard = document.createElement('div');
            simpleCard.className = 'ig-unfollow-user-card';
            
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'ig-unfollow-user-checkbox';
            checkbox.disabled = true;
            simpleCard.appendChild(checkbox);
            
            var placeholderImg = document.createElement('div');
            placeholderImg.className = 'ig-unfollow-user-avatar-container';
            placeholderImg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ig-unfollow-user-avatar">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>`;
            simpleCard.appendChild(placeholderImg);
            
            var errorInfo = document.createElement('div');
            errorInfo.className = 'ig-unfollow-user-info';
            simpleCard.appendChild(errorInfo);
            
            var errorUsername = document.createElement('div');
            errorUsername.className = 'ig-unfollow-username';
            errorUsername.textContent = username;
            errorInfo.appendChild(errorUsername);
            
            var errorText = document.createElement('div');
            errorText.className = 'ig-unfollow-fullname';
            errorText.textContent = 'Bilgiler alınamadı';
            errorInfo.appendChild(errorText);
            
            var errorBadge = document.createElement('div');
            errorBadge.className = 'ig-unfollow-status ig-unfollow-status-not-following';
            errorBadge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg> Hata`;
            simpleCard.appendChild(errorBadge);
            
            // Hata kartlarını bir diziye ekle
            errorCards.push(simpleCard);
          } else {
            if (user.isFollowing) {
              followingCounter++;
            }
            
            var card = createUserCard(user);
            
            // Takip edilen ve edilmeyen kullanıcıları ayrı dizilere ekle
            userCards.push({
              element: card,
              isFollowing: user.isFollowing
            });
          }
          
          // Tüm kullanıcılar yüklendiğinde istatistikleri güncelle
          if (loadedCounter === unfollowList.length) {
            followingValue.textContent = followingCounter;
            followingValue.classList.remove('ig-unfollow-loading');
            
            // Seçili kullanıcı sayısını güncelle
            selectedValue.textContent = selectedUsers.length;
            
            // Takipten çık butonunu güncelle
            unfollowButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg> Takipten Çık (${selectedUsers.length})`;
            
            // Eğer seçili kullanıcı varsa butonu aktif et
            if (selectedUsers.length > 0) {
              unfollowButton.disabled = false;
            }
            
            // Kullanıcı listesini temizle
            igUserList.innerHTML = '';
            
            // Önce takip edilen kullanıcıları ekle
            userCards.sort(function(a, b) {
              // Takip edilenler önce gelsin
              if (a.isFollowing && !b.isFollowing) return -1;
              if (!a.isFollowing && b.isFollowing) return 1;
              return 0;
            });
            
            // Sıralanmış kullanıcı kartlarını ekle
            userCards.forEach(function(cardObj) {
              igUserList.appendChild(cardObj.element);
            });
            
            // Hata kartlarını en sona ekle
            errorCards.forEach(function(card) {
              igUserList.appendChild(card);
            });
            
            addLog('✅ Kullanıcı listesi yüklendi. ' + followingCounter + ' kullanıcı takip ediliyor.', 'success');
          }
        });
      });
    }
  
    // Arama fonksiyonu
    searchInput.addEventListener('input', function() {
      var searchTerm = this.value.toLowerCase();
      
      Array.from(igUserList.children).forEach(function(card) {
        var checkbox = card.querySelector('input[type="checkbox"]');
        if (!checkbox || !checkbox.dataset.username) return;
        
        var username = checkbox.dataset.username.toLowerCase();
        
        if (username.includes(searchTerm)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  
    // Tümünü seç/kaldır butonları
    selectAllButton.addEventListener('click', function() {
      Array.from(igUserList.querySelectorAll('input[type="checkbox"]:not(:disabled)')).forEach(function(checkbox) {
        checkbox.checked = true;
        
        // Kullanıcı bilgilerini bul
        var username = checkbox.dataset.username;
        var userId = checkbox.dataset.userId;
        
        // Eğer zaten seçili değilse ekle
        if (!selectedUsers.some(function(u) { return u.username === username; })) {
          selectedUsers.push({
            id: userId,
            username: username
          });
        }
      });
      
      selectedValue.textContent = selectedUsers.length;
      unfollowButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <line x1="23" y1="11" x2="17" y2="11"></line>
      </svg> Takipten Çık (${selectedUsers.length})`;
      
      if (selectedUsers.length > 0) {
        unfollowButton.disabled = false;
      }
    });
  
    deselectAllButton.addEventListener('click', function() {
      Array.from(igUserList.querySelectorAll('input[type="checkbox"]')).forEach(function(checkbox) {
        checkbox.checked = false;
      });
      
      selectedUsers = [];
      selectedValue.textContent = '0';
      unfollowButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <line x1="23" y1="11" x2="17" y2="11"></line>
      </svg> Takipten Çık (0)`;
      unfollowButton.disabled = true;
    });
  
      // Takipten çıkarma işlemi
  unfollowButton.addEventListener('click', function() {
    if (selectedUsers.length === 0) return;
    
    if (!confirm(selectedUsers.length + ' kullanıcıyı takipten çıkarmak istediğinize emin misiniz?')) {
      return;
    }
    
    addLog(selectedUsers.length + ' kullanıcıyı takipten çıkarma işlemi başlatılıyor...', 'info');
    
    // İlerleme çubuğunu göster
    progressContainer.style.display = 'block';
    progressBarInner.style.width = '0%';
    progressPercentage.textContent = '0%';
    
    var successCount = 0;
    var failCount = 0;
    var currentIndex = 0;
    
    // Butonları devre dışı bırak
    unfollowButton.disabled = true;
    selectAllButton.disabled = true;
    deselectAllButton.disabled = true;
    
    function processNext() {
      if (currentIndex >= selectedUsers.length) {
        // İşlem tamamlandı
        addLog('✅ İşlem tamamlandı! ' + successCount + ' başarılı, ' + failCount + ' başarısız.', 'success');
        
        // Butonları tekrar aktif et
        selectAllButton.disabled = false;
        deselectAllButton.disabled = false;
        
        // Seçimleri temizle
        selectedUsers = [];
        selectedValue.textContent = '0';
        unfollowButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg> Takipten Çık (0)`;
        unfollowButton.disabled = true;
        
        return;
      }
      
      // İlerleme çubuğunu güncelle
      var progress = Math.round((currentIndex / selectedUsers.length) * 100);
      progressBarInner.style.width = progress + '%';
      progressPercentage.textContent = progress + '%';
      
      var user = selectedUsers[currentIndex];
      addLog('(' + (currentIndex+1) + '/' + selectedUsers.length + ') ' + user.username + ' takipten çıkarılıyor...', 'info');
      
      unfollow(user.id, function(error, success) {
        if (error) {
          addLog('❌ ' + user.username + ' takipten çıkarılamadı: ' + error.message, 'error');
          failCount++;
        } else if (success) {
          addLog('✅ ' + user.username + ' takipten çıkarıldı!', 'success');
          successCount++;
          
          // Kullanıcı kartını güncelle
          Array.from(igUserList.querySelectorAll('input[type="checkbox"]')).forEach(function(checkbox) {
            if (checkbox.dataset.username === user.username) {
              var card = checkbox.parentElement;
              var statusBadge = card.querySelector('.ig-unfollow-status');
              statusBadge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg> Takipten Çıkarıldı`;
              statusBadge.className = 'ig-unfollow-status ig-unfollow-status-unfollowed';
              checkbox.checked = false;
              checkbox.disabled = true;
            }
          });
        } else {
          addLog('❌ ' + user.username + ' takipten çıkarılamadı!', 'error');
          failCount++;
        }
        
        currentIndex++;
        
        // Instagram'ın sizi bot olarak algılamaması için bekleyin
        var delay = 3000 + Math.random() * 2000;
        addLog('⏱️ Sonraki işlem için ' + Math.round(delay/1000) + ' saniye bekleniyor...', 'info');
        setTimeout(processNext, delay);
      });
    }
    
    // İşlemi başlat
    processNext();
  });

  // Kullanıcı listesini yükle
  loadUserList();
  
  // Başlangıç bilgisi
  addLog('🚀 Uygulama başlatıldı. Takipten çıkarmak istediğiniz kullanıcıları seçin ve "Takipten Çık" butonuna tıklayın.', 'info');
  
  // Instagram'ın sayfayı manipüle etmesini önlemek için MutationObserver ekle
  const bodyObserver = new MutationObserver(function() {
    // Aracımız hala görünür mü kontrol et
    const tool = document.querySelector('.ig-unfollow-tool');
    if (tool && (tool.style.display === 'none' || parseInt(tool.style.zIndex, 10) < 999999)) {
      tool.style.display = 'flex';
      tool.style.zIndex = '999999';
    }
  });
  
  // Body'deki değişiklikleri izle
  bodyObserver.observe(document.body, { attributes: true, childList: true, subtree: true });
})();