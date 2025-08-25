import {
    Building2,
    Lightbulb,
    ScreenShare,
    Trophy,
    User,
    User2,
    LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Définir le type des services
type FeatureItem = {
    icon: LucideIcon;
    title: string;
    description: string;
    position?: 'left' | 'right';
    cornerStyle?: string;
};

// Services WAXEHO - colonne gauche
const leftFeatures: FeatureItem[] = [
    {
        icon: Building2,
        title: 'Stratégie Digitale',
        description:
            "Plans d'action personnalisés selon vos objectifs et cibles pour booster votre visibilité et vos ventes.",
        position: 'left',
        cornerStyle: 'sm:translate-x-4 sm:rounded-br-[2px]',
    },
    {
        icon: User2,
        title: 'Community Management',
        description:
            "Animation dynamique de vos réseaux sociaux pour engager et fidéliser vos communautés.",
        position: 'left',
        cornerStyle: 'sm:-translate-x-4 sm:rounded-br-[2px]',
    },
    {
        icon: Trophy,
        title: 'Campagnes Sponsorisé',
        description:
            "Publicités ciblées sur Facebook, Instagram, LinkedIn et YouTube pour maximiser votre visibilité.",
        position: 'left',
        cornerStyle: 'sm:translate-x-4 sm:rounded-tr-[2px]',
    },
];

// Services WAXEHO - colonne droite
const rightFeatures: FeatureItem[] = [
    {
        icon: ScreenShare,
        title: 'Storytelling & Contenu',
        description:
            "Récits percutants et contenus immersifs pour renforcer votre identité de marque et inspirer vos audiences.",
        position: 'right',
        cornerStyle: 'sm:-translate-x-4 sm:rounded-bl-[2px]',
    },
    {
        icon: User,
        title: 'Relations Presse & Influence',
        description:
            "Couverture médiatique optimale grâce à des partenariats avec médias et influenceurs.",
        position: 'right',
        cornerStyle: 'sm:translate-x-4 sm:rounded-bl-[2px]',
    },
    {
        icon: Lightbulb,
        title: 'Événementiel & Formations',
        description:
            "Organisation d'événements marquants et accompagnement personnalisé pour renforcer les compétences de vos équipes.",
        position: 'right',
        cornerStyle: 'sm:-translate-x-4 sm:rounded-tl-[2px]',
    },
];

// Carte de service
const FeatureCard = ({ feature }: { feature: FeatureItem }) => {
    const Icon = feature.icon;

    return (
        <div>
            <div
                className={cn(
                    'relative rounded-2xl px-4 pt-4 pb-4 text-sm',
                    'bg-secondary/50 ring-border ring',
                    feature.cornerStyle,
                )}
            >
                <div className="text-primary mb-3 text-[2rem]">
                    <Icon />
                </div>
                <h2 className="text-foreground mb-2.5 text-2xl">{feature.title}</h2>
                <p className="text-muted-foreground text-base text-pretty">
                    {feature.description}
                </p>
                <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
                <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--primary)/0.15)_0%,transparent_100%)] opacity-60"></span>
            </div>
        </div>
    );
};

// Section complète
export default function ServiceSection() {
    return (
        <section className="pt-20 pb-8" id="services">
            <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
                <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
                    {/* Colonne gauche */}
                    <div className="flex flex-col gap-6">
                        {leftFeatures.map((feature, index) => (
                            <FeatureCard key={`left-feature-${index}`} feature={feature} />
                        ))}
                    </div>

                    {/* Colonne centrale */}
                    <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
                        <div className="bg-secondary text-foreground ring-border relative mx-auto mb-4.5 w-fit rounded-full rounded-bl-[2px] px-4 py-2 text-sm ring">
                            <span className="relative z-1 flex items-center gap-2">
                                Nos Services
                            </span>
                            <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r"></span>
                            <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,hsl(var(--primary)/0.25)_0%,transparent_100%)]"></span>
                        </div>
                        <h2 className="text-foreground mb-2 text-center text-2xl sm:mb-2.5 md:text-[2rem]">
                            Pourquoi choisir WAXEHO ?
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-[18rem] text-center text-pretty">
                            Expertise locale et globale, innovation technologique et storytelling africain pour booster votre visibilité et vos performances.
                        </p>
                    </div>

                    {/* Colonne droite */}
                    <div className="flex flex-col gap-6">
                        {rightFeatures.map((feature, index) => (
                            <FeatureCard key={`right-feature-${index}`} feature={feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
