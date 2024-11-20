
import {useEffect} from "react";

export default function PolitiqueConfidentialite() {
    useEffect(() => {
        document.title = "Politique de confidentialité - Stockhub";
    },[]);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Politique de Confidentialité</h1>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">1. Introduction</h2>
                <p className="mt-2">
                    Chez Stockhub, nous attachons une grande importance à la confidentialité de vos données personnelles.
                    Cette politique de confidentialité décrit comment nous collectons, utilisons, et protégeons vos informations
                    lorsque vous utilisez notre application, en particulier dans le cadre de l'authentification via Azure Active Directory.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">2. Données collectées</h2>
                <p className="mt-2">
                    Lors de l'utilisation de Stockhub, nous collectons uniquement les informations suivantes :
                </p>
                <ul className="list-disc ml-6 mt-2">
                    <li><strong>Adresse email :</strong> Lors de votre connexion via Azure Active Directory, nous récupérons
                        votre adresse email pour l'authentification et la gestion de votre compte utilisateur dans notre application.</li>
                </ul>
                <p className="mt-2">
                    Aucune autre donnée personnelle (telle que les mots de passe, les numéros de téléphone ou les adresses) n'est stockée
                    dans notre base de données, car l'authentification est entièrement gérée par Azure.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">3. Utilisation des données</h2>
                <p className="mt-2">
                    Les données collectées sont utilisées uniquement pour les finalités suivantes :
                </p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Permettre votre connexion sécurisée à l'application via Azure Active Directory.</li>
                    <li>Gérer votre accès aux fonctionnalités de Stockhub en fonction de votre profil utilisateur.</li>
                    <li>Améliorer notre application et assurer une expérience utilisateur optimale.</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">4. Partage des données</h2>
                <p className="mt-2">
                    Nous ne partageons pas votre adresse email ou d'autres informations personnelles avec des tiers, sauf dans les cas suivants :
                </p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Avec votre consentement explicite.</li>
                    <li>Pour se conformer à une obligation légale ou réglementaire.</li>
                    <li>Pour protéger nos droits ou ceux des utilisateurs de Stockhub.</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">5. Sécurité des données</h2>
                <p className="mt-2">
                    Nous mettons en œuvre des mesures de sécurité robustes pour protéger votre adresse email et d'autres informations stockées
                    dans notre base de données. Cela inclut le chiffrement des données en transit et au repos, ainsi que des protocoles d'accès
                    stricts pour éviter tout accès non autorisé.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">6. Durée de conservation des données</h2>
                <p className="mt-2">
                    Votre adresse email est conservée aussi longtemps que votre compte utilisateur est actif. Si vous souhaitez supprimer votre compte,
                    veuillez nous contacter à l'adresse ci-dessous, et nous supprimerons vos informations conformément aux lois en vigueur.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">7. Vos droits</h2>
                <p className="mt-2">
                    En tant qu'utilisateur, vous disposez des droits suivants concernant vos informations personnelles :
                </p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Le droit d'accéder à votre adresse email stockée.</li>
                    <li>Le droit de rectifier votre adresse email si elle est incorrecte.</li>
                    <li>Le droit de demander la suppression de votre compte.</li>
                </ul>
                <p className="mt-2">
                    Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : privacy@stockhub.com.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">8. Modifications de la politique de confidentialité</h2>
                <p className="mt-2">
                    Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment pour refléter
                    les changements dans nos pratiques ou pour des raisons légales. Les modifications seront publiées sur cette page,
                    et nous vous encourageons à la consulter régulièrement.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">9. Contact</h2>
                <p className="mt-2">
                    Pour toute question ou demande concernant cette politique de confidentialité, veuillez nous contacter à : privacy@stockhub.com.
                </p>
            </section>
        </div>
    );
}
