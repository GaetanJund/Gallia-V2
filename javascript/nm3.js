// Création partie du haut, photo d'équipe
// A FAIRE, rendre l'url comme variable
fetch('https://qxjpbef.cluster030.hosting.ovh.net/teams?short_name=sm1')
    .then(response => response.json())
    .then(data => {
        let container = document.querySelector("#NM3 .row");
        data.forEach(nm3 => {
            container.innerHTML += `
            <div class="photo-equipe-nm3 col-12">
                <h2>${nm3.division}, Poule ${nm3.group}</h2>
                <img src=" http://qxjpbef.cluster030.hosting.ovh.net${nm3.image.formats.medium.url}" alt="photo-equipe-sm1">
            </div>`;
        })
    });

// Création partie Effectif
fetch('https://qxjpbef.cluster030.hosting.ovh.net/players?teams.short_name=sm1')
    .then(response => response.json())
    .then(data => {
        let container = document.querySelector("#NM3 .players");
        data.forEach(players => {
            container.innerHTML += `
            <div class="block-joueur row">
                <div class="joueur col-4">
                    <img src=" http://qxjpbef.cluster030.hosting.ovh.net${players.image.formats.medium.url}" alt="">
                    <div class="joueur-texte">
                        <h3>${players.number}</h3>
                        <strong>
                        <p>${players.lastname} ${players.firstname}</p>
                        </strong>
                        <p>Poste ${players.position} | ${(players.size / 100).toFixed(2)}</p>
                    </div>
                </div>
            </div>`;
        })
    });

// Création partie Calendrier
fetch('https://qxjpbef.cluster030.hosting.ovh.net/teams?short_name=sm1')
    .then(response => response.json())
    .then(data => {
        let container = document.querySelector("#NM3 .calendar");
        data.forEach(calendar => {
            container.innerHTML += `
            <div class="calendrier">
                <h3><i class="fas fa-angle-double-down"></i> Retrouvez le calendrier des SM1 et le classement en cliquant sur le
                    logo FFBB ci-dessous <i class="fas fa-angle-double-down"></i></h3>
                <a href="${calendar.calendar}"><img
                    target="_blank" src="../images/logo/logo-FFBB.png" alt="ffbb"></a>
            </div>`;
        })
    });