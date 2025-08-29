// Cấu trúc dữ liệu cho các dự án
const projects = {
  cv: {
    goals: [
      {
        title: "Mục tiêu 1 🚩",
        content: "Phát triển một trang web CV cá nhân với giao diện hiện đại.",
      },
      {
        title: "Mục tiêu 2 🚩",
        content:
          "Hiển thị các thông tin cá nhân, kỹ năng và kinh nghiệm một cách trực quan.",
      },
    ],
    scopes: {
      in: ["Phát triển giao diện chính", "Tối ưu hóa mã nguồn HTML và CSS"],
      out: ["Hệ thống đăng nhập người dùng", "Kết nối cơ sở dữ liệu"],
    },
    team: [
      { title: "Thành viên 01 👤", content: "Tên: Vũ Gia Huy (Developer)" },
      {
        title: "Thành viên 02 👤",
        content: "Tên: Chuyên gia UX/UI (Designer)",
      },
    ],
    primary: [
      "Hoàn thiện giao diện trước để đảm bảo tính thẩm mỹ.",
      "Tối ưu hóa các file CSS để giảm thời gian tải.",
    ],
    timeline: [
      {
        title: "Khởi động dự án",
        content: "Bắt đầu dự án, xác định các yêu cầu cơ bản.",
      },
      {
        title: "Thiết kế giao diện",
        content: "Thiết kế bố cục và màu sắc của trang web.",
      },
      {
        title: "Phát triển HTML/CSS",
        content: "Xây dựng cấu trúc và giao diện trang.",
      },
      {
        title: "Kiểm thử và tối ưu",
        content: "Kiểm tra lỗi và tối ưu hiệu suất.",
      },
      {
        title: "Hoàn thành và bàn giao",
        content: "Hoàn thiện dự án và chuẩn bị bàn giao.",
      },
    ],
  },
  "pet-management": {
    goals: [
      {
        title: "Mục tiêu 1 🚩",
        content: "Ứng dụng giúp quản lý các thông tin của thú cưng.",
      },
      {
        title: "Mục tiêu 2 🚩",
        content: "Thêm, sửa, xóa các thông tin thú cưng.",
      },
    ],
    scopes: {
      in: [
        "Phát triển giao diện quản lý",
        "Xây dựng các chức năng thêm, sửa, xóa thú cưng.",
      ],
      out: ["Hệ thống đăng nhập", "Lịch sử khám bệnh"],
    },
    team: [
      { title: "Thành viên 01 👤", content: "Tên: Vũ Gia Huy (Developer)" },
      { title: "Thành viên 02 👤", content: "Tên: Chuyên gia UX/UI (Tester)" },
    ],
    primary: [
      "Hoàn thành các chức năng thêm, sửa, xóa để đảm bảo tính năng cốt lõi hoạt động.",
      "Tối ưu hóa trải nghiệm người dùng trên giao diện quản lý.",
    ],
    timeline: [
      { title: "Khởi động", content: "Xác định yêu cầu và tính năng." },
      {
        title: "Phát triển",
        content: "Xây dựng các chức năng quản lý thú cưng.",
      },
      { title: "Tích hợp", content: "Tích hợp dữ liệu vào giao diện." },
      { title: "Kiểm thử", content: "Kiểm tra và sửa lỗi." },
      { title: "Hoàn thành", content: "Hoàn thiện sản phẩm cuối cùng." },
    ],
  },
  "news-website": {
    goals: [
      {
        title: "Mục tiêu 1 🚩",
        content:
          "Phát triển một trang web tin tức với giao diện thân thiện, dễ sử dụng.",
      },
      {
        title: "Mục tiêu 2 🚩",
        content: "Cho phép người dùng tìm kiếm tin tức theo từ khóa.",
      },
      {
        title: "Mục tiêu 3 🚩",
        content: "Hiển thị tin tức từ nhiều nguồn khác nhau.",
      },
    ],
    scopes: {
      in: [
        "Phát triển chức năng tìm kiếm tin tức.",
        "Thiết kế giao diện người dùng (UI) và trải nghiệm người dùng (UX) cơ bản.",
        "Tích hợp API để lấy tin tức từ ít nhất 3 nguồn khác nhau.",
      ],
      out: [
        "Hệ thống đăng nhập/đăng ký người dùng.",
        "Tính năng lưu tin tức yêu thích.",
        "Chức năng bình luận hoặc tương tác xã hội.",
      ],
    },
    team: [
      { title: "Thành viên 01 👤", content: "Tên: Vũ Gia Huy (Developer)" },
      {
        title: "Thành viên 02 👤",
        content: "Tên: Chuyên gia UX/UIn (Developer)",
      },
      { title: "Thành viên 03 👤", content: "Tên: Mentor FUNiX (Tester)" },
    ],
    primary: [
      "Hoàn thành chức năng tìm kiếm tin tức trước tiên để đảm bảo tính năng cốt lõi hoạt động.",
      "Tối ưu hóa tốc độ tải trang và hiển thị tin tức.",
    ],
    timeline: [
      {
        title: "Khởi động dự án",
        content: "Bắt đầu dự án, xác định các yêu cầu cơ bản.",
      },
      {
        title: "Phân tích và thiết kế",
        content: "Thiết kế giao diện, phân tích cấu trúc dữ liệu.",
      },
      {
        title: "Phát triển chức năng chính",
        content: "Xây dựng chức năng tìm kiếm và hiển thị tin tức.",
      },
      {
        title: "Tích hợp dữ liệu",
        content: "Kết nối và lấy dữ liệu từ các nguồn tin tức.",
      },
      {
        title: "Kiểm thử và tối ưu",
        content: "Kiểm tra lỗi, tối ưu hiệu suất và giao diện.",
      },
      {
        title: "Hoàn thành và bàn giao",
        content: "Hoàn thiện dự án và chuẩn bị bàn giao.",
      },
    ],
  },
};

