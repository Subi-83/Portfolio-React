import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, SendHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

function normalizeInput(text) {
  return text.trim().toLowerCase();
}

function getPredefinedResponse(input, profile, info, projectItems) {
  const text = normalizeInput(input);

  if (!text) {
    return { text: "Type a message and I will help you quickly." };
  }

  if (text.includes("who are you") || text.includes("about you") || text.includes("introduce")) {
    return {
      text: `${profile.name} is a ${profile.role}. She builds production-oriented apps and interfaces with strong focus on maintainable code and user experience.`,
    };
  }

  if (text.includes("project") || text.includes("show your projects") || text.includes("work")) {
    const projectNames = profile.projects.join(", ");
    const projectPurpose = projectItems
      .map((item) => `${item.title}: ${item.purpose}`)
      .join(" ");
    return {
      text: `Key projects include ${projectNames}. ${projectPurpose}`,
      action: {
        label: "Open Projects",
        targetId: "projects",
      },
    };
  }

  if (text.includes("skill") || text.includes("tech stack") || text.includes("technology")) {
    return {
      text: `Core skills: ${profile.skills.join(", ")}. Current strength areas include Java development, Flutter app delivery, and modern web interfaces.`,
    };
  }

  if (text.includes("contact") || text.includes("email") || text.includes("phone") || text.includes("reach")) {
    return {
      text: `You can reach ${profile.name} at ${info.email} or ${info.phone}. Location: ${info.location}.`,
    };
  }

  if (text.includes("resume") || text.includes("cv")) {
    return {
      text: `You can download the resume from the hero section using the Download CV button, or directly at ${window.location.origin}${info.cvUrl}.`,
    };
  }

  if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
    return {
      text: `Hello. I can help with projects, skills, contact details, and resume information for ${profile.name}.`,
    };
  }

  return {
    text: `I can help with: who ${profile.name} is, projects, skills, contact details, and resume access. Try asking "Show your projects" or "What are your skills?"`,
    action: {
      label: "View Projects",
      targetId: "projects",
    },
  };
}

async function getDynamicResponse(input, context) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (!apiKey) return null;

  const model = import.meta.env.VITE_OPENAI_MODEL || "gpt-4o-mini";

  const systemPrompt = `You are a portfolio chatbot for ${context.profile.name}. Keep answers concise and professional. Focus only on this profile: role ${context.profile.role}, projects ${context.profile.projects.join(", ")}, skills ${context.profile.skills.join(", ")}, contact ${context.info.email}, ${context.info.phone}.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.4,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: input },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("OpenAI API call failed");
  }

  const data = await response.json();
  return data?.choices?.[0]?.message?.content?.trim() || null;
}

function useTypingEffect(fullText, enabled, speed = 14) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!enabled) {
      setTypedText(fullText || "");
      return;
    }

    setTypedText("");
    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setTypedText(fullText.slice(0, index));
      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [enabled, fullText, speed]);

  return typedText;
}

export default function Chatbot({ profile, info, projectItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "bot",
      text: `Hi, I am ${profile.name}'s assistant. Ask me about projects, skills, contact details, or resume.`,
    },
  ]);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const viewportRef = useRef(null);

  const lastMessage = messages[messages.length - 1];
  const shouldAnimateTyping = Boolean(isBotTyping && lastMessage?.role === "bot");
  const animatedText = useTypingEffect(lastMessage?.text || "", shouldAnimateTyping);

  const scrollToSection = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (!viewportRef.current) return;
    viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
  }, [messages, animatedText]);

  const quickPrompts = useMemo(
    () => ["Who are you?", "Show your projects", "What are your skills?", "Contact details", "Resume"],
    []
  );

  const sendMessage = async (rawMessage) => {
    const messageText = rawMessage.trim();
    if (!messageText || isBotTyping) return;

    const userMessage = {
      id: `${Date.now()}-user`,
      role: "user",
      text: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsBotTyping(true);

    let botText = null;
    let botAction = null;
    try {
      botText = await getDynamicResponse(messageText, { profile, info });
    } catch {
      botText = null;
    }

    if (!botText) {
      const predefinedResponse = getPredefinedResponse(messageText, profile, info, projectItems);
      botText = predefinedResponse.text;
      botAction = predefinedResponse.action || null;
    }

    const botMessage = {
      id: `${Date.now()}-bot`,
      role: "bot",
      text: botText,
      action: botAction,
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsBotTyping(false);
  };

  return (
    <>
      <motion.button
        type="button"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl transition hover:bg-slate-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 z-[70] w-[calc(100vw-2rem)] max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
          >
            <header className="flex items-center gap-3 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-200">
                <Bot size={16} />
              </span>
              <div>
                <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">Ask Subitha AI</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Quick answers about profile, projects, and skills</p>
              </div>
            </header>

            <div ref={viewportRef} className="max-h-[52vh] space-y-3 overflow-y-auto bg-slate-50 px-4 py-4 dark:bg-slate-950/40">
              {messages.map((message, idx) => {
                const isBot = message.role === "bot";
                const isLastBotMessage = idx === messages.length - 1 && isBot;
                const text = isLastBotMessage && shouldAnimateTyping ? animatedText : message.text;

                return (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                    className={`flex ${isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                        isBot
                          ? "bg-white text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200"
                          : "bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950"
                      }`}
                    >
                      {text}
                      {isLastBotMessage && shouldAnimateTyping && (
                        <span className="ml-1 inline-block h-4 w-1 animate-pulse rounded bg-cyan-500 align-middle" />
                      )}
                      {isBot && message.action && (
                        <button
                          type="button"
                          onClick={() => scrollToSection(message.action.targetId)}
                          className="mt-3 inline-flex items-center rounded-full border border-cyan-300 px-3 py-1 text-xs font-semibold text-cyan-700 transition hover:border-cyan-500 hover:text-cyan-800 dark:border-cyan-400/40 dark:text-cyan-100 dark:hover:border-cyan-300"
                        >
                          {message.action.label}
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="border-t border-slate-200 px-4 pb-4 pt-3 dark:border-slate-800">
              <div className="mb-3 flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-100"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about projects, skills, or contact"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-cyan-300"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                  disabled={isBotTyping || !input.trim()}
                  aria-label="Send message"
                >
                  <SendHorizontal size={16} />
                </button>
              </form>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
