import { Button } from "@/components/ui/button";
import { UserPlus, CheckCircle2, GraduationCap, Briefcase, CreditCard, Smartphone, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  "Accès à toutes les sessions du séminaire",
  "Participation aux tables rondes",
  "Documentation et actes du séminaire",
  "Attestation de participation",
  "Pauses-café et déjeuner inclus",
];

const pricingTiers = [
  {
    title: "Doctorants",
    price: "5 000",
    currency: "FCFA",
    icon: GraduationCap,
    description: "Tarif réduit pour les étudiants en doctorat",
  },
  {
    title: "Enseignants-Chercheurs & Autres",
    price: "10 000",
    currency: "FCFA",
    icon: Briefcase,
    description: "Enseignants, chercheurs, professionnels et autres participants",
  },
];

const paymentMethods = [
  {
    title: "Virement Bancaire",
    icon: Building2,
    details: [
      "Banque : BGFI Bank",
      "Compte : 00000 00000 00000000000 00",
      "Intitulé : Séminaire ULBO 2025",
      "Référence : Votre nom + \"SEMINAIRE\"",
    ],
  },
  {
    title: "Orange Money",
    icon: Smartphone,
    details: [
      "Numéro : +241 00 00 00 00",
      "Nom : Séminaire ULBO",
      "Motif : Inscription + Votre nom",
    ],
  },
];

const Registration = () => {
  return (
    <Layout>
      <section className="py-20 bg-background min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                Inscription
              </span>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Inscrivez-vous au Séminaire
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                L'inscription au séminaire est <strong className="text-foreground">obligatoire et payante</strong>. 
                Elle vous donne accès à l'ensemble des activités scientifiques.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className="border-2 border-border hover:border-gold/50 transition-colors">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <tier.icon className="h-8 w-8 text-gold" />
                    </div>
                    <CardTitle className="font-display text-xl">{tier.title}</CardTitle>
                    <CardDescription className="font-body">{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <span className="font-display font-bold text-4xl text-primary">{tier.price}</span>
                      <span className="font-body text-muted-foreground ml-2">{tier.currency}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Benefits */}
            <div className="bg-muted/30 rounded-2xl p-8 mb-12">
              <h2 className="font-display font-bold text-2xl text-foreground mb-6 text-center">
                Ce que comprend votre inscription
              </h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 font-body text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment Methods */}
            <div className="mb-12">
              <h2 className="font-display font-bold text-2xl text-foreground mb-6 text-center">
                <CreditCard className="inline-block h-6 w-6 mr-2 text-gold" />
                Modes de Paiement
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {paymentMethods.map((method, index) => (
                  <Card key={index} className="border border-border">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <method.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="font-display text-lg">{method.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {method.details.map((detail, idx) => (
                          <li key={idx} className="font-body text-sm text-muted-foreground">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Registration Button */}
            <div className="text-center">
              <div className="bg-hero-gradient rounded-2xl p-8 inline-block">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary-foreground mb-4">
                  Prêt à vous inscrire ?
                </h3>
                <p className="font-body text-primary-foreground/90 mb-6 max-w-md">
                  Remplissez le formulaire d'inscription et effectuez votre paiement pour confirmer votre participation.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="bg-gold hover:bg-gold/90 text-primary font-body font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
                >
                  <a
                    href="https://forms.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <UserPlus className="mr-2 h-5 w-5" />
                    S'inscrire via Google Form
                  </a>
                </Button>
                <p className="font-body text-primary-foreground/70 text-sm mt-4">
                  Après le paiement, envoyez la preuve à : seminaire@ulbo.edu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Registration;
