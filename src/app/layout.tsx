import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ScrollToTop from "components/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bruna Rosa | Psicóloga em Tubarão SC | Atendimento Psicológico",
  description: "Psicóloga especializada em Tubarão SC, oferecendo atendimento psicológico personalizado para adultos, adolescentes e casais. Agende sua consulta online ou presencial.",
  keywords: "psicologa, psicologia, tubarao sc, atendimento psicológico, psicoterapia, saúde mental, bem-estar emocional",
  openGraph: {
    title: "Bruna Rosa | Psicóloga em Tubarão SC",
    description: "Psicóloga especializada em Tubarão SC, oferecendo atendimento psicológico personalizado para adultos, adolescentes e casais.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://brunarosa.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#faf6f1] text-[#624332]`}>
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-[#b67d4f]">
                Bruna Rosa
              </Link>
              
              {/* Mobile menu button */}
              <button className="md:hidden p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-[#624332] hover:text-[#b67d4f] transition-colors">
                  Início
                </Link>
                <Link href="/sobre" className="text-[#624332] hover:text-[#b67d4f] transition-colors">
                  Sobre
                </Link>
                <Link href="/servicos" className="text-[#624332] hover:text-[#b67d4f] transition-colors">
                  Serviços
                </Link>
                <Link href="/contato" className="text-[#624332] hover:text-[#b67d4f] transition-colors">
                  Contato
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="min-h-screen pt-20">
          {children}
        </main>

        {/* Floating Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/5548988036257"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#b67d4f] hover:bg-[#624332] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Contato via WhatsApp"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>

          {/* Scroll to Top Button */}
          <ScrollToTop />
        </div>

        <footer className="bg-[#624332] text-[#f5ede3] py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Bruna Rosa - Psicóloga em Tubarão SC</h3>
                <p className="text-[#f5ede3]">Psicóloga especializada em Tubarão SC, oferecendo atendimento psicológico personalizado para adultos, adolescentes e casais. Atendimento online e presencial.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contato</h3>
                <p className="text-[#f5ede3]">Email: contato@brunarosa.com</p>
                <p className="text-[#f5ede3]">Telefone: (48) 98803-6257</p>
                <p className="text-[#f5ede3]">Endereço: Tubarão, Santa Catarina</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-[#f5ede3] hover:text-[#b67d4f] transition-colors">Instagram</Link>
                  <Link href="#" className="text-[#f5ede3] hover:text-[#b67d4f] transition-colors">LinkedIn</Link>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#b67d4f]/20 text-center">
              <p className="text-[#f5ede3]">© 2024 Bruna Rosa. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
