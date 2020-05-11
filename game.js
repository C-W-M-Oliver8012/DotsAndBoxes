var firstTurn = "player1"
var turn = "player1";
var player1Score = 0;
var player2Score = 0;

var lines = {
    line1: false,
    line2: false,
    line3: false,
    line4: false,
    line5: false,
    line6: false,
    line7: false,
    line8: false,
    line9: false,
    line10: false,
    line11: false,
    line12: false,
    line13: false,
    line14: false,
    line15: false,
    line16: false,
    line17: false,
    line18: false,
    line19: false,
    line20: false,
    line21: false,
    line22: false,
    line23: false,
    line24: false,
    line25: false,
    line26: false,
    line27: false,
    line28: false,
    line29: false,
    line30: false,
    line31: false,
    line32: false,
    line33: false,
    line34: false,
    line35: false,
    line36: false,
    line37: false,
    line38: false,
    line39: false,
    line40: false,
    line41: false,
    line42: false,
    line43: false,
    line44: false,
    line45: false,
    line46: false,
    line47: false,
    line48: false,
    line49: false,
    line50: false,
    line51: false,
    line52: false,
    line53: false,
    line54: false,
    line55: false,
    line56: false,
    line57: false,
    line58: false,
    line59: false,
    line60: false,
    box1: "nobody",
    box2: "nobody",
    box3: "nobody",
    box4: "nobody",
    box5: "nobody",
    box6: "nobody",
    box7: "nobody",
    box8: "nobody",
    box9: "nobody",
    box10: "nobody",
    box11: "nobody",
    box12: "nobody",
    box13: "nobody",
    box14: "nobody",
    box15: "nobody",
    box16: "nobody",
    box17: "nobody",
    box18: "nobody",
    box19: "nobody",
    box20: "nobody",
    box21: "nobody",
    box22: "nobody",
    box23: "nobody",
    box24: "nobody",
    box25: "nobody",
};

var boxIndex = {
    box1: {
        isFull: false,
        state: true,
        top: "line1",
        left: "line6",
        right: "line7",
        bottom: "line12"
    },
    box2: {
        isFull: false,
        state: true,
        top: "line2",
        left: "line7",
        right: "line8",
        bottom: "line13"
    },
    box3: {
        isFull: false,
        state: true,
        top: "line3",
        left: "line8",
        right: "line9",
        bottom: "line14"
    },
    box4: {
        isFull: false,
        state: true,
        top: "line4",
        left: "line9",
        right: "line10",
        bottom: "line15"
    },
    box5: {
        isFull: false,
        state: true,
        top: "line5",
        left: "line10",
        right: "line11",
        bottom: "line16"
    },
    box6: {
        isFull: false,
        state: true,
        top: "line12",
        left: "line17",
        right: "line18",
        bottom: "line23"
    },
    box7: {
        isFull: false,
        state: true,
        top: "line13",
        left: "line18",
        right: "line19",
        bottom: "line24"
    },
    box8: {
        isFull: false,
        state: true,
        top: "line14",
        left: "line19",
        right: "line20",
        bottom: "line25"
    },
    box9: {
        isFull: false,
        state: true,
        top: "line15",
        left: "line20",
        right: "line21",
        bottom: "line26"
    },
    box10: {
        isFull: false,
        state: true,
        top: "line16",
        left: "line21",
        right: "line22",
        bottom: "line27"
    },
    box11: {
        isFull: false,
        state: true,
        top: "line23",
        left: "line28",
        right: "line29",
        bottom: "line34"
    },
    box12: {
        isFull: false,
        state: true,
        top: "line24",
        left: "line29",
        right: "line30",
        bottom: "line35"
    },
    box13: {
        isFull: false,
        state: true,
        top: "line25",
        left: "line30",
        right: "line31",
        bottom: "line36"
    },
    box14: {
        isFull: false,
        state: true,
        top: "line26",
        left: "line31",
        right: "line32",
        bottom: "line37"
    },
    box15: {
        isFull: false,
        state: true,
        top: "line27",
        left: "line32",
        right: "line33",
        bottom: "line38"
    },
    box16: {
        isFull: false,
        state: true,
        top: "line34",
        left: "line39",
        right: "line40",
        bottom: "line45"
    },
    box17: {
        isFull: false,
        state: true,
        top: "line35",
        left: "line40",
        right: "line41",
        bottom: "line46"
    },
    box18: {
        isFull: false,
        state: true,
        top: "line36",
        left: "line41",
        right: "line42",
        bottom: "line47"
    },
    box19: {
        isFull: false,
        state: true,
        top: "line37",
        left: "line42",
        right: "line43",
        bottom: "line48"
    },
    box20: {
        isFull: false,
        state: true,
        top: "line38",
        left: "line43",
        right: "line44",
        bottom: "line49"
    },
    box21: {
        isFull: false,
        state: true,
        top: "line45",
        left: "line50",
        right: "line51",
        bottom: "line56"
    },
    box22: {
        isFull: false,
        state: true,
        top: "line46",
        left: "line51",
        right: "line52",
        bottom: "line57"
    },
    box23: {
        isFull: false,
        state: true,
        top: "line47",
        left: "line52",
        right: "line53",
        bottom: "line58"
    },
    box24: {
        isFull: false,
        state: true,
        top: "line48",
        left: "line53",
        right: "line54",
        bottom: "line59"
    },
    box25: {
        isFull: false,
        state: true,
        top: "line49",
        left: "line54",
        right: "line55",
        bottom: "line60"
    }
};

