var info = document.getElementById('info');
var infoDialog = document.getElementById('infoDialog');

info.addEventListener('click', function onOpen() {
  if (typeof infoDialog.showModal === "function") {
    infoDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});

let board = document.querySelector("#board")
let last = document.querySelector("#last")
let fen
let newFEN

let chessPieces = ["♔", "♕", "♖", "♗", "♘", "♙", "♚", "♛", "♜", "♝", "♞", "♟"]

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

function fenReader() {
    let i = 0
    let j = 1
    let fenNumber = 0
    let char
    let piece
    

    while (fenNumber < `${fen.length}`) {
        char = fen[fenNumber]

        switch (char) {
            case '/':
                j++
                i = 0
                piece = ''
                break
            case '1':
                i += 1
                piece = ''
                break
            case '2':
                i += 2
                piece = ''
                break
            case '3':
                i += 3
                piece = ''
                break
            case '4':
                i += 4
                piece = ''
                break
            case '5':
                i += 5
                piece = ''
                break
            case '6':
                i += 6
                piece = ''
                break
            case '7':
                i += 7
                piece = ''
                break
            case '8':
                i += 8
                piece = ''
                break
            case 'K':
                i++
                piece = chessPieces[0]
                break
            case 'Q':
                i++
                piece = chessPieces[1]
                break
            case 'R':
                i++
                piece = chessPieces[2]
                break
            case 'B':
                i++
                piece = chessPieces[3]
                break
            case 'N':
                i++
                piece = chessPieces[4]
                break
            case 'P':
                i++
                piece = chessPieces[5]
                break
            case 'k':
                i++
                piece = chessPieces[6]
                break
            case 'q':
                i++
                piece = chessPieces[7]
                break
            case 'r':
                i++
                piece = chessPieces[8]
                break
            case 'b':
                i++
                piece = chessPieces[9]
                break
            case 'n':
                i++
                piece = chessPieces[10]
                break
            case 'p':
                i++
                piece = chessPieces[11]
                break
            default:
                alert("That's not a FEN")
                for (i = 1; i <= 8; i++) {
                    for (j = 1; j <= 8; j++) {
                        document.getElementById("p" + i + j).textContent = "";
                    }
                }
        }

        let currentSquare = document.querySelector("#p" + j + i)

        if (char !== '/') {
            currentSquare.innerHTML += piece
        }

        fenNumber++
        newFEN += char

        if (i === 8 && j === 8) {
            return
        }
    }
}

function enterFEN() {
    var input = document.getElementById("input");
    input.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            event.preventDefault()
   
            fen = input.value

            input.value = ""

            for (i = 1; i <= 8; i++) {
                for (j = 1; j <= 8; j++) {
                    document.getElementById("p" + i + j).textContent = "";
                }
            }

            newFEN = ""
            fenReader()

            last.innerHTML = "Last FEN: " + newFEN
        }
    })
}

createBoard()
gettingBoxes()
enterFEN()