import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import hala1 from "@/assets/hala-1.jpg";
import hala2 from "@/assets/hala-2.jpg";
import hala3 from "@/assets/hala-3.jpg";
import hala4 from "@/assets/hala-4.jpg";
import hala5 from "@/assets/hala-5.jpg";
import hala6 from "@/assets/hala-6.jpg";
import hala7 from "@/assets/hala-7.jpg";
import hala8 from "@/assets/hala-8.jpg";
import hala9 from "@/assets/hala-9.jpg";
import elementFire from "@/assets/element-fire.jpg";
import elementWater from "@/assets/element-water.jpg";
import elementEarth from "@/assets/element-earth.jpg";
import elementAir from "@/assets/element-air.jpg";

const Index = () => {
  const images = [hala1, hala2, hala3, hala4, hala5, hala6, hala7, hala8, hala9];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${hala7})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 via-background/30 to-golden/5" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-lavender via-primary to-golden bg-clip-text text-transparent">
            Molecules of Life
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-foreground/90">
            Longevity pro každou buňku těla
          </p>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Největší LONGEVITY & WELLBEING prodejna svého druhu ve střední Evropě
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-to-r from-lavender to-primary hover:opacity-90"
            onClick={() => window.open('https://maps.google.com/?q=Chodouň+276,+Zdice', '_blank')}
          >
            <MapPin className="mr-2 h-5 w-5" />
            Najděte nás na mapě
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Cesta k dlouhověkosti a harmonii
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Vydejte se spolu s námi na cestu inspirovanou Aristotelovými čtyřmi živly 
                a zažijte péči o tělo, mysl i duši všemi smysly – skrze vůně, chutě, dotek, 
                světlo i design.
              </p>
              <p className="text-lg leading-relaxed">
                Propojujeme české rodinné značky v jedinečném konceptu dlouhověkosti a 
                životní harmonie, kde se moudrost minulosti a síla přírody setkává s 
                moderním přístupem k wellbeingu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Nahlédněte do naší haly
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={`Longevity hala Molecules of Life - fotografie ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Elements Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-light via-background to-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Aristotelovské živly
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={elementFire}
                  alt="Oheň - Energie a vitalita"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Oheň</h3>
                <p className="text-muted-foreground">Energie a vitalita pro vaše tělo</p>
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={elementWater}
                  alt="Voda - Čistota a harmonie"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Voda</h3>
                <p className="text-muted-foreground">Čistota a harmonie mysli</p>
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={elementEarth}
                  alt="Země - Stabilita a síla přírody"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Země</h3>
                <p className="text-muted-foreground">Stabilita a síla přírody</p>
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={elementAir}
                  alt="Vzduch - Lehkost a svoboda"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Vzduch</h3>
                <p className="text-muted-foreground">Lehkost a svoboda duše</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Kontakt a lokace
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Kde nás najdete</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-lavender mt-1" />
                  <div>
                    <p className="font-semibold">Adresa</p>
                    <p className="text-muted-foreground">
                      Chodouň 276<br />
                      Zdice<br />
                      Levandulové údolí
                    </p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://maps.google.com/?q=Chodouň+276,+Zdice', '_blank')}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Otevřít v Google Maps
                </Button>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Otevírací doba</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-lavender mt-1" />
                  <div>
                    <p className="font-semibold">Slavnostní otevření</p>
                    <p className="text-muted-foreground">
                      13. listopadu 2025<br />
                      od 11:00 hodin
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-lavender-light rounded-lg">
                  <p className="text-sm text-center text-foreground">
                    Těšíme se na Vaši návštěvu!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Molecules of Life</h3>
          <p className="text-lg mb-6 opacity-90">
            Longevity pro každou buňku těla
          </p>
          <p className="text-sm opacity-75">
            © 2025 Molecules of Life - Levandulové údolí
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
