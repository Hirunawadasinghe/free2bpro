let tab = 1;
let gameSelected = "";
let pointType = "";
let userId = "";
let pointCount = "";
let platform = "Android";
let gameServer = "Amsterdam, Netherlands";
let antyBanProxy = false;
let UseCurrentServer = false;
let redeemTasks = "notDone";
let tasksToDo = 3;
let redeemCount = Math.floor(Math.random() * (1698 - 1650 + 1)) + 1650;
document.getElementById("SuccessfullyRedeemedCount").textContent = redeemCount;

setInterval(updateUserCount, 5000);
setInterval(updateRedeemedCount, 8500);

function updateUserCount() {
    document.getElementById('onlineUsersCount').textContent = (Math.floor(Math.random() * (310 - 280 + 1)) + 280);
}

function updateRedeemedCount() {
    redeemCount = redeemCount + (Math.floor(Math.random() * (3 - 0 + 1)) + 0)
    document.getElementById("SuccessfullyRedeemedCount").textContent = redeemCount;
}

function cardClicked(game, point) {
    gameSelected = game;

    if (gameSelected === "Free Fire") {
        document.getElementById("fading-box").style.backgroundImage = "url(https://blog.en.uptodown.com/files/2022/09/free-fire-portada1.jpg)";
    } else if (gameSelected === "PUBG") {
        document.getElementById("fading-box").style.backgroundImage = "url(https://wallpapercave.com/wp/wp11916437.jpg)";
    } else if (gameSelected === "Call Of Duty") {
        document.getElementById("fading-box").style.backgroundImage = "url(https://images.hdqwalls.com/wallpapers/call-of-duty-mobile-4k-game-2b.jpg)";
    } else if (gameSelected === "Fortnite") {
        document.getElementById("fading-box").style.backgroundImage = "url(https://cdn2.unrealengine.com/fortnite-overview-page-key-art-bg-1920x1080-e4a1458f3037.jpg)";
    } else if (gameSelected === "Roblox") {
        document.getElementById("fading-box").style.backgroundImage = "url(https://prod.docsiteassets.roblox.com/assets/avatar/character-customization/Avatar-Banner.jpg)";
    } else if (gameSelected === "Valorant") {
        document.getElementById("fading-box").style.backgroundImage = "url(https://insider-gaming.com/wp-content/uploads/2022/11/valorant-consoles.jpg)";
    }

    pointType = point;
    ChangeVisibility("fading-box", "show");
    RefreshTab();
    document.getElementById("fading-box").classList.add("fade-box-fade-in");
}

function ChangeVisibility(item, visibility) {
    document.getElementById(item).style.display = visibility === "show" ? "block" : "none";
}

function ChangeTab(clickAction) {
    if (clickAction === "back") {
        if (tab === 1) {
            document.getElementById("fading-box").classList.remove("fade-box-fade-in");
            ChangeVisibility("fading-box", "hide");
        } else {
            tab = tab - 1;
            RefreshTab();
        }
    } else {
        if (tab === 6) {
            location.reload();
        } else {
            let error = "none";
            let userTextInput = document.getElementById("userTextInput").value;
            let userSelectInput = document.getElementById("userSelectInput").value;

            if (tab === 1) {
                if (userTextInput.length < 5) {
                    alert("Please enter your correct user ID");
                    error = "true";
                } else {
                    userId = userTextInput;
                    platform = userSelectInput;
                }
            } else if (tab === 2) {
                const result = containsLetters(userTextInput);
                if (userTextInput === "" || result === true) {
                    alert("Please enter the number of " + pointType + " you want");
                    error = "true";
                } else {
                    pointCount = userTextInput;
                }
            } else if (tab === 3) {
                gameServer = userSelectInput;
                antyBanProxy = document.getElementById("antyBanProxy").checked;
                UseCurrentServer = document.getElementById("UseCurrentServer").checked;
            } else if (tab === 4) {
                if (redeemTasks === "notDone") {
                    alert("Please complete the tasks to redeem your reward");
                    error = "true";
                }
            }

            if (error == "none") {
                tab = tab + 1;
                RefreshTab();
            }
        }
    }
}

function containsLetters(inputString) {
    const regex = /[a-zA-Z]/;
    return regex.test(inputString);
}

