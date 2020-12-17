if (window.location.href.search("screen=am_farm") > 0) {
    var okienko = "<h2 align='center'>FarmBot</h2><table width='100%'>";
    okienko += "<tr colspan='4'><th>KtĂłrym szablonem?</th></table>";
    okienko += "<div><a style='display:inline-block;margin-right:10px' class='farm_icon farm_icon_a decoration' href='#' onclick='szablon(`A`);'></a><a style='display:inline-block' class='farm_icon farm_icon_b decoration' href='#' onclick='szablon(`A`);'></a></div>"
    okienko += "<div id='pracuje'>Pracuje....</div>"
    okienko += "<div class='float_right'><a id='start' class='btn' onclick='start()'>START</a><a id='stop' class='btn' onclick='window.localStorage.setItem(`start`, `false`);'>STOP</a></div>"
    Dialog.show("okienko_komunikatu", okienko);
    window.localStorage.setItem(`szablon`, "A")

    function szablon(litera) {
        window.localStorage.setItem(`szablon`, litera)
        rodzaj = window.localStorage.getItem("szablon")
    }

    function getSzab(rodzaj) {
        if (rodzaj == "A") {
            var szabA = {
                spear: document.getElementsByName("spear")[0].value,
                sword: document.getElementsByName("sword")[0].value,
                axe: document.getElementsByName("axe")[0].value,
                spy: document.getElementsByName("spy")[0].value,
                light: document.getElementsByName("light")[0].value,
                heavy: document.getElementsByName("heavy")[0].value
            }
            return szabA;
        } else if (rodzaj == "B") {
            var szabB = {
                spear: document.getElementsByName("spear")[1].value,
                sword: document.getElementsByName("sword")[1].value,
                axe: document.getElementsByName("axe")[1].value,
                spy: document.getElementsByName("spy")[1].value,
                light: document.getElementsByName("light")[1].value,
                heavy: document.getElementsByName("heavy")[1].value
            }
            return szabB
        }
    }

    function getDost() {

        var dost = {
            spear: document.getElementById("spear").innerHTML,
            sword: document.getElementById("sword").innerHTML,
            axe: document.getElementById("axe").innerHTML,
            spy: document.getElementById("spy").innerHTML,
            light: document.getElementById("light").innerHTML,
            heavy: document.getElementById("heavy").innerHTML,
        }
        return dost

    }

    function CheckPageSize() {
        if (document.getElementById("farm_pagesize")) {
            if (document.getElementById("farm_pagesize").value) {


                let farm_pagesize = document.getElementById("farm_pagesize").value;
                if (farm_pagesize != 100) {
                    document.getElementById("farm_pagesize").value = 100
                    $('input[value="Zmień"]').click();
                }
            }
        }
    }

    function CheckUnits() {
        var klik = []

        let szablist = getSzab(rodzaj)
        let dostlist = getDost()

        if (szablist.spear != 0) {
            klik.push(dostlist.spear / szablist.spear)
        }
        if (szablist.sword != 0) {
            klik.push(dostlist.sword / szablist.sword)
        }
        if (szablist.axe != 0) {
            klik.push(dostlist.axe / szablist.axe)
        }
        if (szablist.spy != 0) {
            klik.push(dostlist.spy / szablist.spy)
        }
        if (szablist.light != 0) {
            klik.push(dostlist.light / szablist.light)
        }
        if (szablist.heavy != 0) {
            klik.push(dostlist.heavy / szablist.heavy)
        }
        return Math.floor(Math.min(...klik))

    }

    function farmClick(guzik) {
        let randomTime = Math.round(Math.random() * 100) + 300;
        setTimeout(function () {
            if (guzik) {

                guzik.click()
                console.log("click")
            }
            if (units > petla) {
                petla++;
                farm()
            } else {
                setTimeout(function () {
                    odswiez()
                }, 30000)
            }
        }, randomTime);

    }

    function odswiez() {
        document.getElementsByClassName("arrowRight")[0].click()
    }

    function farm() {
        var guzik = "a.farm_icon_" + rodzaj.toLowerCase();
        tablicaGuzikow = $(guzik);
        tablicaGuzikow.splice(0, 1)
        farmClick(tablicaGuzikow[petla])
    }

    function start() {
        console.log("start")
        window.localStorage.setItem(`start`, true);
        CheckPageSize()
        if (units != 0) {
            farm()
        } else setTimeout(function () {
            odswiez()
        }, 12000)
    }


    var rodzaj = window.localStorage.getItem("szablon") || "A"
    var petla = 0
    let units = CheckUnits();
    if (window.localStorage.getItem("start") == "true") {
        start()
    }
}