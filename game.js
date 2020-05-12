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

var lineIndex = {
    line1: true,
    line2: true,
    line3: true,
    line4: true,
    line5: true,
    line6: true,
    line7: true,
    line8: true,
    line9: true,
    line10: true,
    line11: true,
    line12: true,
    line13: true,
    line14: true,
    line15: true,
    line16: true,
    line17: true,
    line18: true,
    line19: true,
    line20: true,
    line21: true,
    line22: true,
    line23: true,
    line24: true,
    line25: true,
    line26: true,
    line27: true,
    line28: true,
    line29: true,
    line30: true,
    line31: true,
    line32: true,
    line33: true,
    line34: true,
    line35: true,
    line36: true,
    line37: true,
    line38: true,
    line39: true,
    line40: true,
    line41: true,
    line42: true,
    line43: true,
    line44: true,
    line45: true,
    line46: true,
    line47: true,
    line48: true,
    line49: true,
    line50: true,
    line51: true,
    line52: true,
    line53: true,
    line54: true,
    line55: true,
    line56: true,
    line57: true,
    line58: true,
    line59: true,
    line60: true
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

function evalChains(boxNum, boxList, lineList, fullLineList, lastLine, cLines) {
    var checkCurrentBox = true;
    var boxName = "box" + boxNum;
    var i;
    if ((boxes.lines_available(boxName, cLines) == 2 || boxes.lines_available(boxName, cLines) == 1) && boxIndex[boxName].state == true) {
        for (i = 0; i < boxList.length; i++) {
            if (boxList[i] == boxName) {
                checkCurrentBox = false;
            }
        }
        if (checkCurrentBox == true) {
            boxList.push(boxName);
            if (boxes.top(boxName, cLines) == false) {
                addLine(fullLineList, boxIndex[boxName].top);
                if (boxNum > 5) {
                    evalChains(boxNum - 5, boxList, lineList, fullLineList, boxIndex[boxName].top, cLines);
                }
                else {
                    addLine(lineList, boxIndex[boxName].top);
                }
            }
            if (boxes.left(boxName, cLines) == false) {
                addLine(fullLineList, boxIndex[boxName].left);
                if (boxNum != 1 && boxNum != 6 && boxNum != 11 && boxNum != 16 && boxNum != 21) {
                    evalChains(boxNum - 1, boxList, lineList, fullLineList, boxIndex[boxName].left, cLines);
                }
                else {
                    addLine(lineList, boxIndex[boxName].left);
                }
            }
            if (boxes.right(boxName, cLines) == false) {
                addLine(fullLineList, boxIndex[boxName].right);
                if ((boxNum % 5) != 0) {
                    evalChains(boxNum + 1, boxList, lineList, fullLineList, boxIndex[boxName].right, cLines);
                }
                else {
                    addLine(lineList, boxIndex[boxName].right);
                }
            }
            if (boxes.bottom(boxName, cLines) == false) {
                addLine(fullLineList, boxIndex[boxName].bottom);
                if (boxNum < 21) {
                    evalChains(boxNum + 5, boxList, lineList, fullLineList, boxIndex[boxName].bottom, cLines);
                }
                else {
                    addLine(lineList, boxIndex[boxName].bottom);
                }
            }
        }
    }
    else {
        addLine(lineList, lastLine);
    }

    if (boxList.length > 2) {
        boxIndex[boxName].state = false;
        for (i = 0; i < fullLineList.length; i++) {
            lineIndex[fullLineList[i]] = false;
        }
    }

    return [boxList.length, lineList];
}

function evalNumChains(boxNum, boxList, lineList, lastLine, cLines) {
    var checkCurrentBox = true;
    var boxName = "box" + boxNum;
    var i;
    if ((boxes.lines_available(boxName, cLines) == 2 || boxes.lines_available(boxName, cLines) == 1) && boxIndex[boxName].state == true) {
        for (i = 0; i < boxList.length; i++) {
            if (boxList[i] == boxName) {
                checkCurrentBox = false;
            }
        }
        if (checkCurrentBox == true) {
            boxList.push(boxName);
            if (boxes.top(boxName, cLines) == false) {
                if (boxNum > 5) {
                    evalNumChains(boxNum - 5, boxList, lineList, boxIndex[boxName].top, cLines);
                }
                else {
                    addLine(lineList, boxIndex[boxName].top);
                }
            }
            if (boxes.left(boxName, cLines) == false) {
                if (boxNum != 1 && boxNum != 6 && boxNum != 11 && boxNum != 16 && boxNum != 21) {
                    evalNumChains(boxNum - 1, boxList, lineList, boxIndex[boxName].left, cLines);
                }
                else {
                    addLine(lineList, boxIndex[boxName].left);
                }
            }
            if (boxes.right(boxName, cLines) == false) {
                if ((boxNum % 5) != 0) {
                    evalNumChains(boxNum + 1, boxList, lineList, boxIndex[boxName].right, cLines);
                }
                else {
                    addLine(lineList, boxIndex[boxName].right);
                }
            }
            if (boxes.bottom(boxName, cLines) == false) {
                if (boxNum < 21) {
                    evalNumChains(boxNum + 5, boxList, lineList, boxIndex[boxName].bottom, cLines);
                }
                else {
                    addLine(lineList, boxIndex[boxName].bottom);
                }
            }
        }
    }
    else {
        addLine(lineList, lastLine);
    }

    if (boxList.length > 2) {
        boxIndex[boxName].state = false;
    }

    return [boxList.length, lineList.length];
}

function getNumChains(cLines) {
    var numChains = 0;
    var chainLength;
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
            if (cLines[boxIndex[boxName].top] == false) {
                addLine(lineList, boxIndex[boxName].top);
            }
            else if (cLines[boxIndex[boxName].left] == false) {
                addLine(lineList, boxIndex[boxName].left);
            }
            else if (cLines[boxIndex[boxName].right] == false) {
                addLine(lineList, boxIndex[boxName].right);
            }
            else if (cLines[boxIndex[boxName].bottom] == false) {
                addLine(lineList, boxIndex[boxName].bottom);
            }
        }
        chainLength = evalNumChains(i, boxList, lineList, "null", cLines);

        if (chainLength[0] > 2 && chainLength[1] > 1) {
            numChains++;
        }
    }

    return numChains;
}

