
const TYPES = {
  Fire:{strong:"Grass",weak:"Water"},
  Grass:{strong:"Water",weak:"Fire"},
  Water:{strong:"Fire",weak:"Grass"},
  Electric:{strong:"Flying",weak:"Rock"},
  Flying:{strong:"Rock",weak:"Electric"},
  Rock:{strong:"Electric",weak:"Flying"}
};

const BEASTS = [{"id": "cindercub", "name": "Cindercub", "type": "Fire", "rarity": "Starter", "role": "Balanced", "base": [44, 52, 42, 48, 42, 50], "glyph": "♞"}, {"id": "ashbit", "name": "Ashbit", "type": "Fire", "rarity": "Common", "role": "Speed", "base": [32, 49, 31, 42, 34, 64], "glyph": "⌁"}, {"id": "magmole", "name": "Magmole", "type": "Fire", "rarity": "Uncommon", "role": "Tank", "base": [58, 60, 63, 34, 44, 25], "glyph": "●"}, {"id": "flarewing", "name": "Flarewing", "type": "Fire", "rarity": "Rare", "role": "Special", "base": [43, 38, 34, 68, 44, 70], "glyph": "⌃"}, {"id": "ripplet", "name": "Ripplet", "type": "Water", "rarity": "Starter", "role": "Balanced", "base": [48, 46, 46, 52, 48, 44], "glyph": "≋"}, {"id": "bubbfin", "name": "Bubbfin", "type": "Water", "rarity": "Common", "role": "Support", "base": [42, 31, 43, 48, 52, 37], "glyph": "◌"}, {"id": "cragclaw", "name": "Cragclaw", "type": "Water", "rarity": "Uncommon", "role": "Tank", "base": [55, 48, 67, 35, 52, 24], "glyph": "⋈"}, {"id": "abyssquid", "name": "Abyssquid", "type": "Water", "rarity": "Rare", "role": "Special", "base": [46, 34, 41, 72, 61, 43], "glyph": "Ψ"}, {"id": "spriglet", "name": "Spriglet", "type": "Grass", "rarity": "Starter", "role": "Balanced", "base": [46, 48, 44, 46, 52, 46], "glyph": "♧"}, {"id": "mossbug", "name": "Mossbug", "type": "Grass", "rarity": "Common", "role": "Defence", "base": [41, 35, 58, 31, 54, 30], "glyph": "✿"}, {"id": "vineape", "name": "Vineape", "type": "Grass", "rarity": "Uncommon", "role": "Physical", "base": [48, 62, 42, 36, 39, 60], "glyph": "ϟ"}, {"id": "bloomhorn", "name": "Bloomhorn", "type": "Grass", "rarity": "Rare", "role": "HP/Support", "base": [72, 43, 55, 48, 64, 28], "glyph": "♜"}, {"id": "voltpup", "name": "Voltpup", "type": "Electric", "rarity": "Uncommon", "role": "All-rounder", "base": [45, 51, 39, 52, 41, 62], "glyph": "Ϟ"}, {"id": "sparkit", "name": "Sparkit", "type": "Electric", "rarity": "Common", "role": "Speed", "base": [34, 42, 30, 45, 33, 72], "glyph": "ϟ"}, {"id": "thundram", "name": "Thundram", "type": "Electric", "rarity": "Rare", "role": "Physical", "base": [58, 72, 53, 42, 44, 38], "glyph": "♈"}, {"id": "arcwing", "name": "Arcwing", "type": "Electric", "rarity": "Rare", "role": "Special", "base": [42, 35, 37, 74, 51, 68], "glyph": "⌁"}, {"id": "breezlet", "name": "Breezlet", "type": "Flying", "rarity": "Common", "role": "Balanced", "base": [38, 41, 36, 42, 38, 58], "glyph": "▲"}, {"id": "galehare", "name": "Galehare", "type": "Flying", "rarity": "Uncommon", "role": "Speed", "base": [44, 48, 37, 39, 40, 75], "glyph": "⋏"}, {"id": "skyrake", "name": "Skyrake", "type": "Flying", "rarity": "Rare", "role": "Offence", "base": [51, 61, 45, 56, 44, 62], "glyph": "≻"}, {"id": "stormowl", "name": "Stormowl", "type": "Flying", "rarity": "Elite", "role": "Special tank", "base": [62, 39, 49, 74, 73, 55], "glyph": "◉"}, {"id": "pebblit", "name": "Pebblit", "type": "Rock", "rarity": "Common", "role": "Defence", "base": [47, 40, 64, 28, 47, 24], "glyph": "◆"}, {"id": "craggoat", "name": "Craggoat", "type": "Rock", "rarity": "Uncommon", "role": "Physical", "base": [54, 64, 59, 30, 42, 35], "glyph": "♑"}, {"id": "gemscarab", "name": "Gemscarab", "type": "Rock", "rarity": "Rare", "role": "Defensive", "base": [53, 37, 76, 45, 68, 25], "glyph": "◇"}, {"id": "titanox", "name": "Titanox", "type": "Rock", "rarity": "Elite", "role": "Tank", "base": [82, 74, 81, 28, 60, 18], "glyph": "♉"}];
const MOVES = {"Scratch": {"type": "Neutral", "power": 35, "acc": 100}, "Quick Jab": {"type": "Neutral", "power": 30, "acc": 100}, "Guard Break": {"type": "Neutral", "power": 50, "acc": 90}, "Ember Bite": {"type": "Fire", "power": 45, "acc": 100}, "Flame Rush": {"type": "Fire", "power": 60, "acc": 90}, "Heat Wave": {"type": "Fire", "power": 70, "acc": 85}, "Water Jet": {"type": "Water", "power": 45, "acc": 100}, "Tidal Slam": {"type": "Water", "power": 60, "acc": 90}, "Bubble Burst": {"type": "Water", "power": 55, "acc": 95}, "Leaf Swipe": {"type": "Grass", "power": 45, "acc": 100}, "Vine Lash": {"type": "Grass", "power": 60, "acc": 90}, "Spore Burst": {"type": "Grass", "power": 55, "acc": 95}, "Spark Snap": {"type": "Electric", "power": 45, "acc": 100}, "Volt Rush": {"type": "Electric", "power": 60, "acc": 90}, "Arc Pulse": {"type": "Electric", "power": 70, "acc": 85}, "Gust": {"type": "Flying", "power": 45, "acc": 100}, "Sky Dive": {"type": "Flying", "power": 60, "acc": 90}, "Wind Cutter": {"type": "Flying", "power": 55, "acc": 95}, "Stone Toss": {"type": "Rock", "power": 45, "acc": 100}, "Rock Ram": {"type": "Rock", "power": 60, "acc": 90}, "Crystal Crash": {"type": "Rock", "power": 70, "acc": 85}};
const LEARNSETS = {"cindercub": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "ashbit": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "magmole": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "flarewing": [[1, "Scratch"], [3, "Ember Bite"], [8, "Quick Jab"], [12, "Flame Rush"], [20, "Guard Break"], [28, "Heat Wave"]], "ripplet": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "bubbfin": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "cragclaw": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "abyssquid": [[1, "Scratch"], [3, "Water Jet"], [8, "Quick Jab"], [12, "Bubble Burst"], [20, "Guard Break"], [28, "Tidal Slam"]], "spriglet": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "mossbug": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "vineape": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "bloomhorn": [[1, "Scratch"], [3, "Leaf Swipe"], [8, "Quick Jab"], [12, "Spore Burst"], [20, "Guard Break"], [28, "Vine Lash"]], "voltpup": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "sparkit": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "thundram": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "arcwing": [[1, "Scratch"], [3, "Spark Snap"], [8, "Quick Jab"], [12, "Volt Rush"], [20, "Guard Break"], [28, "Arc Pulse"]], "breezlet": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "galehare": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "skyrake": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "stormowl": [[1, "Scratch"], [3, "Gust"], [8, "Quick Jab"], [12, "Wind Cutter"], [20, "Guard Break"], [28, "Sky Dive"]], "pebblit": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]], "craggoat": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]], "gemscarab": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]], "titanox": [[1, "Scratch"], [3, "Stone Toss"], [8, "Quick Jab"], [12, "Rock Ram"], [20, "Guard Break"], [28, "Crystal Crash"]]};
const MAP = ["TTTTPTTTT", "TTTGPGGGT", "TGPPPPPGT", "TGPGHPPGT", "TGPPPPPGT", "TGGPPGGGT", "TGGGPGGGT", "TTTPPPTTT", "TTTTTTTTT"];
const SPRITES = {
  cindercub:"sprites/cindercub.png",
  ripplet:"sprites/ripplet.png",
  spriglet:"sprites/spriglet.png",
  ashbit:"sprites/ashbit.png",
  bubbfin:"sprites/bubbfin.png",
  mossbug:"sprites/mossbug.png",
  sparkit:"sprites/sparkit.png",
  breezlet:"sprites/breezlet.png",
  pebblit:"sprites/pebblit.png",
  voltpup:"sprites/voltpup.png",
  vineape:"sprites/vineape.png",
  craggoat:"sprites/craggoat.png"
};

