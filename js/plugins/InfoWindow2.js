//=============================================================================
// InfoWindow.js
//=============================================================================

/*:
 * @plugindesc 情報表示ウィンドウをメニュー画面に追加するプラグイン
 * @author Me
 *
 * @help 情報表示ウィンドウをメニュー画面上に追加します。
 *
 */

(function() {

// マップ上にウインドウ表示宣言
var Scene_map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() {
Scene_map_start.call(this);
this._InfomWindow = new Window_Infom();
this.addWindow(this._InfomWindow);
};
var _Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
_Scene_Map_update.call(this);
this._InfomWindow.setText();
 if($gameSwitches.value(35)){
     this._InfomWindow.show();
 }else{
     this._InfomWindow.hide();
 }
};

// ウインドウ作成
function Window_Infom() {
this.initialize.apply(this, arguments);
}

Window_Infom.prototype = Object.create(Window_Base.prototype);
Window_Infom.prototype.constructor = Window_Infom;
Window_Infom.prototype.initialize = function() {
var x = 20;
var y = 20;
var width = 146;
var height = 60;
Window_Base.prototype.initialize.call(this, x, y, width, height);
};

Window_Infom.prototype.setText = function(str) {
this._text = str;
this.refresh();
};

// テキスト表示
Window_Infom.prototype.refresh = function() {
this.contents.clear();

 if($gameVariables.value(10) == 5){
     this.drawText("★★★★★",0,0);
 }else if($gameVariables.value(10) == 4){
     this.drawText("★★★★",0,0);
 }else if($gameVariables.value(10) == 3){
     this.drawText("★★★",0,0);
 }else if($gameVariables.value(10) == 2){
     this.drawText("★★",0,0);
 }else if($gameVariables.value(10) == 1){
     this.drawText("★",0,0);
 }else if($gameVariables.value(10) == 0){
     this.drawText("",0,0);
 }else{
     this.drawText("エラー",0,0);
 }

};

// フォントサイズ
Window_Infom.prototype.standardFontSize = function() {
return 24;
};
// ウインドウの透明度
Window_Infom.prototype.standardBackOpacity = function() {
return 255;
};
// ウインドウの余白
Window_Infom.prototype.standardPadding = function() {
return 12;
};
// ウインドウの色調
Window_Infom.prototype.updateTone = function() {
this.setTone(0, 0, 0);
};

})();