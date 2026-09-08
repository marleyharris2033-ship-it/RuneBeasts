
const TYPES={Fire:{strong:"Grass",weak:"Water"},Grass:{strong:"Water",weak:"Fire"},Water:{strong:"Fire",weak:"Grass"},Electric:{strong:"Flying",weak:"Rock"},Flying:{strong:"Rock",weak:"Electric"},Rock:{strong:"Electric",weak:"Flying"}};
const BEASTS=[{"id": "cindercub", "name": "Cindercub", "type": "Fire", "rarity": "Starter", "role": "Balanced", "base": [44, 52, 42, 48, 42, 50], "glyph": "♞"}, {"id": "ashbit", "name": "Ashbit", "type": "Fire", "rarity": "Common", "role": "Speed", "base": [32, 49, 31, 42, 34, 64], "glyph": "⌁"}, {"id": "magmole", "name": "Magmole", "type": "Fire", "rarity": "Uncommon", "role": "Tank", "base": [58, 60, 63, 34, 44, 25], "glyph": "●"}, {"id": "flarewing", "name": "Flarewing", "type": "Fire", "rarity": "Rare", "role": "Special", "base": [43, 38, 34, 68, 44, 70], "glyph": "⌃"}, {"id": "ripplet", "name": "Ripplet", "type": "Water", "rarity": "Starter", "role": "Balanced", "base": [48, 46, 46, 52, 48, 44], "glyph": "≋"}, {"id": "bubbfin", "name": "Bubbfin", "type": "Water", "rarity": "Common", "role": "Support", "base": [42, 31, 43, 48, 52, 37], "glyph": "◌"}, {"id": "cragclaw", "name": "Cragclaw", "type": "Water", "rarity": "Uncommon", "role": "Tank", "base": [55, 48, 67, 35, 52, 24], "glyph": "⋈"}, {"id": "abyssquid", "name": "Abyssquid", "type": "Water", "rarity": "Rare", "role": "Special", "base": [46, 34, 41, 72, 61, 43], "glyph": "Ψ"}, {"id": "spriglet", "name": "Spriglet", "type": "Grass", "rarity": "Starter", "role": "Balanced", "base": [46, 48, 44, 46, 52, 46], "glyph": "♧"}, {"id": "mossbug", "name": "Mossbug", "type": "Grass", "rarity": "Common", "role": "Defence", "base": [41, 35, 58, 31, 54, 30], "glyph": "✿"}, {"id": "vineape", "name": "Vineape", "type": "Grass", "rarity": "Uncommon", "role": "Physical", "base": [48, 62, 42, 36, 39, 60], "glyph": "ϟ"}, {"id": "bloomhorn", "name": "Bloomhorn", "type": "Grass", "rarity": "Rare", "role": "HP/Support", "base": [72, 43, 55, 48, 64, 28], "glyph": "♜"}, {"id": "voltpup", "name": "Voltpup", "type": "Electric", "rarity": "Uncommon", "role": "All-rounder", "base": [45, 51, 39, 52, 41, 62], "glyph": "Ϟ"}, {"id": "sparkit", "name": "Sparkit", "type": "Electric", "rarity": "Common", "role": "Speed", "base": [34, 42, 30, 45, 33, 72], "glyph": "ϟ"}, {"id": "thundram", "name": "Thundram", "type": "Electric", "rarity": "Rare", "role": "Physical", "base": [58, 72, 53, 42, 44, 38], "glyph": "♈"}, {"id": "arcwing", "name": "Arcwing", "type": "Electric", "rarity": "Rare", "role": "Special", "base": [42, 35, 37, 74, 51, 68], "glyph": "⌁"}, {"id": "breezlet", "name": "Breezlet", "type": "Flying", "rarity": "Common", "role": "Balanced", "base": [38, 41, 36, 42, 38, 58], "glyph": "▲"}, {"id": "galehare", "name": "Galehare", "type": "Flying", "rarity": "Uncommon", "role": "Speed", "base": [44, 48, 37, 39, 40, 75], "glyph": "⋏"}, {"id": "skyrake", "name": "Skyrake", "type": "Flying", "rarity": "Rare", "role": "Offence", "base": [51, 61, 45, 56, 44, 62], "glyph": "≻"}, {"id": "stormowl", "name": "Stormowl", "type": "Flying", "rarity": "Elite", "role": "Special tank", "base": [62, 39, 49, 74, 73, 55], "glyph": "◉"}, {"id": "pebblit", "name": "Pebblit", "type": "Rock", "rarity": "Common", "role": "Defence", "base": [47, 40, 64, 28, 47, 24], "glyph": "◆"}, {"id": "craggoat", "name": "Craggoat", "type": "Rock", "rarity": "Uncommon", "role": "Physical", "base": [54, 64, 59, 30, 42, 35], "glyph": "♑"}, {"id": "gemscarab", "name": "Gemscarab", "type": "Rock", "rarity": "Rare", "role": "Defensive", "base": [53, 37, 76, 45, 68, 25], "glyph": "◇"}, {"id": "titanox", "name": "Titanox", "type": "Rock", "rarity": "Elite", "role": "Tank", "base": [82, 74, 81, 28, 60, 18], "glyph": "♉"}];
const MOVES={"Scratch": {"type": "Neutral", "power": 35, "acc": 100}, "Quick Jab": {"type": "Neutral", "power": 30, "acc": 100}, "Guard Break": {"type": "Neutral", "power": 50, "acc": 90}, "Ember Bite": {"type": "Fire", "power": 45, "acc": 100}, "Flame Rush": {"type": "Fire", "power": 60, "acc": 90}, "Heat Wave": {"type": "Fire", "power": 70, "acc": 85}, "Water Jet": {"type": "Water", "power": 45, "acc": 100}, "Tidal Slam": {"type": "Water", "power": 60, "acc": 90}, "Bubble Burst": {"type": "Water", "power": 55, "acc": 95}, "Leaf Swipe": {"type": "Grass", "power": 45, "acc": 100}, "Vine Lash": {"type": "Grass", "power": 60, "acc": 90}, "Spore Burst": {"type": "Grass", "power": 55, "acc": 95}, "Spark Snap": {"type": "Electric", "power": 45, "acc": 100}, "Volt Rush": {"type": "Electric", "power": 60, "acc": 90}, "Arc Pulse": {"type": "Electric", "power": 70, "acc": 85}, "Gust": {"type": "Flying", "power": 45, "acc": 100}, "Sky Dive": {"type": "Flying", "power": 60, "acc": 90}, "Wind Cutter": {"type": "Flying", "power": 55, "acc": 95}, "Stone Toss": {"type": "Rock", "power": 45, "acc": 100}, "Rock Ram": {"type": "Rock", "power": 60, "acc": 90}, "Crystal Crash": {"type": "Rock", "power": 70, "acc": 85}};
const LEARNSETS={"cindercub": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "ashbit": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "magmole": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "flarewing": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "ripplet": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "bubbfin": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "cragclaw": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "abyssquid": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "spriglet": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "mossbug": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "vineape": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "bloomhorn": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "voltpup": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "sparkit": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "thundram": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "arcwing": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "breezlet": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "galehare": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "skyrake": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "stormowl": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "pebblit": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]], "craggoat": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]], "gemscarab": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]], "titanox": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]]};
const STARTERS=["cindercub","ripplet","spriglet"];
const SAVE_KEY="runebeasts-v09";
const ASSET_BUNDLES=Object.assign({},window.RUNE_BEAST_ASSETS||{},window.RUNE_TILE_ASSETS||{},window.RUNE_OBJECT_ASSETS||{},window.RUNE_TRAINER_ASSETS||{},window.RUNE_TOWN_ASSETS||{});
const assetUrl=src=>ASSET_BUNDLES[src]||src;
const SPRITES={cindercub:"cindercub.png",ripplet:"ripplet.png",spriglet:"spriglet.png",ashbit:"ashbit.png",bubbfin:"bubbfin.png",mossbug:"mossbug.png",sparkit:"sparkit.png",breezlet:"breezlet.png",pebblit:"pebblit.png",voltpup:"voltpup.png",vineape:"vineape.png",craggoat:"craggoat.png"};
const TRAINER_FRAMES={boy:{down:["boy_down_0.png","boy_down_1.png"],up:["boy_up_0.png","boy_up_1.png"],left:["boy_left_0.png","boy_left_1.png"],right:["boy_right_0.png","boy_right_1.png"]},girl:{down:["girl_down_0.png","girl_down_1.png"],up:["girl_up_0.png","girl_up_1.png"],left:["girl_left_0.png","girl_left_1.png"],right:["girl_right_0.png","girl_right_1.png"]}};
const TILE=16, MAP_W=120, MAP_H=80;
const WORLD_SPAWN={tx:33,ty:41};
const makeGrid=(fill)=>Array.from({length:MAP_H},()=>Array(MAP_W).fill(fill));
const groundGrid=makeGrid('.');
const paintGround=(x,y,w,h,ch)=>{for(let yy=y;yy<y+h;yy++)for(let xx=x;xx<x+w;xx++)if(xx>=0&&yy>=0&&xx<MAP_W&&yy<MAP_H)groundGrid[yy][xx]=ch;};
const paintPath=(x,y,w,h)=>paintGround(x,y,w,h,'p');

