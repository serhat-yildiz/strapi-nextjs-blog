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
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <h1 className="text-3xl font-bold text-gray-900">
                Strapi Blog
              </h1>
              <nav className="flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Ana Sayfa
                </Link>
                <Link href="/categories" className="text-gray-600 hover:text-gray-900">
                  Kategoriler
                </Link>
                <Link href="/authors" className="text-gray-600 hover:text-gray-900">
                  Yazarlar
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900">Blog Yazıları</h3>
              <p className="text-3xl font-bold text-blue-600">{articles.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900">Kategoriler</h3>
              <p className="text-3xl font-bold text-green-600">{categories.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900">Yazarlar</h3>
              <p className="text-3xl font-bold text-purple-600">{authors.length}</p>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 capitalize">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString('tr-TR')}
                    </span>
                    <Link 
                      href={`/articles/${article.documentId}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Devamını Oku →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {articles.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Henüz hiç blog yazısı yok
              </h3>
              <p className="text-gray-600">
                Strapi admin panel&apos;den yeni yazılar ekleyebilirsiniz.
              </p>
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
