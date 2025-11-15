import { useRef, useState } from "react";
import "./App.css";

function App() {
  const roletaRef = useRef<HTMLImageElement>(null);
  const [girando, setGirando] = useState(false);

  const girar = () => {
  if (girando) return;
  setGirando(true);

  const roleta = roletaRef.current;
  if (!roleta) return;

  // 1) RESETAR transform (instantâneo, sem animação)
  roleta.style.transition = "none";
  roleta.style.transform = "translate(-50%, -50%) rotate(0deg)";

  // 2) Forçar repaint para garantir que o navegador processe o reset
  void roleta.offsetWidth;

  // 3) Agora aplica o giro real
  const duracao = Math.random() * (17 - 5) + 5;
  const voltas = 360 * (Math.random() * (123 - 15));
  const anguloFinal = voltas + Math.floor(Math.random() * 360);

  roleta.style.transition = `transform ${duracao}s cubic-bezier(0.1, 1, 0.3, 1)`;
  roleta.style.transform =
    `translate(-50%, -50%) rotate(${anguloFinal}deg)`;

  setTimeout(() => setGirando(false), duracao * 1000);
};



  return (
    <div className="app">
      <div className="roleta-wrapper">

        {/* ROLETA */}
        <img
          ref={roletaRef}
          src="/src/Images/Roleta.png"
          className="roleta-img"
        />

        {/* SETA */}
        <img
          src="/src/Images/Seta.png"
          className="seta-img"
        />
      </div>

      {/* BOTÃO */}
      <button onClick={girar} disabled={girando} className="botao-girar">
        JOGAR
      </button>
    </div>
  );
}

export default App;
