
const TYPES={Fire:{strong:"Grass",weak:"Water"},Grass:{strong:"Water",weak:"Fire"},Water:{strong:"Fire",weak:"Grass"},Electric:{strong:"Flying",weak:"Rock"},Flying:{strong:"Rock",weak:"Electric"},Rock:{strong:"Electric",weak:"Flying"}};
const BEASTS=[{"id": "cindercub", "name": "Cindercub", "type": "Fire", "rarity": "Starter", "role": "Balanced", "base": [44, 52, 42, 48, 42, 50], "glyph": "♞"}, {"id": "ashbit", "name": "Ashbit", "type": "Fire", "rarity": "Common", "role": "Speed", "base": [32, 49, 31, 42, 34, 64], "glyph": "⌁"}, {"id": "magmole", "name": "Magmole", "type": "Fire", "rarity": "Uncommon", "role": "Tank", "base": [58, 60, 63, 34, 44, 25], "glyph": "●"}, {"id": "flarewing", "name": "Flarewing", "type": "Fire", "rarity": "Rare", "role": "Special", "base": [43, 38, 34, 68, 44, 70], "glyph": "⌃"}, {"id": "ripplet", "name": "Ripplet", "type": "Water", "rarity": "Starter", "role": "Balanced", "base": [48, 46, 46, 52, 48, 44], "glyph": "≋"}, {"id": "bubbfin", "name": "Bubbfin", "type": "Water", "rarity": "Common", "role": "Support", "base": [42, 31, 43, 48, 52, 37], "glyph": "◌"}, {"id": "cragclaw", "name": "Cragclaw", "type": "Water", "rarity": "Uncommon", "role": "Tank", "base": [55, 48, 67, 35, 52, 24], "glyph": "⋈"}, {"id": "abyssquid", "name": "Abyssquid", "type": "Water", "rarity": "Rare", "role": "Special", "base": [46, 34, 41, 72, 61, 43], "glyph": "Ψ"}, {"id": "spriglet", "name": "Spriglet", "type": "Grass", "rarity": "Starter", "role": "Balanced", "base": [46, 48, 44, 46, 52, 46], "glyph": "♧"}, {"id": "mossbug", "name": "Mossbug", "type": "Grass", "rarity": "Common", "role": "Defence", "base": [41, 35, 58, 31, 54, 30], "glyph": "✿"}, {"id": "vineape", "name": "Vineape", "type": "Grass", "rarity": "Uncommon", "role": "Physical", "base": [48, 62, 42, 36, 39, 60], "glyph": "ϟ"}, {"id": "bloomhorn", "name": "Bloomhorn", "type": "Grass", "rarity": "Rare", "role": "HP/Support", "base": [72, 43, 55, 48, 64, 28], "glyph": "♜"}, {"id": "voltpup", "name": "Voltpup", "type": "Electric", "rarity": "Uncommon", "role": "All-rounder", "base": [45, 51, 39, 52, 41, 62], "glyph": "Ϟ"}, {"id": "sparkit", "name": "Sparkit", "type": "Electric", "rarity": "Common", "role": "Speed", "base": [34, 42, 30, 45, 33, 72], "glyph": "ϟ"}, {"id": "thundram", "name": "Thundram", "type": "Electric", "rarity": "Rare", "role": "Physical", "base": [58, 72, 53, 42, 44, 38], "glyph": "♈"}, {"id": "arcwing", "name": "Arcwing", "type": "Electric", "rarity": "Rare", "role": "Special", "base": [42, 35, 37, 74, 51, 68], "glyph": "⌁"}, {"id": "breezlet", "name": "Breezlet", "type": "Flying", "rarity": "Common", "role": "Balanced", "base": [38, 41, 36, 42, 38, 58], "glyph": "▲"}, {"id": "galehare", "name": "Galehare", "type": "Flying", "rarity": "Uncommon", "role": "Speed", "base": [44, 48, 37, 39, 40, 75], "glyph": "⋏"}, {"id": "skyrake", "name": "Skyrake", "type": "Flying", "rarity": "Rare", "role": "Offence", "base": [51, 61, 45, 56, 44, 62], "glyph": "≻"}, {"id": "stormowl", "name": "Stormowl", "type": "Flying", "rarity": "Elite", "role": "Special tank", "base": [62, 39, 49, 74, 73, 55], "glyph": "◉"}, {"id": "pebblit", "name": "Pebblit", "type": "Rock", "rarity": "Common", "role": "Defence", "base": [47, 40, 64, 28, 47, 24], "glyph": "◆"}, {"id": "craggoat", "name": "Craggoat", "type": "Rock", "rarity": "Uncommon", "role": "Physical", "base": [54, 64, 59, 30, 42, 35], "glyph": "♑"}, {"id": "gemscarab", "name": "Gemscarab", "type": "Rock", "rarity": "Rare", "role": "Defensive", "base": [53, 37, 76, 45, 68, 25], "glyph": "◇"}, {"id": "titanox", "name": "Titanox", "type": "Rock", "rarity": "Elite", "role": "Tank", "base": [82, 74, 81, 28, 60, 18], "glyph": "♉"}];
const MOVES={"Scratch": {"type": "Neutral", "power": 35, "acc": 100}, "Quick Jab": {"type": "Neutral", "power": 30, "acc": 100}, "Guard Break": {"type": "Neutral", "power": 50, "acc": 90}, "Ember Bite": {"type": "Fire", "power": 45, "acc": 100}, "Flame Rush": {"type": "Fire", "power": 60, "acc": 90}, "Heat Wave": {"type": "Fire", "power": 70, "acc": 85}, "Water Jet": {"type": "Water", "power": 45, "acc": 100}, "Tidal Slam": {"type": "Water", "power": 60, "acc": 90}, "Bubble Burst": {"type": "Water", "power": 55, "acc": 95}, "Leaf Swipe": {"type": "Grass", "power": 45, "acc": 100}, "Vine Lash": {"type": "Grass", "power": 60, "acc": 90}, "Spore Burst": {"type": "Grass", "power": 55, "acc": 95}, "Spark Snap": {"type": "Electric", "power": 45, "acc": 100}, "Volt Rush": {"type": "Electric", "power": 60, "acc": 90}, "Arc Pulse": {"type": "Electric", "power": 70, "acc": 85}, "Gust": {"type": "Flying", "power": 45, "acc": 100}, "Sky Dive": {"type": "Flying", "power": 60, "acc": 90}, "Wind Cutter": {"type": "Flying", "power": 55, "acc": 95}, "Stone Toss": {"type": "Rock", "power": 45, "acc": 100}, "Rock Ram": {"type": "Rock", "power": 60, "acc": 90}, "Crystal Crash": {"type": "Rock", "power": 70, "acc": 85}};
const LEARNSETS={"cindercub": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "ashbit": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "magmole": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "flarewing": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "ripplet": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "bubbfin": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "cragclaw": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "abyssquid": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "spriglet": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "mossbug": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "vineape": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "bloomhorn": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "voltpup": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "sparkit": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "thundram": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "arcwing": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "breezlet": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "galehare": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "skyrake": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "stormowl": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "pebblit": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]], "craggoat": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]], "gemscarab": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]], "titanox": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]]};
const STARTERS=["cindercub","ripplet","spriglet"];
const SHOP_ITEMS={
  runeSeal:{name:'Rune Seal',price:12,desc:'Standard binding seal for catching wild Rune Beasts.'},
  greaterSeal:{name:'Greater Rune Seal',price:30,desc:'Improved seal with a noticeably better binding chance.'},
  tonic:{name:'Verdant Tonic',price:10,desc:'Restores 35 HP to one Rune Beast.'},
  reviveRoot:{name:'Revival Root',price:24,desc:'Revives one fainted Rune Beast at 50% HP.'}
};
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
  {id:'guild',name:'Rune Market',tx:24,ty:8,w:11,h:8,doorX:29,doorY:15,roof:'#a94e42',roof2:'#d06a51',wall:'#e8cf9a',trim:'#744438',enterable:true,interior:'shop'},
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
blockRect(37,35,3,3); // Rune fountain basin

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
const HEAL_GROUND=new Set([]); 
const SAVE_OBJECT=new Set(['sv']);