// ---- Runevale Town -------------------------------------------------------
// Main north/south street and east/west market road.
paintPath(31,5,5,64);
paintPath(7,38,59,5);
paintPath(23,28,23,17);                 // central square
paintPath(12,18,22,4);                  // north-west residential lane
paintPath(38,17,21,4);                  // north-east lane
paintPath(10,53,25,4);                  // south-west lane
paintPath(39,54,22,4);                  // south-east lane
paintPath(17,18,4,22);
paintPath(49,18,4,23);
paintPath(17,41,4,15);
paintPath(49,41,4,16);
paintPath(31,68,5,11);                  // road through the south gate

// Town greens and landscaped plots.
paintGround(7,7,19,8,'F');
paintGround(40,7,19,7,'f');
paintGround(8,24,11,10,'F');
paintGround(54,24,10,10,'f');
paintGround(8,60,17,9,'f');
paintGround(44,62,17,7,'F');

// Healing garden in the square.
paintGround(36,34,5,5,'f');
groundGrid[36][38]='S';

// North-west pond/grove.
paintGround(3,9,8,13,'w');
paintGround(4,10,6,11,'W');

// ---- River / Bridge ------------------------------------------------------
paintGround(66,1,7,78,'w');
paintGround(65,37,9,5,'b');
paintPath(58,37,8,5);
paintPath(73,37,16,5);

// ---- Eastbank / Quarry ---------------------------------------------------
paintPath(87,15,5,48);
paintPath(76,39,31,4);
paintPath(83,24,18,4);
paintPath(83,55,21,4);
paintGround(76,7,18,14,'g');
paintGround(99,7,17,18,'g');
paintGround(76,46,16,18,'g');
paintGround(101,47,15,18,'g');
paintGround(82,28,24,9,'s');
paintGround(94,60,16,8,'s');

// Quarry pools.
paintGround(106,29,9,8,'w');
paintGround(108,30,6,6,'W');

// South route preview beyond town.
paintGround(28,72,11,8,'g');

// Border river rocks / natural frame remain ground; objects provide blocking.
const GROUND=groundGrid.map(row=>row.join(''));

const OBJECTS=makeGrid('');
const putObj=(x,y,v)=>{if(x>=0&&y>=0&&x<MAP_W&&y<MAP_H)OBJECTS[y][x]=v;};
const scatter=(coords,vals=['t','t2'])=>coords.forEach(([x,y],i)=>putObj(x,y,vals[i%vals.length]));

// Outer woodland boundary with intentional openings at the south road and bridge.
for(let x=0;x<66;x+=2){putObj(x,0,x%4?'t':'t2'); if(!(x>=29&&x<=38)) putObj(x,79,x%4?'t2':'t');}
for(let y=2;y<79;y+=3){putObj(0,y,y%2?'t':'t2'); putObj(64,y,y%2?'t2':'t');}
for(let x=74;x<120;x+=2){putObj(x,0,'tp'); putObj(x,79,'tp');}
for(let y=2;y<79;y+=3){putObj(119,y,'tp');}

// Groves and town-edge vegetation.
scatter([[3,4],[6,4],[9,4],[12,4],[15,4],[18,4],[22,4],[5,24],[8,36],[12,36],[57,10],[60,12],[61,46],[58,71],[54,73],[10,72],[14,73],[20,74]]);
scatter([[75,3],[79,4],[84,3],[95,3],[102,4],[110,3],[115,5],[75,26],[77,31],[114,42],[117,48],[76,68],[81,72],[112,71]],['tp']);

// Town furniture: lamps frame roads; benches sit in greens/square.
[[29,14],[37,14],[29,26],[37,26],[29,48],[37,48],[29,61],[37,61],[15,36],[22,36],[45,36],[56,36]].forEach(p=>putObj(...p,'lp'));
[[25,31],[44,31],[25,46],[44,46],[13,62],[54,64]].forEach(p=>putObj(...p,'bn'));
[[10,27],[58,28],[12,58],[57,59]].forEach(p=>putObj(...p,'bu'));
putObj(43,42,'sv');
putObj(33,66,'sg');

// Eastbank rocks / pines form believable quarry edges rather than random clutter.
[[78,23],[80,28],[80,60],[85,66],[96,27],[102,26],[106,43],[112,43],[96,69],[105,70]].forEach(p=>putObj(...p,'rk'));
[[75,5],[82,5],[91,5],[98,5],[116,27],[116,36],[116,58],[75,74],[89,74],[103,74]].forEach(p=>putObj(...p,'tp'));
[[80,45],[96,45],[105,46],[112,66],[78,66]].forEach(p=>putObj(...p,'bu'));

