
const TYPES={Fire:{strong:"Grass",weak:"Water"},Grass:{strong:"Water",weak:"Fire"},Water:{strong:"Fire",weak:"Grass"},Electric:{strong:"Flying",weak:"Rock"},Flying:{strong:"Rock",weak:"Electric"},Rock:{strong:"Electric",weak:"Flying"}};
const BEASTS=[{"id": "cindercub", "name": "Cindercub", "type": "Fire", "rarity": "Starter", "role": "Balanced", "base": [44, 52, 42, 48, 42, 50], "glyph": "♞"}, {"id": "ashbit", "name": "Ashbit", "type": "Fire", "rarity": "Common", "role": "Speed", "base": [32, 49, 31, 42, 34, 64], "glyph": "⌁"}, {"id": "magmole", "name": "Magmole", "type": "Fire", "rarity": "Uncommon", "role": "Tank", "base": [58, 60, 63, 34, 44, 25], "glyph": "●"}, {"id": "flarewing", "name": "Flarewing", "type": "Fire", "rarity": "Rare", "role": "Special", "base": [43, 38, 34, 68, 44, 70], "glyph": "⌃"}, {"id": "ripplet", "name": "Ripplet", "type": "Water", "rarity": "Starter", "role": "Balanced", "base": [48, 46, 46, 52, 48, 44], "glyph": "≋"}, {"id": "bubbfin", "name": "Bubbfin", "type": "Water", "rarity": "Common", "role": "Support", "base": [42, 31, 43, 48, 52, 37], "glyph": "◌"}, {"id": "cragclaw", "name": "Cragclaw", "type": "Water", "rarity": "Uncommon", "role": "Tank", "base": [55, 48, 67, 35, 52, 24], "glyph": "⋈"}, {"id": "abyssquid", "name": "Abyssquid", "type": "Water", "rarity": "Rare", "role": "Special", "base": [46, 34, 41, 72, 61, 43], "glyph": "Ψ"}, {"id": "spriglet", "name": "Spriglet", "type": "Grass", "rarity": "Starter", "role": "Balanced", "base": [46, 48, 44, 46, 52, 46], "glyph": "♧"}, {"id": "mossbug", "name": "Mossbug", "type": "Grass", "rarity": "Common", "role": "Defence", "base": [41, 35, 58, 31, 54, 30], "glyph": "✿"}, {"id": "vineape", "name": "Vineape", "type": "Grass", "rarity": "Uncommon", "role": "Physical", "base": [48, 62, 42, 36, 39, 60], "glyph": "ϟ"}, {"id": "bloomhorn", "name": "Bloomhorn", "type": "Grass", "rarity": "Rare", "role": "HP/Support", "base": [72, 43, 55, 48, 64, 28], "glyph": "♜"}, {"id": "voltpup", "name": "Voltpup", "type": "Electric", "rarity": "Uncommon", "role": "All-rounder", "base": [45, 51, 39, 52, 41, 62], "glyph": "Ϟ"}, {"id": "sparkit", "name": "Sparkit", "type": "Electric", "rarity": "Common", "role": "Speed", "base": [34, 42, 30, 45, 33, 72], "glyph": "ϟ"}, {"id": "thundram", "name": "Thundram", "type": "Electric", "rarity": "Rare", "role": "Physical", "base": [58, 72, 53, 42, 44, 38], "glyph": "♈"}, {"id": "arcwing", "name": "Arcwing", "type": "Electric", "rarity": "Rare", "role": "Special", "base": [42, 35, 37, 74, 51, 68], "glyph": "⌁"}, {"id": "breezlet", "name": "Breezlet", "type": "Flying", "rarity": "Common", "role": "Balanced", "base": [38, 41, 36, 42, 38, 58], "glyph": "▲"}, {"id": "galehare", "name": "Galehare", "type": "Flying", "rarity": "Uncommon", "role": "Speed", "base": [44, 48, 37, 39, 40, 75], "glyph": "⋏"}, {"id": "skyrake", "name": "Skyrake", "type": "Flying", "rarity": "Rare", "role": "Offence", "base": [51, 61, 45, 56, 44, 62], "glyph": "≻"}, {"id": "stormowl", "name": "Stormowl", "type": "Flying", "rarity": "Elite", "role": "Special tank", "base": [62, 39, 49, 74, 73, 55], "glyph": "◉"}, {"id": "pebblit", "name": "Pebblit", "type": "Rock", "rarity": "Common", "role": "Defence", "base": [47, 40, 64, 28, 47, 24], "glyph": "◆"}, {"id": "craggoat", "name": "Craggoat", "type": "Rock", "rarity": "Uncommon", "role": "Physical", "base": [54, 64, 59, 30, 42, 35], "glyph": "♑"}, {"id": "gemscarab", "name": "Gemscarab", "type": "Rock", "rarity": "Rare", "role": "Defensive", "base": [53, 37, 76, 45, 68, 25], "glyph": "◇"}, {"id": "titanox", "name": "Titanox", "type": "Rock", "rarity": "Elite", "role": "Tank", "base": [82, 74, 81, 28, 60, 18], "glyph": "♉"}, 
{"id":"coalisk","name":"Coalisk","type":"Fire","rarity":"Common","role":"Physical","base":[39,55,37,35,34,52],"glyph":"◈"},
{"id":"pyrel","name":"Pyrel","type":"Fire","rarity":"Uncommon","role":"Special","base":[45,38,42,63,48,55],"glyph":"✦"},
{"id":"driftfin","name":"Driftfin","type":"Water","rarity":"Common","role":"Speed","base":[40,39,38,46,42,65],"glyph":"≈"},
{"id":"tidehorn","name":"Tidehorn","type":"Water","rarity":"Rare","role":"Tank","base":[68,58,67,46,55,28],"glyph":"◒"},
{"id":"fernfox","name":"Fernfox","type":"Grass","rarity":"Common","role":"Speed","base":[41,46,38,42,45,66],"glyph":"❧"},
{"id":"thornox","name":"Thornox","type":"Grass","rarity":"Uncommon","role":"Tank","base":[62,59,65,37,53,30],"glyph":"♣"},
{"id":"staticub","name":"Staticub","type":"Electric","rarity":"Common","role":"Balanced","base":[43,47,39,51,39,58],"glyph":"ϟ"},
{"id":"coilisk","name":"Coilisk","type":"Electric","rarity":"Rare","role":"Special","base":[47,42,43,72,50,63],"glyph":"⌇"},
{"id":"cloudimp","name":"Cloudimp","type":"Flying","rarity":"Common","role":"Support","base":[39,35,36,48,50,61],"glyph":"☁"},
{"id":"razorjay","name":"Razorjay","type":"Flying","rarity":"Uncommon","role":"Offence","base":[45,62,39,45,38,70],"glyph":"➤"},
{"id":"slateback","name":"Slateback","type":"Rock","rarity":"Common","role":"Defence","base":[55,43,68,29,48,22],"glyph":"▰"},
{"id":"crystoad","name":"Crystoad","type":"Rock","rarity":"Rare","role":"Special tank","base":[61,38,63,61,71,27],"glyph":"◇"}];
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
const WORLD_SPAWN={tx:34,ty:43};
const makeGrid=(fill)=>Array.from({length:MAP_H},()=>Array(MAP_W).fill(fill));
const groundGrid=makeGrid('.');
const paintGround=(x,y,w,h,ch)=>{for(let yy=y;yy<y+h;yy++)for(let xx=x;xx<x+w;xx++)if(xx>=0&&yy>=0&&xx<MAP_W&&yy<MAP_H)groundGrid[yy][xx]=ch;};
const paintPath=(x,y,w,h)=>paintGround(x,y,w,h,'p');

