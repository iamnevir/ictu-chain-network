import { BookOpen, ShieldCheck, Database, Layers } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const capabilities = [
  {
    icon: Database,
    title: "Sổ cái blockchain độc lập",
    desc: "Vận hành sổ cái blockchain độc lập với cơ chế đồng thuận riêng",
  },
  {
    icon: ShieldCheck,
    title: "Danh tính & quyền truy cập",
    desc: "Quản lý danh tính và quyền truy cập người dùng trên mạng blockchain",
  },
  {
    icon: BookOpen,
    title: "Lưu trữ & xác thực dữ liệu",
    desc: "Lưu trữ và xác thực dữ liệu trên blockchain một cách bất biến",
  },
  {
    icon: Layers,
    title: "Ứng dụng lớp trên",
    desc: "Cung cấp nền tảng cho các ứng dụng blockchain lớp trên hoạt động",
  },
];

export default function Layer1Section() {
  return (
    <section id="nen-tang" className="section-padding gradient-navy text-primary-foreground">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ibn-sky font-semibold text-sm uppercase tracking-wider">Nền tảng Blockchain Layer 1</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            Tiếp cận blockchain ở cấp độ hạ tầng
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed">
            Việc tiếp cận blockchain ở cấp Layer 1 giúp người học và đối tác hiểu bản chất công nghệ, 
            thay vì chỉ sử dụng blockchain như một dịch vụ ẩn phía sau ứng dụng.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {capabilities.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.1}>
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-colors h-full text-center">
                <div className="w-12 h-12 rounded-lg bg-ibn-sky/20 flex items-center justify-center mx-auto mb-4">
                  <c.icon className="w-6 h-6 text-ibn-sky" />
                </div>
                <h3 className="font-bold mb-2">{c.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