const TILESET={
'.':['tile_grass_v2.png','tile_grass_alt_v2.png'],
'g':['tile_tallgrass_v2.png','tile_tallgrass_alt_v2.png'],
'p':['tile_path_v2.png','tile_path_alt_v2.png'],
'w':['tile_water_v2.png','tile_water_alt_v2.png'],
'W':'tile_water_v2.png',
'b':'tile_path_v2.png',
's':'tile_sand_v2.png',
'S':'tile_grass_v2.png',
'f':'tile_flower_v2.png',
'F':'tile_flower_alt_v2.png',
't':'obj_tree_v2.png',
't2':'obj_tree_alt_v2.png',
'tp':'obj_pine_v2.png',
'n':'tile_path_v2.png',
'rk':'obj_rock_v2.png',
'bu':'obj_bush_v2.png',
'st':'obj_rock_v2.png',
'bn':'obj_bench_v2.png',
'lp':'obj_lamp_v2.png',
'sg':'obj_sign_v2.png',
'sv':'obj_save_crystal_v2.png',
'fl1':'tile_flower_v2.png',
'fl2':'tile_flower_alt_v2.png',
'hl':'tile_grass_v2.png',
'hm':'tile_grass_v2.png',
'hr':'tile_grass_v2.png',
'wl':'tile_grass_v2.png',
'wd':'tile_grass_v2.png',
'wr':'tile_grass_v2.png'
};
const BUILDINGS=[
  {id:'guild',name:'Rune Lodge',tx:24,ty:8,w:11,h:8,doorX:29,doorY:15,roof:'#a94e42',roof2:'#d06a51',wall:'#e8cf9a',trim:'#744438',enterable:false},
  {id:'homeA',name:'Maple House',tx:12,ty:11,w:9,h:7,doorX:16,doorY:17,roof:'#b65445',roof2:'#da7157',wall:'#ead6a7',trim:'#754536',enterable:false},
  {id:'homeB',name:'Willow House',tx:40,ty:11,w:9,h:7,doorX:44,doorY:17,roof:'#4e728f',roof2:'#6f98b5',wall:'#e6d4aa',trim:'#435264',enterable:false},
  {id:'workshop',name:'Rowan’s Workshop',tx:50,ty:28,w:10,h:8,doorX:55,doorY:35,roof:'#7c5a3e',roof2:'#a17b58',wall:'#d9c39c',trim:'#594332',enterable:true,interior:'workshop'},
  {id:'clinic',name:'Rune Clinic',tx:10,ty:44,w:10,h:8,doorX:15,doorY:51,roof:'#b64c52',roof2:'#db6f72',wall:'#f0dbb4',trim:'#70464a',enterable:true,interior:'clinic'},
  {id:'inn',name:'Moonbell Inn',tx:43,ty:45,w:10,h:8,doorX:48,doorY:52,roof:'#5b5f91',roof2:'#7c82b0',wall:'#e6d1a8',trim:'#444767',enterable:false}
];

const LANDMARKS=[
  {id:'mine',name:'Old Eastbank Mine',tx:84,ty:17,w:15,h:9,doorX:91,doorY:25,type:'mine'},
  {id:'cave',name:'Whisper Cave',tx:98,ty:57,w:14,h:8,doorX:105,doorY:64,type:'cave'}
];

const WORLD_BLOCKED=makeGrid(false);
function blockRect(tx,ty,w,h){for(let y=ty;y<ty+h;y++)for(let x=tx;x<tx+w;x++)if(x>=0&&y>=0&&x<MAP_W&&y<MAP_H)WORLD_BLOCKED[y][x]=true;}
BUILDINGS.forEach(b=>blockRect(b.tx,b.ty,b.w,b.h));
LANDMARKS.forEach(b=>blockRect(b.tx,b.ty,b.w,b.h));

const WORLD_NPCS=[
  {id:'rowan',name:'Rowan',tx:55,ty:38,shirt:'#6c4d9e',hair:'#5b3b25'},
  {id:'mina',name:'Mina',tx:34,ty:43,shirt:'#3f7fb5',hair:'#7b4b2a'},
  {id:'quarryman',name:'Bram',tx:84,ty:43,shirt:'#8a6336',hair:'#403126'}
];
const INTERACTION_POINTS=[
  {id:'townSign',tx:33,ty:66},
  {id:'bridge',tx:69,ty:39},
  {id:'spring',tx:38,ty:36},
  {id:'mine',tx:91,ty:25},
  {id:'cave',tx:105,ty:64}
];
function npcBox(n){return {x:n.tx*TILE+3,y:n.ty*TILE+2,w:10,h:12};}

const SOLID_GROUND=new Set(['w','W']);
const SOLID_OBJECT=new Set(['t','t2','tp','n','rk','bu','st','bn','lp','sg','hl','hm','hr','wl','wr']);
const ENCOUNTER_GROUND=new Set(['g']); 
const HEAL_GROUND=new Set(['S']); 
const SAVE_OBJECT=new Set(['sv']);

