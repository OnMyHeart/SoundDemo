var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SetUp = (function (_super) {
    __extends(SetUp, _super);
    function SetUp() {
        return _super.call(this) || this;
    }
    SetUp.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    SetUp.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    SetUp.prototype.init = function () {
        this.volume.value = 10;
        this.Music.addEventListener(egret.Event.CHANGE, this.onchangeBGM, this);
        this.Effect.addEventListener(egret.Event.CHANGE, this.onchangeET, this);
        this.volume.addEventListener(egret.Event.CHANGE, this.onchangeVolume, this);
    };
    //点击背景音乐开关
    SetUp.prototype.onchangeBGM = function () {
        SoundManager.Instance.isMusic = this.Music.selected; //设置可播放背景音乐
        SoundManager.Instance.playClickEffect(); //播放音效
    };
    //点击音效开关
    SetUp.prototype.onchangeET = function () {
        SoundManager.Instance.isEffect = this.Effect.selected; //设置能否播放音效
        SoundManager.Instance.playClickEffect(); //播放音效
    };
    //控制音量
    SetUp.prototype.onchangeVolume = function () {
        SoundManager.Instance.volume = this.volume.value / 10;
        // SoundManager.Instance.playClickEffect();//播放音效
    };
    return SetUp;
}(eui.Component));
__reflect(SetUp.prototype, "SetUp", ["eui.UIComponent", "egret.DisplayObject"]);
