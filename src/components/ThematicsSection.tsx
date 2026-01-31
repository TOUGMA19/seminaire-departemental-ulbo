import { 
  TrendingUp, 
  GitBranch, 
  Hexagon, 
  Target, 
  BarChart3, 
  Calculator,
  Boxes,
  Sparkles
} from "lucide-react";

const thematics = [
  { 
    icon: TrendingUp, 
    title: "Analyse Mathématique", 
    color: "text-blue-600",
    description: "Fonctions, limites, continuité et structures analytiques."
  },
  { 
    icon: GitBranch, 
    title: "Équations Différentielles et EDP", 
    color: "text-emerald-600",
    description: "Modélisation et résolution d'équations différentielles."
  },
  { 
    icon: Hexagon, 
    title: "Algèbre et Géométrie", 
    color: "text-purple-600",
    description: "Structures algébriques et géométrie différentielle."
  },
  { 
    icon: Target, 
    title: "Optimisation", 
    color: "text-orange-600",
    description: "Méthodes d'optimisation et recherche opérationnelle."
  },
  { 
    icon: BarChart3, 
    title: "Probabilités et Statistiques", 
    color: "text-rose-600",
    description: "Théorie des probabilités et inférence statistique."
  },
  { 
    icon: Calculator, 
    title: "Mathématiques Numériques", 
    color: "text-cyan-600",
    description: "Méthodes numériques et calcul scientifique."
  },
  { 
    icon: Boxes, 
    title: "Modélisation Mathématique", 
    color: "text-indigo-600",
    description: "Modèles mathématiques pour systèmes réels."
  },
  { 
    icon: Sparkles, 
    title: "Applications Interdisciplinaires", 
    color: "text-amber-600",
    description: "Mathématiques en physique, biologie et informatique."
  },
];

const ThematicsSection = () => {
  return (
    <section id="thematiques" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-wider mb-4">
            Domaines de Recherche
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
            Thématiques du Séminaire
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Le séminaire couvre un large spectre de domaines des mathématiques pures et appliquées.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {thematics.map((thematic, index) => (
            <div
              key={thematic.title}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <thematic.icon className={`h-6 w-6 ${thematic.color}`} />
              </div>
              <h3 className="font-display font-semibold text-base text-foreground leading-snug mb-2">
                {thematic.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground">
                {thematic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThematicsSection;
