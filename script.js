let board = document.querySelector("#board")

let boxes = [['1','1','1','1','1','1','1','1','1','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','1','1','1','1','1','1','1','1','1']]

function gettingBoxes() {
    for (i = 1; i <= 8; i++) {
        for (j = 1; j <= 8; j++) {
            boxes[i][j] = document.querySelector("#p" + i.toString() + j.toString())
        }
    }
}


function createBoard() {
    for (i = 1; i <= 8; i++) {
        for (j = 1; j <= 8; j++) {
            let square = document.createElement("div")
            square.setAttribute("id", "p" + i.toString() + j.toString())
            if (i % 2 == 1) {
                if (j % 2 == 1) {
                    square.setAttribute("class", "square white")
                } else {
                    square.setAttribute("class", "square black")
                }
            } else {
                if (j % 2 == 0) {
                    square.setAttribute("class", "square white")
                } else {
                    square.setAttribute("class", "square black")
                }
            }

            board.appendChild(square)

        }
    }
}

function enterFEN() {
    var input = document.getElementById("input");
    input.addEventListener("keyup", function(event) {
        console.log(event)
        if (event.key === "Enter") {
            event.preventDefault()
   
            alert(input.value)
        }
    })
}

createBoard()
gettingBoxes()
enterFEN()