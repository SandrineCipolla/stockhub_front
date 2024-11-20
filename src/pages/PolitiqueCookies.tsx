export default function PolitiqueCookies() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Politique de Cookies</h1>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">1. Introduction</h2>
                <p className="mt-2">
                    Chez Stockhub, nous utilisons des cookies pour améliorer votre expérience utilisateur, en particulier pour l'authentification sécurisée via Azure Active Directory.
                    Cette politique de cookies explique comment et pourquoi nous utilisons des cookies sur notre site.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">2. Qu'est-ce qu'un cookie ?</h2>
                <p className="mt-2">
                    Un cookie est un petit fichier texte placé sur votre appareil (ordinateur, tablette ou smartphone) lors de votre visite sur un site web.
                    Il permet au site de se souvenir de vos actions et préférences (comme l'authentification) pendant une période donnée.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">3. Types de cookies utilisés</h2>
                <p className="mt-2">Nous utilisons les types de cookies suivants :</p>
                <ul className="list-disc ml-6 mt-2">
                    <li><strong>Cookies essentiels :</strong> Ces cookies sont nécessaires pour le bon fonctionnement du site. Ils vous permettent de vous connecter en toute sécurité et d'accéder aux fonctionnalités essentielles. Sans ces cookies, certaines parties de notre site ne fonctionneraient pas correctement.</li>
                    <li><strong>Cookies de performance :</strong> Nous utilisons ces cookies pour analyser l'utilisation de notre site et améliorer ses performances. Ces informations sont anonymes et nous aident à optimiser nos services.</li>
                </ul>
                <p className="mt-2">
                    Note : Nous n'utilisons pas de cookies publicitaires ou de cookies tiers pour du marketing sur notre site.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">4. Utilisation des cookies pour l'authentification</h2>
                <p className="mt-2">
                    Lorsque vous vous connectez à Stockhub via Azure Active Directory, un cookie d'authentification est généré pour maintenir votre session active.
                    Ce cookie est sécurisé, crypté, et expire automatiquement après une certaine période d'inactivité.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">5. Gestion des cookies</h2>
                <p className="mt-2">
                    Vous avez le droit de contrôler et de gérer les cookies utilisés sur notre site. Vous pouvez configurer votre navigateur pour :
                </p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Accepter ou refuser automatiquement les cookies.</li>
                    <li>Être averti chaque fois qu'un cookie est envoyé sur votre appareil.</li>
                    <li>Supprimer les cookies stockés sur votre appareil.</li>
                </ul>
                <p className="mt-2">
                    Veuillez noter que si vous désactivez les cookies essentiels, certaines fonctionnalités de Stockhub, notamment l'authentification, pourraient ne pas fonctionner correctement.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">6. Durée de conservation des cookies</h2>
                <p className="mt-2">
                    Les cookies que nous utilisons ont des durées de vie différentes. Les cookies d'authentification expirent après une période d'inactivité de votre session, généralement fixée par Azure.
                    Les cookies de performance sont conservés pendant une durée maximale de 12 mois.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">7. Modifications de la politique de cookies</h2>
                <p className="mt-2">
                    Nous nous réservons le droit de mettre à jour cette politique de cookies à tout moment pour refléter les modifications apportées à nos pratiques d'utilisation des cookies.
                    Nous vous recommandons de consulter cette page régulièrement pour vous tenir informé des éventuelles mises à jour.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">8. Contact</h2>
                <p className="mt-2">
                    Si vous avez des questions concernant notre politique de cookies, veuillez nous contacter à l'adresse suivante : privacy@stockhub.com.
                </p>
            </section>
        </div>
    );
}
