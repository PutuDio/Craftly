import Link from 'next/link'

const columns = [
  {
    heading: 'Platform',
    links: [
      { name: 'Kategori', href: '#kategori' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'AI Brief Generator', href: '#cara-kerja' },
      { name: 'Craftly Pro', href: '#pricing' },
    ],
  },
  {
    heading: 'Perusahaan',
    links: [
      { name: 'Tentang Kami', href: '#' },
      { name: 'Blog Kreator', href: '#' },
      { name: 'Karir', href: '#' },
      { name: 'Press Kit', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { name: 'Kebijakan Privasi', href: '#' },
      { name: 'Syarat & Ketentuan', href: '#' },
      { name: 'Kebijakan Kreator', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8 rounded-t-[45px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="#" className="flex items-center gap-2 mb-6">
              <span className="w-9 h-9 rounded-xl bg-accent text-ink flex items-center justify-center font-bold">
                C
              </span>
              <span className="text-2xl font-bold">Craftly</span>
            </Link>
            <p className="text-white/60">
              Platform marketplace kreatif berbasis AI yang menghubungkan brand
              dengan kreator digital terbaik Indonesia.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-lg font-semibold mb-6">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <span>
            © 2025 Craftly Technologies Pte. Ltd. All rights reserved.
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  )
}