var boxes = {
    top: function(boxName, cLines) { return cLines[boxIndex[boxName].top]; },
    left: function(boxName, cLines) { return cLines[boxIndex[boxName].left]; },
    right: function(boxName, cLines) { return cLines[boxIndex[boxName].right]; },
    bottom: function(boxName, cLines) { return cLines[boxIndex[boxName].bottom]; },
    lines_available: function(boxName, cLines) {
        var available = 0;
        if (this.top(boxName, cLines) == false) {
            available++;
        }
        if (this.left(boxName, cLines) == false) {
            available++;
        }
        if (this.right(boxName, cLines) == false) {
            available++;
        }
        if (this.bottom(boxName, cLines) == false) {
            available++;
        }

        return available;
    }
};

function addLine(lineList, lineName) {
    var match = false;
    if (lines[lineName] == false) {
        for (i = 0; i < lineList.length; i++) {
            if (lineName == lineList[i]) {
                match = true;
            }
        }
        if (match == false) {
            lineList.push(lineName);
        }
    }
}

function numChains(boxNum, boxList, lineList, cLines) {
    var checkCurrentBox = true;
    var boxName = "box" + boxNum;
    var i;
    var match;
    if ((boxes.lines_available(boxName, cLines) == 2 || boxes.lines_available(boxName, cLines) == 1) && boxIndex[boxName].state == true) {
        for (i = 0; i < boxList.length; i++) {
            if (boxList[i] == boxName) {
                checkCurrentBox = false;
            }
        }
        if (checkCurrentBox == true) {
            boxList.push(boxName);
            if (boxes.top(boxName, cLines) == false) {
                addLine(lineList, boxIndex[boxName].top);
                if (boxNum > 5) {
                    numChains(boxNum - 5, boxList, lineList, cLines);
                }
            }
            if (boxes.left(boxName, cLines) == false) {
                addLine(lineList, boxIndex[boxName].left);
                if (boxNum != 1 && boxNum != 6 && boxNum != 11 && boxNum != 16 && boxNum != 21) {
                    numChains(boxNum - 1, boxList, lineList, cLines);
                }
            }
            if (boxes.right(boxName, cLines) == false) {
                addLine(lineList, boxIndex[boxName].right);
                if ((boxNum % 5) != 0) {
                    numChains(boxNum + 1, boxList, lineList, cLines);
                }
            }
            if (boxes.bottom(boxName, cLines) == false && boxNum < 21) {
                addLine(lineList, boxIndex[boxName].bottom);
                if (boxNum < 21) {
                    numChains(boxNum + 5, boxList, lineList, cLines);
                }
            }
        }
    }
    if (boxList.length > 2) {
        boxIndex[boxName].state = false;
    }

    return boxList.length;
}

