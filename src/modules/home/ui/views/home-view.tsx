"use client";

export const HomeView = () => {
  return (
    <main className="w-full h-screen overflow-hidden">
      <div className="h-full overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-gray-800">
          <section className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Welcome to Meet-AI</h1>
            <p className="text-lg text-gray-600">
              Your smart assistant for intelligent meetings.
            </p>
          </section>

          <div className="grid gap-6">
            <FeatureCard
              title="🚀 Create AI Agents"
              description="Easily create and configure intelligent AI agents tailored to your meeting needs. These agents can guide discussions, answer questions, and assist during live calls."
            />
            <FeatureCard
              title="📅 Arrange Smart Meetings"
              description="Schedule meetings where your AI agents can join, participate, and assist in real-time. Meetings are seamless, efficient, and supported by your custom-built AI."
            />
            <FeatureCard
              title="🎥 Get Recordings & Transcripts"
              description="After every meeting, receive a complete video recording and a detailed transcript. Perfect for reviewing key discussions and sharing with your team."
            />
            <FeatureCard
              title="💬 Post-Meeting Chat"
              description="Continue the conversation even after the meeting ends. Use the chat interface to interact with your AI agent about the meeting content and follow-up actions."
            />
          </div>

          <section className="text-center mt-10">
            <p className="text-gray-600 text-base sm:text-lg">
              Ready to revolutionize your meetings?{" "}
              <span className="font-semibold">Start by creating your first agent!</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <section className="bg-gray-100 p-5 sm:p-6 lg:p-8 rounded-xl shadow transition hover:shadow-lg">
    <h2 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-sm sm:text-base">{description}</p>
  </section>
);