let state={party:[],collection:{},shards:100,wins:0,captures:0,steps:0,pos:{x:(10+0.5)*TILE,y:(22+0.5)*TILE},dir:'down',trainerName:'Trainer',trainerGender:'boy',flags:{}};
let pendingSetup={trainerName:'Trainer',trainerGender:'boy'}; let battle=null;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)]; const beastBy=id=>BEASTS.find(b=>b.id===id); const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)); const xpNeed=lv=>30+lv*20; const typeColors={Fire:'#b94b39',Water:'#3678bb',Grass:'#4e8c49',Electric:'#b69525',Flying:'#687fb8',Rock:'#786f67',Neutral:'#596680'};
function maxHp(m){return Math.round(beastBy(m.id).base[0]*0.7+m.level*5+20)} function statsFor(m){const b=beastBy(m.id).base;return [maxHp(m),...b.slice(1).map(v=>Math.round(v*0.65+m.level*2))]} function knownMoves(m){const set=LEARNSETS[m.id]||[[1,'Scratch']];return set.filter(([lv])=>lv<=m.level).map(x=>x[1]).slice(-4)} function makeMon(id,level){const m={uid:String(Date.now())+Math.random(),id,level,xp:0,hp:0}; m.hp=maxHp(m); return m;}
function normaliseState(){state.party=Array.isArray(state.party)?state.party:[]; state.collection=state.collection||{}; state.shards=Number.isFinite(+state.shards)?+state.shards:100; state.wins=state.wins||0; state.captures=state.captures||0; state.steps=state.steps||0; state.pos=state.pos||{x:(10+0.5)*TILE,y:(22+0.5)*TILE}; state.dir=state.dir||'down'; state.trainerName=(state.trainerName||'Trainer').slice(0,14); state.trainerGender=state.trainerGender==='girl'?'girl':'boy'; state.flags=state.flags||{}; state.party.forEach(m=>{m.level=m.level||1; m.xp=m.xp||0; m.hp=Number.isFinite(m.hp)?clamp(m.hp,0,maxHp(m)):maxHp(m);});}
function save(){normaliseState(); localStorage.setItem(SAVE_KEY,JSON.stringify(state)); renderWorldPanels();} function load(){const raw=localStorage.getItem(SAVE_KEY); if(!raw) return false; try{state=JSON.parse(raw); normaliseState(); return true;}catch{return false;}}
function typeTag(type){return `<span class="typeTag" style="background:${typeColors[type]||typeColors.Neutral}">${type}</span>`}
function creatureArt(id,size='md'){const b=beastBy(id), path=SPRITES[id]; if(path){const cls=size==='lg'?'sprite-lg':size==='sm'?'sprite-sm':'sprite-md'; return `<img class="creatureImg ${cls}" src="${assetUrl(path)}" alt="${b.name}" loading="eager">`;} const cls=size==='lg'?'':size==='sm'?' sm':' md'; return `<div class="fallbackSprite${cls}">${b.glyph}</div>`;}
function trainerPreview(gender,size=56){return `<img src="${assetUrl(TRAINER_FRAMES[gender].down[0])}" alt="${gender} trainer" style="width:${size}px;height:${size}px;image-rendering:pixelated">`;}
function showScreen(id){$$('.screen').forEach(el=>el.classList.remove('active')); const t=$('#'+id); if(t) t.classList.add('active'); $$('.bottomNav button').forEach(btn=>btn.classList.toggle('active',btn.dataset.screen===id)); if(id==='partyScreen') renderParty(); if(id==='dexScreen') renderDex(); if(id==='profileScreen') renderProfile(); if(id==='worldScreen') renderWorldPanels();}
function renderStarters(){$('#starterChoices').innerHTML=STARTERS.map(id=>{const beast=beastBy(id), temp=makeMon(id,5); return `<div class="card"><div class="spriteWrap">${creatureArt(id,'lg')}</div><h3>${beast.name}</h3>${typeTag(beast.type)}<div class="muted">${beast.role}</div><div class="movesList">Moves: ${knownMoves(temp).join(' · ')}</div><button class="primary big chooseStarter" data-id="${id}">Choose</button></div>`;}).join(''); $$('.chooseStarter').forEach(btn=>btn.onclick=()=>{const mon=makeMon(btn.dataset.id,5); state={party:[mon],collection:{[mon.id]:true},shards:100,wins:0,captures:0,steps:0,pos:{x:(10+0.5)*TILE,y:(22+0.5)*TILE},dir:'down',trainerName:pendingSetup.trainerName||'Trainer',trainerGender:pendingSetup.trainerGender||'boy',flags:{}}; save(); showScreen('worldScreen');});}
function renderWorldPanels(){if(!$('#shards')) return; $('#shards').textContent=state.shards; $('#partyCount').textContent=`${state.party.length} / 6`; $('#partyMini').innerHTML=state.party.map((m,i)=>`<div class="partyMiniRow"><span>${i===0?'★ ':''}${beastBy(m.id).name} Lv${m.level} · ${m.hp}/${maxHp(m)} HP</span><span>${typeTag(beastBy(m.id).type)}</span></div>`).join(''); $('#trainerBadge').innerHTML=`<span class="badgeName">${state.trainerName}</span>`;}
function renderParty(){$('#partyList').innerHTML=state.party.map((m,i)=>{const b=beastBy(m.id), pct=clamp(m.xp/xpNeed(m.level)*100,0,100); return `<div class="card partyCard"><div class="head"><div class="lhs">${creatureArt(m.id,'md')}<div><b>${b.name}</b><div>${typeTag(b.type)}</div></div></div><b>Lv ${m.level}</b></div><div class="stats">HP ${m.hp}/${maxHp(m)} · ATK ${statsFor(m)[1]} · DEF ${statsFor(m)[2]} · SP.ATK ${statsFor(m)[3]} · SP.DEF ${statsFor(m)[4]} · SPD ${statsFor(m)[5]}</div><div class="movesList">Moves: ${knownMoves(m).join(' · ')}</div><div class="xpBar"><i style="width:${pct}%"></i></div><small>XP ${m.xp}/${xpNeed(m.level)}</small>${i?`<button class="secondary makeLead" data-i="${i}">Make Lead</button>`:`<div class="movesList"><b>Lead Beast</b></div>`}</div>`;}).join(''); $$('.makeLead').forEach(btn=>btn.onclick=()=>{const i=+btn.dataset.i; const picked=state.party.splice(i,1)[0]; state.party.unshift(picked); save(); renderParty();});}
function renderDex(){const seen=BEASTS.filter(b=>state.collection[b.id]).length; $('#dexProgress').textContent=`${seen} / ${BEASTS.length} discovered`; $('#dexList').innerHTML=BEASTS.map((b,i)=>{const discovered=!!state.collection[b.id]; return `<div class="card"><div class="spriteWrap">${discovered?creatureArt(b.id,'sm'):`<div class="fallbackSprite sm">?</div>`}</div><small>#${String(i+1).padStart(3,'0')}</small><div><b>${discovered?b.name:'?????'}</b></div><div>${discovered?typeTag(b.type):''}</div><small>${discovered?`${b.rarity} · ${b.role}`:'Undiscovered'}</small></div>`;}).join('');}
function renderProfile(){$('#profileSprite').innerHTML=trainerPreview(state.trainerGender,56); $('#profileName').textContent=state.trainerName; $('#profileGender').textContent=state.trainerGender==='girl'?'Girl trainer':'Boy trainer'; $('#saveStats').innerHTML=`<p>Wins: <b>${state.wins}</b></p><p>Captured: <b>${state.captures}</b></p><p>Discovered: <b>${Object.keys(state.collection).length}/${BEASTS.length}</b></p><p>Steps: <b>${state.steps}</b></p><p>Rune Shards: <b>${state.shards}</b></p>`;}
// world
const canvas=document.getElementById('worldCanvas'); const ctx=canvas.getContext('2d'); ctx.imageSmoothingEnabled=false; const world={width:MAP_W*TILE,height:MAP_H*TILE,playerSpeed:70,drawSize:32,bbox:{w:10,h:12},camera:{x:0,y:0},frame:0,frameTimer:0,encounterDistance:0,lastTime:0}; const input={up:false,down:false,left:false,right:false}; const images={}; function loadImg(src){const img=new Image(); img.src=assetUrl(src); images[src]=img; return img;} function loadTileAsset(val){if(Array.isArray(val)) val.forEach(loadImg); else loadImg(val);} Object.values(TILESET).forEach(loadTileAsset); Object.values(LARGE_OBJECTS).forEach(o=>loadImg(o.src)); Object.values(SPRITES).forEach(loadImg); Object.values(TRAINER_FRAMES).forEach(v=>Object.values(v).flat().forEach(loadImg));
function groundAt(tx,ty){return (GROUND[ty]&&GROUND[ty][tx])?GROUND[ty][tx]:'W'} function objAt(tx,ty){return (OBJECTS[ty]&&OBJECTS[ty][tx]!==undefined)?OBJECTS[ty][tx]:''}
function groundSpriteKey(tx,ty){const g=groundAt(tx,ty); const v=TILESET[g]; if(Array.isArray(v)) return v[(tx*3+ty*5)%v.length]; return v;}
function objectSpriteKey(tx,ty){const o=objAt(tx,ty); if(['hl','hm','hr','wl','wd','wr'].includes(o)) return null; return TILESET[o]||null;}
function isSolid(tx,ty){const g=groundAt(tx,ty), o=objAt(tx,ty); return SOLID_GROUND.has(g)||SOLID_OBJECT.has(o)} function playerBox(x=state.pos.x,y=state.pos.y){return {x:x-world.bbox.w/2,y:y-world.bbox.h/2,w:world.bbox.w,h:world.bbox.h}} function tilesTouching(box){const left=Math.floor(box.x/TILE), right=Math.floor((box.x+box.w-1)/TILE), top=Math.floor(box.y/TILE), bottom=Math.floor((box.y+box.h-1)/TILE); const out=[]; for(let ty=top; ty<=bottom; ty++) for(let tx=left; tx<=right; tx++) out.push([tx,ty]); return out;} function rectOverlap(a,b){return a.x < b.x+b.w && a.x+a.w > b.x && a.y < b.y+b.h && a.y+a.h > b.y}
function collideBox(box){
  if(tilesTouching(box).some(([tx,ty])=>tx<0||ty<0||tx>=MAP_W||ty>=MAP_H||isSolid(tx,ty))) return true;
  if(LARGE_COLLIDERS.some(c=>rectOverlap(box,c))) return true;
  return WORLD_NPCS.some(n=>rectOverlap(box,npcBox(n)));
}
function currentTile(){return {tx:Math.floor(state.pos.x/TILE), ty:Math.floor(state.pos.y/TILE)}}
function healParty(say=true){state.party.forEach(m=>m.hp=maxHp(m)); save(); if(say) $('#worldText').textContent='The healing spring restored your party.';}
function tryMove(dx,dy){const ox=state.pos.x, oy=state.pos.y; if(dx){const nx=ox+dx; const box=playerBox(nx,oy); if(!collideBox(box)) state.pos.x=nx;} if(dy){const ny=oy+dy; const box=playerBox(state.pos.x,ny); if(!collideBox(box)) state.pos.y=ny;}}
function worldSay(text){const el=$('#worldText'); if(el) el.textContent=text;}
function distanceToTile(tx,ty){const cx=(tx+.5)*TILE,cy=(ty+.5)*TILE;return Math.hypot(state.pos.x-cx,state.pos.y-cy);}
function interactWorld(){
  if(battle||!$('#worldScreen').classList.contains('active')) return;
  const nearbyNpc=WORLD_NPCS.map(n=>({n,d:distanceToTile(n.tx,n.ty)})).filter(x=>x.d<34).sort((a,b)=>a.d-b.d)[0]?.n;
  if(nearbyNpc){
    if(nearbyNpc.id==='rowan'){
      if(!state.flags.workshopIntro){
        state.flags.workshopIntro=true; save();
        worldSay('Rowan: Eastbank Quarry has been restless. Cross the bridge and check the old mine for me.');
      }else worldSay('Rowan: The bridge east leads straight to the quarry. Keep your party healthy.');
      return;
    }
    if(nearbyNpc.id==='mina'){
      worldSay('Mina: Tall grass means wild Rune Beasts. The spring by the square restores your whole party.');
      return;
    }
    if(nearbyNpc.id==='quarryman'){
      worldSay(state.flags.mineCache?'Bram: You found the old shard cache? Rowan will be pleased.':'Bram: The mine entrance is just north. There used to be Rune Shards stored inside.');
      return;
    }
  }
  const point=INTERACTION_POINTS.map(p=>({p,d:distanceToTile(p.tx,p.ty)})).filter(x=>x.d<40).sort((a,b)=>a.d-b.d)[0]?.p;
  if(!point){worldSay('There is nothing to inspect here.');return;}
  if(point.id==='townSign'){worldSay('Runevale Town — West: homes and spring · East: bridge to Eastbank Quarry.');return;}
  if(point.id==='bridge'){worldSay('Runevale Bridge — the only safe crossing to Eastbank Quarry.');return;}
  if(point.id==='cave'){worldSay('A cold draught comes from the cave. Something deeper is sealed off for now.');return;}
  if(point.id==='mine'){
    if(!state.flags.mineCache){
      state.flags.mineCache=true; state.shards+=25; save();
      worldSay('You found an abandoned cache: +25 Rune Shards!');
    }else worldSay('The old mine cache is empty now.');
  }
}
function updateWorld(dt){if(!$('#worldScreen').classList.contains('active')||battle) return; let vx=0,vy=0; if(input.left) vx-=1; if(input.right) vx+=1; if(input.up) vy-=1; if(input.down) vy+=1; const moving=vx!==0||vy!==0; if(moving){const len=Math.hypot(vx,vy)||1; vx/=len; vy/=len; if(Math.abs(vx)>Math.abs(vy)) state.dir=vx>0?'right':'left'; else state.dir=vy>0?'down':'up'; const beforeX=state.pos.x,beforeY=state.pos.y; tryMove(vx*world.playerSpeed*dt,vy*world.playerSpeed*dt); const moved=Math.hypot(state.pos.x-beforeX,state.pos.y-beforeY); if(moved>0){state.steps+=1; world.encounterDistance+=moved; world.frameTimer+=dt; if(world.frameTimer>0.17){world.frame=(world.frame+1)%2; world.frameTimer=0;}}} else {world.frame=0; world.frameTimer=0;} const {tx,ty}=currentTile(); const g=groundAt(tx,ty); const o=objAt(tx,ty); if(HEAL_GROUND.has(g)){healParty(false); $('#worldText').textContent='The healing spring restored your party.';} else if(SAVE_OBJECT.has(o)){save(); $('#worldText').textContent='Your progress was saved at the rune crystal.';} else if(ENCOUNTER_GROUND.has(g)){$('#worldText').textContent='Tall grass rustles... wild Rune Beasts live here.'; if(world.encounterDistance>24 && Math.random()<0.04){world.encounterDistance=0; startBattle(pickEncounter()); return;}} else if(DOOR_OBJECT.has(o)) $('#worldText').textContent='The house is locked for now.'; else if(tx>=40&&tx<=47&&ty>=20&&ty<=25) $('#worldText').textContent='Runevale Bridge leads to Eastbank Quarry.'; else if(tx>=48) $('#worldText').textContent=state.flags.workshopIntro&&!state.flags.mineCache?'Eastbank Quarry — find the old mine cache for Rowan.':'Eastbank Quarry — wild Rune Beasts gather beyond the bridge.'; else $('#worldText').textContent=!state.flags.workshopIntro?'Explore Runevale Town. Rowan is outside the workshop.':!state.flags.mineCache?'Rowan asked you to investigate the old mine across the bridge.':'Explore Runevale Town.'; $('.areaName').textContent=tx>=48?'Eastbank Quarry':'Runevale Town'; world.camera.x=Math.round(clamp(state.pos.x-canvas.width/2,0,world.width-canvas.width)); world.camera.y=Math.round(clamp(state.pos.y-canvas.height/2,0,world.height-canvas.height));}
const GROUND_COLOURS={
  '.':'#78b85f',
  'g':'#4f8a46',
  'p':'#c9ad76',
  'w':'#4c8fc9',
  'W':'#4c8fc9',
  'b':'#b58a55',
  's':'#d6bd82',
  'S':'#78b85f',
  'f':'#78b85f',
  'F':'#78b85f'
};

