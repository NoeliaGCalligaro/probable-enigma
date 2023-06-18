import { Application, Container, Loader , Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});
window.addEventListener("resize",()=>{
	const scaleY= window.innerHeight /app.screen.height;
	const scaleX=window.innerWidth /app.screen.width;
	const scale= Math.min(scaleX,scaleY);

	const screenWhidt= app.screen.width*scale;
	const screenHeight= app.screen.height*scale;

	const marginHorizontal= Math.floor((window.innerWidth-screenWhidt)/2);
	const marginVertical= Math.floor((window.innerHeight-screenHeight)/2);

	app.view.style.width=screenWhidt+"px";
	app.view.style.height=screenHeight+"px";

	app.view.style.marginLeft=marginHorizontal+"px";
	app.view.style.marginRight=marginHorizontal+"px";
	app.view.style.marginTop=marginVertical+"px";
	app.view.style.marginBottom=marginVertical+"px";

})

window.dispatchEvent(new Event ("resize"))
const loader = Loader.shared;

loader.add({url: "./globo.png", name: "Globo"});
loader.add({url: "./soll.png", name: "Sol"});


loader.onComplete.add(()=>{
const globo: Sprite = Sprite.from("Globo");
globo.position.set(200,200);

const sol: Sprite = Sprite.from("Sol");
sol.scale.set(0.5, 0.5);

const solglobo: Container= new Container();
solglobo.addChild(globo);
solglobo.addChild(sol);

solglobo.scale.set(0.5, 0.5);
solglobo.x=500;
solglobo.y=200;
app.stage.addChild(solglobo);
});



loader.load();
