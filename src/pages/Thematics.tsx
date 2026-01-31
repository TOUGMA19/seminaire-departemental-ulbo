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
import Layout from "@/components/Layout";

const thematics = [
  { 
    icon: TrendingUp, 
    title: "Analyse Mathématique", 
    color: "text-blue-600",
    description: "Étude approfondie des fonctions, limites, continuité et structures analytiques fondamentales.",
    subtopics: ["Analyse fonctionnelle", "Analyse complexe", "Analyse harmonique", "Théorie de la mesure"]
  },
  { 
    icon: GitBranch, 
    title: "Équations Différentielles et EDP", 
    color: "text-emerald-600",
    description: "Modélisation et résolution des équations différentielles ordinaires et aux dérivées partielles.",
    subtopics: ["EDO linéaires et non-linéaires", "EDP elliptiques et paraboliques", "Systèmes dynamiques", "Théorie du contrôle"]
  },
  { 
    icon: Hexagon, 
    title: "Algèbre et Géométrie", 
    color: "text-purple-600",
    description: "Structures algébriques, géométrie différentielle et leurs applications modernes.",
    subtopics: ["Algèbre linéaire avancée", "Théorie des groupes", "Géométrie différentielle", "Topologie algébrique"]
  },
  { 
    icon: Target, 
    title: "Optimisation et Recherche Opérationnelle", 
    color: "text-orange-600",
    description: "Méthodes d'optimisation pour la prise de décision et la résolution de problèmes complexes.",
    subtopics: ["Programmation linéaire", "Optimisation convexe", "Métaheuristiques", "Théorie des jeux"]
  },
  { 
    icon: BarChart3, 
    title: "Probabilités et Statistiques", 
    color: "text-rose-600",
    description: "Théorie des probabilités, inférence statistique et analyse des données.",
    subtopics: ["Processus stochastiques", "Statistique inférentielle", "Séries temporelles", "Apprentissage statistique"]
  },
  { 
    icon: Calculator, 
    title: "Mathématiques Numériques", 
    color: "text-cyan-600",
    description: "Méthodes numériques pour l'approximation et la simulation de phénomènes mathématiques.",
    subtopics: ["Analyse numérique", "Méthodes d'éléments finis", "Calcul scientifique", "Simulation Monte Carlo"]
  },
  { 
    icon: Boxes, 
    title: "Modélisation Mathématique", 
    color: "text-indigo-600",
    description: "Construction et analyse de modèles mathématiques pour des systèmes réels.",
    subtopics: ["Modèles épidémiologiques", "Dynamique des populations", "Modèles climatiques", "Réseaux complexes"]
  },
  { 
    icon: Sparkles, 
    title: "Applications Interdisciplinaires", 
    color: "text-amber-600",
    description: "Applications des mathématiques en physique, biologie, économie et informatique.",
    subtopics: ["Biomathématiques", "Mathématiques financières", "Cryptographie", "Intelligence artificielle"]
  },
];

const Thematics = () => {
  return (
    <Layout>
      <section className="py-20 bg-section-alt min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Domaines de Recherche
            </span>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Thématiques du Séminaire
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Le séminaire couvre un large spectre de domaines des mathématiques pures et appliquées.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {thematics.map((thematic, index) => (
              <div
                key={thematic.title}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-background flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <thematic.icon className={`h-7 w-7 ${thematic.color}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {thematic.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {thematic.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {thematic.subtopics.map((subtopic) => (
                    <span
                      key={subtopic}
                      className="inline-block px-3 py-1 text-xs font-body font-medium bg-muted text-muted-foreground rounded-full"
                    >
                      {subtopic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Thematics;