// Seam-free Pokémon-style base terrain.
// Ground is drawn procedurally into one continuous native-resolution bitmap.
// Object artwork (houses, trees, bridge, mine etc.) remains layered on top.
const groundLayer=document.createElement('canvas');
groundLayer.width=MAP_W*TILE;
groundLayer.height=MAP_H*TILE;
const groundCtx=groundLayer.getContext('2d',{alpha:false});
groundCtx.imageSmoothingEnabled=false;
let groundLayerReady=false;

function rand2(x,y,s=0){
  let n=(x*374761393 + y*668265263 + s*69069)>>>0;
  n=(n^(n>>13))*1274126177>>>0;
  return ((n^(n>>16))>>>0)/4294967295;
}

function drawGrassTile(c,x,y,variant=0){
  c.fillStyle=variant?'#73b259':'#78b85f';
  c.fillRect(x,y,TILE,TILE);
  for(let i=0;i<5;i++){
    const px=x+2+Math.floor(rand2(x+i,y,11)*12);
    const py=y+2+Math.floor(rand2(x,y+i,23)*12);
    c.fillStyle=i%2?'#6ca853':'#85c56b';
    c.fillRect(px,py,1,1);
  }
}

function sameGroundFamily(tx,ty,family){
  const g=groundAt(tx,ty);
  return family.includes(g);
}
function drawPathTile(c,x,y,tx,ty){
  c.fillStyle='#c9ad76';
  c.fillRect(x,y,TILE,TILE);
  c.fillStyle='#d8bf8b';
  c.fillRect(x+2,y+3,2,1);
  c.fillRect(x+10,y+11,2,1);
  c.fillStyle='#b59661';
  c.fillRect(x+6,y+7,1,1);
  c.fillRect(x+13,y+4,1,1);
  // Only shade the outside edge of a road, never every individual tile.
  c.fillStyle='#9f804f';
  if(!sameGroundFamily(tx,ty-1,['p','b'])) c.fillRect(x,y,TILE,1);
  if(!sameGroundFamily(tx,ty+1,['p','b'])) c.fillRect(x,y+TILE-1,TILE,1);
  if(!sameGroundFamily(tx-1,ty,['p','b'])) c.fillRect(x,y,1,TILE);
  if(!sameGroundFamily(tx+1,ty,['p','b'])) c.fillRect(x+TILE-1,y,1,TILE);
}

