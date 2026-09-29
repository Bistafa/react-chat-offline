export default function App() {
  return (
    <main className="min-h-dvh bg-[#f3eee8]">
      <div className="mx-auto flex h-dvh w-full max-w-2xl flex-col">
        <section
          aria-label="Historico da conversa"
          className="min-h-0 flex-1 overflow-y-auto"
        />

        <div className="shrink-0 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">
          <section
            aria-label="Composicao da mensagem"
            className="min-h-28 rounded-xl border border-stone-200 bg-white shadow-sm"
          />
        </div>
      </div>
    </main>
  )
}