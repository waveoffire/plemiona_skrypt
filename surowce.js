var woodInVillage = parseInt(document.getElementById('wood').innerText);
var stoneInVillage = parseInt(document.getElementById('stone').innerText);
var ironInVillage = parseInt(document.getElementById('iron').innerText);
var merchantAvailable = parseInt(document.getElementById("market_merchant_available_count").innerText)
document.getElementsByClassName('target-select-links')[0].children[1].click() // open popup
var villages = document.getElementById('village_targets_content').children[2].children[0].children
villagestext = []
if (document.getElementById("market_status_bar").children[1]) {
    if (document.getElementsByClassName("icon header wood")[1].nextSibling != null) {
        var incomingWood = parseInt(document.getElementsByClassName("icon header wood")[1].nextSibling.nodeValue.split('.').join(""))
    } else {
        var incomingWood = 0
    }
    if (document.getElementsByClassName("icon header stone")[1].nextSibling != null) {
        var incomingStone = parseInt(document.getElementsByClassName("icon header stone")[1].nextSibling.nodeValue.split('.').join(""))
    } else {
        var incomingStone = 0
    }
    if (document.getElementsByClassName("icon header iron")[1].nextSibling != null) {
        var incomingIron = parseInt(document.getElementsByClassName("icon header iron")[1].nextSibling.nodeValue.split('.').join(""))
    } else {
        var incomingIron = 0
    }
} else {
    var incomingWood = 0
    var incomingStone = 0
    var incomingIron = 0
}

var wood = woodInVillage + incomingWood;
var stone = stoneInVillage + incomingStone;
var iron = ironInVillage + incomingIron;
for (i = 0; villages.length > i; i++) {

    villagestext.push(document.getElementById('village_targets_content').children[2].children[0].children[i].children[1].innerText.split('.').join("").split(" "))

}



if (wood > stone) {
    if (wood > iron) {
        console.log("wiecej drewna")
        sendWood()

    } else {
        console.log("wiecej zelaza1")
        sendIron()
    }
} else {
    if (stone > iron) {
        console.log("wiecej gliny")
        sendStone()

    } else {
        console.log("wiecej zelaza2")
        sendIron()

    }
}

function sendStone() {

    whereSend(1)
}

function sendWood() {

    whereSend(0)
}

function sendIron() {

    whereSend(2)
}


function whereSend(what) {
    for (i = 0; villagestext.length > i; i++) {
        var otherWood = parseInt(villagestext[i][0])
        var otherStone = parseInt(villagestext[i][1])
        var otherIron = parseInt(villagestext[i][2])

        if (otherWood < otherStone) {
            if (otherWood < otherIron) {
                console.log("other mniej drewna")
                if (what = 0 && merchantAvailable >= 5) {
                    document.getElementsByName('wood')[0].value = 5000;
                    document.getElementById('village_targets_content').children[2].children[0].children[i].children[0].children[0].click()
                    break;

                }
            } else {
                console.log("other mniej zelaza1")
                if (what = 2 && merchantAvailable >= 5) {
                    document.getElementsByName('iron')[0].value = 5000;
                    document.getElementById('village_targets_content').children[2].children[0].children[i].children[0].children[0].click()
                    break;
                }
            }
        } else {
            if (otherStone < otherIron) {
                console.log("other mniej gliny")
                if (what = 1 && merchantAvailable >= 5) {
                    document.getElementsByName('stone')[0].value = 5000;
                    document.getElementById('village_targets_content').children[2].children[0].children[i].children[0].children[0].click()
                    break;
                }
            } else {
                console.log("other mniej zelaza2")
                if (what = 2 && merchantAvailable >= 5) {
                    document.getElementsByName('iron')[0].value = 5000;
                    document.getElementById('village_targets_content').children[2].children[0].children[i].children[0].children[0].click()
                    break;
                }
            }
        }
    }
}