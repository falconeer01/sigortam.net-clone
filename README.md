# Sigortam.net Clone - Frontend

## Proje Açıklaması

Bu proje, **Sigortam.net** web sitesinin frontend kısmının bir klonudur. Kullanıcıların farklı sigorta türlerini karşılaştırabilmesi için tasarlanmıştır. Proje, frontend geliştirme becerilerini geliştirmek amacıyla oluşturulmuş olup, modern web teknolojileri kullanılarak inşa edilmiştir.

## Özellikler

- **Ana Sayfa**: Kullanıcıların sigorta türlerine göz atabileceği, promosyonları ve kampanyaları görebileceği bir ana sayfa.
- **Sigorta Karşılaştırma**: Kullanıcıların farklı sigorta planlarını görüntüleyip karşılaştırabileceği bir sayfa.
- **Responsive Tasarım**: Hem mobil hem de masaüstü cihazlarda uyumlu bir kullanıcı deneyimi sunar.
- **Basit Formlar**: Kullanıcıların bilgilerini girip teklifler alabileceği form yapıları.

## Kullanılan Teknolojiler

- **HTML5**: Web sayfasının temel yapısı.
- **CSS3**: Sayfa stilizasyonu ve layout düzenlemeleri.
- **JavaScript (ES6+)**: Sayfa içi dinamik özellikler ve etkileşimler.
- **React.js**: Kullanıcı arayüzlerini oluşturmak için kullanılan ana kütüphane.

## Kurulum ve Çalıştırma

### Gereksinimler

- Node.js v12+ 
- Bir web tarayıcısı (Google Chrome, Firefox, vb.)

### Kurulum Adımları

1. **Depoyu Klonlayın:**
    ```bash
    git clone https://github.com/kullanici_adi/sigortamnet-clone-frontend.git
    ```
2. **Proje dizinine gidin:**
    ```bash
    cd sigortamnet-clone-frontend
    ```
3. **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    ```
4. **Uygulamayı başlatın:**
    ```bash
    npm start
    ```
5. **Tarayıcınızda görüntüleyin:**
    - Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

## Proje Yapısı

```bash
├── public
│   ├── index.html  # Ana HTML dosyası
├── src
│   ├── assets      # CSS, resimler ve diğer statik dosyalar
│   ├── components  # Yeniden kullanılabilir React bileşenleri
│   ├── pages       # Sayfa bileşenleri (Ana Sayfa, Karşılaştırma Sayfası vb.)
│   ├── App.js      # Ana uygulama bileşeni
│   └── index.js    # Giriş noktası dosyası
├── package.json    # Proje bağımlılıkları ve betikler
└── README.md       # Proje dokümantasyonu
