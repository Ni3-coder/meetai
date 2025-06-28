"use client";

export const HomeView = () => {
  return (
    <main className="w-full h-screen overflow-hidden">
      <div className="h-full overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-gray-800">
          <section className="text-center mb-6">
            <h1 className="text-4xl sm:text-3xl font-bold mb-3">Welcome to Meet-AI</h1>
            <p className="text-lg text-gray-600">
              Your smart assistant for intelligent meetings.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
