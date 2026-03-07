export default function ComingSoon({ title, emoji, description }) {
  return (
    <main className="cs" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 48px 60px' }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ fontSize: 56, marginBottom: 24 }}>{emoji}</div>
        <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8410a', textTransform: 'uppercase', fontWeight: 500, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <span style={{ width: 20, height: 1, background: '#c8410a', display: 'block' }}></span>
          Coming Soon
          <span style={{ width: 20, height: 1, background: '#c8410a', display: 'block' }}></span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, lineHeight: 1.2, marginBottom: 20, color: '#1a1714' }}>{title}</h1>
        <p style={{ fontSize: 15, color: '#4a4540', lineHeight: 1.9 }}>{description}</p>
        <div style={{ marginTop: 40, padding: '20px 28px', background: '#f2efe8', borderRadius: 14, display: 'inline-block', fontSize: 13, color: '#8a8480' }}>
          內容陸續更新中，先去{' '}
          <a href="https://instagram.com/dailyai.life" target="_blank" rel="noreferrer" style={{ color: '#c8410a', fontWeight: 500, textDecoration: 'none' }}>IG @dailyai.life</a>
          {' '}追蹤最新進度 🤖
        </div>
      </div>
    </main>
  )
}
