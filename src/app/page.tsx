export default function Home() {
  return (
    <main className="min-h-screen min-h-[100dvh] bg-amber-50 flex items-center justify-center px-6 py-12 md:py-12">
      <div className="max-w-xl w-full">
        <div className="text-center space-y-8 pt-safe">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              Lukas Wesemann, PhD
            </h1>
            <p className="text-lg md:text-xl font-serif text-gray-700 leading-relaxed max-w-3xl mx-auto text-justify">
              Hi, I build AI - the models and the products. In academia, I researched nanotechnology to make AI faster. In industry, I helped train Australia's first LLMs (Matilda and Maincoder) and led the first live agentic payment transaction with Mastercard in Asia Pacific. Across both, I've spent 10+ years leading research and product teams at the frontier. Outside the lab, I co-founded MLAI, Australia's largest AI startup community.
            </p>
            
            {/* Contact links */}
            <div className="pt-4 flex items-center justify-center space-x-8">
              <a 
                href="https://www.linkedin.com/in/lukaswesemann/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-serif text-gray-700 hover:text-gray-600 transition-colors underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500"
              >
                LinkedIn
              </a>
              
              <a 
                href="https://scholar.google.com/citations?user=v3U1mngAAAAJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-serif text-gray-700 hover:text-gray-600 transition-colors underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500"
              >
                Google Scholar
              </a>
              
              <a 
                href="/essays"
                className="font-serif text-gray-700 hover:text-gray-600 transition-colors underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500"
              >
                Essays
              </a>
            </div>
          </div>

          {/* Portfolio Items */}
          <div className="space-y-6 pt-4">
            <div className="space-y-4">
              <div className="text-left max-w-md mx-auto pl-4 md:pl-0">
                <h3 className="font-serif text-gray-800 font-medium text-lg">
                  <a 
                    href="https://www.maincode.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gray-600 transition-colors"
                  >
                    Maincode
                  </a>
                  {" "}- AI Researcher
                </h3>
                <p className="text-gray-600 font-serif">since April 2025</p>
                <a 
                  href="https://www.maincode.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-serif text-gray-600 hover:text-gray-800 transition-colors underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500"
                >
                  maincode.com
                </a>
              </div>

              <div className="text-left max-w-md mx-auto pl-4 md:pl-0">
                <h3 className="font-serif text-gray-800 font-medium text-lg">
                  <a 
                    href="https://mlai.au/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gray-600 transition-colors"
                  >
                    MLAI
                  </a>
                  {" "}- Co-founder
                </h3>
                <p className="text-gray-600 font-serif">2023 - 2026</p>
                <a 
                  href="https://mlai.au/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-serif text-gray-600 hover:text-gray-800 transition-colors underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500"
                >
                  mlai.au
                </a>
              </div>

              <div className="text-left max-w-md mx-auto pl-4 md:pl-0">
                <h3 className="font-serif text-gray-800 font-medium text-lg">
                  University of Melbourne - Postdoc, Nanotechnology
                </h3>
                <p className="text-gray-600 font-serif">2021 - 2025</p>
              </div>

              <div className="text-left max-w-md mx-auto pl-4 md:pl-0">
                <h3 className="font-serif text-gray-800 font-medium text-lg">
                  University of Melbourne - PhD Physics
                </h3>
                <p className="text-gray-600 font-serif">2017 - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
