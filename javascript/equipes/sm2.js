// Recup de l'id dans l'url
let searchParam = (new URL(window.location)).searchParams;
// Extraire id
let id = searchParam.get("team_id");

// Création partie du haut, photo d'équipe
// A FAIRE, rendre l'url comme variable
fetch('https://qxjpbef.cluster030.hosting.ovh.net/teams?short_name=sm2')
    .then(response => response.json())
    .then(data => {
        let container = document.querySelector("#Equipe .row");
        data.forEach(team => {
            container.innerHTML += `
            <div class="photo-equipe">
                <h2>${team.division}, Poule ${team.group}</h2>
                <img src="" alt="photo-equipe-sm2">
            </div>`;
        })
    });

// Création partie Effectif
fetch('https://qxjpbef.cluster030.hosting.ovh.net/players?teams.short_name=sm2')
    .then(response => response.json())
    .then(data => {
        let container = document.querySelector("#Equipe .players");
        data.forEach(players => {
            container.innerHTML += `
        <div class="effectif-equipe-autre">
            <h3>${players.number} <i class="fas fa-arrow-circle-down"></i></h3>
            <p>${players.lastname} ${players.firstname}</p>
        </div>`;
        })
    });

// Création partie Calendrier
fetch('https://qxjpbef.cluster030.hosting.ovh.net/teams?short_name=sm2')
    .then(response => response.json())
    .then(data => {
        let container = document.querySelector("#Equipe .calendar");
        data.forEach(calendar => {
            container.innerHTML += `
        <div class="calendrier">
            <h3><i class="fas fa-angle-double-down"></i> Retrouvez le calendrier des ${calendar.name} et le classement en cliquant sur le
                logo FFBB ci-dessous <i class="fas fa-angle-double-down"></i></h3>
            <a href="${calendar.calendar}"><img
                target="_blank" src="../images/logo/logo-FFBB.png" alt="ffbb"></a>
        </div>`;
        })
    });