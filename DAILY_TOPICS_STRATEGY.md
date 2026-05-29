# Daily Topics Strategy — HotTake

## Problem: Where do new topics come from every day?

### Solution: 4-layer content engine

---

## Layer 1: Seed Rotation (Live Now)
- 30 pre-loaded India topics
- Algorithm shows 5 fresh topics daily from the pool
- After user takes all 30, shows "come back tomorrow"
- No maintenance needed for 1 month

---

## Layer 2: Community Submission (Month 2)
- Users can submit new topics ("Suggest a Take")
- Community upvotes topics
- Top-voted topics auto-approve into the feed
- 1 topic added per 100 submissions = infinite content

---

## Layer 3: Trending Intelligence (Month 3)
- AI scrapes: Reddit r/India, Twitter trending, WhatsApp group topics
- Identifies what's being debated RIGHT NOW
- Auto-generates HotTake topics from real-time signals
- Example: "India wins T20 world cup" → next day topic: "Hardik Pandya should be captain"

---

## Layer 4: Event-Triggered Topics (Ongoing)
- Cricket match day: Match prediction topic
- Movie release day: Movie review/opinion topic  
- Festive day: Culture clash topic (Rakhi vs Valentine, etc.)
- Breaking news: Reactive topic within 2 hours

---

## The "Topic of the Day" Feature (Build Next)

```javascript
// daily-topics.js

// Today's date determines which topics appear
function getDailyTopics(allTopics, userId) {
  const today = new Date().toDateString();
  const dayIndex = new Date().getDay(); // 0-6
  
  // Rotate topics based on day of week
  const topicsByCategory = {
    0: allTopics.filter(t => t.category === 'Culture'),  // Sunday: Culture
    1: allTopics.filter(t => t.category === 'Tech'),    // Monday: Tech  
    2: allTopics.filter(t => t.category === 'Career'), // Tuesday: Career
    3: allTopics.filter(t => t.category === 'Cricket'), // Wednesday: Cricket
    4: allTopics.filter(t => t.category === 'Bollywood'), // Thursday: Bollywood
    5: allTopics.filter(t => t.category === 'Sports'),  // Friday: Sports
    6: allTopics.filter(t => t.category === 'Culture'), // Saturday: Culture
  };
  
  return topicsByCategory[dayIndex] || allTopics.slice(0, 5);
}

// Special event topics (add manually)
const EVENT_TOPICS = {
  '2026-05-27': "Hardik Pandya > MS Dhoni as all-rounder", // Match day
  '2026-06-01': "Indian movies are better than Hollywood",  // June milestone
};

// "Hot Take of the Day" push notification time
const NOTIFICATION_TIME = '19:00'; // 7 PM IST daily
```

---

## Implementation Priority

| Week | Feature | Status |
|------|---------|--------|
| Week 1-2 | Seed rotation (5/day from 30) | ✅ Done |
| Week 3-4 | Category-based daily rotation | 🔜 Build Now |
| Month 2 | Community topic submission | Planned |
| Month 3 | Trending intelligence scraper | Planned |
| Month 4+ | AI-generated topics | Planned |

---

## The Daily Habit Loop

Every day at 7 PM IST:
1. Push notification: "🔥 Today's Hot Take: [Topic] — Take your stance!"
2. User opens app, sees the daily topic prominently
3. Takes stance → Share card → WhatsApp
4. WhatsApp friends see the card, click link, take their stance
5. Next day: New topic, new loop

**This is how you build a daily habit — same time, every day, same notification.**