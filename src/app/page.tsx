import VoiceRecorder from "../components/VoiceRecorder";
import NotesList from "../components/NotesList";
import { DeepgramContextProvider } from "../lib/contexts/DeepgramContext";

export default function Home() {
  return (
    <DeepgramContextProvider>
      <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Voice Notes App
          </h1>
          <VoiceRecorder />
          <NotesList />
        </div>
      </main>
    </DeepgramContextProvider>
  );
}
