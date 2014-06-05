var speed = [500,1000,2000,100];
var presets = [[666,704,706,734,735,742,743,773,777,782,783,796,797,802,803,812,818,822,823,836,837,842,843,852,856,858,859,864,866,892,898,906,933,937,974,975],[780,820,860],[780,818,819,860,861,899],[777,782,815,816,818,819,820,821,823,824,857,862],[780,818,820,859,860],[779,782,818,858,862,898,899,900,901],[699,700,701,739,741,779,781,859,861,899,901,939,940,941],[780,781,819,820,860],[575,576,582,583,616,617,621,622,653,656,658,660,662,665,693,694,695,697,698,700,701,703,704,705,734,736,738,740,742,744,775,776,777,781,782,783,855,856,857,861,862,863,894,896,898,900,902,904,933,934,935,937,938,940,941,943,944,945,973,976,978,980,982,985,1016,1017,1021,1022,1055,1056,1062,1063]];
var presetnames = [["Glider gun."],["Blinker."],["Clock."],["Pulsator."],["Glider."],["Spaceship."],["Bracket."],["F-pentomino."],["Pulsar."]];
var generation, b, cell, interval;

function setup()
{
    generation = 0;
    b = "<td class=\"alive\"><\/td>";
    cell = [];
    for (var i = 0; i < 1600; i++) {
        cell[i] = getCell('dead', i);
    }
    showMessage('Click to place living cells.');
    show();
}

function show()
{
    var board = '';
    board += '<table id="board">';
    for (var y = 0; y < 40; y++) {
        board += '<tr>';
        for (var x = 0; x < 40; x++) {
            board += cell[y * 40 + x];
        }
        board += '</tr>';
    }
    board += '</table>';

    $('#screen').html(board);
}

function draw(i)
{
    cell[i]=b;
    show();
}

function step()
{
    $('.menu_active').show();
    $('.menu_paused').hide();
    interval = window.setInterval('calc(1)', speed[0]);
}

function stop()
{
    calc(0);
}

function calc(a)
{
    generation++;
    showMessage('Generations: ' + generation);
    var neighbor = [-41, -40, -39, -1, 1, 39, 40, 41];
    var numb = [];
    if (a == 0) {
        window.clearInterval(interval);
        $('.menu_active').hide();
        $('.menu_paused').show();
    } else {
        for (var i = 0; i < 1600; i++) {
            var num = 0;
            for (var j = 0; j < 8; j++) {
                if (cell[i + neighbor[j]] == b) {
                    num++;
                }
            }
            numb.push(num);
        }
        for (i=0;i<1600;i++) {
            if (cell[i] != b && numb[i] == 3) {
                cell[i] = b;
            }
            if (cell[i] == b && (numb[i] < 2 || numb[i] > 3)) {
                cell[i] = getCell('wasAlive', i);
            }
        }
    }
    show();
}

function faster()
{
    if (speed[0] != 100) {
        speed.unshift(speed[speed.length-1]);
        speed.length--;
        window.clearInterval(interval);
        interval = window.setInterval('calc(1)', speed[0]);
    }
}

function slower()
{
    if (speed[0]!=2000) {
        speed.push(speed[0]);
        speed.shift();
        window.clearInterval(interval);
        interval = window.setInterval('calc(1)', speed[0]);
    }
}

function preset()
{
    setup();
    presets.push(presets[0]);
    presetnames.push(presetnames[0]);
    presets.shift();
    presetnames.shift();
    for (var i = 0; i < presets[0].length; i++) {
        cell[presets[0][i]] = b;
    }
    showMessage(presetnames[0]);
    show();
}

function random()
{
    setup();
    for (var i = 0; i < 1600; i++) {
        if (Math.random() < .2) {
            cell[i] = b;
        }
    }
    showMessage('Random population.');
    show();
}

function getCell(color, index)
{
    return '<td class="' + color + '" onclick="draw(' + index + ')"><\/td>';
}

function showMessage(message)
{
    $('#message').html(message);
}
