import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-600">FinMonetize</span>
          <span className="text-xl font-semibold text-gray-800">Suite</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/tools" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Tools
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="md:hidden text-gray-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
