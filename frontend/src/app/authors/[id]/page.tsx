import { getAuthors, getArticles } from '@/lib/strapi';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface AuthorPageProps {
  params: Promise<{ id: string }>;
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { id } = await params;
  
  try {
    const [authorsResponse, articlesResponse] = await Promise.all([
      getAuthors(),
      getArticles()
    ]);

    const author = authorsResponse.data.find(a => a.documentId === id);
    const articles = articlesResponse.data;

    if (!author) {
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
                <Link href="/authors" className="text-blue-600 hover:text-blue-800">
                  Yazarlar
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-500">{author.name}</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Author Profile */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-12">
              <div className="flex items-center">
                {/* Avatar */}
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mr-8">
                  <span className="text-4xl font-bold text-purple-600">
                    {author.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                
                {/* Author Info */}
                <div className="text-white">
                  <h1 className="text-4xl font-bold mb-2">{author.name}</h1>
                  <div className="flex items-center mb-4">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a 
                      href={`mailto:${author.email}`}
                      className="hover:underline"
                    >
                      {author.email}
                    </a>
                  </div>
                  <div className="text-purple-100">
                    Üyelik Tarihi: {new Date(author.createdAt).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            {author.bio && (
              <div className="px-8 py-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hakkında</h2>
                <div 
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: author.bio }}
                />
              </div>
            )}
          </div>

          {/* Author's Articles */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                {author.name}&apos;nin Yazıları
              </h2>
              <p className="text-gray-600 mt-2">
                Bu yazarın tüm blog yazıları
              </p>
            </div>

            <div className="p-8">
              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    Henüz hiç yazı yok
                  </h3>
                  <p className="text-gray-600">
                    Bu yazar henüz hiç blog yazısı yazmamış.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching author:', error);
    notFound();
  }
}