import { Button } from "@/components/ui/button";
import { ArrowDown, Handshake, Blocks, ShieldCheck, Network } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center gradient-navy overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-10">
          <Blocks className="w-32 h-32 text-ibn-sky animate-float" />
        </div>
        <div className="absolute top-40 right-20 opacity-10" style={{ animationDelay: "2s" }}>
          <Network className="w-24 h-24 text-ibn-teal animate-float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-10">
          <ShieldCheck className="w-20 h-20 text-ibn-sky animate-float" style={{ animationDelay: "4s" }} />
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ibn-sky/30 bg-ibn-sky/10 mb-8">
            <Blocks className="w-4 h-4 text-ibn-sky" />
            <span className="text-ibn-sky text-sm font-medium">Blockchain Layer 1 Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            ICTU Blockchain
            <br />
            <span className="text-gradient">Network – IBN</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-4 leading-relaxed">
            Nền tảng Blockchain Layer 1 phục vụ đào tạo, nghiên cứu và triển khai dịch vụ blockchain
          </p>

          <p className="text-sm md:text-base text-primary-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            IBN là hạ tầng blockchain do Trường Đại học Công nghệ Thông tin và Truyền thông xây dựng và vận hành, 
            hướng tới mục tiêu hỗ trợ học tập, nghiên cứu khoa học và cung cấp dịch vụ Blockchain as a Service 
            cho các tổ chức, doanh nghiệp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-ibn-sky hover:bg-ibn-sky/90 text-primary-foreground px-8 py-6 text-base"
              onClick={() => scrollTo("#gioi-thieu")}
            >
              <ArrowDown className="w-5 h-5 mr-2" />
              Tìm hiểu về IBN
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base"
              onClick={() => scrollTo("#lien-he")}
            >
              <Handshake className="w-5 h-5 mr-2" />
              Liên hệ hợp tác
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