let state={party:[],collection:{},shards:100,wins:0,captures:0,steps:0,pos:{x:(WORLD_SPAWN.tx+.5)*TILE,y:(WORLD_SPAWN.ty+.5)*TILE},dir:'down',trainerName:'Trainer',trainerGender:'boy',flags:{},inventory:{runeSeal:5,greaterSeal:1,tonic:2,reviveRoot:1},captureCounts:{}};
let pendingSetup={trainerName:'Trainer',trainerGender:'boy'}; let battle=null;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)]; const beastBy=id=>BEASTS.find(b=>b.id===id); const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)); const xpNeed=lv=>30+lv*20; const typeColors={Fire:'#b94b39',Water:'#3678bb',Grass:'#4e8c49',Electric:'#b69525',Flying:'#687fb8',Rock:'#786f67',Neutral:'#596680'};
function addXp(m,amount){
  if(!m||amount<=0)return 0;
  let levels=0;m.xp=(m.xp||0)+amount;
  while(m.level<50&&m.xp>=xpNeed(m.level)){m.xp-=xpNeed(m.level);m.level+=1;m.hp=maxHp(m);levels++;}
  return levels;
}
function grantPartyXp(amount){state.party.forEach(m=>addXp(m,amount));}
function captureMilestoneReward(id){
  const count=state.captureCounts[id]||0;
  if(count<5||count%5!==0)return '';
  const tier=count/5;
  const xp=25+tier*15;
  grantPartyXp(xp);
  state.inventory.runeSeal+=2;
  if(tier%2===0)state.inventory.greaterSeal+=1;
  state.shards+=10+tier*5;
  return ` Species mastery! ${count} ${beastBy(id).name} bound — whole party +${xp} XP, +2 Rune Seals${tier%2===0?', +1 Greater Seal':''}, +${10+tier*5} shards.`;
}
function maxHp(m){return Math.round(beastBy(m.id).base[0]*0.7+m.level*5+20)} function statsFor(m){const b=beastBy(m.id).base;return [maxHp(m),...b.slice(1).map(v=>Math.round(v*0.65+m.level*2))]} function knownMoves(m){const set=LEARNSETS[m.id]||[[1,'Scratch']];return set.filter(([lv])=>lv<=m.level).map(x=>x[1]).slice(-4)} function makeMon(id,level){const m={uid:String(Date.now())+Math.random(),id,level,xp:0,hp:0}; m.hp=maxHp(m); return m;}
function normaliseState(){state.party=Array.isArray(state.party)?state.party:[]; state.collection=state.collection||{}; state.shards=Number.isFinite(+state.shards)?+state.shards:100; state.wins=state.wins||0; state.captures=state.captures||0; state.steps=state.steps||0; state.pos=state.pos||{x:(WORLD_SPAWN.tx+.5)*TILE,y:(WORLD_SPAWN.ty+.5)*TILE}; state.dir=state.dir||'down'; state.trainerName=(state.trainerName||'Trainer').slice(0,14); state.trainerGender=state.trainerGender==='girl'?'girl':'boy'; state.flags=state.flags||{}; state.inventory=state.inventory||{runeSeal:5,greaterSeal:1,tonic:2,reviveRoot:1}; for(const k of Object.keys(SHOP_ITEMS)) state.inventory[k]=Math.max(0,+state.inventory[k]||0); state.captureCounts=state.captureCounts||{}; if(state.flags.worldLayout!==15){state.pos={x:(WORLD_SPAWN.tx+.5)*TILE,y:(WORLD_SPAWN.ty+.5)*TILE};state.flags.worldLayout=15;} state.party.forEach(m=>{m.level=m.level||1; m.xp=m.xp||0; m.hp=Number.isFinite(m.hp)?clamp(m.hp,0,maxHp(m)):maxHp(m);});}
function save(){normaliseState(); localStorage.setItem(SAVE_KEY,JSON.stringify(state)); renderWorldPanels();} function load(){const raw=localStorage.getItem(SAVE_KEY); if(!raw) return false; try{state=JSON.parse(raw); normaliseState(); return true;}catch{return false;}}
function typeTag(type){return `<span class="typeTag" style="background:${typeColors[type]||typeColors.Neutral}">${type}</span>`}
function creatureArt(id,size='md'){const b=beastBy(id), path=SPRITES[id]; if(path){const cls=size==='lg'?'sprite-lg':size==='sm'?'sprite-sm':'sprite-md'; return `<img class="creatureImg ${cls}" src="${assetUrl(path)}" alt="${b.name}" loading="eager">`;} const cls=size==='lg'?'':size==='sm'?' sm':' md'; return `<div class="fallbackSprite${cls}">${b.glyph}</div>`;}
function trainerPreview(gender,size=56){return `<img src="${assetUrl(TRAINER_FRAMES[gender].down[0])}" alt="${gender} trainer" style="width:${size}px;height:${size}px;image-rendering:pixelated">`;}
function showScreen(id){$$('.screen').forEach(el=>el.classList.remove('active')); const t=$('#'+id); if(t) t.classList.add('active'); $$('.bottomNav button').forEach(btn=>btn.classList.toggle('active',btn.dataset.screen===id)); if(id==='partyScreen') renderParty(); if(id==='dexScreen') renderDex(); if(id==='profileScreen') renderProfile(); if(id==='shopScreen') renderShop(); if(id==='worldScreen') renderWorldPanels();}
function renderStarters(){$('#starterChoices').innerHTML=STARTERS.map(id=>{const beast=beastBy(id), temp=makeMon(id,5); return `<div class="card"><div class="spriteWrap">${creatureArt(id,'lg')}</div><h3>${beast.name}</h3>${typeTag(beast.type)}<div class="muted">${beast.role}</div><div class="movesList">Moves: ${knownMoves(temp).join(' · ')}</div><button class="primary big chooseStarter" data-id="${id}">Choose</button></div>`;}).join(''); $$('.chooseStarter').forEach(btn=>btn.onclick=()=>{const mon=makeMon(btn.dataset.id,5); state={party:[mon],collection:{[mon.id]:true},shards:100,wins:0,captures:0,steps:0,pos:{x:(10+0.5)*TILE,y:(22+0.5)*TILE},dir:'down',trainerName:pendingSetup.trainerName||'Trainer',trainerGender:pendingSetup.trainerGender||'boy',flags:{},inventory:{runeSeal:5,greaterSeal:1,tonic:2,reviveRoot:1},captureCounts:{}}; save(); showScreen('worldScreen');});}
function renderBag(){
  const target=$('#bagList'); if(!target)return;
  target.innerHTML=Object.entries(SHOP_ITEMS).map(([id,it])=>`<div class="bagRow"><span><b>${it.name}</b><small>${it.desc}</small></span><strong>× ${state.inventory[id]||0}</strong></div>`).join('');
}
function renderShop(){
  if(!$('#shopList'))return;
  $('#shopShards').textContent=state.shards;
  $('#shopList').innerHTML=Object.entries(SHOP_ITEMS).map(([id,it])=>`<div class="shopItem"><div><b>${it.name}</b><small>${it.desc}</small></div><button class="secondary buyItem" data-item="${id}">✦ ${it.price}</button></div>`).join('');
  renderBag();
  $('.buyItem').forEach(btn=>btn.onclick=()=>buyShopItem(btn.dataset.item));
}
function buyShopItem(id){
  const it=SHOP_ITEMS[id]; if(!it)return;
  if(state.shards<it.price){alert('Not enough Rune Shards.');return;}
  state.shards-=it.price; state.inventory[id]=(state.inventory[id]||0)+1; save(); renderShop();
}
function renderWorldPanels(){if(!$('#shards')) return; $('#shards').textContent=state.shards; $('#partyCount').textContent=`${state.party.length} / 6`; $('#partyMini').innerHTML=state.party.map((m,i)=>`<div class="partyMiniRow"><span>${i===0?'★ ':''}${beastBy(m.id).name} Lv${m.level} · ${m.hp}/${maxHp(m)} HP</span><span>${typeTag(beastBy(m.id).type)}</span></div>`).join(''); $('#trainerBadge').innerHTML=`<span class="badgeName">${state.trainerName}</span>`;}
function renderParty(){$('#partyList').innerHTML=state.party.map((m,i)=>{const b=beastBy(m.id), pct=clamp(m.xp/xpNeed(m.level)*100,0,100); return `<div class="card partyCard"><div class="head"><div class="lhs">${creatureArt(m.id,'md')}<div><b>${b.name}</b><div>${typeTag(b.type)}</div></div></div><b>Lv ${m.level}</b></div><div class="stats">HP ${m.hp}/${maxHp(m)} · ATK ${statsFor(m)[1]} · DEF ${statsFor(m)[2]} · SP.ATK ${statsFor(m)[3]} · SP.DEF ${statsFor(m)[4]} · SPD ${statsFor(m)[5]}</div><div class="movesList">Moves: ${knownMoves(m).join(' · ')}</div><div class="xpBar"><i style="width:${pct}%"></i></div><small>XP ${m.xp}/${xpNeed(m.level)}</small>${i?`<button class="secondary makeLead" data-i="${i}">Make Lead</button>`:`<div class="movesList"><b>Lead Beast</b></div>`}</div>`;}).join(''); $$('.makeLead').forEach(btn=>btn.onclick=()=>{const i=+btn.dataset.i; const picked=state.party.splice(i,1)[0]; state.party.unshift(picked); save(); renderParty();});}
function renderDex(){
  const seen=BEASTS.filter(b=>state.collection[b.id]).length;
  $('#dexProgress').textContent=`${seen} / ${BEASTS.length} discovered`;
  $('#dexList').innerHTML=BEASTS.map((b,i)=>{
    const discovered=!!state.collection[b.id],count=state.captureCounts[b.id]||0,next=count<5?5:(Math.floor(count/5)+1)*5;
    return `<div class="card"><div class="spriteWrap">${discovered?creatureArt(b.id,'sm'):`<div class="fallbackSprite sm">?</div>`}</div><small>#${String(i+1).padStart(3,'0')}</small><div><b>${discovered?b.name:'?????'}</b></div><div>${discovered?typeTag(b.type):''}</div><small>${discovered?`${b.rarity} · ${b.role}`:'Undiscovered'}</small>${discovered?`<div class="masteryLine">Bound ×${count} · Next mastery ${next}</div>`:''}</div>`;
  }).join('');
}
function renderProfile(){$('#profileSprite').innerHTML=trainerPreview(state.trainerGender,56); $('#profileName').textContent=state.trainerName; $('#profileGender').textContent=state.trainerGender==='girl'?'Girl trainer':'Boy trainer'; $('#saveStats').innerHTML=`<p>Wins: <b>${state.wins}</b></p><p>Captured: <b>${state.captures}</b></p><p>Discovered: <b>${Object.keys(state.collection).length}/${BEASTS.length}</b></p><p>Steps: <b>${state.steps}</b></p><p>Rune Shards: <b>${state.shards}</b></p><p>Rune Seals: <b>${state.inventory.runeSeal||0}</b> · Greater: <b>${state.inventory.greaterSeal||0}</b></p><p>Tonics: <b>${state.inventory.tonic||0}</b> · Revival Roots: <b>${state.inventory.reviveRoot||0}</b></p>`;}
// world
const canvas=document.getElementById('worldCanvas');
const ctx=canvas.getContext('2d',{alpha:false});
ctx.imageSmoothingEnabled=false;

