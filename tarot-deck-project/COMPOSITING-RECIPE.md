# Vaporwave Tarot Compositing Recipe

## The Formula: Classical + Tech + Nature + Effects = Vaporwave Tarot

### Layer Structure Template (Bottom to Top)

```
Layer 20: Terminal text (top)
Layer 19: Scanline overlay (20-30% opacity)
Layer 18: Glitch/RGB effects
Layer 17: Kanji text elements
Layer 16: Floating UI elements (windows, cursors)
Layer 15: Flowers/foreground elements
Layer 14: Main subject (statue/figure) - GLOW LAYER
Layer 13: Main subject (statue/figure) - BASE
Layer 12: Tech elements (CRT, VHS, keyboards)
Layer 11: Columns/architectural elements
Layer 10: Mid-ground elements
Layer 9: Palm trees/nature elements
Layer 8: Grid floor (perspective)
Layer 7: Mountain/desert silhouettes
Layer 6: Background glow halos
Layer 5: Gradient background (cyan → magenta → purple)
Layer 4: Sun/moon/celestial
Layer 3: Stars/particles
Layer 2: Deep space/void
Layer 1: Pure black base
```

## Step-by-Step Process

### STEP 1: Background Setup (Layers 1-6)

1. **Create canvas**: 825px × 1425px, 300 DPI, RGB mode
2. **Fill black**: Layer 1 pure black (#000000)
3. **Add gradient**: Layer 5
   - Gradient tool: Pink (#FF10F0) → Purple (#4A0E4E) → Cyan (#00FFFF)
   - Angle: 45° diagonal or vertical
   - Blend mode: Normal, 60-80% opacity
4. **Add background glow**: Layer 6
   - Large soft brush, cyan or magenta
   - Behind where subject will be
   - Blur heavily (100-200px Gaussian)
   - Blend mode: Screen or Add

### STEP 2: Environmental Elements (Layers 7-9)

5. **Grid floor**: Layer 8
   - Import grid pattern OR create in Perspective
   - Neon cyan (#00FFFF) lines
   - Must have perspective (vanishing point)
   - Blend mode: Screen or Lighten
   - Opacity: 40-60%

6. **Mountains/Desert**: Layer 7 (if needed for card)
   - Silhouette form
   - Place on horizon line
   - Can be duotone (pink/purple)

7. **Palm trees**: Layer 9 (if tropical vibe)
   - Silhouettes work best
   - Magenta or cyan tint

### STEP 3: Main Subject (Layers 10-14)

8. **Place architectural elements**: Layer 11
   - Columns, buildings, structures
   - Apply duotone effect (cyan/magenta)

9. **Tech elements**: Layer 12
   - CRT monitors, VHS tapes, computers
   - Should interact with main subject
   - Blend into composition

10. **Main statue/figure - BASE**: Layer 13
    - Remove background (if needed)
    - Adjust levels/contrast
    - Apply duotone:
      - Image → Adjustments → Gradient Map
      - Dark: Deep purple/blue
      - Mid: Cyan or magenta
      - Light: White or light cyan

11. **Main statue/figure - GLOW**: Layer 14
    - Duplicate Layer 13
    - Gaussian Blur: 30-50px
    - Blend mode: Screen or Add
    - Opacity: 40-70%
    - Creates that CRT bloom effect

### STEP 4: Foreground & Details (Layers 15-17)

12. **Flowers/foreground**: Layer 15
    - Roses, lilies at bottom
    - Apply same duotone treatment
    - Add subtle glow

13. **Floating UI elements**: Layer 16
    - Windows 95 windows
    - Cursors
    - Loading bars
    - Old Mac UI elements
    - Keep them ghosted/transparent (30-50% opacity)

14. **Kanji text**: Layer 17
    - Japanese characters
    - Neon color (cyan or magenta)
    - Vertical orientation (traditional)
    - Add outer glow (neon color, 5-10px)

### STEP 5: Effects (Layers 18-20)

15. **RGB Glitch/Chromatic Aberration**: Layer 18
    - Duplicate entire composition (Cmd+Shift+Alt+E)
    - Split into R, G, B channels
    - Offset each 2-4px in different directions
    - OR use overlay texture
    - Blend mode: Add or Screen
    - Opacity: 20-40%

16. **Scanlines**: Layer 19
    - Import scanline texture
    - OR create: 1px white line, 3px gap, repeat
    - Stretch across entire card
    - Blend mode: Overlay or Soft Light
    - Opacity: 20-30%
    - This creates CRT monitor effect

17. **Terminal text**: Layer 20
    - Bottom of card: Card title in terminal font
    - Format: `> command_style_text`
    - Font: VT323, Press Start 2P, Courier
    - Color: Neon green (#39FF14) or cyan
    - Small drop shadow or outer glow

### STEP 6: Final Touches

18. **Color adjustments**:
    - Curves: Boost contrast
    - Vibrance: +20 to +40
    - Selective Color: Push blues toward cyan, reds toward magenta

19. **Sharpening**:
    - Filter → Sharpen → Unsharp Mask
    - Amount: 80-120%
    - Radius: 1-2px
    - Threshold: 0

20. **Add noise** (optional):
    - Layer → New Layer
    - Fill with 50% gray
    - Filter → Noise → Add Noise (2-5%)
    - Blend mode: Overlay
    - Opacity: 10-20%
    - Gives texture, vintage feel

## Essential Photoshop/Procreate Techniques

### Duotone Effect (Core Vaporwave Look)

**Method 1: Gradient Map**
1. Select layer
2. Image → Adjustments → Gradient Map
3. Create gradient: Purple (shadows) → Cyan (midtones) → White (highlights)
4. Adjust gradient stops for best look

**Method 2: Color Fill Layers**
1. Create Cyan color fill layer above image
2. Blend mode: Color or Soft Light
3. Opacity: 50-70%
4. Repeat with Magenta on different layer
5. Mask where needed

### Neon Glow Effect

**For text or objects:**
1. Select object/text layer
2. Layer Style → Outer Glow
   - Blend Mode: Screen
   - Opacity: 75-100%
   - Color: Matching neon color
   - Size: 10-30px depending on object
3. Add second glow (larger, softer):
   - Size: 50-100px
   - Opacity: 30-50%

**Alternative (manual):**
1. Duplicate layer
2. Gaussian Blur (30-50px)
3. Blend mode: Screen or Add
4. Increase opacity until desired glow

### CRT Screen Effect

1. Image on screen layer
2. Warp → Bulge slightly (curved screen)
3. Add scanlines overlay
4. Add slight RGB split (chromatic aberration)
5. Reduce saturation in corners (vignette)
6. Add light reflection (white streak, 5-10% opacity)

### Grid Floor Perspective

**In Photoshop:**
1. Create grid pattern (lines every 50-100px)
2. Edit → Transform → Perspective
3. Drag bottom corners outward (wider)
4. Drag top corners inward (narrower)
5. Creates vanishing point effect

**In Procreate:**
1. Use Perspective Blur tool
2. Set one-point perspective
3. Draw grid lines following guides

## Color Recipes by Card Type

### Mystical/Spiritual Cards (High Priestess, Moon, Star)
- **Dominant**: Deep purple and blue
- **Accent**: Silver and white
- **Glow**: Soft cyan
- **Mood**: Cool, mysterious

### Power/Action Cards (Emperor, Chariot, Strength)
- **Dominant**: Magenta and red-orange
- **Accent**: Gold and yellow
- **Glow**: Hot pink or orange
- **Mood**: Warm, energetic

### Transformation Cards (Death, Tower, Devil)
- **Dominant**: Black and deep red
- **Accent**: Toxic green or harsh cyan
- **Glow**: Glitchy, unstable
- **Mood**: Dark, intense

### Hope/Positive Cards (Sun, World, Star)
- **Dominant**: Yellow, orange, pink
- **Accent**: White and gold
- **Glow**: Warm, radiant
- **Mood**: Bright, uplifting

### Balanced/Neutral Cards (Justice, Temperance, Wheel)
- **Dominant**: Balanced cyan and magenta
- **Accent**: Purple and teal
- **Glow**: Equal warm and cool
- **Mood**: Harmonious

## Quick Checklist Before Finalizing

- [ ] Composition is centered and balanced
- [ ] Main subject is clearly visible
- [ ] Duotone/color treatment is consistent with other cards
- [ ] Glow effects are present but not overwhelming
- [ ] Scanlines are subtle and consistent
- [ ] Grid floor has proper perspective
- [ ] Kanji is readable (if present)
- [ ] Terminal text is clear at card size
- [ ] Traditional tarot symbolism is recognizable
- [ ] Black background shows through (not completely filled)
- [ ] Colors are vibrant (vaporwave = saturated!)
- [ ] Resolution is 300 DPI for print quality
- [ ] File is saved in both working (PSD/Procreate) and export (PNG) formats

## Export Settings

**For printing:**
- Format: PNG or TIFF
- Resolution: 300 DPI
- Color mode: CMYK (convert from RGB)
- Size: 825px × 1425px (2.75" × 4.75")

**For web/portfolio:**
- Format: PNG or JPG
- Resolution: 72-150 DPI
- Color mode: RGB
- Size: 600px × 1038px (web optimized)

**For social media:**
- Format: JPG
- Size: 1080px × 1350px (Instagram portrait)
- Slight crop/reframe for platform

---

**Pro tip**: Save a Photoshop action or Procreate template with your base layers/effects so every card starts with the same foundation! This ensures consistency across all 78 cards.
