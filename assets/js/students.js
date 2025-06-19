document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("footerYear").textContent = new Date().getFullYear();
  const students = [
    {
      id: 1,
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      name: "เด็กชายภูมิใจ",
      code: "S60101",
      year: "ม.6",
      group: "1",
      phone: "0891112222",
      active: true,
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
      name: "เด็กหญิงสุดสวย",
      code: "S60102",
      year: "ม.6",
      group: "2",
      phone: "0882223333",
      active: false,
    },
  ];
  const tbody = document.querySelector("#studentsTable tbody");
  tbody.innerHTML = students
    .map(
      (s, i) => `
        <tr>
            <td>${i + 1}</td>
            <td><img class="avatar-sm" src="${s.avatar}"></td>
            <td>${s.name}</td>
            <td>${s.code}</td>
            <td>${s.year}</td>
            <td>${s.group}</td>
            <td>${s.phone}</td>
            <td>
                <span class="badge badge-status ${
                  s.active ? "badge-success" : "badge-inactive"
                }">
                    ${s.active ? "ใช้งาน" : "ปิด"}
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