const world={
  width:MAP_W*TILE,height:MAP_H*TILE,playerSpeed:74,drawSize:32,bbox:{w:10,h:11},
  camera:{x:0,y:0},frame:0,frameTimer:0,encounterDistance:0,lastTime:0,
  messageUntil:0,lastTileKey:''
};
const input={up:false,down:false,left:false,right:false};
const images={};
let activeInterior=null;
let returnPos=null;

function loadImg(src){const img=new Image();img.src=assetUrl(src);images[src]=img;return img;}
function loadTileAsset(val){if(Array.isArray(val))val.forEach(loadImg);else loadImg(val);}
Object.values(TILESET).forEach(loadTileAsset);
Object.values(SPRITES).forEach(loadImg);
Object.values(TRAINER_FRAMES).forEach(v=>Object.values(v).flat().forEach(loadImg));

function groundAt(tx,ty){return GROUND[ty]&&GROUND[ty][tx]?GROUND[ty][tx]:'W';}
function objAt(tx,ty){return OBJECTS[ty]&&OBJECTS[ty][tx]!==undefined?OBJECTS[ty][tx]:'';}
function objectSpriteKey(tx,ty){const o=objAt(tx,ty);return TILESET[o]||null;}
function playerBox(x=state.pos.x,y=state.pos.y){return{x:x-world.bbox.w/2,y:y-world.bbox.h/2,w:world.bbox.w,h:world.bbox.h};}
function tilesTouching(box){
  const left=Math.floor(box.x/TILE),right=Math.floor((box.x+box.w-1)/TILE);
  const top=Math.floor(box.y/TILE),bottom=Math.floor((box.y+box.h-1)/TILE);
  const out=[];for(let ty=top;ty<=bottom;ty++)for(let tx=left;tx<=right;tx++)out.push([tx,ty]);return out;
}
function rectOverlap(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;}
function npcBox(n){return{x:n.tx*TILE+3,y:n.ty*TILE+2,w:10,h:12};}

