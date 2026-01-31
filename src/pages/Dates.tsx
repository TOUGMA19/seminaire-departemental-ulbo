import { Calendar, FileEdit, Bell, CalendarCheck } from "lucide-react";
import Layout from "@/components/Layout";

const dates = [
  {
    icon: Calendar,
    event: "Ouverture des soumissions",
    date: "À définir",
    status: "upcoming",
  },
  {
    icon: FileEdit,
    event: "Date limite de soumission",
    date: "À définir",
    status: "upcoming",
  },
  {
    icon: Bell,
    event: "Notification d'acceptation",
    date: "À définir",
    status: "upcoming",
  },
  {
    icon: CalendarCheck,
    event: "Date du séminaire",
    date: "À définir",
    status: "upcoming",
  },
];

const Dates = () => {
  return (
    <Layout>
      <section className="py-20 bg-background min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Calendrier
            </span>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Dates Importantes
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Notez ces dates clés dans votre agenda.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              <div className="space-y-6">
                {dates.map((item) => (
                  <div
                    key={item.event}
                    className="relative flex items-start gap-6"
                  >
                    {/* Icon Circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                      <item.icon className="h-7 w-7 text-primary-foreground" />
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="font-display font-semibold text-lg text-foreground">
                          {item.event}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/20 text-gold font-body font-medium text-sm">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dates;
