export default function Footer() {
    return (
        <footer className="text-white p-2 border-t-2 border-purple-400">
            <div className="text-sm text-center uppercase">
                <p>
                    Stock Hub - All rights reserved ©
                </p>
                <div className="mt-2">
                    <ul className="flex justify-center space-x-6">
                        <li>
                            <a href="/mentions-legales" className="hover:text-purple-300">
                                Mentions Légales
                            </a>
                        </li>
                        <li>
                            <a href="/politique-de-confidentialite" className="hover:text-purple-300">
                                Politique de Confidentialité
                            </a>
                        </li>
                        <li>
                            <a href="/conditions-generales-d-utilisation" className="hover:text-purple-300">
                                CGU
                            </a>
                        </li>
                        <li>
                            <a href="/politique-de-cookies" className="hover:text-purple-300">
                                Politique de Cookies
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
