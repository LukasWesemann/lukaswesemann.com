export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full">
        <div className="text-center space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
              Lukas Wesemann, PhD
            </h1>
            <p className="text-lg md:text-xl font-serif text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Hi, I'm an AI Researcher at Maincode building sovereign foundation models. 
              I've also co-founded the not-for-profit MLAI, Australia's largest community 
              of AI builders with the mission to support 1000 Australian startups.
            </p>
          </div>

          {/* Portfolio Items */}
          <div className="space-y-6 pt-8">
            <div className="space-y-4">
              <div className="text-left max-w-md mx-auto">
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

              <div className="text-left max-w-md mx-auto">
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
                <p className="text-gray-600 font-serif">since January 2023</p>
                <a 
                  href="https://mlai.au/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-serif text-gray-600 hover:text-gray-800 transition-colors underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500"
                >
                  mlai.au
                </a>
              </div>

              <div className="text-left max-w-md mx-auto">
                <h3 className="font-serif text-gray-800 font-medium text-lg">
                  University of Melbourne - Postdoc, Nanotechnology
                </h3>
                <p className="text-gray-600 font-serif">2021 - 2025</p>
              </div>

              <div className="text-left max-w-md mx-auto">
                <h3 className="font-serif text-gray-800 font-medium text-lg">
                  University of Melbourne - PhD Physics
                </h3>
                <p className="text-gray-600 font-serif">2017 - 2020</p>
              </div>
            </div>
          </div>

          {/* Contact - horizontal arrangement */}
          <div className="pt-8 flex justify-center space-x-8">
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
          </div>
        </div>
      </div>
    </main>
  );
}
