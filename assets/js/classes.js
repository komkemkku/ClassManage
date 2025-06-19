document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("footerYear").textContent = new Date().getFullYear();
  const classes = [
    {
      id: 1,
      subject: "คณิตศาสตร์",
      code: "MAT101",
      teacher: "ครูสมชาย",
      year: "ม.6/1",
      room: "101",
      status: "active",
    },
    {
      id: 2,
      subject: "ภาษาไทย",
      code: "THA102",
      teacher: "ครูสุดา",
      year: "ม.6/2",
      room: "102",
      status: "inactive",
    },
  ];
  const tbody = document.querySelector("#classesTable tbody");
  tbody.innerHTML = classes
    .map(
      (c, i) => `
        <tr>
            <td>${i + 1}</td>
            <td>${c.subject}</td>
            <td>${c.code}</td>
            <td>${c.teacher}</td>
            <td>${c.year}</td>
            <td>${c.room}</td>
            <td>
                <span class="badge badge-status ${
                  c.status == "active" ? "badge-success" : "badge-inactive"
                }">
                    ${c.status == "active" ? "เปิด" : "ปิด"}
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
