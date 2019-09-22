// 定数取得・更新関連

var toArray = function(obj){
    return [].slice.call(obj);
}

var makeMusicInfo = function(title, diff, constant){
    return "{title: \'" + title + "\', diff: " + diff + ", constant: " + constant + "},\n";
}

// オンゲキスコアツールの定数表(https://ongeki-score.net/music)から定数を取得して表示
var getConstants = function(){
    let data = "";
    const musicArr = toArray(document.getElementsByClassName('list')[0].children);
    musicArr.forEach(function(item){
        const itemChildren = item.children;
        const musicTitle = itemChildren[0].textContent;
        const musicDiff = diffToNum(itemChildren[1].textContent);
        const musicConstant = itemChildren[3].textContent;
        data += makeMusicInfo(musicTitle, diff, musicConstant);
    });
    return data;
}

var getScores = function(scoreTable){
    if(!scoreTable)
        return {};
    const scores = toArray(scoreTable.getElementsByClassName('score_value'))
          .map(e => {e.textContent;});

    return { damage: scores[0], battle: scores[1] , technical: scores[2] };
}

var getBasicBtnInfo = function(basicBtns){
    return toArray(basicBtns).map(
        e => {
            const title = e.getElementsByClassName('music_label')[0].textContent;
            const level_str = e.getElementsByClassName('score_level')[0].textContent;
            const level = level_str.includes('+') ? level_str.split('+')[0] + '.7' : level_str;
            const scores = getScores(e.getElementsByClassName('score_Table')[0] || null);
            return { title: title, level: level, scores: scores };
        });
}

// 画面上の楽曲名一覧を取得(更新時に用いる)
// https://ongeki-net.com/ongeki-mobile/record/musicGenre/search/?genre=99&diff=3
// などの'basic_btn'があるページでの使用を想定
var getAllMusicName = function(){
    return getBasicBtnInfo(document.getElementsByClassName('basic_btn'));
}

// constantsに含まれない曲名一覧を取得
// constantTableを引数としてとることを想定
var unregisteredMusics = function(constants){
    // TODO: includesの実装を見てsortするか決める
    const latest = getAllMusicName()
    constants = constants.map(e => e.title)
    return latest.filter(e => !constants.includes(e.title));
}

// 登録されてない曲の定数リストテンプレートを出力する
var unregisteredMusicInfo = function(constants){
    const musicInfo = unregisteredMusics(constants);
    const diff = location.href.split("diff=")[1];
    return musicInfo.map(e => makeMusicInfo(e.title, diff, e.level)).join('');
}
