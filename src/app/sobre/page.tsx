import Link from "next/link";
import { colors } from "../../styles/colors";

export default function About() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-[${colors.background.white}] to-[${colors.background.light}] py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl font-bold text-[${colors.text.primary}] mb-8 text-center`}>Sobre Mim</h1>
        
        <div className={`bg-[${colors.background.white}] rounded-2xl shadow-xl p-8`}>
          <div className="space-y-8">
            <p className={`text-lg text-[${colors.text.secondary}] leading-relaxed`}>
              Olá! Sou Bruna, psicóloga formada e apaixonada por ajudar pessoas em seu processo de desenvolvimento pessoal e bem-estar emocional.
            </p>
            
            <div className="space-y-4">
              <h2 className={`text-2xl font-semibold text-[${colors.text.primary}]`}>Minha Formação</h2>
              <ul className={`list-disc list-inside space-y-2 text-[${colors.text.secondary}]`}>
                <li>Graduação em Psicologia</li>
                <li>Especialização em Psicologia Clínica</li>
                <li>Formação em Terapia de Casal</li>
                <li>Atualização constante em novas abordagens e técnicas</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className={`text-2xl font-semibold text-[${colors.text.primary}]`}>Minha Abordagem</h2>
              <p className={`text-[${colors.text.secondary}] leading-relaxed`}>
                Trabalho com uma abordagem humanizada e acolhedora, criando um espaço seguro onde você pode explorar suas questões 
                e encontrar seu próprio caminho. Acredito que cada pessoa é única e merece um atendimento personalizado, 
                respeitando suas individualidades e necessidades específicas.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className={`text-2xl font-semibold text-[${colors.text.primary}]`}>Áreas de Atuação</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                  <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                  <span>Ansiedade e Depressão</span>
                </li>
                <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                  <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                  <span>Desenvolvimento Pessoal</span>
                </li>
                <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                  <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                  <span>Relacionamentos</span>
                </li>
                <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                  <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                  <span>Autoestima e Autoconhecimento</span>
                </li>
                <li className={`flex items-center space-x-2 text-[${colors.text.secondary}]`}>
                  <span className={`w-2 h-2 bg-[${colors.primary.main}] rounded-full`}></span>
                  <span>Gestão de Emoções</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 text-center">
              <Link 
                href="/contato" 
                className={`inline-block bg-[${colors.primary.main}] text-white px-8 py-3 rounded-full font-medium hover:bg-[${colors.primary.dark}] transition-colors duration-200 shadow-lg hover:shadow-xl`}
              >
                Agende uma Consulta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 