function drawSandTile(c,x,y){
  c.fillStyle='#d6bd82';
  c.fillRect(x,y,TILE,TILE);
  c.fillStyle='#c9aa6e';
  c.fillRect(x+4,y+5,1,1);
  c.fillRect(x+11,y+12,1,1);
}

function drawWaterTile(c,x,y,tx,ty){
  c.fillStyle='#4c8fc9';
  c.fillRect(x,y,TILE,TILE);
  const phase=(tx+ty)%2;
  c.fillStyle='#6ba9d7';
  c.fillRect(x+2+phase*2,y+5,6,1);
  c.fillRect(x+8-phase*2,y+12,5,1);
  c.fillStyle='#397ab4';
  c.fillRect(x+5,y+8,4,1);
  c.fillStyle='#8bc6df';
  if(!sameGroundFamily(tx,ty-1,['w','W'])) c.fillRect(x,y,TILE,1);
  if(!sameGroundFamily(tx,ty+1,['w','W'])) c.fillRect(x,y+TILE-1,TILE,1);
  if(!sameGroundFamily(tx-1,ty,['w','W'])) c.fillRect(x,y,1,TILE);
  if(!sameGroundFamily(tx+1,ty,['w','W'])) c.fillRect(x+TILE-1,y,1,TILE);
}

function drawTallGrassTile(c,x,y,tx,ty){
  c.fillStyle='#4f8a46';
  c.fillRect(x,y,TILE,TILE);
  c.fillStyle='#376f38';
  for(let i=0;i<4;i++){
    const px=x+2+i*4+((tx+ty+i)&1);
    c.fillRect(px,y+7,1,5);
    c.fillRect(px+1,y+9,1,3);
  }
  c.fillStyle='#69a75b';
  c.fillRect(x+3,y+4,1,4);
  c.fillRect(x+11,y+5,1,4);
}

function drawFlowerTile(c,x,y,alt=false){
  drawGrassTile(c,x,y,alt?1:0);
  const colours=alt?['#ef8bb9','#fff2a8']:['#f2f0ff','#f1c74f'];
  for(let i=0;i<3;i++){
    const px=x+3+i*5;
    const py=y+4+((i*3)%7);
    c.fillStyle=colours[i%2];
    c.fillRect(px,py,2,2);
    c.fillStyle='#4b8b3f';
    c.fillRect(px,py+2,1,2);
  }
}

function paintBaseTile(c,tx,ty,g){
  const x=tx*TILE, y=ty*TILE;
  if(g==='p'||g==='b') return drawPathTile(c,x,y,tx,ty);
  if(g==='s') return drawSandTile(c,x,y);
  if(g==='w'||g==='W') return drawWaterTile(c,x,y,tx,ty);
  if(g==='g') return drawTallGrassTile(c,x,y,tx,ty);
  if(g==='f') return drawFlowerTile(c,x,y,false);
  if(g==='F') return drawFlowerTile(c,x,y,true);
  drawGrassTile(c,x,y,0);
}

function buildGroundLayer(){
  groundCtx.fillStyle=GROUND_COLOURS['.'];
  groundCtx.fillRect(0,0,groundLayer.width,groundLayer.height);
  for(let ty=0;ty<MAP_H;ty++){
    for(let tx=0;tx<MAP_W;tx++) paintBaseTile(groundCtx,tx,ty,groundAt(tx,ty));
  }
  groundLayerReady=true;
}

