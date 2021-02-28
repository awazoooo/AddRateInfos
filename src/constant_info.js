"use strict";
exports.__esModule = true;
exports.constantTable = exports.musicTable = exports.summerPlusMusicTable = exports.redMusicTable = void 0;
// 譜面定数データ
// オンゲキスコアツールに感謝
// https://ongeki-score.net/music
// データ提供者の方々に感謝
/*
  データ提供者Twitter
  - @Rinsaku471
  - @RKS49019722
  - @masa_9713
*/
// R.E.D新曲枠曲
var redMusicTable = [
    // 1/14追加
    { title: 'ビターチョコデコレーション', diff: 3, constant: 12.5 },
    { title: 'ウミユリ海底譚', diff: 3, constant: 12.5 },
    { title: 'YAMINABE☆PANIC ～ご馳走詰め込みフルコース～', diff: 3, constant: 13.3 },
    { title: 'Falsum Atlantis.', diff: 3, constant: 14.9 },
    { title: 'Don\'t Fight The Music', diff: 3, constant: 14.9 },
    { title: 'Falsum Atlantis.', diff: 2, constant: 13.5 },
    { title: 'Don\'t Fight The Music', diff: 2, constant: 13.6 },
    // 12/28追加
    { title: '愛されなくても君がいる', diff: 3, constant: 12.3 },
    { title: '聖少女サクリファイス', diff: 3, constant: 13 },
    { title: 'LOVERS', diff: 3, constant: 12.5 },
    { title: 'Satori ～3rd EyEs (2020 Recall)', diff: 3, constant: 14.3 },
    { title: 'Paranoia', diff: 3, constant: 13.4 },
    { title: 'Singularity', diff: 3, constant: 13.9 },
    { title: 'Grievous Lady', diff: 3, constant: 14.6 },
    { title: '迷える音色は恋の唄', diff: 3, constant: 13.6 },
    { title: 'Burning Steel Inferno', diff: 3, constant: 13.7 },
    //{ title: 'Let\'s Starry Party！ -高瀬 梨緒ソロver.-', diff: 3, constant: 12.7 },
    //{ title: 'Let\'s Starry Party！ -結城 莉玖ソロver.-', diff: 3, constant: 12.7 },
    //{ title: 'Let\'s Starry Party！ -藍原 椿ソロver.-', diff: 3, constant: 12.7 },
    // 12/5追加
    { title: 'Sign', diff: 3, constant: 12.7 },
    { title: '名探偵連続殺人事件', diff: 3, constant: 12.5 },
    { title: '絶対にチョコミントを食べるアオイチャン', diff: 3, constant: 12.7 },
    { title: 'イカサマライフゲイム', diff: 3, constant: 13.7 },
    { title: 'ナイト・オブ・ナイツ (かめりあ’s“ワンス・アポン・ア・ナイト”Remix)', diff: 3, constant: 13.9 },
    { title: 'Reach for the Stars', diff: 3, constant: 13.8 },
    { title: 'ヤミツキ', diff: 3, constant: 13.1 },
    { title: 'キミは“見ていたね”？', diff: 3, constant: 12.4 },
    { title: 'LiftOff', diff: 3, constant: 14.2 },
    { title: 'Over Voltage', diff: 3, constant: 12.8 },
    { title: 'FLUFFY FLASH', diff: 3, constant: 14.8 },
    { title: 'FLUFFY FLASH', diff: 2, constant: 13.1 },
    //{ title: 'Let\'s Starry Party！ -高瀬 梨緒ソロver.-', diff: 3, constant: 12.7 },
    //{ title: 'Let\'s Starry Party！ -結城 莉玖ソロver.-', diff: 3, constant: 12.7 },
    //{ title: 'Let\'s Starry Party！ -藍原 椿ソロver.-', diff: 3, constant: 12.7 },
    // 11/5追加
    { title: 'コネクト', diff: 3, constant: 12.5 },
    { title: 'beautiful tomorrow', diff: 3, constant: 12.3 },
    { title: '進化系Colors', diff: 3, constant: 12.4 },
    { title: 'Shiny Smily Story', diff: 3, constant: 12.7 },
    { title: 'ガヴリールドロップキック', diff: 3, constant: 12.9 },
    { title: '反撃! 突撃! Back To Back!', diff: 3, constant: 13.2 },
    { title: 'ツクヨミステップ', diff: 3, constant: 13.5 },
    { title: 'よいまちカンターレ', diff: 3, constant: 13 },
    { title: 'この番組はうら若き公務員たちの提供でお送りいたします', diff: 3, constant: 13.3 },
    { title: 'Oshama Scramble! (Cranky Remix)', diff: 3, constant: 14.1 },
    { title: 'Jack-the-Ripper◆', diff: 3, constant: 14.5 },
    { title: '宛城、炎上！！', diff: 3, constant: 14.4 },
    // 9/30追加
    { title: 'カラフル', diff: 3, constant: 12.5 },
    { title: 'Forever Friends', diff: 3, constant: 12.4 },
    { title: '紅蓮華', diff: 3, constant: 12.5 },
    { title: 'Phantom Joke', diff: 3, constant: 13.5 },
    { title: 'ふわふわ時間(タイム)', diff: 3, constant: 12.6 },
    { title: '侵略ノススメ☆', diff: 3, constant: 12.9 },
    { title: '五等分の気持ち', diff: 3, constant: 12.3 },
    { title: 'だれかの心臓になれたなら', diff: 3, constant: 12.9 },
    { title: 'テオ', diff: 3, constant: 13 },
    { title: 'ベノム', diff: 3, constant: 12.8 },
    { title: 'ナイト・オブ・ナイツ (xi Remix)', diff: 3, constant: 14.1 },
    { title: 'Sound Chimera', diff: 3, constant: 14.4 },
    { title: 'Sound Chimera', diff: 2, constant: 12.8 },
    { title: '雷切-RAIKIRI-', diff: 3, constant: 14.4 },
    { title: '東亞 -O.N.G.E.K.I. MIX-', diff: 4, constant: 13.8 },
    { title: 'No Limit RED Force', diff: 3, constant: 12.7 },
    { title: 'GlitterGlitter', diff: 3, constant: 13.3 },
    { title: 'ウキウキ☆Candy!', diff: 3, constant: 13.1 },
    { title: 'All Right!', diff: 3, constant: 13.6 },
    { title: 'RED to RED', diff: 3, constant: 13.7 },
    { title: 'Daydreama', diff: 3, constant: 13.9 },
    { title: 'Lostwizz', diff: 3, constant: 13.7 },
    { title: 'Stargazing Dreamer', diff: 3, constant: 14.5 },
    { title: 'Stargazing Dreamer', diff: 2, constant: 13.5 },
    // 以下不明
    { title: 'STARTLINER -星咲 あかりソロver.-', diff: 3, constant: 11 },
    { title: 'STARTLINER -藤沢 柚子ソロver.-', diff: 3, constant: 11 },
    { title: 'STARTLINER -三角 葵ソロver.-', diff: 3, constant: 11 },
];
exports.redMusicTable = redMusicTable;
var summerPlusMusicTable = [
    // 14+
    { title: '脳天直撃', diff: 3, constant: 14.9 },
    { title: 'Singularity', diff: 3, constant: 14.8 },
    { title: 'otorii INNOVATED -[i]3-', diff: 3, constant: 14.7 },
    // 14
    { title: 'AstrøNotes.', diff: 3, constant: 14.6 },
    { title: 'Genesis', diff: 3, constant: 14.6 },
    { title: 'luna blu', diff: 4, constant: 14.6 },
    { title: 'End Time', diff: 3, constant: 14.5 },
    { title: 'Glorious Crown (tpz over-Over-OVERCUTE REMIX)', diff: 3, constant: 14.5 },
    { title: 'Galaxy Blaster', diff: 3, constant: 14.3 },
    { title: 'felys -final remix-', diff: 3, constant: 14.2 },
    { title: "R'N'R Monsta", diff: 3, constant: 14.1 },
    { title: 'Air', diff: 3, constant: 14.1 },
    { title: "Last Kingdom", diff: 3, constant: 14 },
    // 13+
    { title: "どどんぱち大音頭", diff: 4, constant: 13.9 },
    { title: 'PinqPiq (xovevox Remix)', diff: 3, constant: 13.9 },
    { title: 'Trinity Departure', diff: 3, constant: 13.9 },
    { title: "Vibes 2k20", diff: 3, constant: 13.9 },
    { title: "Ai Drew", diff: 3, constant: 13.9 },
    { title: "Dreadnought", diff: 3, constant: 13.8 },
    { title: 'アマツカミ', diff: 3, constant: 13.8 },
    { title: 'Destr0yer', diff: 3, constant: 13.8 },
    { title: "疾走あんさんぶる", diff: 3, constant: 13.7 },
    { title: '最強 the サマータイム!!!!!', diff: 4, constant: 13.7 },
    { title: "Sparkle", diff: 3, constant: 13.7 },
    { title: 'Summer is over', diff: 3, constant: 13.7 },
];
exports.summerPlusMusicTable = summerPlusMusicTable;
// ベスト枠
var musicTable = [
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
    { title: "心", diff: 3, constant: 14.5 },
    { title: "Aenbharr", diff: 3, constant: 14.5 },
    { title: "ヒトリボッチサテライト", diff: 3, constant: 14.4 },
    { title: "Desperado Waltz", diff: 3, constant: 14.4 },
    {
        title: "混沌を越えし我らが神聖なる調律主を讃えよ",
        diff: 3,
        constant: 14.3
    },
    { title: "神威", diff: 3, constant: 14.3 },
    { title: "folern", diff: 3, constant: 14.3 },
    { title: "エンドマークに希望と涙を添えて", diff: 3, constant: 14.2 },
    { title: "FREEDOM DiVE (tpz Overcute Remix)", diff: 3, constant: 14.2 },
    { title: "Garakuta Doll Play", diff: 3, constant: 14.2 },
    { title: "Dazzle hop", diff: 3, constant: 14.1 },
    { title: "Everlasting Today", diff: 3, constant: 14.1 },
    { title: "SILENT BLUE", diff: 3, constant: 14.1 },
    { title: "Imperishable Night 2006 (2016 Refine)", diff: 3, constant: 14.1 },
    { title: "Calamity Fortune", diff: 4, constant: 14.1 },
    { title: "ジングルベル", diff: 4, constant: 14 },
    { title: "ジングルベル", diff: 3, constant: 14 },
    { title: "7thSense", diff: 3, constant: 14 },
    { title: "GOODRAGE", diff: 3, constant: 14 },
    { title: "No Remorse", diff: 4, constant: 14 },
    { title: "初音ミクの激唱", diff: 4, constant: 14 },
    { title: "初音ミクの激唱", diff: 3, constant: 14 },
    // 13+
    { title: "閃鋼のブリューナク", diff: 3, constant: 13.9 },
    { title: "Ai Nov", diff: 3, constant: 13.9 },
    { title: "Mini skirt", diff: 3, constant: 13.9 },
    { title: "Baqeela", diff: 3, constant: 13.9 },
    { title: "ナイト・オブ・ナイツ", diff: 4, constant: 13.9 },
    { title: "The wheel to the right", diff: 3, constant: 13.8 },
    { title: "Lazy Addiction", diff: 3, constant: 13.8 },
    { title: "HONEY-Q", diff: 3, constant: 13.8 },
    { title: "Duello", diff: 3, constant: 13.8 },
    { title: "カミサマネジマキ", diff: 3, constant: 13.8 },
    { title: "ギガンティックO.T.N", diff: 3, constant: 13.8 },
    { title: "conflict", diff: 3, constant: 13.8 },
    { title: "ぼくらの16bit戦争", diff: 3, constant: 13.8 },
    { title: "Calamity Fortune", diff: 3, constant: 13.7 },
    { title: "クイーンオブハート", diff: 3, constant: 13.7 },
    { title: "Oshama Scramble!", diff: 3, constant: 13.7 },
    { title: "AMAZING MIGHTYYYY!!!!", diff: 3, constant: 13.7 },
    { title: "初音ミクの消失", diff: 3, constant: 13.7 },
    { title: "Sakura Fubuki", diff: 4, constant: 13.7 },
    { title: "Doll Judgment", diff: 3, constant: 13.7 },
    { title: "BOKUTO", diff: 3, constant: 13.7 },
    { title: "GO! GO! MANIAC", diff: 3, constant: 13.7 },
    { title: "Touch and Go", diff: 3, constant: 13.7 },
    { title: "裏表ラバーズ", diff: 3, constant: 13.7 },
];
exports.musicTable = musicTable;
var constantTable = musicTable.concat(summerPlusMusicTable).concat(redMusicTable);
exports.constantTable = constantTable;
