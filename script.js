document.addEventListener('DOMContentLoaded', function() {
    // Instagram takipten çıkarma kodunu yükle
    loadInstagramCode();
    
    // Kopyala butonu işlevselliği
    const copyButton = document.getElementById('copy-button');
    const codeElement = document.getElementById('instagram-code');
    
    if (copyButton && codeElement) {
        copyButton.addEventListener('click', function() {
            // Kodu kopyala
            const codeText = codeElement.textContent;
            navigator.clipboard.writeText(codeText).then(function() {
                // Kopyalama başarılı olduğunda butonun görünümünü değiştir
                copyButton.classList.add('copied');
                
                // Pikachu sesi çal
                const pikachuSound = new Audio('sounds/pikachu-sound.mp3');
                pikachuSound.volume = 0.5;
                pikachuSound.play().catch(e => console.log('Ses çalamadı:', e));
                
                // 2 saniye sonra butonu eski haline getir
                setTimeout(function() {
                    copyButton.classList.remove('copied');
                }, 2000);
            }).catch(function(err) {
                console.error('Kopyalama hatası:', err);
                alert('Kopyalama işlemi başarısız oldu. Lütfen kodu manuel olarak seçip kopyalayın.');
            });
        });
    }
    
    // Mobil menü işlevselliği
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
    
    // Instagram takipten çıkarma kodunu yükle
    function loadInstagramCode() {
        fetch('instagram-unfollow-code.js')
            .then(response => response.text())
            .then(code => {
                document.getElementById('instagram-code').textContent = code;
            })
            .catch(error => {
                console.error('Kod yüklenirken hata oluştu:', error);
                document.getElementById('instagram-code').textContent = 'Kod yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.';
            });
    }
    
    // Sayfa içi bağlantılar için yumuşak kaydırma
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Mobil menüyü kapat
            if (navMenu && navMenu.classList.contains('active') && mobileMenuToggle) {
                navMenu.classList.remove('active');
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // Aktif menü öğesini güncelle
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll pozisyonuna göre aktif menü öğesini güncelle
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const navLinks = document.querySelectorAll('nav a');
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
