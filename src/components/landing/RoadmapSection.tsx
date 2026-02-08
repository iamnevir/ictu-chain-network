import { AnimatedSection } from "@/hooks/use-scroll-animation";

const steps = [
  {
    step: "01",
    title: "Mở rộng hạ tầng",
    desc: "Mở rộng hạ tầng blockchain Layer 1",
  },
  {
    step: "02",
    title: "Chuẩn hóa dịch vụ",
    desc: "Chuẩn hóa dịch vụ Blockchain as a Service",
  },
  {
    step: "03",
    title: "Tăng cường hợp tác",
    desc: "Tăng cường hợp tác với tổ chức và doanh nghiệp",
  },
  {
    step: "04",
    title: "Nền tảng học thuật",
    desc: "Phát triển IBN thành nền tảng blockchain học thuật và ứng dụng của ICTU",
  },
];

export default function RoadmapSection() {
  return (
    <section id="lo-trinh" className="section-padding gradient-light">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ibn-sky font-semibold text-sm uppercase tracking-wider">Định hướng phát triển</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Lộ trình dài hạn
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.15}>
                <div className={`flex items-start gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0 z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {s.step}
                  </div>
                  <div className={`flex-1 ${i % 2 === 1 ? "md:pr-20 md:text-right" : "md:pl-20"}`}>
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                      <span className="sm:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-xs mb-3">
                        {s.step}
                      </span>
                      <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                      <p className="text-muted-foreground text-sm">{s.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
