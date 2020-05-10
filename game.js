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

var boxes = {
    box1: {
        isFull: false,
        top: function() { return lines["line1"]; },
        left: function() { return lines["line6"]; },
        right: function() { return lines["line7"]; },
        bottom: function() { return lines["line12"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box2: {
        isFull: false,
        top: function() { return lines["line2"]; },
        left: function() { return lines["line7"]; },
        right: function() { return lines["line8"]; },
        bottom: function() { return lines["line13"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box3: {
        isFull: false,
        top: function() { return lines["line3"]; },
        left: function() { return lines["line8"]; },
        right: function() { return lines["line9"]; },
        bottom: function() { return lines["line14"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box4: {
        isFull: false,
        top: function() { return lines["line4"]; },
        left: function() { return lines["line9"]; },
        right: function() { return lines["line10"]; },
        bottom: function() { return lines["line15"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box5: {
        isFull: false,
        top: function() { return lines["line5"]; },
        left: function() { return lines["line10"]; },
        right: function() { return lines["line11"]; },
        bottom: function() { return lines["line16"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box6: {
        isFull: false,
        top: function() { return lines["line12"]; },
        left: function() { return lines["line17"]; },
        right: function() { return lines["line18"]; },
        bottom: function() { return lines["line23"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box7: {
        isFull: false,
        top: function() { return lines["line13"]; },
        left: function() { return lines["line18"]; },
        right: function() { return lines["line19"]; },
        bottom: function() { return lines["line24"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box8: {
        isFull: false,
        top: function() { return lines["line14"]; },
        left: function() { return lines["line19"]; },
        right: function() { return lines["line20"]; },
        bottom: function() { return lines["line25"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box9: {
        isFull: false,
        top: function() { return lines["line15"]; },
        left: function() { return lines["line20"]; },
        right: function() { return lines["line21"]; },
        bottom: function() { return lines["line26"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box10: {
        isFull: false,
        top: function() { return lines["line16"]; },
        left: function() { return lines["line21"]; },
        right: function() { return lines["line22"]; },
        bottom: function() { return lines["line27"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box11: {
        isFull: false,
        top: function() { return lines["line23"]; },
        left: function() { return lines["line28"]; },
        right: function() { return lines["line29"]; },
        bottom: function() { return lines["line34"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box12: {
        isFull: false,
        top: function() { return lines["line24"]; },
        left: function() { return lines["line29"]; },
        right: function() { return lines["line30"]; },
        bottom: function() { return lines["line35"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box13: {
        isFull: false,
        top: function() { return lines["line25"]; },
        left: function() { return lines["line30"]; },
        right: function() { return lines["line31"]; },
        bottom: function() { return lines["line36"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box14: {
        isFull: false,
        top: function() { return lines["line26"]; },
        left: function() { return lines["line31"]; },
        right: function() { return lines["line32"]; },
        bottom: function() { return lines["line37"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box15: {
        isFull: false,
        top: function() { return lines["line27"]; },
        left: function() { return lines["line32"]; },
        right: function() { return lines["line33"]; },
        bottom: function() { return lines["line38"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box16: {
        isFull: false,
        top: function() { return lines["line34"]; },
        left: function() { return lines["line39"]; },
        right: function() { return lines["line40"]; },
        bottom: function() { return lines["line45"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box17: {
        isFull: false,
        top: function() { return lines["line35"]; },
        left: function() { return lines["line40"]; },
        right: function() { return lines["line41"]; },
        bottom: function() { return lines["line46"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box18: {
        isFull: false,
        top: function() { return lines["line36"]; },
        left: function() { return lines["line41"]; },
        right: function() { return lines["line42"]; },
        bottom: function() { return lines["line47"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box19: {
        isFull: false,
        top: function() { return lines["line37"]; },
        left: function() { return lines["line42"]; },
        right: function() { return lines["line43"]; },
        bottom: function() { return lines["line48"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box20: {
        isFull: false,
        top: function() { return lines["line38"]; },
        left: function() { return lines["line43"]; },
        right: function() { return lines["line44"]; },
        bottom: function() { return lines["line49"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box21: {
        isFull: false,
        top: function() { return lines["line45"]; },
        left: function() { return lines["line50"]; },
        right: function() { return lines["line51"]; },
        bottom: function() { return lines["line56"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box22: {
        isFull: false,
        top: function() { return lines["line46"]; },
        left: function() { return lines["line51"]; },
        right: function() { return lines["line52"]; },
        bottom: function() { return lines["line57"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box23: {
        isFull: false,
        top: function() { return lines["line47"]; },
        left: function() { return lines["line52"]; },
        right: function() { return lines["line53"]; },
        bottom: function() { return lines["line58"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box24: {
        isFull: false,
        top: function() { return lines["line48"]; },
        left: function() { return lines["line53"]; },
        right: function() { return lines["line54"]; },
        bottom: function() { return lines["line59"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    },
    box25: {
        isFull: false,
        top: function() { return lines["line49"]; },
        left: function() { return lines["line54"]; },
        right: function() { return lines["line55"]; },
        bottom: function() { return lines["line60"]; },
        lines_available: function() {
            var available = 0;
            if (this.top() == false) {
                available++;
            }
            if (this.left() == false) {
                available++;
            }
            if (this.right() == false) {
                available++;
            }
            if (this.bottom() == false) {
                available++;
            }

            return available;
        }
    }
};

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
        var move = bestMove(cLines);
        var lineName = "line" + move;
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

function movesLeft() {
    var moveCount = 0;

    var i;
    for (i = 1; i < 61; i++) {
        var name = "line" + i;
        if (lines[name] == false) {
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
    var totalMovesLeft = movesLeft();
    var depth;
    if (totalMovesLeft > 18) {
        depth = 2;
    }
    else if (totalMovesLeft > 10 && totalMovesLeft < 19) {
        depth = 4;
    }
    else if (totalMovesLeft > 8 && totalMovesLeft < 11) {
        depth = 6;
    }
    else {
        depth = 8;
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
                move = i;
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
    var score = scoreLines(tmpLines);

    if (depth <= 0 || noMoves(tmpLines) == true) {
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
    var completedBox = false;
    var tmpLines = JSON.parse(JSON.stringify(tmpLines1));

    var i;
    for (i = 1; i < 6; i++) {
        var up = "line" + i;
        var left = "line" + (i + 5);
        var right = "line" + (i + 6);
        var bottom = "line" + (i + 11);
        var box = "box" + i;

        if (tmpLines[up] == true && tmpLines[left] == true && tmpLines[right] == true && tmpLines[bottom] == true && tmpLines[box] == "nobody") {
            completedBox = true;
            if (isMaximizing == true) {
                tmpLines[box] = "player2";
            }
            else {
                tmpLines[box] = "player1";
            }
        }
    }

    for (i = 6; i < 11; i++) {
        var up = "line" + (i + 6);
        var left = "line" + (i + 11);
        var right = "line" + (i + 12);
        var bottom = "line" + (i + 17);
        var box = "box" + i;

        if (tmpLines[up] == true && tmpLines[left] == true && tmpLines[right] == true && tmpLines[bottom] == true && tmpLines[box] == "nobody") {
            completedBox = true;
            if (isMaximizing == true) {
                tmpLines[box] = "player2";
            }
            else {
                tmpLines[box] = "player1";
            }
        }
    }

    for (i = 11; i < 16; i++) {
        var up = "line" + (i + 12);
        var left = "line" + (i + 17);
        var right = "line" + (i + 18);
        var bottom = "line" + (i + 23);
        var box = "box" + i;

        if (tmpLines[up] == true && tmpLines[left] == true && tmpLines[right] == true && tmpLines[bottom] == true && tmpLines[box] == "nobody") {
            completedBox = true;
            if (isMaximizing == true) {
                tmpLines[box] = "player2";
            }
            else {
                tmpLines[box] = "player1";
            }
        }
    }

    for (i = 16; i < 21; i++) {
        var up = "line" + (i + 18);
        var left = "line" + (i + 23);
        var right = "line" + (i + 24);
        var bottom = "line" + (i + 29);
        var box = "box" + i;

        if (tmpLines[up] == true && tmpLines[left] == true && tmpLines[right] == true && tmpLines[bottom] == true && tmpLines[box] == "nobody") {
            completedBox = true;
            if (isMaximizing == true) {
                tmpLines[box] = "player2";
            }
            else {
                tmpLines[box] = "player1";
            }
        }
    }

    for (i = 21; i < 26; i++) {
        var up = "line" + (i + 24);
        var left = "line" + (i + 29);
        var right = "line" + (i + 30);
        var bottom = "line" + (i + 35);
        var box = "box" + i;

        if (tmpLines[up] == true && tmpLines[left] == true && tmpLines[right] == true && tmpLines[bottom] == true && tmpLines[box] == "nobody") {
            completedBox = true;
            if (isMaximizing == true) {
                tmpLines[box] = "player2";
            }
            else {
                tmpLines[box] = "player1";
            }
        }
    }

    var data = [completedBox, tmpLines];

    return data;
}

function scoreLines(tmpLines) {
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

    return score;
}

function boxFull() {
    var completedBox = false;

    var box = new Array(25);
    var i;
    for (i = 0; i < 25; i++) {
        var boxName = "box" + (i + 1);
        box[i] = document.getElementById(boxName);

        if (boxes[boxName].lines_available() == 0 && boxes[boxName].isFull == false) {
            lines[boxName] = turn;
            boxes[boxName].isFull = true;
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
        boxes[boxName].isFull = false;
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
