"use strict";
exports.__esModule = true;
var constant_info_1 = require("./constant_info");
(function () {
    var ONGEKI_PREMIUM_RATE_TARGET_URL = "https://ongeki-net.com/ongeki-mobile/home/ratingTargetMusic/";
    var ONGEKI_RECORD_URL = "https://ongeki-net.com/ongeki-mobile/record/";
    /* 定数計算関連 */
    var RANKSSSplus = 1007500;
    var RANKSSS = 1000000;
    var RANKSS = 990000;
    var RANKS = 970000;
    // const RANKAAA = 940000;
    var RANKAA = 900000;
    // TODO: RANKAの場合の追加
    // MEMO: RANKAAとAAAは自力で確かめられない
    var calcRate = function (constant, score) {
        if (score >= RANKSSSplus) {
            return constant + 2.0;
        }
        else if (score >= RANKSSS) {
            return constant + 1.5 + (score - RANKSSS) / 15000;
        }
        else if (score >= RANKSS) {
            return constant + 1.0 + (score - RANKSS) / 20000;
        }
        else if (score >= RANKS) {
            return constant + (score - RANKS) / 20000;
        }
        else if (score >= RANKAA) {
            return constant - (RANKS - score) / 175 / 100;
        }
        else {
            // rankA以下は計算方法がわからない
            return 0.0;
        }
    };
    // 難易度に対応する数値を返す
    var diffOfString = function (str) {
        switch (str) {
            case "lunatic":
                return 4;
            case "master":
                return 3;
            case "expert":
                return 2;
            case "advanced":
                return 1;
            default:
                // basic
                return 0;
        }
    };
    // 定数表から定数を取得
    var getConstant = function (title, diff, defaultConstantData) {
        var idiff = diffOfString(diff);
        // 定数取得
        // 条件に一致するもの全て取得
        var musicConstants = constant_info_1.constantTable.filter(function (m) { return m.title == title && m.diff == idiff; });
        switch (musicConstants.length) {
            case 0:
                // 定数がまだ本ツールに登録されていない場合は難易度帯から算出したデフォルト値を使用
                return {
                    constant: defaultConstantData.defaultConstant,
                    isDefault: true
                };
                break;
            case 1:
                // 1つの場合は検索結果を使用
                return {
                    constant: musicConstants[0].constant,
                    isDefault: false
                };
                break;
            default:
                // 検索結果が複数の場合はvalid関数を満たす最初の定数を使用
                for (var _i = 0, musicConstants_1 = musicConstants; _i < musicConstants_1.length; _i++) {
                    var musicConstant = musicConstants_1[_i];
                    if (defaultConstantData.validFunc(musicConstant.constant)) {
                        return {
                            constant: musicConstant.constant,
                            isDefault: false
                        };
                    }
                }
                // 満たすものがなかった場合はデフォルト値(通常はない)
                return {
                    constant: defaultConstantData.defaultConstant,
                    isDefault: true
                };
        }
    };
    // 難易度からデフォルト定数(例: 13+なら13.7)を取得
    var getDefaultConstant = function (diffStr) {
        var diffPair = diffStr.split("+");
        if (diffPair.length == 1) {
            var defaultConstant_1 = parseInt(diffPair[0]);
            // XXX: 同名の曲(Singularity)が出たため定数が指定の範囲内にあるかチェックする
            // ただし同じ難易度帯に出てしまったらこの方法では対応できないため暫定対応
            var validFunc = function (c) {
                return defaultConstant_1 <= c && c < defaultConstant_1 + 0.7;
            };
            return {
                defaultConstant: defaultConstant_1,
                validFunc: validFunc
            };
        }
        else {
            var defaultConstant_2 = parseFloat(diffPair[0] + ".7");
            var validFunc = function (c) {
                return defaultConstant_2 <= c && c < parseInt(String(defaultConstant_2)) + 1;
            };
            return {
                defaultConstant: defaultConstant_2,
                validFunc: validFunc
            };
        }
    };
    /* JS utils */
    // 小数点以下2位までに丸める
    // 以下の方法だと round2(16.4) -> 16.39 になってしまうため，文字列でうまいことする
    // const round2 = n => Math.floor(n * Math.pow(10, 2)) / Math.pow(10, 2);
    var round2 = function (n) {
        var numStrs = (n + '').split('.');
        // 整数
        if (numStrs.length === 1)
            return n;
        // 小数
        if (numStrs[1].length < 3) {
            return n;
        }
        else {
            return Number(numStrs[0] + '.' + numStrs[1].slice(0, 2));
        }
    };
    // 文字列からカンマを除く
    // removeComma("1,000,000") -> "1000000")
    var removeComma = function (s) { return s.split(",").join(""); };
    /* HTML操作 */
    // boxにstr:valueという情報を追加して返す
    var makeInfoBox = function (box, str, value, isItalic) {
        if (isItalic === void 0) { isItalic = false; }
        box.getElementsByClassName("score_label")[0].textContent = str;
        box.getElementsByClassName("f_14")[0].textContent = value;
        if (isItalic)
            box.getElementsByClassName("f_14")[0].style.fontStyle = "italic";
        return box;
    };
    // 1曲ごとの処理
    var modifyOneMusicHTML = function (x) {
        // DOMからデータを取得
        var musicTitle = x.getElementsByClassName("music_label")[0].textContent;
        var score = x.getElementsByClassName("f_14")[0].textContent;
        var diff = x.classList.value.split(" ")[1].split("_")[0];
        // musicDiff: 13, 13+などのこと(雑コメ)
        var musicDiff = x.getElementsByClassName("score_level")[0].textContent;
        // 定数とレート値を算出
        var musicConstantInfo = getConstant(musicTitle, diff, getDefaultConstant(musicDiff));
        // スコアにはカンマがついた形(1,000,000)となっているため，除く+数値に変換してcalcRateに渡す
        // 計算した値は丸める
        var musicRate = round2(calcRate(musicConstantInfo.constant, Number(removeComma(score))));
        // 情報を表示するBoxを作成
        var scoreBox = x.getElementsByClassName("w_260")[0];
        var constantBox = makeInfoBox(scoreBox.cloneNode(true), "MUSIC CONSTANT", musicConstantInfo.constant, musicConstantInfo.isDefault);
        var rateBox = makeInfoBox(scoreBox.cloneNode(true), "MUSIC RATE", musicRate, musicConstantInfo.isDefault);
        // HTMLにBoxを追加
        x.appendChild(constantBox);
        x.appendChild(rateBox);
        // 集計処理のために単曲レート値を返す
        return { rate: musicRate, diff: diff };
    };
    // ベスト枠，リセント枠，新曲枠の数
    var NBEST = 30;
    var NRECENT = 10;
    var NNEWMUSIC = 15;
    var NALL = NBEST + NRECENT + NNEWMUSIC;
    // ベスト平均とか到達可能とかを計算
    // 曲数が足りなくても規定の曲数で割る
    var calcParams = function (d) {
        var add = function (x, y) { return x + y; };
        var bestSum = d.bests.reduce(add);
        var recentSum = d.recents.reduce(add);
        var newSum = d.news.reduce(add);
        var reachableSum = bestSum + d.topRate * 10 + newSum;
        // 全曲レート値上位30曲
        var allBests = d.bests
            .concat(d.news)
            .sort(function (x, y) { return y - x; })
            .slice(0, NBEST);
        var allBestsSum = allBests.reduce(add);
        return {
            bestSum: bestSum,
            nBest: d.bests.length,
            recentSum: recentSum,
            nRecent: d.recents.length,
            newSum: newSum,
            nNew: d.news.length,
            reachableSum: reachableSum,
            // 新旧全部合わせたベスト30曲の平均・下限
            allBestAve: allBestsSum,
            allBestMin: allBests[NBEST - 1]
        };
    };
    // ベスト平均などを表示するBox
    var makeParamBox = function (box, params) {
        // 各パラメータを表示するBox
        var detailBox = box.getElementsByClassName("w_260")[0];
        // font size
        detailBox
            .getElementsByClassName("score_value")[0]
            .getElementsByClassName("f_14")[0].style.fontSize = "13px";
        // 適当なboxをコピーして使用
        var newAveBox = makeInfoBox(detailBox.cloneNode(true), "\u65B0\u66F2\u67A0\u5E73\u5747 (" + params.nNew + "/" + NNEWMUSIC + ")", round2(params.newSum / NNEWMUSIC) + "(" + round2(params.newSum) + ")");
        var bestAveBox = makeInfoBox(detailBox.cloneNode(true), "\u30D9\u30B9\u30C8\u67A0\u5E73\u5747 (" + params.nBest + "/" + NBEST + ")", round2(params.bestSum / NBEST) + "(" + round2(params.bestSum) + ")");
        var recentAveBox = makeInfoBox(detailBox.cloneNode(true), "\u30EA\u30BB\u30F3\u30C8\u67A0\u5E73\u5747 (" + params.nRecent + "/" + NRECENT + ")", round2(params.recentSum / NRECENT) + "(" + round2(params.recentSum) + ")");
        var reachableBox = makeInfoBox(detailBox.cloneNode(true), "到達可能レート", round2(params.reachableSum / NALL) +
            "(" +
            round2(params.reachableSum) +
            ")");
        //const allBestAveBox = makeInfoBox(detailBox.cloneNode(true), "全曲上位30曲平均", round2(params.allBestAve));
        //const allBestMinBox = makeInfoBox(detailBox.cloneNode(true), "上位30曲下限", round2(params.allBestMin));
        // 元のTECHNICAL HIGHSCOREを消す
        detailBox.remove();
        // ベスト平均などを追加
        box.appendChild(newAveBox);
        box.appendChild(bestAveBox);
        box.appendChild(recentAveBox);
        box.appendChild(reachableBox);
        //box.appendChild(allBestAveBox);
        //box.appendChild(allBestMinBox);
        return box;
    };
    // レーティング対象曲のページに定数とレート値を追加
    var addConstantAndRate = function () {
        // 楽曲Boxを取得
        // 先頭6つは余分データ.slice(6);
        var musics = Array.prototype.slice
            .call(document.getElementsByClassName("wrapper main_wrapper t_c")[0].children)
            .slice(6);
        // ベスト平均などを表示するBox
        // 最初の楽曲Boxを雑にコピー
        var paramBox = musics[0].cloneNode(true);
        // レベル表示を消す
        paramBox.getElementsByClassName("score_level")[0].textContent = " ";
        // 曲表示の部分を書き換え
        paramBox.getElementsByClassName("music_label")[0].textContent =
            "レート情報";
        var acc = { bests: [], recents: [], news: [], topRate: null };
        // オンゲキNETの並び順に合わせる
        var paramList = ["news", "bests", "recents"];
        var paramIdx = 0;
        for (var _i = 0, musics_1 = musics; _i < musics_1.length; _i++) {
            var obj = musics_1[_i];
            // m_15が 新曲/ベスト/リセント/候補 の区切り
            if (obj.classList.contains("m_15")) {
                paramIdx += 1;
                continue;
            }
            // 楽曲データでないときは飛ばす
            if (!obj.classList.contains("basic_btn")) {
                continue;
            }
            // MEMO: ここまで残ってるobjはmusicBoxだけ
            // 楽曲Boxの処理 + データ集計処理
            var info = modifyOneMusicHTML(obj);
            if (paramIdx >= 3) {
                continue;
            }
            acc[paramList[paramIdx]].push(info.rate);
            // topRateの取得
            if (paramIdx == 1 && acc.topRate == null && info.diff != 4) {
                acc.topRate = info.rate;
            }
        }
        // ベスト平均などを計算
        var params = calcParams(acc);
        paramBox = makeParamBox(paramBox, params);
        paramBox.classList.remove("master_score_back");
        // ベスト枠平均などのパラメータを「レーティング対象曲(ベスト)」の上に追加
        // 追加する場所の親を取得
        var ref = document.getElementsByClassName("main_wrapper")[0];
        // 追加する場所の下を取得
        var underRef = document.getElementsByClassName("m_15")[1];
        // 追加
        ref.insertBefore(paramBox, underRef);
    };
    // レベル別一覧画面でテクニカルスコア順降順ソート
    var technicalScoreSort = function () {
        [].slice
            .call(document.getElementsByClassName("basic_btn"))
            .map(function (d) {
            var score = d.getElementsByClassName("score_value")[2];
            return {
                dom: d,
                value: score ? Number(score.textContent.split(",").join("")) : 0
            };
        })
            .sort(function (a, b) { return b.value - a.value; })
            .forEach(function (v) {
            return document.getElementsByClassName("container3")[0].appendChild(v.dom);
        });
    };
    // テクニカルスコア降順ソートが有効なURL(ONGEKI_RECORD_URL)以下
    var ONGEKI_SORTABLE_URLS = [
        "musicGenre",
        "musicWord",
        "musicCharacter",
        "musicLevel"
    ];
    var main = function () {
        var url = location.href;
        if (url == ONGEKI_PREMIUM_RATE_TARGET_URL) {
            alert("定数とレート値を計算します");
            console.log("定数とレート値追加中...");
            addConstantAndRate();
            return;
        }
        if (url.indexOf(ONGEKI_RECORD_URL) != -1) {
            // ONGEKI_RECORD_URLがurlの先頭かつ複数含まれることはない
            var selectType = url.split(ONGEKI_RECORD_URL)[1].split("/")[0];
            if (ONGEKI_SORTABLE_URLS.includes(selectType)) {
                console.log("テクニカルスコア順ソート");
                technicalScoreSort();
                return;
            }
        }
        alert("現在のURLが正しくありません...");
        alert("レート値を計算する場合は，「プレイヤーデータ詳細」から「レーティング対象曲」タブを選択して下さい」");
        return;
    };
    main();
})();
