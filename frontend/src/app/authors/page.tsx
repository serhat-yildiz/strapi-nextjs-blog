import { getAuthors } from '@/lib/strapi';
import Link from 'next/link';

export default async function AuthorsPage() {
  try {
    const response = await getAuthors();
    const authors = response.data;

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
                <Link href="/authors" className="text-blue-600 font-medium">
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
                <span className="text-gray-500">Yazarlar</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog Yazarları
            </h1>
            <p className="text-xl text-gray-600">
              İçeriklerimizi oluşturan yetenekli yazarlarımızla tanışın
            </p>
          </div>

          {/* Authors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {authors.map((author) => (
              <div key={author.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="p-6">
                  {/* Author Avatar */}
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-white">
                      {author.name ? author.name.charAt(0).toUpperCase() : '?'}
                    </span>
                  </div>

                  <div className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {author.name}
                    </h2>
                    
                    <div className="flex items-center justify-center text-gray-600 mb-4">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a 
                        href={`mailto:${author.email}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {author.email}
                      </a>
                    </div>

                    {author.bio && (
                      <div className="text-gray-600 mb-4 text-sm leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: author.bio }} />
                      </div>
                    )}

                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <Link 
                        href={`/authors/${author.documentId}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Profili Gör →
                      </Link>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-xs text-gray-400 text-center">
                      Üyelik: {new Date(author.createdAt).toLocaleDateString('tr-TR')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {authors.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Henüz hiç yazar yok
              </h3>
              <p className="text-gray-600">
                Strapi admin panel&apos;den yeni yazarlar ekleyebilirsiniz.
              </p>
            </div>
          )}
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching authors:', error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Yazarlar yüklenirken hata oluştu
          </h1>
          <p className="text-gray-600">
            Strapi backend&apos;inin çalıştığından emin olun.
          </p>
          <Link href="/" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }
}