// ---- Runevale Town: modern cosy layout ----------------------------------
// A large open plaza is the heart of town.
paintGround(22,22,28,28,'p');
paintGround(25,25,22,22,'p');

// Broad pedestrian streets with breathing room.
paintPath(12,18,42,5);                  // north market/inn street
paintPath(8,39,49,5);                   // main east-west avenue
paintPath(31,7,6,61);                   // main north-south avenue
paintPath(12,50,22,5);                  // clinic / homes lane
paintPath(42,49,19,5);                  // workshop / inn lane
paintPath(15,63,24,5);                  // south residential lane
paintPath(33,66,5,14);                  // south route

// Landscaped greens around, not through, the main playable space.
paintGround(4,6,17,9,'F');
paintGround(46,6,16,9,'f');
paintGround(5,26,12,9,'F');
paintGround(52,26,11,10,'f');
paintGround(5,58,13,10,'f');
paintGround(48,61,14,8,'F');

// Central fountain garden.
paintGround(31,31,7,7,'f');
groundGrid[34][34]='S';

// Small north-west pond / garden.
paintGround(3,13,7,11,'w');
paintGround(4,14,5,9,'W');

// ---- River and bridge ----------------------------------------------------
paintGround(66,1,8,78,'w');
paintGround(65,46,10,5,'b');
paintPath(57,46,8,5);
paintPath(74,46,15,5);

// Wider riverside banks / promenade.
paintPath(58,40,7,4);
paintPath(58,53,7,4);

// ---- Eastbank Quarry -----------------------------------------------------
paintPath(87,13,5,52);
paintPath(76,47,32,4);
paintPath(83,24,21,4);
paintPath(83,58,21,4);

paintGround(77,6,17,14,'g');
paintGround(100,6,16,17,'g');
paintGround(77,54,14,14,'g');
paintGround(102,50,14,17,'g');

paintGround(82,29,24,12,'s');
paintGround(94,63,17,8,'s');

// Quarry pool / stream detail.
paintGround(107,28,9,9,'w');
paintGround(109,30,6,6,'W');

// South route preview.
paintGround(29,72,12,8,'g');

const GROUND=groundGrid.map(row=>row.join(''));

const OBJECTS=makeGrid('');
const putObj=(x,y,v)=>{if(x>=0&&y>=0&&x<MAP_W&&y<MAP_H)OBJECTS[y][x]=v;};
const scatter=(coords,vals=['t','t2'])=>coords.forEach(([x,y],i)=>putObj(x,y,vals[i%vals.length]));

// Tree frame keeps the play space visually rich without crowding the centre.
for(let x=0;x<65;x+=2){putObj(x,0,x%4?'t':'t2');if(!(x>=31&&x<=39))putObj(x,79,x%4?'t2':'t');}
for(let y=2;y<79;y+=3){putObj(0,y,y%2?'t':'t2');putObj(63,y,y%2?'t2':'t');}
for(let x=75;x<120;x+=2){putObj(x,0,'tp');putObj(x,79,'tp');}
for(let y=2;y<79;y+=3)putObj(119,y,'tp');

