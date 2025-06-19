document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("footerYear").textContent = new Date().getFullYear();
  const logs = [
    {
      id: 1,
      action: "เพิ่มผู้ใช้ใหม่",
      detail: "admin ได้เพิ่มผู้ใช้ 'somchai'",
      by: "admin",
      date: "2025-06-18 09:30",
    },
    {
      id: 2,
      action: "สร้างประกาศ",
      detail: "admin ได้โพสต์ประกาศ 'เปิดเทอมใหม่!'",
      by: "admin",
      date: "2025-06-15 08:10",
    },
    {
      id: 3,
      action: "แก้ไขโปรไฟล์",
      detail: "admin แก้ไขโปรไฟล์ของตนเอง",
      by: "admin",
      date: "2025-06-14 15:42",
    },
  ];
  const tbody = document.querySelector("#logsTable tbody");
  tbody.innerHTML = logs
    .map(
      (log, i) => `
        <tr>
            <td>${i + 1}</td>
            <td><span class="badge bg-info">${log.action}</span></td>
            <td>${log.detail}</td>
            <td>${log.by}</td>
            <td>${log.date}</td>
        </tr>
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
