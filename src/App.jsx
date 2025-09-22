
import './App.css'

function Flower({ style }) {
  return (
    <div className="flower" style={style}>
      <div className="petal petal1" />
      <div className="petal petal2" />
      <div className="petal petal3" />
      <div className="petal petal4" />
      <div className="center" />
    </div>
  );
}

function App() {
  // Generar posiciones y animaciones aleatorias para las flores
  const flowers = Array.from({ length: 14 }).map((_, i) => {
    const left = Math.random() * 80 + '%';
    const top = Math.random() * 60 + 20 + '%';
    const floatDuration = 3 + Math.random() * 3;
    const rotateDuration = 6 + Math.random() * 6;
    return (
      <Flower
        key={i}
        style={{
          left,
          top,
          animationDuration: `${floatDuration}s, ${rotateDuration}s`,
          zIndex: 1,
        }}
      />
    );
  });

  return (
    <div className="container">
      <div className="flowers-area">
        {flowers}
      </div>
      <div className="greeting center-greeting">
        Feliz 21 Wendy, tu Beffo Alberth ❤️
      </div>
    </div>
  );
}

export default App
