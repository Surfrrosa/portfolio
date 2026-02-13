# Add Work Card

Add a new project card to the `/work` page, matching the existing format exactly.

## Arguments

The user will describe the project, e.g. `/work-card add Floatless` or `/work-card new project for ShainAI`.

## Process

### Step 1: Read the current work page
- Read `src/app/work/page.tsx` to understand the current card structure
- Note the grid layout, animation delays, and how cards are ordered
- Identify the pattern: each card is a `motion.div` with consistent structure

### Step 2: Gather project details
Ask the user for anything not already provided:
- **Project name** and optional subtitle/tagline
- **Problem** -- what was the challenge?
- **Solution** -- what was built?
- **My Role** -- what did the user do?
- **Impact** -- 3-5 bullet points with checkmarks (measurable results preferred)
- **Tech tags** -- technologies used (displayed as pill badges)
- **Media** -- video preview path, screenshot path, or neither
- **External link** -- live URL or GitHub repo (optional)

### Step 3: Determine placement
Ask the user where the card should go:
- Top of the grid (most prominent)
- After a specific existing project
- Bottom of the grid

### Step 4: Write the card
Insert a new `motion.div` card matching this structure exactly:

```tsx
<motion.div
  className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: [INCREMENT] }}
>
  <h3 className="text-white text-2xl font-display font-bold mb-4">
    Project Name
  </h3>

  <h4 className="text-teal-400 text-lg font-semibold mb-6">
    One-line tagline.
  </h4>

  <div className="space-y-6">
    <div>
      <h5 className="text-white font-semibold mb-2">Problem</h5>
      <p className="text-gray-300 leading-relaxed">...</p>
    </div>

    <div>
      <h5 className="text-white font-semibold mb-2">Solution</h5>
      <p className="text-gray-300 leading-relaxed">...</p>
    </div>

    <div>
      <h5 className="text-white font-semibold mb-2">My Role</h5>
      <p className="text-gray-300 leading-relaxed">...</p>
    </div>

    <div>
      <h5 className="text-white font-semibold mb-2">Impact</h5>
      <div className="text-gray-300 space-y-3">
        <p className="flex items-start"><span className="text-teal-400 mr-2">✓</span><span>Impact point</span></p>
      </div>
    </div>
  </div>

  <div className="flex flex-wrap gap-2 mt-6">
    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Tag</span>
  </div>
</motion.div>
```

### Step 5: Adjust animation delays
Increment the `delay` value for the new card and any cards that follow it, keeping the 0.1-0.2s spacing pattern.

### Step 6: Verify
- Confirm the card matches existing styling exactly
- No emojis
- No em dashes
- Tags are concise (2-3 words max per tag)
- Impact bullets start with a verb or metric

Do NOT commit automatically. Present the changes and let the user review.
