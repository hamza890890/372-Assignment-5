# 372-Assignment-5

# Rock Paper Scissors Game

## Overview
This project is a simple Rock, Paper, Scissors game built with HTML, CSS, and JavaScript. The player clicks an image to make their choice, the computer shuffles through options for 3 seconds, then selects a random throw. The winner is displayed, and a scoreboard tracks wins, losses, and ties until the game is reset.

---

## Features
- **Player throw**: The user clicks one of three images (rock, paper, or scissors). The selected choice is highlighted with a border.
- **Computer throw**: The computer “thinks” by cycling through random images for 3 seconds before picking a final choice.
- **Outcome section**: Displays the result of the game (win, lose, or tie).
- **Scoreboard** (extra credit):
  - Tracks the number of wins, losses, and ties.
  - A "Reset" button clears the counters and resets the game board.

---

## How It Works
1. **Player Turn**
   - The player clicks on an image.
   - The image is highlighted to show the selection.

2. **Computer Turn**
   - Starts a shuffle animation (random images displayed every 500ms).
   - After 3 seconds, the shuffle stops and a random final choice is displayed.

3. **Determine Winner**
   - The logic checks all possible matchups:
     - Rock beats scissors.
     - Scissors beats paper.
     - Paper beats rock.
     - Identical choices result in a tie.

4. **Update Outcome**
   - The result (“You win!”, “Computer wins!”, or “It’s a tie!”) is displayed on screen.

5. **Scoreboard**
   - Counters for wins, losses, and ties are updated after each round.
   - The reset button clears all counters, removes highlights, resets the computer image, and restores the outcome text.

---

## Validation
- **HTML** validates using W3C standards.
- **CSS** is stored in a separate file.
- **JavaScript** uses `addEventListener` (no inline JavaScript or `onclick` attributes).
- No `innerHTML` is used to create elements; only text and attributes are updated.

---

## Instructions
1. Open `index.html` in a browser.
2. Click an image (rock, paper, or scissors) to play.
3. Watch the computer “think” and reveal its choice.
4. Check the result and updated scoreboard.
5. Use the **Reset** button to restart the counters and clear the board.

---

## Credits
- Developed for CSC372: Web Development Assignment 5.
- Implements concepts of **callbacks, event listeners, timers, and DOM manipulation**.