const STARTERS = ["cindercub","ripplet","spriglet"];
const SAVE_KEY = "runebeasts-v01";
let state = {party:[], collection:{}, shards:100, wins:0, captures:0, pos:{x:4,y:4}, steps:0};
let battle = null;

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const B = id => BEASTS.find(x => x.id === id);
const clamp = (v,a,b) => Math.max(a, Math.min(b, v));
const xpNeed = lv => 30 + lv*20;
const typeColors = {Fire:"#b94b39",Water:"#3678bb",Grass:"#4e8c49",Electric:"#b69525",Flying:"#687fb8",Rock:"#786f67",Neutral:"#54617c"};

function maxHp(m){ return Math.round(B(m.id).base[0]*0.7 + m.level*5 + 20); }
function stats(m){
  let b = B(m.id).base;
  return [maxHp(m), ...b.slice(1).map(v => Math.round(v*0.65 + m.level*2))];
}
function knownMoves(m){
  const ls = LEARNSETS[m.id] || [[1,"Scratch"]];
  return ls.filter(([lv]) => lv <= m.level).map(x => x[1]).slice(-4);
}
function makeMon(id, level){
  const m = {uid:String(Date.now())+Math.random(), id, level, xp:0, hp:0};
  m.hp = maxHp(m);
  return m;
}
function normaliseState(){
  state.party = Array.isArray(state.party) ? state.party : [];
  state.collection = state.collection || {};
  state.shards = Number.isFinite(+state.shards) ? +state.shards : 100;
  state.wins = state.wins || 0;
  state.captures = state.captures || 0;
  state.steps = state.steps || 0;
  state.pos = state.pos || {x:4,y:4};
  state.party.forEach(m => {
    m.level = m.level || 1;
    m.xp = m.xp || 0;
    if(!Number.isFinite(m.hp)) m.hp = maxHp(m);
    m.hp = clamp(m.hp, 0, maxHp(m));
  });
}
function save(){ normaliseState(); localStorage.setItem(SAVE_KEY, JSON.stringify(state)); renderWorld(); }
function load(){
  const raw = localStorage.getItem(SAVE_KEY);
  if(!raw) return false;
  try { state = JSON.parse(raw); normaliseState(); return true; } catch(e){ return false; }
}