// Edge groves and garden pockets.
scatter([[3,4],[7,4],[12,4],[18,4],[23,7],[56,4],[60,8],[4,28],[8,36],[13,36],[55,17],[60,19],[57,60],[52,72],[8,71],[13,72],[20,73]]);
scatter([[76,4],[82,4],[91,4],[98,4],[109,4],[116,8],[76,26],[78,33],[115,44],[116,52],[77,70],[86,74],[103,74],[114,71]],['tp']);

// Lamps and benches line the edges of the square, leaving the middle clear.
[[23,24],[48,24],[23,47],[48,47],[29,20],[39,20],[29,54],[39,54],[15,38],[55,38]].forEach(p=>putObj(...p,'lp'));
[[25,28],[45,28],[25,44],[45,44],[12,58],[54,60]].forEach(p=>putObj(...p,'bn'));

// Decorative shrubs stay off the main routes.
[[12,27],[56,28],[12,57],[57,58],[20,60],[49,18]].forEach(p=>putObj(...p,'bu'));
putObj(42,43,'sv');
putObj(35,68,'sg');

// Eastbank quarry clutter stays mainly around edges.
[[78,24],[80,30],[80,63],[86,68],[97,27],[103,26],[107,44],[113,44],[97,72],[106,71]].forEach(p=>putObj(...p,'rk'));
[[76,5],[83,5],[92,5],[99,5],[116,27],[116,37],[116,60],[76,75],[90,75],[104,75]].forEach(p=>putObj(...p,'tp'));
[[80,52],[97,52],[106,52],[113,68],[79,68]].forEach(p=>putObj(...p,'bu'));

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
  {id:'guild',sign:'MARKET',name:'Rune Market',tx:10,ty:10,w:12,h:9,doorX:16,doorY:18,roof:'#b6503f',roof2:'#d96b52',wall:'#ecd3a2',trim:'#6e4034',enterable:true,interior:'shop',style:'market'},
  {id:'inn',sign:'INN',name:'Moonbell Inn',tx:31,ty:8,w:13,h:10,doorX:37,doorY:17,roof:'#b64e42',roof2:'#df7055',wall:'#e7c994',trim:'#6d4438',enterable:true,interior:'inn',style:'inn'},
  {id:'clinic',sign:'CLINIC',name:'Rune Clinic',tx:8,ty:42,w:11,h:9,doorX:13,doorY:50,roof:'#496f91',roof2:'#6d94b4',wall:'#eee0b7',trim:'#3e5065',enterable:true,interior:'clinic',style:'clinic'},
  {id:'workshop',sign:'WORKSHOP',name:'Rowan’s Workshop',tx:46,ty:35,w:12,h:9,doorX:52,doorY:43,roof:'#52677f',roof2:'#74879e',wall:'#d8c39b',trim:'#46505d',enterable:true,interior:'workshop',style:'workshop'},
  {id:'homeA',sign:'HOME',name:'Maple House',tx:18,ty:57,w:9,h:8,doorX:22,doorY:64,roof:'#aa503e',roof2:'#d0684f',wall:'#e8d0a3',trim:'#704335',enterable:false,style:'home'},
  {id:'homeB',sign:'HOME',name:'Willow House',tx:41,ty:58,w:9,h:8,doorX:45,doorY:65,roof:'#607895',roof2:'#7f9bb5',wall:'#e4d2aa',trim:'#4a5668',enterable:false,style:'home'}
];

const LANDMARKS=[
  {id:'mine',name:'Old Eastbank Mine',tx:84,ty:15,w:16,h:10,doorX:92,doorY:24,type:'mine'},
  {id:'cave',name:'Whisper Cave',tx:99,ty:59,w:14,h:8,doorX:106,doorY:66,type:'cave'}
];

const WORLD_BLOCKED=makeGrid(false);
function blockRect(tx,ty,w,h){for(let y=ty;y<ty+h;y++)for(let x=tx;x<tx+w;x++)if(x>=0&&y>=0&&x<MAP_W&&y<MAP_H)WORLD_BLOCKED[y][x]=true;}
BUILDINGS.forEach(b=>{blockRect(b.tx,b.ty,b.w,b.h);if(b.enterable&&WORLD_BLOCKED[b.doorY])WORLD_BLOCKED[b.doorY][b.doorX]=false;});
LANDMARKS.forEach(b=>blockRect(b.tx,b.ty,b.w,b.h));
blockRect(32,32,5,5); // fountain basin

const WORLD_NPCS=[
  {id:'rowan',name:'Rowan',tx:52,ty:46,shirt:'#6c4d9e',hair:'#5b3b25'},
  {id:'mina',name:'Mina',tx:18,ty:53,shirt:'#3f7fb5',hair:'#7b4b2a'},
  {id:'quarryman',name:'Bram',tx:84,ty:50,shirt:'#8a6336',hair:'#403126'}
];

