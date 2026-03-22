import { Outlet, Link, useLocation } from "react-router";
import { Sprout, BarChart3, MessageSquare, Home } from "lucide-react";

export function Root() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-2 rounded-xl">
                <Sprout className="size-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-green-900">KONCO TANI</h1>
                <p className="text-xs text-green-700">Precision Agriculture Platform</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <Link
                to="/"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isActive('/')
                    ? 'bg-green-600 text-white'
                    : 'text-green-700 hover:bg-green-100'
                }`}
              >
                <Home className="size-4" />
                Beranda
              </Link>
              <Link
                to="/analisis"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isActive('/analisis')
                    ? 'bg-green-600 text-white'
                    : 'text-green-700 hover:bg-green-100'
                }`}
              >
                <BarChart3 className="size-4" />
                Analisis Lahan
              </Link>
              <Link
                to="/dashboard"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isActive('/dashboard')
                    ? 'bg-green-600 text-white'
                    : 'text-green-700 hover:bg-green-100'
                }`}
              >
                <BarChart3 className="size-4" />
                Dashboard
              </Link>
              <Link
                to="/konsultasi"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isActive('/konsultasi')
                    ? 'bg-green-600 text-white'
                    : 'text-green-700 hover:bg-green-100'
                }`}
              >
                <MessageSquare className="size-4" />
                AgroConsult AI
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex items-center gap-1 mt-3 overflow-x-auto pb-2">
            <Link
              to="/"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap text-sm transition-all ${
                isActive('/')
                  ? 'bg-green-600 text-white'
                  : 'text-green-700 hover:bg-green-100'
              }`}
            >
              <Home className="size-4" />
              Beranda
            </Link>
            <Link
              to="/analisis"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap text-sm transition-all ${
                isActive('/analisis')
                  ? 'bg-green-600 text-white'
                  : 'text-green-700 hover:bg-green-100'
              }`}
            >
              <BarChart3 className="size-4" />
              Analisis
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap text-sm transition-all ${
                isActive('/dashboard')
                  ? 'bg-green-600 text-white'
                  : 'text-green-700 hover:bg-green-100'
              }`}
            >
              <BarChart3 className="size-4" />
              Dashboard
            </Link>
            <Link
              to="/konsultasi"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap text-sm transition-all ${
                isActive('/konsultasi')
                  ? 'bg-green-600 text-white'
                  : 'text-green-700 hover:bg-green-100'
              }`}
            >
              <MessageSquare className="size-4" />
              Konsultasi
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sprout className="size-5" />
            <span className="font-semibold">KONCO TANI</span>
          </div>
          <p className="text-green-200 text-sm">
            Knowledge-Based Weather and Soil Decision System
          </p>
          <p className="text-green-300 text-xs mt-2">
            © 2026 KONCO TANI. Platform Pertanian Presisi Berbasis Data.
          </p>
        </div>
      </footer>
    </div>
  );
}