function isWorldSolid(tx,ty){
  if(tx<0||ty<0||tx>=MAP_W||ty>=MAP_H)return true;
  if(SOLID_GROUND.has(groundAt(tx,ty)))return true;
  if(WORLD_BLOCKED[ty]&&WORLD_BLOCKED[ty][tx])return true;
  if(SOLID_OBJECT.has(objAt(tx,ty)))return true;
  return false;
}
function interiorSolid(box){
  const maxX=20*TILE,maxY=15*TILE;
  if(box.x<16||box.y<16||box.x+box.w>maxX-16||box.y+box.h>maxY-10)return true;
  const furniture=[
    {x:3*TILE,y:3*TILE,w:14*TILE,h:2*TILE},
    {x:2*TILE,y:7*TILE,w:3*TILE,h:3*TILE},
    {x:15*TILE,y:7*TILE,w:3*TILE,h:3*TILE}
  ];
  return furniture.some(f=>rectOverlap(box,f));
}
function collideBox(box){
  if(activeInterior)return interiorSolid(box);
  if(tilesTouching(box).some(([tx,ty])=>isWorldSolid(tx,ty)))return true;
  return WORLD_NPCS.some(n=>rectOverlap(box,npcBox(n)));
}
function tryMove(dx,dy){
  const ox=state.pos.x,oy=state.pos.y;
  if(dx){const nx=ox+dx;if(!collideBox(playerBox(nx,oy)))state.pos.x=nx;}
  if(dy){const ny=oy+dy;if(!collideBox(playerBox(state.pos.x,ny)))state.pos.y=ny;}
}
function currentTile(){return{tx:Math.floor(state.pos.x/TILE),ty:Math.floor(state.pos.y/TILE)};}
function worldSay(text,ms=2600){const el=$('#worldText');if(el)el.textContent=text;world.messageUntil=performance.now()+ms;}
function healParty(say=true){state.party.forEach(m=>m.hp=maxHp(m));save();if(say)worldSay('Your party was fully restored.');}
function distanceToTile(tx,ty){return Math.hypot(state.pos.x-(tx+.5)*TILE,state.pos.y-(ty+.5)*TILE);}

function areaFor(tx,ty){
  if(activeInterior)return activeInterior==='clinic'?'Rune Clinic':'Rowan’s Workshop';
  if(tx>=73)return ty>=45?'Eastbank Wilds':'Eastbank Quarry';
  if(ty>=70)return'South Route';
  if(ty<24)return'North Runevale';
  if(ty>52)return'South Runevale';
  return'Runevale Town';
}

function enterInterior(id){
  if(activeInterior)return;
  returnPos={x:state.pos.x,y:state.pos.y,dir:state.dir};
  activeInterior=id;
  state.pos={x:10.5*TILE,y:12.5*TILE};
  state.dir='up';
  world.camera.x=world.camera.y=0;
  world.lastTileKey='';
  worldSay(id==='clinic'?'Rune Clinic — talk to the attendant or use the counter.':'Rowan’s Workshop — maps and Rune tools line the walls.',3200);
}
function exitInterior(){
  if(!activeInterior||!returnPos)return;
  activeInterior=null;
  state.pos={x:returnPos.x,y:returnPos.y};
  state.dir='down';
  returnPos=null;
  world.lastTileKey='';
  worldSay('Back outside in Runevale.',1800);
}

function nearestBuildingDoor(){
  return BUILDINGS.map(b=>({b,d:distanceToTile(b.doorX,b.doorY)})).filter(x=>x.d<34).sort((a,b)=>a.d-b.d)[0]?.b||null;
}
function nearestLandmark(){
  return LANDMARKS.map(l=>({l,d:distanceToTile(l.doorX,l.doorY)})).filter(x=>x.d<40).sort((a,b)=>a.d-b.d)[0]?.l||null;
}

function interactWorld(){
  if(battle||!$('#worldScreen').classList.contains('active'))return;

  if(activeInterior){
    const {tx,ty}=currentTile();
    if(ty>=12&&tx>=8&&tx<=12){exitInterior();return;}
    if(activeInterior==='clinic'){
      if(ty<=6){healParty(false);worldSay('Clinic attendant: Your Rune Beasts are fighting fit again.');return;}
      worldSay('A tidy clinic with shelves of tonics and field notes.');return;
    }
    if(activeInterior==='workshop'){
      if(ty<=6){
        if(!state.flags.workshopIntro){state.flags.workshopIntro=true;save();}
        worldSay('Rowan: Eastbank is beyond the river. Check the old mine when you are ready.');return;
      }
      worldSay('Tools, maps and half-finished Rune devices cover the benches.');return;
    }
  }

  const nearbyNpc=WORLD_NPCS.map(n=>({n,d:distanceToTile(n.tx,n.ty)})).filter(x=>x.d<34).sort((a,b)=>a.d-b.d)[0]?.n;
  if(nearbyNpc){
    if(nearbyNpc.id==='rowan'){
      if(!state.flags.workshopIntro){state.flags.workshopIntro=true;save();worldSay('Rowan: Cross Runevale Bridge and inspect the old Eastbank Mine. Bram will point you the right way.',4200);}
      else if(!state.flags.mineCache)worldSay('Rowan: Follow the east road, cross the bridge, then head north at the quarry fork.');
      else worldSay('Rowan: Good work. The shards you recovered should help with binding new Rune Beasts.');
      return;
    }
    if(nearbyNpc.id==='mina'){worldSay('Mina: The clinic is south-west. The fountain in the square can restore your party too.');return;}
    if(nearbyNpc.id==='quarryman'){worldSay(state.flags.mineCache?'Bram: Heard you found the old cache. Watch yourself near Whisper Cave.':'Bram: Mine entrance is up the north path. Wild Rune Beasts get stronger deeper east.');return;}
  }

  const building=nearestBuildingDoor();
  if(building){
    if(building.enterable){if(building.interior==='shop'){showScreen('shopScreen');renderShop();return;} enterInterior(building.interior);return;}
    worldSay(building.name+' — the door is closed for now.');return;
  }

  const landmark=nearestLandmark();
  if(landmark){
    if(landmark.id==='mine'){
      if(!state.flags.mineCache){state.flags.mineCache=true;state.shards+=25;save();worldSay('Inside the mine entrance you find an abandoned cache: +25 Rune Shards!',4000);}
      else worldSay('Old Eastbank Mine — the shard cache is empty now.');
      return;
    }
    if(landmark.id==='cave'){worldSay('Whisper Cave — a strange pulse comes from deeper inside. The passage is sealed for now.',3600);return;}
  }

  const point=INTERACTION_POINTS.map(p=>({p,d:distanceToTile(p.tx,p.ty)})).filter(x=>x.d<38).sort((a,b)=>a.d-b.d)[0]?.p;
  if(point){
    if(point.id==='townSign'){worldSay('Runevale: North — Rune Lodge · West — Clinic · East — Bridge and Quarry · South — Route Gate.');return;}
    if(point.id==='bridge'){worldSay('Runevale Bridge — the river crossing to Eastbank.');return;}
    if(point.id==='spring'){healParty(false);worldSay('The Rune fountain restores your whole party.');return;}
  }
  worldSay('Nothing nearby needs your attention.',1300);
}

function passiveWorldMessage(tx,ty){
  if(performance.now()<world.messageUntil)return;
  if(activeInterior){$('#worldText').textContent=activeInterior==='clinic'?'Rune Clinic — A to use the counter, or move to the doorway to leave.':'Rowan’s Workshop — A near the counter to talk, or move to the doorway to leave.';return;}
  const g=groundAt(tx,ty);
  if(g==='g'){$('#worldText').textContent='Tall grass rustles nearby — wild Rune Beasts live here.';return;}
  if(tx>=73){
    $('#worldText').textContent=state.flags.workshopIntro&&!state.flags.mineCache?'Eastbank — search the old mine for Rowan.':'Explore Eastbank’s quarry paths and wild grass.';
    return;
  }
  $('#worldText').textContent=!state.flags.workshopIntro?'Explore Runevale. Rowan is outside the workshop east of the square.':!state.flags.mineCache?'Rowan asked you to investigate the mine beyond the bridge.':'Explore Runevale Town.';
}

