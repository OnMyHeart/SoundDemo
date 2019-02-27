class SetUp extends eui.Component implements eui.UIComponent {
	public volume: eui.HSlider;//音量
	public Music: eui.ToggleSwitch;//音乐
	public Effect: eui.ToggleSwitch;//音效

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}

	private init(){
		this.volume.value = 10;
		this.Music.addEventListener(egret.Event.CHANGE,this.onchangeBGM,this);
		this.Effect.addEventListener(egret.Event.CHANGE,this.onchangeET,this);
		this.volume.addEventListener(egret.Event.CHANGE,this.onchangeVolume,this);
		
	}
	//点击背景音乐开关
	private onchangeBGM(){
		 SoundManager.Instance.isMusic = this.Music.selected;//设置可播放背景音乐
		 SoundManager.Instance.playClickEffect();//播放音效
	}
	//点击音效开关
	private onchangeET(){
		SoundManager.Instance.isEffect = this.Effect.selected;//设置能否播放音效
		SoundManager.Instance.playClickEffect();//播放音效
	}

	//控制音量
	private onchangeVolume(){
		SoundManager.Instance.volume = this.volume.value/10;
		// SoundManager.Instance.playClickEffect();//播放音效
	}
}