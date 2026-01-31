import { Presentation, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";

const programItems = [
  {
    icon: Presentation,
    title: "Conférences Plénières",
    description: "Présentations par des chercheurs invités de renommée internationale.",
  },
  {
    icon: MessageSquare,
    title: "Communications Orales",
    description: "Présentations de 20 minutes par les participants sélectionnés.",
  },
];

const Program = () => {
  return (
    <Layout>
      <section className="py-20 bg-section-alt min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Agenda
            </span>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Programme du Séminaire
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Un programme riche et varié pour favoriser les échanges scientifiques.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            {programItems.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-8 border-2 border-dashed border-gold/50 text-center">
              <p className="font-display text-xl text-foreground mb-2">
                📅 Programme Détaillé
              </p>
              <p className="font-body text-muted-foreground">
                Le programme détaillé sera publié après la sélection des résumés soumis.
                Restez informés en consultant régulièrement cette page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Program;