function drawWorld(){
  if(!groundLayerReady) buildGroundLayer();
  ctx.fillStyle=GROUND_COLOURS['.'];
  ctx.fillRect(0,0,canvas.width,canvas.height);
  const firstX=Math.floor(world.camera.x/TILE), firstY=Math.floor(world.camera.y/TILE);
  const offsetX=-(world.camera.x%TILE), offsetY=-(world.camera.y%TILE);
  const cols=Math.ceil(canvas.width/TILE)+2, rows=Math.ceil(canvas.height/TILE)+2;

  if(groundLayerReady){
    const sx=Math.max(0,Math.floor(world.camera.x));
    const sy=Math.max(0,Math.floor(world.camera.y));
    const sw=Math.min(canvas.width,groundLayer.width-sx);
    const sh=Math.min(canvas.height,groundLayer.height-sy);
    if(sw>0&&sh>0) ctx.drawImage(groundLayer,sx,sy,sw,sh,0,0,sw,sh);
  }

  // Objects are a separate overlay layer, like classic tilemap engines.
  for(let y=0;y<rows;y++){
    for(let x=0;x<cols;x++){
      const tx=firstX+x, ty=firstY+y;
      if(tx<0||ty<0||tx>=MAP_W||ty>=MAP_H) continue;
      const px=Math.floor(offsetX+x*TILE), py=Math.floor(offsetY+y*TILE);
      const o=objAt(tx,ty);
      const oiKey=objectSpriteKey(tx,ty), oi=oiKey?images[oiKey]:null;
      if(oi&&oi.complete){
        let dw=TILE, dh=TILE, ox=0, oy=0;
        if(o==='t'||o==='t2'){dw=48;dh=58;ox=-16;oy=-42;}
        else if(o==='tp'){dw=42;dh=58;ox=-13;oy=-42;}
        else if(o==='bu'||o==='rk'){dw=30;dh=30;ox=-7;oy=-14;}
        else if(o==='bn'){dw=46;dh=26;ox=-15;oy=-10;}
        else if(o==='lp'){dw=22;dh=42;ox=-3;oy=-28;}
        else if(o==='sg'){dw=28;dh=34;ox=-6;oy=-20;}
        else if(o==='sv'){dw=38;dh=48;ox=-11;oy=-34;}
        ctx.drawImage(oi,px+ox,py+oy,dw,dh);
      }
    }
  }

  // Approved large world assets
  for(const obj of Object.values(LARGE_OBJECTS)){
    const img=images[obj.src];
    if(!img||!img.complete) continue;
    const wx=obj.tx*TILE, wy=obj.ty*TILE;
    const sx=Math.round(wx-world.camera.x-obj.anchorX);
    const sy=Math.round(wy-world.camera.y-obj.anchorY);
    ctx.drawImage(img,sx,sy,obj.w,obj.h);
  }

  for(const n of WORLD_NPCS){
    const nx=Math.round((n.tx+.5)*TILE-world.camera.x);
    const ny=Math.round((n.ty+.5)*TILE-world.camera.y);
    if(nx<-16||ny<-24||nx>canvas.width+16||ny>canvas.height+24) continue;
    ctx.fillStyle='rgba(0,0,0,.22)'; ctx.fillRect(nx-6,ny+7,12,3);
    ctx.fillStyle=n.hair; ctx.fillRect(nx-5,ny-11,10,5);
    ctx.fillStyle='#e4bd91'; ctx.fillRect(nx-4,ny-6,8,6);
    ctx.fillStyle=n.shirt; ctx.fillRect(nx-5,ny,10,8);
    ctx.fillStyle='#26314b'; ctx.fillRect(nx-5,ny+8,4,7); ctx.fillRect(nx+1,ny+8,4,7);
  }

  const trainerFrames=TRAINER_FRAMES[state.trainerGender]||TRAINER_FRAMES.boy;
  const pImg=images[trainerFrames[state.dir][world.frame]];
  const drawX=Math.round(state.pos.x-world.camera.x-world.drawSize/2);
  const drawY=Math.round(state.pos.y-world.camera.y-world.drawSize/2-6);
  if(pImg&&pImg.complete) ctx.drawImage(pImg,drawX,drawY,world.drawSize,world.drawSize);
  else {ctx.fillStyle='#ff6767';ctx.fillRect(drawX+8,drawY+8,16,16);}
}
function loop(ts){if(!world.lastTime) world.lastTime=ts; const dt=Math.min(0.033,(ts-world.lastTime)/1000); world.lastTime=ts; updateWorld(dt); drawWorld(); requestAnimationFrame(loop)}
// battle
function pickEncounter(){const pool=BEASTS.filter(b=>!['Starter','Elite'].includes(b.rarity)); const weighted=[]; const weights={Common:7,Uncommon:3,Rare:1}; pool.forEach(b=>{for(let i=0;i<(weights[b.rarity]||1);i++) weighted.push(b)}); return weighted[Math.floor(Math.random()*weighted.length)]}
function activeMon(){return battle?state.party[battle.active]:null} function typeMod(attType,defType){if(attType==='Neutral') return 1; if(TYPES[attType]&&TYPES[attType].strong===defType) return 1.5; if(TYPES[attType]&&TYPES[attType].weak===defType) return 0.67; return 1;} function calcDamage(attacker,defender,moveName){const mv=MOVES[moveName]||MOVES['Scratch']; const as=statsFor(attacker), ds=statsFor(defender); const stab=mv.type===beastBy(attacker.id).type?1.15:1, mod=typeMod(mv.type,beastBy(defender.id).type); const raw=((attacker.level*0.6+3)*mv.power*(as[1]/Math.max(1,ds[2]))/45)+2; return {damage:Math.max(1,Math.round(raw*stab*mod*(0.9+Math.random()*0.2))),mod,hit:Math.random()*100<mv.acc};}

