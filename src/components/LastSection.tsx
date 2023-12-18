const LastSection = () => {
    return (
      <div id="firstclass" className="bg-gradient-to-r from-teal-600 to-teal-400 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Agende Sua Primeira Aula Gratuita
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-100 sm:mt-4">
              Descubra o poder da programação e inicie sua jornada no mundo tech.
            </p>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-100 sm:mt-4">
              Para mais informações ou para agendar sua aula entre em contato via whatsapp pelo botão abaixo
            </p>
          </div>
  
          <div className="mt-8 flex justify-center">
            <a href="https://wa.me/+5584999495960" 
               className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
               target="_blank" rel="noopener noreferrer">
              Agendar via WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default LastSection;
  