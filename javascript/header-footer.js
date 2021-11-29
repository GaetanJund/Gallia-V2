// Création header
let header = document.querySelector(".header");
header.innerHTML += `
<header>
            <div class="navigation">
                <div class="logo col-12">
                    <a href="../home.html"><img src="../images/logo/logo-sans-fond.png" alt="logo-gallia"
                            width="100px"></a>
                    <h1>ASC Gallia Weitbruch</h1>
                </div>
                <nav class="col-12">
                    <ul>
                        <li class="deroulant"><a href="">Club</a> |
                            <ul class="sous">
                                <li><a href="../club/presentation.html">Présentation</a></li>
                                <li><a href="../club/organigramme.html">Organigramme</a></li>
                            </ul>
                        </li>
                        <li class="deroulant"><a href="../nm3/template-nm3.html">NM3</a> |
                        </li>
                        <li class="deroulant"><a href="">Masculins</a> |
                            <ul class="sous">
                                <li><a href="../equipes/template-sm2.html">Régionale 2</a></li>
                                <li><a href="../equipes/template-sm3.html">Pré-Région</a></li>
                                <li><a href="../equipes-masculines/departementale3.html">Départementale 3</a></li>
                                <li><a href="../equipes-masculines/u20.html">U20 Région</a></li>
                            </ul>
                        </li>
                        <li class="deroulant"><a href="">Féminines</a> |
                            <ul class="sous">
                                <li><a href="../equipes-feminines/pre-region.html">Pré-Région</a></li>
                                <li><a href="../equipes-feminines/depatementale2.html">Départementale 2</a></li>
                            </ul>
                        </li>
                        <li class="deroulant"><a href="">Jeunes</a> |
                            <ul class="sous">
                                <li><a href="../equipes jeunes/u17.html">U17M</a></li>
                                <li><a href="../equipes jeunes/u15.html">U15M</a></li>
                                <li><a href="../equipes jeunes/u13.html">U13F</a></li>
                                <li><a href="../equipes jeunes/u11.html">U11</a></li>
                            </ul>
                        </li>
                        <li class="deroulant"><a href="">Partenaires</a>
                            <ul class="sous">
                                <li><a href="../partenaires/template-devenir-partenaire.html">Devenir partenaire</a></li>
                                <li><a href="../partenaires/partenaires.html">Nos partenaires</a></li>
                                <li><a href="../partenaires/club-affaires.html">Club Affaires Gallia</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>`

// Création footer
let footer = document.querySelector(".footer");
footer.innerHTML += `
        <footer>
                <div class="contact">
                    <h3>Contact</h3>
                    <div class="contact-adresse">
                        <i class="fas fa-map-marker-alt"></i>
                        <p>3 Rue de l'Eglise | 67500 WEITBRUCH</p>
                    </div>
                    <div class="contact-telephone">
                        <i class="fas fa-phone"></i>
                        <p>03.88.72.33.76</p>
                    </div>
                    <div class="contact-mail">
                        <i class="fas fa-envelope-square"></i>
                        <p>Mail</p>
                    </div>
                </div>
                <div class="infos-pratiques">
                    <h3>Infos Pratiques</h3>
                    <a href="">Mentions légales</a>
                    <p>Etc</p>
                </div>
                <div class="reseaux">
                    <h3>Réseaux de la Gallia</h3>
                    <div class="reseaux-photo">
                        <a href="https://www.facebook.com/galliaweitbruch"><i class="fab fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/gallia_basket/"><i class="fab fa-instagram-square"></i></a>
                        <a href="https://scorenco.com/basket/clubs/weitbruch-a-s-c-g/"><i
                                class="fab fa-dribbble-square"></i></a>
                    </div>
                </div>
            </footer>`