// 'use client';

// import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

// const footerColumns = [
//     {
//         title: 'Solutions',
//         links: [
//             'Business Automation',
//             'Cloud Services',
//             'Analytics',
//             'Integrations',
//             'Support',
//         ],
//     },
//     {
//         title: 'Resources',
//         links: ['Documentation', 'Case Studies', 'Blog', 'Webinars', 'Community'],
//     },
//     {
//         title: 'Company',
//         links: ['About Us', 'Careers', 'Contact', 'Partners', 'Press'],
//     },
// ];

// const legalLinks = [
//     'Terms of Service',
//     'Privacy Policy',
//     'Cookie Settings',
//     'Accessibility',
// ];

// const socialIcons = [
//     { icon: <Instagram className="h-5 w-5" />, href: '#' },
//     { icon: <Twitter className="h-5 w-5" />, href: '#' },
//     { icon: <Linkedin className="h-5 w-5" />, href: '#' },
//     { icon: <Youtube className="h-5 w-5" />, href: '#' },
// ];

// export default function FooterNewsletter() {
//     return (
//         <footer className="bg-black text-white relative w-full pt-20 pb-10">
//             <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
//                 <div className="bg-primary absolute top-1/3 left-1/4 h-64 w-64 rounded-full opacity-10 blur-3xl" />
//                 <div className="bg-primary absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full opacity-10 blur-3xl" />
//             </div>
//             <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                 <div className="glass-effect mb-16 rounded-2xl p-8 md:p-12">
//                     <div className="grid items-center gap-8 md:grid-cols-2">
//                         <div>
//                             <h3 className="mb-4 text-2xl font-bold md:text-3xl">
//                                 Stay ahead with Acme Inc.
//                             </h3>
//                             <p className="text-foreground/70 mb-6">
//                                 Join thousands of professionals who trust Acme Inc. for
//                                 innovative business solutions.
//                             </p>
//                             <div className="flex flex-col gap-4 sm:flex-row">
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     className="border-foreground/20 bg-background focus:ring-primary rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
//                                 />
//                                 <button className="bg-primary text-primary-foreground shadow-primary/20 hover:shadow-primary/30 rounded-lg px-6 py-3 font-medium shadow-lg transition">
//                                     Subscribe Now
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="hidden justify-end md:flex">
//                             <div className="relative">
//                                 <div className="bg-primary/20 absolute inset-0 rotate-6 rounded-xl" />
//                                 <img
//                                     src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=240&q=80"
//                                     alt="Acme Inc. team"
//                                     className="relative w-80 rounded-xl object-cover"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
//                     <div className="col-span-2 lg:col-span-1">
//                         <div className="mb-6 flex items-center space-x-2">
//                             <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="text-primary-foreground h-6 w-6"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M13 10V3L4 14h7v7l9-11h-7z"
//                                     />
//                                 </svg>
//                             </div>
//                             <span className="text-xl font-bold">Acme Inc.</span>
//                         </div>
//                         <p className="text-foreground/60 mb-6">
//                             Empowering businesses with reliable, scalable, and innovative
//                             solutions.
//                         </p>
//                         <div className="flex space-x-4">
//                             {socialIcons.map((item, i) => (
//                                 <a
//                                     key={i}
//                                     href={item.href}
//                                     className="glass-effect hover:bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full transition"
//                                 >
//                                     {item.icon}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                     {footerColumns.map((col) => (
//                         <div key={col.title}>
//                             <h4 className="mb-4 text-lg font-semibold">{col.title}</h4>
//                             <ul className="space-y-3">
//                                 {col.links.map((text) => (
//                                     <li key={text}>
//                                         <a
//                                             href="#"
//                                             className="text-foreground/60 hover:text-foreground transition"
//                                         >
//                                             {text}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="border-foreground/10 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
//                     <p className="text-foreground/60 mb-4 text-sm md:mb-0">
//                         © 2023 Acme Inc. All rights reserved.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-6">
//                         {legalLinks.map((text) => (
//                             <a
//                                 key={text}
//                                 href="#"
//                                 className="text-foreground/60 hover:text-foreground text-sm"
//                             >
//                                 {text}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }






'use client';

import { Instagram, Linkedin, Twitter, Youtube, Globe, MapPin, Camera, Star, Sun, Mail, Phone } from 'lucide-react';

const footerColumns = [
    {
        title: 'Services',
        links: [
            'Marketing Digital',
            'Stratégie Touristique',
            'Création de Contenu',
            'Gestion Réseaux Sociaux',
            'Consultation',
        ],
    },
    {
        title: 'Destinations',
        links: ['Bénin', 'Côte d\'Ivoire', 'Sénégal', 'Ghana', 'Togo'],
    },
    {
        title: 'Ressources',
        links: ['Blog Tourisme', 'Guides Voyage', 'Études de Cas', 'Newsletter', 'Communauté'],
    },
    {
        title: 'À Propos',
        links: ['Notre Histoire', 'Équipe', 'Partenaires', 'Carrières', 'Presse'],
    },
];

