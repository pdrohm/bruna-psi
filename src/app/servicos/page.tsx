import Link from "next/link";
import { colors } from "../../styles/colors";

export default function Services() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-[${colors.background.white}] to-[${colors.background.light}] py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold text-[${colors.text.primary}] mb-12 text-center`}>Serviços</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={`bg-[${colors.background.white}] rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300`}>
            <h2 className={`text-2xl font-semibold text-[${colors.text.primary}] mb-4`}>Psicoterapia Individual</h2>
            <p className={`text-[${colors.text.secondary}] leading-relaxed mb-6`}>
              Atendimento personalizado para trabalhar questões específicas e promover seu desenvolvimento pessoal. 
              Durante as sessões, criamos um espaço seguro para explorar suas emoções, pensamentos e comportamentos.
            </p>
            <ul className="space-y-3">
              <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                <span>Sessões de 50 minutos</span>
              </li>
              <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                <span>Atendimento presencial e online</span>
              </li>
              <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                <span>Horários flexíveis</span>
              </li>
              <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                <span>Sigilo profissional garantido</span>
              </li>
            </ul>
          </div>

          <div className={`bg-[${colors.background.white}] rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300`}>
            <h2 className={`text-2xl font-semibold text-[${colors.text.primary}] mb-4`}>Terapia de Casal</h2>
            <p className={`text-[${colors.text.secondary}] leading-relaxed mb-6`}>
              Acompanhamento especializado para casais que desejam fortalecer seu relacionamento, 
              melhorar a comunicação e resolver conflitos de forma saudável.
            </p>
            <ul className="space-y-3">
              <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                <span>Sessões de 60 minutos</span>
              </li>
              <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                <span>Foco em comunicação e resolução de conflitos</span>
              </li>
              <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                <span>Desenvolvimento de habilidades relacionais</span>
              </li>
              <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                <span>Atendimento presencial e online</span>
              </li>
            </ul>
          </div>

          <div className={`bg-[${colors.background.white}] rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300`}>
            <h2 className={`text-2xl font-semibold text-[${colors.text.primary}] mb-4`}>Consultoria Online</h2>
            <p className={`text-[${colors.text.secondary}] leading-relaxed mb-6`}>
              Atendimento remoto com a mesma qualidade e compromisso do atendimento presencial. 
              Ideal para quem busca flexibilidade de horários e localização.
            </p>
            <ul className="space-y-3">
              <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                <span>Plataforma segura e confiável</span>
              </li>
              <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                <span>Mesma qualidade do atendimento presencial</span>
              </li>
              <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                <span>Horários flexíveis</span>
              </li>
              <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                <span>Atendimento em todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className={`text-[${colors.text.secondary}] mb-6`}>
            Está interessado em algum dos serviços? Entre em contato para agendar uma consulta ou tirar suas dúvidas.
          </p>
          <Link 
            href="/contato" 
            className={`inline-block bg-[${colors.primary.main}] text-white px-8 py-3 rounded-full font-medium hover:bg-[${colors.primary.dark}] transition-colors duration-200 shadow-lg hover:shadow-xl`}
          >
            Agende uma Consulta
          </Link>
        </div>
      </div>
    </div>
  );
} 