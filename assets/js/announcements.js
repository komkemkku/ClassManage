document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("footerYear").textContent = new Date().getFullYear();
  const anns = [
    {
      id: 1,
      title: "เปิดเทอมใหม่!",
      content: "ขอต้อนรับทุกท่านเข้าสู่ปีการศึกษาใหม่",
      date: "2025-06-15",
      by: "admin",
    },
    {
      id: 2,
      title: "ประชุมครู",
      content: "ประชุมครูในวันที่ 21 มิ.ย. เวลา 10:00 น.",
      date: "2025-06-12",
      by: "admin",
    },
  ];
  const annList = document.getElementById("announcementsList");
  annList.innerHTML = anns
    .map(
      (a) => `
        <div class="col-md-6">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-2">
                        <i class="bi bi-megaphone fs-3 text-primary me-2"></i>
                        <div>
                            <h6 class="mb-0">${a.title}</h6>
                            <small class="text-muted">${a.date} โดย ${a.by}</small>
                        </div>
                    </div>
                    <div class="mb-2">${a.content}</div>
                    <div class="d-flex gap-2">
                        <button class="btn btn-outline-info btn-sm"><i class="bi bi-pencil"></i> แก้ไข</button>
                        <button class="btn btn-outline-danger btn-sm"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `
    )
    .join("");
  // Sidebar responsive
  const sidebar = document.getElementById("sidebarMenu");
  const sidebarOpen = document.getElementById("sidebarOpen");
  const sidebarClose = document.getElementById("sidebarClose");
  sidebarOpen &&
    sidebarOpen.addEventListener("click", function () {
      sidebar.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  sidebarClose &&
    sidebarClose.addEventListener("click", function () {
      sidebar.classList.remove("show");
      document.body.style.overflow = "";
    });
  window.addEventListener("click", function (e) {
    if (window.innerWidth < 992 && sidebar.classList.contains("show")) {
      if (!sidebar.contains(e.target) && !sidebarOpen.contains(e.target)) {
        sidebar.classList.remove("show");
        document.body.style.overflow = "";
      }
    }
  });
  document.querySelectorAll(".logout-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "/index.html";
    });
  });
});
