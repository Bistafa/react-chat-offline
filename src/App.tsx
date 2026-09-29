import { useState } from 'react'
import ChatHistory from './components/ChatHistory'
import RoleToggle from './components/RoleToggle'
import type { ChatMessage, MessageRole } from './types/chat'

const initialMessages: ChatMessage[] = [
  {
    id: 'welcome',
    text: 'Olá! Sua conversa offline começa aqui.',
    role: 'bot',
  },
]

export default function App() {
  const [role, setRole] = useState<MessageRole>('user')

  return (
    <main className="min-h-dvh bg-[#f3eee8]">
      <div className="mx-auto flex h-dvh w-full max-w-2xl flex-col">
        <ChatHistory messages={initialMessages} />

        <div className="shrink-0 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">
          <section
            aria-label="Composição da mensagem"
            className={`rounded-xl border bg-white px-4 py-3 shadow-sm transition-colors ${
              role === 'bot' ? 'border-violet-500' : 'border-stone-200'
            }`}
          >
            <div>
              <p className="mb-2 text-xs font-medium text-stone-500">
                Próxima mensagem
              </p>
              <RoleToggle role={role} onRoleChange={setRole} />
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}