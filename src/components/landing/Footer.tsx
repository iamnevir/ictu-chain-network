import { Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-ibn-sky flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IBN</span>
              </div>
              <span className="font-bold text-lg">ICTU Blockchain Network</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Nền tảng Blockchain Layer 1 phục vụ đào tạo, nghiên cứu và triển khai dịch vụ blockchain.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Liên kết</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#gioi-thieu" className="hover:text-background transition-colors">Giới thiệu</a></li>
              <li><a href="#muc-tieu" className="hover:text-background transition-colors">Mục tiêu</a></li>
              <li><a href="#nen-tang" className="hover:text-background transition-colors">Nền tảng</a></li>
              <li><a href="#dao-tao" className="hover:text-background transition-colors">Đào tạo</a></li>
              <li><a href="#dich-vu" className="hover:text-background transition-colors">Dịch vụ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Trường Đại học Công nghệ Thông tin và Truyền thông – ICTU</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>blockchain@ictu.edu.vn</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 shrink-0" />
                <span>ictu.edu.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm text-background/40">
          © 2025 ICTU Blockchain Network. Trường Đại học Công nghệ Thông tin và Truyền thông.
        </div>
      </div>
    </footer>
  );
}
