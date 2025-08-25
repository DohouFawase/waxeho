import React from 'react';

export default function HeroSection() {
    return (
        <section className="bg-transparent py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">

                    {/* Texte Hero */}
                    <div>
                        <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                            Agence de marketing spécialisée tourisme
                        </p>
                        <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl">
                            Nous sommes les griots numériques du tourisme africain
                        </h1>
                        <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                            Connectez vos projets touristiques au monde avec créativité, performance et authenticité.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8 lg:mt-16">
                            <a
                                href="#services"
                                className="inline-flex items-center px-6 py-4 font-semibold text-black bg-yellow-300 rounded-full transition-all duration-200 hover:bg-yellow-400 focus:bg-yellow-400"
                                role="button"
                            >
                                Découvrez nos services
                                <svg
                                    className="w-6 h-6 ml-3 -mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-4 font-semibold text-white bg-blue-600 rounded-full transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700"
                                role="button"
                            >
                                Contactez-nous
                            </a>
                        </div>

                        <p className="mt-5 text-gray-600">
                            Déjà en contact avec nous ?{' '}
                            <a href="#contact" className="text-black transition-all duration-200 hover:underline">
                                Prenez rendez-vous
                            </a>
                        </p>
                    </div>

                    {/* Image Hero */}
                    <div>
                        <img
                            className="w-full rounded-lg shadow-lg"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                            alt="WAXEHO - Agence de marketing touristique"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
