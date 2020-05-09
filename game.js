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
    box1: "nobody",
    box2: "nobody",
    box3: "nobody",
    box4: "nobody",
    box5: "nobody",
    box6: "nobody",
    box7: "nobody",
    box8: "nobody",
    box9: "nobody",
};

var boxes = {
    box1: {
        isFull: false,
        top: function() { return lines["line1"]; },
        left: function() { return lines["line4"]; },
        right: function() { return lines["line5"]; },
        bottom: function() { return lines["line8"]; },
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
        left: function() { return lines["line5"]; },
        right: function() { return lines["line6"]; },
        bottom: function() { return lines["line9"]; },
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
        left: function() { return lines["line6"]; },
        right: function() { return lines["line7"]; },
        bottom: function() { return lines["line10"]; },
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
        top: function() { return lines["line8"]; },
        left: function() { return lines["line11"]; },
        right: function() { return lines["line12"]; },
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
        top: function() { return lines["line9"]; },
        left: function() { return lines["line12"]; },
        right: function() { return lines["line13"]; },
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
        top: function() { return lines["line10"]; },
        left: function() { return lines["line13"]; },
        right: function() { return lines["line14"]; },
        bottom: function() { return lines["line17"]; },
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
        top: function() { return lines["line15"]; },
        left: function() { return lines["line18"]; },
        right: function() { return lines["line19"]; },
        bottom: function() { return lines["line22"]; },
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
        top: function() { return lines["line16"]; },
        left: function() { return lines["line19"]; },
        right: function() { return lines["line20"]; },
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
    box9: {
        isFull: false,
        top: function() { return lines["line17"]; },
        left: function() { return lines["line20"]; },
        right: function() { return lines["line21"]; },
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
    for (i = 1; i < 25; i++) {
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
    for (i = 1; i < 25; i++) {
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
    if (totalMovesLeft > 10) {
        depth = 4;
    }
    else if (totalMovesLeft > 8 && totalMovesLeft < 11) {
        depth = 6;
    }
    else {
        depth = 8;
    }
    for (i = 1; i < 25; i++) {
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

    if (depth == 0 || noMoves(tmpLines) == true) {
        return score;
    }

    if (isMaximizing == true) {
        var value = -1000;
        var i;
        for (i = 1; i < 25; i++) {
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
        for (i = 1; i < 25; i++) {
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
    for (i = 1; i < 4; i++) {
        var up = "line" + i;
        var left = "line" + (i + 3);
        var right = "line" + (i + 4);
        var bottom = "line" + (i + 7);
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

    for (i = 4; i < 7; i++) {
        var up = "line" + (i + 4);
        var left = "line" + (i + 7);
        var right = "line" + (i + 8);
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

    for (i = 7; i < 10; i++) {
        var up = "line" + (i + 8);
        var left = "line" + (i + 11);
        var right = "line" + (i + 12);
        var bottom = "line" + (i + 15);
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
    for (i = 1; i < 10; i++) {
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

    var box = new Array(9);
    var i;
    for (i = 0; i < 9; i++) {
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

    for (i = 1; i < 10; i++) {
        var boxName = "box" + i;
        document.getElementById(boxName).style.fill = "white";
    }

    lines["line1"] = false;
    lines["line2"] = false;
    lines["line3"] = false;
    lines["line4"] = false;
    lines["line5"] = false;
    lines["line6"] = false;
    lines["line7"] = false;
    lines["line8"] = false;
    lines["line9"] = false;
    lines["line10"] = false;
    lines["line11"] = false;
    lines["line12"] = false;
    lines["line13"] = false;
    lines["line14"] = false;
    lines["line15"] = false;
    lines["line16"] = false;
    lines["line17"] = false;
    lines["line18"] = false;
    lines["line19"] = false;
    lines["line20"] = false;
    lines["line21"] = false;
    lines["line22"] = false;
    lines["line23"] = false;
    lines["line24"] = false;

    lines.box1 = "nobody";
    lines.box2 = "nobody";
    lines.box3 = "nobody";
    lines.box4 = "nobody";
    lines.box5 = "nobody";
    lines.box6 = "nobody";
    lines.box7 = "nobody";
    lines.box8 = "nobody";
    lines.box9 = "nobody";

    boxes.box1.isFull = false;
    boxes.box2.isFull = false;
    boxes.box3.isFull = false;
    boxes.box4.isFull = false;
    boxes.box5.isFull = false;
    boxes.box6.isFull = false;
    boxes.box7.isFull = false;
    boxes.box8.isFull = false;
    boxes.box9.isFull = false;

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
