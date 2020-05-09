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

var box1 = {
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
};

var box2 = {
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
};

var box3 = {
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
};

var box4 = {
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
};

var box5 = {
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
};

var box6 = {
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
};

var box7 = {
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
};

var box8 = {
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
};

var box9 = {
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

    if (tmpLines.line1 == true && tmpLines.line4 == true && tmpLines.line5 == true && tmpLines.line8 == true && tmpLines.box1 == "nobody") {
        completedBox = true;
        if (isMaximizing == true) {
            tmpLines.box1 = "player2";
        }
        else {
            tmpLines.box1 = "player1";
        }
    }
    else if (tmpLines.line1 == false || tmpLines.line4 == false || tmpLines.line5 == false || tmpLines.line8 == false) {
        tmpLines.box1 = "nobody";
    }

    if (tmpLines.line2 == true && tmpLines.line5 == true && tmpLines.line6 == true && tmpLines.line9 == true && tmpLines.box2 == "nobody") {
        completedBox = true;
        if (isMaximizing == true) {
            tmpLines.box2 = "player2";
        }
        else {
            tmpLines.box2 = "player1";
        }
    }
    else if (tmpLines.line2 == false || tmpLines.line5 == false || tmpLines.line6 == false || tmpLines.line9 == false) {
        tmpLines.box2 = "nobody";
    }

    if (tmpLines.line3 == true && tmpLines.line6 == true && tmpLines.line7 == true && tmpLines.line10 == true && tmpLines.box3 == "nobody") {
        completedBox = true;
        if (isMaximizing == true) {
            tmpLines.box3 = "player2";
        }
        else {
            tmpLines.box3 = "player1";
        }
    }
    else if (tmpLines.line3 == false || tmpLines.line6 == false || tmpLines.line7 == false || tmpLines.line10 == false) {
        tmpLines.box3 = "nobody";
    }

    if (tmpLines.line8 == true && tmpLines.line11 == true && tmpLines.line12 == true && tmpLines.line15 == true && tmpLines.box4 == "nobody") {
        completedBox = true;
        if (isMaximizing == true) {
            tmpLines.box4 = "player2";
        }
        else {
            tmpLines.box4 = "player1";
        }
    }
    else if (tmpLines.line8 == false || tmpLines.line11 == false || tmpLines.line12 == false || tmpLines.line15 == false) {
        tmpLines.box4 = "nobody";
    }

    if (tmpLines.line9 == true && tmpLines.line12 == true && tmpLines.line13 == true && tmpLines.line16 == true && tmpLines.box5 == "nobody") {
        completedBox = true;
        if (isMaximizing == true) {
            tmpLines.box5 = "player2";
        }
        else {
            tmpLines.box5 = "player1";
        }
    }
    else if (tmpLines.line9 == false || tmpLines.line12 == false || tmpLines.line13 == false || tmpLines.line16 == false) {
        tmpLines.box5 = "nobody";
    }

    if (tmpLines.line10 == true && tmpLines.line13 == true && tmpLines.line14 == true && tmpLines.line17 == true && tmpLines.box6 == "nobody") {
        completedBox = true;
        if (isMaximizing == true) {
            tmpLines.box6 = "player2";
        }
        else {
            tmpLines.box6 = "player1";
        }
    }
    else if (tmpLines.line10 == false || tmpLines.line13 == false || tmpLines.line14 == false || tmpLines.line17 == false) {
        tmpLines.box6 = "nobody";
    }

    if (tmpLines.line15 == true && tmpLines.line18 == true && tmpLines.line19 == true && tmpLines.line22 == true && tmpLines.box7 == "nobody") {
        completedBox = true;
        if (isMaximizing == true) {
            tmpLines.box7 = "player2";
        }
        else {
            tmpLines.box7 = "player1";
        }
    }
    else if (tmpLines.line15 == false || tmpLines.line18 == false || tmpLines.line19 == false || tmpLines.line22 == false) {
        tmpLines.box7 = "nobody";
    }

    if (tmpLines.line16 == true && tmpLines.line19 == true && tmpLines.line20 == true && tmpLines.line23 == true && tmpLines.box8 == "nobody") {
        completedBox = true;
        if (isMaximizing == true) {
            tmpLines.box8 = "player2";
        }
        else {
            tmpLines.box8 = "player1";
        }
    }
    else if (tmpLines.line16 == false || tmpLines.line19 == false || tmpLines.line20 == false || tmpLines.line23 == false) {
        tmpLines.box8 = "nobody";
    }

    if (tmpLines.line17 == true && tmpLines.line20 == true && tmpLines.line21 == true && tmpLines.line24 == true && tmpLines.box9 == "nobody") {
        completedBox = true;
        if (isMaximizing == true) {
            tmpLines.box9 = "player2";
        }
        else {
            tmpLines.box9 = "player1";
        }
    }
    else if (tmpLines.line17 == false || tmpLines.line20 == false || tmpLines.line21 == false || tmpLines.line24 == false) {
        tmpLines.box9 = "nobody";
    }

    var data = [completedBox, tmpLines];

    return data;
}

