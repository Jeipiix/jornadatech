import Image from 'next/image';

const CourseInfo = () => {
  return (
    <div id="courseinfo" className="bg-gradient-to-r from-slate-200 to-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore o Jornada Tech
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Aprenda programação do zero ao avançado, com aulas online, ao vivo, interativas, com suporte sempre que você precisar. abaixo esta tudo que vamos aprender no curso:
          </p>
          
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-100 rounded-lg px-6 pb-8 hover:scale-105 transition-transform">
                <div className="-mt-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Módulo Básico
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Aprenda os fundamentos da programação, incluindo lógica, estruturas de dados e algoritmos.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-100 rounded-lg px-6 pb-8 hover:scale-105 transition-transform">
                <div className="-mt-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Módulo Intermediário
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Desenvolva habilidades com typescript, aprenda a usar react, react-native e next e usar diversas apis para te ajudar no seu desenvolvimento.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-100 rounded-lg px-6 pb-8 hover:scale-105 transition-transform">
                <div className="-mt-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Módulo Avançado
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                   Voce ira desenvolver sua propria rede social com site e aplicativo mobile, alem de um banco de dados completo com firebase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
