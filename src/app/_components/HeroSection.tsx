// import React from 'react';

// export default function HeroSection() {
//     return (
//         <section className="bg-transparent py-10 sm:py-16 lg:py-24">
//             <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//                 <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">

//                     {/* Texte Hero */}
//                     <div>
//                         <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
//                             Agence de marketing spécialisée tourisme
//                         </p>
//                         <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl">
//                             Nous sommes les griots numériques du tourisme africain
//                         </h1>
//                         <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
//                             Connectez vos projets touristiques au monde avec créativité, performance et authenticité.
//                         </p>

//                         <div className="flex flex-wrap gap-4 mt-8 lg:mt-16">
//                             <a
//                                 href="#services"
//                                 className="inline-flex items-center px-6 py-4 font-semibold text-black bg-yellow-300 rounded-full transition-all duration-200 hover:bg-yellow-400 focus:bg-yellow-400"
//                                 role="button"
//                             >
//                                 Découvrez nos services
//                                 <svg
//                                     className="w-6 h-6 ml-3 -mr-2"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={1.5}
//                                         d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                                     />
//                                 </svg>
//                             </a>

//                             <a
//                                 href="#contact"
//                                 className="inline-flex items-center px-6 py-4 font-semibold text-white bg-blue-600 rounded-full transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700"
//                                 role="button"
//                             >
//                                 Contactez-nous
//                             </a>
//                         </div>

//                         <p className="mt-5 text-gray-600">
//                             Déjà en contact avec nous ?{' '}
//                             <a href="#contact" className="text-black transition-all duration-200 hover:underline">
//                                 Prenez rendez-vous
//                             </a>
//                         </p>
//                     </div>

//                     {/* Image Hero */}
//                     <div>
//                         <img
//                             className="w-full rounded-lg shadow-lg"
//                             src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
//                             alt="WAXEHO - Agence de marketing touristique"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

'use client'
import React, { useState, useEffect } from 'react';
import { Globe, Camera, MapPin, Star, Sun, Palmtree } from 'lucide-react';

export default function HeroSection() {
    const [currentIcon, setCurrentIcon] = useState(0);
    const icons = [Globe, Camera, MapPin, Star, Sun, Palmtree];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIcon((prev) => (prev + 1) % icons.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const IconComponent = icons[currentIcon];

    return (
        <section className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 py-16 sm:py-20 lg:py-28 overflow-hidden">
            {/* Arrière-plan décoratif animé */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-orange-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-red-400 rounded-full animate-ping"></div>
            </div>

            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">

                    {/* Contenu texte */}
                    <div className="relative">
                        {/* Badge animé */}
                        <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                            <Globe className="w-5 h-5 mr-2 animate-spin" />
                            <span className="text-sm font-semibold tracking-wider uppercase">
                                Agence de marketing spécialisée tourisme
                            </span>
                        </div>

                        {/* Titre principal avec icône animée */}
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg">
                                <IconComponent className="w-8 h-8 text-white animate-pulse" />
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 leading-tight lg:text-6xl xl:text-7xl">
                                Nous sommes les{' '}
                                <span className="relative">
                                    <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                                        griots numériques
                                    </span>
                                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></div>
                                </span>
                                {' '}du tourisme africain
                            </h1>
                        </div>

                        {/* Description avec animation */}
                        <p className="text-lg text-gray-700 mb-8 lg:text-xl leading-relaxed animate-fade-in">
                            Connectez vos projets touristiques au monde avec{' '}
                            <span className="font-semibold text-orange-600">créativité</span>,{' '}
                            <span className="font-semibold text-blue-600">performance</span> et{' '}
                            <span className="font-semibold text-green-600">authenticité</span>.
                        </p>

                        {/* Boutons d'action avec animations */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <a
                                href="#services"
                                className="group inline-flex items-center px-8 py-4 font-semibold text-gray-900 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
                                role="button"
                            >
                                <Camera className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                                Découvrez nos services
                                <svg
                                    className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </a>

                            <a
                                href="#contact"
                                className="group inline-flex items-center px-8 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
                                role="button"
                            >
                                <MapPin className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                                Contactez-nous
                            </a>
                        </div>

                        {/* Lien de contact avec animation */}
                        <p className="text-gray-600 animate-fade-in">
                            Déjà en contact avec nous ?{' '}
                            <a
                                href="#contact"
                                className="font-semibold text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline transform hover:scale-105 inline-block"
                            >
                                Prenez rendez-vous →
                            </a>
                        </p>

                        {/* Badges de confiance */}
                        <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                <span className="text-sm font-semibold text-gray-700">Expertise Africaine</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Sun className="w-5 h-5 text-orange-500" />
                                <span className="text-sm font-semibold text-gray-700">100+ Projets</span>
                            </div>
                        </div>
                    </div>

                    {/* Section image/visuel */}
                    <div className="relative">
                        {/* Carte décorative en arrière-plan */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-20 animate-pulse"></div>

                        {/* Container principal de l'image */}
                        <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-500">

                            {/* Image principale */}
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    className="w-full h-80 object-cover"
                                    src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Tourisme africain - Paysages et culture"
                                />

                                {/* Overlay avec icônes flottantes */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent">
                                    <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                                        <Palmtree className="w-6 h-6 text-white animate-sway" />
                                    </div>
                                    <div className="absolute bottom-4 left-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                                        <Globe className="w-6 h-6 text-white animate-spin" />
                                    </div>
                                </div>
                            </div>

                            {/* Statistiques en overlay */}
                            <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-4">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-orange-600">50+</div>
                                        <div className="text-xs text-gray-600">Destinations</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-blue-600">200+</div>
                                        <div className="text-xs text-gray-600">Clients Satisfaits</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-green-600">98%</div>
                                        <div className="text-xs text-gray-600">Taux de Réussite</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}