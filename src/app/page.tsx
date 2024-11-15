export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MAINSAP</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-700">
            This is the main content of the page. Use this area to provide your
            users with valuable information.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MAINSAP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
