import { GraduationCap, FlaskConical, Building2 } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: GraduationCap,
    title: "Đào tạo và thực hành",
    desc: "Đào tạo và thực hành blockchain trong môi trường đại học",
  },
  {
    icon: FlaskConical,
    title: "Nghiên cứu khoa học",
    desc: "Nghiên cứu khoa học và thử nghiệm công nghệ blockchain",
  },
  {
    icon: Building2,
    title: "Triển khai dịch vụ",
    desc: "Triển khai các hệ thống blockchain cho tổ chức và doanh nghiệp",
  },
];

export default function OverviewSection() {
  return (
    <section id="gioi-thieu" className="section-padding gradient-light">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ibn-sky font-semibold text-sm uppercase tracking-wider">Giới thiệu tổng quan</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Hạ tầng blockchain dùng chung cho đào tạo và ứng dụng
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            ICTU Blockchain Network là mạng blockchain Layer 1 có cấp phép, được phát triển như một hạ tầng 
            dùng chung phục vụ ba nhóm hoạt động chính. IBN không gắn với một ứng dụng đơn lẻ mà đóng vai trò 
            nền tảng hạ tầng, cho phép nhiều hệ thống, học phần và dự án cùng khai thác trên một mạng blockchain thống nhất.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.15}>
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
