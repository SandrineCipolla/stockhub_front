import {useEffect} from "react";

export default function ConditionsGenerales() {


    useEffect(() => {
        document.title = "Conditions Générales d'Utilisation - Stockhub";
    }, []);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Conditions Générales d'Utilisation</h1>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">1. Introduction</h2>
                <p className="mt-2">
                    Bienvenue sur Stockhub, votre application de gestion de stock en ligne. En accédant à notre service,
                    vous acceptez les présentes Conditions Générales d'Utilisation (CGU). Si vous n'acceptez pas ces
                    conditions,
                    veuillez ne pas utiliser notre application.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">2. Définitions</h2>
                <p className="mt-2">
                    - "Stockhub" désigne notre application de gestion de stock accessible via [votre URL].<br/>
                    - "Utilisateur" désigne toute personne utilisant l'application Stockhub.<br/>
                    - "Données" fait référence aux informations que vous saisissez dans l'application.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">3. Accès au service</h2>
                <p className="mt-2">
                    L'accès à Stockhub est réservé aux utilisateurs disposant d'un compte valide. Vous êtes responsable
                    de la confidentialité de vos identifiants de connexion et de toute activité réalisée avec votre
                    compte.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">4. Utilisation des données</h2>
                <p className="mt-2">
                    En utilisant Stockhub, vous consentez à ce que nous collections, utilisions et protégions vos
                    données
                    conformément à notre politique de confidentialité. Vos données de stock sont sécurisées et ne seront
                    jamais partagées
                    avec des tiers sans votre consentement.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">5. Responsabilités de l'utilisateur</h2>
                <p className="mt-2">
                    En tant qu'utilisateur, vous vous engagez à utiliser Stockhub conformément aux lois en vigueur et à
                    respecter
                    les droits des autres utilisateurs. Toute utilisation abusive, frauduleuse ou illégale entraînera la
                    suspension
                    ou la résiliation de votre accès à l'application.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">6. Limitations de responsabilité</h2>
                <p className="mt-2">
                    Stockhub met tout en œuvre pour assurer la disponibilité et la fiabilité de son service, mais nous
                    ne garantissons
                    pas que notre application sera exempte d'erreurs ou d'interruptions. Nous ne pourrons être tenus
                    responsables des
                    pertes de données ou de tout autre dommage lié à l'utilisation de notre application.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">7. Modification des CGU</h2>
                <p className="mt-2">
                    Nous nous réservons le droit de modifier ces Conditions Générales d'Utilisation à tout moment. Les
                    modifications
                    seront effectives dès leur publication sur cette page. Nous vous encourageons à consulter
                    régulièrement cette page
                    pour rester informé des mises à jour.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold">8. Contact</h2>
                <p className="mt-2">
                    Si vous avez des questions concernant ces CGU, veuillez nous contacter à l'adresse email suivante :
                    support@stockhub.com.
                </p>
            </section>
        </div>
    );
}
