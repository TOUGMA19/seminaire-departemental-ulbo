import { Button } from "@/components/ui/button";
import { UserPlus, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const pricingTiers = [
  {
    title: "Doctorants",
    price: "5 000",
    currency: "FCFA",
    icon: GraduationCap,
  },
  {
    title: "Enseignants-Chercheurs & Autres",
    price: "10 000",
    currency: "FCFA",
    icon: Briefcase,
  },
];

const RegistrationSection = () => {
  return (
    <section id="inscription" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Inscription
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Tarifs d'Inscription
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              L'inscription au séminaire est <strong className="text-foreground">obligatoire et payante</strong>.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className="border-2 border-border hover:border-gold/50 transition-colors text-center">
                <CardHeader className="pb-2">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                    <tier.icon className="h-7 w-7 text-gold" />
                  </div>
                  <CardTitle className="font-display text-lg">{tier.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <span className="font-display font-bold text-3xl text-primary">{tier.price}</span>
                    <span className="font-body text-muted-foreground ml-2">{tier.currency}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/inscription">
                Voir les détails et s'inscrire
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
