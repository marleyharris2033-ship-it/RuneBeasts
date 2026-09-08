
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
const SAVE_KEY = "runebeasts-v04";
const STARTERS = ["cindercub","ripplet","spriglet"];

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

const PLAYER_FRAMES = {
  down:["assets/player/down_0.png","assets/player/down_1.png"],
  up:["assets/player/up_0.png","assets/player/up_1.png"],
  left:["assets/player/left_0.png","assets/player/left_1.png"],
  right:["assets/player/right_0.png","assets/player/right_1.png"]
};

let state = {
  party:[], collection:{}, shards:100, wins:0, captures:0, steps:0,
  pos:{x:520, y:380}, dir:"down"
};
let battle = null;

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const beastBy = id => BEASTS.find(b => b.id === id);
const clamp = (v,a,b) => Math.max(a, Math.min(b, v));
const xpNeed = lv => 30 + lv*20;
const typeColors = {Fire:"#b94b39",Water:"#3678bb",Grass:"#4e8c49",Electric:"#b69525",Flying:"#687fb8",Rock:"#786f67",Neutral:"#596680"};

function maxHp(m){ return Math.round(beastBy(m.id).base[0]*0.7 + m.level*5 + 20); }
function statsFor(m){
  const b = beastBy(m.id).base;
  return [maxHp(m), ...b.slice(1).map(v => Math.round(v*0.65 + m.level*2))];
}
function knownMoves(m){
  const set = LEARNSETS[m.id] || [[1,"Scratch"]];
  return set.filter(([lv]) => lv <= m.level).map(x => x[1]).slice(-4);
}
function makeMon(id, level){
  const m = {uid:String(Date.now()) + Math.random(), id, level, xp:0, hp:0};
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
  state.pos = state.pos || {x:520,y:380};
  state.dir = state.dir || "down";
  state.party.forEach(m => {
    m.level = m.level || 1;
    m.xp = m.xp || 0;
    m.hp = Number.isFinite(m.hp) ? clamp(m.hp, 0, maxHp(m)) : maxHp(m);
  });
}
function save(){
  normaliseState();
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  renderWorldPanels();
}
function load(){
  const raw = localStorage.getItem(SAVE_KEY);
  if(!raw) return false;
  try { state = JSON.parse(raw); normaliseState(); return true; }
  catch(e){ return false; }
}

function typeTag(type){ return `<span class="typeTag" style="background:${typeColors[type]||typeColors.Neutral}">${type}</span>`; }
function creatureArt(id, size="md"){
  const b = beastBy(id);
  const path = SPRITES[id];
  if(path){
    const cls = size==="lg" ? "sprite-lg" : size==="sm" ? "sprite-sm" : "sprite-md";
    return `<img class="creatureImg ${cls}" src="${path}" alt="${b.name}" loading="eager">`;
  }
  const cls = size==="lg" ? "" : size==="sm" ? " sm" : " md";
  return `<div class="fallbackSprite${cls}">${b.glyph}</div>`;
}

function showScreen(id){
  $$(".screen").forEach(el => el.classList.remove("active"));
  const target = $("#"+id);
  if(target) target.classList.add("active");
  $$(".bottomNav button").forEach(btn => btn.classList.toggle("active", btn.dataset.screen === id));
  if(id === "partyScreen") renderParty();
  if(id === "dexScreen") renderDex();
  if(id === "profileScreen") renderSaveStats();
  if(id === "worldScreen") renderWorldPanels();
}

function renderStarters(){
  $("#starterChoices").innerHTML = STARTERS.map(id => {
    const beast = beastBy(id);
    const temp = makeMon(id, 5);
    return `<div class="card">
      <div class="spriteWrap">${creatureArt(id, "lg")}</div>
      <h3>${beast.name}</h3>
      ${typeTag(beast.type)}
      <div class="muted">${beast.role}</div>
      <div class="movesList">Moves: ${knownMoves(temp).join(" · ")}</div>
      <button class="primary big chooseStarter" data-id="${id}">Choose</button>
    </div>`;
  }).join("");
  $$(".chooseStarter").forEach(btn => btn.onclick = () => {
    const mon = makeMon(btn.dataset.id, 5);
    state = {party:[mon], collection:{[mon.id]:true}, shards:100, wins:0, captures:0, steps:0, pos:{x:520,y:380}, dir:"down"};
    save();
    showScreen("worldScreen");
  });
}

