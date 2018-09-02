(function (){
    const ONGEKI_PREMIUM_RATE_TARGET_URL = "https://ongeki-net.com/ongeki-mobile/home/ratingTargetMusic/";
    const DEFAULTVERSION = 'origin'; // 現在のバージョン
    const TOOLNAME = 'レートの情報追加ツール';

    const RANKSSSplus = 1007500;
    const RANKSSS     = 1000000;
    const RANKSS      =  990000;
    const RANKS       =  970000;
    const RANKAAA     =  940000;
    const RANKAA      =  900000;

    // TODO: RANKAAA以下の場合の追加
    const calcRate = function(constant, score){
        if (score >= RANKSSSplus){
            return constant + 2.0;
        } else if (score >= RANKSSS){
            return constant + 1.5 + (score - RANKSSS) / 15000;
        } else if (score >= RANKSS){
            return constant + 1.0 + (score - RANKSS) / 20000;
        } else if (score >= RANKS){
            return constant + (score - RANKS) / 20000;
        } // else if (score >= RANKAAA){
        //     return constant - 1.5 + (score - RANKAAA) * 3 / 50000;
        // } else if (score >= RANKAA){
        //     return constant - 3.0 + (score - RANKAA) * 3 / 50000;
        // } else if (score >= RANKA) {
        //     return constant - 5.0 + (score - RANKA) / 12500;
        // } 
        else {
            return 0.0;
        }
    }

    // 難易度に対応する数値を返す
    // diffOfString("master") -> 3
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
            if (item.title == title && item.difficulty == idiff){
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

        // Boxを追加
        x.appendChild(constantBox);
        x.appendChild(rateBox);
    }

    // レーティング対象曲のページに定数とレート値を追加
    const addConstantAndRate = function(){
        const musics = document.getElementsByClassName('basic_btn');
        [].forEach.call(musics, function(x){ modifyOneMusicHTML(x) });
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
