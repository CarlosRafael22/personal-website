import Link from 'next/link';

export function Header() {
  return (
    <header>
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text font-medium text-gray-800 transition-colors hover:text-gray-600"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
