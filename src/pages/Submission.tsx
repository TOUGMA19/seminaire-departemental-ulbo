import { Button } from "@/components/ui/button";
import { FileUp, FileText, Languages, FileCheck, Download } from "lucide-react";
import Layout from "@/components/Layout";

const guidelines = [
  { icon: Languages, label: "Langue", value: "Français ou Anglais" },
  { icon: FileText, label: "Longueur", value: "1 page maximum" },
  { icon: FileCheck, label: "Format", value: "PDF uniquement" },
  { icon: FileUp, label: "Modèle", value: "LaTeX ou Word" },
];

const templates = [
  { label: "Template LaTeX (.tex)", href: "/templates/template.tex", icon: FileText },
  { label: "Template Word (.docx)", href: "/templates/template.docx", icon: FileText },
];

const Submission = () => {
  return (
    <Layout>
      <section className="py-20 bg-section-alt min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                Appel à Communications
              </span>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                Soumission des Résumés
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                La soumission des résumés se fait exclusivement via la plateforme <strong className="text-foreground">EasyChair</strong>.
              </p>
            </div>

            {/* Guidelines Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {guidelines.map((item) => (
                <div
                  key={item.label}
                  className="bg-card rounded-xl p-5 border border-border text-center"
                >
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-body font-medium text-foreground mb-1">{item.label}</p>
                  <p className="font-body text-sm text-muted-foreground">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Templates Download */}
            <div className="bg-card rounded-xl border border-border p-6 mb-12">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4 text-center">
                Télécharger les modèles
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {templates.map((template) => (
                  <Button
                    key={template.label}
                    variant="outline"
                    asChild
                    className="font-body"
                  >
                    <a href={template.href} download>
                      <Download className="mr-2 h-4 w-4" />
                      {template.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <FileUp className="h-8 w-8 text-gold" />
              </div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                Prêt à soumettre votre résumé ?
              </h2>
              <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8">
                Rendez-vous sur EasyChair pour soumettre votre contribution. Assurez-vous de respecter 
                les consignes de formatage avant de soumettre.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-gold hover:bg-gold-light text-navy-dark font-body font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
              >
                <a
                  href="https://easychair.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileUp className="mr-2 h-5 w-5" />
                  Soumettre sur EasyChair
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Submission;
