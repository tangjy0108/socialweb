export default function NewsletterModal({ open, onClose }) {
  if (!open) return null
  return (
    <div onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ background: 'white', borderRadius: 20, padding: 40, maxWidth: 420, width: '100%', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
        <button onClick={onClose}
          style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: '#8a8480', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
        <div style={{ fontSize: 10, letterSpacing: 2, color: '#c8410a', textTransform: 'uppercase', fontWeight: 500, marginBottom: 10 }}>每週電子報</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 8, color: '#1a1714' }}>幫你篩掉 AI 噪音</h3>
        <p style={{ fontSize: 14, color: '#4a4540', lineHeight: 1.7, marginBottom: 24 }}>AI 工具太多、新聞太雜，我幫你整理好。每週精選 3 件值得知道的事，直接寄給你。</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <input type="email" placeholder="輸入你的 Email"
            style={{ border: '1px solid #e0dbd2', background: '#faf8f4', padding: '12px 16px', borderRadius: 8, fontSize: 14, fontFamily: "'Noto Sans TC', sans-serif", color: '#1a1714', outline: 'none' }} />
          <button style={{ background: '#c8410a', color: 'white', border: 'none', padding: 13, borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: "'Noto Sans TC', sans-serif" }}>寄給我 →</button>
        </div>
        <p style={{ fontSize: 11, color: '#8a8480', textAlign: 'center', marginTop: 10 }}>不濫發垃圾信，隨時可退訂</p>
      </div>
    </div>
  )
}
