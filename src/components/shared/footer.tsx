'use client';

import { Instagram, Linkedin, Twitter, Youtube, Globe, MapPin, Compass } from 'lucide-react';

const footerColumns = [
    {
        title: 'Solutions Touristiques',
        links: [
            'Marketing Digital Touristique',
            'Plateformes de Réservation',
            'Applications Mobiles',
            'Solutions sur Mesure',
            'Consultation Stratégique',
        ],
    },
    {
        title: 'Services Marketing',
        links: [
            'Stratégie Digitale',
            'Création de Contenu',
            'Gestion Réseaux Sociaux',
            'SEO Touristique',
            'Campagnes Publicitaires'
        ],
    },
    {
        title: 'Innovation Tech',
        links: [
            'IA pour le Tourisme',
            'Réalité Virtuelle',
            'IoT Hôtellerie',
            'Big Data Analytics',
            'Blockchain Voyage'
        ],
    },
    {
        title: 'Entreprise',
        links: ['À Propos', 'Nos Projets', 'Carrières', 'Partenaires', 'Contact'],
    },
];

const legalLinks = [
    'Conditions Générales',
    'Politique de Confidentialité',
    'Cookies',
    'Accessibilité',
];

const socialIcons = [
    { icon: <Instagram className="h-5 w-5" />, href: '#' },
    { icon: <Twitter className="h-5 w-5" />, href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#' },
    { icon: <Youtube className="h-5 w-5" />, href: '#' },
];

export default function WaxehoFooter() {
    const curretYears = new Date().getFullYear()
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative w-full pt-20 pb-10 overflow-hidden">
            {/* Effets visuels d'arrière-plan */}
            <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
                <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full opacity-10 blur-3xl bg-gradient-to-r from-orange-500 to-yellow-500" />
                <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full opacity-10 blur-3xl bg-gradient-to-r from-blue-500 to-green-500" />
                <div className="absolute top-10 right-10 h-32 w-32 rounded-full opacity-5 blur-2xl bg-gradient-to-r from-red-500 to-pink-500" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Newsletter */}
                <div className="mb-16 rounded-2xl p-8 md:p-12 bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg">
                                    <Globe className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold md:text-3xl bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                    Révolutionnez votre tourisme
                                </h3>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Rejoignez plus de 200+ professionnels du tourisme qui font confiance à WAXEHO
                                pour des solutions technologiques innovantes et un marketing de pointe.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="Votre email professionnel"
                                    className="border border-white/20 bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-orange-500 rounded-lg px-4 py-3 focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                                />
                                <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    Abonnez-vous
                                </button>
                            </div>
                        </div>
                        <div className="hidden justify-end md:flex">
                            <div className="relative group">
                                <div className="absolute inset-0 rotate-6 rounded-xl bg-gradient-to-r from-orange-500/20 to-yellow-500/20 group-hover:rotate-3 transition-transform duration-500" />
                                <div className="absolute inset-0 rotate-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-green-500/20 group-hover:rotate-6 transition-transform duration-500" />
                                <img
                                    src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=240&q=80"
                                    alt="WAXEHO - Solutions touristiques innovantes"
                                    className="relative w-80 h-48 rounded-xl object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Liens du footer */}
                <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    {/* Logo et description */}
                    <div className="col-span-2 lg:col-span-1">
                        <div className="mb-6 flex items-center space-x-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg">
                                <Compass className="h-7 w-7 text-white" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                    WAXEHO
                                </span>
                                <p className="text-xs text-gray-400">Griots Numériques</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Nous créons des solutions technologiques sur mesure pour faciliter
                            le tourisme mondial et propulser l&apos;évolution digitale du secteur africain.
                        </p>
                        <div className="flex space-x-3">
                            {socialIcons.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Colonnes de liens */}
                    {footerColumns.map((col) => (
                        <div key={col.title}>
                            <h4 className="mb-4 text-lg font-semibold text-orange-400">{col.title}</h4>
                            <ul className="space-y-3">
                                {col.links.map((text) => (
                                    <li key={text}>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                                        >
                                            {text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Statistiques */}
                <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="text-2xl font-bold text-orange-400">200+</div>
                        <div className="text-sm text-gray-400">Clients Satisfaits</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="text-2xl font-bold text-yellow-400">50+</div>
                        <div className="text-sm text-gray-400">Destinations</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="text-2xl font-bold text-blue-400">15+</div>
                        <div className="text-sm text-gray-400">Pays Africains</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="text-2xl font-bold text-green-400">98%</div>
                        <div className="text-sm text-gray-400">Taux de Réussite</div>
                    </div>
                </div>

                {/* Bas de page */}
                <div className="border-t border-white/10 flex flex-col items-center justify-between pt-8 md:flex-row">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <p className="text-gray-400 text-sm">
                            {curretYears} WAXEHO. Tous droits réservés.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <MapPin className="h-3 w-3" />
                            <span>Cotonou, Bénin</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {legalLinks.map((text) => (
                            <a
                                key={text}
                                href="#"
                                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                            >
                                {text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}