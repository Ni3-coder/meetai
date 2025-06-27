"use client";

export const HomeView = () => {
  return (
    <div className="flex flex-col p-6 gap-y-6 max-w-4xl mx-auto text-gray-800">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to Meet-AI</h1>
        <p className="text-lg text-gray-600">
          Your smart assistant for intelligent meetings.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-2">🚀 Create AI Agents</h2>
        <p>
          Easily create and configure intelligent AI agents tailored to your meeting needs.
          These agents can guide discussions, answer questions, and assist during live calls.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-2">📅 Arrange Smart Meetings</h2>
        <p>
          Schedule meetings where your AI agents can join, participate, and assist in real-time.
          Meetings are seamless, efficient, and supported by your custom-built AI.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-2">🎥 Get Recordings & Transcripts</h2>
        <p>
          After every meeting, receive a complete video recording and a detailed transcript.
          Perfect for reviewing key discussions and sharing with your team.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-2">💬 Post-Meeting Chat</h2>
        <p>
          Continue the conversation even after the meeting ends. Use the chat interface to interact
          with your AI agent about the meeting content and follow-up actions.
        </p>
      </section>

      <section className="text-center mt-8">
        <p className="text-gray-600">
          Ready to revolutionize your meetings? <span className="font-semibold">Start by creating your first agent!</span>
        </p>
      </section>
    </div>
  );
};
