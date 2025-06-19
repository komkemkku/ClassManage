document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("footerYear").textContent = new Date().getFullYear();

  // Mock users
  const users = [
    {
      id: 1,
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      username: "admin",
      name: "นายแอดมิน ระบบ",
      role: "admin",
      email: "admin@classmanage.com",
      active: true,
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
      username: "somchai",
      name: "สมชาย ใจดี",
      role: "teacher",
      email: "somchai@school.com",
      active: true,
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      username: "suda",
      name: "สุดา สวยงาม",
      role: "student",
      email: "suda@student.com",
      active: true,
    },
    {
      id: 4,
      avatar: "https://randomuser.me/api/portraits/men/88.jpg",
      username: "user88",
      name: "คนดี มีคุณธรรม",
      role: "student",
      email: "user88@student.com",
      active: false,
    },
  ];
  const roleText = { admin: "แอดมิน", teacher: "ครู", student: "นักเรียน" };
  const tbody = document.querySelector("#usersTable tbody");

  function renderUsers() {
    tbody.innerHTML = users
      .map(
        (u, i) => `
            <tr>
                <td>${i + 1}</td>
                <td><img class="avatar-sm" src="${u.avatar}"></td>
                <td>${u.username}</td>
                <td>${u.name}</td>
                <td><span class="badge bg-secondary">${
                  roleText[u.role]
                }</span></td>
                <td>${u.email || "-"}</td>
                <td>
                    <span class="badge badge-status ${
                      u.active ? "badge-success" : "badge-inactive"
                    }">
                        ${u.active ? "ใช้งาน" : "ปิดการใช้งาน"}
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
  }
  renderUsers();

  // Responsive sidebar (เหมือน dashboard.js)
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
  // Logout
  document.querySelectorAll(".logout-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "/index.html";
    });
  });
});