const INTERACTION_POINTS=[
  {id:'townSign',tx:35,ty:68},
  {id:'bridge',tx:69,ty:48},
  {id:'spring',tx:34,ty:34},
  {id:'mine',tx:92,ty:24},
  {id:'cave',tx:106,ty:66}
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
function maxHp(m){return Math.round(beastBy(m.id).base[0]*0.7+m.level*5+20)} function statsFor(m){const b=beastBy(m.id).base;return [maxHp(m),...b.slice(1).map(v=>Math.round(v*0.65+m.level*2))]} 
function defaultLearnset(type){
  const byType={
    Fire:[[1,'Scratch'],[3,'Ember Bite'],[8,'Quick Jab'],[12,'Flame Rush'],[20,'Guard Break'],[28,'Heat Wave']],
    Water:[[1,'Scratch'],[3,'Water Jet'],[8,'Quick Jab'],[12,'Bubble Burst'],[20,'Guard Break'],[28,'Tidal Slam']],
    Grass:[[1,'Scratch'],[3,'Leaf Swipe'],[8,'Quick Jab'],[12,'Spore Burst'],[20,'Guard Break'],[28,'Vine Lash']],
    Electric:[[1,'Scratch'],[3,'Spark Snap'],[8,'Quick Jab'],[12,'Volt Rush'],[20,'Guard Break'],[28,'Arc Pulse']],
    Flying:[[1,'Scratch'],[3,'Gust'],[8,'Quick Jab'],[12,'Wind Cutter'],[20,'Guard Break'],[28,'Sky Dive']],
    Rock:[[1,'Scratch'],[3,'Stone Toss'],[8,'Quick Jab'],[12,'Rock Ram'],[20,'Guard Break'],[28,'Crystal Crash']]
  };
  return byType[type]||[[1,'Scratch']];
}
function knownMoves(m){const beast=beastBy(m.id);const set=LEARNSETS[m.id]||defaultLearnset(beast?.type);return set.filter(([lv])=>lv<=m.level).map(x=>x[1]).slice(-4)} function makeMon(id,level){const m={uid:String(Date.now())+Math.random(),id,level,xp:0,hp:0}; m.hp=maxHp(m); return m;}
function normaliseState(){state.party=Array.isArray(state.party)?state.party:[]; state.collection=state.collection||{}; state.shards=Number.isFinite(+state.shards)?+state.shards:100; state.wins=state.wins||0; state.captures=state.captures||0; state.steps=state.steps||0; state.pos=state.pos||{x:(WORLD_SPAWN.tx+.5)*TILE,y:(WORLD_SPAWN.ty+.5)*TILE}; state.dir=state.dir||'down'; state.trainerName=(state.trainerName||'Trainer').slice(0,14); state.trainerGender=state.trainerGender==='girl'?'girl':'boy'; state.flags=state.flags||{}; state.inventory=state.inventory||{runeSeal:5,greaterSeal:1,tonic:2,reviveRoot:1}; for(const k of Object.keys(SHOP_ITEMS)) state.inventory[k]=Math.max(0,+state.inventory[k]||0); state.captureCounts=state.captureCounts||{}; if(state.flags.worldLayout!==20){state.pos={x:(WORLD_SPAWN.tx+.5)*TILE,y:(WORLD_SPAWN.ty+.5)*TILE};state.flags.worldLayout=20;} state.party.forEach(m=>{m.level=m.level||1; m.xp=m.xp||0; m.hp=Number.isFinite(m.hp)?clamp(m.hp,0,maxHp(m)):maxHp(m);});}
function save(){normaliseState(); localStorage.setItem(SAVE_KEY,JSON.stringify(state)); renderWorldPanels();} function load(){const raw=localStorage.getItem(SAVE_KEY); if(!raw) return false; try{state=JSON.parse(raw); normaliseState(); return true;}catch{return false;}}
function typeTag(type){return `<span class="typeTag" style="background:${typeColors[type]||typeColors.Neutral}">${type}</span>`}
const PROC_SPRITES={};
function beastSeed(id){let h=2166136261;for(const ch of id){h^=ch.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;}
function shadeHex(hex,amt){const n=parseInt(hex.slice(1),16),r=Math.max(0,Math.min(255,(n>>16)+amt)),g=Math.max(0,Math.min(255,((n>>8)&255)+amt)),b=Math.max(0,Math.min(255,(n&255)+amt));return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);}
function proceduralBeastSprite(id){
  if(PROC_SPRITES[id])return PROC_SPRITES[id];
  const b=beastBy(id),seed=beastSeed(id);
  const palette={Fire:'#d45a43',Water:'#4f8fc8',Grass:'#5e9e52',Electric:'#d8b73c',Flying:'#8299c8',Rock:'#84796b'};
  const base=palette[b.type]||'#7a8190',light=shadeHex(base,32),dark=shadeHex(base,-42),accent={Fire:'#ffb34d',Water:'#8dd8ef',Grass:'#b4db67',Electric:'#fff074',Flying:'#d6e3f4',Rock:'#c9b88f'}[b.type]||'#ddd';
  const c=document.createElement('canvas');c.width=64;c.height=64;const x=c.getContext('2d');x.imageSmoothingEnabled=false;
  x.fillStyle='rgba(0,0,0,.18)';x.fillRect(16,50,32,5);
  const kind=seed%6;
  x.fillStyle=dark;
  if(kind===0){x.fillRect(16,24,32,26);x.fillRect(10,30,10,12);x.fillRect(44,30,10,12);}
  else if(kind===1){x.fillRect(20,18,24,34);x.fillRect(12,24,10,22);x.fillRect(42,24,10,22);}
  else if(kind===2){x.fillRect(14,29,36,20);x.fillRect(24,16,16,16);x.fillRect(6,34,10,8);x.fillRect(48,34,10,8);}
  else if(kind===3){x.fillRect(17,21,30,29);x.fillRect(9,19,12,11);x.fillRect(43,19,12,11);}
  else if(kind===4){x.fillRect(12,27,40,22);x.fillRect(22,16,20,16);}
  else{x.fillRect(18,20,28,30);x.fillRect(8,30,12,12);x.fillRect(44,30,12,12);}
  x.fillStyle=base;
  x.fillRect(20,23,24,23);x.fillRect(23,18,18,12);
  if(seed&1){x.fillRect(13,19,10,8);x.fillRect(41,19,10,8);}else{x.fillRect(18,12,7,12);x.fillRect(39,12,7,12);}
  x.fillStyle=light;x.fillRect(24,26,16,13);x.fillRect(27,20,10,7);
  x.fillStyle='#17202d';x.fillRect(27,24,3,3);x.fillRect(36,24,3,3);
  x.fillStyle=accent;
  if(b.type==='Electric'){x.fillRect(8,22,9,4);x.fillRect(47,38,9,4);x.fillRect(13,18,4,8);}
  else if(b.type==='Flying'){x.fillRect(6,28,13,5);x.fillRect(45,28,13,5);x.fillRect(9,24,8,4);x.fillRect(47,24,8,4);}
  else if(b.type==='Rock'){x.fillRect(15,36,8,7);x.fillRect(41,34,8,8);x.fillRect(28,14,8,7);}
  else if(b.type==='Grass'){x.fillRect(28,10,4,11);x.fillRect(20,12,9,4);x.fillRect(32,12,9,4);}
  else if(b.type==='Water'){x.fillRect(45,20,8,4);x.fillRect(50,17,4,10);x.fillRect(12,41,8,4);}
  else if(b.type==='Fire'){x.fillRect(28,10,5,10);x.fillRect(24,14,5,7);x.fillRect(33,14,5,7);}
  x.fillStyle=dark;x.fillRect(22,45,7,8);x.fillRect(35,45,7,8);
  PROC_SPRITES[id]=c.toDataURL('image/png');return PROC_SPRITES[id];
}
function creatureArt(id,size='md'){const b=beastBy(id),path=SPRITES[id],cls=size==='lg'?'sprite-lg':size==='sm'?'sprite-sm':'sprite-md';const src=path?assetUrl(path):proceduralBeastSprite(id);return `<img class="creatureImg ${cls}" src="${src}" alt="${b.name}" loading="eager">`;}
function trainerPreview(gender,size=56){return `<img src="${assetUrl(TRAINER_FRAMES[gender].down[0])}" alt="${gender} trainer" style="width:${size}px;height:${size}px;image-rendering:pixelated">`;}
function showScreen(id){$$('.screen').forEach(el=>el.classList.remove('active')); const t=$('#'+id); if(t) t.classList.add('active'); $$('.bottomNav button').forEach(btn=>btn.classList.toggle('active',btn.dataset.screen===id)); if(id==='partyScreen') renderParty(); if(id==='dexScreen') renderDex(); if(id==='profileScreen') renderProfile(); if(id==='shopScreen') renderShop(); if(id==='mapScreen') renderMap(); if(id==='worldScreen') renderWorldPanels();}
function renderStarters(){$('#starterChoices').innerHTML=STARTERS.map(id=>{const beast=beastBy(id), temp=makeMon(id,5); return `<div class="card"><div class="spriteWrap">${creatureArt(id,'lg')}</div><h3>${beast.name}</h3>${typeTag(beast.type)}<div class="muted">${beast.role}</div><div class="movesList">Moves: ${knownMoves(temp).join(' · ')}</div><button class="primary big chooseStarter" data-id="${id}">Choose</button></div>`;}).join(''); $$('.chooseStarter').forEach(btn=>btn.onclick=()=>{const mon=makeMon(btn.dataset.id,5); state={party:[mon],collection:{[mon.id]:true},shards:100,wins:0,captures:0,steps:0,pos:{x:(WORLD_SPAWN.tx+.5)*TILE,y:(WORLD_SPAWN.ty+.5)*TILE},dir:'down',trainerName:pendingSetup.trainerName||'Trainer',trainerGender:pendingSetup.trainerGender||'boy',flags:{},inventory:{runeSeal:5,greaterSeal:1,tonic:2,reviveRoot:1},captureCounts:{}}; save(); showScreen('worldScreen');});}
function renderBag(){
  const target=$('#bagList'); if(!target)return;
  target.innerHTML=Object.entries(SHOP_ITEMS).map(([id,it])=>`<div class="bagRow"><span><b>${it.name}</b><small>${it.desc}</small></span><strong>× ${state.inventory[id]||0}</strong></div>`).join('');
}
function renderShop(){
  if(!$('#shopList'))return;
  $('#shopShards').textContent=state.shards;
  $('#shopList').innerHTML=Object.entries(SHOP_ITEMS).map(([id,it])=>`<div class="shopItem"><div><b>${it.name}</b><small>${it.desc}</small></div><button class="secondary buyItem" data-item="${id}">✦ ${it.price}</button></div>`).join('');
  renderBag();
  document.querySelectorAll('.buyItem').forEach(btn=>btn.onclick=()=>buyShopItem(btn.dataset.item));
}
function buyShopItem(id){
  const it=SHOP_ITEMS[id]; if(!it)return;
  if(state.shards<it.price){alert('Not enough Rune Shards.');return;}
  state.shards-=it.price; state.inventory[id]=(state.inventory[id]||0)+1; save(); renderShop();
}
function renderMap(){
  const c=$('#mapCanvas'); if(!c)return; const m=c.getContext('2d');m.imageSmoothingEnabled=false;
  const sx=c.width/MAP_W,sy=c.height/MAP_H;
  m.fillStyle='#6fa95a';m.fillRect(0,0,c.width,c.height);
  for(let ty=0;ty<MAP_H;ty++)for(let tx=0;tx<MAP_W;tx++){
    const g=groundAt(tx,ty);
    if(g==='w'||g==='W')m.fillStyle='#4c8fc9';
    else if(g==='p'||g==='b')m.fillStyle=g==='b'?'#9c7245':'#c9ad76';
    else if(g==='g')m.fillStyle='#3f7e3f';
    else if(g==='s')m.fillStyle='#d6bd82';
    else continue;
    m.fillRect(Math.floor(tx*sx),Math.floor(ty*sy),Math.ceil(sx),Math.ceil(sy));
  }
  const buildingColour={guild:'#e2bd45',clinic:'#d9646c',workshop:'#9b6c46',inn:'#6e74ad',homeA:'#c48765',homeB:'#7892a9'};
  BUILDINGS.forEach(b=>{m.fillStyle=buildingColour[b.id]||'#ddd';m.fillRect(b.tx*sx,b.ty*sy,Math.max(3,b.w*sx),Math.max(3,b.h*sy));});
  m.fillStyle='#6e6253';LANDMARKS.forEach(l=>m.fillRect(l.tx*sx,l.ty*sy,l.w*sx,l.h*sy));
  const px=state.pos.x/TILE*sx,py=state.pos.y/TILE*sy;
  m.fillStyle='#fff';m.fillRect(px-3,py-3,6,6);m.fillStyle='#17202d';m.fillRect(px-1,py-1,2,2);
  m.font='7px monospace';m.textBaseline='top';
  const labels=[['MARKET',16,9],['INN',37,7],['CLINIC',13,41],['WORKSHOP',52,34],['MINE',92,14],['CAVE',106,58],['BRIDGE',69,45]];
  labels.forEach(([t,x,y])=>{const xx=x*sx,yy=y*sy;m.fillStyle='rgba(8,15,27,.8)';m.fillRect(xx-2,yy-1,m.measureText(t).width+4,9);m.fillStyle='#fff5cf';m.fillText(t,xx,yy);});
}function renderWorldPanels(){if(!$('#shards')) return; $('#shards').textContent=state.shards; $('#partyCount').textContent=`${state.party.length} / 6`; $('#partyMini').innerHTML=state.party.map((m,i)=>`<div class="partyMiniRow"><span>${i===0?'★ ':''}${beastBy(m.id).name} Lv${m.level} · ${m.hp}/${maxHp(m)} HP</span><span>${typeTag(beastBy(m.id).type)}</span></div>`).join(''); $('#trainerBadge').innerHTML=`<span class="badgeName">${state.trainerName}</span>`;}
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
  if(activeInterior)return activeInterior==='clinic'?'Rune Clinic':activeInterior==='inn'?'Moonbell Inn':'Rowan’s Workshop';
  if(tx>=73)return ty>=45?'Eastbank Wilds':'Eastbank Quarry';
  if(ty>=70)return'South Route';
  if(ty<24)return'North Runevale';
  if(ty>52)return'South Runevale';
  return'Runevale Town';
}

