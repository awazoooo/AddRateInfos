// 譜面定数参照先
// https://ongeki.gamerch.com/%E3%82%AA%E3%83%B3%E3%82%B2%E3%82%AD%20%E6%A5%BD%E6%9B%B2%E4%B8%80%E8%A6%A7%EF%BC%88Lv%E9%A0%86%EF%BC%89%E9%AB%98%E9%9B%A3%E6%98%93%E5%BA%A6
// (とりあえずWiki)

const DEFAULTVERSION = 'origin'; // 現在のバージョン

// 9/2作成
// とりあえずMasLunaのみ？
const constantTable = [
    // Master
    { title: "君の知らない物語", difficulty: 3, constant: 10.4 },
    { title: "シュガーソングとビターステップ", difficulty: 3, constant: 11.7 },
    { title: "回レ！雪月花", difficulty: 3, constant: 12.2 },
    { title: "ようこそジャパリパークへ", difficulty: 3, constant: 12.0 },
    { title: "ファッとして桃源郷", difficulty: 3, constant: 12.5 },
    { title: "かくしん的☆めたまるふぉ～ぜっ!", difficulty: 3, constant: 12.5 },
    { title: "This game", difficulty: 3, constant: 11.7 },
    { title: "Los! Los! Los!", difficulty: 3, constant: 12.2 },
    { title: "SAVIOR OF SONG", difficulty: 3, constant: 12.2 },
    { title: "Red “reduction division” -crossroads version-", difficulty: 3, constant: 11.8 },
    { title: "鳥の詩", difficulty: 3, constant: 11.0 },
    { title: "SAKURA", difficulty: 3, constant: 10.9 },
    { title: "ときめきエクスペリエンス！", difficulty: 3, constant: 10.6 },
    { title: "That Is How I Roll!", difficulty: 3, constant: 11.0 },
    { title: "しゅわりん☆どり〜みん", difficulty: 3, constant: 10.7 },
    { title: "BLACK SHOUT", difficulty: 3, constant: 11.0 },
    { title: "えがおのオーケストラっ！", difficulty: 3, constant: 10.6 },
    { title: "脳漿炸裂ガール", difficulty: 3, constant: 13.1 },
    { title: "天ノ弱", difficulty: 3, constant: 12.1 },
    { title: "おこちゃま戦争", difficulty: 3, constant: 12.4 },
    { title: "六兆年と一夜物語", difficulty: 3, constant: 12.7 },
    { title: "千本桜", difficulty: 3, constant: 11.6 },
    { title: "キミノヨゾラ哨戒班", difficulty: 3, constant: 12.0 },
    { title: "木彫り鯰と右肩ゾンビ", difficulty: 3, constant: 12.5 },
    { title: "鬼KYOKAN", difficulty: 3, constant: 13.0 },
    { title: "初音ミクの激唱", difficulty: 3, constant: 13.9 },
    { title: "ヒビカセ", difficulty: 3, constant: 12.1 },
    { title: "グリーンライツ・セレナーデ", difficulty: 3, constant: 12.5 },
    { title: "Bad Apple!! feat.nomico", difficulty: 3, constant: 12.3 },
    { title: "ナイト・オブ・ナイツ", difficulty: 3, constant: 12.6 },
    { title: "Grip & Break down !!", difficulty: 3, constant: 11.8 },
    { title: "幻想のサテライト", difficulty: 3, constant: 13.0 },
    { title: "檄!帝国華撃団", difficulty: 3, constant: 11.3 },
    { title: "The Formula", difficulty: 3, constant: 12.7 },
    { title: "Brain Power", difficulty: 3, constant: 13.6 },
    { title: "Halcyon", difficulty: 3, constant: 13.7 },
    { title: "オモイヨシノ", difficulty: 3, constant: 11.9 },
    { title: "神威", difficulty: 3, constant: 14.4 },
    { title: "ＧＯ！ＧＯ！ラブリズム♥", difficulty: 3, constant: 12.4 },
    { title: "Oshama Scramble!", difficulty: 3, constant: 13.8 },
    { title: "心象蜃気楼", difficulty: 3, constant: 12.2 },
    { title: "Mare Maris", difficulty: 3, constant: 12.3 },
    { title: "Hyper Active", difficulty: 3, constant: 12.7 },
    { title: "天火明命", difficulty: 3, constant: 12.8 },
    { title: "Cyberozar", difficulty: 3, constant: 13.2 },
    { title: "AMAZING MIGHTYYYY!!!!", difficulty: 3, constant: 13.9 },
    { title: "Gate of Doom", difficulty: 3, constant: 13.5 },
    { title: "First Twinkle", difficulty: 3, constant: 11.4 },
    { title: "Paqqin", difficulty: 3, constant: 12.8 },
    { title: "We Gonna Journey", difficulty: 3, constant: 13.4 },
    { title: "閃鋼のブリューナク", difficulty: 3, constant: 13.7 },
    { title: "Perfect Shining!!", difficulty: 3, constant: 11.5 },
    { title: "STARTLINER", difficulty: 3, constant: 11.0 },
    { title: "みんな Happy!!", difficulty: 3, constant: 11.4 },
    { title: "Zest of Blue", difficulty: 3, constant: 11.9 },
    { title: "Here We Go", difficulty: 3, constant: 12.6 },
    { title: "Dolphika", difficulty: 3, constant: 13.4 },
    { title: "P！P！P！P！がおー!!", difficulty: 3, constant: 12.9 },
    { title: "タテマエと本心の大乱闘", difficulty: 3, constant: 12.3 },
    { title: "Ai Nov", difficulty: 3, constant: 13.9 },
    { title: "ロッキンピンクモンスター", difficulty: 3, constant: 12.8 },
    { title: "ブツメツビーターズ", difficulty: 3, constant: 13.0 },
    { title: "SWEET SHAKE!!", difficulty: 3, constant: 12.4 },
    { title: "What color...", difficulty: 3, constant: 12.6 },
    { title: "Sword of Secret", difficulty: 3, constant: 13.5 },
    { title: "Maqrite", difficulty: 3, constant: 13.2 },
    { title: "Everlasting Today", difficulty: 3, constant: 14.2 },
    // Lunatic (difficulty=4)
    { title: "No Remorse", difficulty: 4, constant: 14.0 },
    { title: "初音ミクの激唱", difficulty: 4, constant: 13.9 }
];

// 指定した難易度の曲を取得
const getMusicsByDiff = function (diffList){
    let result = [];
    for (let diff of diffList)
        appendLists(result,constantTable.filter(m => m.difficulty == diff));
    return result;
}
