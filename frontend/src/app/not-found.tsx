'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          {/* 404 Icon */}
          <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Error Message */}
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Aradığınız sayfa mevcut değil, taşınmış veya silinmiş olabilir. 
            Lütfen URL&apos;yi kontrol edin veya ana sayfaya dönün.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Ana Sayfaya Dön
            </Link>
            
            <div className="text-center">
              <button 
                onClick={() => window.history.back()}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Geri Git
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Popüler Sayfalar:
            </h3>
            <div className="flex justify-center space-x-6 text-sm">
              <Link href="/categories" className="text-blue-600 hover:text-blue-800">
                Kategoriler
              </Link>
              <Link href="/authors" className="text-blue-600 hover:text-blue-800">
                Yazarlar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}