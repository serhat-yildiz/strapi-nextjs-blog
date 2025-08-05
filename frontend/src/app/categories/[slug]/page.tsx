import { getCategories, getArticles } from '@/lib/strapi';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  
  try {
    const [categoriesResponse, articlesResponse] = await Promise.all([
      getCategories(),
      getArticles()
    ]);

    const category = categoriesResponse.data.find(c => c.slug === slug);
    const articles = articlesResponse.data;

    if (!category) {
      notFound();
    }

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <Link href="/" className="text-3xl font-bold text-gray-900 hover:text-gray-700">
                Strapi Blog
              </Link>
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

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-blue-600 hover:text-blue-800">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link href="/categories" className="text-blue-600 hover:text-blue-800">
                  Kategoriler
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-500 capitalize">
                  {category.name || category.slug}
                </span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Category Header */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-12">
              <div className="flex items-center">
                {/* Category Icon */}
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mr-6">
                  <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                
                {/* Category Info */}
                <div className="text-white">
                  <h1 className="text-4xl font-bold mb-2 capitalize">
                    {category.name || category.slug}
                  </h1>
                  <div className="text-blue-100">
                    Slug: {category.slug}
                  </div>
                  <div className="text-blue-100 mt-1">
                    Oluşturulma: {new Date(category.createdAt).toLocaleDateString('tr-TR')}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            {category.description && (
              <div className="px-8 py-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Kategori Açıklaması</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {category.description}
                </p>
              </div>
            )}
          </div>

          {/* Category Articles */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                {category.name || category.slug} Kategorisindeki Yazılar
              </h2>
              <p className="text-gray-600 mt-2">
                Bu kategoriye ait tüm blog yazıları
              </p>
            </div>

            <div className="p-8">
              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <article key={article.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 capitalize">
                      {article.title}
                    </h3>
                    
                    {article.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                    )}

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        {new Date(article.publishedAt).toLocaleDateString('tr-TR')}
                      </span>
                      <Link 
                        href={`/articles/${article.documentId}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Devamını Oku →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* No Articles */}
              {articles.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Bu kategoride henüz yazı yok
                  </h3>
                  <p className="text-gray-600">
                    Bu kategoriye henüz hiç blog yazısı eklenmemiş.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching category:', error);
    notFound();
  }
}