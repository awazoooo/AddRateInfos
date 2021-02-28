// 定数取得・更新関連

const toArray = obj => [].slice.call(obj);

// DOMから情報を抽出
const getBasicBtnInfo = basicBtns => {
  return toArray(basicBtns).map(
    e => {
      const title = e.getElementsByClassName('music_label')[0].textContent;
      const level_str = e.getElementsByClassName('score_level')[0].textContent;
      const level = level_str.includes('+') ? level_str.split('+')[0] + '.7' : level_str;
      return { title: title, level: level };
    });
}

// 画面上の楽曲名一覧を取得
const getMusicInfo = () => getBasicBtnInfo(document.getElementsByClassName('master_score_back'));

// constantsに含まれない曲名一覧を取得
const unregisteredMusics = constants => {
  const titles = constants.map(e => e.title);
  return getMusicInfo().filter(e => !titles.includes(e.title));
}

// 定数表にコピペする用のJSON文字列を出力
const makeMusicInfo = (title, diff, constant) =>
  "{ title: \'" + title + "\', diff: " + diff + ", constant: " + constant + " },\n";

// 登録されてない曲の定数リストテンプレートを出力する
const unregisteredMusicInfo = constants => {
  const musicInfo = unregisteredMusics(constants);
  const diff = location.href.split("diff=")[1];
  return musicInfo.map(e => makeMusicInfo(e.title, diff, e.level)).join('');
}

// 小数点以下2位までに丸める
const round2 = n => Math.floor(n * Math.pow(10, 2)) / Math.pow(10, 2);

// 新曲・旧曲枠の最大値を計算
// tableに定数取得元テーブル，numに取得する曲数を入力すること
const currentMaxBest = (table, num) => {
  const sum = table.slice(0, num).map(m => m.constant + 2.0).reduce((acc, c) => acc + c);
  return { sum: round2(sum), ave: round2(sum/num) };
}
