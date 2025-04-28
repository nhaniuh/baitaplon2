let login = document.querySelector(".login");
let modal = document.querySelector(".modal");
let log = document.querySelector(".log");
let sig = document.querySelector(".sig");
let clos = document.querySelector(".close");
let inp = document.querySelector(".name");
let pass = document.querySelector(".password");
let form = document.querySelector("form");
let loiten = document.querySelector(".loiten");
let loipass = document.querySelector(".loipass");
login.addEventListener("click", function() {
    modal.classList.add("modal2");
    document.body.style.overflow = "hidden";
})
log.addEventListener("click", function(e) {
    e.preventDefault();
    let pattern = /^([A-ZÀ-Ỵ][a-zà-ỹ]+)(\s[A-ZÀ-Ỵ][a-zà-ỹ]+)+$/
    let valid = true;
    let valid1 = true;
    if (inp.value.trim() == "" || !pattern.test(inp.value.trim())) {
        loiten.classList.add("loi");
        inp.classList.add("bored");
        valid = false;
    } else {
        loiten.classList.remove("loi");
        inp.classList.remove("bored");
        valid = true;
    }
    if (pass.value.trim() == "" || pass.value.trim().length < 7) {
        loipass.classList.add("loi");
        pass.classList.add("bored");
        valid1 = false;
    } else {
        loipass.classList.remove("loi");
        pass.classList.remove("bored");
        valid1 = true;
    }
    if (valid == true && valid1 == true) {
        inp.value = "";
        pass.value = "";
        modal.classList.remove("modal2");
        document.body.style.overflow = "scroll";
    }
})

function checkInp() {
    let pattern = /^([A-ZÀ-Ỵ][a-zà-ỹ]+)(\s[A-ZÀ-Ỵ][a-zà-ỹ]+)+$/
    inp.addEventListener("input", function(e) {
        if (!pattern.test(e.target.value.trim())) {
            loiten.classList.add("loi");
            inp.classList.add("bored");
        } else {
            loiten.classList.remove("loi");
            inp.classList.remove("bored");
        }
    })

}
checkInp();
checkPass();

function checkPass() {
    pass.addEventListener("input", function(e) {
        if (e.target.value.trim().length < 7) {
            loipass.classList.add("loi");
            pass.classList.add("bored");
            return false;
        } else {
            loipass.classList.remove("loi");
            pass.classList.remove("bored");
            return true;
        }
    })
}
clos.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.remove("modal2");
    inp.value = "";
    pass.value = "";
    document.body.style.overflow = "scroll";
})
modal.addEventListener("click", function(e) {
    if (!form.contains(e.target)) {
        inp.value = "";
        pass.value = "";
        modal.classList.remove("modal2");
        document.body.style.overflow = "scroll";
    }
})
let dangky = document.querySelector(".dangky");
let submit = document.querySelector(".submit");
let clos2 = document.querySelector(".close1");
let form2 = document.querySelector("#form2");
let inp2 = document.querySelector(".name2");
let pass2 = document.querySelector(".password2");
let email = document.querySelector(".email");
let reset = document.querySelector(".resetpassword");
let loiten2 = document.querySelector(".loiten2");
let loipass2 = document.querySelector(".loipass2");
let loiemail = document.querySelector(".loiemail");
let loireset = document.querySelector(".loireset");
sig.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.remove("modal2");
    dangky.classList.add("dangky2");
    document.body.style.overflow = "hidden";
})
let test = /^[A-Z][a-z à-ỵ]+(\s[A-Z][a-z à-ỵ]+)+$/
    // inp2.addEventListener("input",function(e){
    //     if()
    // })
