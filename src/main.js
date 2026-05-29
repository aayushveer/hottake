/**
 * HotTake — The Opinion Arena
 * Premium MVP: Share Card + Binary Choice + Hot Score Engine + Firebase
 * Built for speed: Pure vanilla JS, no framework overhead
 */

// ─── FIREBASE CONFIG ───────────────────────────────────────────────────────────
// Replace with your Firebase config from console.firebase.google.com
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ─── SEED TOPICS ──────────────────────────────────────────────────────────────
// 30 India-native topics that spark tribal battles
const SEED_TOPICS = [
  { id: 1, text: "Rohit Sharma > Virat Kohli as captain", optionA: "Rohit", optionB: "Virat", category: "Cricket", votesA: 0, votesB: 0 },
  { id: 2, text: "T20 format is killing cricket as a sport", optionA: "T20 GOAT", optionB: "T20 is trash", category: "Cricket", votesA: 0, votesB: 0 },
  { id: 3, text: "MS Dhoni > Virat Kohli in ODIs", optionA: "Dhoni", optionB: "Virat", category: "Cricket", votesA: 0, votesB: 0 },
  { id: 4, text: "Gangs of Wasseypur is the greatest Indian film ever made", optionA: "GoW = GOAT", optionB: "Overrated", category: "Bollywood", votesA: 0, votesB: 0 },
  { id: 5, text: "SRK is the greatest Bollywood actor of all time", optionA: "SRK = GOAT", optionB: "Overrated", category: "Bollywood", votesA: 0, votesB: 0 },
  { id: 6, text: "Animal was the best film of 2023", optionA: "Animal was fire", optionB: "Garbage film", category: "Bollywood", votesA: 0, votesB: 0 },
  { id: 7, text: "IIT tag matters more than actual skills in tech careers", optionA: "IIT matters", optionB: "Skills > College", category: "Career", votesA: 0, votesB: 0 },
  { id: 8, text: "Remote work is better than office work", optionA: "Remote all the way", optionB: "Office is better", category: "Career", votesA: 0, votesB: 0 },
  { id: 9, text: "Starting a startup is smarter than a high-paying corporate job", optionA: "Startup life", optionB: "Corporate stability", category: "Career", votesA: 0, votesB: 0 },
  { id: 10, text: "iPhone is objectively better than Android", optionA: "iPhone", optionB: "Android", category: "Tech", votesA: 0, votesB: 0 },
  { id: 11, text: "Elon Musk is a better CEO than Tim Cook", optionA: "Musk", optionB: "Cook", category: "Tech", votesA: 0, votesB: 0 },
  { id: 12, text: "Google is a better research tool than ChatGPT", optionA: "Google", optionB: "ChatGPT", category: "Tech", votesA: 0, votesB: 0 },
  { id: 13, text: "Arranged marriages have a higher success rate than love marriages", optionA: "Arranged FTW", optionB: "Love marriage", category: "Culture", votesA: 0, votesB: 0 },
  { id: 14, text: "Delhi is a better city than Mumbai", optionA: "Delhi", optionB: "Mumbai", category: "Culture", votesA: 0, votesB: 0 },
  { id: 15, text: "North Indian food > South Indian food", optionA: "North food", optionB: "South food", category: "Culture", votesA: 0, votesB: 0 },
  { id: 16, text: "India would beat Pakistan in any sport on any given day", optionA: "India wins always", optionB: "Pak can beat us", category: "Sports", votesA: 0, votesB: 0 },
  { id: 17, text: "Chess is a more impressive sport than cricket", optionA: "Chess", optionB: "Cricket", category: "Sports", votesA: 0, votesB: 0 },
  { id: 18, text: "South Indian cinema is better than Bollywood", optionA: "South cinema", optionB: "Bollywood", category: "Bollywood", votesA: 0, votesB: 0 },
  { id: 19, text: "Instagram is a waste of time", optionA: "It's toxic", optionB: "It's useful", category: "Tech", votesA: 0, votesB: 0 },
  { id: 20, text: "WhatsApp is better than Instagram for staying connected", optionA: "WhatsApp", optionB: "Instagram", category: "Tech", votesA: 0, votesB: 0 },
  { id: 21, text: "Morning people are more productive than night owls", optionA: "Morning person", optionB: "Night owl", category: "Culture", votesA: 0, votesB: 0 },
  { id: 22, text: "Studying abroad is always better than studying in India", optionA: "Abroad", optionB: "India is enough", category: "Career", votesA: 0, votesB: 0 },
  { id: 23, text: " Sachin Tendulkar is the greatest batsman ever", optionA: "Sachin GOAT", optionB: "Not the GOAT", category: "Cricket", votesA: 0, votesB: 0 },
  { id: 24, text: "India should prioritize manufacturing over IT services", optionA: "Manufacturing", optionB: "IT services", category: "Tech", votesA: 0, votesB: 0 },
  { id: 25, text: "Public transport in Indian cities is actually good enough", optionA: "It's good", optionB: "It's terrible", category: "Culture", votesA: 0, votesB: 0 },
  { id: 26, text: "Streaming movies at home is better than going to theatres", optionA: "OTT at home", optionB: "Theatre experience", category: "Bollywood", votesA: 0, votesB: 0 },
  { id: 27, text: "AI will replace most tech jobs within 5 years", optionA: "Yes, scared", optionB: "No, overhyped", category: "Tech", votesA: 0, votesB: 0 },
  { id: 28, text: "Indian street food is the best in the world", optionA: "Best food", optionB: "Not the best", category: "Culture", votesA: 0, votesB: 0 },
  { id: 29, text: "English should remain the primary business language in India", optionA: "English only", optionB: "Promote Hindi", category: "Culture", votesA: 0, votesB: 0 },
  { id: 30, text: "OnePlus phones offer better value than Samsung in the same price range", optionA: "OnePlus", optionB: "Samsung", category: "Tech", votesA: 0, votesB: 0 },
];