function renderWorldPanels(){
  if(!$("#shards")) return;
  $("#shards").textContent = state.shards;
  $("#partyCount").textContent = `${state.party.length} / 6`;
  $("#partyMini").innerHTML = state.party.map((m,i) =>
    `<div class="partyMiniRow"><span>${i===0?"★ ":""}${beastBy(m.id).name} Lv${m.level} · ${m.hp}/${maxHp(m)} HP</span><span>${typeTag(beastBy(m.id).type)}</span></div>`
  ).join("");
}

function renderParty(){
  $("#partyList").innerHTML = state.party.map((m,i) => {
    const b = beastBy(m.id);
    const pct = clamp(m.xp / xpNeed(m.level) * 100, 0, 100);
    return `<div class="card partyCard">
      <div class="head">
        <div class="lhs">${creatureArt(m.id, "md")}<div><b>${b.name}</b><div>${typeTag(b.type)}</div></div></div>
        <b>Lv ${m.level}</b>
      </div>
      <div class="stats">HP ${m.hp}/${maxHp(m)} · ATK ${statsFor(m)[1]} · DEF ${statsFor(m)[2]} · SP.ATK ${statsFor(m)[3]} · SP.DEF ${statsFor(m)[4]} · SPD ${statsFor(m)[5]}</div>
      <div class="movesList">Moves: ${knownMoves(m).join(" · ")}</div>
      <div class="xpBar"><i style="width:${pct}%"></i></div>
      <small>XP ${m.xp}/${xpNeed(m.level)}</small>
      ${i ? `<button class="secondary makeLead" data-i="${i}">Make Lead</button>` : `<div class="movesList"><b>Lead Beast</b></div>`}
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
  $("#dexList").innerHTML = BEASTS.map((b,i) => {
    const discovered = !!state.collection[b.id];
    return `<div class="card">
      <div class="spriteWrap">${discovered ? creatureArt(b.id, "sm") : `<div class="fallbackSprite sm">?</div>`}</div>
      <small>#${String(i+1).padStart(3,"0")}</small>
      <div><b>${discovered ? b.name : "?????"}</b></div>
      <div>${discovered ? typeTag(b.type) : ""}</div>
      <small>${discovered ? `${b.rarity} · ${b.role}` : "Undiscovered"}</small>
    </div>`;
  }).join("");
}

function renderSaveStats(){
  $("#saveStats").innerHTML = `
    <p>Wins: <b>${state.wins}</b></p>
    <p>Captured: <b>${state.captures}</b></p>
    <p>Discovered: <b>${Object.keys(state.collection).length}/${BEASTS.length}</b></p>
    <p>Steps: <b>${state.steps}</b></p>
    <p>Rune Shards: <b>${state.shards}</b></p>
  `;
}

/* ---------- Overworld engine ---------- */
const canvas = document.getElementById("worldCanvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

const mapImage = new Image();
mapImage.src = "route_map.png";

const playerImages = {};
for(const [dir, frames] of Object.entries(PLAYER_FRAMES)){
  playerImages[dir] = frames.map(src => {
    const img = new Image();
    img.src = src;
    return img;
  });
}
const creatureImages = {};
for(const [id, src] of Object.entries(SPRITES)){
  const img = new Image();
  img.src = src;
  creatureImages[id] = img;
}

const world = {
  width: 1040,
  height: 780,
  playerSpeed: 105,
  playerSize: 28,
  camera:{x:0,y:0},
  frameTimer:0,
  walkFrame:0,
  encounterDistance:0,
  lastTime:0,
  running:false
};

const input = {up:false,down:false,left:false,right:false};

function rectsIntersect(a,b){
  return a.x < b.x+b.w && a.x+a.w > b.x && a.y < b.y+b.h && a.y+a.h > b.y;
}
function playerRect(x=state.pos.x,y=state.pos.y){
  return {x:x-10, y:y-14, w:20, h:24};
}
function getCollisionRects(){
  const w = world.width, h = world.height;
  return [
    // House
    {x:w*0.20, y:h*0.20, w:w*0.24, h:h*0.20},
    // Top left tree mass
    {x:w*0.00, y:h*0.00, w:w*0.42, h:h*0.18},
    // Top right tree mass
    {x:w*0.72, y:h*0.00, w:w*0.28, h:h*0.38},
    // Left forest strip
    {x:w*0.00, y:h*0.18, w:w*0.10, h:h*0.64},
    // Bottom forest strip
    {x:w*0.00, y:h*0.82, w:w*1.00, h:h*0.18},
    // Right forest lower strip
    {x:w*0.86, y:h*0.38, w:w*0.14, h:h*0.44},
    // Pond
    {x:w*0.72, y:h*0.60, w:w*0.17, h:h*0.18},
    // Mid left shrub block
    {x:w*0.00, y:h*0.62, w:w*0.16, h:h*0.15},
    // Mid right crop block
    {x:w*0.88, y:h*0.42, w:w*0.12, h:h*0.18}
  ];
}
function getGrassZones(){
  const w = world.width, h = world.height;
  return [
    {x:w*0.00, y:h*0.53, w:w*0.18, h:h*0.25},
    {x:w*0.88, y:h*0.39, w:w*0.12, h:h*0.20},
    {x:w*0.88, y:h*0.21, w:w*0.09, h:h*0.14},
    {x:w*0.79, y:h*0.37, w:w*0.07, h:h*0.08}
  ];
}
function getHealingZone(){
  const w = world.width, h = world.height;
  return {x:w*0.31, y:h*0.36, w:w*0.06, h:h*0.05}; // near front door area
}
function inZone(rect, zones){
  return zones.some(z => rectsIntersect(rect, z));
}
function healParty(say=true){
  state.party.forEach(m => m.hp = maxHp(m));
  if(say) $("#worldText").textContent = "Your party rested at the Meadow House.";
  save();
}
function movePlayer(dx, dy){
  const cols = getCollisionRects();
  let newX = state.pos.x + dx;
  let newY = state.pos.y + dy;

  const rx = playerRect(newX, state.pos.y);
  if(rx.x >= 0 && rx.x+rx.w <= world.width && !cols.some(c => rectsIntersect(rx,c))) state.pos.x = newX;
  const ry = playerRect(state.pos.x, newY);
  if(ry.y >= 0 && ry.y+ry.h <= world.height && !cols.some(c => rectsIntersect(ry,c))) state.pos.y = newY;

  if(dx || dy){
    state.steps += Math.abs(dx)+Math.abs(dy) > 0 ? 1 : 0;
  }
  const rect = playerRect();
  if(rectsIntersect(rect, getHealingZone())){
    healParty(false);
    $("#worldText").textContent = "The Meadow House restored your party.";
  } else if(inZone(rect, getGrassZones())){
    $("#worldText").textContent = "You push through the tall grass...";
  } else {
    $("#worldText").textContent = "You walk through Runevale Meadow.";
  }
}
function updateOverworld(dt){
  if(!$("#worldScreen").classList.contains("active") || battle) return;

  let vx = 0, vy = 0;
  if(input.left) vx -= 1;
  if(input.right) vx += 1;
  if(input.up) vy -= 1;
  if(input.down) vy += 1;

  const moving = vx !== 0 || vy !== 0;
  if(moving){
    const len = Math.hypot(vx, vy) || 1;
    vx /= len; vy /= len;
    if(Math.abs(vx) > Math.abs(vy)) state.dir = vx > 0 ? "right" : "left";
    else state.dir = vy > 0 ? "down" : "up";

    movePlayer(vx * world.playerSpeed * dt, vy * world.playerSpeed * dt);
    world.frameTimer += dt;
    world.encounterDistance += world.playerSpeed * dt;

    if(world.frameTimer > 0.18){
      world.walkFrame = (world.walkFrame + 1) % 2;
      world.frameTimer = 0;
    }

    const rect = playerRect();
    if(inZone(rect, getGrassZones()) && world.encounterDistance > 38 && Math.random() < 0.05){
      world.encounterDistance = 0;
      startBattle(pickEncounter());
      return;
    }
  } else {
    world.walkFrame = 0;
    world.frameTimer = 0;
  }

  world.camera.x = clamp(state.pos.x - canvas.width/2, 0, world.width - canvas.width);
  world.camera.y = clamp(state.pos.y - canvas.height/2, 0, world.height - canvas.height);
}
function drawOverworld(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  if(mapImage.complete){
    ctx.drawImage(mapImage, world.camera.x, world.camera.y, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
  } else {
    ctx.fillStyle = "#2a3b5f";
    ctx.fillRect(0,0,canvas.width,canvas.height);
  }

  const img = playerImages[state.dir][world.walkFrame] || playerImages.down[0];
  const screenX = Math.round(state.pos.x - world.camera.x - world.playerSize);
  const screenY = Math.round(state.pos.y - world.camera.y - world.playerSize);
  if(img && img.complete){
    ctx.drawImage(img, screenX, screenY, world.playerSize*2, world.playerSize*2);
  } else {
    ctx.fillStyle = "#ff5f5f";
    ctx.fillRect(screenX+16, screenY+16, 16, 16);
  }
}
function gameLoop(ts){
  if(!world.lastTime) world.lastTime = ts;
  const dt = Math.min(0.033, (ts - world.lastTime)/1000);
  world.lastTime = ts;
  updateOverworld(dt);
  drawOverworld();
  requestAnimationFrame(gameLoop);
}

/* ---------- Battle system ---------- */
function pickEncounter(){
  const pool = BEASTS.filter(b => !["Starter","Elite"].includes(b.rarity));
  const weighted = [];
  const weights = {Common:7, Uncommon:3, Rare:1};
  pool.forEach(b => {
    for(let i=0;i<(weights[b.rarity]||1);i++) weighted.push(b);
  });
  return weighted[Math.floor(Math.random()*weighted.length)];
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
  const as = statsFor(attacker), ds = statsFor(defender);
  const stab = mv.type === beastBy(attacker.id).type ? 1.15 : 1;
  const mod = typeMod(mv.type, beastBy(defender.id).type);
  const raw = ((attacker.level*0.6 + 3) * mv.power * (as[1] / Math.max(1, ds[2])) / 45) + 2;
  return {
    damage: Math.max(1, Math.round(raw * stab * mod * (0.9 + Math.random()*0.2))),
    mod,
    hit: Math.random()*100 < mv.acc
  };
}
function startBattle(beast){
  let lead = state.party.findIndex(m => m.hp > 0);
  if(lead < 0){
    healParty(false);
    lead = 0;
  }
  battle = {enemy: makeMon(beast.id, 2 + Math.floor(Math.random()*7)), active:lead, locked:false};
  state.collection[beast.id] = true;
  save();
  closeSubmenus();
  renderBattle();
  showScreen("battleScreen");
  setBattleText(`A wild ${beast.name} appeared!`);
}
function renderBattle(){
  if(!battle) return;
  const p = activeMon(), e = battle.enemy;
  if(!p || !e) return;
  $("#enemyName").textContent = beastBy(e.id).name;
  $("#enemyLevel").textContent = `Lv ${e.level}`;
  $("#enemyType").innerHTML = typeTag(beastBy(e.id).type);
  $("#playerName").textContent = beastBy(p.id).name;
  $("#playerLevel").textContent = `Lv ${p.level}`;
  $("#playerType").innerHTML = typeTag(beastBy(p.id).type);
  $("#enemySprite").innerHTML = creatureArt(e.id, "lg");
  $("#playerSprite").innerHTML = creatureArt(p.id, "lg");
  $("#enemyHpBar").style.width = `${clamp(100 * e.hp / maxHp(e), 0, 100)}%`;
  $("#playerHpBar").style.width = `${clamp(100 * p.hp / maxHp(p), 0, 100)}%`;
  $("#playerHpText").textContent = `${p.hp}/${maxHp(p)} HP`;
}
function setBattleText(text){ $("#battleText").textContent = text; }
function setBattleLock(v){
  if(!battle) return;
  battle.locked = v;
  $$("#battleScreen button").forEach(btn => btn.disabled = v);
  $("#cancelBattleSubmenu").disabled = false;
}
function closeSubmenus(){
  $("#movesMenu").classList.add("hidden");
  $("#switchMenu").classList.add("hidden");
  $("#cancelBattleSubmenu").classList.add("hidden");
  $("#mainBattleMenu").classList.remove("hidden");
}
function showMoves(){
  if(!battle || battle.locked) return;
  const p = activeMon();
  $("#movesMenu").innerHTML = knownMoves(p).map(name => {
    const mv = MOVES[name];
    return `<button class="moveChoice" data-move="${name}"><b>${name}</b><small>${mv.type} · POW ${mv.power} · ACC ${mv.acc}</small></button>`;
  }).join("");
  $("#mainBattleMenu").classList.add("hidden");
  $("#movesMenu").classList.remove("hidden");
  $("#cancelBattleSubmenu").classList.remove("hidden");
  $$(".moveChoice").forEach(btn => btn.onclick = () => useMove(btn.dataset.move));
}
function useMove(name){
  if(!battle || battle.locked) return;
  closeSubmenus();
  setBattleLock(true);
  const p = activeMon(), e = battle.enemy;
  const result = calcDamage(p, e, name);
  if(!result.hit){
    setBattleText(`${beastBy(p.id).name} used ${name}, but missed!`);
    setTimeout(enemyTurn, 650);
    return;
  }
  e.hp = Math.max(0, e.hp - result.damage);
  setBattleText(`${beastBy(p.id).name} used ${name}! ${result.damage} damage.${result.mod>1 ? " Super effective!" : result.mod<1 ? " Not very effective." : ""}`);
  renderBattle();
  setTimeout(() => e.hp <= 0 ? winBattle() : enemyTurn(), 700);
}
function enemyTurn(){
  if(!battle) return;
  const p = activeMon(), e = battle.enemy;
  if(!p || p.hp <= 0){ handleFaint(); return; }
  const pool = knownMoves(e);
  const name = pool[Math.floor(Math.random()*pool.length)] || "Scratch";
  const result = calcDamage(e, p, name);
  if(!result.hit){
    setBattleText(`${beastBy(e.id).name} used ${name}, but missed!`);
    setTimeout(() => setBattleLock(false), 450);
    return;
  }
  p.hp = Math.max(0, p.hp - result.damage);
  setBattleText(`${beastBy(e.id).name} used ${name}! ${result.damage} damage.`);
  renderBattle();
  save();
  setTimeout(() => p.hp <= 0 ? handleFaint() : setBattleLock(false), 650);
}
function handleFaint(){
  if(!battle) return;
  const cur = activeMon();
  if(cur) setBattleText(`${beastBy(cur.id).name} fainted!`);
  const next = state.party.findIndex((m,i) => i !== battle.active && m.hp > 0);
  if(next < 0){
    setTimeout(() => {
      battle = null;
      healParty(false);
      showScreen("worldScreen");
      $("#worldText").textContent = "Your party recovered at the Meadow House.";
    }, 800);
  } else {
    setTimeout(() => {
      battle.active = next;
      renderBattle();
      setBattleText(`${beastBy(activeMon().id).name} steps in!`);
      setBattleLock(false);
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
  setBattleText(`Victory! ${beastBy(p.id).name} gained ${gain} XP.`);
  battle = null;
  save();
  setTimeout(() => showScreen("worldScreen"), 850);
}
function attemptCapture(){
  if(!battle || battle.locked) return;
  if(state.party.length >= 6){ setBattleText("Your party is full."); return; }
  if(state.shards < 10){ setBattleText("You need 10 Rune Shards."); return; }
  setBattleLock(true);
  state.shards -= 10;
  const e = battle.enemy;
  const baseChance = {Common:0.58, Uncommon:0.44, Rare:0.30, Elite:0.18}[beastBy(e.id).rarity] || 0.4;
  const chance = clamp(baseChance + (1 - e.hp / maxHp(e)) * 0.45, 0.12, 0.9);
  if(Math.random() < chance){
    state.party.push(e);
    state.collection[e.id] = true;
    state.captures += 1;
    setBattleText(`${beastBy(e.id).name} was bound to your rune!`);
    battle = null;
    save();
    setTimeout(() => showScreen("worldScreen"), 900);
  } else {
    setBattleText(`${beastBy(e.id).name} broke free!`);
    save();
    setTimeout(enemyTurn, 650);
  }
}
function showSwitch(){
  if(!battle || battle.locked) return;
  $("#switchMenu").innerHTML = state.party.map((m,i) =>
    `<button class="switchChoice" data-i="${i}" ${i===battle.active || m.hp<=0 ? "disabled" : ""}>
      <span>${beastBy(m.id).name} Lv${m.level}</span><span>${m.hp}/${maxHp(m)} HP</span>
    </button>`
  ).join("");
  $("#mainBattleMenu").classList.add("hidden");
  $("#switchMenu").classList.remove("hidden");
  $("#cancelBattleSubmenu").classList.remove("hidden");
  $$(".switchChoice").forEach(btn => btn.onclick = () => switchTo(+btn.dataset.i));
}
function switchTo(i){
  if(!battle || battle.locked || i===battle.active || state.party[i].hp<=0) return;
  closeSubmenus();
  battle.active = i;
  renderBattle();
  setBattleText(`${beastBy(activeMon().id).name}, you're up!`);
  setBattleLock(true);
  setTimeout(enemyTurn, 600);
}
function runAway(){
  if(!battle || battle.locked) return;
  if(Math.random() < 0.85){
    setBattleText("You escaped safely.");
    battle = null;
    setTimeout(() => showScreen("worldScreen"), 400);
  } else {
    setBattleText("Couldn't escape!");
    setBattleLock(true);
    setTimeout(enemyTurn, 550);
  }
}

/* ---------- Input wiring ---------- */
function setHeld(dir, held){ input[dir] = held; }
function bindControl(btn){
  const dir = btn.dataset.dir;
  const on = e => { e.preventDefault(); setHeld(dir, true); };
  const off = e => { e.preventDefault(); setHeld(dir, false); };
  btn.addEventListener("pointerdown", on);
  btn.addEventListener("pointerup", off);
  btn.addEventListener("pointerleave", off);
  btn.addEventListener("pointercancel", off);
  btn.addEventListener("touchstart", on, {passive:false});
  btn.addEventListener("touchend", off, {passive:false});
}
document.addEventListener("keydown", e => {
  if(e.key === "ArrowUp") input.up = true;
  if(e.key === "ArrowDown") input.down = true;
  if(e.key === "ArrowLeft") input.left = true;
  if(e.key === "ArrowRight") input.right = true;
});
document.addEventListener("keyup", e => {
  if(e.key === "ArrowUp") input.up = false;
  if(e.key === "ArrowDown") input.down = false;
  if(e.key === "ArrowLeft") input.left = false;
  if(e.key === "ArrowRight") input.right = false;
});

/* ---------- Buttons ---------- */
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
$$(".control").forEach(bindControl);

if("serviceWorker" in navigator){ navigator.serviceWorker.register("sw.js").catch(()=>{}); }

load();
$("#continueBtn").classList.toggle("hidden", !localStorage.getItem(SAVE_KEY));
renderWorldPanels();
requestAnimationFrame(gameLoop);
