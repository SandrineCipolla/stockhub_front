export default function MentionsLegales() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Mentions Légales</h1>

            <p className="mt-4">Conformément à la loi en vigueur, voici les mentions légales du site :</p>

            <h2 className="text-xl font-semibold mt-6">Identité de l’éditeur</h2>
            <p>Nom de la personne physique ou de l’entreprise qui publie le site : <strong>Sandrine CIPOLLA</strong></p>
            {/*<p>Raison sociale : <strong>Raison sociale de l'entreprise</strong></p>*/}
            {/*<p>Adresse : <strong>Adresse de l'entreprise</strong></p>*/}
            {/*<p>Numéro SIRET/SIREN : <strong>Numéro SIRET/SIREN de l'entreprise</strong></p>*/}

            <h2 className="text-xl font-semibold mt-6">Responsable de la publication</h2>
            <p>Responsable du contenu éditorial du site : <strong>Nom du responsable</strong></p>

            <h2 className="text-xl font-semibold mt-6">Hébergeur du site</h2>
            <p>Nom de l’hébergeur : <strong>Nom de l'hébergeur</strong></p>
            <p>Adresse de l’hébergeur : <strong>Adresse complète de l'hébergeur</strong></p>
            <p>Numéro de téléphone : <strong>Téléphone de l'hébergeur</strong></p>

            <h2 className="text-xl font-semibold mt-6">Contact</h2>
            <p>Pour toute question concernant le site, veuillez contacter : <strong>Email de contact</strong></p>

            {/*<h2 className="text-xl font-semibold mt-6">Numéro de TVA intracommunautaire</h2>*/}
            {/*<p>Numéro de TVA intracommunautaire (si applicable) : <strong>Numéro TVA</strong></p>*/}

            <h2 className="text-xl font-semibold mt-6">Conditions de fonctionnement du site</h2>
            <p>Le site est soumis à des droits d'auteur et toute reproduction ou exploitation sans autorisation est interdite. Pour plus d'informations, vous pouvez consulter la page des conditions générales d'utilisation du site.</p>
        </div>
    );
}