function typeTag(t){ return `<span class="typeTag" style="background:${typeColors[t]||typeColors.Neutral}">${t}</span>`; }
function creatureArt(id, size="md"){
  if(SPRITES[id]){
    const cls = size === "lg" ? "sprite-lg" : size === "sm" ? "sprite-sm" : "sprite-md";
    return `<img class="creatureImg ${cls}" src="${SPRITES[id]}" alt="${B(id).name}">`;
  }
  const cls = size === "lg" ? "" : size === "sm" ? " sm" : " md";
  return `<div class="fallbackSprite${cls}">${B(id).glyph}</div>`;
}

function showScreen(id){
  $$(".screen").forEach(el => el.classList.remove("active"));
  const screen = $("#"+id);
  if(screen) screen.classList.add("active");

  $$(".bottomNav button").forEach(btn => btn.classList.toggle("active", btn.dataset.screen === id));

  if(id === "partyScreen") renderParty();
  if(id === "dexScreen") renderDex();
  if(id === "profileScreen") renderSaveStats();
  if(id === "worldScreen") renderWorld();
}

function renderStarters(){
  $("#starterChoices").innerHTML = STARTERS.map(id => {
    const b = B(id);
    const temp = makeMon(id,5);
    return `<div class="starterCard">
      <div class="artWrap">${creatureArt(id, "lg")}</div>
      <h3>${b.name}</h3>
      ${typeTag(b.type)}
      <div class="muted">${b.role}</div>
      <div class="movesList">Moves: ${knownMoves(temp).join(" · ")}</div>
      <button class="primary big chooseStarter" data-id="${id}">CHOOSE</button>
    </div>`;
  }).join("");

  $$(".chooseStarter").forEach(btn => btn.onclick = () => {
    const mon = makeMon(btn.dataset.id, 5);
    state = {party:[mon], collection:{[mon.id]:true}, shards:100, wins:0, captures:0, pos:{x:4,y:4}, steps:0};
    save();
    showScreen("worldScreen");
  });
}

