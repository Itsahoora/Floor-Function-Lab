<div align="center">

# ⌊x⌋ Floor Function Lab

### A little math, made visible.

Explore the floor function through animated number lines, interactive graphs, and hands-on practice.

**No frameworks · No build step · No dependencies**

[🚀 Open the live app](https://itsahoora.github.io/Floor-Function-Lab/)

</div>

---

## What is the floor function?

The floor of a real number is the **greatest integer less than or equal to it**:

<div align="center">

`⌊x⌋ = n` exactly when `n ≤ x < n + 1`

</div>

For example, `⌊3.7⌋ = 3`, while `⌊−3.7⌋ = −4`. Explore why with a rolling, animated number line.

## Explore

| Tool | What you can do |
| --- | --- |
| **Animated lab** | Enter values and watch them roll down `y = x` into their floor values. Pause, replay, scrub, and adjust the animation speed. |
| **Live playground** | Move a point across integer boundaries and watch its floor update on the graph. |
| **Function comparison** | Compare the floor function with ceiling, rounding, identity, and absolute value. |
| **Challenge** | Try a five-question quiz that adjusts its difficulty as you answer. |
| **Step-by-step solver** | Enter an expression and see its evaluated value and floor interval. |
| **Function studio** | Explore floor, ceiling, absolute value, identity, rounding, fractional-part, and sign functions. |
| **Presentation mode** | Walk through key ideas with keyboard controls and an interactive example. |

Also included: **English and Persian**, **light and dark themes**, mobile-friendly layouts, reduced-motion support, print-ready results, shareable input links, and CSV export.

## Try it

### Use it online

Visit **[itsahoora.github.io/Floor-Function-Lab](https://itsahoora.github.io/Floor-Function-Lab/)**—no download or setup required.

### Open directly

Open `index.html` in a modern browser. There is no installation or build step.

### Or run a local web server

From the project directory:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Entering values

Separate up to **10 expressions** with commas. Values must be between **−9 and 9**.

```text
-2, 5/2, -7/2, sqrt(2), pi
```

Supported syntax includes:

- Decimals and fractions, such as `2.75` and `5/2`
- `+`, `-`, `*`, `/`, powers (`^`), and parentheses
- `pi` or `π`, and square roots such as `sqrt(2)` or `√2`
- Persian and Arabic numerals

Use the **Boundary lab** preset to compare values just below, exactly on, and just above an integer.

## Sharing and exporting

- **Share link** copies a URL containing your current expressions. Opening it restores those values.
- **Download CSV** exports each expression, its type, evaluated value, floor, and interval.
- **Print results** opens the browser’s print dialog with a results-friendly layout.

Clipboard access may depend on your browser and whether the page is opened from a secure origin.

## Keyboard and accessibility

- Navigate the tool tabs with **← / →**; use **Home** and **End** to jump to the first or last tab. In Persian/RTL mode, the tab direction follows the layout.
- In presentation mode, use **← / →** to adjust the example and **Esc** to close. **Tab** stays within the dialog.
- The charts have text descriptions, the results use a labeled table, and the interface respects your reduced-motion preference.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and interactive tool panels |
| `styles.css` | Responsive layout, themes, animations, and print styles |
| `app.js` | Interface behavior, animation, graphs, quiz, and presentation |
| `math.js` | Dependency-free mathematical expression evaluator |

## Built with

Plain **HTML**, **CSS**, and **JavaScript**—including Canvas for the visualizations and the Web Audio API for optional sound.
