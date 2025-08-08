import { MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/5531986947249"
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 px-4 py-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-semibold">Fale no WhatsApp</span>
      </a>
      {showTop && (
        <button
          aria-label="Voltar ao topo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary border border-primary/30 shadow hover:bg-primary hover:text-white transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default FloatingActions;