function tileAt(x,y){ return (MAP[y] && MAP[y][x]) ? MAP[y][x] : "T"; }

function renderMap(){
  const map = $("#map");
  let html = "";
  for(let y=0; y<MAP.length; y++){
    for(let x=0; x<MAP[y].length; x++){
      const c = MAP[y][x];
      const walkable = c !== "T";
      const cls = c === "G" ? "grass" : c === "P" ? "path" : c === "H" ? "heal" : "block";
      const player = (state.pos.x === x && state.pos.y === y) ? `<div class="playerToken"></div>` : "";
      html += `<button class="mapTile ${cls} ${walkable ? 'walkable' : ''}" data-x="${x}" data-y="${y}" aria-label="${cls}">${player}</button>`;
    }
  }
  map.innerHTML = html;
  $$(".mapTile.walkable").forEach(tile => tile.onclick = () => {
    const x = +tile.dataset.x, y = +tile.dataset.y;
    const dx = x - state.pos.x, dy = y - state.pos.y;
    if(Math.abs(dx) + Math.abs(dy) === 1) movePlayer(dx, dy);
  });
}

function renderWorld(){
  if(!$("#shards")) return;
  renderMap();
  $("#shards").textContent = state.shards;
  $("#partyCount").textContent = `${state.party.length} / 6`;
  $("#partyMini").innerHTML = state.party.map((m,i) =>
    `<div class="partyMiniRow"><span>${i===0 ? "★ " : ""}${B(m.id).name} Lv${m.level} · ${m.hp}/${maxHp(m)} HP</span><span>${typeTag(B(m.id).type)}</span></div>`
  ).join("");
}

function healParty(message=true){
  state.party.forEach(m => m.hp = maxHp(m));
  save();
  if(message) $("#worldText").textContent = "Your party rested at the Rune Spring.";
}

function movePlayer(dx, dy){
  if(battle) return;
  const nx = state.pos.x + dx;
  const ny = state.pos.y + dy;
  const tile = tileAt(nx, ny);
  if(tile === "T") {
    $("#worldText").textContent = "You can't go that way.";
    return;
  }
  state.pos = {x:nx, y:ny};
  state.steps += 1;

  if(tile === "P") $("#worldText").textContent = "You follow the path.";
  if(tile === "G") $("#worldText").textContent = "Tall grass sways around you...";
  if(tile === "H"){
    healParty(false);
    $("#worldText").textContent = "A healing spring restored your party.";
  }

  save();
  if(tile === "G" && Math.random() < 0.18){
    setTimeout(() => startBattle(pickEncounter()), 140);
  }
}

function pickEncounter(){
  const pool = BEASTS.filter(b => !["Starter","Elite"].includes(b.rarity));
  const weighted = [];
  const weights = {Common:7, Uncommon:3, Rare:1};
  pool.forEach(b => {
    for(let i=0; i<(weights[b.rarity] || 1); i++) weighted.push(b);
  });
  return weighted[Math.floor(Math.random() * weighted.length)];
}

function startBattle(beast){
  if(!state.party.length) return;
  let lead = state.party.findIndex(m => m.hp > 0);
  if(lead < 0){
    healParty(false);
    lead = 0;
  }
  battle = {enemy: makeMon(beast.id, 2 + Math.floor(Math.random()*7)), active:lead, lock:false};
  state.collection[beast.id] = true;
  save();
  closeSubmenus();
  drawBattle();
  showScreen("battleScreen");
  setBattleText(`A wild ${beast.name} appeared!`);
}