function updateProjectCharter(projectId) {
  const project = projects[projectId];
  if (!project) {
    console.error("Project ID not found:", projectId);
    return;
  }

  // Update Goals
  const goalsContent = document.querySelector("#goals .charter-content");
  goalsContent.innerHTML = project.goals
    .map(
      (goal) => `
        <div class="row">
            <div class="icon"><i class="icon-flag-checkered"></i></div>
            <div class="content">
                <h4>${goal.title}</h4>
                <p>${goal.content}</p>
            </div>
        </div>
    `
    )
    .join("");

  // Update Scopes
  const scopesContent = document.querySelector("#scopes .charter-content");
  scopesContent.innerHTML = `
        <div class="in">
            <h2>IN</h2>
            ${project.scopes.in.map((item) => `<p>${item}</p>`).join("")}
        </div>
        <div class="out">
            <h2>OUT</h2>
            ${project.scopes.out.map((item) => `<p>${item}</p>`).join("")}
        </div>
    `;

  // Update Team
  const teamContent = document.querySelector("#team .charter-content");
  teamContent.innerHTML = project.team
    .map(
      (member) => `
        <div class="row">
            <div class="icon"><i class="icon-user-2"></i></div>
            <div class="content">
                <h4>${member.title}</h4>
                <p>${member.content}</p>
            </div>
        </div>
    `
    )
    .join("");

  // Update Primary
  const primaryContent = document.querySelector("#primary .charter-content");
  primaryContent.innerHTML = project.primary
    .map(
      (item) => `
        <div class="row">
            <div class="icon"><i class="icon-question"></i></div>
            <div class="content">
                <p>${item}</p>
            </div>
        </div>
    `
    )
    .join("");

  // Update Timeline
  const timelineContent = document.querySelector("#timeline .charter-content");
  timelineContent.innerHTML = project.timeline
    .map(
      (event, index) => `
        <div class="row">
            <div class="icon"><h2>0${index + 1}</h2></div>
            <div class="content">
                <h4>${event.title}</h4>
                <p>${event.content}</p>
            </div>
        </div>
    `
    )
    .join("");
}
