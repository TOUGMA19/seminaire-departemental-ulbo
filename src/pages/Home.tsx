import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import DatesSection from "@/components/DatesSection";
import VenueSection from "@/components/VenueSection";

const Home = () => {
  return (
    <Layout>
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-hero-gradient overflow-hidden">
        {/* Mathematical Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl text-primary-foreground/20 font-display">∫</div>
          <div className="absolute top-40 right-20 text-5xl text-primary-foreground/20 font-display">∑</div>
          <div className="absolute bottom-32 left-1/4 text-7xl text-primary-foreground/20 font-display">∂</div>
          <div className="absolute top-1/3 right-1/3 text-4xl text-primary-foreground/20 font-display">∞</div>
          <div className="absolute bottom-20 right-10 text-5xl text-primary-foreground/20 font-display">π</div>
          <div className="absolute top-1/2 left-16 text-4xl text-primary-foreground/20 font-display">Δ</div>
        </div>

        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          {/* Institution Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="text-sm font-body font-medium text-primary-foreground">
              Université Lédéa Bernard Ouedraogo • Ouahigouya, Burkina Faso
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Séminaire Scientifique du Département
            <span className="block text-gold-light mt-2">de Mathématiques et Informatique</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Analyse • Algèbre • Optimisation • Probabilités • Modélisation • Applications
          </p>

          {/* Description */}
          <p className="font-body text-base md:text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Bienvenue sur le site officiel du Séminaire Scientifique du Département de Mathématiques et Informatique 
            de l'Université Lédéa Bernard Ouedraogo. Ce séminaire vise à promouvoir les échanges scientifiques 
            et la diffusion des travaux de recherche.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              asChild
              className="bg-gold hover:bg-gold-light text-navy-dark font-body font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/inscription">
                S'inscrire au séminaire
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/50 font-body font-semibold px-8 py-6 text-base backdrop-blur-sm"
            >
              <Link to="/soumission">
                <FileText className="mr-2 h-5 w-5" />
                Soumettre un résumé
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              asChild
              className="text-primary-foreground hover:bg-primary-foreground/10 font-body font-semibold px-8 py-6 text-base"
            >
              <Link to="/programme">
                <Calendar className="mr-2 h-5 w-5" />
                Voir le programme
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Dates Section */}
      <DatesSection />

      {/* Venue Section */}
      <VenueSection />
    </Layout>
  );
};

export default Home;
