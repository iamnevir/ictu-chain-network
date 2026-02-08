import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, BookOpen, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const studentPoints = [
  "Thực hành trên mạng blockchain Layer 1 thật",
  "Hiểu kiến trúc, luồng giao dịch và vận hành hệ thống blockchain",
  "Thực hiện bài tập, đồ án và dự án nghiên cứu gắn với hệ thống thực",
  "Phát triển tư duy hệ thống và năng lực công nghệ mới",
];

const lecturerPoints = [
  "Triển khai môi trường blockchain phục vụ từng học phần",
  "Thực hiện demo và thí nghiệm công nghệ blockchain",
  "Làm nền tảng cho đề tài nghiên cứu khoa học và luận văn",
  "Hỗ trợ đào tạo sau đại học và nghiên cứu chuyên sâu",
];

export default function EducationSection() {
  return (
    <section id="dao-tao" className="section-padding gradient-light">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-ibn-sky font-semibold text-sm uppercase tracking-wider">Phục vụ đào tạo và nghiên cứu</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Nền tảng học tập và nghiên cứu blockchain
          </h2>
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl mx-auto" delay={0.15}>
          <Tabs defaultValue="sinhvien" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
              <TabsTrigger value="sinhvien" className="gap-2 text-sm">
                <GraduationCap className="w-4 h-4" /> Dành cho sinh viên
              </TabsTrigger>
              <TabsTrigger value="giangvien" className="gap-2 text-sm">
                <BookOpen className="w-4 h-4" /> Dành cho giảng viên
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sinhvien">
              <div className="bg-card rounded-xl p-8 border border-border">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  IBN mang lại môi trường học tập blockchain thực tế và bài bản. 
                  Sinh viên không chỉ học viết ứng dụng, mà còn hiểu cách blockchain được triển khai và quản trị trong thực tế.
                </p>
                <ul className="space-y-4">
                  {studentPoints.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-ibn-teal shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="giangvien">
              <div className="bg-card rounded-xl p-8 border border-border">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  IBN là nền tảng hỗ trợ hiệu quả cho giảng dạy và nghiên cứu khoa học. 
                  IBN giúp giảng viên chuyển từ giảng dạy lý thuyết sang đào tạo gắn với hạ tầng thực.
                </p>
                <ul className="space-y-4">
                  {lecturerPoints.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-ibn-teal shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  );
}