function RefreshTab() {

    if (tab === 1) {
        ChangeVisibility("share-note-container", "hide");
        ChangeVisibility("adContainer", "hide");
        ChangeVisibility("textInput", "show");
        ChangeVisibility("selectInput", "show");
        ChangeVisibility("checkInput", "hide");

        ModifySelection("remove", "all");

        ModifySelection("add", "Android");
        ModifySelection("add", "IOS");
        ModifySelection("add", "EMU");

        document.getElementById("userTextInput").value = userId;
        document.getElementById("userSelectInput").value = platform;

        document.getElementById("input-box-header").innerHTML = "Get " + pointType + " in " + gameSelected;
        document.getElementById("textInput-title").innerHTML = "Enter your " + gameSelected + " user ID";
        document.getElementById("userTextInput").placeholder = "Enter your user id";
        document.getElementById("selectInput-title").innerHTML = "Select your platform";
        document.getElementById("btn-back").innerHTML = "Cancel";
        document.getElementById("btn-next").innerHTML = "Next";
        document.getElementById("note").innerHTML = "Please enter your correct user ID";
    } else if (tab === 2) {
        ChangeVisibility("adContainer", "hide");
        ChangeVisibility("textInput", "show");
        ChangeVisibility("selectInput", "hide");
        ChangeVisibility("checkInput", "hide");

        document.getElementById("userTextInput").value = pointCount;
        document.getElementById("textInput-title").innerHTML = "Enter points count you want";
        document.getElementById("userTextInput").placeholder = "Enter your value here";
        document.getElementById("btn-back").innerHTML = "Back";
        document.getElementById("btn-next").innerHTML = "Next";
        document.getElementById("note").innerHTML = "The value entered must be greater than 10";
    } else if (tab === 3) {
        ChangeVisibility("adContainer", "hide");
        ChangeVisibility("textInput", "hide");
        ChangeVisibility("selectInput", "show");
        ChangeVisibility("checkInput", "show");

        ModifySelection("remove", "all");

        ModifySelection("add", "Amsterdam, Netherlands");
        ModifySelection("add", "Atlanta, USA");
        ModifySelection("add", "Barcelona, Spain");
        ModifySelection("add", "Chicago, USA");
        ModifySelection("add", "Dallas, USA");
        ModifySelection("add", "Dubai, UAE");
        ModifySelection("add", "Frankfurt, Germany");
        ModifySelection("add", "Helsinki, Finland");
        ModifySelection("add", "Hong Kong, China");
        ModifySelection("add", "Istanbul, Turkey");
        ModifySelection("add", "Johannesburg, South Africa");
        ModifySelection("add", "London, UK");
        ModifySelection("add", "Los Angeles, USA");
        ModifySelection("add", "Milan, Italy");
        ModifySelection("add", "Montreal, Canada");
        ModifySelection("add", "Moscow, Russia");
        ModifySelection("add", "Mumbai, India");
        ModifySelection("add", "New York, USA");
        ModifySelection("add", "Paris, France");
        ModifySelection("add", "Prague, Czech Republic");
        ModifySelection("add", "São Paulo, Brazil");
        ModifySelection("add", "Santiago, Chile");
        ModifySelection("add", "Seattle, USA");
        ModifySelection("add", "Seoul, South Korea");
        ModifySelection("add", "Singapore");
        ModifySelection("add", "Stockholm, Sweden");
        ModifySelection("add", "Sydney, Australia");
        ModifySelection("add", "Tokyo, Japan");
        ModifySelection("add", "Toronto, Canada");
        ModifySelection("add", "Warsaw, Poland");
        ModifySelection("add", "Other");

        document.getElementById("userSelectInput").value = gameServer;
        document.getElementById("antyBanProxy").checked = antyBanProxy;
        document.getElementById("UseCurrentServer").checked = UseCurrentServer;

        document.getElementById("input-box-header").innerHTML = "Get " + pointType + " in " + gameSelected;
        document.getElementById("checkInput-title").innerHTML = "Adjust the process settings as you need (optional)"
        document.getElementById("selectInput-title").innerHTML = "Select your game server";
        document.getElementById("btn-next").innerHTML = "Next";
        document.getElementById("btn-next").style.backgroundColor = "#ff0055";
        document.getElementById("note").innerHTML = "If your server name isn't in the server list, leave the 'Use current server' box unchecked";
    } else if (tab === 4) {
        ChangeVisibility("textInput", "hide");
        ChangeVisibility("selectInput", "hide");
        ChangeVisibility("checkInput", "hide");
        ChangeVisibility("adContainer", "show");

        document.getElementById("input-box-header").innerHTML = "Just a one step before redeem your reward";
        document.getElementById("btn-next").innerHTML = "Redeem";
        document.getElementById("btn-next").style.backgroundColor = "#ac2c56";
        document.getElementById("note").innerHTML = "Redeem button will unlock automatically after completing the tasks";
    } else {
        ChangeVisibility("textInput", "hide");
        ChangeVisibility("selectInput", "hide");
        ChangeVisibility("checkInput", "hide");
        ChangeVisibility("adContainer", "hide");
        ChangeVisibility("btn-back", "hide");
        ChangeVisibility("share-note-container", "show");

        document.getElementById("input-box-header").innerHTML = "Reward redeemed! Your reward will receive your game notification center within 24 hours.";
        document.getElementById("btn-next").innerHTML = "Close";
        document.getElementById("btn-next").style.backgroundColor = "#007bff";
        document.getElementById("note").innerHTML = "Your reward has been sent to the game mail center";
    }
}

function ModifySelection(action, item) {
    if (action === "add") {
        const selectElement = document.getElementById("userSelectInput");
        const option = document.createElement("option");
        option.text = item;
        option.value = item;
        selectElement.add(option);
    } else {
        const selectElement = document.getElementById("userSelectInput");
        while (selectElement.firstChild) {
            selectElement.removeChild(selectElement.firstChild);
        }
    }
}

function taskClicked(taskNumber) {
    document.getElementById("task-link-" + taskNumber).style.cursor = "not-allowed";
    document.getElementById("task-link-" + taskNumber).style.backgroundColor = "transparent";
    document.getElementById("task-link-" + taskNumber).style.color = "#b1b1b1";
    tasksToDo = tasksToDo - 1;
    if (tasksToDo < 1) {
        redeemTasks = "done";
        document.getElementById("btn-next").style.backgroundColor = "#ff0055";
        document.getElementById("note").innerHTML = "That's it. Click the Redeem button and get your reward now!";
    }
}

function copyToClipboard() {
    const link = 'free2bpro.is-great.org';
    const tempInput = document.createElement('input');
    tempInput.value = link;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('Link copied to clipboard');
}