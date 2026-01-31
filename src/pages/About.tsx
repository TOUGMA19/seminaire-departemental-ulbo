import { BookOpen, Users, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";

const features = [
  {
    icon: BookOpen,
    title: "Partage des Résultats",
    description: "Présentation et diffusion des travaux de recherche les plus récents en mathématiques.",
  },
  {
    icon: Users,
    title: "Formation des Chercheurs",
    description: "Encadrement et accompagnement des jeunes chercheurs et doctorants dans leur parcours.",
  },
  {
    icon: Lightbulb,
    title: "Collaborations Scientifiques",
    description: "Renforcement des partenariats académiques nationaux et internationaux.",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              À Propos
            </span>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Le Séminaire Scientifique du Département de Mathématiques et Informatique
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Le Séminaire Scientifique du Département de Mathématiques et Informatique de l'Université Lédéa Bernard Ouedraogo 
              est un cadre scientifique dédié à l'excellence académique et à la promotion de la recherche au Burkina Faso et en Afrique de l'Ouest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-card rounded-xl p-8 border border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
