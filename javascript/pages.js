// Création partie page devenir partenaire
fetch('https://qxjpbef.cluster030.hosting.ovh.net/pages')
    .then(response => response.json())
    .then(data => {
        let container = document.querySelector(".devenir-partenaire");
        data.forEach(page => {
            container.innerHTML += `
            <div class="texte">
            <p>${page.content}</p> <br />
            <img src="http://qxjpbef.cluster030.hosting.ovh.net${page.image.formats.large.url}" alt="logo-fond-noir" width="80px">
            <p>TELEPHONE + MAIL A METTRE</p>
        </div>`;
        })
    });