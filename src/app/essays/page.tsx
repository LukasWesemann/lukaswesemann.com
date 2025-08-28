export default function EssaysOverview() {
  const essays = [
    {
      title: "The Future of Foundation Models",
      date: "December 15, 2024",
      slug: "future-of-foundation-models"
    },
    {
      title: "Building AI Communities in Australia",
      date: "November 28, 2024",
      slug: "building-ai-communities-australia"
    },
    {
      title: "From Physics to AI: A Research Journey",
      date: "October 12, 2024",
      slug: "from-physics-to-ai-research-journey"
    }
    // Add more essays here as they're created
  ];

  return (
    <main className="min-h-screen min-h-[100dvh] bg-amber-50 flex items-center justify-center px-6 py-12 md:py-12">
      <div className="max-w-2xl w-full">
        <div className="text-center space-y-8 pt-safe">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              Essays
            </h1>
            <p className="text-lg md:text-xl font-serif text-gray-700 leading-relaxed max-w-2xl mx-auto">
              A collection of my notes.
            </p>
          </div>

          {/* Essays List */}
          <div className="space-y-6 pt-4">
            <div className="space-y-6">
              {essays.map((essay) => (
                <div key={essay.slug} className="text-left max-w-sm mx-auto pl-8 md:pl-4">
                                  <h3 className="font-serif text-gray-800 font-medium text-xl">
                  <a 
                    href={`/essays/${essay.slug}`}
                    className="hover:text-gray-600 transition-colors"
                  >
                    {essay.title}
                  </a>
                </h3>
                  <p className="text-gray-600 font-serif">{essay.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Back link */}
          <div className="pt-8 text-center">
            <a 
              href="/"
              className="font-serif text-gray-600 hover:text-gray-800 transition-colors underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500"
            >
              ← back
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 