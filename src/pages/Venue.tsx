import { MapPin, Building2, Globe } from "lucide-react";
import Layout from "@/components/Layout";

const Venue = () => {
  return (
    <Layout>
      <section className="py-20 bg-section-alt min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Localisation
            </span>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Lieu du Séminaire
            </h1>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Info Card */}
              <div className="bg-card rounded-2xl border border-border p-8 flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl text-foreground mb-1">
                      Université Lédéa Bernard OUÉDRAOGO
                    </h2>
                    <p className="font-body text-muted-foreground">
                      Département de Mathématiques
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      Adresse
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Ouahigouya, Région du Nord<br />
                      Burkina Faso
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      À propos de Ouahigouya
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      Capitale de la Région du Nord, Ouahigouya est la quatrième plus grande ville du Burkina Faso, 
                      riche d'un patrimoine culturel et historique important.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31095.68891147887!2d-2.448!3d13.5833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2e93b9e7f49867%3A0x8f3d9d19d9e7e3c5!2sOuahigouya%2C%20Burkina%20Faso!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation ULBO"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Venue;