function loopChains(cLines) {
    var totalwins = 0;
    var chainLength = 0;
    var boxList = [];
    var lineList = [];
    var i;
    for (i = 1; i < 26; i++) {
        var boxName = "box" + i;
        boxIndex[boxName].state = true;
    }
    for (i = 1; i < 26; i++) {
        boxList = [];
        lineList = [];
        var boxName = "box" + i;
        if (boxes.lines_available(boxName, cLines) == 1) {
            var chainLength = numChains(i, boxList, lineList, cLines);

            if (chainLength > 2) {
                totalwins = totalwins + chainLength;
            }
        }
    }

    return totalwins;
}

function lineSelect(line) {
    var currentStyle = line.style.stroke;

    if (turn == "player1" && lines[line.id] == false) {
        line.style.stroke = "DeepSkyBlue";
        line.style.opacity = 1;
        lines[line.id] = true;
        if (boxFull() == false) {
            turn = "player2";
        }
        else {
            document.getElementById("player1-score").innerHTML = "Player1: " + player1Score;
        }
    }
    computerMove();
}

function noMoves(tmpLines) {
    noMovesLeft = true;
    var lineName;
    var i;
    for (i = 1; i < 61; i++) {
        lineName = "line" + i;
        if (tmpLines[lineName] == false) {
            noMovesLeft = false;
        }
    }

    return noMovesLeft;
}

function computerMove() {
    while (turn == "player2" && noMoves(lines) == false) {
        var cLines = JSON.parse(JSON.stringify(lines));
        var lineName = bestMove(cLines);
        var line = document.getElementById(lineName);

        if (lines[lineName] == false) {
            line.style.stroke = "IndianRed";
            line.style.opacity = 1;
            lines[lineName] = true;
            if (boxFull() == false) {
                turn = "player1";
            }
            else {
                document.getElementById("player2-score").innerHTML = "Player2: " + player2Score;
            }
        }
    }
}

function movesLeft(tmpLines) {
    var moveCount = 0;

    var i;
    for (i = 1; i < 61; i++) {
        var name = "line" + i;
        if (tmpLines[name] == false) {
            moveCount++;
        }
    }

    return moveCount;
}

function bestMove(tmpLines) {
    var bestMoveScore = -1000;
    var moveScore;
    var move;
    var i;
    var depth;
    var linesLeft = movesLeft(tmpLines);
    if (linesLeft > 10) {
        depth = 2;
    }
    else {
        depth = 4;
    }
    for (i = 1; i < 61; i++) {
        var lineName = "line" + i;
        if (tmpLines[lineName] == false) {
            tmpLines[lineName] = true;
            var tempData = filledBox(tmpLines, true);
            if (tempData[0] == true) {
                moveScore = minimax(tempData[1], depth, -1000, 1000, true);
            }
            else {
                moveScore = minimax(tempData[1], depth, -1000, 1000, false);
            }
            tmpLines[lineName] = false;
            if (moveScore > bestMoveScore) {
                bestMoveScore = moveScore;
                move = lineName;
            }
        }
    }

    return move;
}

function max(a, b) {
    if (a >= b) {
        return a;
    }
    else {
        return b;
    }
}

function min(a, b) {
    if (a <= b) {
        return a;
    }
    else {
        return b;
    }
}