function activeMon(){ return battle ? state.party[battle.active] : null; }
function typeMod(attType, defType){
  if(attType === "Neutral") return 1;
  if(TYPES[attType] && TYPES[attType].strong === defType) return 1.5;
  if(TYPES[attType] && TYPES[attType].weak === defType) return 0.67;
  return 1;
}
function calcDamage(attacker, defender, moveName){
  const mv = MOVES[moveName] || MOVES["Scratch"];
  const as = stats(attacker), ds = stats(defender);
  const stab = mv.type === B(attacker.id).type ? 1.15 : 1;
  const mod = typeMod(mv.type, B(defender.id).type);
  const raw = ((attacker.level*0.6 + 3) * mv.power * (as[1] / Math.max(1, ds[2])) / 45) + 2;
  return {
    damage: Math.max(1, Math.round(raw * stab * mod * (0.9 + Math.random()*0.2))),
    mod,
    hit: Math.random()*100 < mv.acc
  };
}

function drawBattle(){
  if(!battle) return;
  const p = activeMon(), e = battle.enemy;
  if(!p || !e) return;
  $("#enemyName").textContent = B(e.id).name;
  $("#enemyLevel").textContent = `Lv ${e.level}`;
  $("#enemyType").innerHTML = typeTag(B(e.id).type);
  $("#playerName").textContent = B(p.id).name;
  $("#playerLevel").textContent = `Lv ${p.level}`;
  $("#playerType").innerHTML = typeTag(B(p.id).type);
  $("#enemySprite").innerHTML = `<div class="battleSprite">${creatureArt(e.id, "lg")}</div>`;
  $("#playerSprite").innerHTML = `<div class="battleSprite">${creatureArt(p.id, "lg")}</div>`;
  $("#enemyHpBar").style.width = `${clamp(100 * e.hp / maxHp(e), 0, 100)}%`;
  $("#playerHpBar").style.width = `${clamp(100 * p.hp / maxHp(p), 0, 100)}%`;
  $("#playerHpText").textContent = `${p.hp}/${maxHp(p)} HP`;
}

function setBattleText(t){ $("#battleText").textContent = t; }
function lockBattle(v){
  if(!battle) return;
  battle.lock = v;
  $$("#battleScreen button").forEach(btn => { btn.disabled = v; });
  $("#cancelBattleSubmenu").disabled = false;
}

function closeSubmenus(){
  $("#movesMenu").classList.add("hidden");
  $("#switchMenu").classList.add("hidden");
  $("#cancelBattleSubmenu").classList.add("hidden");
  $("#mainBattleMenu").classList.remove("hidden");
}

function showMoves(){
  if(!battle || battle.lock) return;
  const p = activeMon();
  $("#movesMenu").innerHTML = knownMoves(p).map(name => {
    const mv = MOVES[name];
    return `<button class="moveBtn" data-move="${name}">
      <b>${name}</b>
      <small>${mv.type} · POW ${mv.power} · ACC ${mv.acc}</small>
    </button>`;
  }).join("");
  $("#mainBattleMenu").classList.add("hidden");
  $("#movesMenu").classList.remove("hidden");
  $("#cancelBattleSubmenu").classList.remove("hidden");
  $$(".moveBtn").forEach(btn => btn.onclick = () => useMove(btn.dataset.move));
}

function useMove(name){
  if(!battle || battle.lock) return;
  closeSubmenus();
  lockBattle(true);
  const p = activeMon(), e = battle.enemy;
  const result = calcDamage(p, e, name);
  if(!result.hit){
    setBattleText(`${B(p.id).name} used ${name}, but missed!`);
    setTimeout(enemyTurn, 650);
    return;
  }
  e.hp = Math.max(0, e.hp - result.damage);
  setBattleText(`${B(p.id).name} used ${name}! ${result.damage} damage.${result.mod > 1 ? " Super effective!" : result.mod < 1 ? " Not very effective." : ""}`);
  drawBattle();
  setTimeout(() => e.hp <= 0 ? winBattle() : enemyTurn(), 700);
}

