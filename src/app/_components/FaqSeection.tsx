'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { MinusIcon, PlusIcon } from 'lucide-react';

interface FaqItem {
    id: string;
    question: string;
    answer: string;
    category: 'general' | 'services' | 'strategy' | 'training';
}
const faqItems: FaqItem[] = [
    {
        id: '1',
        question: 'Qu’est-ce que WAXEHO ?',
        answer:
            'WAXEHO est une agence de marketing spécialisée dans le tourisme, reliant les professionnels et les voyageurs grâce à des stratégies digitales, storytelling et création de contenus immersifs.',
        category: 'general',
    },
    {
        id: '2',
        question: 'Quels services proposez-vous ?',
        answer:
            'Nous proposons la stratégie digitale, le community management, les campagnes sponsorisées, le storytelling, la création graphique, les relations presse, l’événementiel et les formations.',
        category: 'services',
    },
    {
        id: '3',
        question: 'Proposez-vous des solutions sur-mesure pour les entreprises ?',
        answer:
            'Oui, nous créons des solutions personnalisées pour répondre aux besoins spécifiques des entreprises : sites web, applications mobiles, portails internes, et outils de gestion adaptés à chaque projet.',
        category: 'services',
    },
    {
        id: '4',
        question: 'Travaillez-vous sur le design UI/UX ?',
        answer:
            'Absolument ! Nos équipes de design réalisent des interfaces utilisateurs intuitives et modernes pour le web et le mobile, en optimisant l’expérience utilisateur et l’ergonomie.',
        category: 'services',
    },
    {
        id: '5',
        question: 'Comment WAXEHO aide-t-il à augmenter la visibilité de mon établissement ?',
        answer:
            'Nous créons des contenus performants, déployons des publicités ciblées et animons vos réseaux sociaux pour générer des leads qualifiés et renforcer votre notoriété.',
        category: 'strategy',
    },
    {
        id: '6',
        question: 'Proposez-vous des formations pour les équipes internes ?',
        answer:
            'Oui, nous accompagnons vos équipes avec des formations sur mesure en communication digitale, storytelling et marketing touristique pour développer leurs compétences.',
        category: 'training',
    },
];

const categories = [
    { id: 'all', label: 'All' },
    { id: 'general', label: 'General' },
    { id: 'services', label: 'Services' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'training', label: 'Training' },
];

export default function FaqSection() {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const filteredFaqs =
        activeCategory === 'all'
            ? faqItems
            : faqItems.filter((item) => item.category === activeCategory);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 py-16 sm:py-20 lg:py-28 overflow-hidden " id="faq">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
                <div className="mb-12 flex flex-col items-center">
                    <Badge
                        variant="outline"
                        className="border-primary mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase"
                    >
                        FAQs
                    </Badge>

                    <h2 className="text-foreground mb-6 text-center text-4xl font-bold tracking-tight md:text-5xl">
                        Questions fréquentes
                    </h2>

                    <p className="text-muted-foreground max-w-2xl text-center">
                        Retrouvez ici les réponses aux questions courantes sur nos services et méthodes de travail.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="mb-10 flex flex-wrap justify-center gap-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn(
                                'rounded-full px-4 py-2 text-sm font-medium transition-all',
                                activeCategory === category.id
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                            )}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <AnimatePresence>
                        {filteredFaqs.map((faq, index) => (
                            <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className={cn(
                                    'border-border h-fit overflow-hidden rounded-xl border',
                                    expandedId === faq.id
                                        ? 'shadow-3xl bg-card/50'
                                        : 'bg-card/50',
                                )}
                                style={{ minHeight: '88px' }}
                            >
                                <button
                                    onClick={() => toggleExpand(faq.id)}
                                    className="flex w-full items-center justify-between p-6 text-left"
                                >
                                    <h3 className="text-foreground text-lg font-medium">
                                        {faq.question}
                                    </h3>
                                    <div className="ml-4 flex-shrink-0">
                                        {expandedId === faq.id ? (
                                            <MinusIcon className="text-primary h-5 w-5" />
                                        ) : (
                                            <PlusIcon className="text-primary h-5 w-5" />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {expandedId === faq.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="border-border border-t px-6 pt-2 pb-6">
                                                <p className="text-muted-foreground">{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
