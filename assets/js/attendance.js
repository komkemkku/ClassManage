document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("footerYear").textContent = new Date().getFullYear();
  const records = [
    {
      id: 1,
      date: "2025-06-21",
      subject: "คณิตศาสตร์",
      student: "เด็กชายภูมิใจ",
      status: "present",
      note: "",
    },
    {
      id: 2,
      date: "2025-06-21",
      subject: "ภาษาไทย",
      student: "เด็กหญิงสุดสวย",
      status: "absent",
      note: "ลาป่วย",
    },
  ];
  const statusText = { present: "มา", absent: "ขาด", late: "สาย", leave: "ลา" };
  const statusBadge = {
    present: "badge-success",
    absent: "badge-inactive",
    late: "bg-warning",
    leave: "bg-secondary",
  };
  const tbody = document.querySelector("#attendanceTable tbody");
  tbody.innerHTML = records
    .map(
      (r, i) => `
        <tr>
            <td>${i + 1}</td>
            <td>${r.date}</td>
            <td>${r.subject}</td>
            <td>${r.student}</td>
            <td>
                <span class="badge badge-status ${
                  statusBadge[r.status] || "badge-success"
                }">
                    ${statusText[r.status] || "-"}
                </span>
            </td>
            <td>${r.note || ""}</td>
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
