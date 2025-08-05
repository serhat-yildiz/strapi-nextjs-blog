import { getArticles, getCategories, getAuthors } from '@/lib/strapi';
import Link from 'next/link';

export default async function Home() {
  try {
    const [articlesResponse, categoriesResponse, authorsResponse] = await Promise.all([
      getArticles(),
      getCategories(),
      getAuthors()
    ]);

    const articles = articlesResponse.data;
    const categories = categoriesResponse.data;
    const authors = authorsResponse.data;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Strapi Blog
                </h1>
              </div>
              <nav className="flex space-x-8">
                <Link href="/" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 transition-colors">
                  Ana Sayfa
                </Link>
                <Link href="/categories" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Kategoriler
                </Link>
                <Link href="/authors" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Yazarlar
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Modern <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span> Deneyimi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strapi ve Next.js ile oluşturulmuş modern blog platformuna hoş geldiniz
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Blog Yazıları</h3>
                  <p className="text-3xl font-bold text-blue-600">{articles.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Kategoriler</h3>
                  <p className="text-3xl font-bold text-emerald-600">{categories.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Yazarlar</h3>
                  <p className="text-3xl font-bold text-purple-600">{authors.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              📝 Son Blog Yazıları
            </h3>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                {/* Article Header with Gradient */}
                <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                
                <div className="p-6">
                  {/* Article Date */}
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {new Date(article.publishedAt).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>

                  {/* Article Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 capitalize group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  
                  {/* Article Excerpt */}
                  {article.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  )}

                  {/* Read More Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-400">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      2 dk okuma
                    </div>
                    
                    <Link 
                      href={`/articles/${article.documentId}`}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
                    >
                      Devamını Oku
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {articles.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Henüz hiç blog yazısı yok
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Strapi admin panel&apos;den yeni yazılar ekleyerek blog&apos;unuzu zenginleştirebilirsiniz.
              </p>
              <a 
                href="http://localhost:1337/admin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Admin Panel&apos;e Git
              </a>
            </div>
          )}
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Veri yüklenirken hata oluştu
          </h1>
          <p className="text-gray-600">
            Strapi backend&apos;inin çalıştığından emin olun.
          </p>
        </div>
      </div>
    );
  }
}
