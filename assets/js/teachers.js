document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("footerYear").textContent = new Date().getFullYear();
  const teachers = [
    {
      id: 1,
      avatar: "https://randomuser.me/api/portraits/men/40.jpg",
      name: "ครูสมชาย ดีมาก",
      code: "T001",
      pos: "ครูประจำชั้น",
      dept: "วิทยาศาสตร์",
      active: true,
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      name: "ครูสุดา พิถีพิถัน",
      code: "T002",
      pos: "ครูที่ปรึกษา",
      dept: "คณิตศาสตร์",
      active: false,
    },
  ];
  const tbody = document.querySelector("#teachersTable tbody");
  tbody.innerHTML = teachers
    .map(
      (t, i) => `
        <tr>
            <td>${i + 1}</td>
            <td><img class="avatar-sm" src="${t.avatar}"></td>
            <td>${t.name}</td>
            <td>${t.code}</td>
            <td>${t.pos}</td>
            <td>${t.dept}</td>
            <td>
                <span class="badge badge-status ${
                  t.active ? "badge-success" : "badge-inactive"
                }">
                    ${t.active ? "ใช้งาน" : "ปิด"}
                </span>
            </td>
            <td class="action-btns">
                <button class="btn btn-outline-info btn-sm me-1"><i class="bi bi-pencil"></i> แก้ไข</button>
                <button class="btn btn-outline-danger btn-sm"><i class="bi bi-trash"></i></button>
            </td>
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
