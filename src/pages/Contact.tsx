import { Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="py-20 bg-background min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Nous Contacter
            </span>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Contact
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Pour toute information complémentaire, n'hésitez pas à nous contacter.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Email */}
              <a
                href="mailto:seminar.maths@ulbo.bf"
                className="group bg-card rounded-xl border border-border p-6 text-center hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-display font-semibold text-lg text-foreground mb-2">
                  Email
                </h2>
                <p className="font-body text-muted-foreground text-sm">
                  seminar.maths@ulbo.bf
                </p>
              </a>

              {/* Phone */}
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-display font-semibold text-lg text-foreground mb-2">
                  Téléphone
                </h2>
                <p className="font-body text-muted-foreground text-sm">
                  À préciser
                </p>
              </div>

              {/* Address */}
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-display font-semibold text-lg text-foreground mb-2">
                  Adresse
                </h2>
                <p className="font-body text-muted-foreground text-sm">
                  Département de Mathématiques<br />
                  ULBO, Ouahigouya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