function updateWorld(dt){
  if(!$('#worldScreen').classList.contains('active')||battle)return;
  let vx=0,vy=0;
  if(input.left)vx-=1;if(input.right)vx+=1;if(input.up)vy-=1;if(input.down)vy+=1;
  const moving=vx!==0||vy!==0;
  if(moving){
    const len=Math.hypot(vx,vy)||1;vx/=len;vy/=len;
    if(Math.abs(vx)>Math.abs(vy))state.dir=vx>0?'right':'left';else state.dir=vy>0?'down':'up';
    const bx=state.pos.x,by=state.pos.y;
    tryMove(vx*world.playerSpeed*dt,vy*world.playerSpeed*dt);
    const moved=Math.hypot(state.pos.x-bx,state.pos.y-by);
    if(moved>0){state.steps+=1;world.encounterDistance+=moved;world.frameTimer+=dt;if(world.frameTimer>.17){world.frame=(world.frame+1)%2;world.frameTimer=0;}}
  }else{world.frame=0;world.frameTimer=0;}

  const {tx,ty}=currentTile();
  $('.areaName').textContent=areaFor(tx,ty);

  if(activeInterior){
    passiveWorldMessage(tx,ty);
    return;
  }

  const tileKey=tx+','+ty;
  if(tileKey!==world.lastTileKey){
    world.lastTileKey=tileKey;
    const g=groundAt(tx,ty),o=objAt(tx,ty);
    if(HEAL_GROUND.has(g)){healParty(false);worldSay('The Rune fountain restored your party.',1800);}
    else if(SAVE_OBJECT.has(o)){save();worldSay('Progress saved at the Rune crystal.',1800);}
    else if(ENCOUNTER_GROUND.has(g)&&world.encounterDistance>30&&Math.random()<.10){world.encounterDistance=0;startBattle(pickEncounter());return;}
  }
  passiveWorldMessage(tx,ty);

  world.camera.x=Math.round(clamp(state.pos.x-canvas.width/2,0,world.width-canvas.width));
  world.camera.y=Math.round(clamp(state.pos.y-canvas.height/2,0,world.height-canvas.height));
}

// Seam-free continuous ground bitmap.
const GROUND_COLOURS={'.':'#78b85f','g':'#4f8a46','p':'#c9ad76','w':'#4c8fc9','W':'#4c8fc9','b':'#9c7245','s':'#d6bd82','S':'#78b85f','f':'#78b85f','F':'#78b85f'};
const groundLayer=document.createElement('canvas');
groundLayer.width=MAP_W*TILE;groundLayer.height=MAP_H*TILE;
const groundCtx=groundLayer.getContext('2d',{alpha:false});
groundCtx.imageSmoothingEnabled=false;
let groundLayerReady=false;

function rand2(x,y,s=0){let n=(x*374761393+y*668265263+s*69069)>>>0;n=(n^(n>>13))*1274126177>>>0;return((n^(n>>16))>>>0)/4294967295;}
function sameGroundFamily(tx,ty,family){return family.includes(groundAt(tx,ty));}
function drawGrassTile(c,x,y){c.fillStyle='#78b85f';c.fillRect(x,y,TILE,TILE);for(let i=0;i<4;i++){const px=x+2+Math.floor(rand2(x+i,y,11)*12),py=y+2+Math.floor(rand2(x,y+i,23)*12);c.fillStyle=i%2?'#6ca853':'#86c66c';c.fillRect(px,py,1,1);}}
function drawPathTile(c,x,y,tx,ty){
  c.fillStyle='#c9ad76';c.fillRect(x,y,TILE,TILE);
  c.fillStyle='#d8bf8b';c.fillRect(x+2,y+3,2,1);c.fillRect(x+10,y+11,2,1);
  c.fillStyle='#a58754';
  if(!sameGroundFamily(tx,ty-1,['p','b']))c.fillRect(x,y,TILE,1);
  if(!sameGroundFamily(tx,ty+1,['p','b']))c.fillRect(x,y+15,TILE,1);
  if(!sameGroundFamily(tx-1,ty,['p','b']))c.fillRect(x,y,1,TILE);
  if(!sameGroundFamily(tx+1,ty,['p','b']))c.fillRect(x+15,y,1,TILE);
}
function drawBridgeTile(c,x,y,tx,ty){
  c.fillStyle='#9c7245';c.fillRect(x,y,TILE,TILE);
  c.fillStyle='#c69a63';for(let yy=2;yy<16;yy+=4)c.fillRect(x,y+yy,TILE,2);
  c.fillStyle='#65482f';
  if(ty===37)c.fillRect(x,y,TILE,2);
  if(ty===41)c.fillRect(x,y+14,TILE,2);
}
function drawWaterTile(c,x,y,tx,ty){
  c.fillStyle='#4c8fc9';c.fillRect(x,y,TILE,TILE);c.fillStyle='#6ba9d7';
  c.fillRect(x+2+((tx+ty)&1)*2,y+5,6,1);c.fillRect(x+8,y+12,5,1);
  c.fillStyle='#8bc6df';
  if(!sameGroundFamily(tx,ty-1,['w','W']))c.fillRect(x,y,TILE,1);
  if(!sameGroundFamily(tx,ty+1,['w','W']))c.fillRect(x,y+15,TILE,1);
  if(!sameGroundFamily(tx-1,ty,['w','W']))c.fillRect(x,y,1,TILE);
  if(!sameGroundFamily(tx+1,ty,['w','W']))c.fillRect(x+15,y,1,TILE);
}
function drawTallGrassTile(c,x,y,tx,ty){c.fillStyle='#4f8a46';c.fillRect(x,y,TILE,TILE);c.fillStyle='#376f38';for(let i=0;i<4;i++){const px=x+2+i*4+((tx+ty+i)&1);c.fillRect(px,y+7,1,5);c.fillRect(px+1,y+9,1,3);}c.fillStyle='#69a75b';c.fillRect(x+3,y+4,1,4);c.fillRect(x+11,y+5,1,4);}
function drawFlowerTile(c,x,y,alt=false){drawGrassTile(c,x,y);const cols=alt?['#ef8bb9','#fff2a8']:['#f2f0ff','#f1c74f'];for(let i=0;i<3;i++){const px=x+3+i*5,py=y+4+((i*3)%7);c.fillStyle=cols[i%2];c.fillRect(px,py,2,2);c.fillStyle='#4b8b3f';c.fillRect(px,py+2,1,2);}}
function paintBaseTile(c,tx,ty,g){const x=tx*TILE,y=ty*TILE;if(g==='b')return drawBridgeTile(c,x,y,tx,ty);if(g==='p')return drawPathTile(c,x,y,tx,ty);if(g==='w'||g==='W')return drawWaterTile(c,x,y,tx,ty);if(g==='g')return drawTallGrassTile(c,x,y,tx,ty);if(g==='f'||g==='F')return drawFlowerTile(c,x,y,g==='F');if(g==='s'){c.fillStyle='#d6bd82';c.fillRect(x,y,TILE,TILE);return;}drawGrassTile(c,x,y);}
function buildGroundLayer(){groundCtx.fillStyle=GROUND_COLOURS['.'];groundCtx.fillRect(0,0,groundLayer.width,groundLayer.height);for(let ty=0;ty<MAP_H;ty++)for(let tx=0;tx<MAP_W;tx++)paintBaseTile(groundCtx,tx,ty,groundAt(tx,ty));groundLayerReady=true;}

