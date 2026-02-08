import { Target, Wrench, Building, Users } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const goals = [
  {
    icon: Target,
    title: "Xây dựng mạng blockchain Layer 1",
    desc: "Phục vụ đào tạo và nghiên cứu tại ICTU",
  },
  {
    icon: Wrench,
    title: "Môi trường thực hành thực tế",
    desc: "Tạo môi trường thực hành blockchain gắn với hệ thống vận hành thực tế",
  },
  {
    icon: Building,
    title: "Hỗ trợ triển khai blockchain",
    desc: "Cho các tổ chức, doanh nghiệp và dự án chuyển đổi số",
  },
  {
    icon: Users,
    title: "Kết nối đào tạo và xã hội",
    desc: "Kết nối hoạt động đào tạo đại học với nhu cầu công nghệ của xã hội",
  },
];

export default function GoalsSection() {
  return (
    <section id="muc-tieu" className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ibn-sky font-semibold text-sm uppercase tracking-wider">Mục tiêu triển khai</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Định hướng dài hạn và bền vững
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Mục tiêu của IBN không chỉ dừng ở giảng dạy, mà hướng tới hình thành một nền tảng 
            blockchain học thuật có khả năng ứng dụng thực tiễn.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {goals.map((g, i) => (
            <AnimatedSection key={g.title} delay={i * 0.1}>
              <div className="flex items-start gap-5 p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-ibn-sky/10 flex items-center justify-center shrink-0">
                  <g.icon className="w-6 h-6 text-ibn-sky" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{g.title}</h3>
                  <p className="text-muted-foreground text-sm">{g.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
