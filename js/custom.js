// nav menu style
var nav = $("#navbarSupportedContent");
var btn = $(".custom_menu-btn");
btn.click
btn.click(function (e) {

    e.preventDefault();
    nav.toggleClass("lg_nav-toggle");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
});


function getCurrentYear() {
    var d = new Date();
    var currentYear = d.getFullYear()

    $("#displayDate").html(currentYear);
}

getCurrentYear();

document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("userInfo").style.display = "flex";
        document.getElementById("userImg").src = user.picture;
        document.getElementById("userName").innerText = user.name;
    }
});

function logout() {
    localStorage.removeItem("user");
    window.location.reload();
}
document.addEventListener("DOMContentLoaded", function () {
    const tLinkBoxes = document.querySelectorAll(".t-link-box");

    tLinkBoxes.forEach(box => {
        box.addEventListener("click", function () {
            // Ẩn tất cả các h3 trước khi hiển thị cái mới
            document.querySelectorAll(".detail-box h3").forEach(h3 => {
                h3.style.display = "none";
            });

            // Hiển thị h3 của phần vừa click
            const detailBox = this.querySelector(".detail-box h3");
            if (detailBox) {
                detailBox.style.display = "block";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        if (document.getElementById("userName")) {
            document.getElementById("userName").innerText = decodeURIComponent(escape(user.name));
        }
        if (document.getElementById("userAvatar")) {
            document.getElementById("userAvatar").src = user.picture;
        }
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const tryFreeBtn = document.getElementById("tryFreeBtn");

    if (tryFreeBtn) {
        tryFreeBtn.addEventListener("click", () => {
            const user = JSON.parse(localStorage.getItem("user"));

            if (user) {
                window.location.href = "camera.html"; // Nếu đã đăng nhập, chuyển đến camera.html
            } else {
                window.location.href = "login.html"; // Nếu chưa đăng nhập, chuyển đến login.html
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const comingSoonBtn = document.getElementById("comingSoonBtn");
    const githubDownloadBtn = document.getElementById("githubDownloadBtn");

    if (comingSoonBtn) {
        comingSoonBtn.addEventListener("click", () => {
            if (!user) {
                window.location.href = "login.html"; // Chuyển hướng đến login.html nếu chưa đăng nhập
            } else {
                alert("Tính năng sắp ra mắt!"); // Nếu đã đăng nhập, chỉ hiển thị thông báo
            }
        });
    }

    if (githubDownloadBtn) {
        githubDownloadBtn.addEventListener("click", () => {
            if (user) {
                window.location.href = "https://github.com/n1ne1903/Pomodoro-with-camera-detect-distracted"; // Nếu đã đăng nhập, đến GitHub
            } else {
                window.location.href = "login.html"; // Nếu chưa đăng nhập, yêu cầu đăng nhập trước
            }
        });
    }
});