function drawBuilding(b){
  const x=Math.round(b.tx*TILE-world.camera.x),y=Math.round(b.ty*TILE-world.camera.y);
  const w=b.w*TILE,h=b.h*TILE;
  if(x+w<0||y+h<0||x>canvas.width||y>canvas.height)return;
  ctx.fillStyle='rgba(0,0,0,.22)';ctx.fillRect(x+4,y+h-4,w,5);
  ctx.fillStyle=b.trim;ctx.fillRect(x+6,y+3,w-12,h-5);
  ctx.fillStyle=b.wall;ctx.fillRect(x+8,y+Math.floor(h*.48),w-16,Math.floor(h*.46));
  // Flat stepped RPG roof.
  const roofH=Math.floor(h*.55);
  ctx.fillStyle=b.trim;ctx.fillRect(x+2,y+8,w-4,roofH-4);
  ctx.fillStyle=b.roof;ctx.fillRect(x+5,y+5,w-10,roofH-6);
  ctx.fillStyle=b.roof2;
  for(let ry=y+9;ry<y+roofH-4;ry+=6)ctx.fillRect(x+7,ry,w-14,3);
  // Eaves.
  ctx.fillStyle=b.trim;ctx.fillRect(x+3,y+roofH-2,w-6,4);
  // Windows.
  ctx.fillStyle='#314d65';ctx.fillRect(x+14,y+roofH+9,12,10);ctx.fillRect(x+w-26,y+roofH+9,12,10);
  ctx.fillStyle='#91c7d3';ctx.fillRect(x+16,y+roofH+11,8,6);ctx.fillRect(x+w-24,y+roofH+11,8,6);
  // Door exactly matches interaction/collision footprint.
  const doorPx=(b.doorX-b.tx)*TILE;
  ctx.fillStyle=b.trim;ctx.fillRect(x+doorPx+3,y+h-25,10,25);
  ctx.fillStyle='#76533b';ctx.fillRect(x+doorPx+4,y+h-23,8,23);
  ctx.fillStyle='#e4bf63';ctx.fillRect(x+doorPx+10,y+h-12,2,2);
  // Small sign plaque.
  ctx.fillStyle='#d8b96d';ctx.fillRect(x+Math.floor(w/2)-15,y+roofH+2,30,6);
  ctx.fillStyle=b.trim;ctx.fillRect(x+Math.floor(w/2)-12,y+roofH+4,24,2);
}

function drawLandmark(l){
  const x=Math.round(l.tx*TILE-world.camera.x),y=Math.round(l.ty*TILE-world.camera.y),w=l.w*TILE,h=l.h*TILE;
  if(x+w<0||y+h<0||x>canvas.width||y>canvas.height)return;
  if(l.type==='mine'){
    ctx.fillStyle='#6d6253';ctx.fillRect(x+8,y+16,w-16,h-16);
    ctx.fillStyle='#4f493f';ctx.fillRect(x+16,y+8,w-32,20);
    ctx.fillStyle='#302a26';ctx.fillRect(x+Math.floor(w/2)-28,y+h-54,56,54);
    ctx.fillStyle='#8b6745';ctx.fillRect(x+Math.floor(w/2)-32,y+h-58,6,58);ctx.fillRect(x+Math.floor(w/2)+26,y+h-58,6,58);ctx.fillRect(x+Math.floor(w/2)-32,y+h-58,64,6);
    ctx.fillStyle='#b39161';ctx.fillRect(x+20,y+30,22,8);ctx.fillRect(x+w-42,y+34,22,8);
  }else{
    ctx.fillStyle='#657061';ctx.fillRect(x+8,y+18,w-16,h-18);
    ctx.fillStyle='#4f5a50';ctx.fillRect(x+18,y+8,w-36,25);
    ctx.fillStyle='#242a27';ctx.beginPath();ctx.ellipse(x+w/2,y+h-30,34,38,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#838b79';ctx.fillRect(x+12,y+h-18,22,8);ctx.fillRect(x+w-36,y+h-20,24,10);
  }
}

function drawSpring(){
  const cx=Math.round(38.5*TILE-world.camera.x),cy=Math.round(36.5*TILE-world.camera.y);
  ctx.fillStyle='#756b5c';ctx.fillRect(cx-19,cy-12,38,25);
  ctx.fillStyle='#b8b09d';ctx.fillRect(cx-16,cy-9,32,19);
  ctx.fillStyle='#6fc0ef';ctx.fillRect(cx-13,cy-6,26,13);
  ctx.fillStyle='#e7dfc7';ctx.fillRect(cx-3,cy-22,6,18);
  ctx.fillStyle='#9de0ff';ctx.fillRect(cx-1,cy-19,2,14);
}

function drawNPC(n){
  const nx=Math.round((n.tx+.5)*TILE-world.camera.x),ny=Math.round((n.ty+.5)*TILE-world.camera.y);
  if(nx<-16||ny<-24||nx>canvas.width+16||ny>canvas.height+24)return;
  ctx.fillStyle='rgba(0,0,0,.22)';ctx.fillRect(nx-6,ny+7,12,3);
  ctx.fillStyle=n.hair;ctx.fillRect(nx-5,ny-11,10,5);
  ctx.fillStyle='#e4bd91';ctx.fillRect(nx-4,ny-6,8,6);
  ctx.fillStyle=n.shirt;ctx.fillRect(nx-5,ny,10,8);
  ctx.fillStyle='#26314b';ctx.fillRect(nx-5,ny+8,4,7);ctx.fillRect(nx+1,ny+8,4,7);
}

function drawInterior(){
  ctx.fillStyle='#262d39';ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='#c8ad7d';ctx.fillRect(16,16,288,214);
  for(let y=24;y<224;y+=16){ctx.fillStyle=(y/16)%2?'#c2a574':'#cdb386';ctx.fillRect(20,y,280,1);}
  ctx.fillStyle='#705847';ctx.fillRect(48,48,224,32);
  ctx.fillStyle='#8d7158';ctx.fillRect(52,52,216,24);
  ctx.fillStyle='#4b586a';ctx.fillRect(32,112,48,48);ctx.fillRect(240,112,48,48);
  if(activeInterior==='clinic'){
    ctx.fillStyle='#d4e2e8';ctx.fillRect(115,94,90,42);ctx.fillStyle='#b64c52';ctx.fillRect(151,101,18,28);ctx.fillRect(146,106,28,18);
  }else{
    ctx.fillStyle='#6e513b';ctx.fillRect(112,96,96,34);ctx.fillStyle='#b88a55';ctx.fillRect(120,102,20,5);ctx.fillRect(173,111,28,5);
  }
  ctx.fillStyle='#96724d';ctx.fillRect(136,208,48,16);
  ctx.fillStyle='#15191e';ctx.fillRect(144,218,32,12);
}

function drawWorld(){
  if(activeInterior){
    drawInterior();
  }else{
    if(!groundLayerReady)buildGroundLayer();
    ctx.fillStyle=GROUND_COLOURS['.'];ctx.fillRect(0,0,canvas.width,canvas.height);
    const sx=Math.floor(world.camera.x),sy=Math.floor(world.camera.y);
    const sw=Math.min(canvas.width,groundLayer.width-sx),sh=Math.min(canvas.height,groundLayer.height-sy);
    if(sw>0&&sh>0)ctx.drawImage(groundLayer,sx,sy,sw,sh,0,0,sw,sh);

    const firstX=Math.floor(world.camera.x/TILE),firstY=Math.floor(world.camera.y/TILE);
    const offsetX=-(world.camera.x%TILE),offsetY=-(world.camera.y%TILE);
    const cols=Math.ceil(canvas.width/TILE)+2,rows=Math.ceil(canvas.height/TILE)+2;
    for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){
      const tx=firstX+x,ty=firstY+y;if(tx<0||ty<0||tx>=MAP_W||ty>=MAP_H)continue;
      const key=objectSpriteKey(tx,ty),oi=key?images[key]:null;if(!oi||!oi.complete)continue;
      const o=objAt(tx,ty),px=Math.floor(offsetX+x*TILE),py=Math.floor(offsetY+y*TILE);
      let dw=TILE,dh=TILE,ox=0,oy=0;
      if(o==='t'||o==='t2'){dw=48;dh=58;ox=-16;oy=-42;}else if(o==='tp'){dw=42;dh=58;ox=-13;oy=-42;}
      else if(o==='bu'||o==='rk'){dw=30;dh=30;ox=-7;oy=-14;}else if(o==='bn'){dw=46;dh=26;ox=-15;oy=-10;}
      else if(o==='lp'){dw=22;dh=42;ox=-3;oy=-28;}else if(o==='sg'){dw=28;dh=34;ox=-6;oy=-20;}else if(o==='sv'){dw=38;dh=48;ox=-11;oy=-34;}
      ctx.drawImage(oi,px+ox,py+oy,dw,dh);
    }
    BUILDINGS.forEach(drawBuilding);
    LANDMARKS.forEach(drawLandmark);
    drawSpring();
    WORLD_NPCS.forEach(drawNPC);
  }

  const trainerFrames=TRAINER_FRAMES[state.trainerGender]||TRAINER_FRAMES.boy;
  const pImg=images[trainerFrames[state.dir][world.frame]];
  const camX=activeInterior?0:world.camera.x,camY=activeInterior?0:world.camera.y;
  const drawX=Math.round(state.pos.x-camX-world.drawSize/2),drawY=Math.round(state.pos.y-camY-world.drawSize/2-6);
  if(pImg&&pImg.complete)ctx.drawImage(pImg,drawX,drawY,world.drawSize,world.drawSize);
  else{ctx.fillStyle='#ff6767';ctx.fillRect(drawX+8,drawY+8,16,16);}
}

