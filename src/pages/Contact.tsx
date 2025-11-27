import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Facebook, Instagram, Globe } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground animate-in fade-in slide-in-from-bottom duration-700">
                Connect With Us
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-150">
                Join our community and stay connected. Follow us on social media to get the latest updates, resources, and inspiration for preserving Asụsụ Igbo.
              </p>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Find Us On Social Media
                </h2>
                <p className="text-lg text-muted-foreground">
                  Follow us, share your journey, and be part of our growing community
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Email Card */}
                <Card className="border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">Email Us</h3>
                        <a 
                          href="mailto:asusuigboamakaonline@gmail.com"
                          className="text-base md:text-lg text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          asusuigboamakaonline@gmail.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-3">
                          Send us your questions, suggestions, or stories
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Facebook Card */}
                <Card className="border-secondary/30 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl group">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Facebook className="h-8 w-8 md:h-10 md:w-10 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">Facebook</h3>
                        <a 
                          href="https://facebook.com/Asusuigboamakaonline" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base md:text-lg text-blue-600 hover:text-blue-700 transition-colors font-medium"
                        >
                          @Asusuigboamakaonline
                        </a>
                        <p className="text-sm text-muted-foreground mt-3">
                          Join our community and engage with daily content
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Instagram Card */}
                <Card className="border-accent/30 hover:border-accent/50 transition-all duration-300 hover:shadow-xl group">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Instagram className="h-8 w-8 md:h-10 md:w-10 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">Instagram</h3>
                        <a 
                          href="https://instagram.com/Asusuigboamaka" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-base md:text-lg text-pink-600 hover:text-pink-700 transition-colors font-medium"
                        >
                          @Asusuigboamaka
                        </a>
                        <p className="text-sm text-muted-foreground mt-3">
                          Follow us for visual stories and language tips
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Website Card */}
                <Card className="border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Globe className="h-8 w-8 md:h-10 md:w-10 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">Our Website</h3>
                        <p className="text-base md:text-lg text-accent font-medium">
                          www.asusuigboamaka.com
                        </p>
                        <p className="text-sm text-muted-foreground mt-3">
                          Explore our resources and learn more about our mission
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quote Section */}
              <div className="mt-12 md:mt-16">
                <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-primary/20">
                  <CardContent className="p-8 md:p-12 text-center">
                    <p className="text-xl md:text-2xl text-foreground font-medium italic mb-4">
                      "Igbo kwenu! Let's work together to ensure our children grow up speaking the language of our ancestors."
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      — Asusuigboamaka Community
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