function enterInterior(id,building=null){
  if(activeInterior)return;
  if(building){
    returnPos={x:(building.doorX+.5)*TILE,y:(building.doorY+1.55)*TILE,dir:'down'};
  }else{
    returnPos={x:state.pos.x,y:state.pos.y+TILE,dir:'down'};
  }
  activeInterior=id;
  state.pos={x:10.5*TILE,y:10.5*TILE};
  state.dir='up';
  world.camera.x=world.camera.y=0;
  world.lastTileKey='';
  const text=id==='clinic'?'Rune Clinic — walk to the counter for care.'
    :id==='inn'?'Moonbell Inn — a warm place to rest.'
    :'Rowan’s Workshop — maps and Rune tools line the walls.';
  worldSay(text,2800);
}
function exitInterior(){
  if(!activeInterior||!returnPos)return;
  activeInterior=null;
  state.pos={x:returnPos.x,y:returnPos.y};
  state.dir=returnPos.dir||'down';
  returnPos=null;
  world.lastTileKey='';
  worldSay('Back outside in Runevale.',1500);
}
function buildingDoorAt(tx,ty){
  return BUILDINGS.find(b=>b.enterable&&b.doorX===tx&&b.doorY===ty)||null;
}
function autoEnterBuilding(b){
  if(!b)return false;
  if(b.interior==='shop'){
    state.pos={x:(b.doorX+.5)*TILE,y:(b.doorY+1.55)*TILE};
    world.lastTileKey=`${b.doorX},${b.doorY}`;
    showScreen('shopScreen');renderShop();
    return true;
  }
  enterInterior(b.interior,b);
  return true;
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
  if(building&&!building.enterable){worldSay(building.name+' — the door is closed for now.');return;}

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
  if(activeInterior){$('#worldText').textContent=activeInterior==='clinic'?'Rune Clinic — approach the counter for care.':activeInterior==='inn'?'Moonbell Inn — walk to the doorway to leave.':'Rowan’s Workshop — approach the counter to talk with Rowan.';return;}
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
    if(ty>=13&&tx>=8&&tx<=12){exitInterior();return;}
    passiveWorldMessage(tx,ty);
    return;
  }

  const tileKey=tx+','+ty;
  if(tileKey!==world.lastTileKey){
    world.lastTileKey=tileKey;
    const door=buildingDoorAt(tx,ty);
    if(door&&autoEnterBuilding(door))return;
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

  // Soft ground shadow gives the modern pixel look more depth.
  ctx.fillStyle='rgba(19,31,30,.24)';ctx.fillRect(x+5,y+h-5,w-4,7);

  // Wall body and timber framing.
  ctx.fillStyle=b.trim;ctx.fillRect(x+7,y+Math.floor(h*.48),w-14,Math.floor(h*.47));
  ctx.fillStyle=b.wall;ctx.fillRect(x+10,y+Math.floor(h*.50),w-20,Math.floor(h*.42));

  // Stepped tiled roof with deeper eaves.
  const roofH=Math.floor(h*.54);
  ctx.fillStyle=shadeHex(b.trim,-18);ctx.fillRect(x+1,y+10,w-2,roofH-5);
  ctx.fillStyle=b.roof;ctx.fillRect(x+5,y+5,w-10,roofH-8);
  ctx.fillStyle=b.roof2;
  for(let ry=y+9;ry<y+roofH-4;ry+=6){ctx.fillRect(x+7,ry,w-14,2);}
  ctx.fillStyle=shadeHex(b.trim,-12);ctx.fillRect(x+2,y+roofH-2,w-4,5);

  // Door and warm windows.
  const doorPx=(b.doorX-b.tx)*TILE;
  ctx.fillStyle='#403225';ctx.fillRect(x+doorPx+2,y+h-28,12,28);
  ctx.fillStyle='#7b573c';ctx.fillRect(x+doorPx+4,y+h-25,8,25);
  ctx.fillStyle='#f2cf69';ctx.fillRect(x+doorPx+10,y+h-12,2,2);
  ctx.fillStyle='#31485d';ctx.fillRect(x+14,y+roofH+10,13,11);ctx.fillRect(x+w-27,y+roofH+10,13,11);
  ctx.fillStyle='#f4cf6c';ctx.fillRect(x+16,y+roofH+12,9,7);ctx.fillRect(x+w-25,y+roofH+12,9,7);

  // Flower boxes.
  ctx.fillStyle='#684a32';ctx.fillRect(x+14,y+roofH+21,14,4);ctx.fillRect(x+w-28,y+roofH+21,14,4);
  ctx.fillStyle='#70a95a';ctx.fillRect(x+16,y+roofH+19,3,3);ctx.fillRect(x+22,y+roofH+18,3,4);ctx.fillRect(x+w-24,y+roofH+18,3,4);ctx.fillRect(x+w-18,y+roofH+19,3,3);

  // Building-specific identity, inspired by the approved visual target.
  if(b.style==='market'){
    ctx.fillStyle='#f3efe0';ctx.fillRect(x+8,y+roofH+4,w-16,8);
    const stripe=['#d55f52','#f3efe0','#5aa06b','#f3efe0'];
    for(let i=0;i<Math.ceil((w-16)/10);i++){ctx.fillStyle=stripe[i%stripe.length];ctx.fillRect(x+8+i*10,y+roofH+4,10,8);}
    ctx.fillStyle='#815538';ctx.fillRect(x+4,y+h-11,28,9);ctx.fillRect(x+w-32,y+h-11,28,9);
    ctx.fillStyle='#d68545';ctx.fillRect(x+8,y+h-15,4,4);ctx.fillStyle='#78a94b';ctx.fillRect(x+15,y+h-15,4,4);ctx.fillStyle='#cf554d';ctx.fillRect(x+22,y+h-15,4,4);
  }else if(b.style==='clinic'){
    ctx.fillStyle='#f1f0e8';ctx.fillRect(x+8,y+8,18,18);
    ctx.fillStyle='#c84f56';ctx.fillRect(x+15,y+10,4,14);ctx.fillRect(x+10,y+15,14,4);
  }else if(b.style==='workshop'){
    ctx.fillStyle='#575d62';ctx.fillRect(x+w-29,y+3,10,28);
    ctx.fillStyle='#8a8e8a';ctx.fillRect(x+w-27,y,6,7);
    ctx.fillStyle='rgba(220,225,215,.65)';ctx.fillRect(x+w-24,y-5,5,4);ctx.fillRect(x+w-20,y-10,5,4);
    ctx.fillStyle='#6f5339';ctx.fillRect(x+4,y+h-10,26,7);
    ctx.fillStyle='#9b7b54';ctx.fillRect(x+8,y+h-16,18,6);
  }else if(b.style==='inn'){
    ctx.fillStyle='#5a3e2f';ctx.fillRect(x+w-16,y+roofH+4,5,18);
    ctx.fillStyle='#d8b45b';ctx.fillRect(x+w-20,y+roofH+12,12,8);
    ctx.fillStyle='#f2c85e';ctx.fillRect(x+8,y+h-22,4,7);ctx.fillRect(x+w-12,y+h-22,4,7);
  }

  // Readable wooden sign board.
  const sign=b.sign||'HOME',signW=Math.max(34,sign.length*6+8),signX=x+Math.floor(w/2-signW/2),signY=y+roofH+1;
  ctx.fillStyle='#372c27';ctx.fillRect(signX-2,signY-2,signW+4,12);
  ctx.fillStyle='#7b5438';ctx.fillRect(signX,signY,signW,9);
  ctx.fillStyle='#f6e8bc';ctx.font='bold 7px monospace';ctx.textAlign='center';ctx.textBaseline='top';ctx.fillText(sign,x+Math.floor(w/2),signY+1);
  ctx.textAlign='start';
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
  const cx=Math.round(34.5*TILE-world.camera.x),cy=Math.round(34.5*TILE-world.camera.y);
  ctx.fillStyle='rgba(28,43,46,.22)';ctx.fillRect(cx-24,cy+14,48,5);
  ctx.fillStyle='#6e6a63';ctx.fillRect(cx-22,cy-13,44,28);
  ctx.fillStyle='#b8b4a9';ctx.fillRect(cx-19,cy-10,38,22);
  ctx.fillStyle='#64b9e7';ctx.fillRect(cx-15,cy-6,30,14);
  ctx.fillStyle='#d9d5ca';ctx.fillRect(cx-5,cy-27,10,22);
  ctx.fillStyle='#8bdcff';ctx.fillRect(cx-2,cy-24,4,19);
  ctx.fillStyle='#efefe8';ctx.fillRect(cx-7,cy-30,14,5);
  // Flower ring like the mock-up.
  for(const [dx,dy,col] of [[-25,-6,'#ef8bb9'],[24,-7,'#fff0a0'],[-23,11,'#fff'],[22,11,'#ef8bb9'],[-16,-18,'#fff'],[16,-18,'#fff0a0']]){
    ctx.fillStyle='#4f9149';ctx.fillRect(cx+dx,cy+dy+2,3,5);ctx.fillStyle=col;ctx.fillRect(cx+dx-1,cy+dy,5,4);
  }
}

