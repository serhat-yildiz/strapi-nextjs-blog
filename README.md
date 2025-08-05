# Strapi + Next.js Blog Projesi

Bu proje, **Strapi** (Headless CMS) backend'i ile **Next.js** frontend'inin entegre edildiği modern bir blog uygulamasıdır.

## 🚀 **Özellikler**

### Backend (Strapi)
- ✅ Content Management System (CMS)
- ✅ REST API
- ✅ Admin Panel
- ✅ Medya Yönetimi
- ✅ Kullanıcı & İzin Yönetimi
- ✅ SQLite Veritabanı

### Frontend (Next.js)
- ✅ Server-Side Rendering (SSR)
- ✅ Responsive Tasarım
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Modern UI/UX

### Content Types
- **📄 Articles**: Blog yazıları
- **🏷️ Categories**: Kategori yönetimi
- **👤 Authors**: Yazar profilleri

## 📱 **Sayfalar**

1. **Ana Sayfa** (`/`) - Blog yazılarının listesi
2. **Makale Detay** (`/articles/[id]`) - Makale tam içeriği
3. **Kategoriler** (`/categories`) - Tüm kategoriler
4. **Kategori Detay** (`/categories/[slug]`) - Kategoriye ait yazılar
5. **Yazarlar** (`/authors`) - Tüm yazarlar
6. **Yazar Detay** (`/authors/[id]`) - Yazarın profili ve yazıları

## 🛠 **Teknoloji Yığını**

- **Backend**: Strapi v5.20.0
- **Frontend**: Next.js 15
- **Database**: SQLite
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **HTTP Client**: Axios

## 📦 **Kurulum**

### 1. Repository'yi klonlayın
```bash
git clone https://github.com/serhat-yildiz/strapi-nextjs-blog.git
cd strapi-nextjs-blog
```

### 2. Backend'i başlatın (Strapi)
```bash
cd strapi-backend
npm install
npm run develop
```
Strapi admin paneli: `http://localhost:1337/admin`

### 3. Frontend'i başlatın (Next.js)
```bash
cd frontend
npm install
npm run dev
```
Frontend uygulaması: `http://localhost:3000`

## 🎯 **İlk Kurulum Adımları**

### Strapi Admin Hesabı
1. `http://localhost:1337/admin` adresine gidin
2. İlk admin kullanıcısını oluşturun
3. Content Manager'dan örnek içerikler ekleyin

### API İzinleri
1. **Settings** > **Users & Permissions** > **Roles** > **Public**
2. **Permissions** tab'ında şu izinleri açın:
   - Article: `find`, `findOne`
   - Author: `find`, `findOne`
   - Category: `find`, `findOne`
   - Upload: `find`, `findOne`

## 📊 **Proje Yapısı**

```
strapi-nextjs-blog/
├── strapi-backend/          # Strapi CMS
│   ├── src/api/            # Content Types
│   │   ├── article/        # Blog yazıları
│   │   ├── author/         # Yazarlar
│   │   └── category/       # Kategoriler
│   ├── config/             # Konfigürasyon
│   └── public/             # Statik dosyalar
├── frontend/               # Next.js Frontend
│   ├── src/app/           # App Router
│   │   ├── articles/      # Makale sayfaları
│   │   ├── authors/       # Yazar sayfaları
│   │   ├── categories/    # Kategori sayfaları
│   │   └── page.tsx       # Ana sayfa
│   └── src/lib/           # Utilities
│       └── strapi.ts      # API client
└── memory-bank/           # Proje dokümantasyonu
```

## 🌟 **Örnek İçerik Oluşturma**

### 1. Kategori Ekleme
- **Name**: Technology
- **Slug**: technology
- **Description**: Teknoloji ile ilgili yazılar

### 2. Yazar Ekleme
- **Name**: Ahmet Yılmaz
- **Email**: ahmet@example.com
- **Bio**: Full-stack geliştirici

### 3. Makale Ekleme
- **Title**: React'a Giriş
- **Content**: Makale içeriği...
- **Excerpt**: Kısa özet
- **Category**: Technology
- **Author**: Ahmet Yılmaz

## 📸 **Ekran Görüntüleri**

### Ana Sayfa
Modern blog tasarımı ile yazıları listeler

### Admin Panel
Strapi'nin güçlü admin paneli ile içerik yönetimi

## 🤝 **Katkıda Bulunma**

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📝 **Lisans**

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 **Geliştirici**

**Serhat YILDIZ**
- GitHub: [@serhat-yildiz](https://github.com/serhat-yildiz)
- Website: [serhatdev.vercel.app](https://serhatdev.vercel.app)
- LinkedIn: [in/serhat-yldz](https://linkedin.com/in/serhat-yldz)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!