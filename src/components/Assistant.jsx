
import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';

const suggestions = [
  'Tell me about Fizza',
  'What are her skills?',
  'Show projects',
  'Work experience',
  'How can I contact her?',
];

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: "Hi! I'm Fizza's AI portfolio assistant. Ask me about her skills, experience, or projects.",
    },
  ]);

  const end = useRef(null);
  const busy = useRef(false);

  useEffect(() => {
    if (open) {
      end.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open, loading]);

  const send = async (value = input) => {
    const clean = value.trim();

    if (!clean || busy.current) return;

    busy.current = true;
    setLoading(true);
    setInput('');

    const history = messages
      .filter((message) => message.from === 'user' || message.from === 'bot')
      .map((message) => ({
        role: message.from === 'user' ? 'user' : 'model',
        text: message.text,
      }));

    setMessages((old) => [
      ...old,
      { from: 'user', text: clean },
    ]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: clean,
          history: history.slice(-10),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setMessages((old) => [
        ...old,
        { from: 'bot', text: data.reply },
      ]);
    } catch (error) {
      setMessages((old) => [
        ...old,
        {
          from: 'bot',
          text: 'Sorry, I could not respond right now. Please try again.',
        },
      ]);

      console.error('Chatbot error:', error);
    } finally {
      busy.current = false;
      setLoading(false);
    }
  };

  return (
    <div className="assistant-wrap">
      {open && (
        <section
          className="assistant-panel"
          aria-label="Portfolio assistant"
        >
          <div className="assistant-head">
            <span>
              <Sparkles size={17} />
              Portfolio AI Assistant
            </span>

            <button
              type="button"
              aria-label="Close assistant"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          <div
            className="assistant-messages"
            aria-live="polite"
          >
            {messages.map((message, index) => (
              <div
                className={`assistant-message ${message.from}`}
                key={index}
              >
                {message.text}
              </div>
            ))}

            {loading && (
              <div className="assistant-message bot">
                Thinking...
              </div>
            )}

            <div ref={end} />
          </div>

          <div className="assistant-suggestions">
            {suggestions.map((suggestion) => (
              <button
                type="button"
                key={suggestion}
                disabled={loading}
                onClick={() => send(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>

          <form
            className="assistant-form"
            onSubmit={(event) => {
              event.preventDefault();
              send();
            }}
          >
            <input
              aria-label="Ask the assistant"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Fizza..."
              disabled={loading}
            />

            <button
              type="submit"
              aria-label="Send message"
              disabled={loading || !input.trim()}
            >
              <Send size={17} />
            </button>
          </form>

          <div className="assistant-disclaimer">
            AI-powered portfolio assistant
          </div>
        </section>
      )}

      <button
        type="button"
        className="assistant-fab"
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        aria-label={
          open
            ? 'Close portfolio assistant'
            : 'Open portfolio assistant'
        }
      >
        {open ? <X size={22} /> : <Bot size={23} />}

        <span>{open ? 'Close' : 'Ask Fizza AI'}</span>
      </button>
    </div>
  );
}
