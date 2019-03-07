// 定数取得関連

// オンゲキスコアツールの定数表(https://ongeki-score.net/music)から定数を取得して表示
const getConstants = function(){
    let data = "";    
    const musicArr = [].slice.call(document.getElementsByClassName('list')[0].children);
    musicArr.forEach(function(item){
        const itemChildren = item.children;
        const musicTitle = itemChildren[0].textContent;
        const musicDiff = diffToNum(itemChildren[1].textContent);
        const musicConstant = itemChildren[3].textContent;
        data += "{title: \"" + musicTitle + "\", diff: " + musicDiff + ", constant: " + musicConstant + "},\n"
    });
    return data;
}