// ─── STATE MANAGEMENT ─────────────────────────────────────────────────────────
let currentUser = null;
let currentTopic = null;
let userScore = 0;
let takeCount = 0;
let streak = 0;
let lastTakeDate = null;
let takenTopicIds = new Set();
let takesByTopic = {};
let topics = [...SEED_TOPICS];
let takeSubmitLocked = false;

const STORAGE_KEY = 'hottake_state_v2';
const VAULT_DB_NAME = 'hottake_vault';
const VAULT_STORE_NAME = 'kv';
const VAULT_STATE_KEY = 'state';

function getTopicKey(topicId) {
  return String(topicId);
}

function findTopicById(topicId) {
  const key = getTopicKey(topicId);
  return topics.find(t => getTopicKey(t.id) === key);
}

function isTopicTaken(topicId) {
  return takenTopicIds.has(getTopicKey(topicId));
}

function markTopicTaken(topicId) {
  takenTopicIds.add(getTopicKey(topicId));
}

function getTakeStorageKey(topicId) {
  return `take_${getTopicKey(topicId)}`;
}

function getTakeRecord(topicId) {
  return takesByTopic[getTopicKey(topicId)] || null;
}

function getStoredChoice(topicId) {
  return getTakeRecord(topicId)?.choice || null;
}

function setTakeRecord(topicId, choice, score = 0, takenAt = new Date().toISOString(), options = {}) {
  const key = getTopicKey(topicId);
  const existing = takesByTopic[key];
  if (existing && !options.override) return existing;

  const next = {
    choice,
    score: Number.isFinite(score) ? score : (existing?.score || 0),
    takenAt: takenAt || existing?.takenAt || new Date().toISOString(),
  };

  takesByTopic[key] = next;
  markTopicTaken(key);
  return next;
}

function getSafeDocId(value) {
  return getTopicKey(value).replaceAll('/', '_');
}

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getDailyTopicStorageKey(date = new Date()) {
  return `daily_topic_${getLocalDateKey(date)}`;
}

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function getInlineTopicArg(topicId) {
  return JSON.stringify(getTopicKey(topicId))
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function ensureTopicInList(topic) {
  if (!topic || topic.id === undefined || topic.id === null) return null;

  const existing = findTopicById(topic.id);
  if (existing) return existing;

  const hydratedTopic = {
    votesA: 0,
    votesB: 0,
    ...topic,
    id: getTopicKey(topic.id),
  };
  topics = [hydratedTopic, ...topics];
  return hydratedTopic;
}

function buildStateSnapshot() {
  return {
    version: 2,
    userScore,
    takeCount,
    streak,
    lastTakeDate,
    takes: takesByTopic,
    updatedAt: new Date().toISOString(),
  };
}

function applyStateSnapshot(snapshot, options = {}) {
  if (!snapshot || typeof snapshot !== 'object') return;

  const incomingScore = Number(snapshot.userScore ?? snapshot.hotScore);
  const incomingCount = Number(snapshot.takeCount);
  const incomingStreak = Number(snapshot.streak);

  if (Number.isFinite(incomingScore)) userScore = Math.max(userScore, incomingScore);
  if (Number.isFinite(incomingCount)) takeCount = Math.max(takeCount, incomingCount);
  if (Number.isFinite(incomingStreak)) streak = Math.max(streak, incomingStreak);
  if (snapshot.lastTakeDate && !lastTakeDate) lastTakeDate = snapshot.lastTakeDate;

  const incomingTakes = snapshot.takes || {};
  Object.entries(incomingTakes).forEach(([topicId, take]) => {
    if (!take || !take.choice) return;
    setTakeRecord(topicId, take.choice, Number(take.score) || 0, take.takenAt, {
      override: options.overrideTakes,
    });
  });

  takeCount = Math.max(takeCount, Object.keys(takesByTopic).length);
}

function writeLocalState(snapshot = buildStateSnapshot()) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  localStorage.setItem('userScore', String(snapshot.userScore));
  localStorage.setItem('takeCount', String(snapshot.takeCount));
  localStorage.setItem('streak', String(snapshot.streak));
  if (snapshot.lastTakeDate) localStorage.setItem('lastTakeDate', snapshot.lastTakeDate);

  Object.entries(snapshot.takes || {}).forEach(([topicId, take]) => {
    if (take?.choice) localStorage.setItem(getTakeStorageKey(topicId), take.choice);
  });
}