function minimax(tmpLines, depth, alpha, beta, isMaximizing) {
    if (depth <= 0 || noMoves(tmpLines) == true) {
        var score = scoreLines(tmpLines, isMaximizing);
        return score;
    }

    if (isMaximizing == true) {
        var value = -1000;
        var i;
        for (i = 1; i < 61; i++) {
            var lineName = "line" + i;
            if (tmpLines[lineName] == false) {
                tmpLines[lineName] = true;
                var tempData = filledBox(tmpLines, true);
                if (tempData[0] == true) {
                    value = max(value, minimax(tempData[1], depth - 1, alpha, beta, true));
                }
                else {
                    value = max(value, minimax(tempData[1], depth - 1, alpha, beta, false));
                }
                tmpLines[lineName] = false;
                alpha = max(alpha, value);
                if (alpha >= beta) {
                    break;
                }
            }
        }
        return value;
    }
    else {
        var value = 1000;
        var i;
        for (i = 1; i < 61; i++) {
            var lineName = "line" + i;
            if (tmpLines[lineName] == false) {
                tmpLines[lineName] = true;
                var tempData = filledBox(tmpLines, false);
                if (tempData[0] == true) {
                    value = min(value, minimax(tempData[1], depth - 1, alpha, beta, false));
                }
                else {
                    value = min(value, minimax(tempData[1], depth - 1, alpha, beta, true));
                }
                tmpLines[lineName] = false;
                beta = min(beta, value);
                if (alpha >= beta) {
                    break;
                }
            }
        }
        return value;
    }
}

function filledBox(tmpLines1, isMaximizing) {
    var tmpLines = JSON.parse(JSON.stringify(tmpLines1));
    var completedBox = false;

    var box = new Array(25);
    var i;
    for (i = 0; i < 25; i++) {
        var boxName = "box" + (i + 1);
        if (boxes.lines_available(boxName, tmpLines) == 0 && tmpLines[boxName] == "nobody") {
            completedBox = true;
            if (isMaximizing == true) {
                tmpLines[boxName] = "player2";
            }
            else {
                tmpLines[boxName] = "player1";
            }
        }
    }

    var data = [completedBox, tmpLines];

    return data;
}

function scoreLines(tmpLines, isMaximizing) {
    var score = 0;

    var i;
    for (i = 1; i < 26; i++) {
        var boxName = "box" + i;
        if (tmpLines[boxName] == "player1") {
            score--;
        }
        else if (tmpLines[boxName] == "player2") {
            score++;
        }
    }

    var chainCount = loopChains(tmpLines);

    if (isMaximizing == true) {
        score = score + chainCount;
    }
    else {
        score = score - chainCount;
    }

    return score;
}

function boxFull() {
    var completedBox = false;

    var box = new Array(25);
    var i;
    for (i = 0; i < 25; i++) {
        var boxName = "box" + (i + 1);
        box[i] = document.getElementById(boxName);

        if (boxes.lines_available(boxName, lines) == 0 && boxIndex[boxName].isFull == false) {
            lines[boxName] = turn;
            boxIndex[boxName].isFull = true;
            completedBox = true;
            if (turn == "player1") {
                player1Score++;
                box[i].style.fill = "DeepSkyBlue";
            }
            else {
                player2Score++;
                box[i].style.fill = "IndianRed";
            }
        }
    }

    return completedBox;
}

function highlight(line) {
    if (lines[line.id] == false) {
        if (turn == "player1") {
            line.style.stroke = "DeepSkyBlue";
            line.style.opacity = 0.4;
        }
    }
}

function unhighlight(line) {
    if (lines[line.id] == false) {
        line.style.stroke = "white";
        line.style.opacity = 1;
    }
}

function reset() {
    player1Score = 0;
    player2Score = 0;
    document.getElementById("player1-score").innerHTML = "Player1: " + player1Score;
    document.getElementById("player2-score").innerHTML = "Player2: " + player2Score;

    var length = document.getElementsByTagName("line").length;
    var i;
    for (i = 0; i < length; i++) {
        document.getElementsByTagName("line")[i].style.stroke = "white";
    }

    for (i = 1; i < 26; i++) {
        var boxName = "box" + i;
        document.getElementById(boxName).style.fill = "white";
    }

    for (i = 1; i < 61; i++) {
        var lineName = "line" + i;
        lines[lineName] = false;
    }

    for (i = 1; i < 26; i++) {
        var boxName = "box" + i;
        lines[boxName] = "nobody";
        boxIndex[boxName].isFull = false;
    }

    if (firstTurn == "player1") {
        turn = "player2";
        firstTurn = "player2";
        computerMove();
    }
    else {
        turn = "player1";
        firstTurn = "player1";
    }
}
