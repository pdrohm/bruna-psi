import { colors } from "../../styles/colors";

export default function Contact() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-[${colors.background.white}] to-[${colors.background.light}] py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold text-[${colors.text.primary}] mb-12 text-center`}>Contato</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`bg-[${colors.background.white}] rounded-2xl shadow-xl p-8`}>
            <h2 className={`text-2xl font-semibold text-[${colors.text.primary}] mb-6`}>Entre em Contato</h2>
            <p className={`text-[${colors.text.secondary}] mb-8`}>
              Estou aqui para ajudar. Entre em contato para agendar uma consulta ou tirar suas dúvidas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-[${colors.background.accent}] rounded-full flex items-center justify-center flex-shrink-0`}>
                  <svg className={`w-6 h-6 text-[${colors.primary.main}]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg font-medium text-[${colors.text.primary}]`}>WhatsApp</h3>
                  <p className={`text-[${colors.text.secondary}]`}>(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-[${colors.background.accent}] rounded-full flex items-center justify-center flex-shrink-0`}>
                  <svg className={`w-6 h-6 text-[${colors.primary.main}]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg font-medium text-[${colors.text.primary}]`}>E-mail</h3>
                  <p className={`text-[${colors.text.secondary}]`}>contato@brunapsicologa.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-[${colors.background.accent}] rounded-full flex items-center justify-center flex-shrink-0`}>
                  <svg className={`w-6 h-6 text-[${colors.primary.main}]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg font-medium text-[${colors.text.primary}]`}>Endereço</h3>
                  <p className={`text-[${colors.text.secondary}]`}>
                    Rua Exemplo, 123 - Sala 45<br />
                    Bairro - São Paulo/SP
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`bg-[${colors.background.white}] rounded-2xl shadow-xl p-8`}>
            <h2 className={`text-2xl font-semibold text-[${colors.text.primary}] mb-6`}>Agende uma Consulta</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium text-[${colors.text.secondary}] mb-1`}>Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className={`w-full px-4 py-2 border border-[${colors.background.accent}] rounded-lg focus:ring-2 focus:ring-[${colors.primary.main}] focus:border-[${colors.primary.main}] transition-colors duration-200`}
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium text-[${colors.text.secondary}] mb-1`}>E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className={`w-full px-4 py-2 border border-[${colors.background.accent}] rounded-lg focus:ring-2 focus:ring-[${colors.primary.main}] focus:border-[${colors.primary.main}] transition-colors duration-200`}
                />
              </div>

              <div>
                <label htmlFor="phone" className={`block text-sm font-medium text-[${colors.text.secondary}] mb-1`}>Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  className={`w-full px-4 py-2 border border-[${colors.background.accent}] rounded-lg focus:ring-2 focus:ring-[${colors.primary.main}] focus:border-[${colors.primary.main}] transition-colors duration-200`}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium text-[${colors.text.secondary}] mb-1`}>Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  className={`w-full px-4 py-2 border border-[${colors.background.accent}] rounded-lg focus:ring-2 focus:ring-[${colors.primary.main}] focus:border-[${colors.primary.main}] transition-colors duration-200`}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`w-full bg-[${colors.primary.main}] text-white px-8 py-3 rounded-lg font-medium hover:bg-[${colors.primary.dark}] transition-colors duration-200 shadow-lg hover:shadow-xl`}
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 