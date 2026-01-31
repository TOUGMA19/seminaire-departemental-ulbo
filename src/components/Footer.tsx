const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-display font-bold text-xl text-primary-foreground mb-2">
            Séminaire Scientifique
          </h3>
          <p className="font-body text-primary-foreground/70 mb-6">
            Département de Mathématiques et Informatique • Université Lédéa Bernard Ouedraogo
          </p>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-body text-sm text-primary-foreground/60">
            © {currentYear} Département de Mathématiques et Informatique – ULBO. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
