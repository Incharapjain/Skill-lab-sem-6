/*
### **The Activity: The "AI Identity" Generator 🤖**

**The Goal:** Build a "Character Creator" where participants use **State** to build an AI robot's personality and **Props** to render its "System Specs."

---

### **1. The Problem Statement**

Your participants are "Lead Engineers" at a robot factory. They need to build a dashboard where they can toggle a robot's **Role**, **Power Level**, and **Emotion**. The twist? The UI must change its CSS "Theme" entirely based on the robot's role.

---

### **2. Requirements:**

#### **The Parent (`page.js`):**

* **State 1 (`role`):** A string that can be "Medic", "Warrior", or "Artist".
* **State 2 (`power`):** A number (0 to 100).
* **The Interface:** Three buttons to switch the `role`, and two buttons to "Charge" or "Drain" the `power`.

#### **The Child (`RobotDisplay.js`):**

* **The Prop Challenge:** This component must receive `role` and `power` as props.
* **Dynamic Visuals:** * If **Medic**: The background turns **Green** and the icon is 💊.
* If **Warrior**: The background turns **Crimson** and the icon is ⚔️.
* If **Artist**: The background turns **Purple** and the icon is 🎨.


* **The "Low Battery" Logic:** If `power` drops below 20, the component must display a "CRITICAL" warning and make the icon ⚠️.

---

### **Bonus Challenge (The "Overclock"):**

Add a **"Self-Destruct"** button. If clicked, it starts a 5-second countdown in the state. When it hits 0, the entire `RobotDisplay` component should be hidden (Conditional Rendering) and replaced with an 💥 emoji.
*/
/*
'use client';
import { useState } from 'react';
import RobotDisplay from './RobotDisplay';

export default function Page() {
  const [role, setRole] = useState('Medic');
  const [power, setPower] = useState(100);
  const [countdown, setCountdown] = useState(null);

  const changeRole = (newRole) => setRole(newRole);

  const chargePower = () => {
    setPower((prev) => Math.min(prev + 10, 100));
  };

  const drainPower = () => {
    setPower((prev) => Math.max(prev - 10, 0));
  };

  const triggerSelfDestruct = () => {
    if (countdown !== null) return;
    setCountdown(5);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🤖 AI Identity Generator</h1>

      <button onClick={() => changeRole('Medic')}>Medic</button>
      <button onClick={() => changeRole('Warrior')}>Warrior</button>
      <button onClick={() => changeRole('Artist')}>Artist</button>

      <br /><br />

      <button onClick={chargePower}>Charge Power</button>
      <button onClick={drainPower}>Drain Power</button>

      <br /><br />

      <button onClick={triggerSelfDestruct}>Self Destruct</button>

      <br /><br />

      {countdown === 0 ? (
        <h1>💥</h1>
      ) : (
        <RobotDisplay role={role} power={power} countdown={countdown} />
      )}
    </div>
  );
}
*/


/*
## **Activity-2: Emoji Mood Tracker**

Create a **single-page interactive emoji mood tracker** where users can see a list of daily moods using **emojis**.

* Each day’s mood is displayed as a card with:

  * Date
  * Mood emoji
  * Short description

### **Requirements**

#### **Pages / Components (Next.js style)**

**File structure:**

```plaintext
components/
 ├── Header.js
 ├── Footer.js
 ├── MoodCard.js
 ├── MoodList.js
 └── Section.js
pages/
 └── index.js
```

---

### **1. Header**

* Simple functional component
* Displays page title: “Emoji Mood Tracker”
* Reused across page

---

### **2. Footer**

* Simple functional component
* Displays static copyright text

---

### **3. MoodCard**

* Reusable component
* Props:

  * `date`
  * `mood` (emoji string)
  * `description`
* JSX: render a small card showing the emoji, date, and description

---

### **4. MoodList**

* Receives an **array of mood objects** from parent
* Uses `.map()` to render a list of `MoodCard` components
* Demonstrates **prop drilling**: data flows from parent → MoodList → MoodCard

---

### **5. Section**

* A wrapper component using `props.children`
* Can be used to wrap MoodList or other content

---

### **Sample Data**

```js id="ndb6aj"
const moods = [
  { date: "2026-02-20", mood: "😄", description: "Feeling happy today!" },
  { date: "2026-02-19", mood: "😴", description: "Very tired after work." },
  { date: "2026-02-18", mood: "😎", description: "Chilled and relaxed." }
];
```

---

### **Functional Requirements**

1. Use **functional components** everywhere
2. Use **props** to pass data to `MoodCard`
3. Parent (`index.js`) passes **moods array** to `MoodList`
4. `MoodList` passes individual mood objects to `MoodCard`
5. Demonstrate **unidirectional data flow**
6. Use **component composition**: Header, Section, MoodList, Footer
7. Organize components in **separate files** (Next.js style)

---

### **Optional Fun Enhancements**

* Change card **background color based on mood** (e.g., 😄 = yellow, 😴 = gray, 😎 = blue)
* Add a **filter by mood type**
* Count how many of each mood appear
* Allow adding a **new mood dynamically** using local state
*/

import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import MoodList from './components/MoodList';
import moods from './data/moods';

export default function Page() {
  return (
    <div>
      <Header />

      <Section>
        <MoodList moods={moods} />
      </Section>

      <Footer />
    </div>
  );
}
