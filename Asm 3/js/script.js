document.addEventListener("DOMContentLoaded", function () {
  // Ẩn thông tin cá nhân khi trang vừa tải
  const infoGroup = document.querySelector(".info-group");
  const emailForm = document.querySelector(".email-input-group");

  if (infoGroup && emailForm) {
    infoGroup.style.display = "none";
    emailForm.style.display = "block";
  }

  // Ẩn tất cả nội dung job-content khi trang vừa tải
  const jobContents = document.querySelectorAll(".job-content");
  jobContents.forEach((content) => {
    content.style.display = "none";
  });

  // Xử lý hiệu ứng hover cho job-item
  const jobItems = document.querySelectorAll(".job-item");

  jobItems.forEach((item) => {
    // Thêm sự kiện mouseenter (hover vào)
    item.addEventListener("mouseenter", function () {
      const footer = this.querySelector(".job-footer");
      if (footer) {
        footer.style.display = "block";
      }
    });

    // Thêm sự kiện mouseleave (hover ra)
    item.addEventListener("mouseleave", function () {
      const footer = this.querySelector(".job-footer");
      const content = this.querySelector(".job-content");

      // Chỉ ẩn footer nếu nội dung đang ẩn
      if (
        footer &&
        content &&
        window.getComputedStyle(content).display === "none"
      ) {
        footer.style.display = "none";
      }
    });
  });

  // Xử lý nút View More/Less
  const viewBtns = document.querySelectorAll(".view-btn");

  viewBtns.forEach((btn, index) => {
    // Ẩn các nút ban đầu
    btn.parentElement.style.display = "none";

    btn.addEventListener("click", function () {
      const jobContent =
        this.closest(".job-item").querySelector(".job-content");

      if (window.getComputedStyle(jobContent).display === "none") {
        // Hiển thị nội dung
        jobContent.style.display = "block";
        this.textContent = "View less";
      } else {
        // Ẩn nội dung
        jobContent.style.display = "none";
        this.textContent = "View more";
      }
    });
  });

  // Hàm kiểm tra định dạng email
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  // Xử lý submit form email
  const handleSubmit = () => {
    let emailValue = document.getElementById("email").value;
    let personalInfo = document.querySelector(".info-group");
    let emailForm = document.querySelector(".email-input-group");

    if (validateEmail(emailValue)) {
      personalInfo.style.display = "block";
      emailForm.style.display = "none";
    }
  };

  // Xử lý đóng thông tin cá nhân
  const handleClose = () => {
    let personalInfo = document.querySelector(".info-group");
    let emailForm = document.querySelector(".email-input-group");
    let emailInput = document.getElementById("email");

    personalInfo.style.display = "none";
    emailForm.style.display = "block";
    emailInput.value = "";
    emailInput.focus();
  };

  // Xử lý thay đổi input email
  const handleInputChange = () => {
    let emailValue = document.getElementById("email").value;
    let errMessage = document.querySelector(".message");

    if (validateEmail(emailValue)) {
      errMessage.textContent = "";
    } else if (emailValue.length === 0) {
      errMessage.textContent = "Vui lòng nhập email";
      errMessage.style.color = "red";
    } else {
      errMessage.textContent = "Sai định dạng email";
      errMessage.style.color = "red";
    }
  };

  // Gắn các sự kiện
  document.getElementById("submit-btn").addEventListener("click", handleSubmit);
  document.getElementById("email").addEventListener("input", handleInputChange);

  const closeBtn = document.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", handleClose);
  }
});