function getScoreChains(boxNum, boxList, cLines) {
    var checkCurrentBox = true;
    var boxName = "box" + boxNum;
    var i;
    if ((boxes.lines_available(boxName, cLines) == 2 || boxes.lines_available(boxName, cLines) == 1) && boxIndex[boxName].state == true) {
        for (i = 0; i < boxList.length; i++) {
            if (boxList[i] == boxName) {
                checkCurrentBox = false;
            }
        }
        if (checkCurrentBox == true) {
            boxList.push(boxName);
            if (boxes.top(boxName, cLines) == false && boxNum > 5) {
                getScoreChains(boxNum - 5, boxList, cLines);
            }
            if (boxes.left(boxName, cLines) == false && boxNum != 1 && boxNum != 6 && boxNum != 11 && boxNum != 16 && boxNum != 21) {
                getScoreChains(boxNum - 1, boxList, cLines);
            }
            if (boxes.right(boxName, cLines) == false && (boxNum % 5) != 0) {
                getScoreChains(boxNum + 1, boxList, cLines);
            }
            if (boxes.bottom(boxName, cLines) == false && boxNum < 21) {
                getScoreChains(boxNum + 5, boxList, cLines);
            }
        }
    }

    if (boxList.length > 2) {
        boxIndex[boxName].state = false;
    }

    return boxList.length;
}

function scoreChains(cLines) {
    var totalwins = 0;
    var chainLength = 0;
    var boxList = [];
    lineList = [];
    var i;
    for (i = 1; i < 26; i++) {
        var boxName = "box" + i;
        boxIndex[boxName].state = true;
    }
    for (i = 1; i < 26; i++) {
        boxList = [];
        var boxName = "box" + i;
        if (boxes.lines_available(boxName, cLines) == 1) {
            chainLength = getScoreChains(i, boxList, cLines);

            if (chainLength > 2) {
                totalwins = totalwins + chainLength;
            }
        }
    }

    return totalwins;
}

