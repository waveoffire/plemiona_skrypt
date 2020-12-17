var okienko = "<h2 align='center'>AutoKlin</h2><table width='100%'>";
okienko += "<tr colspan='4'><th>Czas ataku</th></table>";
okienko += "dzień: <span style='display: flex;'><input size='10' id='data' value=''></span>"
okienko += "godzina: <span style='display: flex;'><input size='10' id='time' value=''></span>"
okienko += "milisekunda: <span style='display: flex;'><input size='10' id='milisec' value='300'></span>"
okienko += "do ataku: <span style='display: flex;' id='doataku'>czekam na potwierdzenie</span>"
okienko += "<div class='float_right'><a id='start' class='btn' onclick='accept()'>potwierdz</a></div>"
Dialog.show("okienko_komunikatu", okienko);
document.getElementById('time').value = document.getElementById("serverTime").innerText
document.getElementById("data").value = document.getElementById("serverDate").innerText


function accept() {
    var data = document.getElementById('data').value.match(/\d+/g);
    var time = document.getElementById('time').value.match(/\d+/g);
    var milisec = document.getElementById('milisec').value;
    //time[0] - 2 jesli czas letni //time[0] - 1 jezeli czas zimowy
    var wysylka = Date.UTC(data[2], data[1] - 1, data[0], time[0] - 2, time[1], time[2], 0);
    wysylka = wysylka / 1000
    czekaj(wysylka, milisec)
}

function czekaj(wysylka, milisec) {
    Timing.tick_interval = 1,
        Timing.tickHandlers.forwardTimers.tick = function (a) {
            for (var b = 0; b < this._timers.length; b++) {
                var c = this._timers[b];
                if ($.contains(document.body, c[0])) {
                    var d = c.data("duration"),
                        e = (Timing.getCurrentServerTime() + Timing.offset_to_server) / 1e3 + d,
                        f = e.toString(),
                        g = f.substring(f.indexOf("."), f.indexOf(".") + 4);
                    c.text(Format.date(e, !0) + g)
                    xd = g.substr(1);
                    console.log(e)
                    document.getElementById('doataku').innerText = (wysylka - e) + "sekund"
                    if (e > wysylka) {
                        if (xd > milisec) {

                            document.getElementById('troop_confirm_go').click()
                        }
                    }
                } else this._timers.splice(b, 1)
            }
        };
}