var presets = [[666,704,706,734,735,742,743,773,777,782,783,796,797,802,803,812,818,822,823,836,837,842,843,852,856,858,859,864,866,892,898,906,933,937,974,975],[780,820,860],[780,818,819,860,861,899],[777,782,815,816,818,819,820,821,823,824,857,862],[780,818,820,859,860],[779,782,818,858,862,898,899,900,901],[699,700,701,739,741,779,781,859,861,899,901,939,940,941],[780,781,819,820,860],[575,576,582,583,616,617,621,622,653,656,658,660,662,665,693,694,695,697,698,700,701,703,704,705,734,736,738,740,742,744,775,776,777,781,782,783,855,856,857,861,862,863,894,896,898,900,902,904,933,934,935,937,938,940,941,943,944,945,973,976,978,980,982,985,1016,1017,1021,1022,1055,1056,1062,1063]];
var presetnames = [["Glider gun."],["Blinker."],["Clock."],["Pulsator."],["Glider."],["Spaceship."],["Bracket."],["F-pentomino."],["Pulsar."]];
var generation, cell, cellLastGeneration, cellLastLastGeneration, interval;

Array.prototype.clone = function() {
    return this.slice(0);
};

function setup()
{
    generation = 0;
    cell = [];
    for (var i = 0; i < 1600; i++) {
        setCellDead(i);
    }
    cellLastGeneration = cell.clone();
    cellLastLastGeneration = cell.clone();
    showMessage('Click to place living cells.');
    initializeScreen();
}

function show()
{
    for (var y = 0; y < 40; y++) {
        for (var x = 0; x < 40; x++) {
            var currentStatus = $('#index_' + (y * 40 + x)).attr('class');
            var newStatus = cell[y * 40 + x].status;
            if (currentStatus != newStatus) {
                $('#index_' + (y * 40 + x)).attr('class', newStatus);
            }
        }
    }
}

function initializeScreen()
{
    var board = '';
    board += '<table id="board">';
    for (var y = 0; y < 40; y++) {
        board += '<tr>';
        for (var x = 0; x < 40; x++) {
            board += getCell(cell[y * 40 + x].status, y * 40 + x);
        }
        board += '</tr>';
    }
    board += '</table>';

    $('#screen').html(board);
}

function draw(i)
{
    setCellAlive(i);
    show();
}

function startstop()
{
    if (interval) {
        stop();
    } else {
        start();
    }
}

function start()
{
    interval = window.setInterval(step, 100);
    $('#startstop').html('Stop');
}

function stop()
{
    window.clearInterval(interval);
    interval = null;
    show();
    $('#startstop').html('Start');
}

function step()
{
    cellLastLastGeneration = cellLastGeneration.clone();
    cellLastGeneration = cell.clone();
    generation++;
    updateCellStatus();
    var isStableMessage = '';
    if (isStable()) {
        isStableMessage += ' STABLE!';
    }
    showMessage('Generations: ' + generation + isStableMessage);
    show();
    if (isStable()) {
        stop();
    }
}

function updateCellStatus()
{
    var numb = findNeighboursAlive();
    for (var i = 0; i < 1600; i++) {
        if (!cell[i].alive && numb[i] == 3) {
            setCellAlive(i);
        }
        if (cell[i].alive && (numb[i] < 2 || numb[i] > 3)) {
            setCellDead(i);
        }
    }
}

function findNeighboursAlive()
{
    var neighbors = [-41, -40, -39, -1, 1, 39, 40, 41];
    var numb = [];
    for (var i = 0; i < 1600; i++) {
        var numberOfNeighborsAlive = 0;
        for (var neighbor = 0; neighbor < 8; neighbor++) {
            if (i + neighbors[neighbor] < 0 || i + neighbors[neighbor] > 1599) {
                continue;
            }
            if (cell[i + neighbors[neighbor]].alive) {
                numberOfNeighborsAlive++;
            }
        }
        numb.push(numberOfNeighborsAlive);
    }

    return numb;
}

function preset()
{
    setup();
    presets.push(presets[0]);
    presetnames.push(presetnames[0]);
    presets.shift();
    presetnames.shift();
    for (var i = 0; i < presets[0].length; i++) {
        setCellAlive(presets[0][i]);
    }
    showMessage(presetnames[0]);
    show();
}

function random()
{
    setup();
    for (var i = 0; i < 1600; i++) {
        if (Math.random() < .2) {
            setCellAlive(i);
        }
    }
    showMessage('Random population.');
    show();
}

function getCell(color, index)
{
    return '<td id="index_' + index + '" class="' + color + '" onclick="draw(' + index + ')"><\/td>';
}

function showMessage(message)
{
    $('#message').html(message);
}

function setCellAlive(index)
{
    cell[index] = {
        alive: true,
        status: 'alive'
    }
}

function setCellDead(index)
{
    cell[index] = {
        alive: false,
        status: 'dead'
    }
}

function isStable()
{
    for (var i = 0; i < 1600; i++) {
        if (cell[i].alive != cellLastGeneration[i].alive && cell[i].alive != cellLastLastGeneration[i].alive) {
            return false;
        }
    }

    return true;
}