function enemyTurn(){
  if(!battle) return;
  const p = activeMon();
  const e = battle.enemy;
  if(!p || p.hp <= 0){ handleFaint(); return; }
  const choices = knownMoves(e);
  const name = choices[Math.floor(Math.random() * choices.length)] || "Scratch";
  const result = calcDamage(e, p, name);
  if(!result.hit){
    setBattleText(`${B(e.id).name} used ${name}, but missed!`);
    setTimeout(() => lockBattle(false), 500);
    return;
  }
  p.hp = Math.max(0, p.hp - result.damage);
  setBattleText(`${B(e.id).name} used ${name}! ${result.damage} damage.`);
  drawBattle();
  save();
  setTimeout(() => p.hp <= 0 ? handleFaint() : lockBattle(false), 650);
}

function handleFaint(){
  if(!battle) return;
  const current = activeMon();
  if(current) setBattleText(`${B(current.id).name} fainted!`);
  const next = state.party.findIndex((m, i) => i !== battle.active && m.hp > 0);
  if(next < 0){
    setTimeout(() => {
      battle = null;
      healParty(false);
      showScreen("worldScreen");
      $("#worldText").textContent = "Your party recovered at the Rune Spring.";
    }, 800);
  } else {
    setTimeout(() => {
      battle.active = next;
      drawBattle();
      setBattleText(`${B(activeMon().id).name} steps in!`);
      lockBattle(false);
    }, 650);
  }
}

function winBattle(){
  if(!battle) return;
  const p = activeMon();
  const gain = 18 + battle.enemy.level * 8;
  p.xp += gain;
  state.wins += 1;
  state.shards += 8;
  while(p.level < 50 && p.xp >= xpNeed(p.level)){
    p.xp -= xpNeed(p.level);
    p.level += 1;
    p.hp = maxHp(p);
  }
  setBattleText(`Victory! ${B(p.id).name} gained ${gain} XP.`);
  battle = null;
  save();
  setTimeout(() => showScreen("worldScreen"), 1000);
}

function attemptCapture(){
  if(!battle || battle.lock) return;
  if(state.party.length >= 6){ setBattleText("Your party is full."); return; }
  if(state.shards < 10){ setBattleText("You need 10 Rune Shards."); return; }
  lockBattle(true);
  state.shards -= 10;
  const e = battle.enemy;
  const baseChance = {Common:0.58, Uncommon:0.44, Rare:0.30, Elite:0.18}[B(e.id).rarity] || 0.4;
  const chance = clamp(baseChance + (1 - e.hp / maxHp(e)) * 0.45, 0.12, 0.9);
  if(Math.random() < chance){
    state.party.push(e);
    state.collection[e.id] = true;
    state.captures += 1;
    setBattleText(`${B(e.id).name} was bound to your rune!`);
    battle = null;
    save();
    setTimeout(() => showScreen("worldScreen"), 950);
  } else {
    setBattleText(`${B(e.id).name} broke free!`);
    save();
    setTimeout(enemyTurn, 650);
  }
}

function showSwitch(){
  if(!battle || battle.lock) return;
  $("#switchMenu").innerHTML = state.party.map((m, i) =>
    `<button class="switchChoice" data-i="${i}" ${i === battle.active || m.hp <= 0 ? "disabled" : ""}>
      <span>${B(m.id).name} Lv${m.level}</span><span>${m.hp}/${maxHp(m)} HP</span>
    </button>`
  ).join("");
  $("#mainBattleMenu").classList.add("hidden");
  $("#switchMenu").classList.remove("hidden");
  $("#cancelBattleSubmenu").classList.remove("hidden");
  $$(".switchChoice").forEach(btn => btn.onclick = () => switchTo(+btn.dataset.i));
}

function switchTo(i){
  if(!battle || battle.lock || i === battle.active || state.party[i].hp <= 0) return;
  closeSubmenus();
  battle.active = i;
  drawBattle();
  setBattleText(`${B(activeMon().id).name}, you're up!`);
  lockBattle(true);
  setTimeout(enemyTurn, 650);
}

function runAway(){
  if(!battle || battle.lock) return;
  if(Math.random() < 0.85){
    setBattleText("You escaped safely.");
    battle = null;
    setTimeout(() => showScreen("worldScreen"), 450);
  } else {
    setBattleText("Couldn't escape!");
    lockBattle(true);
    setTimeout(enemyTurn, 550);
  }
}

