import { getCategories } from '@/lib/strapi';
import Link from 'next/link';

export default async function CategoriesPage() {
  try {
    const response = await getCategories();
    const categories = response.data;

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
                <Link href="/categories" className="text-blue-600 font-medium">
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
                <span className="text-gray-500">Kategoriler</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog Kategorileri
            </h1>
            <p className="text-xl text-gray-600">
              İçeriklerimizi kategorilere göre keşfedin
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="p-6">
                  {/* Category Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-2 capitalize">
                    {category.name || category.slug}
                  </h2>
                  
                  {category.description && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {category.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      Slug: {category.slug}
                    </span>
                    <Link 
                      href={`/categories/${category.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Yazıları Gör →
                    </Link>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-xs text-gray-400">
                      Oluşturulma: {new Date(category.createdAt).toLocaleDateString('tr-TR')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {categories.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Henüz hiç kategori yok
              </h3>
              <p className="text-gray-600">
                Strapi admin panel&apos;den yeni kategoriler ekleyebilirsiniz.
              </p>
            </div>
          )}
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching categories:', error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Kategoriler yüklenirken hata oluştu
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