submit.addEventListener("click", function(e) {
    e.preventDefault();
    let value1 = true;
    let value2 = true;
    let value3 = true;
    let value4 = true;
    let pattern = /^([A-ZÀ-Ỵ][a-zà-ỹ]+)(\s[A-ZÀ-Ỵ][a-zà-ỹ]+)+$/
    let pattern2 = /^[A-Z a-z0-9._%+-]+@gmail\.com$/
    if (inp2.value.trim() === "" || !pattern.test(inp2.value.trim())) {
        inp2.classList.add("bored");
        loiten2.classList.add("loi");
        value1 = false;
    } else {
        inp2.classList.remove("bored");
        loiten2.classList.remove("loi");
        value1 = true;
    }
    if (email.value.trim() === "" || !pattern2.test(email.value.trim())) {
        email.classList.add("bored");
        loiemail.classList.add("loi");
        value2 = false;
    } else {
        email.classList.remove("bored");
        loiemail.classList.remove("loi");
        value2 = true;
    }
    if (pass2.value.trim() === "" || pass2.value.trim().length < 7) {
        pass2.classList.add("bored");
        loipass2.classList.add("loi");
        value3 = false;
    } else {
        pass2.classList.remove("bored");
        loipass2.classList.remove("loi");
        value3 = true;
    }
    if (reset.value.trim() == "" || reset.value.trim() != pass2.value.trim()) {
        reset.classList.add("bored");
        loireset.classList.add("loi");
        value4 = false;
    } else {
        reset.classList.remove("bored");
        loireset.classList.remove("loi");
        value4 = true;
    }
    if (value1 == true && value2 == true && value3 == true && value4 == true) {
        dangky.classList.remove("dangky2");
        document.body.style.overflow = "scroll";
        form2.reset();
    }
})

function checkInp2() {
    let pattern = /^([A-ZÀ-Ỵ][a-zà-ỹ]+)(\s[A-ZÀ-Ỵ][a-zà-ỹ]+)+$/
    inp2.addEventListener("input", function(e) {
        if (!pattern.test(e.target.value.trim())) {
            inp2.classList.add("bored");
            loiten2.classList.add("loi");
        } else {
            inp2.classList.remove("bored");
            loiten2.classList.remove("loi");
        }
    })
}
checkInp2();

function checkEmail() {
    let pattern2 = /^[A-Z a-z0-9._%+-]+@gmail\.com$/
    email.addEventListener("input", function(e) {
        if (!pattern2.test(e.target.value.trim())) {
            email.classList.add("bored");
            loiemail.classList.add("loi");
        } else {
            email.classList.remove("bored");
            loiemail.classList.remove("loi");
        }
    })
}
checkEmail()

function checkPass2() {
    pass2.addEventListener("input", function(e) {
        if (e.target.value.trim().length < 7 || e.target.value.trim() === "") {
            pass2.classList.add("bored");
            loipass2.classList.add("loi");
        } else {
            pass2.classList.remove("bored");
            loipass2.classList.remove("loi");
        }
    })
}
checkPass2();

function checkreset() {
    reset.addEventListener("input", function(e) {
        if (e.target.value.trim() === "" || e.target.value.trim() != pass2.value.trim()) {
            reset.classList.add("bored");
            loireset.classList.add("loi");
        } else {
            reset.classList.remove("bored");
            loireset.classList.remove("loi");
        }
    })
}
checkreset();
clos2.addEventListener("click", function(e) {
    e.preventDefault();
    dangky.classList.remove("dangky2");
    document.body.style.overflow = "scroll";
})
dangky.addEventListener("click", function(e) {
    if (!form2.contains(e.target)) {
        dangky.classList.remove("dangky2");
        document.body.style.overflow = "scroll";
    }
})
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
right.addEventListener("click", function() {
    img1.style.transform = "translateX(-100%)";
    img2.style.transform = "translateX(0)";
    left.style.opacity = "1";
    right.style.opacity = "0";
})
left.addEventListener("click", function() {
    img1.style.transform = "translateX(0)";
    img2.style.transform = "translateX(100%)";
    left.style.opacity = "0";
    right.style.opacity = "1";
})