function openVaultDb() {
  if (typeof indexedDB === 'undefined') return Promise.resolve(null);

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(VAULT_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(VAULT_STORE_NAME)) {
        db.createObjectStore(VAULT_STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function readVaultState() {
  const db = await openVaultDb();
  if (!db) return null;

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(VAULT_STORE_NAME, 'readonly');
    const store = transaction.objectStore(VAULT_STORE_NAME);
    const request = store.get(VAULT_STATE_KEY);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

async function writeVaultState(snapshot = buildStateSnapshot()) {
  const db = await openVaultDb();
  if (!db) return;

  await new Promise((resolve, reject) => {
    const transaction = db.transaction(VAULT_STORE_NAME, 'readwrite');
    const store = transaction.objectStore(VAULT_STORE_NAME);
    store.put(snapshot, VAULT_STATE_KEY);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

async function persistState() {
  const snapshot = buildStateSnapshot();
  try {
    writeLocalState(snapshot);
    await writeVaultState(snapshot);
  } catch (e) {
    console.warn('State persistence failed:', e);
  }
}

// ─── HOT SCORE ENGINE ─────────────────────────────────────────────────────────
function calculateHotScore(chosenOption, topic, totalVotes) {
  const voteA = topic.votesA;
  const voteB = topic.votesB;
  const total = voteA + voteB;
  
  if (total === 0) return 10; // First voter gets base 10

  const chosenVotes = chosenOption === 'A' ? voteA : voteB;
  const votePercentage = Math.round((chosenVotes / total) * 100);
  
  let baseScore = 10;
  // Contrarian bonus: if your side has <30% of votes, you get 3x
  let contrarianBonus = votePercentage < 30 ? 3 : 1;
  // Streak bonus
  let streakBonus = streak * 2;
  
  // Bonus if topic is contested (near 50-50)
  let contestedBonus = (votePercentage >= 40 && votePercentage <= 60) ? 5 : 0;

  const finalScore = (baseScore * contrarianBonus) + streakBonus + contestedBonus;
  return finalScore;
}

// ─── FIREBASE INIT ────────────────────────────────────────────────────────────
let db = null;
let usersRef = null;
let topicsRef = null;
let takesRef = null;
let firebaseReady = false;

async function initFirebase() {
  try {
    const { initializeApp } = await import('firebase/app');
    const { getFirestore, collection, doc, setDoc, getDoc, updateDoc, 
            increment, onSnapshot, query, orderBy, limit } = await import('firebase/firestore');
    
    // Try to init with config if available, otherwise use local mode
    if (FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY") {
      const app = initializeApp(FIREBASE_CONFIG);
      db = getFirestore(app);
      usersRef = collection(db, 'users');
      topicsRef = collection(db, 'topics');
      takesRef = collection(db, 'takes');
      firebaseReady = true;
      console.log('🔥 Firebase connected');
      await loadFirebaseData();
    } else {
      console.log('📱 Running in local mode (Firebase not configured)');
      firebaseReady = false;
    }
  } catch (e) {
    console.log('📱 Firebase init failed, using local mode:', e.message);
    firebaseReady = false;
  }
}

async function loadFirebaseData() {
  if (!firebaseReady) return;
  try {
    const { getDocs, collection } = await import('firebase/firestore');
    // Load topics from Firebase
    const snapshot = await getDocs(collection(db, 'topics'));
    if (!snapshot.empty) {
      topics = snapshot.docs.map(d => {
        const data = d.data();
        return { votesA: 0, votesB: 0, ...data, id: data.id ?? d.id };
      });
    }
  } catch (e) {
    console.log('Loading from local seed data');
  }
}

async function createRemoteTake(topic, choice, score) {
  if (!firebaseReady || !currentUser) return { accepted: true };

  const topicKey = getTopicKey(topic.id);
  const takeId = `${getSafeDocId(currentUser.uid)}_${getSafeDocId(topicKey)}`;
  const takenAt = new Date().toISOString();

  const { doc, increment, runTransaction, serverTimestamp } = await import('firebase/firestore');
  const userRef = doc(db, 'users', currentUser.uid);
  const topicRef = doc(db, 'topics', topicKey);
  const takeRef = doc(db, 'takes', takeId);

  return runTransaction(db, async transaction => {
    const takeSnap = await transaction.get(takeRef);
    if (takeSnap.exists()) {
      return { accepted: false, take: takeSnap.data() };
    }

    const take = {
      uid: currentUser.uid,
      topicId: topicKey,
      choice,
      score,
      topicText: topic.text,
      optionA: topic.optionA,
      optionB: topic.optionB,
      category: topic.category,
      takenAt,
      createdAt: serverTimestamp(),
    };

    transaction.set(takeRef, take);
    transaction.set(userRef, {
      displayName: currentUser.displayName || 'Anonymous',
      hotScore: increment(score),
      takeCount: increment(1),
      streak,
      lastTakeDate,
      updatedAt: serverTimestamp(),
      takes: {
        [topicKey]: { choice, score, takenAt },
      },
    }, { merge: true });
    transaction.set(topicRef, {
      id: topic.id,
      text: topic.text,
      optionA: topic.optionA,
      optionB: topic.optionB,
      category: topic.category,
      votesA: increment(choice === 'A' ? 1 : 0),
      votesB: increment(choice === 'B' ? 1 : 0),
      updatedAt: serverTimestamp(),
    }, { merge: true });

    return { accepted: true, take };
  });
}

async function signIn() {
  if (!firebaseReady) {
    // Local mode - DO NOT reset score, it's already loaded from localStorage
    currentUser = { uid: 'local_' + Date.now(), displayName: 'Anonymous' };
    // userScore, takeCount, streak already have correct values from loadFromStorage()
    return;
  }
  
  try {
    const { signInAnonymously, onAuthStateChanged } = await import('firebase/auth');
    const { auth } = await import('firebase/auth');
    const { doc, setDoc, getDoc } = await import('firebase/firestore');
    
    const app = (await import('firebase/app')).initializeApp(FIREBASE_CONFIG);
    const authInstance = (await import('firebase/auth')).getAuth(app);
    
    const result = await signInAnonymously(authInstance);
    currentUser = result.user;
    
    // Load or create user profile
    const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
    if (userDoc.exists()) {
      const data = userDoc.data();
      applyStateSnapshot(data, { overrideTakes: true });
      await persistState();
    } else {
      const snapshot = buildStateSnapshot();
      await setDoc(doc(db, 'users', currentUser.uid), {
        displayName: 'Anonymous',
        hotScore: snapshot.userScore,
        takeCount: snapshot.takeCount,
        streak: snapshot.streak,
        lastTakeDate: snapshot.lastTakeDate,
        takes: snapshot.takes,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }
  } catch (e) {
    currentUser = { uid: 'local_' + Date.now(), displayName: 'Anonymous' };
  }
}

// ─── UI RENDER ENGINE ─────────────────────────────────────────────────────────
function render(html) {
  document.getElementById('app').innerHTML = html;
}

function refreshVisibleScreenAfterStateSync() {
  const app = document.getElementById('app');
  if (!app) return;
  if (app.querySelector('.home')) showHome();
  if (app.querySelector('.profile-screen')) showProfile();
}

// ─── SPLASH SCREEN ────────────────────────────────────────────────────────────
function showSplash() {
  render(`
    <div class="splash">
      <div class="splash-content">
        <div class="logo-container">
          <div class="logo-icon">🔥</div>
          <h1 class="logo-text">HotTake</h1>
        </div>
        <p class="tagline">The Opinion Arena</p>
        <p class="sub-tagline">Where India takes sides.</p>
        <div class="splash-stats">
          <div class="stat"><span class="stat-num">30</span><span class="stat-label">Topics</span></div>
          <div class="stat-divider"></div>
          <div class="stat"><span class="stat-num">🔥</span><span class="stat-label">Hot Scores</span></div>
          <div class="stat-divider"></div>
          <div class="stat"><span class="stat-num">∞</span><span class="stat-label">Debates</span></div>
        </div>
        <button class="btn-primary btn-large" onclick="showHome()">
          Take Your First Stance →
        </button>
        <p class="splash-footer">No account needed. Just take a stance.</p>
      </div>
    </div>
  `);
}

// ─── DAILY TOPIC ROTATION ENGINE ─────────────────────────────────────────────
const CATEGORY_BY_DAY = {
  0: 'Culture',  // Sunday
  1: 'Tech',     // Monday
  2: 'Career',   // Tuesday
  3: 'Cricket',  // Wednesday
  4: 'Bollywood', // Thursday
  5: 'Sports',   // Friday
  6: 'Culture',  // Saturday
};

const SPECIAL_EVENTS = {
  '2026-05-27': { id: 'special-2026-05-27', text: "Hardik Pandya is a better all-rounder than MS Dhoni", optionA: "Hardik", optionB: "Dhoni", category: "Cricket", votesA: 0, votesB: 0 },
  '2026-06-15': { id: 'special-2026-06-15', text: "Indian movies are better than Hollywood", optionA: "Bollywood", optionB: "Hollywood", category: "Bollywood", votesA: 0, votesB: 0 },
};

function getDailyTopicOfTheDay() {
  const today = getLocalDateKey();
  if (SPECIAL_EVENTS[today]) {
    return { ...SPECIAL_EVENTS[today] };
  }
  const dayIndex = new Date().getDay();
  const category = CATEGORY_BY_DAY[dayIndex];
  const categoryTopics = SEED_TOPICS.filter(t => t.category === category);
  if (categoryTopics.length > 0) {
    const index = hashString(`${today}:${category}`) % categoryTopics.length;
    return categoryTopics[index];
  }
  return SEED_TOPICS[hashString(today) % SEED_TOPICS.length];
}

function getTopicDisplayDate() {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const d = new Date();
  return `${dayNames[d.getDay()]}, ${d.getDate()} ${monthNames[d.getMonth()]}`;
}

// ─── HOME SCREEN ──────────────────────────────────────────────────────────────
function showHome() {
  // Priority: Daily featured topic + category rotation + random fill
  const dailyTopic = ensureTopicInList(getDailyTopicOfTheDay());
  const dailyTaken = localStorage.getItem(getDailyTopicStorageKey());
  
  let feedTopics = [];
  
  // 1. Daily featured topic (top banner, once per day)
  if (!dailyTaken && dailyTopic && !isTopicTaken(dailyTopic.id)) {
    feedTopics.push({ ...dailyTopic, isFeatured: true });
  }
  
  // 2. Category-rotated topics (by day of week)
  const dayIndex = new Date().getDay();
  const category = CATEGORY_BY_DAY[dayIndex];
  const categoryTopics = topics.filter(t => t.category === category && !isTopicTaken(t.id));
  feedTopics.push(...categoryTopics.slice(0, 2));
  
  // 3. Fill remaining with random untaken
  const remaining = topics.filter(t => !isTopicTaken(t.id) && !feedTopics.find(f => getTopicKey(f.id) === getTopicKey(t.id)));
  feedTopics.push(...remaining.sort(() => Math.random() - 0.5).slice(0, 3));
  
  // 4. Deduplicate and cap at 5
  const seen = new Set();
  feedTopics = feedTopics.filter(t => {
    const key = getTopicKey(t.id);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 5);

  const topicCards = feedTopics.map((topic, i) => `
    <div class="topic-card${topic.isFeatured ? ' featured' : ''}" onclick="selectTopic(${getInlineTopicArg(topic.id)})" style="animation-delay: ${i * 80}ms">
      ${topic.isFeatured ? '<div class="featured-badge">🔥 TODAY\'S TAKE</div>' : ''}
      <div class="topic-category">${topic.category}</div>
      <p class="topic-text">"${topic.text}"</p>
      <div class="topic-meta">
        <span class="meta-item">⚡ Take a stance</span>
        <span class="meta-item">${(topic.votesA + topic.votesB)} votes</span>
      </div>
    </div>
  `).join('');

  const takenCount = takenTopicIds.size;
  const availableCount = topics.filter(t => !isTopicTaken(t.id)).length;

  render(`
    <div class="home">
      <div class="home-header">
        <div class="header-left">
          <span class="logo-icon-small">🔥</span>
          <span class="brand">HotTake</span>
        </div>
        <div class="user-stats" onclick="showProfile()">
          <div class="score-badge">
            <span class="score-num">${userScore}</span>
            <span class="score-label">Score</span>
          </div>
        </div>
      </div>

      <div class="streak-bar ${streak > 0 ? 'active' : ''}">
        🔥 ${streak > 0 ? `${streak}-day streak! Keep it going` : 'Take a stance to start your streak'}
      </div>

      <div class="section-header">
        <h2 class="section-title">🔥 Hot Takes Today — ${getTopicDisplayDate()}</h2>
        <span class="section-badge">${takenCount > 0 ? `${takenCount} taken` : 'Fresh'}</span>
      </div>

      <div class="topics-list">
        ${topicCards}
      </div>

      ${takenCount > 0 ? `
      <div class="section-header" style="margin-top: 32px">
        <h2 class="section-title">📋 Your Stances</h2>
      </div>
      <div class="taken-topics">
        ${topics.filter(t => isTopicTaken(t.id)).slice(0,5).map(topic => {
          const choice = getStoredChoice(topic.id);
          return `
            <div class="taken-card" onclick="showResults(${getInlineTopicArg(topic.id)})">
              <p class="taken-text">"${topic.text}"</p>
              <div class="taken-choice ${choice === 'A' ? 'option-a' : 'option-b'}">
                You: ${choice === 'A' ? topic.optionA : topic.optionB}
              </div>
            </div>
          `;
        }).join('')}
      </div>
      ` : ''}

      ${availableCount === 0 && takenCount > 0 ? `
      <div class="empty-state">
        <p>🎉 You've taken all stances today!</p>
        <p class="empty-sub">🔥 Come back tomorrow for new hot takes — the daily featured topic will be different</p>
      </div>
      ` : ''}
    </div>
  `);
}

// ─── TOPIC SELECTION SCREEN ───────────────────────────────────────────────────
function selectTopic(topicId) {
  currentTopic = findTopicById(topicId);
  if (!currentTopic) return;
  if (isTopicTaken(currentTopic.id)) {
    showResults(currentTopic.id);
    return;
  }

  render(`
    <div class="take-screen">
      <div class="take-header">
        <button class="btn-back" onclick="showHome()">← Back</button>
        <span class="category-badge">${currentTopic.category}</span>
      </div>

      <div class="take-content">
        <h1 class="take-question">"${currentTopic.text}"</h1>
        
        <div class="vote-preview">
          <div class="preview-bar">
            <div class="preview-fill option-a-fill" style="width: ${getVoteWidth(currentTopic.votesA, currentTopic.votesB)}%"></div>
            <div class="preview-fill option-b-fill" style="width: ${getVoteWidth(currentTopic.votesB, currentTopic.votesA)}%"></div>
          </div>
          <div class="preview-labels">
            <span>A: ${currentTopic.votesA} votes</span>
            <span>B: ${currentTopic.votesB} votes</span>
          </div>
        </div>

        <p class="choose-label">Choose your side:</p>

        <div class="choice-buttons">
          <button class="choice-btn option-a" onclick="submitTake('A')">
            <span class="choice-text">${currentTopic.optionA}</span>
            <span class="choice-percent">${getVoteWidth(currentTopic.votesA, currentTopic.votesB)}%</span>
          </button>
          
          <div class="vs-divider">OR</div>

          <button class="choice-btn option-b" onclick="submitTake('B')">
            <span class="choice-text">${currentTopic.optionB}</span>
            <span class="choice-percent">${getVoteWidth(currentTopic.votesB, currentTopic.votesA)}%</span>
          </button>
        </div>
      </div>
    </div>
  `);
}

function getVoteWidth(votesFor, votesAgainst) {
  const total = votesFor + votesAgainst;
  if (total === 0) return 50;
  return Math.round((votesFor / total) * 100);
}

// ─── RESULTS + SHARE SCREEN ───────────────────────────────────────────────────
async function submitTake(choice) {
  if (!currentTopic) return;
  if (takeSubmitLocked) return;

  const existingTake = getTakeRecord(currentTopic.id);
  if (existingTake) {
    showResults(currentTopic.id, existingTake.choice, existingTake.score);
    return;
  }

  takeSubmitLocked = true;

  const scoredTopic = {
    ...currentTopic,
    votesA: currentTopic.votesA + (choice === 'A' ? 1 : 0),
    votesB: currentTopic.votesB + (choice === 'B' ? 1 : 0),
  };

  const score = calculateHotScore(choice, scoredTopic, scoredTopic.votesA + scoredTopic.votesB);
  const previousStreak = streak;
  const previousLastTakeDate = lastTakeDate;
  
  // Update streak
  const today = new Date().toDateString();
  if (lastTakeDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    streak = (lastTakeDate === yesterday) ? streak + 1 : 1;
    lastTakeDate = today;
  }

  try {
    const remoteResult = await createRemoteTake(currentTopic, choice, score);
    if (remoteResult.accepted === false) {
      streak = previousStreak;
      lastTakeDate = previousLastTakeDate;
      const remoteTake = remoteResult.take || {};
      setTakeRecord(currentTopic.id, remoteTake.choice || choice, Number(remoteTake.score) || 0, remoteTake.takenAt, {
        override: true,
      });
      await persistState();
      showResults(currentTopic.id, remoteTake.choice || choice, Number(remoteTake.score) || 0);
      takeSubmitLocked = false;
      return;
    }
  } catch (e) {
    console.warn('Remote take lock failed, saving locally:', e);
  }

  // Update local state only after the immutable take is accepted.
  if (choice === 'A') currentTopic.votesA++;
  else currentTopic.votesB++;

  userScore += score;
  takeCount++;
  setTakeRecord(currentTopic.id, choice, score);
  await persistState();

  const dailyTopic = getDailyTopicOfTheDay();
  if (dailyTopic && getTopicKey(dailyTopic.id) === getTopicKey(currentTopic.id)) {
    localStorage.setItem(getDailyTopicStorageKey(), getTopicKey(currentTopic.id));
  }

  showResults(currentTopic.id, choice, score);
  takeSubmitLocked = false;
}

function showResults(topicId, choice, score) {
  const topic = findTopicById(topicId);
  if (!topic) return;
  currentTopic = topic;
  
  const chosen = choice || getStoredChoice(topicId);
  if (!chosen) return showHome();

  const pctA = getVoteWidth(topic.votesA, topic.votesB);
  const pctB = getVoteWidth(topic.votesB, topic.votesA);
  const chosenPct = chosen === 'A' ? pctA : pctB;
  const isWinner = (chosen === 'A' && topic.votesA > topic.votesB) || (chosen === 'B' && topic.votesB > topic.votesA);
  const isControversial = chosenPct < 35;
  const scoreLabel = Number.isFinite(score) ? `+${score}` : `${userScore}`;

  render(`
    <div class="results-screen">
      <div class="results-header">
        <button class="btn-back" onclick="showHome()">← Home</button>
        <span class="results-score">${scoreLabel} 🔥</span>
      </div>

      <div class="results-content">
        <div class="result-status ${isWinner ? 'winner' : 'minority'}">
          ${isWinner ? '🎉 You picked the winning side!' : isControversial ? '🧠 Bold take. Controversial pick.' : '📊 The majority disagrees.'}
        </div>

        <h2 class="result-question">"${topic.text}"</h2>

        <div class="result-bars">
          <div class="result-bar-wrap">
            <div class="result-label">
              <span>${topic.optionA}</span>
              <span class="result-pct ${chosen === 'A' ? 'chosen' : ''}">${pctA}%</span>
            </div>
            <div class="result-bar">
              <div class="result-fill option-a-fill" style="width: ${pctA}%"></div>
            </div>
          </div>
          
          <div class="result-bar-wrap">
            <div class="result-label">
              <span>${topic.optionB}</span>
              <span class="result-pct ${chosen === 'B' ? 'chosen' : ''}">${pctB}%</span>
            </div>
            <div class="result-bar">
              <div class="result-fill option-b-fill" style="width: ${pctB}%"></div>
            </div>
          </div>
        </div>

        <div class="your-choice ${chosen === 'A' ? 'option-a' : 'option-b'}">
          You chose: <strong>${chosen === 'A' ? topic.optionA : topic.optionB}</strong>
        </div>

        <div class="score-display">
          <div class="score-ring">
            <span class="score-big">${userScore}</span>
            <span class="score-sub">Total Score</span>
          </div>
        </div>

        <!-- SHARE CARD PREVIEW -->
        <div class="share-card-wrapper">
          <div class="share-card" id="shareCard">
            <div class="card-header">
              <div class="card-logo-wrap">
                <div class="card-logo-icon">🔥</div>
                <div class="card-logo-text">HotTake</div>
              </div>
              <div class="card-tag">OPINION ARENA</div>
            </div>

            <div class="card-divider"></div>

            <div class="card-category">${topic.category}</div>

            <p class="card-question">"${topic.text}"</p>

            <div class="card-choices">
              <div class="card-choice ${chosen === 'A' ? 'active' : ''} ${topic.votesA > topic.votesB ? 'winner' : ''}">
                <div class="card-choice-label">${topic.optionA}</div>
                <div class="card-choice-pct">${pctA}%</div>
                <div class="card-choice-bar">
                  <div class="card-choice-bar-fill option-a-bar" style="width: ${pctA}%"></div>
                </div>
              </div>
              <div class="card-vs">VS</div>
              <div class="card-choice ${chosen === 'B' ? 'active' : ''} ${topic.votesB > topic.votesA ? 'winner' : ''}">
                <div class="card-choice-label">${topic.optionB}</div>
                <div class="card-choice-pct">${pctB}%</div>
                <div class="card-choice-bar">
                  <div class="card-choice-bar-fill option-b-bar" style="width: ${pctB}%"></div>
                </div>
              </div>
            </div>

            <div class="card-your-pick ${chosen === 'A' ? 'option-a' : 'option-b'}">
              My Pick: <strong>${chosen === 'A' ? topic.optionA : topic.optionB}</strong>
            </div>

            <div class="card-score">
              <div class="card-score-left">
                <span class="card-score-icon">🔥</span>
                <div class="card-score-text">My Hot Score</div>
              </div>
              <div class="card-score-value">${userScore}</div>
            </div>

            <div class="card-footer">
              <div class="card-footer-text">Think I'm wrong? Take the test 👇</div>
              <div class="card-url">hottake.in</div>
            </div>
          </div>
        </div>

        <div class="share-actions">
          <button class="btn-share" onclick="downloadShareCard()">
            📸 Screenshot Card
          </button>
          <button class="btn-share btn-whatsapp" onclick="shareWhatsApp()">
            💬 Share on WhatsApp
          </button>
          <button class="btn-share btn-copy" onclick="copyShareLink(event)">
            🔗 Copy Link
          </button>
        </div>

        <button class="btn-primary" onclick="showHome()" style="margin-top: 24px">
          Next Hot Take →
        </button>
      </div>
    </div>
  `);
}

// ─── SHARE CARD GENERATOR ─────────────────────────────────────────────────────
async function downloadShareCard() {
  const { default: html2canvas } = await import('html2canvas');
  
  const card = document.getElementById('shareCard');
  if (!card) return;

  try {
    const canvas = await html2canvas(card, {
      scale: 3, // higher res for sharing
      backgroundColor: '#0a0a0f',
      useCORS: true,
      logging: false,
      width: card.offsetWidth,
      height: card.offsetHeight
    });

    const link = document.createElement('a');
    link.download = `hottake-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (e) {
    // Fallback: copy share link
    copyShareLink();
    alert('Screenshot saved! You can also screenshot the card above manually.');
  }
}

function shareWhatsApp() {
  const topic = currentTopic;
  if (!topic) return;
  const text = `🔥 I just took a stance on HotTake: "${topic.text}" — My Hot Score is ${userScore}! Think I'm wrong? Take the test 👇\nhottake.in`;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function copyShareLink(triggerEvent) {
  if (!currentTopic) return;
  const text = `🔥 I just took a stance on "${currentTopic.text}" — My Hot Score is ${userScore}! Take the test: hottake.in`;
  navigator.clipboard.writeText(text).then(() => {
    const btn = triggerEvent?.currentTarget || triggerEvent?.target;
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = '✅ Copied!';
    setTimeout(() => btn.textContent = original, 2000);
  });
}

// ─── PROFILE SCREEN ───────────────────────────────────────────────────────────
function showProfile() {
  const allTopics = topics.filter(t => isTopicTaken(t.id));
  
  render(`
    <div class="profile-screen">
      <div class="profile-header">
        <button class="btn-back" onclick="showHome()">← Back</button>
      </div>

      <div class="profile-hero">
        <div class="profile-avatar">🔥</div>
        <h2 class="profile-name">${currentUser?.displayName || 'HotTaker'}</h2>
        <div class="profile-badge">Opinion Warrior</div>
      </div>

      <div class="profile-stats">
        <div class="pstat">
          <span class="pstat-num">${userScore}</span>
          <span class="pstat-label">🔥 Hot Score</span>
        </div>
        <div class="pstat">
          <span class="pstat-num">${takeCount}</span>
          <span class="pstat-label">Stances Taken</span>
        </div>
        <div class="pstat">
          <span class="pstat-num">${streak}</span>
          <span class="pstat-label">Day Streak</span>
        </div>
      </div>

      ${allTopics.length > 0 ? `
      <div class="profile-history">
        <h3 class="history-title">Your Take History</h3>
        ${allTopics.map(topic => {
          const choice = getStoredChoice(topic.id);
          return `
            <div class="history-item">
              <p class="history-text">"${topic.text}"</p>
              <div class="history-choice ${choice === 'A' ? 'option-a' : 'option-b'}">
                ${choice === 'A' ? topic.optionA : topic.optionB}
              </div>
            </div>
          `;
        }).join('')}
      </div>
      ` : ''}
    </div>
  `);
}

// ─── LOCAL STORAGE INIT ───────────────────────────────────────────────────────
async function loadFromStorage() {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      applyStateSnapshot(JSON.parse(savedState), { overrideTakes: true });
    }

    const savedScore = localStorage.getItem('userScore');
    const savedCount = localStorage.getItem('takeCount');
    const savedStreak = localStorage.getItem('streak');
    const savedDate = localStorage.getItem('lastTakeDate');
    
    if (savedScore !== null) userScore = Math.max(userScore, parseInt(savedScore, 10) || 0);
    if (savedCount !== null) takeCount = Math.max(takeCount, parseInt(savedCount, 10) || 0);
    if (savedStreak !== null) streak = Math.max(streak, parseInt(savedStreak, 10) || 0);
    if (savedDate !== null) lastTakeDate = savedDate;

    // Load taken topic IDs
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('take_')) {
        const id = key.slice('take_'.length);
        const choice = localStorage.getItem(key);
        if (id && choice) setTakeRecord(id, choice);
      }
    }
    const vaultState = await readVaultState();
    applyStateSnapshot(vaultState, { overrideTakes: true });
    await persistState();

    console.log('📱 Loaded from localStorage:', { userScore, takeCount, streak, takenCount: takenTopicIds.size });
  } catch (e) {
    console.warn('localStorage read failed:', e);
  }
}

// ─── SAVE TO LOCAL STORAGE (called after every take) ──────────────────────────
function saveToStorage() {
  persistState();
}

// ─── CSS IMPORT ───────────────────────────────────────────────────────────────
import './style.css'

// ─── APP INIT ─────────────────────────────────────────────────────────────────
async function init() {
  // CRITICAL: Load state FIRST before anything else
  // This ensures score persists across page refreshes
  await loadFromStorage();
  
  // Show splash immediately with loaded score
  // This prevents the "score disappears" bug on refresh
  showSplash();
  
  // Then init Firebase in background (non-blocking)
  initFirebase().then(() => signIn()).then(() => {
    refreshVisibleScreenAfterStateSync();
  }).catch(() => {
    console.log('📱 Continuing in local-only mode');
  });
}

// Start the app
init();

// Expose functions to global scope for onclick handlers
window.showHome = showHome;
window.selectTopic = selectTopic;
window.submitTake = submitTake;
window.showResults = showResults;
window.showProfile = showProfile;
window.downloadShareCard = downloadShareCard;
window.shareWhatsApp = shareWhatsApp;
window.copyShareLink = copyShareLink;
