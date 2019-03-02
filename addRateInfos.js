(function (){
    const ONGEKI_PREMIUM_RATE_TARGET_URL = "https://ongeki-net.com/ongeki-mobile/home/ratingTargetMusic/";
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
            return constant - 4.0 + (score - RANKAA) * 175 / 100;
        else 
            return 0.0;
    }


    /* utilities */

    // 難易度に対応する数値を返す
    // TODO: lunaticで合っているか調べたい
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
        default:
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
        return musicRate;
    }

    // ベスト枠，リセント枠，新曲枠の数
    const NBEST = 30;
    const NRECENT = 10;
    const NNEWMUSIC = 15;

    // ベスト平均とか到達可能とかを計算
    const calcParams = function(d){
        const bestAve = d.bestSum / NBEST;
        const recentAve = d.recentSum / NRECENT;
        const newAve = d.newSum / NNEWMUSIC;
        const reachable = (d.bestSum + d.topRate * 10 + d.newSum) / (NBEST + NRECENT + NNEWMUSIC);
        return { bestAve: bestAve, recentAve: recentAve, newAve: newAve, reachable: reachable };
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

        // 元のTECHNICAL HIGHSCOREを消す
        detailBox.remove();

        // ベスト平均などを追加
        box.appendChild(newAveBox);
        box.appendChild(bestAveBox);
        box.appendChild(recentAveBox);
        box.appendChild(reachableBox);

        return box;
    }

    // レーティング対象曲のページに定数とレート値を追加
    const addConstantAndRate = function(){
        // 楽曲Boxを取得
        const musics = document.getElementsByClassName('basic_btn');

        // ベスト平均などを表示するBox
        // 最初の楽曲Boxを雑にコピー
        let paramBox = musics[0].cloneNode(true);
        // レベル表示を消す
        paramBox.getElementsByClassName('score_level')[0].textContent = ' ';
        // 曲表示の部分を書き換え
        paramBox.getElementsByClassName('music_label')[0].textContent = 'レート情報';

        let acc = { bestSum: 0.0, recentSum: 0.0, newSum: 0.0, topRate: 0.0 };

        // 新曲枠のBoxについての処理
        // 返り値で新曲枠の集計も
        for(let i = 0; i < NNEWMUSIC; i += 1){
            let rate = modifyOneMusicHTML(musics[i]);
            acc.newSum += rate;
        }

        // ベスト枠のBoxについての処理
        // 返り値でベスト枠の集計も
        for(let i = NNEWMUSIC; i < NNEWMUSIC + NBEST; i += 1){
            let rate = modifyOneMusicHTML(musics[i]);
            // ベスト枠の一番上は曲別最大レート
            if (i == NNEWMUSIC)
                acc.topRate = rate;

            acc.bestSum += rate;
        }

        // リセント枠のBoxについての処理
        // 返り値でリセント枠の集計も
        for(let i = NNEWMUSIC + NBEST; i < NNEWMUSIC + NBEST + NRECENT; i += 1){
            let rate = modifyOneMusicHTML(musics[i]);
            acc.recentSum += rate;
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

    const main = function() {
        const url = location.href;
        if (url == ONGEKI_PREMIUM_RATE_TARGET_URL){
            alert('定数とレート値を計算します');
            addConstantAndRate();
            console.log('定数とレート値追加中...');
        } else {
            alert('「プレイヤーデータ詳細」から「レーティング対象曲」タブを選択して下さい」');
            return;
        }
    }
    main();
})();
