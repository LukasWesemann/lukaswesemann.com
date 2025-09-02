interface EssayProps {
  title: string;
  date: string;
  author?: string;
  children: React.ReactNode;
}

export default function Essay({ 
  title, 
  date, 
  author = "Lukas Wesemann",
  children 
}: EssayProps) {
  return (
    <main className="min-h-screen min-h-[100dvh] bg-amber-50 flex items-center justify-center px-8 py-12 md:py-12">
      <div className="max-w-2xl w-full">
        <div className="space-y-8 pt-safe">
          {/* Article Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif text-gray-800 leading-tight">
              {title}
            </h1>
            
            <div className="space-y-2">
              <p className="text-gray-600 font-serif">
                {date}
              </p>
              <p className="text-gray-600 font-serif">
                {author}
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="space-y-6 text-left">
            {children}
          </div>

          {/* Back link */}
          <div className="pt-8 text-center">
            <a 
              href="/essays"
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