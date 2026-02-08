import { Award, Lightbulb, Building2, School } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const values = [
  {
    icon: School,
    title: "Chuẩn hóa đào tạo",
    desc: "Chuẩn hóa đào tạo blockchain trong nhà trường",
  },
  {
    icon: Lightbulb,
    title: "Kết nối nghiên cứu",
    desc: "Kết nối nghiên cứu khoa học với ứng dụng thực tiễn",
  },
  {
    icon: Building2,
    title: "Hỗ trợ doanh nghiệp",
    desc: "Hỗ trợ doanh nghiệp tiếp cận công nghệ blockchain",
  },
  {
    icon: Award,
    title: "Xây dựng vai trò ICTU",
    desc: "Góp phần xây dựng vai trò của ICTU trong hệ sinh thái blockchain",
  },
];

export default function ValuesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ibn-sky font-semibold text-sm uppercase tracking-wider">Giá trị mang lại</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Giá trị bền vững cho nhiều đối tượng
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="text-center p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 rounded-full bg-ibn-gold/15 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-ibn-gold" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
