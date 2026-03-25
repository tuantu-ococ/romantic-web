import React from "react";

export default function RomanticFlowerSurprise() {
  const photos = [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=600&auto=format&fit=crop",
  ];

  const message = `Gửi em,\nCảm ơn em đã xuất hiện và làm cho những ngày bình thường của anh trở nên đặc biệt hơn.\nAnh làm trang web nhỏ này chỉ để nói rằng: anh rất trân trọng em, rất nhớ em, và rất thương em. Mỗi bông hoa nở ra là một điều anh muốn dành cho em: sự dịu dàng, niềm vui, và một chút lãng mạn nho nhỏ.\nKhi anh làm món quà nhỏ này thì anh nhớ ra mình không có một bức ảnh chung nào. Em có muốn lấp đầy những bức ảnh kia bằng ảnh chụp chung của chúng mình không?\nYêu em nhiều. ❤️`;

  const fallingPhotos = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    src: photos[i % photos.length],
    left: `${4 + ((i * 6.1) % 88)}%`,
    delay: `${7 + i * 0.45}s`,
    duration: `${8 + (i % 5)}s`,
    rotate: `${-16 + (i % 7) * 6}deg`,
    size: `${58 + (i % 4) * 16}px`,
  }));

  const audioRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.6;
    audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch (error) {
      console.error("Không thể phát nhạc:", error);
    }
  };

  return (
    <div style={pageStyle}>
      <audio ref={audioRef} src="/music/Paper_Thin_Walls.mp3" loop />

      <button onClick={toggleMusic} style={musicButtonStyle}>
        {playing ? "🔊 Tắt nhạc" : "🎵 Bật nhạc"}
      </button>

      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          width: 100%;
          min-height: 100%;
          overflow-x: hidden;
          font-family: Arial, Helvetica, sans-serif;
          background: #06111f;
        }

        * { box-sizing: border-box; }

        .sky {
          background:
            radial-gradient(circle at 50% 35%, rgba(59,130,246,0.18), transparent 30%),
            radial-gradient(circle at 20% 20%, rgba(168,85,247,0.12), transparent 22%),
            radial-gradient(circle at 80% 15%, rgba(236,72,153,0.12), transparent 20%),
            linear-gradient(180deg, #071120 0%, #081423 40%, #030812 100%);
        }

        .sparkle {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(255,255,190,1) 0%, rgba(255,255,190,0.1) 70%, transparent 100%);
          filter: blur(0.5px);
          animation: twinkle 2.4s infinite ease-in-out;
          opacity: 0;
        }

        @keyframes twinkle {
          0%, 100% { transform: scale(0.5); opacity: 0.18; }
          50% { transform: scale(1.7); opacity: 1; }
        }

        .ground {
          position: absolute;
          left: 50%;
          bottom: -110px;
          transform: translateX(-50%);
          width: 140vw;
          height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle at 50% 25%, rgba(52,211,153,0.22), rgba(5,25,15,0.96) 60%);
          filter: blur(2px);
        }

        .flower-stage {
          position: relative;
          width: min(72vw, 520px);
          height: min(78vh, 680px);
          z-index: 3;
        }

        .stem {
          position: absolute;
          bottom: 145px;
          width: 9px;
          border-radius: 9999px;
          transform-origin: bottom center;
          background: linear-gradient(180deg, #9eff9a 0%, #43df67 35%, #15783a 100%);
          box-shadow: 0 0 12px rgba(88, 255, 122, 0.28);
          animation: stemGrow 2.3s ease-out forwards;
          height: 0;
        }

        .stem.s1 { left: 36.5%; height: 222px; animation-delay: 0.25s; transform: rotate(-14deg); }
        .stem.s2 { left: 49.6%; height: 318px; animation-delay: 0.8s; transform: rotate(0deg); }
        .stem.s3 { left: 62.2%; height: 236px; animation-delay: 1.2s; transform: rotate(13deg); }

        @keyframes stemGrow {
          from { height: 0; opacity: 0.35; }
          to { opacity: 1; }
        }

        .leaf {
          position: absolute;
          width: 86px;
          height: 34px;
          border-radius: 100% 0 100% 0;
          background: linear-gradient(135deg, #98ff9f 0%, #28b856 58%, #13733a 100%);
          box-shadow: inset -10px -8px 14px rgba(0,0,0,0.15), 0 0 14px rgba(95,255,135,0.18);
          opacity: 0;
          animation: leafGrow 0.9s ease-out forwards;
        }

        .leaf::after {
          content: "";
          position: absolute;
          left: 12%;
          right: 12%;
          top: 50%;
          height: 2px;
          background: rgba(255,255,255,0.35);
          transform: rotate(-14deg);
        }

        .l1 { left: 30%; bottom: 246px; animation-delay: 1.15s; transform: rotate(-42deg) scale(0.2); }
        .l2 { left: 51%; bottom: 354px; animation-delay: 1.8s; transform: rotate(18deg) scale(0.2); }
        .l3 { left: 35%; bottom: 330px; animation-delay: 1.45s; transform: rotate(30deg) scale(0.2); }
        .l4 { left: 55%; bottom: 293px; animation-delay: 2.05s; transform: rotate(28deg) scale(0.2); }
        .l5 { left: 64%; bottom: 240px; animation-delay: 1.7s; transform: rotate(-34deg) scale(0.2); }

        @keyframes leafGrow {
          0% { opacity: 0; }
          100% { opacity: 1; transform: rotate(var(--r, 0deg)) scale(1); }
        }

        .flower {
          position: absolute;
          width: 124px;
          height: 160px;
          opacity: 1;
          filter: drop-shadow(0 0 14px rgba(255, 105, 180, 0.18));
        }

        .f1 { left: 14%; bottom: 322px; }
        .f2 { left: 37%; bottom: 410px; width: 138px; height: 182px; }
        .f3 { left: 62%; bottom: 330px; }

        .flower-svg {
          overflow: visible;
          width: 100%;
          height: 100%;
        }

        .bud-body {
          transform-box: fill-box;
          transform-origin: center bottom;
          animation: budRise 0.9s ease-out forwards;
          opacity: 0;
        }

        .f1 .bud-body { animation-delay: 2.2s; }
        .f2 .bud-body { animation-delay: 2.8s; }
        .f3 .bud-body { animation-delay: 3.2s; }

        .petal-left, .petal-right, .petal-center, .petal-inner-left, .petal-inner-right {
          transform-box: fill-box;
          transform-origin: center bottom;
          opacity: 0;
        }

        .f1 .petal-left, .f1 .petal-right, .f1 .petal-center, .f1 .petal-inner-left, .f1 .petal-inner-right { animation-delay: 3.05s; }
        .f2 .petal-left, .f2 .petal-right, .f2 .petal-center, .f2 .petal-inner-left, .f2 .petal-inner-right { animation-delay: 3.7s; }
        .f3 .petal-left, .f3 .petal-right, .f3 .petal-center, .f3 .petal-inner-left, .f3 .petal-inner-right { animation-delay: 4.15s; }

        .petal-left { animation: openLeft 1s cubic-bezier(.2,.8,.2,1) forwards; }
        .petal-right { animation: openRight 1s cubic-bezier(.2,.8,.2,1) forwards; }
        .petal-center { animation: openCenter 0.9s ease-out forwards; }
        .petal-inner-left { animation: openInnerLeft 0.8s ease-out forwards; }
        .petal-inner-right { animation: openInnerRight 0.8s ease-out forwards; }

        .flower-glow {
          opacity: 0;
          animation: flowerGlow 1.3s ease-out forwards;
        }

        .f1 .flower-glow { animation-delay: 3s; }
        .f2 .flower-glow { animation-delay: 3.65s; }
        .f3 .flower-glow { animation-delay: 4.1s; }

        @keyframes budRise {
          0% { opacity: 0; transform: translateY(18px) scale(0.72); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes openLeft {
          0% { opacity: 0; transform: rotate(0deg) scaleY(0.55); }
          100% { opacity: 1; transform: rotate(-28deg) scaleY(1); }
        }

        @keyframes openRight {
          0% { opacity: 0; transform: rotate(0deg) scaleY(0.55); }
          100% { opacity: 1; transform: rotate(28deg) scaleY(1); }
        }

        @keyframes openCenter {
          0% { opacity: 0; transform: scaleY(0.55) translateY(8px); }
          100% { opacity: 1; transform: scaleY(1) translateY(0); }
        }

        @keyframes openInnerLeft {
          0% { opacity: 0; transform: rotate(-8deg) scale(0.55); }
          100% { opacity: 1; transform: rotate(-18deg) scale(1); }
        }

        @keyframes openInnerRight {
          0% { opacity: 0; transform: rotate(8deg) scale(0.55); }
          100% { opacity: 1; transform: rotate(18deg) scale(1); }
        }

        @keyframes flowerGlow {
          0% { opacity: 0; transform: scale(0.75); }
          100% { opacity: 1; transform: scale(1); }
        }

        .photo {
          position: absolute;
          top: -110px;
          border-radius: 18px;
          padding: 5px;
          background: rgba(255,255,255,0.9);
          box-shadow: 0 14px 30px rgba(0,0,0,0.24);
          opacity: 0;
          animation: fall linear infinite;
          z-index: 2;
        }

        .photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 14px;
        }

        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(-10deg) scale(0.9); opacity: 0; }
          10% { opacity: 0.95; }
          100% { transform: translateY(115vh) rotate(18deg) scale(1); opacity: 0; }
        }

        .glow-ring {
          position: absolute;
          left: 50%;
          top: 46%;
          width: 180px;
          height: 180px;
          transform: translate(-50%, -50%);
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.12);
          animation: pulseRing 2.8s ease-in-out infinite;
          z-index: 1;
        }

        .gr2 { animation-delay: 1.1s; width: 240px; height: 240px; }
        .gr3 { animation-delay: 1.8s; width: 300px; height: 300px; }

        @keyframes pulseRing {
          0%, 100% { opacity: 0.18; transform: translate(-50%, -50%) scale(0.96); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.06); }
        }

        .message-button {
          animation: revealButton 1s ease forwards;
          animation-delay: 6.2s;
          opacity: 0;
          transform: translateY(22px);
        }

        @keyframes revealButton {
          to { opacity: 1; transform: translateY(0); }
        }

        .grass {
          position: absolute;
          bottom: 118px;
          width: 4px;
          border-radius: 9999px;
          background: linear-gradient(180deg, #6cff6b 0%, #18793b 100%);
          transform-origin: bottom center;
          opacity: 0;
          animation: grassGrow 1.3s ease-out forwards;
          box-shadow: 0 0 12px rgba(85, 255, 125, 0.28);
        }

        @keyframes grassGrow {
          from { height: 0; opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <RomanticScene fallingPhotos={fallingPhotos} message={message} />
    </div>
  );
}

function RomanticScene({ fallingPhotos, message }) {
  const [open, setOpen] = React.useState(false);

  const sparkles = [
    ["12%", "18%", "0s"],
    ["24%", "9%", "0.8s"],
    ["30%", "24%", "1.5s"],
    ["74%", "17%", "0.3s"],
    ["84%", "10%", "1.1s"],
    ["67%", "30%", "2s"],
    ["20%", "70%", "1.3s"],
    ["80%", "66%", "0.4s"],
    ["55%", "14%", "2.1s"],
    ["47%", "8%", "1.7s"],
    ["9%", "54%", "0.9s"],
    ["91%", "42%", "1.9s"],
  ];

  const grass = Array.from({ length: 20 }, (_, i) => ({
    left: `${18 + i * 3.2}%`,
    height: `${50 + (i % 7) * 18}px`,
    rotate: `${-20 + (i % 9) * 5}deg`,
    delay: `${1.1 + i * 0.1}s`,
  }));

  return (
    <div className="sky" style={sceneStyle}>
      <div className="ground" />
      <div className="glow-ring" />
      <div className="glow-ring gr2" />
      <div className="glow-ring gr3" />

      {sparkles.map(([left, top, delay], i) => (
        <div key={i} className="sparkle" style={{ left, top, animationDelay: delay }} />
      ))}

      {fallingPhotos.map((item) => (
        <div
          key={item.id}
          className="photo"
          style={{
            left: item.left,
            width: item.size,
            height: item.size,
            animationDelay: item.delay,
            animationDuration: item.duration,
            transform: `rotate(${item.rotate})`,
          }}
        >
          <img src={item.src} alt="memory" />
        </div>
      ))}

      <div className="flower-stage">
        {grass.map((g, i) => (
          <div
            key={i}
            className="grass"
            style={{
              left: g.left,
              height: g.height,
              transform: `rotate(${g.rotate})`,
              animationDelay: g.delay,
            }}
          />
        ))}

        <div className="stem s1" />
        <div className="stem s2" />
        <div className="stem s3" />

        <div className="leaf l1" style={{ ["--r"]: "-42deg" }} />
        <div className="leaf l2" style={{ ["--r"]: "18deg" }} />
        <div className="leaf l3" style={{ ["--r"]: "-14deg" }} />
        <div className="leaf l4" style={{ ["--r"]: "28deg" }} />
        <div className="leaf l5" style={{ ["--r"]: "-34deg" }} />

        <Flower className="flower f1" />
        <Flower className="flower f2" />
        <Flower className="flower f3" />

        <div style={messageWrapStyle}>
          <div style={subtitleStyle}>Một món quà nhỏ dành cho em</div>
          <button onClick={() => setOpen(true)} className="message-button" style={messageButtonStyle}>
            💌 Mở lời nhắn
          </button>
        </div>
      </div>

      {open && (
        <div style={overlayStyle}>
          <div style={cardStyle}>
            <button onClick={() => setOpen(false)} style={closeButtonStyle}>
              ✕
            </button>
            <div style={cardTitleStyle}>💖 Lời nhắn dành cho em</div>
            <div style={cardTextStyle}>{message}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function Flower({ className = "" }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 160 200" className="flower-svg" fill="none">
        <defs>
          <linearGradient id="budPink" x1="80" y1="20" x2="80" y2="154" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff9bc7" />
            <stop offset="45%" stopColor="#ff5fa7" />
            <stop offset="100%" stopColor="#d92d7a" />
          </linearGradient>
          <linearGradient id="budDark" x1="80" y1="34" x2="80" y2="166" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff77b5" />
            <stop offset="100%" stopColor="#b9115d" />
          </linearGradient>
          <radialGradient id="roseGlow" cx="50%" cy="55%" r="50%">
            <stop offset="0%" stopColor="rgba(255,214,234,0.85)" />
            <stop offset="100%" stopColor="rgba(255,214,234,0)" />
          </radialGradient>
        </defs>

        <ellipse className="flower-glow" cx="80" cy="84" rx="42" ry="50" fill="url(#roseGlow)" />

        <g className="bud-body">
          <path d="M80 158C59 158 45 143 43 120C40 91 52 58 80 44C108 58 120 91 117 120C115 143 101 158 80 158Z" fill="url(#budDark)" opacity="0.28" />
          <path className="petal-left" d="M80 153C64 153 50 142 46 121C41 94 49 68 72 48C78 66 81 91 80 153Z" fill="url(#budPink)" />
          <path className="petal-right" d="M80 153C96 153 110 142 114 121C119 94 111 68 88 48C82 66 79 91 80 153Z" fill="url(#budPink)" />
          <path className="petal-center" d="M80 154C68 154 58 145 56 126C53 101 61 72 80 50C99 72 107 101 104 126C102 145 92 154 80 154Z" fill="#ff75b8" />
          <path className="petal-inner-left" d="M77 144C69 140 64 133 63 121C61 103 66 84 77 65C80 81 81 108 77 144Z" fill="#ffb2d5" opacity="0.95" />
          <path className="petal-inner-right" d="M83 144C91 140 96 133 97 121C99 103 94 84 83 65C80 81 79 108 83 144Z" fill="#ffb2d5" opacity="0.95" />
          <path d="M80 158C72 158 65 154 62 148C68 150 74 151 80 151C86 151 92 150 98 148C95 154 88 158 80 158Z" fill="#ff91c6" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  overflow: "hidden",
  background: "#06111f",
  color: "white",
  position: "relative",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const sceneStyle = {
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 16px",
  overflow: "hidden",
};

const musicButtonStyle = {
  position: "absolute",
  top: 20,
  right: 20,
  zIndex: 50,
  padding: "10px 14px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.2)",
  cursor: "pointer",
  color: "white",
};

const messageWrapStyle = {
  position: "absolute",
  left: "50%",
  bottom: "48px",
  transform: "translateX(-50%)",
  textAlign: "center",
  zIndex: 10,
  width: "100%",
  padding: "0 16px",
};

const subtitleStyle = {
  color: "rgba(255,255,255,0.7)",
  fontSize: "16px",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  marginBottom: "16px",
};

const messageButtonStyle = {
  borderRadius: "999px",
  padding: "12px 24px",
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

const overlayStyle = {
  position: "absolute",
  inset: 0,
  zIndex: 30,
  background: "rgba(0,0,0,0.5)",
  backdropFilter: "blur(6px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const cardStyle = {
  width: "100%",
  maxWidth: "720px",
  borderRadius: "28px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.10)",
  backdropFilter: "blur(18px)",
  padding: "24px 28px",
  position: "relative",
  boxShadow: "0 25px 80px rgba(0,0,0,0.45)",
};

const closeButtonStyle = {
  position: "absolute",
  right: "16px",
  top: "16px",
  width: "40px",
  height: "40px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.10)",
  border: "none",
  color: "white",
  cursor: "pointer",
};

const cardTitleStyle = {
  fontSize: "30px",
  marginBottom: "12px",
  fontWeight: 700,
};

const cardTextStyle = {
  color: "rgba(255,255,255,0.85)",
  lineHeight: 1.9,
  whiteSpace: "pre-line",
  fontSize: "17px",
};