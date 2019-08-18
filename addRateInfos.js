(function (){

    /* 譜面定数データ */
    // オンゲキスコアツールに感謝
    // https://ongeki-score.net/music
    // データ提供者の方々に感謝
    /*
       データ提供者Twitter
       * @Rinsaku471
       * @RKS49019722
       * @masa_9713
    */

    // 3/2作成
    const constantTable = [
        {title: "Opfer", diff: 3, constant: 14.9},
        {title: "Titania", diff: 3, constant: 14.9},
        {title: "ω4", diff: 3, constant: 14.9},
        {title: "Viyella's Tears", diff: 3, constant: 14.8},
        {title: "YURUSHITE", diff: 3, constant: 14.6},
        {title: "怒槌", diff: 3, constant: 14.5},
        {title: "混沌を越えし我らが神聖なる調律主を讃えよ", diff: 3, constant: 14.5},
        {title: "MEGATON BLAST", diff: 3, constant: 14.5},
        {title: "心", diff: 3, constant: 14.4},
        {title: "神威", diff: 3, constant: 14.3},
        {title: "Aenbharr", diff: 3, constant: 14.3},
        {title: "エンドマークに希望と涙を添えて", diff: 3, constant: 14.2},
        {title: "Garakuta Doll Play", diff: 3, constant: 14.2},
        {title: "Dazzle hop", diff: 3, constant: 14.2},
        {title: "Everlasting Today", diff: 3, constant: 14.1},
        {title: "7thSense", diff: 3, constant: 14.0},
        {title: "No Remorse", diff: 4, constant: 14.0},
        {title: "Calamity Fortune", diff: 4, constant: 14.0},
        {title: "初音ミクの激唱", diff: 3, constant: 13.9},
        {title: "初音ミクの激唱", diff: 4, constant: 13.9},
        {title: "閃鋼のブリューナク", diff: 3, constant: 13.9},
        {title: "The wheel to the right", diff: 3, constant: 13.9},
        {title: "GOODRAGE", diff: 3, constant: 13.9},
        {title: "ナイト・オブ・ナイツ", diff: 4, constant: 13.8},
        {title: "Oshama Scramble!", diff: 3, constant: 13.8},
        {title: "Ai Nov", diff: 3, constant: 13.8},
        {title: "Death Doll", diff: 3, constant: 13.8},
        {title: "カミサマネジマキ", diff: 3, constant: 13.8},
        {title: "Calamity Fortune", diff: 3, constant: 13.8},
        {title: "ぼくらの16bit戦争", diff: 3, constant: 13.7},
        {title: "Destiny Runner", diff: 3, constant: 13.7},
        {title: "最終鬼畜妹フランドール・Ｓ", diff: 3, constant: 13.7},
        {title: "AMAZING MIGHTYYYY!!!!", diff: 3, constant: 13.7},
        {title: "Sakura Fubuki", diff: 4, constant: 13.7},
        {title: "初音ミクの消失", diff: 3, constant: 13.7},
        {title: "conflict", diff: 3, constant: 13.7},
        {title: "アリサのテーマ", diff: 3, constant: 13.6},
        {title: "Halcyon", diff: 3, constant: 13.6},
        {title: "Dolphika", diff: 3, constant: 13.6},
        {title: "Maqrite", diff: 3, constant: 13.6},
        {title: "クイーンオブハート", diff: 3, constant: 13.6},
        {title: "エピクロスの虹はもう見えない", diff: 3, constant: 13.6},
        {title: "Gate of Doom", diff: 3, constant: 13.5},
        {title: "人生リセットボタン", diff: 3, constant: 13.5},
        {title: "Chelly spLash♪♪", diff: 3, constant: 13.5},
        {title: "今ぞ♡崇め奉れ☆オマエらよ！！～姫の秘メタル渇望～", diff: 3, constant: 13.5},
        {title: "オンゲキ全域★アカネサマ？", diff: 3, constant: 13.5},
        {title: "Sword of Secret", diff: 3, constant: 13.5},
        {title: "Scream out! -音華鏡 Re:BREAK-", diff: 3, constant: 13.4},
        {title: "Brain Power", diff: 3, constant: 13.4},
        {title: "We Gonna Journey", diff: 3, constant: 13.4},
        {title: "Kattobi KEIKYU Rider", diff: 3, constant: 13.4},
        {title: "ω4", diff: 2, constant: 13.4},
        {title: "BOUNCE & DANCE", diff: 3, constant: 13.3},
        //{title: "BOUNCE ＆ DANCE", diff: 3, constant: 13.3},
        {title: "終わりの先の音節", diff: 3, constant: 13.3},
        {title: "Opfer", diff: 2, constant: 13.3},
        {title: "Titania", diff: 2, constant: 13.3},
        {title: "Viyella's Tears", diff: 2, constant: 13.3},
        {title: "Cyberozar", diff: 3, constant: 13.2},
        {title: "妖狐仙楽踏", diff: 3, constant: 13.2},
        {title: "幸せになれる隠しコマンドがあるらしい", diff: 3, constant: 13.2},
        {title: "TAKE ON THE WORLD", diff: 3, constant: 13.2},
        {title: "MEGATON BLAST", diff: 2, constant: 13.2},
        {title: "脳漿炸裂ガール", diff: 3, constant: 13.1},
        {title: "メニメニマニマニ", diff: 3, constant: 13.1},
        {title: "ブツメツビーターズ", diff: 3, constant: 13.1},
        {title: "ドーナツホール", diff: 3, constant: 13.1},
        {title: "アンハッピーリフレイン", diff: 3, constant: 13.1},
        {title: "ようこそジャパリパークへ", diff: 4, constant: 13.0},
        {title: "星屑ユートピア", diff: 3, constant: 13.0},
        {title: "鬼KYOKAN", diff: 3, constant: 13.0},
        {title: "幻想のサテライト", diff: 3, constant: 13.0},
        {title: "Paqqin", diff: 3, constant: 13.0},
        {title: "ロボットプラネットユートピア", diff: 3, constant: 13.0},
        {title: "Rising Hope", diff: 3, constant: 13.0},
        {title: "天火明命", diff: 3, constant: 12.9},
        {title: "oboro", diff: 3, constant: 12.9},
        {title: "P！P！P！P！がおー!!", diff: 3, constant: 12.9},
        {title: "Opera of the wasteland", diff: 3, constant: 12.9},
        {title: "ゴーカ！ごーかい！？ファントムシーフ！", diff: 3, constant: 12.9},
        {title: "混沌を越えし我らが神聖なる調律主を讃えよ", diff: 2, constant: 12.9},
        {title: "Garakuta Doll Play", diff: 2, constant: 12.9},
        {title: "Link with U", diff: 3, constant: 12.9},
        {title: "Necro Fantasia", diff: 3, constant: 12.9},
        {title: "TeA", diff: 3, constant: 12.9},
        {title: "本能的 Survivor", diff: 3, constant: 12.9},
        {title: "UTAKATA", diff: 3, constant: 12.9},
        {title: "からくりピエロ", diff: 3, constant: 12.8},
        {title: "sweet little sister", diff: 3, constant: 12.8},
        {title: "Hyper Active", diff: 3, constant: 12.8},
        {title: "ロッキンピンクモンスター", diff: 3, constant: 12.8},
        {title: "What color...", diff: 3, constant: 12.8},
        {title: "God knows...", diff: 3, constant: 12.8},
        {title: "時の冒険者", diff: 3, constant: 12.8},
        {title: "ロキ", diff: 3, constant: 12.8},
        {title: "DAYBREAK FRONTLINE", diff: 3, constant: 12.8},
        {title: "ネ！コ！", diff: 3, constant: 12.7},
        {title: "めんどーい！やっほーい！ともだち！", diff: 3, constant: 12.7},
        {title: "Energy Booster ～ 上海紅茶館", diff: 3, constant: 12.7},
        {title: "れみりあ☆デスティニー", diff: 3, constant: 12.7},
        {title: "東方妖々夢 ～the maximum moving about～", diff: 3, constant: 12.7},
        {title: "Äventyr", diff: 3, constant: 12.7},
        {title: "GAME IS LIFE", diff: 3, constant: 12.7},
        {title: "Kiss Me Kiss", diff: 3, constant: 12.7},
        {title: "チュルリラ・チュルリラ・ダッダッダ！", diff: 3, constant: 12.7},
        {title: "怒槌", diff: 2, constant: 12.7},
        {title: "ですのっ！White & Black", diff: 3, constant: 12.7},
        {title: "ヒバナ", diff: 3, constant: 12.7},
        {title: "光線チューニング", diff: 3, constant: 12.7},
        {title: "fulgente", diff: 3, constant: 12.7},
        {title: "Rule the World!!", diff: 3, constant: 12.7},
        {title: "Hand in Hand", diff: 3, constant: 12.7},
        {title: "High Free Spirits", diff: 3, constant: 12.6},
        {title: "ナイト・オブ・ナイツ", diff: 3, constant: 12.6},
        {title: "進捗どうですか？", diff: 3, constant: 12.6},
        {title: "Melody！", diff: 3, constant: 12.6},
        {title: "チルノのパーフェクトさんすう教室", diff: 3, constant: 12.6},
        {title: "The Formula", diff: 3, constant: 12.6},
        {title: "Here We Go", diff: 3, constant: 12.6},
        {title: "SWEET SHAKE!!", diff: 3, constant: 12.6},
        {title: "GranFatalité", diff: 3, constant: 12.6},
        {title: "Dragoon", diff: 3, constant: 12.6},
        {title: "Aenbharr", diff: 2, constant: 12.6},
        {title: "Jump!! Jump!! Jump!!", diff: 3, constant: 12.6},
        {title: "Paradise Lost", diff: 3, constant: 12.5},
        {title: "ファッとして桃源郷", diff: 3, constant: 12.5},
        {title: "かくしん的☆めたまるふぉ～ぜっ!", diff: 3, constant: 12.5},
        {title: "六兆年と一夜物語", diff: 3, constant: 12.5},
        {title: "キミノヨゾラ哨戒班", diff: 3, constant: 12.5},
        {title: "グリーンライツ・セレナーデ", diff: 3, constant: 12.5},
        {title: "Bad Apple!! feat.nomico", diff: 3, constant: 12.5},
        {title: "Red Battle", diff: 3, constant: 12.5},
        {title: "Hey-day狂騒曲（カプリチオ）", diff: 3, constant: 12.5},
        {title: "Redo", diff: 3, constant: 12.5},
        {title: "超電磁少女Days", diff: 3, constant: 12.5},
        {title: "Y.Y.Y.計画!!!!", diff: 3, constant: 12.5},
        {title: "Starring Stars", diff: 3, constant: 12.5},
        {title: "木彫り鯰と右肩ゾンビ", diff: 3, constant: 12.4},
        {title: "fantastic dreamer", diff: 3, constant: 12.4},
        {title: "炉心融解", diff: 3, constant: 12.4},
        {title: "四次元跳躍機関", diff: 3, constant: 12.4},
        {title: "Mare Maris", diff: 3, constant: 12.4},
        {title: "月に叢雲華に風", diff: 3, constant: 12.4},
        {title: "STEP by STEP UP↑↑↑↑", diff: 3, constant: 12.4},
        {title: "Link of Destiny", diff: 3, constant: 12.4},
        {title: "Grand symphony", diff: 3, constant: 12.4},
        {title: "おこちゃま戦争", diff: 3, constant: 12.3},
        {title: "砂の惑星 feat. HATSUNE MIKU", diff: 3, constant: 12.3},
        {title: "ＧＯ！ＧＯ！ラブリズム♥", diff: 3, constant: 12.3},
        {title: "Dazzle hop", diff: 2, constant: 12.3},
        {title: "YURUSHITE", diff: 2, constant: 12.3},
        {title: "ゆら・ゆらRing-Dong-Dance", diff: 3, constant: 12.3},
        {title: "HARMONIZE", diff: 3, constant: 12.3},
        {title: "Love is MY RAIL", diff: 3, constant: 12.3},
        {title: "流星", diff: 3, constant: 12.3},
        {title: "櫻結び", diff: 3, constant: 12.3},
        {title: "どうぶつ☆パラダイス", diff: 3, constant: 12.3},
        {title: "Los! Los! Los!", diff: 3, constant: 12.2},
        {title: "SAVIOR OF SONG", diff: 3, constant: 12.2},
        {title: "ゴーストルール", diff: 3, constant: 12.2},
        {title: "妄想感傷代償連盟", diff: 3, constant: 12.2},
        {title: "39", diff: 3, constant: 12.0},
        {title: "心象蜃気楼", diff: 3, constant: 12.2},
        {title: "The wheel to the right", diff: 2, constant: 12.2},
        {title: "天ノ弱", diff: 3, constant: 12.1},
        {title: "ヒビカセ", diff: 3, constant: 12.1},
        {title: "寒想桜", diff: 3, constant: 12.1},
        {title: "Everlasting Today", diff: 2, constant: 12.1},
        {title: "sister's noise", diff: 3, constant: 12.1},
        {title: "Colors", diff: 3, constant: 12.0},
        {title: "回レ！雪月花", diff: 3, constant: 12.0},
        {title: "シャルル", diff: 3, constant: 12.0},
        {title: "メルト", diff: 3, constant: 12.0},
        {title: "Grip & Break down !!", diff: 3, constant: 12.0},
        {title: "アクアテラリウム", diff: 3, constant: 12.0},
        {title: "オモイヨシノ", diff: 3, constant: 12.0},
        {title: "神威", diff: 2, constant: 12.0},
        {title: "Zest of Blue", diff: 3, constant: 12.0},
        {title: "タテマエと本心の大乱闘", diff: 3, constant: 12.0},
        {title: "TOMORROW", diff: 3, constant: 12.0},
        {title: "こころここから", diff: 3, constant: 12.0},
        {title: "Sentimental Snow", diff: 3, constant: 12.0},
        {title: "ようこそジャパリパークへ", diff: 3, constant: 11.9},
        {title: "Red “reduction division” -crossroads version-", diff: 3, constant: 11.9},
        {title: "いーあるふぁんくらぶ", diff: 3, constant: 11.9},
        {title: "CiRCLING", diff: 3, constant: 11.9},
        {title: "Calamity Fortune", diff: 2, constant: 11.9},
        {title: "Lost Princess", diff: 3, constant: 11.8},
        {title: "DreamRiser", diff: 3, constant: 11.8},
        {title: "千本桜", diff: 3, constant: 11.8},
        {title: "＊ハロー、プラネット。", diff: 3, constant: 11.8},
        {title: "エンドマークに希望と涙を添えて", diff: 2, constant: 11.8},
        {title: "シュガーソングとビターステップ", diff: 3, constant: 11.7},
        {title: "BLACK SHOUT", diff: 3, constant: 11.7},
        {title: "初音ミクの消失", diff: 3, constant: 11.7},
        {title: "ブリキノダンス", diff: 3, constant: 11.7},
        {title: "7thSense", diff: 2, constant: 11.7},
        {title: "カミサマネジマキ", diff: 2, constant: 11.7},
        {title: "only my railgun", diff: 3, constant: 11.7},
        {title: "極上スマイル", diff: 3, constant: 11.6},
        {title: "This game", diff: 3, constant: 11.6},
        {title: "Tell Your World", diff: 3, constant: 11.5},
        {title: "GOODRAGE", diff: 2, constant: 11.5},
        {title: "Perfect Shining!!", diff: 3, constant: 11.4},
        {title: "みんな Happy!!", diff: 3, constant: 11.4},
        {title: "わたし音頭", diff: 3, constant: 11.4},
        {title: "Cream＋Mint", diff: 3, constant: 11.4},
        {title: "conflict", diff: 2, constant: 11.4},
        {title: "鳥の詩", diff: 3, constant: 11.0},
        {title: "That Is How I Roll!", diff: 3, constant: 11.0},
        {title: "檄!帝国華撃団", diff: 3, constant: 11.0},
        {title: "Halcyon", diff: 2, constant: 11.0},
        {title: "Hyper Active", diff: 2, constant: 11.0},
        {title: "Gate of Doom", diff: 2, constant: 11.0},
        {title: "First Twinkle", diff: 3, constant: 11.0},
        {title: "STARTLINER", diff: 3, constant: 11.0},
        {title: "Ai Nov", diff: 2, constant: 11.0},
        {title: "secret base ～君がくれたもの～ (10 years after Ver.)", diff: 3, constant: 11.0},
        {title: "カンペキWill", diff: 3, constant: 11.0},
        {title: "アンハッピーリフレイン", diff: 2, constant: 11.0},
        {title: "Rule the World!!", diff: 2, constant: 10.1},
        {title: "Scream out! -音華鏡 Re:BREAK-", diff: 2, constant: 10.0},
        {title: "SAKURA", diff: 3, constant: 10.7},
        {title: "しゅわりん☆どり〜みん", diff: 3, constant: 10.7},
        {title: "初音ミクの激唱", diff: 2, constant: 10.7},
        {title: "AMAZING MIGHTYYYY!!!!", diff: 2, constant: 10.7},
        {title: "Kattobi KEIKYU Rider", diff: 2, constant: 10.7},
        {title: "Dolphika", diff: 2, constant: 10.7},
        {title: "ロッキンピンクモンスター", diff: 2, constant: 10.7},
        {title: "連れ去って・閉じ込めて・好きにして", diff: 3, constant: 10.7},
        {title: "君の知らない物語", diff: 3, constant: 10.0},
        {title: "ときめきエクスペリエンス！", diff: 3, constant: 10.0},
        {title: "えがおのオーケストラっ！", diff: 3, constant: 10.0},
        {title: "脳漿炸裂ガール", diff: 2, constant: 10.0},
        {title: "鬼KYOKAN", diff: 2, constant: 10.0},
        {title: "ぼくらの16bit戦争", diff: 2, constant: 10.0},
        {title: "幻想のサテライト", diff: 2, constant: 10.0},
        {title: "Destiny Runner", diff: 2, constant: 10.0},
        {title: "最終鬼畜妹フランドール・Ｓ", diff: 2, constant: 10.0},
        {title: "Oshama Scramble!", diff: 2, constant: 10.0},
        {title: "Cyberozar", diff: 2, constant: 10.0},
        {title: "Paqqin", diff: 2, constant: 10.0},
        {title: "We Gonna Journey", diff: 2, constant: 10.0},
        {title: "閃鋼のブリューナク", diff: 2, constant: 10.0},
        {title: "P！P！P！P！がおー!!", diff: 2, constant: 10.0},
        {title: "チュルリラ・チュルリラ・ダッダッダ！", diff: 2, constant: 10.0},
        {title: "ロボットプラネットユートピア", diff: 2, constant: 10.0},
        {title: "クイーンオブハート", diff: 2, constant: 10.0},
        {title: "TAKE ON THE WORLD", diff: 2, constant: 10.0},
        {title: "TeA", diff: 2, constant: 10.0},
    ];


    const ONGEKI_PREMIUM_RATE_TARGET_URL = 'https://ongeki-net.com/ongeki-mobile/home/ratingTargetMusic/';
    const ONGEKI_RECORD_URL = 'https://ongeki-net.com/ongeki-mobile/record/';
    const TOOLNAME = 'レート情報追加ツール';


    /* 定数計算関連 */

    const RANKSSSplus = 1007500;
    const RANKSSS     = 1000000;
    const RANKSS      =  990000;
    const RANKS       =  970000;
    const RANKAAA     =  940000;
    const RANKAA      =  900000;

    // TODO: RANKAの場合の追加
    // MEMO: RANKAAとAAAは自力で確かめられない
    const calcRate = function(constant, score){
        if (score >= RANKSSSplus)
            return constant + 2.0;
        else if (score >= RANKSSS)
            return constant + 1.5 + (score - RANKSSS) / 15000;
        else if (score >= RANKSS)
            return constant + 1.0 + (score - RANKSS) / 20000;
        else if (score >= RANKS)
            return constant + (score - RANKS) / 20000;
        else if (score >= RANKAA)
            return constant - (RANKS - score) / 175 / 100;
        else // rankA以下は計算方法がわからない
            return 0.0;
    }


    // 難易度に対応する数値を返す
    const diffOfString = function(str) {
        switch (str){
        case "lunatic":
            return 4;
        case "master":
            return 3;
        case "expert":
            return 2;
        case "advanced":
            return 1;
        default: // basic
            return 0
        }
    }

    // 定数表から定数を取ってくる
    const getConstant = function(title, diff){
        const idiff = diffOfString(diff);
        for (let item of constantTable){
            if (item.title == title && item.diff == idiff){
                return item.constant;
            }
        }
        return 0.0;
    }


    /* JS utils */

    // 小数点以下2位までに丸める
    const round2 = function(num){
        return Math.floor(num * Math.pow(10, 2)) / Math.pow(10, 2);
    }

    // 文字列からカンマを除く
    // removeComma("1,000,000") -> "1000000")
    const removeComma = function(str){
        return str.split(',').join('');
    }


    /* HTML操作 */

    // boxにstr:valueという情報を追加して返す
    const makeInfoBox = function(box, str, value) {
        box.getElementsByClassName('score_label')[0].textContent = str;
        box.getElementsByClassName('f_14')[0].textContent = value;
        return box;
    }

    // 1曲ごとの処理
    const modifyOneMusicHTML = function(x){
        // DOMからデータを取得
        const musicTitle = x.getElementsByClassName('music_label')[0].textContent;
        const score = x.getElementsByClassName('f_14')[0].textContent;
        const diff = x.classList.value.split(' ')[1].split('_')[0];

        // 定数とレート値を算出
        const musicConstant = getConstant(musicTitle, diff);
        // スコアにはカンマがついた形(1,000,000)となっているため，除く+数値に変換してcalcRateに渡す
        // 計算した値は丸める
        const musicRate = round2(calcRate(musicConstant, Number(removeComma(score))));

        // 情報を表示するBoxを作成
        const scoreBox = x.getElementsByClassName('w_260')[0];
        const constantBox = makeInfoBox(scoreBox.cloneNode(true), "MUSIC CONSTANT", musicConstant);
        const rateBox = makeInfoBox(scoreBox.cloneNode(true), "MUSIC RATE", musicRate);

        // HTMLにBoxを追加
        x.appendChild(constantBox);
        x.appendChild(rateBox);

        // 集計処理のために単曲レート値を返す
        return {rate: musicRate, diff: diff}
    }

    // ベスト枠，リセント枠，新曲枠の数
    const NBEST = 30;
    const NRECENT = 10;
    const NNEWMUSIC = 15;

    // ベスト平均とか到達可能とかを計算
    // 曲数が足りなくても規定の曲数で割る
    const calcParams = function(d){
        const bestSum = d.bests.reduce(
            (acc, rate) => acc + rate);
        const recentSum = d.recents.reduce(
            (acc, rate) => acc + rate);
        const newSum = d.news.reduce(
            (acc, rate) => acc + rate);
        const reachable =
              (bestSum + d.topRate * 10 + newSum) / (NBEST + NRECENT + NNEWMUSIC);

        // 全曲レート値上位30曲
        const allBests =
              d.bests.concat(d.news)
              .sort( (x, y) => { return y - x; })
              .slice(0, NBEST);
        const allBestsSum = allBests.reduce(
            (acc, rate) => acc + rate);
        return {
            bestAve: bestSum / NBEST,
            recentAve: recentSum / NRECENT,
            newAve: newSum / NNEWMUSIC,
            reachable: reachable,
            allBestAve: allBestsSum / NBEST,
            allBestMin: allBests[NBEST - 1]
        };
    }

    // ベスト平均などを表示するBox
    const makeParamBox = function(box, params){
        // 各パラメータを表示するBox
        const detailBox = box.getElementsByClassName('w_260')[0];

        // 適当なboxをコピーして使用
        const newAveBox = makeInfoBox(detailBox.cloneNode(true), "新曲枠平均", round2(params.newAve));
        const bestAveBox = makeInfoBox(detailBox.cloneNode(true), "ベスト枠平均", round2(params.bestAve));
        const recentAveBox = makeInfoBox(detailBox.cloneNode(true), "リセント枠平均", round2(params.recentAve));
        const reachableBox = makeInfoBox(detailBox.cloneNode(true), "到達可能レート", round2(params.reachable));
        const allBestAveBox = makeInfoBox(detailBox.cloneNode(true), "全曲ベスト平均", round2(params.allBestAve));
        const allBestMinBox = makeInfoBox(detailBox.cloneNode(true), "全曲ベスト下限", round2(params.allBestMin));

        // 元のTECHNICAL HIGHSCOREを消す
        detailBox.remove();

        // ベスト平均などを追加
        box.appendChild(newAveBox);
        box.appendChild(bestAveBox);
        box.appendChild(recentAveBox);
        box.appendChild(reachableBox);
        box.appendChild(allBestAveBox);
        box.appendChild(allBestMinBox);

        return box;
    }

    // レーティング対象曲のページに定数とレート値を追加
    const addConstantAndRate = function(){
        // 楽曲Boxを取得
        // 先頭6つは余分データ.slice(6);
        const musics = Array.prototype.slice.call(document.getElementsByClassName('wrapper main_wrapper t_c')[0].children).slice(6);

        // ベスト平均などを表示するBox
        // 最初の楽曲Boxを雑にコピー
        let paramBox = musics[0].cloneNode(true);
        // レベル表示を消す
        paramBox.getElementsByClassName('score_level')[0].textContent = ' ';
        // 曲表示の部分を書き換え
        paramBox.getElementsByClassName('music_label')[0].textContent = 'レート情報';


        let acc = { bests: [], recents: [], news: [], topRate: null };

        // オンゲキNETの並び順に合わせる
        let kind_param_list = ['news', 'bests', 'recents'];
        let param_idx = 0;

        for(let obj of musics){
            // m_15が 新曲/ベスト/リセント/候補 の区切り
            if(obj.classList.contains('m_15')){
                param_idx += 1;
                continue;
            }

            // 楽曲データでないときは飛ばす
            if(!obj.classList.contains('basic_btn'))
                continue;

            // MEMO: ここまで残ってるobjはmusicBoxだけ

            // 楽曲Boxの処理 + データ集計処理
            let info = modifyOneMusicHTML(obj);
            if(param_idx >= 3)
                continue;
            acc[kind_param_list[param_idx]].push(info.rate);

            // topRateの取得
            if(param_idx == 1 && acc.topRate == null && info.diff != 4){
                acc.topRate = info.rate;
            }
        }

        // ベスト平均などを計算
        const params = calcParams(acc);
        paramBox = makeParamBox(paramBox, params);
        paramBox.classList.remove("master_score_back");

        // ベスト枠平均などのパラメータを「レーティング対象曲(ベスト)」の上に追加
        // 追加する場所の親を取得
        const ref = document.getElementsByClassName('main_wrapper')[0];
        // 追加する場所の下を取得
        const underRef = document.getElementsByClassName('m_15')[1];
        // 追加
        ref.insertBefore(paramBox, underRef);
    }

    // レベル別一覧画面でテクニカルスコア順降順ソート
    const technicalScoreSort = function() {
        [].slice.call(document.getElementsByClassName('basic_btn'))
                .map((d) => {var score = d.getElementsByClassName('score_value')[2];
                             return {dom: d, value: score ? Number(score.textContent.split(',').join('')) : 0}})
                .sort((a, b) => {return b.value - a.value})
                .forEach((v) => document.getElementsByClassName('container3')[0].appendChild(v.dom))
    }

    // テクニカルスコア降順ソートが有効なURL(ONGEKI_RECORD_URL)以下
    const ONGEKI_SORTABLE_URLS = ['musicGenre', 'musicWord', 'musicCharacter', 'musicLevel'];

    const main = function() {
        const url = location.href;
        if (url == ONGEKI_PREMIUM_RATE_TARGET_URL){
            alert('定数とレート値を計算します');
            console.log('定数とレート値追加中...');
            addConstantAndRate();
            return;
        }
        if (url.indexOf(ONGEKI_RECORD_URL) != -1){
            // ONGEKI_RECORD_URLがurlの先頭かつ複数含まれることはない
            const select_type = url.split(ONGEKI_RECORD_URL)[1].split('/')[0];
            if (ONGEKI_SORTABLE_URLS.includes(select_type)){
                console.log('テクニカルスコア順ソート');
                technicalScoreSort();
                return;
            }
        }
        alert('現在のURLが正しくありません...');
        alert('レート値計算する場合は，「プレイヤーデータ詳細」から「レーティング対象曲」タブを選択して下さい」');
        return;
    }
    main();
})();
