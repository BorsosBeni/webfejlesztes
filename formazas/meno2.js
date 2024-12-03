
function updateValue(value) {
    document.getElementById('rangeValue').textContent = value;
}

document.getElementById("beadas").addEventListener("click", fuggvenynev)
function fuggvenynev() {
    let pont = 0;

    // 1. kérdés
    const q1Answer = document.getElementById("brazil").checked;
    if (q1Answer == 1) {
        pont = pont + 1;
    }

    // 2. kérdés
    const germanyCheckbox = document.getElementById("germanyCheckbox").checked;
    const brazilCheckbox = document.getElementById("brazilCheckbox").checked;
    const italyCheckbox = document.getElementById("italyCheckbox").checked;
    const mexicoCheckbox = document.getElementById("mexicoCheckbox").checked;

    if (germanyCheckbox == 1 && brazilCheckbox == 1 && italyCheckbox == 0 && mexicoCheckbox == 0) {
        pont = pont + 1;
    }

    // 3. kérdés
    const germanGoals = document.getElementById("germanGoals").value;
    if (germanGoals >= 220 && germanGoals <= 230) { // Elfogadható becslés
        pont = pont + 1;
    }

    // 4. kérdés
    const continent = document.getElementById("continent").selectedIndex;
    if (continent == 1) {
        pont = pont + 1;
    }

    // 5. kérdés
    const q5Answer = document.getElementById("germanyFinals").checked;
    if (q5Answer == 1) {
        pont = pont + 1;
    }


    // 6. kérdés
    const leastGoalsTeam = document.getElementById("leastGoalsTeam").value.trim().toLowerCase();
    if (leastGoalsTeam == "indonézia" || leastGoalsTeam == "holland-indiá") {
        pont = pont + 1;
    }

    // Eredmény kiírása
    alert(`Összesen ${pont} pontot értél el a 6-ból!`);

    if (pont == 6) {
        alert("Gratulálok, tökéletes eredményt értél el!");
    }
}