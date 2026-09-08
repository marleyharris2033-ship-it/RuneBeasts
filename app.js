const TYPES={Fire:{strong:"Grass",weak:"Water"},Grass:{strong:"Water",weak:"Fire"},Water:{strong:"Fire",weak:"Grass"},Electric:{strong:"Flying",weak:"Rock"},Flying:{strong:"Rock",weak:"Electric"},Rock:{strong:"Electric",weak:"Flying"}};
const BEASTS=[{"id": "cindercub", "name": "Cindercub", "type": "Fire", "rarity": "Starter", "role": "Balanced", "base": [44, 52, 42, 48, 42, 50], "glyph": "♞"}, {"id": "ashbit", "name": "Ashbit", "type": "Fire", "rarity": "Common", "role": "Speed", "base": [32, 49, 31, 42, 34, 64], "glyph": "⌁"}, {"id": "magmole", "name": "Magmole", "type": "Fire", "rarity": "Uncommon", "role": "Tank", "base": [58, 60, 63, 34, 44, 25], "glyph": "●"}, {"id": "flarewing", "name": "Flarewing", "type": "Fire", "rarity": "Rare", "role": "Special", "base": [43, 38, 34, 68, 44, 70], "glyph": "⌃"}, {"id": "ripplet", "name": "Ripplet", "type": "Water", "rarity": "Starter", "role": "Balanced", "base": [48, 46, 46, 52, 48, 44], "glyph": "≋"}, {"id": "bubbfin", "name": "Bubbfin", "type": "Water", "rarity": "Common", "role": "Support", "base": [42, 31, 43, 48, 52, 37], "glyph": "◌"}, {"id": "cragclaw", "name": "Cragclaw", "type": "Water", "rarity": "Uncommon", "role": "Tank", "base": [55, 48, 67, 35, 52, 24], "glyph": "⋈"}, {"id": "abyssquid", "name": "Abyssquid", "type": "Water", "rarity": "Rare", "role": "Special", "base": [46, 34, 41, 72, 61, 43], "glyph": "Ψ"}, {"id": "spriglet", "name": "Spriglet", "type": "Grass", "rarity": "Starter", "role": "Balanced", "base": [46, 48, 44, 46, 52, 46], "glyph": "♧"}, {"id": "mossbug", "name": "Mossbug", "type": "Grass", "rarity": "Common", "role": "Defence", "base": [41, 35, 58, 31, 54, 30], "glyph": "✿"}, {"id": "vineape", "name": "Vineape", "type": "Grass", "rarity": "Uncommon", "role": "Physical", "base": [48, 62, 42, 36, 39, 60], "glyph": "ϟ"}, {"id": "bloomhorn", "name": "Bloomhorn", "type": "Grass", "rarity": "Rare", "role": "HP/Support", "base": [72, 43, 55, 48, 64, 28], "glyph": "♜"}, {"id": "voltpup", "name": "Voltpup", "type": "Electric", "rarity": "Uncommon", "role": "All-rounder", "base": [45, 51, 39, 52, 41, 62], "glyph": "Ϟ"}, {"id": "sparkit", "name": "Sparkit", "type": "Electric", "rarity": "Common", "role": "Speed", "base": [34, 42, 30, 45, 33, 72], "glyph": "ϟ"}, {"id": "thundram", "name": "Thundram", "type": "Electric", "rarity": "Rare", "role": "Physical", "base": [58, 72, 53, 42, 44, 38], "glyph": "♈"}, {"id": "arcwing", "name": "Arcwing", "type": "Electric", "rarity": "Rare", "role": "Special", "base": [42, 35, 37, 74, 51, 68], "glyph": "⌁"}, {"id": "breezlet", "name": "Breezlet", "type": "Flying", "rarity": "Common", "role": "Balanced", "base": [38, 41, 36, 42, 38, 58], "glyph": "▲"}, {"id": "galehare", "name": "Galehare", "type": "Flying", "rarity": "Uncommon", "role": "Speed", "base": [44, 48, 37, 39, 40, 75], "glyph": "⋏"}, {"id": "skyrake", "name": "Skyrake", "type": "Flying", "rarity": "Rare", "role": "Offence", "base": [51, 61, 45, 56, 44, 62], "glyph": "≻"}, {"id": "stormowl", "name": "Stormowl", "type": "Flying", "rarity": "Elite", "role": "Special tank", "base": [62, 39, 49, 74, 73, 55], "glyph": "◉"}, {"id": "pebblit", "name": "Pebblit", "type": "Rock", "rarity": "Common", "role": "Defence", "base": [47, 40, 64, 28, 47, 24], "glyph": "◆"}, {"id": "craggoat", "name": "Craggoat", "type": "Rock", "rarity": "Uncommon", "role": "Physical", "base": [54, 64, 59, 30, 42, 35], "glyph": "♑"}, {"id": "gemscarab", "name": "Gemscarab", "type": "Rock", "rarity": "Rare", "role": "Defensive", "base": [53, 37, 76, 45, 68, 25], "glyph": "◇"}, {"id": "titanox", "name": "Titanox", "type": "Rock", "rarity": "Elite", "role": "Tank", "base": [82, 74, 81, 28, 60, 18], "glyph": "♉"}];
const MOVES={"Scratch": {"type": "Neutral", "power": 35, "acc": 100}, "Quick Jab": {"type": "Neutral", "power": 30, "acc": 100}, "Guard Break": {"type": "Neutral", "power": 50, "acc": 90}, "Ember Bite": {"type": "Fire", "power": 45, "acc": 100}, "Flame Rush": {"type": "Fire", "power": 60, "acc": 90}, "Heat Wave": {"type": "Fire", "power": 70, "acc": 85}, "Water Jet": {"type": "Water", "power": 45, "acc": 100}, "Tidal Slam": {"type": "Water", "power": 60, "acc": 90}, "Bubble Burst": {"type": "Water", "power": 55, "acc": 95}, "Leaf Swipe": {"type": "Grass", "power": 45, "acc": 100}, "Vine Lash": {"type": "Grass", "power": 60, "acc": 90}, "Spore Burst": {"type": "Grass", "power": 55, "acc": 95}, "Spark Snap": {"type": "Electric", "power": 45, "acc": 100}, "Volt Rush": {"type": "Electric", "power": 60, "acc": 90}, "Arc Pulse": {"type": "Electric", "power": 70, "acc": 85}, "Gust": {"type": "Flying", "power": 45, "acc": 100}, "Sky Dive": {"type": "Flying", "power": 60, "acc": 90}, "Wind Cutter": {"type": "Flying", "power": 55, "acc": 95}, "Stone Toss": {"type": "Rock", "power": 45, "acc": 100}, "Rock Ram": {"type": "Rock", "power": 60, "acc": 90}, "Crystal Crash": {"type": "Rock", "power": 70, "acc": 85}};
const LEARNSETS={"cindercub": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "ashbit": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "magmole": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "flarewing": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "ripplet": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "bubbfin": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "cragclaw": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "abyssquid": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "spriglet": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "mossbug": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "vineape": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "bloomhorn": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "voltpup": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "sparkit": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "thundram": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "arcwing": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "breezlet": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "galehare": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "skyrake": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "stormowl": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "pebblit": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]], "craggoat": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]], "gemscarab": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]], "titanox": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]]};
const MAP=["TTTTTTTTT", "TGGGGGGGT", "TGGPPPGGT", "TGGPGPGGT", "TGGPHPGGT", "TGGPPPGGT", "TGGGGGGGT", "TGGGGGGGT", "TTTTTTTTT"];
const STARTERS=["cindercub","ripplet","spriglet"];
const KEY="runebeasts-v01";
let state={party:[],collection:{},shards:100,wins:0,captures:0,pos:{x:4,y:5},steps:0};
let battle=null;

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const B=id=>BEASTS.find(x=>x.id===id);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const need=l=>30+l*20;
const colors={Fire:"#b94b39",Water:"#3678bb",Grass:"#4e8c49",Electric:"#b69525",Flying:"#687fb8",Rock:"#786f67",Neutral:"#536079"};

