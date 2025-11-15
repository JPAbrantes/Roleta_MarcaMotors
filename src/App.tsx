import { useRef, useState } from "react";
import "./App.css";

export default function App() {
  const roletaRef = useRef<HTMLImageElement | null>(null);
  const [girando, setGirando] = useState(false);

  const girar = () => {
    if (girando) return;
    setGirando(true);

    const roleta = roletaRef.current;
    if (!roleta) return setGirando(false);

    roleta.style.transition = "none";
    roleta.style.transform = "translate(-50%, -50%) rotate(0deg)";
    roleta.offsetWidth;

    const duracao = Math.random() * (17 - 8) + 5;
    const voltas = 360 * (Math.random() * (575 - 37));
    const anguloFinal = voltas + Math.floor(Math.random() * 360);

    roleta.style.transition = `transform ${duracao}s cubic-bezier(0.1, 1, 0.3, 1)`;
    roleta.style.transform = `translate(-50%, -50%) rotate(${anguloFinal}deg)`;

    setTimeout(() => setGirando(false), duracao * 1000);
  };

  return (
    <div className="app">
      <div className="roleta-wrapper">
        <img
          ref={roletaRef}
          src="/Roleta.png"
          alt="roleta"
          className="roleta-img"
          draggable={false}
        />
        <img
          src="/Seta.png"
          alt="seta"
          className="seta-img"
          draggable={false}
        />
      </div>

      <button
        className="botao-girar"
        onClick={girar}
        disabled={girando}
      >
        JOGAR
      </button>
    </div>
  );
}
