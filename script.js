var cells = []
const full = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var sudo = document.getElementById("sudo")
var solved = false

// Example sudoku puzzle
var testCase = [
    ["5", "3", "", "", "7", "", "", "", ""],
    ["6", "", "", "1", "9", "5", "", "", ""],
    ["", "9", "8", "", "", "", "", "6", ""],
    ["8", "", "", "", "6", "", "", "", "3"],
    ["4", "", "", "8", "", "3", "", "", "1"],
    ["7", "", "", "", "2", "", "", "", "6"],
    ["", "6", "", "", "", "", "2", "8", ""],
    ["", "", "", "4", "1", "9", "", "", "5"],
    ["", "", "", "", "8", "", "", "7", "9"],
]

function validate(e) {
    let val = e.target.value
    val = parseInt(val)
    if (isNaN(val) || val === 0) {
        e.target.value = ""
    } else {
        e.target.classList.add("checked")
    }
}

// Create grid
for (let i = 1; i <= 81; i++) {
    let div = document.createElement("div")
    let inp = document.createElement("input")
    inp.setAttribute("min", "1")
    inp.setAttribute("max", "9")
    inp.setAttribute("maxlength", "1")
    div.appendChild(inp)
    sudo.appendChild(div)
    div.id = "u" + i
    inp.id = "k" + i
    inp.addEventListener("input", validate)
    inp.addEventListener("click", showAPV)
    cells.push(inp)
}

function solve() {
    for (let unit = 0; unit < cells.length; unit++) {
        cells[unit].classList.add("col" + getClass("col")[unit])
        cells[unit].classList.add("row" + getClass("row")[unit])
        cells[unit].classList.add("grp" + getClass("grp")[unit])
    }

    for (let unit = 0; unit < cells.length; unit++) {
        let val = parseInt(cells[unit].value)
        if (!isNaN(val)) {
            cells[unit].classList.add("checked")
        }
        cells[unit].setAttribute("data-apv", getAPV(cells[unit]))
    }
    count = 0
    solved = false
    while (!solved) {
        fillMonoAPV()
    }
    colors = [...document.getElementsByClassName("solved")].forEach(element => {
        element.parentElement.style.borderColor = "indigo"
    })
    solved = true
}

function getClass(type) {
    switch (type) {
        case "col":
            let cols = []
            for (i = 1; i <= 9; i++) {
                for (j = 1; j <= 9; j++) {
                    cols.push(j)
                }
            }
            return cols

        case "row":
            let rows = []
            for (i = 1; i <= 9; i++) {
                for (j = 1; j <= 9; j++) {
                    rows.push(i)
                }
            }
            return rows

        case "grp":
            let grps = []
            for (k = 1; k <= 3; k++) {
                for (m = 1; m <= 3; m++) {
                    for (i = 1; i <= 3; i++) {
                        for (j = 1; j <= 3; j++) {
                            grps.push(i + 3 * (k - 1))
                        }
                    }
                }
            }
            return grps
    }
}

function getAPV(unit) {
    const related = [
        ...document.getElementsByClassName(unit.classList[0]),
        ...document.getElementsByClassName(unit.classList[1]),
        ...document.getElementsByClassName(unit.classList[2]),
    ]

    let used = []

    for (let el of related) {
        if (el.classList.contains("checked")) {
            let value = parseInt(el.value)
            if (!isNaN(value)) {
                used.push(value)
                el.setAttribute("data-apv", value)
            }
        }
    }

    let apv = full.filter(val => !used.includes(val))
    return apv
}

let head = document.getElementById("hed")

function showAPV(e) {
    if (solved) {
        head.innerText = "APV: " + e.target.getAttribute("data-apv")
    }
}

function getSudo() {
    var grid = []
    for (let i = 1; i <= 9; i++) {
        var row = []
        var rowCells = [...document.getElementsByClassName("row" + i)]
        for (let unit of rowCells) {
            row.push(unit.value)
        }
        grid.push(row)
    }
    return grid
}

function setSudo(grid) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = grid[i][j]
            const cell = cells[i * 9 + j]
            if (val !== "") {
                cell.value = val
                cell.classList.add("checked")
                cell.classList.add("orignal")
                cell.setAttribute("data-apv", getAPV(cell))
            } else {
                cell.value = ""
                cell.classList.remove("checked")
                cell.removeAttribute("data-apv")
            }
        }
    }
}

function clear() {
    for (let unit in cells) {
        cells[unit].value = ""
    }
}

function fillMonoAPV() {
    for (let unit = 0; unit < cells.length; unit++) {
        cells[unit].setAttribute("data-apv", getAPV(cells[unit]))
    }
    for (unit in cells) {
        if (
            cells[unit].getAttribute("data-apv").length === 1 &&
            !cells[unit].classList.contains("orignal")
        ) {
            cells[unit].value = cells[unit].getAttribute("data-apv")[0]
            cells[unit].classList.add("checked")
            cells[unit].classList.add("solved")
        }
    }
    count++
    head.innerText = "Number of iterations:" + count
    if (count > 50) {
        head.innerText("too many iterations")
        return (solved = true)
    }
    if (document.getElementsByClassName("checked").length == 81) {
        solved = true
    }
}
