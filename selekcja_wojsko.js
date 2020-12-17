var options = document.getElementsByName("player_id")[0].options
if (!localStorage.i || localStorage.i == 0) {
    var i = 0;
    var data = "<table><tbody>"
    data += "<tr><th style='min-width: 200px'>Nick</th><th><img src='https://dspl.innogamescdn.com/asset/70e1acd/graphic/unit/unit_spear.png'></th><th><img src='https://dspl.innogamescdn.com/asset/70e1acd/graphic/unit/unit_sword.png'></th><th><img src='https://dspl.innogamescdn.com/asset/70e1acd/graphic/unit/unit_archer.png'></th><th>zaliczone?</th></tr>"
    localStorage.setItem('i', i);
    localStorage.setItem('data', data);
} else {
    i = localStorage.i
    data = localStorage.data
}
var myinterval = setInterval(() => {
    if (i < options.length) {



        var name = document.getElementsByName("player_id")[0].options[i].innerText.trim()
        if (document.getElementsByName("player_id")[0].options[i].disabled == false) {



            var piki = document.getElementsByClassName("vis w100")[0].rows[1].children[1].innerText
            var miecze = document.getElementsByClassName("vis w100")[0].rows[1].children[2].innerText
            var luki = document.getElementsByClassName("vis w100")[0].rows[1].children[4].innerText
            if (piki >= 100 && miecze >= 100) {
                var zaliczone = true
            } else {
                var zaliczone = false
            }
            if (zaliczone == false) {

                data += "<tr><td>" + name + "</td> <td>" + piki + "</td><td>" + miecze + "</td><td>" + luki + "</td><td>" + zaliczone + "</td></tr>";
            }
            localStorage.setItem('data', data);
            i++;
            localStorage.setItem('i', i);
            window.location.href = "game.php?screen=ally&mode=members_troops&player_id=" + options[i].value
        } else {
            data += "<tr><td>" + name + "</td> <td>?</td><td>?</td><td>?</td><td>false</td></tr>";
            localStorage.setItem('data', data);
            i++;
            localStorage.setItem('i', i);
            window.location.href = "game.php?screen=ally&mode=members_troops&player_id=" + options[i].value
        }

    } else {
        data += "</tbody></table>"
        data += "<button id=cleardata>Wyczyść dane</button>"

        clearInterval(myinterval);
        Dialog.show("okienko_komunikatu", data);
        document.getElementById("cleardata").onclick = function () {
            localStorage.setItem('data', "");
            localStorage.setItem('i', "");
        };
    }
}, 1000);