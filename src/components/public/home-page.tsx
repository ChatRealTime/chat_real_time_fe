import {
  CheckCircle,
  Code,
  Globe,
  MessageSquare,
  Shield,
  Users,
  Zap,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <section className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse px-4 md:px-8 lg:px-16 py-16">
          <div className="w-full lg:w-1/2">
            <div className="mockup-window border bg-base-300 shadow-xl">
              <div className="flex justify-center bg-base-200 p-4">
                <img
                  src="../public/landing-page-chat-real-time.webp"
                  alt="Chat Application Demo"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pr-8">
            <h1 className="text-5xl font-bold">
              Chat thời gian thực cho người dùng và đội nhóm
            </h1>
            <p className="py-6 text-lg">
              Kết nối bạn đến mọi người và nhóm của bạn bằng nền tảng nhắn tin
              thời gian thực mạnh mẽ, an toàn và dễ sử dụng. Bắt đầu miễn phí
              ngay hôm nay!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary">
                Trải nghiệm miễn phí ngay
              </button>
              <button className="btn btn-outline">Xem demo</button>
            </div>
            <div className="mt-6 flex items-center">
              <div className="avatar-group -space-x-2">
                <div className="avatar">
                  <div className="w-8">
                    <img src="https://i.pravatar.cc/120" alt="User" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-8">
                    <img src="https://i.pravatar.cc/121" alt="User" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-8">
                    <img src="https://i.pravatar.cc/122" alt="User" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-8">
                    <img src="https://i.pravatar.cc/151" alt="User" />
                  </div>
                </div>
              </div>
              <p className="ml-4 text-sm">
                Tham gia cùng hơn 10.000 người dùng sử dụng HA Chat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Các tính năng mạnh mẽ</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Mọi thứ bạn cần để giữ cho nhóm của bạn luôn kết nối và làm việc
            hiệu quả
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="bg-primary/10 p-3 rounded-full w-fit">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="card-title mt-4">Tin nhắn theo thời gian thực</h3>
              <p>
                Gửi tin nhắn và nhận phản hồi tức thì dù ở đâu, bất kỳ thiết bị
                nào.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="bg-primary/10 p-3 rounded-full w-fit">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="card-title mt-4">Tạo nhóm để nhắn tin</h3>
              <p>Tổ chức các cuộc trò chuyện theo nhóm, dự án hoặc chủ đề.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="bg-primary/10 p-3 rounded-full w-fit">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="card-title mt-4">Bảo mật doanh nghiệp</h3>
              <p>Mã hóa đầu cuối và tuân thủ các tiêu chuẩn ngành.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="bg-primary/10 p-3 rounded-full w-fit">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="card-title mt-4">Chia sẽ các tệp</h3>
              <p>
                Dễ dàng chia sẻ tài liệu, hình ảnh và tập tin với nhóm của bạn
                lên đến 30mb cho tài khoản miễn phí.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="bg-primary/10 p-3 rounded-full w-fit">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="card-title mt-4">Đa nền tảng</h3>
              <p>Có trên web, app desktop và mobile</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="bg-primary/10 p-3 rounded-full w-fit">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="card-title mt-4">Tích hợp API</h3>
              <p>Kết nối với các công cụ và dịch vụ yêu thích của bạn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-16 px-4 md:px-8 lg:px-16 bg-base-200"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Cách chúng tôi hoạt động</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Bắt đầu với HA Chat chỉ bằng vài bước đơn giản
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="badge badge-primary badge-lg">1</div>
              <h3 className="card-title mt-4">Đăng ký</h3>
              <p>
                Tạo tài khoản của bạn và liên kết với các người dùng khác và bắt
                đầu các cuộc trò chuyện.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="badge badge-primary badge-lg">2</div>
              <h3 className="card-title mt-4">Tạo 1 nhóm chat mới</h3>
              <p>Tùy chỉnh nhóm chat mới theo chủ đề hay mục đích của bạn</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="badge badge-primary badge-lg">3</div>
              <h3 className="card-title mt-4">Bắt đầu trò chuyện thôi nào</h3>
              <p>Gửi tin nhắn, hình ảnh, ... với mọi người</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Đơn giản, minh bạch</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Chọn gói tài khoản mà bạn cần, không có phí ẩn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Miễn phí</h3>
              <p className="text-3xl font-bold mt-2">
                0 VND<span className="text-sm font-normal">/tháng</span>
              </p>
              <p className="mt-4">Phù hợp cho các nhóm nhỏ mới bắt đầu.</p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-2" />
                  <span>Lên đến 10 người dùng</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-2" />
                  <span>5 kênh</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-2" />
                  <span>1GB lưu trữ tệp</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-2" />
                  <span>Lịch sử tin nhắn 7 ngày</span>
                </li>
              </ul>
              <div className="card-actions mt-6">
                <button className="btn btn-outline btn-block">
                  Bắt đầu ngay
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-primary text-primary-content shadow-xl">
            <div className="card-body">
              <div className="badge badge-secondary">Phổ biến</div>
              <h3 className="card-title">Chuyên nghiệp</h3>
              <p className="text-3xl font-bold mt-2">
                $12
                <span className="text-sm font-normal">/người dùng/tháng</span>
              </p>
              <p className="mt-4">
                Dành cho các nhóm đang phát triển cần nhiều tính năng hơn.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Không giới hạn người dùng</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Không giới hạn kênh</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>10GB lưu trữ tệp mỗi người dùng</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Lịch sử tin nhắn không giới hạn</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Quyền nâng cao</span>
                </li>
              </ul>
              <div className="card-actions mt-6">
                <button className="btn btn-secondary btn-block">
                  Bắt đầu ngay
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Doanh nghiệp</h3>
              <p className="text-3xl font-bold mt-2">Tùy chỉnh</p>
              <p className="mt-4">Dành cho tổ chức lớn có nhu cầu đặc biệt.</p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-2" />
                  <span>Mọi thứ trong gói Chuyên nghiệp</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-2" />
                  <span>Hỗ trợ chuyên biệt</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-2" />
                  <span>Tích hợp tùy chỉnh</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-2" />
                  <span>Tính năng bảo mật nâng cao</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-2" />
                  <span>Đảm bảo SLA</span>
                </li>
              </ul>
              <div className="card-actions mt-6">
                <button className="btn btn-outline btn-block">
                  Liên hệ tư vấn
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-16 px-4 md:px-8 lg:px-16 bg-base-200"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Khách hàng của chúng tôi nói gì
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Được tin tưởng bởi hàng nghìn đội nhóm trên toàn thế giới
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                      readOnly
                    />
                  ))}
                </div>
              </div>
              <p>
                "HA Chat đã thay đổi cách nhóm của chúng tôi giao tiếp. Tính
                năng nhắn tin thời gian thực và chia sẻ tệp đã cải thiện đáng kể
                năng suất của chúng tôi."
              </p>
              <div className="flex items-center mt-4">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://i.pravatar.cc/150" alt="Người dùng" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-sm">Quản lý sản phẩm, TechCorp</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                      readOnly
                    />
                  ))}
                </div>
              </div>
              <p>
                "Các tính năng bảo mật trong HA Chat mang lại sự yên tâm khi
                chúng tôi trao đổi thông tin nhạy cảm. Đây thực sự là một bước
                ngoặt đối với đội nhóm làm việc từ xa của chúng tôi."
              </p>
              <div className="flex items-center mt-4">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://i.pravatar.cc/112" alt="Người dùng" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-bold">Michael Chen</p>
                  <p className="text-sm">Giám đốc Công nghệ, SecureData Inc.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name="rating-3"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                      readOnly
                    />
                  ))}
                </div>
              </div>
              <p>
                "Chúng tôi đã thử nhiều nền tảng trò chuyện, nhưng HA Chat nổi
                bật với giao diện trực quan và các tính năng mạnh mẽ. Đội nhóm
                của chúng tôi đã sử dụng ngay lập tức."
              </p>
              <div className="flex items-center mt-4">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://i.pravatar.cc/111" alt="Người dùng" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-bold">Emily Rodriguez</p>
                  <p className="text-sm">Trưởng nhóm, Creative Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
