'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Server, Smartphone, Monitor, Palette } from 'lucide-react';

const features = [
    {
        step: 'Solution 1',
        title: 'Gestion de Restaurants',
        content:
            'Créez un système complet pour gérer les commandes, les réservations et le suivi client, entièrement personnalisé pour vos établissements.',
        icon: <Server className="text-primary h-6 w-6" />,
        image:
            'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop',
        url: '/solutions/gestion-restaurant',
    },
    {
        step: 'Solution 2',
        title: 'Applications Mobiles sur-mesure',
        content:
            'Développez des applications natives ou cross-platform adaptées à vos besoins, avec une expérience utilisateur optimisée et des fonctionnalités innovantes.',
        icon: <Smartphone className="text-primary h-6 w-6" />,
        image:
            'https://images.unsplash.com/photo-1581091012184-7e3e904e2c9f?q=80&w=2070&auto=format&fit=crop',
        url: '/solutions/app-mobile',
    },
    {
        step: 'Solution 3',
        title: 'Portails et Sites Web',
        content:
            'Concevez des portails interactifs et des sites web immersifs pour vos clients, intégrant réservation, informations culturelles et contenus dynamiques.',
        icon: <Monitor className="text-primary h-6 w-6" />,
        image:
            'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=2070&auto=format&fit=crop',
        url: '/solutions/portail-web',
    },
    {
        step: 'Solution 4',
        title: 'Design UI/UX & Identité visuelle',
        content:
            'Nos designers créent des interfaces intuitives et modernes pour tous vos supports digitaux, optimisant l’expérience utilisateur et l’impact visuel.',
        icon: <Palette className="text-primary h-6 w-6" />,
        image:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop',
        url: '/solutions/ui-ux',
    },
];

export default function SolutionSection() {
    const [currentFeature, setCurrentFeature] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress((prev) => prev + 100 / (4000 / 100));
            } else {
                setCurrentFeature((prev) => (prev + 1) % features.length);
                setProgress(0);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [progress]);

    return (
        <div className={'p-8 md:p-12'}>
            <div className="mx-auto w-full max-w-7xl">
                <div className="relative mx-auto mb-12 max-w-2xl sm:text-center">
                    <div className="relative z-10">
                        <h2 className="font-geist text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                            Nos Solutions sur-mesure
                        </h2>
                        <p className="font-geist text-foreground/60 mt-3">
                            Découvrez nos solutions personnalisées pour booster votre activité et offrir une expérience client unique.
                        </p>
                    </div>
                </div>
                <hr className="bg-foreground/30 mx-auto mb-10 h-px w-1/2" />

                <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10">
                    <div className="order-2 space-y-8 md:order-1">
                        {features.map((feature, index) => (
                            <motion.a
                                key={index}
                                href={feature.url}
                                className="flex items-center gap-6 md:gap-8 cursor-pointer"
                                initial={{ opacity: 0.3, x: -20 }}
                                animate={{
                                    opacity: index === currentFeature ? 1 : 0.3,
                                    x: 0,
                                    scale: index === currentFeature ? 1.05 : 1,
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                    className={cn(
                                        'flex h-12 w-12 items-center justify-center rounded-full border-2 md:h-14 md:w-14',
                                        index === currentFeature
                                            ? 'border-primary bg-primary/10 text-primary scale-110 [box-shadow:0_0_15px_rgba(192,15,102,0.3)]'
                                            : 'border-muted-foreground bg-muted',
                                    )}
                                >
                                    {feature.icon}
                                </motion.div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold md:text-2xl">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm md:text-base">
                                        {feature.content}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div
                        className={cn(
                            'border-primary/20 relative order-1 h-[200px] overflow-hidden rounded-xl border [box-shadow:0_5px_30px_-15px_rgba(192,15,102,0.3)] md:order-2 md:h-[300px] lg:h-[400px]',
                        )}
                    >
                        <AnimatePresence mode="wait">
                            {features.map(
                                (feature, index) =>
                                    index === currentFeature && (
                                        <motion.div
                                            key={index}
                                            className="absolute inset-0 overflow-hidden rounded-lg"
                                            initial={{ y: 100, opacity: 0, rotateX: -20 }}
                                            animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                            exit={{ y: -100, opacity: 0, rotateX: 20 }}
                                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                                        >
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="h-full w-full transform object-cover transition-transform hover:scale-105"
                                                width={1000}
                                                height={500}
                                            />
                                            <div className="from-background via-background/50 absolute right-0 bottom-0 left-0 h-2/3 bg-gradient-to-t to-transparent" />

                                            <div className="bg-background/80 absolute bottom-4 left-4 rounded-lg p-2 backdrop-blur-sm">
                                                <span className="text-primary text-xs font-medium">
                                                    {feature.step}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ),
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