function maxHp(m){return Math.round(B(m.id).base[0]*.7+m.level*5+20)}
function stats(m){let b=B(m.id).base;return [maxHp(m),...b.slice(1).map(v=>Math.round(v*.65+m.level*2))]}
function knownMoves(m){
  return LEARNSETS[m.id].filter(([lv])=>lv<=m.level).map(x=>x[1]).slice(-4);
}
function makeMon(id,l){
  let m={uid:String(Date.now())+Math.random(),id,level:l,xp:0,hp:0};
  m.hp=maxHp(m);return m;
}
function normaliseState(){
  state.party=Array.isArray(state.party)?state.party:[];
  state.collection=state.collection||{};
  state.pos=state.pos||{x:4,y:5};
  state.steps=state.steps||0;
  state.shards=Number.isFinite(+state.shards)?+state.shards:100;
  state.wins=state.wins||0;state.captures=state.captures||0;
  state.party.forEach(m=>{m.level=m.level||1;m.xp=m.xp||0;if(!Number.isFinite(m.hp))m.hp=maxHp(m);m.hp=clamp(m.hp,0,maxHp(m))});
}
function save(){normaliseState();localStorage.setItem(KEY,JSON.stringify(state));renderWorld()}
function load(){let r=localStorage.getItem(KEY);if(!r)return false;try{state=JSON.parse(r);normaliseState();return true}catch{return false}}
function screen(id){
  $$(".screen").forEach(x=>x.classList.remove("active"));
  const el=$("#"+id);if(el)el.classList.add("active");
  if(id==="partyScreen")renderParty();
  if(id==="dexScreen")renderDex();
  if(id==="profileScreen")renderSave();
  if(id==="worldScreen")renderWorld();
}
function tag(t){return `<span class="type" style="background:${colors[t]||colors.Neutral}">${t}</span>`}
function spr(id,small=false){let b=B(id);return `<div class="${small?"smallSprite":"sprite"}" style="background:${colors[b.type]}">${b.glyph}</div>`}