function renderParty(){
  $("#partyList").innerHTML = state.party.map((m, i) => {
    const b = B(m.id);
    const pct = clamp(m.xp / xpNeed(m.level) * 100, 0, 100);
    return `<div class="partyCard">
      <div class="headRow">
        <div class="leftHead">${creatureArt(m.id, "md")}<div><b>${b.name}</b><div>${typeTag(b.type)}</div></div></div>
        <b>Lv ${m.level}</b>
      </div>
      <div class="stats">HP ${m.hp}/${maxHp(m)} · ATK ${stats(m)[1]} · DEF ${stats(m)[2]} · SP.ATK ${stats(m)[3]} · SP.DEF ${stats(m)[4]} · SPD ${stats(m)[5]}</div>
      <div class="movesList">Moves: ${knownMoves(m).join(" · ")}</div>
      <div class="xp"><i style="width:${pct}%"></i></div>
      <small>XP ${m.xp}/${xpNeed(m.level)}</small>
      ${i ? `<button class="secondary makeLead" data-i="${i}">MAKE LEAD</button>` : `<div style="margin-top:8px"><b>LEAD BEAST</b></div>`}
    </div>`;
  }).join("");

  $$(".makeLead").forEach(btn => btn.onclick = () => {
    const i = +btn.dataset.i;
    const picked = state.party.splice(i,1)[0];
    state.party.unshift(picked);
    save();
    renderParty();
  });
}

function renderDex(){
  const seen = BEASTS.filter(b => state.collection[b.id]).length;
  $("#dexProgress").textContent = `${seen} / ${BEASTS.length} discovered`;
  $("#dexList").innerHTML = BEASTS.map((b, i) => {
    const discovered = !!state.collection[b.id];
    return `<div class="dexCard ${discovered ? 'seen' : ''}">
      <div class="dexTop"><small>#${String(i+1).padStart(3, "0")}</small>${discovered ? creatureArt(b.id, "sm") : `<div class="fallbackSprite sm">?</div>`}</div>
      <b>${discovered ? b.name : "?????"}</b><br>
      ${discovered ? typeTag(b.type) : ""}
      <div><small>${discovered ? `${b.rarity} · ${b.role}` : "Undiscovered"}</small></div>
    </div>`;
  }).join("");
}

function renderSaveStats(){
  $("#saveStats").innerHTML = `
    <p>Wins: <b>${state.wins}</b></p>
    <p>Captured: <b>${state.captures}</b></p>
    <p>Discovered: <b>${Object.keys(state.collection).length}/${BEASTS.length}</b></p>
    <p>Steps: <b>${state.steps}</b></p>
    <p>Rune Shards: <b>${state.shards}</b></p>`;
}

// Event wiring
$("#newGameBtn").onclick = () => { renderStarters(); showScreen("starterScreen"); };
$("#continueBtn").onclick = () => showScreen("worldScreen");
$("#movesBtn").onclick = showMoves;
$("#captureBtn").onclick = attemptCapture;
$("#switchBtn").onclick = showSwitch;
$("#runBtn").onclick = runAway;
$("#cancelBattleSubmenu").onclick = closeSubmenus;
$("#healBtn").onclick = () => { healParty(false); alert("Party restored."); };
$("#manualSaveBtn").onclick = () => { save(); alert("Game saved."); };
$("#resetBtn").onclick = () => { if(confirm("Delete all Rune Beasts progress?")){ localStorage.removeItem(SAVE_KEY); location.reload(); } };

$$("[data-screen]").forEach(btn => btn.onclick = () => showScreen(btn.dataset.screen));
$$("[data-dir]").forEach(btn => btn.onclick = () => {
  const dir = btn.dataset.dir;
  const dx = dir === "left" ? -1 : dir === "right" ? 1 : 0;
  const dy = dir === "up" ? -1 : dir === "down" ? 1 : 0;
  movePlayer(dx, dy);
});

document.addEventListener("keydown", e => {
  if(!$("#worldScreen").classList.contains("active")) return;
  const map = {ArrowUp:[0,-1], ArrowDown:[0,1], ArrowLeft:[-1,0], ArrowRight:[1,0]};
  if(map[e.key]) {
    e.preventDefault();
    movePlayer(...map[e.key]);
  }
});

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

load();
$("#continueBtn").classList.toggle("hidden", !localStorage.getItem(SAVE_KEY));
renderWorld();
