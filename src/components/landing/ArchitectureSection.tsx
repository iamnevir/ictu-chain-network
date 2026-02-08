import { Layers, Globe, Activity } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const tiers = [
  {
    icon: Layers,
    label: "Blockchain Layer 1",
    desc: "Mạng blockchain lõi do ICTU quản lý và vận hành",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Globe,
    label: "Application Layer",
    desc: "Cổng truy cập và API cho người dùng, đối tác và hệ thống bên ngoài",
    color: "bg-ibn-sky text-primary-foreground",
  },
  {
    icon: Activity,
    label: "Sandbox & Monitoring",
    desc: "Môi trường thử nghiệm, giám sát và đánh giá hiệu năng hệ thống",
    color: "bg-ibn-teal text-primary-foreground",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="section-padding gradient-light">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ibn-sky font-semibold text-sm uppercase tracking-wider">Mô hình triển khai dịch vụ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Kiến trúc định hướng dịch vụ
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Thiết kế này cho phép IBN mở rộng linh hoạt theo nhu cầu đào tạo, nghiên cứu và hợp tác.
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto space-y-4">
          {tiers.map((t, i) => (
            <AnimatedSection key={t.label} delay={i * 0.15}>
              <div className="flex items-center gap-5 p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-xl ${t.color} flex items-center justify-center shrink-0`}>
                  <t.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{t.label}</h3>
                  <p className="text-muted-foreground text-sm">{t.desc}</p>
                </div>
              </div>
              {i < tiers.length - 1 && (
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-6 bg-border" />
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