function renderStarters(){
  $("#starterChoices").innerHTML=STARTERS.map(id=>{
    let b=B(id),temp=makeMon(id,5);
    return `<div class="starter">${spr(id)}<h3>${b.name}</h3>${tag(b.type)}
      <p>${b.role}</p><div class="starterMoves">${knownMoves(temp).join(" · ")}</div>
      <button class="primary big choose" data-id="${id}">CHOOSE ${b.name.toUpperCase()}</button></div>`
  }).join("");
  $$(".choose").forEach(x=>x.onclick=()=>{
    let m=makeMon(x.dataset.id,5);
    state={party:[m],collection:{[m.id]:true},shards:100,wins:0,captures:0,pos:{x:4,y:5},steps:0};
    save();screen("worldScreen");
  });
}

function tileAt(x,y){return MAP[y]?.[x]||"T"}
function renderMap(){
  const map=$("#map");if(!map)return;
  let html="";
  for(let y=0;y<MAP.length;y++){
    for(let x=0;x<MAP[y].length;x++){
      let c=MAP[y][x],cls=c==="G"?"grass":c==="P"?"path":c==="H"?"heal":"tree";
      let char=c==="G"?"♣":c==="P"?"·":c==="H"?"✚":"♠";
      if(state.pos.x===x&&state.pos.y===y){cls+=" player";char="◆"}
      html+=`<div class="tile ${cls}">${char}</div>`;
    }
  }
  map.innerHTML=html;
}
function renderWorld(){
  if(!$("#shards"))return;
  renderMap();
  $("#shards").textContent=state.shards;
  $("#partyCount").textContent=`${state.party.length} / 6`;
  $("#partyMini").innerHTML=state.party.map((m,i)=>`<div class="partyrow"><span>${i===0?"★ ":""}${B(m.id).name} Lv${m.level} · ${m.hp}/${maxHp(m)} HP</span>${tag(B(m.id).type)}</div>`).join("");
}
function healParty(){
  state.party.forEach(m=>m.hp=maxHp(m));
  $("#worldText").textContent="The Rune Spring restored your party.";
  save();
}
function movePlayer(dx,dy){
  if(battle)return;
  const nx=state.pos.x+dx,ny=state.pos.y+dy,t=tileAt(nx,ny);
  if(t==="T"){$("#worldText").textContent="The trees block your path.";return}
  state.pos={x:nx,y:ny};state.steps++;
  if(t==="H") healParty(); else {$("#worldText").textContent=t==="G"?"The tall grass rustles...":"You follow the old trail.";save()}
  renderMap();
  if(t==="G"&&Math.random()<0.18) setTimeout(()=>startBattle(encounter()),140);
}
function encounter(){
  let pool=BEASTS.filter(b=>!["Starter","Elite"].includes(b.rarity));
  let weighted=[];
  const n={Common:7,Uncommon:3,Rare:1};
  pool.forEach(b=>{for(let i=0;i<(n[b.rarity]||1);i++)weighted.push(b)});
  return weighted[Math.floor(Math.random()*weighted.length)];
}
function startBattle(b){
  if(!state.party.length)return;
  let lead=state.party.findIndex(m=>m.hp>0);
  if(lead<0){healParty();lead=0}
  battle={enemy:makeMon(b.id,2+Math.floor(Math.random()*7)),active:lead,lock:false};
  state.collection[b.id]=true;save();
  closeSubmenus();drawBattle();screen("battleScreen");
  msg(`A wild ${b.name} appeared!`);
}
function active(){return battle?state.party[battle.active]:null}
function typeMod(a,d){
  if(a==="Neutral")return 1;
  return TYPES[a].strong===d?1.5:TYPES[a].weak===d?.67:1;
}
function calcDamage(attacker,defender,moveName){
  const mv=MOVES[moveName],as=stats(attacker),ds=stats(defender);
  const stab=mv.type===B(attacker.id).type?1.15:1;
  const mod=typeMod(mv.type,B(defender.id).type);
  const raw=((attacker.level*.6+3)*mv.power*(as[1]/Math.max(1,ds[2]))/45)+2;
  return {n:Math.max(1,Math.round(raw*stab*mod*(.9+Math.random()*.2))),mod,hit:Math.random()*100<mv.acc};
}
function drawBattle(){
  if(!battle)return;
  const p=active(),e=battle.enemy;if(!p||!e)return;
  const pb=B(p.id),eb=B(e.id);
  $("#enemyName").textContent=eb.name;$("#enemyLevel").textContent=`Lv ${e.level}`;$("#enemyType").innerHTML=tag(eb.type);
  $("#playerName").textContent=pb.name;$("#playerLevel").textContent=`Lv ${p.level}`;$("#playerType").innerHTML=tag(pb.type);
  $("#enemySprite").textContent=eb.glyph;$("#enemySprite").style.background=colors[eb.type];
  $("#playerSprite").textContent=pb.glyph;$("#playerSprite").style.background=colors[pb.type];
  $("#enemyHpBar").style.width=`${clamp(100*e.hp/maxHp(e),0,100)}%`;
  $("#playerHpBar").style.width=`${clamp(100*p.hp/maxHp(p),0,100)}%`;
  $("#playerHpText").textContent=`${p.hp}/${maxHp(p)} HP`;
}
function msg(t){$("#battleText").textContent=t}
function lock(v){if(!battle)return;battle.lock=v;$$("#battleScreen button").forEach(b=>{if(!b.classList.contains("back"))b.disabled=v})}
function closeSubmenus(){
  $("#movesMenu").classList.add("hidden");$("#switchMenu").classList.add("hidden");
  $("#cancelBattleSubmenu").classList.add("hidden");$("#mainBattleMenu").classList.remove("hidden");
}
function showMoves(){
  if(!battle||battle.lock)return;
  const p=active();
  $("#movesMenu").innerHTML=knownMoves(p).map(name=>{
    const mv=MOVES[name];
    return `<button class="secondary moveBtn" data-move="${name}"><b>${name}</b><small>${mv.type} · POW ${mv.power} · ACC ${mv.acc}</small></button>`
  }).join("");
  $("#mainBattleMenu").classList.add("hidden");$("#movesMenu").classList.remove("hidden");$("#cancelBattleSubmenu").classList.remove("hidden");
  $$(".moveBtn").forEach(b=>b.onclick=()=>useMove(b.dataset.move));
}
function useMove(name){
  if(!battle||battle.lock)return;
  closeSubmenus();lock(true);
  const p=active(),e=battle.enemy,r=calcDamage(p,e,name);
  if(!r.hit){msg(`${B(p.id).name} used ${name}, but missed!`);setTimeout(enemyTurn,650);return}
  e.hp=Math.max(0,e.hp-r.n);
  msg(`${B(p.id).name} used ${name}! ${r.n} damage.${r.mod>1?" Super effective!":r.mod<1?" Not very effective.":""}`);
  drawBattle();
  setTimeout(()=>e.hp<=0?win():enemyTurn(),700);
}
function enemyTurn(){
  if(!battle)return;
  const p=active(),e=battle.enemy;
  if(!p||p.hp<=0){handleFaint();return}
  const choices=knownMoves(e),name=choices[Math.floor(Math.random()*choices.length)]||"Scratch";
  const r=calcDamage(e,p,name);
  if(!r.hit){msg(`${B(e.id).name} used ${name}, but missed!`);setTimeout(()=>lock(false),500);return}
  p.hp=Math.max(0,p.hp-r.n);
  msg(`${B(e.id).name} used ${name}! ${r.n} damage.`);
  drawBattle();save();
  setTimeout(()=>p.hp<=0?handleFaint():lock(false),650);
}
function handleFaint(){
  if(!battle)return;
  const p=active();msg(`${B(p.id).name} fainted!`);
  const next=state.party.findIndex((m,i)=>i!==battle.active&&m.hp>0);
  if(next<0){
    setTimeout(()=>{state.party.forEach(m=>m.hp=maxHp(m));battle=null;save();screen("worldScreen");$("#worldText").textContent="Your party recovered at the Rune Spring.";},850);
  }else{
    setTimeout(()=>{battle.active=next;drawBattle();msg(`${B(active().id).name} steps in!`);lock(false)},650);
  }
}
function win(){
  if(!battle)return;
  const p=active(),enemy=battle.enemy,gain=18+enemy.level*8;
  p.xp+=gain;state.wins++;state.shards+=8;
  let lvups=[];
  while(p.level<50&&p.xp>=need(p.level)){
    p.xp-=need(p.level);p.level++;p.hp=maxHp(p);lvups.push(p.level);
  }
  msg(`Victory! ${B(p.id).name} gained ${gain} XP${lvups.length?` and reached Lv ${p.level}!`:""}`);
  battle=null;save();setTimeout(()=>screen("worldScreen"),1000);
}
function capture(){
  if(!battle||battle.lock)return;
  if(state.party.length>=6){msg("Your party is full.");return}
  if(state.shards<10){msg("You need 10 Rune Shards.");return}
  lock(true);state.shards-=10;
  const e=battle.enemy,rarity=B(e.id).rarity;
  const base={Common:.58,Uncommon:.44,Rare:.30,Elite:.18}[rarity]||.4;
  const chance=clamp(base+(1-e.hp/maxHp(e))*.45,.12,.9);
  if(Math.random()<chance){
    state.party.push(e);state.collection[e.id]=true;state.captures++;
    msg(`${B(e.id).name} was bound to your rune!`);battle=null;save();setTimeout(()=>screen("worldScreen"),950);
  }else{
    msg(`${B(e.id).name} broke free!`);save();setTimeout(enemyTurn,650);
  }
}
function showSwitch(){
  if(!battle||battle.lock)return;
  $("#switchMenu").innerHTML=state.party.map((m,i)=>`<button class="switchChoice" data-i="${i}" ${i===battle.active||m.hp<=0?"disabled":""}><span>${B(m.id).name} Lv${m.level}</span><span>${m.hp}/${maxHp(m)} HP</span></button>`).join("");
  $("#mainBattleMenu").classList.add("hidden");$("#switchMenu").classList.remove("hidden");$("#cancelBattleSubmenu").classList.remove("hidden");
  $$(".switchChoice").forEach(b=>b.onclick=()=>switchTo(+b.dataset.i));
}
function switchTo(i){
  if(!battle||battle.lock||i===battle.active||state.party[i].hp<=0)return;
  closeSubmenus();battle.active=i;drawBattle();msg(`${B(active().id).name}, you're up!`);lock(true);setTimeout(enemyTurn,650);
}
function run(){
  if(!battle||battle.lock)return;
  if(Math.random()<.85){msg("You escaped safely.");battle=null;setTimeout(()=>screen("worldScreen"),450)}
  else{msg("Couldn't escape!");lock(true);setTimeout(enemyTurn,550)}
}
function renderParty(){
  $("#partyList").innerHTML=state.party.map((m,i)=>{
    const b=B(m.id),pct=clamp(m.xp/need(m.level)*100,0,100);
    return `<div class="partyCard ${i===0?"leadCard":""}">
      <div class="top"><div>${spr(m.id,true)}<b>${b.name}</b> ${tag(b.type)}</div><b>Lv ${m.level}</b></div>
      <div class="stats">HP ${m.hp}/${maxHp(m)} · ATK ${stats(m)[1]} · DEF ${stats(m)[2]} · SP.ATK ${stats(m)[3]} · SP.DEF ${stats(m)[4]} · SPD ${stats(m)[5]}</div>
      <div class="movesList">Moves: ${knownMoves(m).join(" · ")}</div>
      <div class="xp"><i style="width:${pct}%"></i></div>
      <small>XP ${m.xp}/${need(m.level)}</small>
      ${i?`<button class="secondary lead" data-i="${i}">MAKE LEAD</button>`:"<b>LEAD BEAST</b>"}
    </div>`
  }).join("");
  $$(".lead").forEach(b=>b.onclick=()=>{let i=+b.dataset.i,[m]=state.party.splice(i,1);state.party.unshift(m);save();renderParty()});
}
function renderDex(){
  let seen=BEASTS.filter(b=>state.collection[b.id]).length;
  $("#dexProgress").textContent=`${seen} / ${BEASTS.length} discovered`;
  $("#dexList").innerHTML=BEASTS.map((b,i)=>{
    let s=state.collection[b.id];
    return `<div class="dexCard ${s?"seen":""}"><small>#${String(i+1).padStart(3,"0")}</small>${s?spr(b.id,true):'<div class="smallSprite">?</div>'}<b>${s?b.name:"?????"}</b><br>${s?tag(b.type):""}${s?`<div><small>${b.rarity} · ${b.role}</small></div>`:""}</div>`
  }).join("");
}
function renderSave(){
  $("#saveStats").innerHTML=`<p>Wins: <b>${state.wins}</b></p><p>Captured: <b>${state.captures}</b></p><p>Discovered: <b>${Object.keys(state.collection).length}/${BEASTS.length}</b></p><p>Steps: <b>${state.steps}</b></p><p>Rune Shards: <b>${state.shards}</b></p>`;
}

