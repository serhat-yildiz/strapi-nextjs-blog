import { getCategories } from '@/lib/strapi';
import Link from 'next/link';

export default async function CategoriesPage() {
  try {
    const response = await getCategories();
    const categories = response.data;

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
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-600 transition-all">
                  Strapi Blog
                </Link>
              </div>
              <nav className="flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Ana Sayfa
                </Link>
                <Link href="/categories" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 transition-colors">
                  Kategoriler
                </Link>
                <Link href="/authors" className="text-gray-600 hover:text-blue-600 transition-colors">
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🏷️ Blog <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Kategorileri</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İçeriklerimizi kategorilere göre keşfedin ve ilginizi çeken konuları bulun
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const gradients = [
                'from-blue-500 to-blue-600',
                'from-emerald-500 to-emerald-600', 
                'from-purple-500 to-purple-600',
                'from-pink-500 to-pink-600',
                'from-amber-500 to-amber-600',
                'from-cyan-500 to-cyan-600'
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <div key={category.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  {/* Category Header with Dynamic Gradient */}
                  <div className={`h-32 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative h-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 capitalize group-hover:text-blue-600 transition-colors">
                      {category.name || category.slug}
                    </h2>
                    
                    {category.description && (
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {category.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-xs text-gray-400">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {new Date(category.createdAt).toLocaleDateString('tr-TR')}
                        </div>
                      </div>
                      
                      <Link 
                        href={`/categories/${category.slug}`}
                        className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${gradient} text-white text-sm font-medium rounded-xl hover:shadow-lg transition-all transform hover:scale-105`}
                      >
                        Yazıları Gör
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
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