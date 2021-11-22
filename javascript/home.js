// 3 dernières actualités
let actualité = document.querySelector(".home-actu");
actualité.innerHTML += `<div class="actualites">
<h2>Les Dernières Actualités</h2>
<div class="last-actu row">
    <section class="col-4">
        <article class="actu">
            <div>
                <img src="images/nm3/vs nancy.jpg" alt="img_actu1">
            </div>
            <div>
                <h3>Victoire des SM1 à Nancy !</h3>
                <p>Superbe victoire de nos SM1 à Nancy. Bravo à eux!</p>
        </article>
    </section>
    <section class="col-4">
        <article class="actu">
            <div>
                <img src="images/Modèle matchs we.png" alt="img_actu2">
            </div>
            <div>
                <h3>Soirée du Nouvel An</h3>
                <p>Réservation possible dès maintenant!</p>
        </article>
    </section>
    <section class="col-4">
        <article class="actu">
            <div>
                <img src="images/sponsors/ds-auto.png" alt="img_actu3">
            </div>
            <div>
                <h3>Nouveau sponsor</h3>
                <p>On souhaite la bienvenue à DS Automobiles!</p>
        </article>
    </section>
</div>
</div>
`

// Matchs SM1
let matchs_sm1 = document.querySelector(".matchs-sm1");
matchs_sm1.innerHTML += `
<div class="matchs-sm1">
        <h2>Matchs des SM1</h2>
        <div class="last-match">
            <section>
                <article class="actu">
                    <div class="dernier-match">
                        <h3>Dernier Match</h3>
                        <p><i class="fas fa-calendar-alt"></i> Samedi 16 Octobre 2021 | <i class="fas fa-clock"></i>
                            20h00</p>
                        <strong>
                            <p>64 - 78</p>
                        </strong>
                        <div class="annonce">
                            <img src="images/nancy.png" alt=""><img src="images/logo/logo-sans-fond.png" alt="">
                        </div>
                        <div class="stats">
                            <a
                                href="https://mr-stats.frenchbasketballscouting.fr/match/nm3/sluc-nancy-basket-association-weitbruch-ascg/20155">Statistiques</a>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <article class="actu">
                    <div class="prochain-match">
                        <h3>Prochain Match</h3>
                        <p> <i class="fas fa-calendar-alt"></i> Samedi 30 Octobre 2021 | <i class="fas fa-clock"></i>
                            20h00</p>
                        <p>Nationale Masculine 3</p>
                        <div class="annonce">
                            <img src="images/sig.png" alt=""><img src="images/logo/logo-sans-fond.png" alt="">
                        </div> <br />
                        <p>Hall Gallia</p>
                    </div>
                </article>
            </section>
        </div>
    </div>`

// Matchs we
let matchs_we = document.querySelector(".matchs-weekend");
matchs_we.innerHTML += `
<div class="matchs-we">
        <h2>Matchs du Week-End</h2>
        <div class="we-matchs">
            <section>
                <article class="domicile">
                    <div>
                        <h3>Matchs à Domicile</h3>
                        <p><i class="fas fa-calendar-alt"></i> Samedi 30 Octobre 2021 | <i class="fas fa-clock"></i>
                            15h00</p>
                        <strong>
                            <p class="matchs-equipe">SF1 vs Souffelweyersheim</p>
                        </strong>
                        <p><i class="fas fa-calendar-alt"></i> Samedi 30 Octobre 2021 | <i class="fas fa-clock"></i>
                            17h00</p>
                        <strong>
                            <p class="matchs-equipe">U20 vs Colmar</p>
                        </strong>
                        <p><i class="fas fa-calendar-alt"></i> Samedi 30 Octobre 2021 | <i class="fas fa-clock"></i>
                            20h00</p>
                        <strong>
                            <p class="matchs-equipe">SM1 vs Sig</p>
                        </strong>
                    </div>
                </article>
            </section>
            <section>
                <article class="exterieur">
                    <div>
                        <h3>Matchs à l'Extérieur</h3>
                        <p>Aucun matchs à l'éxtérieur ce week-end.</p>
                    </div>
                </article>
            </section>
        </div>
    </div>`