import React, { useState } from "react";
import "./presentation.css";
// Use lightweight local placeholders for icons to avoid runtime import errors
const Placeholder = ({ children, className }) => (
  <div className={className} style={{ fontSize: '1.6rem', display: 'inline-block' }}>{children}</div>
);
const Brain = (props) => <Placeholder {...props}>🧠</Placeholder>;
const Zap = (props) => <Placeholder {...props}>⚡</Placeholder>;
const Globe = (props) => <Placeholder {...props}>🌐</Placeholder>;
const MessageSquare = (props) => <Placeholder {...props}>💬</Placeholder>;

const Presentation = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "როგორ მუშაობს ChatGPT და Claude?",
      subtitle: "AI-ის საფუძვლებიდან თანამედროვე მოდელებამდე",
      content: (
        <div className="centered">
          <Brain className="w-24 h-24 mx-auto text-blue-500" />
          <p>როგორ ესმის კომპიუტერს ჩვენი ენა?</p>
        </div>
      ),
    },
    {
      title: "1. ტოკენიზაცია",
      subtitle: "ტექსტის დაყოფა ნაწილებად",
      content: (
        <div className="text-block">
          <p>გამარჯობა მსოფლიო →</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 12 }}>
            <span style={{ background: '#ecfdf5', padding: '6px 12px', borderRadius: 8 }}>გამარ</span>
            <span style={{ background: '#ecfdf5', padding: '6px 12px', borderRadius: 8 }}>ჯობა</span>
            <span style={{ background: '#ecfdf5', padding: '6px 12px', borderRadius: 8 }}>მსოფ</span>
            <span style={{ background: '#ecfdf5', padding: '6px 12px', borderRadius: 8 }}>ლიო</span>
          </div>
        </div>
      ),
    },
    {
      title: "2. ვექტორიზაცია",
      subtitle: "ტოკენები → რიცხვები",
      content: (
        <div className="text-block">
          <p>გამარჯობა → [0.23, -0.41, 0.88, ...]</p>
        </div>
      ),
    },
    {
      title: "3. ემბედინგი",
      subtitle: "სიტყვების მნიშვნელობა",
      content: (
        <div className="text-block">
          <p>მეფე ≈ დედოფალი ≈ სამეფო 👑</p>
        </div>
      ),
    },
    {
      title: "4. რატომ გვჭირდება ეს",
      subtitle: "კომპიუტერი vs ადამიანი",
      content: (
        <div className="two-col">
          <div className="col">ადამიანს ესმის მნიშვნელობა</div>
          <div className="col">კომპიუტერს ესმის რიცხვი</div>
        </div>
      ),
    },
    {
      title: "5. Seq2Seq",
      subtitle: "პირველი მთარგმნელები",
      content: (
        <div className="centered"><p>Encoder → Decoder</p></div>
      ),
    },
    {
      title: "6. Transformer",
      subtitle: "Attention is all you need",
      content: (
        <div className="centered"><Zap className="w-20 h-20 text-purple-500" /><p>Attention is all you need</p></div>
      ),
    },
    {
      title: "7. Attention",
      subtitle: "კონტექსტის გაგება",
      content: (
        <div className="text-block"><p>ბანკი მდინარის პირას → ნაპირი 🌊</p></div>
      ),
    },
    {
      title: "8. BERT",
      subtitle: "Google (2018)",
      content: (
        <div className="text-block"><p>კითხულობს ტექსტს ორივე მხრიდან</p></div>
      ),
    },
    {
      title: "9. GPT",
      subtitle: "ChatGPT-ის საფუძველი",
      content: (
        <div className="centered"><MessageSquare className="w-20 h-20 text-green-500" /><p>Chat-style generation</p></div>
      ),
    },
    {
      title: "10. Claude",
      subtitle: "უსაფრთხო AI",
      content: (
        <div className="text-block"><p>გრძელი კონტექსტი და ეთიკა</p></div>
      ),
    },
    {
      title: "11. Llama",
      subtitle: "Meta – ღია კოდი",
      content: (
        <div className="text-block"><p>AI ყველასთვის 🦙</p></div>
      ),
    },
    {
      title: "12. Gemini",
      subtitle: "Google – მულტიმოდალური",
      content: (
        <div className="centered"><Globe className="w-20 h-20 text-blue-500" /><p>მულტიმოდალური მიდგომები</p></div>
      ),
    },
    
    {
      title: "13. დასასრული",
      subtitle: "AI დღეს",
      content: (
        <div className="centered"><p style={{ fontSize: '1.5rem', color: '#059669' }}>Transformer შეცვალა ყველაფერი 🚀</p></div>
      ),
    },
  ];

  return (
  <div className="presentation-root">
    <div className="presentation-card">

      {/* HEADER */}
      <div className="presentation-header">
        <h1>
          {slides[current].title}
        </h1>
        <h2>
          {slides[current].subtitle}
        </h2>
      </div>

      {/* CONTENT */}
      <div className="presentation-content">
        <div>{slides[current].content}</div>
      </div>

      {/* FOOTER / NAV */}
      <div className="presentation-footer">
        <button
          onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
          disabled={current === 0}
          className="nav-button prev"
        >
          ◀ უკან
        </button>

        <span className="page-indicator">
          {current + 1} / {slides.length}
        </span>

        <button
          onClick={() =>
            setCurrent((c) => Math.min(c + 1, slides.length - 1))
          }
          disabled={current === slides.length - 1}
          className="nav-button next"
        >
          წინ ▶
        </button>
      </div>
    </div>
  </div>
);

};

export default Presentation;
