# Sudoku Solver Algorithm

A **JavaScript-first** Sudoku Solver that currently solves easy puzzles (for now 😉). Designed for anyone to input a Sudoku puzzle from **Sudoku.com** or try our preloaded example. Advanced capabilities are in the works, so stay tuned for updates!

## 🌟 Features
- **Solve Easy Sudokus**: Input an easy Sudoku or test with our built-in example. The algorithm will efficiently solve it!
- **Custom Inputs**: Enter your own Sudoku puzzle from sites like **Sudoku.com** and watch it get solved.
- **Visually Interactive**: Highlights possible values (APV) for each cell as you fill in the grid, showing how the logic works behind the scenes.

## 🎯 How It Works
Our solver uses a methodical process of analyzing the **Rows**, **Columns**, and **3x3 Groups** to find the **All Possible Values (APV)** for each cell. It iteratively refines these APVs until each cell is solved.

### The Steps:
1. **Row, Column & Group Scanning**: Each empty cell is checked against the values in its respective row, column, and 3x3 group.
2. **APV Calculation**: We determine all the possible values (APV) a cell can have by eliminating numbers that are already present in its row, column, or group.
3. **Iterative Solving**: The solver keeps refining the APVs and assigns a value to the cell once only one possible number remains.
4. **Loop Until Solved**: This process repeats until all the cells are filled with valid values.

## 🚀 Try It Out!
1. **Load an Easy Puzzle**: Use the built-in example or copy one from **Sudoku.com**.
2. **Hit Solve**: Watch the algorithm in action as it solves the puzzle!
3. **Custom Input**: Manually enter a Sudoku puzzle for a more personalized challenge.

### Example Puzzle:
```
[
  [5, 3, "", "", 7, "", "", "", ""],
  [6, "", "", 1, 9, 5, "", "", ""],
  ["", 9, 8, "", "", "", "", 6, ""],
  [8, "", "", "", 6, "", "", "", 3],
  [4, "", "", 8, "", 3, "", "", 1],
  [7, "", "", "", 2, "", "", "", 6],
  ["", 6, "", "", "", "", 2, 8, ""],
  ["", "", "", 4, 1, 9, "", "", 5],
  ["", "", "", "", 8, "", "", 7, 9]
]
```

## 💡 Future Updates
We’re constantly improving! Advanced Sudoku puzzles, optimizations, and more features are coming soon.

## 👨‍💻 Instructions to Run
Clone the repo and open `index.html` in your browser. Input your custom puzzle or try the example. Or try (here)[https://voidconsole.github.io/sudoku-algorithm]
