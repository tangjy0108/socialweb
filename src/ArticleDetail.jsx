export default function ArticleDetail({ article, onBack }) {
  return (
    <main style={{ flex: 1, padding: '100px 48px 60px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 680, width: '100%' }}>

        {/* Back */}
        <button onClick={onBack}
          style={{ background: 'none', border: 'none', color: '#8a8480', fontSize: 14, cursor: 'pointer', marginBottom: 40, padding: 0, display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Noto Sans TC', sans-serif" }}
          onMouseEnter={e => e.currentTarget.style.color = '#c8410a'}
          onMouseLeave={e => e.currentTarget.style.color = '#8a8480'}
        >← 回最新文章</button>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
          {article.tags.map(tag => (
            <span key={tag} style={{ fontSize: 11, letterSpacing: 1, color: '#c8410a', background: '#fff3ee', padding: '4px 10px', borderRadius: 20, fontWeight: 500 }}>{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 900, lineHeight: 1.2, color: '#1a1714', marginBottom: 16 }}>
          {article.title}
        </h1>

        {/* Date */}
        <p style={{ fontSize: 13, color: '#8a8480', marginBottom: 48, paddingBottom: 32, borderBottom: '1px solid #e0dbd2' }}>{article.date}</p>

        {/* Content */}
        <div>
          {article.content.map((block, i) => {
            if (block.type === 'h2') return (
              <h2 key={i} style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 700, color: '#1a1714', marginTop: 48, marginBottom: 16 }}>{block.text}</h2>
            )
            if (block.type === 'quote') return (
              <blockquote key={i} style={{ borderLeft: '3px solid #c8410a', paddingLeft: 20, margin: '28px 0', color: '#4a4540', fontSize: 16, lineHeight: 1.9, fontStyle: 'italic' }}>{block.text}</blockquote>
            )
            if (block.type === 'divider') return (
              <hr key={i} style={{ border: 'none', borderTop: '1px solid #e0dbd2', margin: '40px 0' }} />
            )
            return (
              <p key={i} style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.9, marginBottom: 20 }}>
                {block.bold && <strong style={{ color: '#1a1714' }}>{block.text}{block.bold}</strong>}
                {!block.bold && block.text}
              </p>
            )
          })}
        </div>

      </div>
    </main>
  )
}
