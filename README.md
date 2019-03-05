# AddRateInfos
オンゲキNETのレーティング対象曲のページに定数とレート値などを追加

## 使い方
  0. プレミアムコースに登録
  1. オンゲキNETにログインして，「プレイヤーデータ詳細」を選択
  2. タブから「レーティング対象曲」を選択
  3. ブックマークレットを起動

## 注意
  * 自分が使うために雑に作った
  * スタンダードコースには未対応(できないこともないけどプレミアムコースでしか見れないようになってるしね...)
  * スコアランクAA？以上の曲に対応
  * 新曲や低難易度(主に11+以下)は定数が判明してないものもあるため，その難易度の最低値の定数として計算します
    * 例: 11+は11.7，12は12.0

## ブックマークレット
```javascript:(function(d,s){s=d.createElement('script');s.src='https://awazoooo.github.io/AddRateInfos/constant.js';d.body.appendChild(s);s=d.createElement('script');s.src='https://awazoooo.github.io/AddRateInfos/addRateInfos.js';d.body.appendChild(s);})(document);```


## 更新履歴
  * 2019/3/5 Lunaticがリセント枠に含まれないことによる，到達可能レートの計算を修正
  * 2019/3/2 rankAAAの場合のレート値計算修正
  * 2019/3/2 オンゲキ熱が再来して作り直した
  * 2018/9/3 利用規約が怪しいのでアーカイブ
  * 2018/9/2 ふと思いついて作った
