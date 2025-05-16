import Link from "next/link";
import { colors } from "../styles/colors";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className={`absolute inset-0 bg-[${colors.background.light}] z-0`}>
          {/* Placeholder for hero image */}
          <div className={`w-full h-full bg-[${colors.background.accent}] opacity-50`}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className={`text-4xl md:text-6xl font-bold text-[${colors.text.primary}] mb-6`}>
              Bem-vindo ao meu espaço terapêutico
            </h1>
            <p className={`text-xl text-[${colors.text.secondary}] mb-8`}>
              Acompanho você em sua jornada de autoconhecimento e desenvolvimento pessoal
            </p>
            <Link 
              href="/contato" 
              className={`inline-block bg-[${colors.primary.main}] text-white px-8 py-3 rounded-full hover:bg-[${colors.primary.dark}] transition-colors`}
            >
              Agende uma consulta
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-20 bg-[${colors.background.white}]`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-bold text-[${colors.text.primary}] mb-6`}>Sobre Mim</h2>
              <p className={`text-[${colors.text.secondary}] mb-6`}>
                Sou psicóloga especializada em ajudar pessoas a encontrarem seu caminho para o bem-estar emocional e mental. 
                Com uma abordagem humanizada e acolhedora, trabalho para criar um espaço seguro onde você pode explorar suas 
                emoções e desenvolver estratégias para uma vida mais plena.
              </p>
              <Link 
                href="/sobre" 
                className={`text-[${colors.primary.main}] hover:text-[${colors.primary.dark}] transition-colors`}
              >
                Conheça mais sobre meu trabalho →
              </Link>
            </div>
            <div className={`relative h-[400px] bg-[${colors.background.accent}] rounded-lg`}>
              {/* Placeholder for about image */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 bg-[${colors.background.light}]`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-[${colors.text.primary}] text-center mb-12`}>Meus Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className={`bg-[${colors.background.white}] p-8 rounded-lg shadow-sm`}>
              <div className={`w-16 h-16 bg-[${colors.background.accent}] rounded-full mb-6`}></div>
              <h3 className={`text-xl font-bold text-[${colors.text.primary}] mb-4`}>Psicoterapia Individual</h3>
              <p className={`text-[${colors.text.secondary}]`}>
                Atendimento personalizado para ajudar você a lidar com suas questões emocionais e desenvolver seu potencial.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className={`bg-[${colors.background.white}] p-8 rounded-lg shadow-sm`}>
              <div className={`w-16 h-16 bg-[${colors.background.accent}] rounded-full mb-6`}></div>
              <h3 className={`text-xl font-bold text-[${colors.text.primary}] mb-4`}>Terapia de Casal</h3>
              <p className={`text-[${colors.text.secondary}]`}>
                Acompanhamento especializado para casais que desejam fortalecer sua relação e superar desafios juntos.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className={`bg-[${colors.background.white}] p-8 rounded-lg shadow-sm`}>
              <div className={`w-16 h-16 bg-[${colors.background.accent}] rounded-full mb-6`}></div>
              <h3 className={`text-xl font-bold text-[${colors.text.primary}] mb-4`}>Orientação Profissional</h3>
              <p className={`text-[${colors.text.secondary}]`}>
                Apoio no processo de escolha e desenvolvimento profissional, ajudando você a encontrar seu caminho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 bg-[${colors.background.white}]`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-[${colors.text.primary}] text-center mb-12`}>Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className={`bg-[${colors.background.light}] p-8 rounded-lg`}>
              <p className={`text-[${colors.text.secondary}] italic mb-4`}>
                &ldquo;A terapia com a Bruna tem sido fundamental para meu desenvolvimento pessoal. 
                Sua abordagem acolhedora e profissional me ajudou a superar desafios importantes.&rdquo;
              </p>
              <p className={`text-[${colors.text.primary}] font-semibold`}>- Maria Silva</p>
            </div>

            {/* Testimonial 2 */}
            <div className={`bg-[${colors.background.light}] p-8 rounded-lg`}>
              <p className={`text-[${colors.text.secondary}] italic mb-4`}>
                &ldquo;O trabalho da Bruna é excepcional. Sua dedicação e empatia criam um ambiente 
                seguro para explorarmos questões profundas e encontrarmos soluções.&rdquo;
              </p>
              <p className={`text-[${colors.text.primary}] font-semibold`}>- João Santos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
