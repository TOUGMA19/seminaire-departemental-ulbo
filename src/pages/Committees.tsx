import { Award, Users, User } from "lucide-react";
import Layout from "@/components/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ScientificMember {
  name: string;
  role: string;
  institution: string;
  photo?: string;
}

const scientificCommittee: ScientificMember[] = [
  {
    name: "Pr. [Nom]",
    role: "Président du Comité Scientifique",
    institution: "ULBO",
    photo: "",
  },
  {
    name: "Pr. [Nom]",
    role: "Membre",
    institution: "Université [Nom]",
    photo: "",
  },
  {
    name: "Dr. [Nom]",
    role: "Membre",
    institution: "ULBO",
    photo: "",
  },
  {
    name: "Dr. [Nom]",
    role: "Membre",
    institution: "Université [Nom]",
    photo: "",
  },
  {
    name: "Dr. [Nom]",
    role: "Membre",
    institution: "ULBO",
    photo: "",
  },
];

const organizingCommittee = [
  "Chef de Département de Mathématiques - Président",
  "Enseignants-chercheurs du département",
  "Doctorants en Mathématiques",
  "Étudiants volontaires",
];

const Committees = () => {
  return (
    <Layout>
      <section className="py-20 bg-background min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Organisation
            </span>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Comités du Séminaire
            </h1>
          </div>

          {/* Scientific Committee with Photos */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="bg-primary p-6">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-gold" />
                  <h2 className="font-display font-bold text-xl text-primary-foreground">
                    Comité Scientifique
                  </h2>
                </div>
                <p className="font-body text-sm text-primary-foreground/80 mt-2">
                  Évaluation des résumés et qualité scientifique
                </p>
              </div>
              <div className="p-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {scientificCommittee.map((member, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                    >
                      <Avatar className="w-24 h-24 mb-4 border-2 border-gold/30">
                        {member.photo ? (
                          <AvatarImage src={member.photo} alt={member.name} />
                        ) : null}
                        <AvatarFallback className="bg-primary/10 text-primary">
                          <User className="w-10 h-10" />
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="font-body text-sm text-gold font-medium mb-1">
                        {member.role}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {member.institution}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground mt-6 italic text-center">
                  * Liste des membres à compléter
                </p>
              </div>
            </div>
          </div>

          {/* Organizing Committee */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="bg-primary p-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-gold" />
                  <h2 className="font-display font-bold text-xl text-primary-foreground">
                    Comité d'Organisation
                  </h2>
                </div>
                <p className="font-body text-sm text-primary-foreground/80 mt-2">
                  Logistique et coordination du séminaire
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {organizingCommittee.map((member, index) => (
                    <li
                      key={index}
                      className="font-body text-foreground flex items-start gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span>{member}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-sm text-muted-foreground mt-6 italic">
                  * Liste des membres à compléter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Committees;
