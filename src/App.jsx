import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [clickCount, setClickCount] = useState(0); // Number of times the envelope has been clicked
  const [ready, setReady] = useState(false); // Whether the envelope is ready to be opened

  const handleClick = () => {
    if (clickCount === 2) {
      setClickCount(0);
    } else {
      setClickCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    let timeoutId;
    if (clickCount === 2) {
      timeoutId = setTimeout(() => {
        setReady(true);
      }, 400);
    }

    if (clickCount === 0) {
      setReady(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [clickCount]);

  return (
    <div onClick={handleClick} className="container">
      <div className={`wrapper ${clickCount === 2 ? "dissappear" : "appear"}`}>
        <div className="envelope-wrapper">
          <div id="envelope" className={clickCount > 0 ? "open" : "close"}>
            <div className="front flap"></div>
            <div className="front pocket"></div>
            <div className="letter">
              <div className="words line1"></div>
              <div className="words line2"></div>
              <div className="words line3"></div>
              <div className="words line4"></div>
            </div>
            <div className="hearts">
              <div className="heart a1"></div>
              <div className="heart a2"></div>
              <div className="heart a3"></div>
            </div>
          </div>
        </div>
      </div>
      {clickCount === 2 && (
        <div
          className={clickCount === 2 && ready ? "appear" : "dissappear"}
          key={clickCount}
        >
          <div className="letter-wrapper">
            <div className="letter-open">
              <h2 className="title">Feliz San Valentín</h2>
              <p className="message">
                Quiero aprovechar este día para darte un pequeño detalle, ya que
                no suelo hacerlo tan seguido y sé que te gusta recibirlos.
              </p>
              <p className="message">
                Eres una de las personas más importantes en mi vida y me alegra
                llevar ya casi 5 años a tu lado. Me haces muy feliz y te mereces
                lo mejor del mundo por los bonitos sentimientos que tienes.
              </p>
              <p className="message">
                Gracias por todo, por ayudarme a crecer y por ser mi apoyo. Eres
                mi novia y también mi mejor amiga. Te amo mucho.
              </p>
              <p className="signature">Con amor, Diego Rincón ❤️</p>
            </div>
          </div>
        </div>
      )}
      <div className="date">Para Amanda - 14/02/2024</div>
    </div>
  );
}

export default App;
