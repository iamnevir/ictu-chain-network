import { Server, GitBranch, FlaskConical, HeadsetIcon } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: Server,
    title: "Hạ tầng blockchain dùng chung",
    desc: "Cung cấp hạ tầng blockchain sẵn sàng sử dụng cho tổ chức",
  },
  {
    icon: GitBranch,
    title: "Mạng blockchain riêng",
    desc: "Triển khai mạng blockchain riêng theo nhu cầu tổ chức",
  },
  {
    icon: FlaskConical,
    title: "Môi trường sandbox",
    desc: "Cung cấp môi trường thử nghiệm và sandbox an toàn",
  },
  {
    icon: HeadsetIcon,
    title: "Hỗ trợ triển khai",
    desc: "Hỗ trợ triển khai và đánh giá ứng dụng blockchain",
  },
];

export default function BaaSSection() {
  return (
    <section id="dich-vu" className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ibn-sky font-semibold text-sm uppercase tracking-wider">Blockchain as a Service</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Hạ tầng blockchain cho tổ chức và doanh nghiệp
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            IBN phù hợp với các tổ chức và doanh nghiệp muốn thử nghiệm hoặc triển khai blockchain 
            trong môi trường có kiểm soát, được hỗ trợ bởi đơn vị đào tạo chuyên môn.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-ibn-sky/30 transition-all duration-300 h-full text-center">
                <div className="w-12 h-12 rounded-lg bg-ibn-sky/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-6 h-6 text-ibn-sky" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
