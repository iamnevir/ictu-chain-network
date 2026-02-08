import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

export default function CTASection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="lien-he" className="section-padding gradient-navy text-primary-foreground">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Đồng hành cùng ICTU trong phát triển blockchain
          </h2>
          <p className="text-primary-foreground/70 mb-10 leading-relaxed">
            IBN là nền tảng dành cho đào tạo, nghiên cứu và triển khai blockchain 
            một cách bài bản, có kiểm soát và bền vững.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-ibn-sky hover:bg-ibn-sky/90 text-primary-foreground px-8 py-6 text-base"
              onClick={() => scrollTo("#gioi-thieu")}
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Tìm hiểu về IBN
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base"
            >
              <Handshake className="w-5 h-5 mr-2" />
              Liên hệ hợp tác
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