function getEvalLines(cLines) {
    var totalwins = 0;
    var chainLength = 0;
    var boxList = [];
    var lineList = [];
    var fullLineList = [];
    var evalLines = [];
    var i;
    for (i = 1; i < 61; i++) {
        var lineName = "line" + i;
        lineIndex[lineName] = true;
    }
    for (i = 1; i < 26; i++) {
        var boxName = "box" + i;
        boxIndex[boxName].state = true;
    }
    for (i = 1; i < 26; i++) {
        boxList = [];
        lineList = [];
        fullLineList = [];
        var boxName = "box" + i;
        if (boxes.lines_available(boxName, cLines) == 1) {
            if (cLines[boxIndex[boxName].top] == false) {
                addLine(lineList, boxIndex[boxName].top);
                addLine(fullLineList, boxIndex[boxName].top);
                addLine(evalLines, boxIndex[boxName].top);
            }
            else if (cLines[boxIndex[boxName].left] == false) {
                addLine(lineList, boxIndex[boxName].left);
                addLine(fullLineList, boxIndex[boxName].left);
                addLine(evalLines, boxIndex[boxName].left);
            }
            else if (cLines[boxIndex[boxName].right] == false) {
                addLine(lineList, boxIndex[boxName].right);
                addLine(fullLineList, boxIndex[boxName].right);
                addLine(evalLines, boxIndex[boxName].right);
            }
            else if (cLines[boxIndex[boxName].bottom] == false) {
                addLine(lineList, boxIndex[boxName].bottom);
                addLine(fullLineList, boxIndex[boxName].bottom);
                addLine(evalLines, boxIndex[boxName].bottom);
            }
            var data = evalChains(i, boxList, lineList, fullLineList, "null", cLines);

            if (data[0] > 2) {
                totalwins = totalwins + data[0];
                evalLines = evalLines.concat(data[1]);
            }
        }
        else if (boxes.lines_available(boxName, cLines) == 2) {
            if (boxes.top(boxName, cLines) == false && i > 5) {
                addLine(lineList, boxIndex[boxName].top);
                addLine(fullLineList, boxIndex[boxName].top);
            }
            else if (boxes.left(boxName, cLines) == false && i != 1 && i != 6 && i != 11 && i != 16 && i != 21) {
                addLine(lineList, boxIndex[boxName].left);
                addLine(fullLineList, boxIndex[boxName].left);
            }
            else if (boxes.right(boxName, cLines) == false && (i % 5) != 0) {
                addLine(lineList, boxIndex[boxName].right);
                addLine(fullLineList, boxIndex[boxName].right);
            }
            else if (boxes.bottom(boxName, cLines) == false && i < 21) {
                addLine(lineList, boxIndex[boxName].bottom);
                addLine(fullLineList, boxIndex[boxName].bottom);
            }
            var data = evalChains(i, boxList, lineList, fullLineList, "null", cLines);
            if (data[0] > 2) {
                evalLines = evalLines.concat(data[1]);
            }
        }
    }

    for (i = 1; i < 61; i++) {
        var lineName = "line" + i;
        if (lineIndex[lineName] == true && cLines[lineName] == false) {
            evalLines.push(lineName);
        }
    }

    return evalLines;
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
    var evalLines = getEvalLines(tmpLines);
    var linesLeft = evalLines.length;
    if (linesLeft > 8) {
        depth = 2;
    }
    else {
        depth = 4;
    }
    console.clear();
    for (i = 0; i < evalLines.length; i++) {
        if (tmpLines[evalLines[i]] == false) {
            tmpLines[evalLines[i]] = true;
            var tempData = filledBox(tmpLines, true);
            if (tempData[0] == true) {
                moveScore = minimax(tempData[1], depth, -1000, 1000, true);
            }
            else {
                moveScore = minimax(tempData[1], depth, -1000, 1000, false);
            }
            tmpLines[evalLines[i]] = false;
            if (moveScore > bestMoveScore) {
                bestMoveScore = moveScore;
                move = evalLines[i];
            }
            console.log(evalLines[i] + ", " + moveScore);
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

    var evalLines = getEvalLines(tmpLines);
    if (isMaximizing == true) {
        var value = -1000;
        var i;
        for (i = 0; i < evalLines.length; i++) {
            if (tmpLines[evalLines[i]] == false) {
                tmpLines[evalLines[i]] = true;
                var tempData = filledBox(tmpLines, true);
                if (tempData[0] == true) {
                    value = max(value, minimax(tempData[1], depth - 1, alpha, beta, true));
                }
                else {
                    value = max(value, minimax(tempData[1], depth - 1, alpha, beta, false));
                }
                tmpLines[evalLines[i]] = false;
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
        for (i = 0; i < evalLines.length; i++) {
            if (tmpLines[evalLines[i]] == false) {
                tmpLines[evalLines[i]] = true;
                var tempData = filledBox(tmpLines, false);
                if (tempData[0] == true) {
                    value = min(value, minimax(tempData[1], depth - 1, alpha, beta, false));
                }
                else {
                    value = min(value, minimax(tempData[1], depth - 1, alpha, beta, true));
                }
                tmpLines[evalLines[i]] = false;
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

    var chainCount = scoreChains(tmpLines);
    if (isMaximizing == true) {
        score = score + chainCount;
    }
    else {
        score = score - chainCount;
    }

    /*
    var numChains = getNumChains(tmpLines);
    if (firstTurn == "player2" && (numChains % 2) == 0) {
        score = score + 1;
    }
    else if (firstTurn == "player2" && (numChains % 2) != 0) {
        score = score - 1;
    }

    if (firstTurn == "player1" && (numChains % 2) == 0) {
        score = score - 1;
    }
    else if (firstTurn == "player1" && (numChains % 2) != 0) {
        score = score + 1;
    }
    */

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