function drawNPC(n){
  const nx=Math.round((n.tx+.5)*TILE-world.camera.x),ny=Math.round((n.ty+.5)*TILE-world.camera.y);
  if(nx<-16||ny<-24||nx>canvas.width+16||ny>canvas.height+24)return;
  ctx.fillStyle='rgba(0,0,0,.22)';ctx.fillRect(nx-7,ny+8,14,3);
  if(n.id==='rowan'){
    ctx.fillStyle='#5b3b25';ctx.fillRect(nx-5,ny-12,10,5);ctx.fillRect(nx-7,ny-9,3,4);
    ctx.fillStyle='#e4bd91';ctx.fillRect(nx-4,ny-7,8,6);
    ctx.fillStyle='#202737';ctx.fillRect(nx-4,ny-5,3,2);ctx.fillRect(nx+1,ny-5,3,2);
    ctx.fillStyle='#6c4d9e';ctx.fillRect(nx-6,ny,12,9);
    ctx.fillStyle='#d3c8a8';ctx.fillRect(nx-2,ny+1,4,7);
    ctx.fillStyle='#33465d';ctx.fillRect(nx-6,ny+9,5,7);ctx.fillRect(nx+1,ny+9,5,7);
    ctx.fillStyle='#8b6b45';ctx.fillRect(nx+6,ny+1,4,8);
  }else if(n.id==='mina'){
    ctx.fillStyle='#7b4b2a';ctx.fillRect(nx-5,ny-12,10,4);ctx.fillRect(nx+4,ny-9,4,6);
    ctx.fillStyle='#e4bd91';ctx.fillRect(nx-4,ny-7,8,6);
    ctx.fillStyle='#eef1e7';ctx.fillRect(nx-6,ny,12,10);
    ctx.fillStyle='#3f7fb5';ctx.fillRect(nx-4,ny+2,8,6);
    ctx.fillStyle='#8bd6b5';ctx.fillRect(nx-2,ny-1,4,3);
    ctx.fillStyle='#49556e';ctx.fillRect(nx-6,ny+10,5,6);ctx.fillRect(nx+1,ny+10,5,6);
  }else{
    ctx.fillStyle='#d2a943';ctx.fillRect(nx-6,ny-13,12,4);ctx.fillRect(nx-4,ny-16,8,4);
    ctx.fillStyle='#fff09c';ctx.fillRect(nx-1,ny-15,2,2);
    ctx.fillStyle='#e0b58c';ctx.fillRect(nx-4,ny-9,8,7);
    ctx.fillStyle='#8a6336';ctx.fillRect(nx-6,ny-1,12,10);
    ctx.fillStyle='#4b5565';ctx.fillRect(nx-6,ny+9,5,7);ctx.fillRect(nx+1,ny+9,5,7);
    ctx.fillStyle='#5d4433';ctx.fillRect(nx+6,ny+1,4,9);
  }
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
  }else if(activeInterior==='inn'){
    ctx.fillStyle='#6e513b';ctx.fillRect(96,94,128,36);
    ctx.fillStyle='#b88a55';ctx.fillRect(103,100,114,8);
    ctx.fillStyle='#7c5a45';ctx.fillRect(42,108,44,28);ctx.fillRect(234,108,44,28);
    ctx.fillStyle='#efe0bd';ctx.fillRect(47,112,34,14);ctx.fillRect(239,112,34,14);
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
