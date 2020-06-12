// 2/24 SUMMER PLUSに対応
// 新曲枠曲
const newMusicTable = [
  // 14+
  { title: 'otorii INNOVATED -[i]3-', diff: 3, constant: 14.7 },

  // 14
  { title: "R'N'R Monsta", diff: 3, constant: 14.1 },
  { title: "Vibes 2k20", diff: 3, constant: 14 },
  { title: "Ai Drew", diff: 3, constant: 14 },

  // 13+
  { title: "どどんぱち大音頭", diff: 4, constant: 13.9 },
  { title: "Last Kingdom", diff: 3, constant: 13.9 },
  { title: "疾走あんさんぶる", diff: 3, constant: 13.8 },
  { title: "Dreadnought", diff: 3, constant: 13.8 },
  { title: 'アマツカミ', diff: 3, constant: 13.8 },


  // 13
  { title: "Sparkle", diff: 3, constant: 13.6 },
  { title: 'DAWNBREAKER', diff: 3, constant: 13.6 },
  { title: "撩乱乙女†無双劇", diff: 3, constant: 13.3 },
  { title: "ドラマツルギー", diff: 3, constant: 13.2 },
  { title: "Splash Dance!!", diff: 3, constant: 13.1 },
  { title: "Seyana. ～何でも言うことを聞いてくれるアカネチャン～", diff: 3, constant: 13.1 },

  // 12+
  { title: "Vibes 2k20", diff: 2, constant: 12.9 },
  { title: "お願いマッスル", diff: 3, constant: 12.9 },
  { title: "ピースサイン", diff: 3, constant: 12.8 },
  { title: "Catch the Moment", diff: 3, constant: 12.8 },
  { title: "アンドロイドガール", diff: 3, constant: 12.8 },
  { title: 'ぱくぱく☆がーる', diff: 3, constant: 12.8 },
  { title: "INDETERMINATE UNIVERSE", diff: 3, constant: 12.7 },
  { title: 'otorii INNOVATED -[i]3-', diff: 2, constant: 12.7 },

  // 12
  { title: "ヒャダインのカカカタ☆カタオモイ-C", diff: 3, constant: 12.6 },
  { title: "チェチェ・チェック・ワンツー！", diff: 3, constant: 12.6 },
  { title: "わたしたち魔法乙女です☆", diff: 3, constant: 12.6 },
  { title: "メルティランドナイトメア", diff: 3, constant: 12.5 },
  { title: "R'N'R Monsta", diff: 2, constant: 12.5 },
  { title: "Ai Drew", diff: 2, constant: 14 },
  { title: "春擬き", diff: 3, constant: 12.4 },
  { title: "ホシノキズナ", diff: 3, constant: 12.4 },
  { title: "乙女解剖", diff: 3, constant: 12 },
  { title: "Last Kingdom", diff: 2, constant: 12 },
  { title: "エブリデイワールド", diff: 3, constant: 12 },

  // 11+
  { title: "Dreadnought", diff: 2, constant: 11.9 },
  { title: "SmileAgain", diff: 3, constant: 11.7 }

];