function loop(ts){if(!world.lastTime)world.lastTime=ts;const dt=Math.min(.033,(ts-world.lastTime)/1000);world.lastTime=ts;updateWorld(dt);drawWorld();requestAnimationFrame(loop);}
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
} function closeSubmenus(){$('#movesMenu').classList.add('hidden'); $('#switchMenu').classList.add('hidden'); $('#itemMenu').classList.add('hidden'); $('#cancelBattleSubmenu').classList.add('hidden'); $('#mainBattleMenu').classList.remove('hidden')}
function showMoves(){if(!battle||battle.locked) return; const p=activeMon(); $('#movesMenu').innerHTML=knownMoves(p).map(name=>{const mv=MOVES[name]; return `<button class="moveChoice" data-move="${name}"><b>${name}</b><small>${mv.type} · POW ${mv.power} · ACC ${mv.acc}</small></button>`}).join(''); $('#mainBattleMenu').classList.add('hidden'); $('#movesMenu').classList.remove('hidden'); $('#cancelBattleSubmenu').classList.remove('hidden'); $$('.moveChoice').forEach(btn=>btn.onclick=()=>useMove(btn.dataset.move));}
function useMove(name){if(!battle||battle.locked) return; closeSubmenus(); setBattleLock(true); const p=activeMon(), e=battle.enemy, result=calcDamage(p,e,name); if(!result.hit){setBattleText(`${beastBy(p.id).name} used ${name}, but missed!`); battleLater(enemyTurn,650); return;} e.hp=Math.max(0,e.hp-result.damage); setBattleText(`${beastBy(p.id).name} used ${name}! ${result.damage} damage.${result.mod>1?' Super effective!':result.mod<1?' Not very effective.':''}`); renderBattle(); battleLater(()=>e.hp<=0?winBattle():enemyTurn(),700)}
function enemyTurn(){if(!battle) return; const p=activeMon(), e=battle.enemy; if(!p||p.hp<=0){handleFaint(); return;} const pool=knownMoves(e), name=pool[Math.floor(Math.random()*pool.length)]||'Scratch'; const result=calcDamage(e,p,name); if(!result.hit){setBattleText(`${beastBy(e.id).name} used ${name}, but missed!`); battleLater(()=>setBattleLock(false),450); return;} p.hp=Math.max(0,p.hp-result.damage); setBattleText(`${beastBy(e.id).name} used ${name}! ${result.damage} damage.`); renderBattle(); save(); battleLater(()=>p.hp<=0?handleFaint():setBattleLock(false),650)}
function handleFaint(){if(!battle) return; const cur=activeMon(); if(cur) setBattleText(`${beastBy(cur.id).name} fainted!`); const next=state.party.findIndex((m,i)=>i!==battle.active && m.hp>0); if(next<0){setTimeout(()=>{battle=null; healParty(false); showScreen('worldScreen'); $('#worldText').textContent='Your party recovered at the spring.';},800)} else {battleLater(()=>{battle.active=next; renderBattle(); setBattleText(`${beastBy(activeMon().id).name} steps in!`); setBattleLock(false);},650)}}
function winBattle(){if(!battle) return; const p=activeMon(); const gain=18+battle.enemy.level*8; p.xp+=gain; state.wins+=1; state.shards+=8; while(p.level<50&&p.xp>=xpNeed(p.level)){p.xp-=xpNeed(p.level); p.level+=1; p.hp=maxHp(p)} setBattleText(`Victory! ${beastBy(p.id).name} gained ${gain} XP.`); battle=null; save(); setTimeout(()=>showScreen('worldScreen'),850)}
function attemptCapture(sealType='runeSeal'){
  if(!battle||battle.locked)return;
  const invKey=sealType==='greaterSeal'?'greaterSeal':'runeSeal';
  if((state.inventory[invKey]||0)<=0){setBattleText(invKey==='greaterSeal'?'You have no Greater Rune Seals.':'You have no Rune Seals. Visit the Rune Market.');return;}
  setBattleLock(true);
  state.inventory[invKey]-=1;
  const e=battle.enemy;
  const rarity=beastBy(e.id).rarity;
  const baseChance={Common:.56,Uncommon:.42,Rare:.28,Elite:.16}[rarity]||.4;
  const hpBonus=(1-e.hp/maxHp(e))*.46;
  const sealBonus=invKey==='greaterSeal'?.18:0;
  const chance=clamp(baseChance+hpBonus+sealBonus,.10,.94);
  if(Math.random()<chance){
    const id=e.id, name=beastBy(id).name;
    state.collection[id]=true;
    state.captures+=1;
    state.captureCounts[id]=(state.captureCounts[id]||0)+1;
    const captureXp=12+e.level*6;
    grantPartyXp(captureXp);
    let destination='';
    if(state.party.length<6){state.party.push(e);destination=' It joined your party.';}
    else destination=' It was sent to the Rune Lodge reserve.';
    const milestone=captureMilestoneReward(id);
    setBattleText(`${name} was bound with a ${SHOP_ITEMS[invKey].name}! Whole party +${captureXp} XP.${destination}${milestone}`);
    battle=null;save();setTimeout(()=>showScreen('worldScreen'),milestone?2200:1300);
  }else{
    setBattleText(`${beastBy(e.id).name} broke free of the ${SHOP_ITEMS[invKey].name}!`);
    save();battleLater(enemyTurn,650);
  }
}
function showItems(){
  if(!battle||battle.locked)return;
  const p=activeMon();
  $('#itemMenu').innerHTML=[
    `<button class="itemChoice" data-item="greaterSeal"><b>Greater Rune Seal ×${state.inventory.greaterSeal||0}</b><small>Improved capture chance</small></button>`,
    `<button class="itemChoice" data-item="tonic"><b>Verdant Tonic ×${state.inventory.tonic||0}</b><small>Restore 35 HP to your active Rune Beast</small></button>`,
    `<button class="itemChoice" data-item="reviveRoot"><b>Revival Root ×${state.inventory.reviveRoot||0}</b><small>Revive a fainted party member at 50% HP</small></button>`
  ].join('');
  $('#mainBattleMenu').classList.add('hidden');$('#itemMenu').classList.remove('hidden');$('#cancelBattleSubmenu').classList.remove('hidden');
  $$('.itemChoice').forEach(btn=>btn.onclick=()=>useBattleItem(btn.dataset.item));
}
function useBattleItem(id){
  if(!battle||battle.locked)return;
  if((state.inventory[id]||0)<=0){setBattleText('You do not have that item.');return;}
  if(id==='greaterSeal'){closeSubmenus();attemptCapture('greaterSeal');return;}
  if(id==='tonic'){
    const p=activeMon(); if(p.hp>=maxHp(p)){setBattleText('Your active Rune Beast is already at full HP.');return;}
    state.inventory.tonic--;p.hp=Math.min(maxHp(p),p.hp+35);closeSubmenus();setBattleLock(true);renderBattle();save();setBattleText(`${beastBy(p.id).name} recovered 35 HP.`);battleLater(enemyTurn,600);return;
  }
  if(id==='reviveRoot'){
    const target=state.party.find(m=>m.hp<=0);
    if(!target){setBattleText('No fainted Rune Beast needs reviving.');return;}
    state.inventory.reviveRoot--;target.hp=Math.max(1,Math.round(maxHp(target)*.5));closeSubmenus();setBattleLock(true);save();setBattleText(`${beastBy(target.id).name} was revived to ${target.hp} HP.`);battleLater(enemyTurn,600);
  }
}
function showSwitch(){if(!battle||battle.locked) return; $('#switchMenu').innerHTML=state.party.map((m,i)=>`<button class="switchChoice" data-i="${i}" ${i===battle.active||m.hp<=0?'disabled':''}><span>${beastBy(m.id).name} Lv${m.level}</span><span>${m.hp}/${maxHp(m)} HP</span></button>`).join(''); $('#mainBattleMenu').classList.add('hidden'); $('#switchMenu').classList.remove('hidden'); $('#cancelBattleSubmenu').classList.remove('hidden'); $$('.switchChoice').forEach(btn=>btn.onclick=()=>switchTo(+btn.dataset.i));}
function switchTo(i){if(!battle||battle.locked||i===battle.active||state.party[i].hp<=0) return; closeSubmenus(); battle.active=i; renderBattle(); setBattleText(`${beastBy(activeMon().id).name}, you're up!`); setBattleLock(true); battleLater(enemyTurn,600)} function runAway(){if(!battle||battle.locked) return; if(Math.random()<0.85){setBattleText('You escaped safely.'); battle=null; setTimeout(()=>showScreen('worldScreen'),400)} else {setBattleText("Couldn't escape!"); setBattleLock(true); battleLater(enemyTurn,550)}}
// setup + controls
function setHeld(dir,val){input[dir]=val} function bindControl(btn){const dir=btn.dataset.dir; const on=e=>{e.preventDefault(); setHeld(dir,true)}; const off=e=>{e.preventDefault(); setHeld(dir,false)}; ['pointerdown','touchstart'].forEach(ev=>btn.addEventListener(ev,on,{passive:false})); ['pointerup','pointerleave','pointercancel','touchend','touchcancel'].forEach(ev=>btn.addEventListener(ev,off,{passive:false}));}
document.addEventListener('keydown',e=>{if(e.key==='ArrowUp') input.up=true; if(e.key==='ArrowDown') input.down=true; if(e.key==='ArrowLeft') input.left=true; if(e.key==='ArrowRight') input.right=true; if((e.key===' '||e.key==='Enter')&&!e.repeat){e.preventDefault();interactWorld();}}); document.addEventListener('keyup',e=>{if(e.key==='ArrowUp') input.up=false; if(e.key==='ArrowDown') input.down=false; if(e.key==='ArrowLeft') input.left=false; if(e.key==='ArrowRight') input.right=false});
function setChoice(g){pendingSetup.trainerGender=g; $('#boyChoice').classList.toggle('active',g==='boy'); $('#girlChoice').classList.toggle('active',g==='girl')}
$('#newGameBtn').onclick=()=>{pendingSetup={trainerName:'Trainer',trainerGender:'boy'}; $('#trainerNameInput').value=''; setChoice('boy'); showScreen('setupScreen');}; $('#continueBtn').onclick=()=>showScreen('worldScreen'); $('#boyChoice').onclick=()=>setChoice('boy'); $('#girlChoice').onclick=()=>setChoice('girl'); $('#toStarterBtn').onclick=()=>{const name=$('#trainerNameInput').value.trim(); pendingSetup.trainerName=(name||'Trainer').slice(0,14); renderStarters(); showScreen('starterScreen');};
$('#movesBtn').onclick=showMoves; $('#captureBtn').onclick=()=>attemptCapture('runeSeal'); $('#itemBtn').onclick=showItems; $('#switchBtn').onclick=showSwitch; $('#runBtn').onclick=runAway; $('#cancelBattleSubmenu').onclick=closeSubmenus; $('#healBtn').onclick=()=>{healParty(false); alert('Party restored.')}; $('#manualSaveBtn').onclick=()=>{save(); alert('Game saved.')}; $('#resetBtn').onclick=()=>{if(confirm('Delete all Rune Beasts progress?')){localStorage.removeItem(SAVE_KEY); location.reload();}};
$$('[data-screen]').forEach(btn=>btn.onclick=()=>showScreen(btn.dataset.screen)); $$('.control').forEach(bindControl); $('#interactBtn').onclick=interactWorld;
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(()=>{})}
try{buildGroundLayer();}catch(err){console.error('Ground build failed',err);}
try{load();}catch(err){console.error('Save load failed',err);}
requestAnimationFrame(loop);
try{
  $('#continueBtn').classList.toggle('hidden',!localStorage.getItem(SAVE_KEY));
  renderWorldPanels();
}catch(err){
  console.error('UI startup failed',err);
  const wt=$('#worldText'); if(wt) wt.textContent='World loaded. UI recovered from a startup error.';
}

window.addEventListener('error',e=>{
  console.error('Rune Beasts runtime error',e.error||e.message);
  if(battle) recoverBattle(e.error||new Error(e.message));
});
window.addEventListener('unhandledrejection',e=>{
  console.error('Rune Beasts rejected promise',e.reason);
  if(battle) recoverBattle(e.reason||new Error('Battle error'));
});
