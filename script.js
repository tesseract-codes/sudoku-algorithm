var all = []
const fullSet = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var sudo = document.getElementById("sudo")

function validate(e) {
    let val = e.target.value
    val = parseInt(val)
    if (isNaN(val) || val === 0) {
        e.target.value = ""
    } else {
        e.target.classList.add("checked")
    }
}
//create html and get each unit to all
for (let i = 1; i <= 81; i++) {
    let div = document.createElement("div")
    let inp = document.createElement("input")
    // inp.setAttribute("type", "number");
    inp.setAttribute("min", "1")
    inp.setAttribute("max", "9")
    inp.setAttribute("maxlength", "1")
    div.appendChild(inp)
    sudo.appendChild(div)
    div.id = "u" + i
    inp.id = "k" + i
    inp.addEventListener("input", validate)
    all.push(inp)
}
function solve() {
    //asssign classes to each unit
    for (let unit = 0; unit < all.length; unit++) {
        all[unit].classList.add("col" + getClasses("col")[unit])
        all[unit].classList.add("row" + getClasses("row")[unit])
        all[unit].classList.add("grp" + getClasses("grp")[unit])
        all[unit].setAttribute("data-apv", getAPV(all[unit])) //apv = all possible values
    }
}

function getClasses(type) {
    switch (type) {
        case "col":
            //set column numbers for 1 to 9x9
            let cols = []
            for (i = 1; i <= 9; i++) {
                //gets 9x{12345689}
                for (j = 1; j <= 9; j++) {
                    //gets 12345689
                    cols.push(j)
                }
            }
            return cols

        case "row":
            // set row numbers for 1 to 9x9
            let rows = []
            for (i = 1; i <= 9; i++) {
                // gets 12345689
                for (j = 1; j <= 9; j++) {
                    //gets 9x{1*i}
                    rows.push(i)
                }
            }
            return rows

        case "grp":
            let grps = []
            //set group numbers for 1 to 9x9
            for (k = 1; k <= 3; k++) {
                //gets 3x{111.222.333} 3x{444.555.666} 3x{777.888.999}
                for (m = 1; m <= 3; m++) {
                    // gets 3x{111.222.333}
                    for (i = 1; i <= 3; i++) {
                        // gets 111.222.333
                        for (j = 1; j <= 3; j++) {
                            //gets 111
                            grps.push(i + 3 * (k - 1)) // gets 1 (1 + 3*0) or 4 (1 + 3*1) or 7 (1 + 3*2)
                        }
                    }
                }
            }
            return grps
    }
}
function getAPV(unit) {
    let colVals = document.getElementsByClassName(unit.classList[0])
    let rowVals = document.getElementsByClassName(unit.classList[1])
    let grpVals = document.getElementsByClassName(unit.classList[2])
    // TODO: you are getting objects, but you need to get objject.values
    // or do better, just sort thorough allVals and if it has class CHECKED then get val and store and run filter apv
    const allVals = [...colVals, ...rowVals, ...grpVals]
    let apv = [...fullSet]
    apv = apv.filter(val => !allVals.includes(val))
}

let hed = document.getElementById("hed")
hed.innerText = "hello"
document.get
