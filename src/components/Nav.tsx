import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800">David Tech</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">About</Link>
            <Link href="#specialties" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Specialties</Link>
            <Link href="#timeline" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Timeline</Link>
            <Link href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