// ベスト枠
const musicTable = [
  // 14+
  { title: "Opfer", diff: 3, constant: 14.9 },
  { title: "Titania", diff: 3, constant: 14.9 },
  { title: "ω4", diff: 3, constant: 14.9 },
  { title: "Good bye, Merry-Go-Round.", diff: 3, constant: 14.9 },
  { title: "A Man In The Mirror", diff: 3, constant: 14.8 },
  { title: "Viyella's Tears", diff: 3, constant: 14.8 },
  { title: "YURUSHITE", diff: 3, constant: 14.7 },
  { title: "緋蜂", diff: 4, constant: 14.7 },

  // 14
  { title: "MEGATON BLAST", diff: 3, constant: 14.6 },
  { title: "GEOMETRIC DANCE", diff: 3, constant: 14.6 },
  { title: "World Vanquisher", diff: 3, constant: 14.6 },
  { title: "怒槌", diff: 3, constant: 14.5 },
  { title: "ヒトリボッチサテライト", diff: 3, constant: 14.5 },
  { title: "心", diff: 3, constant: 14.5 },
  {
    title: "混沌を越えし我らが神聖なる調律主を讃えよ",
    diff: 3,
    constant: 14.4
  },
  { title: "Aenbharr", diff: 3, constant: 14.4 },
  { title: "Desperado Waltz", diff: 3, constant: 14.4 },
  { title: "神威", diff: 3, constant: 14.3 },
  { title: "folern", diff: 3, constant: 14.3 },
  { title: "エンドマークに希望と涙を添えて", diff: 3, constant: 14.2 },
  { title: "FREEDOM DiVE (tpz Overcute Remix)", diff: 3, constant: 14.2 },
  { title: "ジングルベル", diff: 4, constant: 14.2 },
  { title: "Dazzle hop", diff: 3, constant: 14.1 },
  { title: "Garakuta Doll Play", diff: 3, constant: 14.1 },
  { title: "Everlasting Today", diff: 3, constant: 14.1 },
  { title: "SILENT BLUE", diff: 3, constant: 14.1 },
  { title: "ジングルベル", diff: 3, constant: 14 },
  { title: "7thSense", diff: 3, constant: 14 },
  { title: "GOODRAGE", diff: 3, constant: 14 },
  { title: "No Remorse", diff: 4, constant: 14 },
  { title: "Calamity Fortune", diff: 4, constant: 14 },
  { title: "初音ミクの激唱", diff: 4, constant: 14 },
  { title: "初音ミクの激唱", diff: 3, constant: 14 },
  { title: "ナイト・オブ・ナイツ", diff: 4, constant: 14 },
  { title: "Imperishable Night 2006 (2016 Refine)", diff: 3, constant: 14 },

  // 13+
  { title: "閃鋼のブリューナク", diff: 3, constant: 13.9 },
  { title: "Ai Nov", diff: 3, constant: 13.9 },
  { title: "Mini skirt", diff: 3, constant: 13.9 },
  { title: "Baqeela", diff: 3, constant: 13.9 },
  { title: "裏表ラバーズ", diff: 3, constant: 13.9 },
  { title: "The wheel to the right", diff: 3, constant: 13.8 },
  { title: "Lazy Addiction", diff: 3, constant: 13.8 },
  { title: "HONEY-Q", diff: 3, constant: 13.8 },
  { title: "Duello", diff: 3, constant: 13.8 },
  { title: "カミサマネジマキ", diff: 3, constant: 13.8 },
  { title: "ギガンティックO.T.N", diff: 3, constant: 13.8 },
  { title: "conflict", diff: 3, constant: 13.8 },
  { title: "Calamity Fortune", diff: 3, constant: 13.7 },
  { title: "クイーンオブハート", diff: 3, constant: 13.7 },
  { title: "Oshama Scramble!", diff: 3, constant: 13.7 },
  { title: "ぼくらの16bit戦争", diff: 3, constant: 13.7 },
  { title: "AMAZING MIGHTYYYY!!!!", diff: 3, constant: 13.7 },
  { title: "初音ミクの消失", diff: 3, constant: 13.7 },
  { title: "Sakura Fubuki", diff: 4, constant: 13.7 },
  { title: "Doll Judgment", diff: 3, constant: 13.7 },
  { title: "BOKUTO", diff: 3, constant: 13.7 },
  { title: "GO! GO! MANIAC", diff: 3, constant: 13.7 },
  { title: "Touch and Go", diff: 3, constant: 13.7 },

  // 13
  { title: "Death Doll", diff: 3, constant: 13.6 },
  { title: "インビジブル", diff: 3, constant: 13.6 },
  { title: "Radiance", diff: 3, constant: 13.6 },
  { title: "Honey Bear", diff: 3, constant: 13.6 },
  { title: "地球最後の告白を", diff: 3, constant: 13.6 },
  { title: "アリサのテーマ", diff: 3, constant: 13.6 },
  { title: "Maqrite", diff: 3, constant: 13.6 },
  { title: "Destiny Runner", diff: 3, constant: 13.6 },
  { title: "ウサテイ", diff: 3, constant: 13.6 },
  { title: "銀のめぐり", diff: 3, constant: 13.6 },
  { title: "サドマミホリック", diff: 3, constant: 13.5 },
  { title: "Halcyon", diff: 3, constant: 13.5 },
  { title: "Dolphika", diff: 3, constant: 13.5 },
  { title: "最終鬼畜妹フランドール・Ｓ", diff: 3, constant: 13.5 },
  { title: "Chelly spLash♪♪", diff: 3, constant: 13.5 },
  { title: "We Gonna Journey", diff: 3, constant: 13.5 },
  { title: "Kattobi KEIKYU Rider", diff: 3, constant: 13.5 },
  { title: "ナイト・オブ・ナイツ (Cranky Remix)", diff: 3, constant: 13.5 },
  { title: "Petit Etoile", diff: 3, constant: 13.5 },
  { title: "Opfer", diff: 2, constant: 13.5 },
  { title: "妖狐仙楽踏", diff: 3, constant: 13.5 },
  { title: "エピクロスの虹はもう見えない", diff: 3, constant: 13.4 },
  { title: "Sword of Secret", diff: 3, constant: 13.4 },
  { title: "Scream out! -音華鏡 Re:BREAK-", diff: 3, constant: 13.4 },
  { title: "Brain Power", diff: 3, constant: 13.4 },
  { title: "終わりの先の音節", diff: 3, constant: 13.4 },
  { title: "全力ハッピーライフ", diff: 3, constant: 13.4 },
  { title: "ロボットプラネットユートピア", diff: 3, constant: 13.4 },
  {
    title: "患部で止まってすぐ溶ける～狂気の優曇華院",
    diff: 3,
    constant: 13.4
  },
  { title: "A Man In The Mirror", diff: 2, constant: 13.4 },
  { title: "オンゲキ全域★アカネサマ？", diff: 3, constant: 13.3 },
  { title: "セツナトリップ", diff: 3, constant: 13.3 },
  { title: "人生リセットボタン", diff: 3, constant: 13.3 },
  { title: "BOUNCE & DANCE", diff: 3, constant: 13.3 },
  { title: "TAKE ON THE WORLD", diff: 3, constant: 13.3 },
  { title: "ブツメツビーターズ", diff: 3, constant: 13.3 },

  { title: "Viyella's Tears", diff: 2, constant: 13.2 },
  { title: "Titania", diff: 2, constant: 13.2 },
  {
    title: "今ぞ♡崇め奉れ☆オマエらよ！！～姫の秘メタル渇望～",
    diff: 3,
    constant: 13.2
  },
  { title: "Gate of Doom", diff: 3, constant: 13.2 },
  { title: "ライトスピード・デイズ", diff: 3, constant: 13.2 },
  { title: "こどものしくみ", diff: 3, constant: 13.2 },
  { title: "幸せになれる隠しコマンドがあるらしい", diff: 3, constant: 13.2 },
  { title: "脳漿炸裂ガール", diff: 3, constant: 13.2 },
  { title: "fulgente", diff: 3, constant: 13.2 },
  { title: "メニメニマニマニ", diff: 3, constant: 13.2 },
  { title: "ようこそジャパリパークへ", diff: 4, constant: 13.2 },
  { title: "ドーナツホール", diff: 3, constant: 13.2 },
  { title: "ω4", diff: 2, constant: 13.1 },
  { title: "Good bye, Merry-Go-Round.", diff: 2, constant: 13.1 },
  { title: "フィクサー", diff: 3, constant: 13.1 },
  { title: "Cyberozar", diff: 3, constant: 13.1 },
  { title: "Paqqin", diff: 3, constant: 13.1 },
  {
    title: "ゴーカ！ごーかい！？ファントムシーフ！",
    diff: 3,
    constant: 13.1
  },
  { title: "天火明命", diff: 3, constant: 13.1 },
  { title: "青春サイダー", diff: 3, constant: 13.1 },
  { title: "DAYBREAK FRONTLINE", diff: 3, constant: 13.1 },
  { title: "UTAKATA", diff: 3, constant: 13.1 },
  { title: "MEGATON BLAST", diff: 2, constant: 13 },
  { title: "ADAMAS", diff: 3, constant: 13 },
  { title: "Let's Starry Party！", diff: 3, constant: 13 },
  { title: "デリヘル呼んだら君が来た", diff: 3, constant: 13 },
  { title: "トーキョーゲットー", diff: 3, constant: 13 },
  { title: "ECHO", diff: 3, constant: 13 },
  { title: "しゅわスパ大作戦☆", diff: 3, constant: 13 },
  { title: "MAKING！ハイタッチ！", diff: 3, constant: 13 },
  { title: "まっすぐ→→→ストリーム！", diff: 3, constant: 13 },
  { title: "アンハッピーリフレイン", diff: 3, constant: 13 },
  { title: "星屑ユートピア", diff: 3, constant: 13 },
  //{ title: "Rising Hope", diff: 3, constant: 13 },
  { title: "God knows...", diff: 3, constant: 13 },
  { title: "時の冒険者", diff: 3, constant: 13 },
  { title: "sweet little sister", diff: 3, constant: 13 },
  { title: "Opera of the wasteland", diff: 3, constant: 13 },
  {
    title: "混沌を越えし我らが神聖なる調律主を讃えよ",
    diff: 2,
    constant: 13
  },
  { title: "Garakuta Doll Play", diff: 2, constant: 13 },
  { title: "TeA", diff: 3, constant: 13 },
  { title: "本能的 Survivor", diff: 3, constant: 13 },
  { title: "ロッキンピンクモンスター", diff: 3, constant: 13 }
];

const constantTable = newMusicTable.concat(musicTable);

export { newMusicTable, musicTable };
