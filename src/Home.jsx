import coupleImg from './couple.jpg'

export default function Home() {
  return (
    <main className="home-wrap" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 48px 60px' }}>
      <div className="home-grid" style={{ maxWidth: 960, width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>

        {/* LEFT */}
        <div>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8410a', textTransform: 'uppercase', fontWeight: 500, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 20, height: 1, background: '#c8410a', display: 'block', flexShrink: 0 }}></span>
            關於我們
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(38px, 5vw, 58px)', fontWeight: 900, lineHeight: 1.15, letterSpacing: -1, marginBottom: 28, color: '#1a1714' }}>
            我們是<em style={{ fontStyle: 'italic', color: '#c8410a' }}>誰</em>？
          </h1>
          <p style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.9, marginBottom: 16 }}>兩個普通上班族，一個負責研究 AI，一個負責煮飯，然後發現這兩件事好像可以一起做。</p>
          <p style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.9, marginBottom: 16 }}>2026 年，AI 發展太快，快到我們覺得不記錄下來會後悔。所以從今天開始，把每一步都記錄下來。</p>
          <p style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.9 }}>不裝懂，只說真實結果。每個工具用過才說，每篇文章都是親身經歷。</p>
        </div>

        {/* RIGHT CARD */}
        <div style={{ background: '#ffffff', border: '1px solid #e0dbd2', borderRadius: 20, padding: 36, boxShadow: '0 4px 40px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid #e0dbd2' }}>
            <img src={coupleImg} alt="Daily AI Life" style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover', border: '3px solid #e0dbd2' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
            {[['2026', '開始記錄'], [`Day ${Math.floor((new Date() - new Date('2026-03-08')) / (1000 * 60 * 60 * 24)) + 1}`, '持續進行中'], ['2', '個上班族'], ['∞', '想試的工具']].map(([num, label]) => (
              <div key={label} style={{ background: '#f2efe8', borderRadius: 12, padding: '18px 20px' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#c8410a', display: 'block', lineHeight: 1, marginBottom: 6 }}>{num}</span>
                <span style={{ fontSize: 16, color: '#8a8480' }}>{label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="https://instagram.com/dailyai.life" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 30, fontSize: 13, fontWeight: 500, textDecoration: 'none', color: 'white', background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', flex: 1, justifyContent: 'center' }}>
              📸 Instagram
            </a>
            <a href="https://threads.net/@dailyai.life" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 30, fontSize: 13, fontWeight: 500, textDecoration: 'none', color: 'white', background: '#1a1714', flex: 1, justifyContent: 'center' }}>
              🧵 Threads
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}
