"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import ContactText from '@/components/sections/contact/ContactText';
import FooterCard from '@/components/sections/footer/FooterCard';
import { CheckCircle, Instagram, Linkedin } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="mediumLargeSizeLargeTitles"
      background="grid"
      cardStyle="soft-shadow"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="VELUM"
          navItems={[
            { name: "La Visione", id: "product" },
            { name: "Innovazione", id: "innovation" },
            { name: "Benefici", id: "benefits" },
            { name: "Testimonianze", id: "testimonials" },
            { name: "Acquista", id: "cta" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="VELUM"
          description="Non avrai più problemi nel pulire i tuoi occhiali."
          buttons={[
            { text: "Scopri VELUM Visione", href: "#product" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          imageSrc="http://img.b2bpic.net/free-photo/young-beautiful-woman-business-suit_1303-17722.jpg"
          imageAlt="Modello elegante che usa discretamente la maglietta per pulire occhiali"
          mediaAnimation="blur-reveal"
          frameStyle="card"
          ariaLabel="Hero section VELUM"
          className="min-h-screen"
          containerClassName="py-20"
          logoClassName="text-7xl font-semibold tracking-tight"
          descriptionClassName="text-2xl font-light text-accent"
          buttonContainerClassName="mt-12 flex gap-6"
          buttonClassName="px-8 py-3 font-medium"
          mediaWrapperClassName="mt-16 w-full"
        />
      </div>

      <div id="problem" data-section="problem">
        <TextSplitAbout
          title="Quante volte hai usato la maglietta per pulire gli occhiali?"
          description={[
            "Ogni giorno affrontiamo lo stesso problema: occhiali sporchi, aloni fastidiosi, lenti danneggiate da tessuti inadatti.",            "I tuoi occhiali meritano una soluzione elegante e immediata. Una soluzione che sia sempre con te, discreta e sofisticata.",            "Una soluzione che non si vede, ma che fa la differenza."
          ]}
          showBorder={false}
          useInvertedBackground={false}
          ariaLabel="Sezione problema"
          className="py-24"
          containerClassName="max-w-6xl mx-auto"
          titleClassName="text-6xl font-semibold leading-tight tracking-tight mb-8"
          descriptionClassName="text-lg font-light text-foreground/80 leading-relaxed space-y-6"
        />
      </div>

      <div id="innovation" data-section="innovation">
        <FeatureCardTwentySix
          title="Innovazione invisibile."
          description="La microfibra tecnica è cucita all'interno della maglietta, posizionata nella parte inferiore. Invisibile dall'esterno, perfetta per le lenti."
          features={[
            {
              title: "Cucita all'interno",              description: "Integrata nella struttura della maglietta con precisione sartoriale",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-purple-texture-fabric-with-small-pattern-small-squares_91008-489.jpg",              imageAlt: "Dettaglio della microfibra integrata",              buttonIcon: CheckCircle,
              buttonHref: "#product"
            },
            {
              title: "Posizionata nella parte inferiore",              description: "Facile da raggiungere, naturale da usare in qualsiasi momento",              imageSrc: "http://img.b2bpic.net/free-photo/men-s-green-jacket-mockup-with-black-tee-african-american-model_53876-105358.jpg?_wi=1",              imageAlt: "Posizionamento della microfibra sulla maglietta",              buttonIcon: CheckCircle,
              buttonHref: "#product"
            },
            {
              title: "Invisibile all'esterno",              description: "Il design rimane puro e minimalista. Nessuno sa del suo segreto.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-blond-model-dressed-summer-hipster-clothes_158538-5485.jpg?_wi=1",              imageAlt: "Maglietta da esterno senza visibili aggiunte",              buttonIcon: CheckCircle,
              buttonHref: "#product"
            },
            {
              title: "Sicura per le lenti",              description: "Microfibra tecnica di qualità premium, certificata per la pulizia delicata",              imageSrc: "http://img.b2bpic.net/free-photo/scissors-with-thread-high-angle_23-2148897931.jpg",              imageAlt: "Dettaglio delle cuciture di qualità",              buttonIcon: CheckCircle,
              buttonHref: "#product"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          mediaAnimation="blur-reveal"
          ariaLabel="Sezione innovazione"
          className="py-24"
          containerClassName="max-w-6xl mx-auto"
          cardClassName="rounded-lg overflow-hidden"
          carouselClassName="w-full"
          textBoxClassName="mt-12 text-center"
          textBoxTitleClassName="text-5xl font-semibold mb-4"
          textBoxDescriptionClassName="text-lg font-light text-foreground/70"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="VELUM VISIONE™"
          description="T-shirt in cotone premium con inserto interno in microfibra tecnica. Vestibilità elegante, rifiniture sartoriali, design essenziale."
          products={[
            {
              id: "velum-black",              brand: "VELUM",              name: "VELUM VISIONE™ Nero",              price: "€189,00",              rating: 5,
              reviewCount: "127",              imageSrc: "http://img.b2bpic.net/free-photo/men-s-green-jacket-mockup-with-black-tee-african-american-model_53876-105358.jpg?_wi=2",              imageAlt: "VELUM VISIONE™ T-shirt Nero"
            },
            {
              id: "velum-white",              brand: "VELUM",              name: "VELUM VISIONE™ Bianco Panna",              price: "€189,00",              rating: 5,
              reviewCount: "89",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-blond-model-dressed-summer-hipster-clothes_158538-5485.jpg?_wi=2",              imageAlt: "VELUM VISIONE™ T-shirt Bianco Panna"
            },
            {
              id: "velum-beige",              brand: "VELUM",              name: "VELUM VISIONE™ Beige Sabbia",              price: "€189,00",              rating: 5,
              reviewCount: "156",              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-posing-quarry_1303-28636.jpg",              imageAlt: "VELUM VISIONE™ T-shirt Beige Sabbia"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Sezione prodotto"
          className="py-24"
          containerClassName="max-w-6xl mx-auto"
          textBoxTitleClassName="text-5xl font-semibold mb-4"
          textBoxDescriptionClassName="text-lg font-light text-foreground/70 mb-16"
        />
      </div>

      <div id="benefits" data-section="benefits">
        <MetricCardTen
          title="Benefici di VELUM"
          description="Cinque ragioni per scegliere l'innovazione invisibile del lusso italiano."
          metrics={[
            {
              id: "1",              title: "Microfibra Integrata",              subtitle: "Tessuto specializzato cucito all'interno",              category: "Innovazione",              value: "Premium"
            },
            {
              id: "2",              title: "Invisibile all'Esterno",              subtitle: "Design puro e minimalista preservato",              category: "Design",              value: "Discreto"
            },
            {
              id: "3",              title: "Tessuto Premium",              subtitle: "Cotone di qualità superiore certificato",              category: "Materiale",              value: "Lusso"
            },
            {
              id: "4",              title: "Lavabile e Resistente",              subtitle: "Mantiene le proprietà dopo i lavaggi",              category: "Durabilità",              value: "Eterno"
            },
            {
              id: "5",              title: "Design Italiano",              subtitle: "Craftsmanship di Milano concentrato",              category: "Origine",              value: "Italia"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          ariaLabel="Sezione benefici"
          className="py-24"
          containerClassName="max-w-6xl mx-auto"
          textBoxTitleClassName="text-5xl font-semibold mb-4"
          textBoxDescriptionClassName="text-lg font-light text-foreground/70 mb-16"
          gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        />
      </div>

      <div id="positioning" data-section="positioning">
        <TextSplitAbout
          title="Il lusso è nei dettagli."
          description={[
            "VELUM nasce per chi vede oltre. Per chi comprende che la vera innovazione non grida, sussurra.",            "Una maglietta che è allo stesso tempo elegante, funzionale e consapevole. Un capolavoro invisibile della moda italiana.",            "Vestire VELUM significa portare con sé una filosofia: il lusso discreto, l'innovazione nascosta, la cura infinita."
          ]}
          showBorder={false}
          useInvertedBackground={false}
          ariaLabel="Sezione posizionamento"
          className="py-24 bg-background-accent/10"
          containerClassName="max-w-6xl mx-auto"
          titleClassName="text-6xl font-semibold leading-tight tracking-tight mb-8"
          descriptionClassName="text-lg font-light text-foreground/80 leading-relaxed space-y-6"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="Testimonianze di Eleganza"
          description="Chi ha scelto VELUM racconta la differenza che ha fatto nella loro vita quotidiana."
          testimonials={[
            {
              id: "1",              name: "Giulia Rossi",              role: "Architetto",              company: "Studio Milanese",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-4107.jpg",              imageAlt: "Giulia Rossi"
            },
            {
              id: "2",              name: "Marco Colombo",              role: "Designer",              company: "Brand Italia",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/handsome-groom-classy-black-suit-stands-dark-room_8353-7083.jpg",              imageAlt: "Marco Colombo"
            },
            {
              id: "3",              name: "Francesca Moretti",              role: "Avvocato",              company: "Legale Milano",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-attractive-stylish-businesswoman-suit-intently-looking-camera-city-street_574295-784.jpg",              imageAlt: "Francesca Moretti"
            },
            {
              id: "4",              name: "Luca Ferretti",              role: "Imprenditore",              company: "Tech Veneto",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-14795.jpg",              imageAlt: "Luca Ferretti"
            }
          ]}
          kpiItems={[
            { value: "98%", label: "Soddisfazione clienti" },
            { value: "1.200+", label: "Clienti premium" },
            { value: "5★", label: "Valutazione media" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Sezione testimonianze"
          className="py-24"
          containerClassName="max-w-6xl mx-auto"
          textBoxTitleClassName="text-5xl font-semibold mb-4"
          textBoxDescriptionClassName="text-lg font-light text-foreground/70 mb-16"
        />
      </div>

      <div id="cta" data-section="cta">
        <ContactText
          text="Scopri la differenza."
          animationType="entrance-slide"
          buttons={[
            { text: "Acquista Ora", href: "#product" },
            { text: "Scopri di Più", href: "#positioning" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          ariaLabel="Call to action finale"
          className="py-24"
          containerClassName="max-w-4xl mx-auto"
          contentClassName="text-center"
          textClassName="text-6xl font-semibold tracking-tight mb-12"
          buttonContainerClassName="flex gap-6 justify-center flex-wrap"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="VELUM"
          copyrightText="© 2025 VELUM. Tutti i diritti riservati. Lusso discreto, innovazione invisibile."
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/velum", ariaLabel: "Instagram VELUM" },
            { icon: Linkedin, href: "https://linkedin.com/company/velum", ariaLabel: "LinkedIn VELUM" }
          ]}
          ariaLabel="Footer site"
          className="py-16 bg-background-accent/5"
          containerClassName="max-w-6xl mx-auto px-6"
          cardClassName="border-t border-accent/20 pt-8"
          logoClassName="text-2xl font-semibold tracking-wide mb-8"
          dividerClassName="h-px bg-accent/15 my-8"
          copyrightTextClassName="text-sm text-accent/60 font-light"
          socialContainerClassName="flex gap-6 mt-8 md:mt-0"
        />
      </div>
    </ThemeProvider>
  );
}