$("#newGameBtn").onclick=()=>{renderStarters();screen("starterScreen")};
$("#continueBtn").onclick=()=>screen("worldScreen");
$("#movesBtn").onclick=showMoves;
$("#captureBtn").onclick=capture;
$("#switchBtn").onclick=showSwitch;
$("#runBtn").onclick=run;
$("#cancelBattleSubmenu").onclick=closeSubmenus;
$("#manualSaveBtn").onclick=()=>{save();alert("Game saved.")};
$("#healBtn").onclick=()=>{state.party.forEach(m=>m.hp=maxHp(m));save();alert("Party restored.")};
$("#resetBtn").onclick=()=>{if(confirm("Delete all Rune Beasts progress?")){localStorage.removeItem(KEY);location.reload()}};
$$("[data-screen]").forEach(b=>b.onclick=()=>screen(b.dataset.screen));
$$("[data-dir]").forEach(b=>b.onclick=()=>{const d=b.dataset.dir;movePlayer(d==="right"?1:d==="left"?-1:0,d==="down"?1:d==="up"?-1:0)});
document.addEventListener("keydown",e=>{if(!$("#worldScreen").classList.contains("active"))return;const k=e.key;const m={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]}[k];if(m){e.preventDefault();movePlayer(...m)}});
if("serviceWorker"in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});
load();$("#continueBtn").classList.toggle("hidden",!localStorage.getItem(KEY));renderWorld();