function scoreLines(tmpLines) {
    var score = 0;

    if (tmpLines.box1 == "player1") {
        score--;
    }
    else if (tmpLines.box1 == "player2") {
        score++;
    }

    if (tmpLines.box2 == "player1") {
        score--;
    }
    else if (tmpLines.box2 == "player2") {
        score++;
    }

    if (tmpLines.box3 == "player1") {
        score--;
    }
    else if (tmpLines.box3 == "player2") {
        score++;
    }

    if (tmpLines.box4 == "player1") {
        score--;
    }
    else if (tmpLines.box4 == "player2") {
        score++;
    }

    if (tmpLines.box5 == "player1") {
        score--;
    }
    else if (tmpLines.box5 == "player2") {
        score++;
    }

    if (tmpLines.box6 == "player1") {
        score--;
    }
    else if (tmpLines.box6 == "player2") {
        score++;
    }

    if (tmpLines.box7 == "player1") {
        score--;
    }
    else if (tmpLines.box7 == "player2") {
        score++;
    }

    if (tmpLines.box8 == "player1") {
        score--;
    }
    else if (tmpLines.box8 == "player2") {
        score++;
    }

    if (tmpLines.box9 == "player1") {
        score--;
    }
    else if (tmpLines.box9 == "player2") {
        score++;
    }

    return score;
}

function boxFull() {
    var box1Element = document.getElementById("box1");
    var box2Element = document.getElementById("box2");
    var box3Element = document.getElementById("box3");
    var box4Element = document.getElementById("box4");
    var box5Element = document.getElementById("box5");
    var box6Element = document.getElementById("box6");
    var box7Element = document.getElementById("box7");
    var box8Element = document.getElementById("box8");
    var box9Element = document.getElementById("box9");
    var completedBox = false;

    if (box1.lines_available() == 0 && box1.isFull == false) {
        lines.box1 = turn;
        box1.isFull = true;
        completedBox = true;
        if (turn == "player1") {
            player1Score++;
            box1Element.style.fill = "DeepSkyBlue";
        }
        else {
            player2Score++;
            box1Element.style.fill = "IndianRed";
        }
    }
    if (box2.lines_available() == 0 && box2.isFull == false) {
        lines.box2 = turn;
        box2.isFull = true;
        completedBox = true;
        if (turn == "player1") {
            player1Score++;
            box2Element.style.fill = "DeepSkyBlue";
        }
        else {
            player2Score++;
            box2Element.style.fill = "IndianRed";
        }
    }
    if (box3.lines_available() == 0 && box3.isFull == false) {
        lines.box3 = turn;
        box3.isFull = true;
        completedBox = true;
        if (turn == "player1") {
            player1Score++;
            box3Element.style.fill = "DeepSkyBlue";
        }
        else {
            player2Score++;
            box3Element.style.fill = "IndianRed";
        }
    }
    if (box4.lines_available() == 0 && box4.isFull == false) {
        lines.box4 = turn;
        box4.isFull = true;
        completedBox = true;
        if (turn == "player1") {
            player1Score++;
            box4Element.style.fill = "DeepSkyBlue";
        }
        else {
            player2Score++;
            box4Element.style.fill = "IndianRed";
        }
    }
    if (box5.lines_available() == 0 && box5.isFull == false) {
        lines.box5 = turn;
        box5.isFull = true;
        completedBox = true;
        if (turn == "player1") {
            player1Score++;
            box5Element.style.fill = "DeepSkyBlue";
        }
        else {
            player2Score++;
            box5Element.style.fill = "IndianRed";
        }
    }
    if (box6.lines_available() == 0 && box6.isFull == false) {
        lines.box6 = turn;
        box6.isFull = true;
        completedBox = true;
        if (turn == "player1") {
            player1Score++;
            box6Element.style.fill = "DeepSkyBlue";
        }
        else {
            player2Score++;
            box6Element.style.fill = "IndianRed";
        }
    }
    if (box7.lines_available() == 0 && box7.isFull == false) {
        lines.box7 = turn;
        box7.isFull = true;
        completedBox = true;
        if (turn == "player1") {
            player1Score++;
            box7Element.style.fill = "DeepSkyBlue";
        }
        else {
            player2Score++;
            box7Element.style.fill = "IndianRed";
        }
    }
    if (box8.lines_available() == 0 && box8.isFull == false) {
        lines.box8 = turn;
        box8.isFull = true;
        completedBox = true;
        if (turn == "player1") {
            player1Score++;
            box8Element.style.fill = "DeepSkyBlue";
        }
        else {
            player2Score++;
            box8Element.style.fill = "IndianRed";
        }
    }
    if (box9.lines_available() == 0 && box9.isFull == false) {
        lines.box9 = turn;
        box9.isFull = true;
        completedBox = true;
        if (turn == "player1") {
            player1Score++;
            box9Element.style.fill = "DeepSkyBlue";
        }
        else {
            player2Score++;
            box9Element.style.fill = "IndianRed";
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

    document.getElementById("box1").style.fill = "white";
    document.getElementById("box2").style.fill = "white";
    document.getElementById("box3").style.fill = "white";
    document.getElementById("box4").style.fill = "white";
    document.getElementById("box5").style.fill = "white";
    document.getElementById("box6").style.fill = "white";
    document.getElementById("box7").style.fill = "white";
    document.getElementById("box8").style.fill = "white";
    document.getElementById("box9").style.fill = "white";

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

    box1.isFull = false;
    box2.isFull = false;
    box3.isFull = false;
    box4.isFull = false;
    box5.isFull = false;
    box6.isFull = false;
    box7.isFull = false;
    box8.isFull = false;
    box9.isFull = false;

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
