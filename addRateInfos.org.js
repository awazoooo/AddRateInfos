import { constantTable } from './constant_info';

(function() {
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

  const ONGEKI_PREMIUM_RATE_TARGET_URL =
    "https://ongeki-net.com/ongeki-mobile/home/ratingTargetMusic/";
  const ONGEKI_RECORD_URL = "https://ongeki-net.com/ongeki-mobile/record/";
  // const TOOLNAME = 'レート情報追加ツール';

  /* 定数計算関連 */

  const RANKSSSplus = 1007500;
  const RANKSSS = 1000000;
  const RANKSS = 990000;
  const RANKS = 970000;
  // const RANKAAA = 940000;
  const RANKAA = 900000;

  // TODO: RANKAの場合の追加
  // MEMO: RANKAAとAAAは自力で確かめられない
  const calcRate = (constant, score) => {
    if (score >= RANKSSSplus) {
      return constant + 2.0;
    } else if (score >= RANKSSS) {
      return constant + 1.5 + (score - RANKSSS) / 15000;
    } else if (score >= RANKSS) {
      return constant + 1.0 + (score - RANKSS) / 20000;
    } else if (score >= RANKS) {
      return constant + (score - RANKS) / 20000;
    } else if (score >= RANKAA) {
      return constant - (RANKS - score) / 175 / 100;
    } else {
      // rankA以下は計算方法がわからない
      return 0.0;
    }
  };

  // 難易度に対応する数値を返す
  const diffOfString = str => {
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

  const useDefaultConstant = c => !c || c.constant == 0.0;

  // 定数表から定数を取得
  const getConstant = (title, diff, defaultConstant) => {
    const idiff = diffOfString(diff);

    // 定数取得
    const musicConstant = constantTable.find(
      m => m.title == title && m.diff == idiff
    );
    if (!useDefaultConstant(musicConstant))
      return {
        constant: musicConstant.constant,
        isDefault: false
      };

    // 定数がまだ本ツールに登録されていない
    return {
      constant: defaultConstant,
      isDefault: true
    };
  };

  // 難易度からデフォルト定数(例: 13+なら13.7)を取得
  const getDefaultConstant = diffStr => {
    const diffPair = diffStr.split("+");
    const constantStr = diffPair.length == 1 ? diffPair[0] : diffPair[0] + ".7";
    return parseFloat(constantStr);
  };

  /* JS utils */

  // 小数点以下2位までに丸める
  // 以下の方法だと round2(16.4) -> 16.39 になってしまうため，文字列でうまいことする
  // const round2 = n => Math.floor(n * Math.pow(10, 2)) / Math.pow(10, 2);
  const round2 = n => {
    const numStrs = (n + '').split('.');
    // 整数
    if (numStrs.length === 1)
      return n;

    // 少数
    if (numStrs[1].length < 3) {
      return n;
    } else {
      return Number(numStrs[0] + '.' + numStrs[1].slice(0, 2))
    }
  }

  // 文字列からカンマを除く
  // removeComma("1,000,000") -> "1000000")
  const removeComma = s => s.split(",").join("");

  /* HTML操作 */

  // boxにstr:valueという情報を追加して返す
  const makeInfoBox = (box, str, value, isItalic = false) => {
    box.getElementsByClassName("score_label")[0].textContent = str;
    box.getElementsByClassName("f_14")[0].textContent = value;
    if (isItalic)
      box.getElementsByClassName("f_14")[0].style.fontStyle = "italic";
    return box;
  };

  // 1曲ごとの処理
  const modifyOneMusicHTML = x => {
    // DOMからデータを取得
    const musicTitle = x.getElementsByClassName("music_label")[0].textContent;
    const score = x.getElementsByClassName("f_14")[0].textContent;
    const diff = x.classList.value.split(" ")[1].split("_")[0];
    // musicDiff: 13, 13+などのこと(雑コメ)
    const musicDiff = x.getElementsByClassName("score_level")[0].textContent;

    // 定数とレート値を算出
    const musicConstantInfo = getConstant(
      musicTitle,
      diff,
      getDefaultConstant(musicDiff)
    );
    // スコアにはカンマがついた形(1,000,000)となっているため，除く+数値に変換してcalcRateに渡す
    // 計算した値は丸める
    const musicRate = round2(
      calcRate(musicConstantInfo.constant, Number(removeComma(score)))
    );


    // 情報を表示するBoxを作成
    const scoreBox = x.getElementsByClassName("w_260")[0];
    const constantBox = makeInfoBox(
      scoreBox.cloneNode(true),
      "MUSIC CONSTANT",
      musicConstantInfo.constant,
      musicConstantInfo.isDefault
    );
    const rateBox = makeInfoBox(
      scoreBox.cloneNode(true),
      "MUSIC RATE",
      musicRate,
      musicConstantInfo.isDefault
    );

    // HTMLにBoxを追加
    x.appendChild(constantBox);
    x.appendChild(rateBox);

    // 集計処理のために単曲レート値を返す
    return { rate: musicRate, diff: diff };
  };

  // ベスト枠，リセント枠，新曲枠の数
  const NBEST = 30;
  const NRECENT = 10;
  const NNEWMUSIC = 15;
  const NALL = NBEST + NRECENT + NNEWMUSIC;

  // ベスト平均とか到達可能とかを計算
  // 曲数が足りなくても規定の曲数で割る
  const calcParams = d => {
    const add = (x, y) => x + y;
    const bestSum = d.bests.reduce(add);
    const recentSum = d.recents.reduce(add);
    const newSum = d.news.reduce(add);
    const reachableSum = bestSum + d.topRate * 10 + newSum;

    // 全曲レート値上位30曲
    const allBests = d.bests
      .concat(d.news)
      .sort((x, y) => y - x)
      .slice(0, NBEST);
    const allBestsSum = allBests.reduce(add);
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
  const makeParamBox = (box, params) => {
    // 各パラメータを表示するBox
    const detailBox = box.getElementsByClassName("w_260")[0];
    // font size
    detailBox
      .getElementsByClassName("score_value")[0]
      .getElementsByClassName("f_14")[0].style.fontSize = "13px";

    // 適当なboxをコピーして使用
    const newAveBox = makeInfoBox(
      detailBox.cloneNode(true),
      `新曲枠平均 (${params.nNew}/${NNEWMUSIC})`,
      round2(params.newSum / NNEWMUSIC) + "(" + round2(params.newSum) + ")"
    );
    const bestAveBox = makeInfoBox(
      detailBox.cloneNode(true),
      `ベスト枠平均 (${params.nBest}/${NBEST})`,
      round2(params.bestSum / NBEST) + "(" + round2(params.bestSum) + ")"
    );
    const recentAveBox = makeInfoBox(
      detailBox.cloneNode(true),
      `リセント枠平均 (${params.nRecent}/${NRECENT})`,
      round2(params.recentSum / NRECENT) + "(" + round2(params.recentSum) + ")"
    );
    const reachableBox = makeInfoBox(
      detailBox.cloneNode(true),
      "到達可能レート",
      round2(params.reachableSum / NALL) +
        "(" +
        round2(params.reachableSum) +
        ")"
    );
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
  const addConstantAndRate = () => {
    // 楽曲Boxを取得
    // 先頭6つは余分データ.slice(6);
    const musics = Array.prototype.slice
      .call(
        document.getElementsByClassName("wrapper main_wrapper t_c")[0].children
      )
      .slice(6);

    // ベスト平均などを表示するBox
    // 最初の楽曲Boxを雑にコピー
    let paramBox = musics[0].cloneNode(true);
    // レベル表示を消す
    paramBox.getElementsByClassName("score_level")[0].textContent = " ";
    // 曲表示の部分を書き換え
    paramBox.getElementsByClassName("music_label")[0].textContent =
      "レート情報";

    const acc = { bests: [], recents: [], news: [], topRate: null };

    // オンゲキNETの並び順に合わせる
    const paramList = ["news", "bests", "recents"];
    let paramIdx = 0;

    for (const obj of musics) {
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
      const info = modifyOneMusicHTML(obj);
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
    const params = calcParams(acc);
    paramBox = makeParamBox(paramBox, params);
    paramBox.classList.remove("master_score_back");

    // ベスト枠平均などのパラメータを「レーティング対象曲(ベスト)」の上に追加
    // 追加する場所の親を取得
    const ref = document.getElementsByClassName("main_wrapper")[0];
    // 追加する場所の下を取得
    const underRef = document.getElementsByClassName("m_15")[1];
    // 追加
    ref.insertBefore(paramBox, underRef);
  };

  // レベル別一覧画面でテクニカルスコア順降順ソート
  const technicalScoreSort = () => {
    [].slice
      .call(document.getElementsByClassName("basic_btn"))
      .map(d => {
        const score = d.getElementsByClassName("score_value")[2];
        return {
          dom: d,
          value: score ? Number(score.textContent.split(",").join("")) : 0
        };
      })
      .sort((a, b) => b.value - a.value)
      .forEach(v =>
        document.getElementsByClassName("container3")[0].appendChild(v.dom)
      );
  };

  // テクニカルスコア降順ソートが有効なURL(ONGEKI_RECORD_URL)以下
  const ONGEKI_SORTABLE_URLS = [
    "musicGenre",
    "musicWord",
    "musicCharacter",
    "musicLevel"
  ];

  const main = () => {
    const url = location.href;
    if (url == ONGEKI_PREMIUM_RATE_TARGET_URL) {
      alert("定数とレート値を計算します");
      console.log("定数とレート値追加中...");
      addConstantAndRate();
      return;
    }
    if (url.indexOf(ONGEKI_RECORD_URL) != -1) {
      // ONGEKI_RECORD_URLがurlの先頭かつ複数含まれることはない
      const selectType = url.split(ONGEKI_RECORD_URL)[1].split("/")[0];
      if (ONGEKI_SORTABLE_URLS.includes(selectType)) {
        console.log("テクニカルスコア順ソート");
        technicalScoreSort();
        return;
      }
    }
    alert("現在のURLが正しくありません...");
    alert(
      "レート値計算する場合は，「プレイヤーデータ詳細」から「レーティング対象曲」タブを選択して下さい」"
    );
    return;
  };
  main();
})();
