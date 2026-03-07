const articles = [
  {
    id: 'why-claude-pro',
    date: '2026/03/08',
    title: '為什麼我不用 Clawbot，而是每月花 20 美金訂閱 Claude Pro？',
    summary: '我是客家工程師，省錢是信仰。試過 Clawbot、研究過各種方案之後，這是我的結論。',
    tags: ['Claude', '開發工具', 'MCP'],
    content: [
      { type: 'quote', text: '你不是在開發 App 嗎？為什麼不用 Clawbot？' },
      { type: 'p', text: '我想了一下，其實原因很簡單。' },
      { type: 'p', text: '我是個客家工程師。省錢這件事對我來說不是個性，是信仰。' },
      { type: 'p', text: '所以當我開始研究 AI 開發工具時，我沒有先看哪個最強。我先看的其實是：哪個比較不會讓我的信用卡爆掉。' },
      { type: 'p', text: '畢竟開發 App 是一場持久戰。' },
      { type: 'h2', text: '我其實試過 Clawbot' },
      { type: 'p', text: '一開始我確實有試過 Clawbot。它是一個第三方的 Claude 客戶端，看起來功能很多，也有人推薦。' },
      { type: 'p', bold: '它需要自己準備 API Key。', text: '但實際用了一段時間後，我發現一個問題：' },
      { type: 'p', text: '這代表每一次對話，其實都在消耗 API token。如果還要用搜尋功能，通常還要再串其他第三方 API。' },
      { type: 'p', text: '問題不是技術，而是成本的不確定性。你很難直覺知道今天到底花了多少錢、這些測試會不會突然燒掉幾百塊、如果多跑幾次 prompt 會不會爆預算。' },
      { type: 'p', text: '在開發過程中，最常做的事情就是一直試錯。如果每一次試錯都在燒 token，成本其實會變得很難控制。' },
      { type: 'quote', text: '不確定的成本，通常就是最貴的成本。' },
      { type: 'h2', text: '所以我最後選 Claude Pro' },
      { type: 'p', text: '最後我回到一個最單純的選擇：Claude Pro，一個月 20 美金，費用固定。' },
      { type: 'p', text: '不管你問幾千次問題、讓它改多少次程式、debug 多少次 code，費用都不會突然暴衝。' },
      { type: 'h2', text: '我的 AI 開發策略' },
      { type: 'p', text: '我現在的做法其實很簡單：開發階段全靠 Claude Pro，等到 App 做完、真的要上線，再依需求去申請 API Key。' },
      { type: 'p', text: '因為開發階段最常做的事情是設計架構、改程式、debug、反覆測試。如果每一步都用 API，其實很多成本都是被測試消耗掉的。所以我會把 API 留到真正需要讓產品自動化運作的時候。' },
      { type: 'h2', text: 'MCP 跟 Skills 是什麼？' },
      { type: 'p', text: '很多人會把這兩個東西搞混，其實它們是完全不同的概念。' },
      { type: 'p', text: 'MCP（Model Context Protocol）是讓 Claude 連接外部系統的協議，例如讀取你電腦的檔案、連 GitHub、查資料庫、搜尋 Google Drive。你可以把它想成 Claude 的手，讓它可以伸出去拿資料。' },
      { type: 'p', text: 'Skills 則比較像是教 Claude 怎麼做事情的方法，例如你的程式碼風格、公司報告格式、資料分析流程、固定的開發 SOP。Skills 不是工具，而是 Claude 的操作手冊。' },
      { type: 'p', text: '兩個東西可以搭配使用：MCP 給 Claude 工具，Skills 教 Claude 怎麼用那些工具。如果把 Claude 想像成工程師，MCP 是工具箱，Skills 是工作流程。' },
      { type: 'h2', text: '結論' },
      { type: 'p', text: '對我來說，選 Claude Pro 的原因其實很簡單：成本可預期。' },
      { type: 'p', text: '開發過程中最怕的不是花錢，而是不知道什麼時候會突然花很多錢。' },
      { type: 'p', text: '20 美金一個月，換來一個隨時可以幫你寫 code、debug、整理架構的 AI。' },
      { type: 'p', text: '對一個信仰省錢的客家工程師來說，這是一筆很合理的投資。' },
    ]
  }
]

export default articles