const legalLinks = [
    'Conditions d\'Utilisation',
    'Politique de Confidentialité',
    'Mentions Légales',
    'Accessibilité',
];

const socialIcons = [
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube className="h-5 w-5" />, href: '#', label: 'YouTube' },
];

const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, text: 'contact@waxeho.com', href: 'mailto:contact@waxeho.com' },
    { icon: <Phone className="h-5 w-5" />, text: '+229 XX XX XX XX', href: 'tel:+229XXXXXXXX' },
    { icon: <MapPin className="h-5 w-5" />, text: 'Cotonou, Littoral, Bénin', href: '#' },
];

export default function WaxehoFooter() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative w-full pt-20 pb-10 overflow-hidden">
            {/* Arrière-plan décoratif africain */}
            <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
                <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-10 blur-3xl animate-pulse" />
                <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-10 blur-3xl animate-pulse" />
                <div className="absolute top-1/2 right-1/3 h-48 w-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-5 blur-2xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Newsletter avec thème africain */}
                <div className="mb-16 rounded-2xl bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-red-500/10 backdrop-blur-sm border border-white/10 p-8 md:p-12">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
                                    <Globe className="h-6 w-6 text-white animate-spin" />
                                </div>
                                <h3 className="text-2xl font-bold md:text-3xl">
                                    Restez connecté à l'Afrique
                                </h3>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Rejoignez des milliers de professionnels du tourisme qui font confiance à
                                <span className="font-semibold text-yellow-400"> WAXEHO</span> pour découvrir
                                les merveilles du continent africain.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="Votre adresse email"
                                    className="flex-1 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:border-transparent transition-all"
                                />
                                <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                    <Mail className="h-4 w-4 group-hover:animate-bounce" />
                                    S'abonner
                                </button>
                            </div>
                            <p className="text-sm text-gray-400 mt-3">
                                ✨ Recevez nos dernières actualités touristiques et offres exclusives
                            </p>
                        </div>
                        <div className="hidden lg:flex justify-end">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rotate-6 rounded-xl group-hover:rotate-3 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 -rotate-3 rounded-xl group-hover:rotate-0 transition-transform duration-300" />
                                <img
                                    src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                                    alt="Tourisme africain - WAXEHO"
                                    className="relative w-80 h-60 rounded-xl object-cover shadow-2xl group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                                    <Camera className="h-5 w-5 text-white animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sections du footer */}
                <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
                    {/* Logo et description WAXEHO */}
                    <div className="lg:col-span-2">
                        <div className="mb-6 flex items-center space-x-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500">
                                <Sun className="h-6 w-6 text-gray-900 animate-pulse" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                    WAXEHO
                                </span>
                                <p className="text-xs text-gray-400">Griots Numériques</p>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Les <span className="text-yellow-400 font-semibold">griots numériques</span> du tourisme africain.
                            Nous connectons vos projets touristiques au monde avec créativité, performance et authenticité.
                        </p>

                        {/* Informations de contact */}
                        <div className="space-y-3 mb-6">
                            {contactInfo.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors group"
                                >
                                    <div className="p-1 bg-white/10 rounded group-hover:bg-yellow-400/20 transition-colors">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm">{item.text}</span>
                                </a>
                            ))}
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="flex space-x-3">
                            {socialIcons.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    aria-label={item.label}
                                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-110"
                                >
                                    <span className="group-hover:text-gray-900 transition-colors">
                                        {item.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Colonnes du footer */}
                    {footerColumns.map((col) => (
                        <div key={col.title}>
                            <h4 className="mb-4 text-lg font-semibold text-yellow-400 flex items-center gap-2">
                                {col.title === 'Services' && <Star className="h-4 w-4" />}
                                {col.title === 'Destinations' && <MapPin className="h-4 w-4" />}
                                {col.title === 'Ressources' && <Camera className="h-4 w-4" />}
                                {col.title === 'À Propos' && <Globe className="h-4 w-4" />}
                                {col.title}
                            </h4>
                            <ul className="space-y-3">
                                {col.links.map((text) => (
                                    <li key={text}>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 block"
                                        >
                                            {text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Badges de confiance */}
                <div className="mb-8 flex flex-wrap items-center justify-center gap-8 py-6 border-y border-white/10">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>50+ Destinations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Globe className="h-4 w-4 text-blue-400" />
                        <span>200+ Clients Satisfaits</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Sun className="h-4 w-4 text-orange-400" />
                        <span>5 Ans d'Expérience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Camera className="h-4 w-4 text-green-400" />
                        <span>98% Taux de Réussite</span>
                    </div>
                </div>

                {/* Pied de page */}
                <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
                    <p className="text-gray-400 mb-4 text-sm md:mb-0">
                        © {currentYear} <span className="text-yellow-400 font-semibold">WAXEHO</span>.
                        Tous droits réservés. Fait avec ❤️ au Bénin.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {legalLinks.map((text) => (
                            <a
                                key={text}
                                href="#"
                                className="text-gray-400 hover:text-white text-sm transition-colors"
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
