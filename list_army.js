//global variables
javascript: var ww = {
    "": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};
var wd = {
    "": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};
var player_id = 0;
let global_code = "";
var playerPoints = 0;
var playerArmy = 0;
$(".w100").find("tr").nextAll().remove()
$(".w100").find("th:last").remove()
$(".w100").find("th:last").remove()
$(".w100").find("th:last").remove()
$(".w100").find("th:last").after("<th>Punkty</th>")
$(".w100").find("th:last").after("<th>Wojsko</th>")
$(".w100").find("th:last").after("<th>Stosunek</th>")

function clearGlobal() {
    ww,
    (wd = {
        "": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    });
}

function GetPoints(record) {
    var m = $(record).find("#player_info");

    var y = m.find("tr");
    var z = y.find("td").eq(2).html()
    var punkty = z.replace('<span class="grey">.</span>', "");
    playerPoints = punkty;
    $(".w100").find("tr:last").find("td:last").after("<td>" + playerPoints + "</td>")
    $(".w100").find("tr:last").find("td:last").after("<td>" + playerArmy + "</td>")
    $(".w100").find("tr:last").find("td:last").after("<td>" + (playerArmy / playerPoints).toFixed(2) + "</td>")
}

function SumArmy(record) {

    playerArmy = record[1] + record[2] + record[3] + record[4] + (2 * record[5]) + (4 * record[6]) + (5 * record[7]) + (6 * record[8]) + (5 * record[9]) + (8 * record[10]) + record[11] + (100 * record[12])

}

function getArmy(record) {
    var tmp, tmp2, tmp3;

    var m = $(record).find(".w100");
    var y = m.find("tr").slice(1);

    for (let i = 0; i <= y.length - 1; i++) {
        let tmp = y.eq(i);
        let tmp3 = tmp.find("td").eq(0);
        tmp3 = tmp3.find("a").text();
        if (ww[""]) {
            for (let j = 1; j <= 12; j++) {
                let tmp2 = tmp.find("td").eq(j).html();
                tmp2 = tmp2.replace('<span class="grey">.</span>', "");
                ww[""][j] += parseFloat(tmp2);

            }
        } else {
            ww[""] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let j = 1; j <= 12; j++) {
                let tmp2 = tmp.find("td").eq(j).html();
                tmp2 = tmp2.replace('<span class="grey">.</span>', "");
                ww[""][j] += parseFloat(tmp2);
            }
        }
    }
    SumArmy(ww[""])

}


function getArmyDefence(record) {
    var tmp, tmp2, tmp3;

    var m = $(record).find(".w100");
    var y = m.find("tr").slice(1);

    for (let i = 0; i <= y.length - 1; i++) {
        if (i % 2 == 0) {


            let tmp = y.eq(i);
            let tmp3 = tmp.find("td").eq(0);

            tmp3 = tmp3.find("a").text();
            if (ww[""]) {
                for (let j = 2; j <= 12; j++) {

                    let tmp2 = tmp.find("td").eq(j).html();

                    tmp2 = tmp2.replace('<span class="grey">.</span>', "");
                    let x = j - 1;
                    ww[""][x] += parseFloat(tmp2);
                }
            } else {
                ww[""] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (let j = 2; j <= 12; j++) {
                    let tmp2 = tmp.find("td").eq(j).html();
                    tmp2 = tmp2.replace('<span class="grey">.</span>', "");
                    let x = j - 1
                    ww[""][x] += parseFloat(tmp2);
                }
            }
        }
    }
}

function getArmyIncoming(record) {
    var tmp, tmp2, tmp3;

    var m = $(record).find(".w100");
    var y = m.find("tr").slice(1);

    for (let i = 0; i <= y.length - 1; i++) {
        if (i % 2 == 1) {


            let tmp = y.eq(i);
            let tmp3 = tmp.find("td").eq(0);

            tmp3 = tmp3.find("a").text();
            if (ww[""]) {
                for (let j = 2; j <= 12; j++) {

                    let tmp2 = tmp.find("td").eq(j).html();

                    tmp2 = tmp2.replace('<span class="grey">.</span>', "");
                    tmp2 = tmp2.replace('?', "0")
                    let x = j;
                    ww[""][x] += parseFloat(tmp2);
                }
            } else {
                ww[""] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (let j = 2; j <= 12; j++) {
                    let tmp2 = tmp.find("td").eq(j).html();
                    tmp2 = tmp2.replace('<span class="grey">.</span>', "");
                    let x = j
                    ww[""][x] += parseFloat(tmp2);
                }
            }
        }
    }
}

function addArmy(player_name) {
    var xxx;
    for (key in ww) {
        xxx = String(ww[key]);
    }
    xxx = xxx.replace(/,/gi, "</td><td>");
    $(".w100")
        .find("tr:last")
        .after("<tr><td>" + player_name + "</td><b>" + xxx + "</b></r>");
    ww[""] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}
class UrlBuilder {
    constructor(template) {
        this.template = template;
    }
    build(args) {
        let result = this.template;
        let keys = Object.keys(args);
        keys.forEach((e) => {
            result = result.replace("{{" + e + "}}", args[e]);
        });
        return result;
    }
}

class App {
    constructor(config) {
        this.config = config;
    }
    load() {
        this.iterator = 0;
        this.members = $(".input-nicer").find("option");
        this.interval = setInterval($.proxy(this.update, this), 100);
    }
    unload() {
        if (this.interval != undefined && this.interval != null)
            clearInterval(this.interval);
    }
    update() {
        if (this.iterator >= this.members.length - 1) {
            this.unload();
            return;
        }
        this.getData(this.members[this.iterator++]);
    }

    getData(input) {
        let player = $(this.members[this.iterator]).val();
        let url = new UrlBuilder(
            "https://{{world}}.plemiona.pl/game.php?screen=ally&mode={{type}}&player_id={{name}}&village=835"
        );

        this.askServer(
            url.build({
                world: game_data.world,
                type: "members_troops",
                name: player,
            }),
            function (response) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(response, "text/html");

                getArmy(doc);
                doc = $(doc);
                let player_name = "<a href='/game.php?village=31162&amp;screen=info_player&amp;id=" + (doc).find("option:selected").val() + "'>" + $(doc).find("option:selected").text().trim() + "</a>";
                player_id = (doc).find("option:selected").val()
                addArmy(player_name);
                clearGlobal();
                return;
            }
        );
        this.askServer(
            `https://pl151.plemiona.pl/game.php?village=31162&screen=info_player&id=${player_id}#524;487`,
            function (response) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(response, "text/html");

                GetPoints(doc)
                doc = $(doc);
                clearGlobal();
                return;
            }
        );
        this.askServer(
            url.build({
                world: game_data.world,
                type: "members_defense",
                name: player,
            }),
            function (response) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(response, "text/html");

                getArmyDefence(doc);
                doc = $(doc);
                let player_name = "w obronie"
                addArmy(player_name);
                clearGlobal();
                return;
            }
        );
        this.askServer(
            url.build({
                world: game_data.world,
                type: "members_defense",
                name: player,
            }),
            function (response) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(response, "text/html");

                getArmyIncoming(doc);
                doc = $(doc);
                let player_name = "w drodze"
                addArmy(player_name);
                clearGlobal();
                return;
            }
        );


    }
    askServer(url, callback) {
        $.ajax({
            url: url,
            type: "get",
            dataType: "html",
            async: false,
            success: function (d) {
                callback(d);
            },
        });
    }
}

let app = new App({});
app.load();