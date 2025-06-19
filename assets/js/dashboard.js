// dashboard.js

// ตั้งค่าปีใน footer
document.getElementById("footerYear").innerText = new Date().getFullYear();

// Mock Data (เปลี่ยนให้เชื่อมจริงภายหลัง)
const stats = {
  totalUsers: 123,
  totalTeachers: 12,
  totalStudents: 100,
  totalClasses: 8,
  absent: 23,
  leave: 11,
  late: 7,
  attendanceMonthly: {
    labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย."],
    absent: [4, 5, 3, 6, 2, 3],
    leave: [2, 1, 2, 3, 1, 2],
    late: [1, 2, 0, 3, 0, 1],
  },
};

// อัปเดตตัวเลขสรุป
document.getElementById("totalUsers").innerText = stats.totalUsers;
document.getElementById("totalTeachers").innerText = stats.totalTeachers;
document.getElementById("totalStudents").innerText = stats.totalStudents;
document.getElementById("totalClasses").innerText = stats.totalClasses;

// อัปเดตสถิติการขาด ลา มาสาย
document.getElementById("absentCount").innerText = stats.absent;
document.getElementById("leaveCount").innerText = stats.leave;
document.getElementById("lateCount").innerText = stats.late;

// Pie Chart - สถิติการขาด-ลา-มาสาย
const pieCtx = document.getElementById("attendancePieChart").getContext("2d");
const pieChart = new Chart(pieCtx, {
  type: "doughnut",
  data: {
    labels: ["ขาด", "ลา", "มาสาย"],
    datasets: [
      {
        data: [stats.absent, stats.leave, stats.late],
        backgroundColor: [
          "rgba(220, 53, 69, 0.8)", // ขาด - แดง
          "rgba(255, 193, 7, 0.8)", // ลา - เหลือง
          "rgba(23, 162, 184, 0.8)", // มาสาย - ฟ้า
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    cutout: "70%",
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  },
});

// Line Chart - ขาด ลา มาสาย รายเดือน
const lineCtx = document.getElementById("attendanceLineChart").getContext("2d");
const lineChart = new Chart(lineCtx, {
  type: "line",
  data: {
    labels: stats.attendanceMonthly.labels,
    datasets: [
      {
        label: "ขาด",
        data: stats.attendanceMonthly.absent,
        borderColor: "rgba(220,53,69,1)",
        backgroundColor: "rgba(220,53,69,0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "ลา",
        data: stats.attendanceMonthly.leave,
        borderColor: "rgba(255,193,7,1)",
        backgroundColor: "rgba(255,193,7,0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "มาสาย",
        data: stats.attendanceMonthly.late,
        borderColor: "rgba(23,162,184,1)",
        backgroundColor: "rgba(23,162,184,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "จำนวนครั้ง",
        },
      },
    },
  },
});

// Hamburger, Logout
document.getElementById("sidebarOpen").addEventListener("click", () => {
  document.getElementById("sidebarMenu").classList.add("show");
});
document.getElementById("sidebarClose").addEventListener("click", () => {
  document.getElementById("sidebarMenu").classList.remove("show");
});
document.querySelectorAll(".logout-link").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("คุณต้องการออกจากระบบใช่หรือไม่?")) {
      window.location.href = "/login.html";
    }
  });
});