let battleSeq=0;
function recoverBattle(err){
  console.error('Rune Beasts battle recovered:',err);
  if(!battle) return;
  battle.locked=false;
  try{closeSubmenus();renderBattle();setBattleLock(false);}catch(_){}
  setBattleText('Battle recovered. Choose your next action.');
}
function battleLater(fn,ms){
  const id=battle?.id;
  setTimeout(()=>{
    if(!battle || battle.id!==id) return;
    try{fn();}catch(err){recoverBattle(err);}
  },ms);
}
function resetBattleButtons(){
  $$('#battleScreen button').forEach(btn=>btn.disabled=false);
  closeSubmenus();
}
function startBattle(beast){let lead=state.party.findIndex(m=>m.hp>0); if(lead<0){healParty(false); lead=0;} battle={id:++battleSeq,enemy:makeMon(beast.id,2+Math.floor(Math.random()*7)),active:lead,locked:false}; state.collection[beast.id]=true; save(); resetBattleButtons(); renderBattle(); showScreen('battleScreen'); setBattleText(`A wild ${beast.name} appeared!`)}
function renderBattle(){if(!battle) return; const p=activeMon(), e=battle.enemy; $('#enemyName').textContent=beastBy(e.id).name; $('#enemyLevel').textContent=`Lv ${e.level}`; $('#enemyType').innerHTML=typeTag(beastBy(e.id).type); $('#playerName').textContent=beastBy(p.id).name; $('#playerLevel').textContent=`Lv ${p.level}`; $('#playerType').innerHTML=typeTag(beastBy(p.id).type); $('#enemySprite').innerHTML=creatureArt(e.id,'lg'); $('#playerSprite').innerHTML=creatureArt(p.id,'lg'); $('#enemyHpBar').style.width=`${clamp(100*e.hp/maxHp(e),0,100)}%`; $('#playerHpBar').style.width=`${clamp(100*p.hp/maxHp(p),0,100)}%`; $('#playerHpText').textContent=`${p.hp}/${maxHp(p)} HP`;}
function setBattleText(t){$('#battleText').textContent=t}
function setBattleLock(v){
  if(!battle) return;
  battle.locked=v;
  $$('#battleScreen button').forEach(btn=>btn.disabled=v);
  if(!v) $$('#battleScreen button').forEach(btn=>btn.disabled=false);
  if(!$('#cancelBattleSubmenu').classList.contains('hidden')) $('#cancelBattleSubmenu').disabled=false;
} function closeSubmenus(){$('#movesMenu').classList.add('hidden'); $('#switchMenu').classList.add('hidden'); $('#cancelBattleSubmenu').classList.add('hidden'); $('#mainBattleMenu').classList.remove('hidden')}
function showMoves(){if(!battle||battle.locked) return; const p=activeMon(); $('#movesMenu').innerHTML=knownMoves(p).map(name=>{const mv=MOVES[name]; return `<button class="moveChoice" data-move="${name}"><b>${name}</b><small>${mv.type} · POW ${mv.power} · ACC ${mv.acc}</small></button>`}).join(''); $('#mainBattleMenu').classList.add('hidden'); $('#movesMenu').classList.remove('hidden'); $('#cancelBattleSubmenu').classList.remove('hidden'); $$('.moveChoice').forEach(btn=>btn.onclick=()=>useMove(btn.dataset.move));}
function useMove(name){if(!battle||battle.locked) return; closeSubmenus(); setBattleLock(true); const p=activeMon(), e=battle.enemy, result=calcDamage(p,e,name); if(!result.hit){setBattleText(`${beastBy(p.id).name} used ${name}, but missed!`); battleLater(enemyTurn,650); return;} e.hp=Math.max(0,e.hp-result.damage); setBattleText(`${beastBy(p.id).name} used ${name}! ${result.damage} damage.${result.mod>1?' Super effective!':result.mod<1?' Not very effective.':''}`); renderBattle(); battleLater(()=>e.hp<=0?winBattle():enemyTurn(),700)}
function enemyTurn(){if(!battle) return; const p=activeMon(), e=battle.enemy; if(!p||p.hp<=0){handleFaint(); return;} const pool=knownMoves(e), name=pool[Math.floor(Math.random()*pool.length)]||'Scratch'; const result=calcDamage(e,p,name); if(!result.hit){setBattleText(`${beastBy(e.id).name} used ${name}, but missed!`); battleLater(()=>setBattleLock(false),450); return;} p.hp=Math.max(0,p.hp-result.damage); setBattleText(`${beastBy(e.id).name} used ${name}! ${result.damage} damage.`); renderBattle(); save(); battleLater(()=>p.hp<=0?handleFaint():setBattleLock(false),650)}
function handleFaint(){if(!battle) return; const cur=activeMon(); if(cur) setBattleText(`${beastBy(cur.id).name} fainted!`); const next=state.party.findIndex((m,i)=>i!==battle.active && m.hp>0); if(next<0){setTimeout(()=>{battle=null; healParty(false); showScreen('worldScreen'); $('#worldText').textContent='Your party recovered at the spring.';},800)} else {battleLater(()=>{battle.active=next; renderBattle(); setBattleText(`${beastBy(activeMon().id).name} steps in!`); setBattleLock(false);},650)}}
function winBattle(){if(!battle) return; const p=activeMon(); const gain=18+battle.enemy.level*8; p.xp+=gain; state.wins+=1; state.shards+=8; while(p.level<50&&p.xp>=xpNeed(p.level)){p.xp-=xpNeed(p.level); p.level+=1; p.hp=maxHp(p)} setBattleText(`Victory! ${beastBy(p.id).name} gained ${gain} XP.`); battle=null; save(); setTimeout(()=>showScreen('worldScreen'),850)}
function attemptCapture(){if(!battle||battle.locked) return; if(state.party.length>=6){setBattleText('Your party is full.'); return;} if(state.shards<10){setBattleText('You need 10 Rune Shards.'); return;} setBattleLock(true); state.shards-=10; const e=battle.enemy; const baseChance={Common:0.58,Uncommon:0.44,Rare:0.30,Elite:0.18}[beastBy(e.id).rarity]||0.4; const chance=clamp(baseChance+(1-e.hp/maxHp(e))*0.45,0.12,0.9); if(Math.random()<chance){state.party.push(e); state.collection[e.id]=true; state.captures+=1; setBattleText(`${beastBy(e.id).name} was bound to your rune!`); battle=null; save(); setTimeout(()=>showScreen('worldScreen'),900)} else {setBattleText(`${beastBy(e.id).name} broke free!`); save(); battleLater(enemyTurn,650)}}
function showSwitch(){if(!battle||battle.locked) return; $('#switchMenu').innerHTML=state.party.map((m,i)=>`<button class="switchChoice" data-i="${i}" ${i===battle.active||m.hp<=0?'disabled':''}><span>${beastBy(m.id).name} Lv${m.level}</span><span>${m.hp}/${maxHp(m)} HP</span></button>`).join(''); $('#mainBattleMenu').classList.add('hidden'); $('#switchMenu').classList.remove('hidden'); $('#cancelBattleSubmenu').classList.remove('hidden'); $$('.switchChoice').forEach(btn=>btn.onclick=()=>switchTo(+btn.dataset.i));}
function switchTo(i){if(!battle||battle.locked||i===battle.active||state.party[i].hp<=0) return; closeSubmenus(); battle.active=i; renderBattle(); setBattleText(`${beastBy(activeMon().id).name}, you're up!`); setBattleLock(true); battleLater(enemyTurn,600)} function runAway(){if(!battle||battle.locked) return; if(Math.random()<0.85){setBattleText('You escaped safely.'); battle=null; setTimeout(()=>showScreen('worldScreen'),400)} else {setBattleText("Couldn't escape!"); setBattleLock(true); battleLater(enemyTurn,550)}}
// setup + controls
function setHeld(dir,val){input[dir]=val} function bindControl(btn){const dir=btn.dataset.dir; const on=e=>{e.preventDefault(); setHeld(dir,true)}; const off=e=>{e.preventDefault(); setHeld(dir,false)}; ['pointerdown','touchstart'].forEach(ev=>btn.addEventListener(ev,on,{passive:false})); ['pointerup','pointerleave','pointercancel','touchend','touchcancel'].forEach(ev=>btn.addEventListener(ev,off,{passive:false}));}
document.addEventListener('keydown',e=>{if(e.key==='ArrowUp') input.up=true; if(e.key==='ArrowDown') input.down=true; if(e.key==='ArrowLeft') input.left=true; if(e.key==='ArrowRight') input.right=true; if((e.key===' '||e.key==='Enter')&&!e.repeat){e.preventDefault();interactWorld();}}); document.addEventListener('keyup',e=>{if(e.key==='ArrowUp') input.up=false; if(e.key==='ArrowDown') input.down=false; if(e.key==='ArrowLeft') input.left=false; if(e.key==='ArrowRight') input.right=false});
function setChoice(g){pendingSetup.trainerGender=g; $('#boyChoice').classList.toggle('active',g==='boy'); $('#girlChoice').classList.toggle('active',g==='girl')}
$('#newGameBtn').onclick=()=>{pendingSetup={trainerName:'Trainer',trainerGender:'boy'}; $('#trainerNameInput').value=''; setChoice('boy'); showScreen('setupScreen');}; $('#continueBtn').onclick=()=>showScreen('worldScreen'); $('#boyChoice').onclick=()=>setChoice('boy'); $('#girlChoice').onclick=()=>setChoice('girl'); $('#toStarterBtn').onclick=()=>{const name=$('#trainerNameInput').value.trim(); pendingSetup.trainerName=(name||'Trainer').slice(0,14); renderStarters(); showScreen('starterScreen');};
$('#movesBtn').onclick=showMoves; $('#captureBtn').onclick=attemptCapture; $('#switchBtn').onclick=showSwitch; $('#runBtn').onclick=runAway; $('#cancelBattleSubmenu').onclick=closeSubmenus; $('#healBtn').onclick=()=>{healParty(false); alert('Party restored.')}; $('#manualSaveBtn').onclick=()=>{save(); alert('Game saved.')}; $('#resetBtn').onclick=()=>{if(confirm('Delete all Rune Beasts progress?')){localStorage.removeItem(SAVE_KEY); location.reload();}};
$('[data-screen]').forEach(btn=>btn.onclick=()=>showScreen(btn.dataset.screen)); $('.control').forEach(bindControl); $('#interactBtn').onclick=interactWorld;
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(()=>{})} buildGroundLayer(); load(); $('#continueBtn').classList.toggle('hidden',!localStorage.getItem(SAVE_KEY)); renderWorldPanels(); requestAnimationFrame(loop);

window.addEventListener('error',e=>{
  console.error('Rune Beasts runtime error',e.error||e.message);
  if(battle) recoverBattle(e.error||new Error(e.message));
});
window.addEventListener('unhandledrejection',e=>{
  console.error('Rune Beasts rejected promise',e.reason);
  if(battle) recoverBattle(e.reason||new Error('Battle error'));
});
