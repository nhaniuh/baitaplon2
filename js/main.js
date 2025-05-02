let a1 = document.querySelector(".anh1");
console.log(a1);
let i = 0;

function thayanh() {
    a1.style.opacity = 0; // làm mờ
    setTimeout(() => {
        if (i == 0) {
            a1.src = "../img/section1.png";
            i++;
        } else {
            a1.src = "../img/section2.jpg";
            i--;
        }
        a1.style.opacity = 1; // hiện lại
    }, 500); // sau 0.5 giây mới đổi hình
}
setInterval(thayanh, 3000);
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
    let valid = true;
    if (inp.value.trim() == "") {
        loiten.classList.add("loi");
        inp.classList.add("bored");
        valid = false;
    } else {
        loiten.classList.remove("loi");
        inp.classList.remove("bored");
        valid = true;
    }
    if (pass.value.trim() == "") {
        loipass.classList.add("loi");
        pass.classList.add("bored");
        valid = false;
    } else {
        loipass.classList.remove("loi");
        pass.classList.remove("bored");
        valid = true;
    }
    if (valid) {
        inp.value = "";
        pass.value = "";
        modal.classList.remove("modal2");
        document.body.style.overflow = "scroll";
    }
    // modal.classList.remove("modal2");
})
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
pass.addEventListener("input", function(e) {
    if (e.target.value.trim().length < 7) {
        loipass.classList.add("loi");
        pass.classList.add("bored");
    } else {
        loipass.classList.remove("loi");
        pass.classList.remove("bored");
    }
})
sig.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.remove("modal2");
    document.body.style.overflow = "scroll";
})
clos.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.remove("modal2");
    inp.value = "";
    pass.value = "";
    document.body.style.overflow = "scroll";
    loiten.classList.remove("loi");
    inp.classList.remove("bored");
    loipass.classList.remove("loi");
    pass.classList.remove("bored");
})
modal.addEventListener("click", function(e) {
    if (!form.contains(e.target)) {
        inp.value = "";
        pass.value = "";
        modal.classList.remove("modal2");
        document.body.style.overflow = "scroll";
        loiten.classList.remove("loi");
        inp.classList.remove("bored");
        loipass.classList.remove("loi");
        pass.classList.remove("bored");
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
let date = document.querySelector(".date");
let ten = document.querySelector(".ten");
let phone = document.querySelector(".phone");
let address = document.querySelector(".address");
let loiten2 = document.querySelector(".loiten2");
let loipass2 = document.querySelector(".loipass2");
let loiemail = document.querySelector(".loiemail");
let loireset = document.querySelector(".loireset");
let loidate = document.querySelector(".loidate");
let loiten3 = document.querySelector(".loiten3");
let loiphone = document.querySelector(".loiphone");
let loiaddress = document.querySelector(".loiaddress");
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
    let value5 = true;
    let value6 = true;
    let value7 = true;
    let value8 = true;
    let pattern = /^([A-ZÀ-Ỵ][A-Za-zà-ỹÀ-Ỵ]+)(\s[A-ZÀ-Ỵ][A-Za-zà-ỹÀ-Ỵ]+)+$/
    let pattern2 = /^[A-Z a-z0-9._%+-]+@gmail\.com$/
    let pattern3 = /^([A-ZÀ-Ỵ][A-Za-zà-ỹÀ-Ỵ]+)(\s[A-ZÀ-Ỵ][A-Za-zà-ỹÀ-Ỵ]+)+$/
    let pattern4 = /^0\d{9}$/
    let pattern5 = /^([A-Z][A-Za-zà-ỹÀ-Ỵ]+)(\s[A-Z][A-Za-zà-ỹÀ-Ỵ]+)+$/
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
    if (date.value.trim() === "") {
        date.classList.add("bored");
        loidate.classList.add("loi");
        value5 = false;
    } else {
        date.classList.remove("bored");
        loidate.classList.remove("loi");
        value5 = true;
    }
    if (ten.value.trim() === "" || !pattern3.test(ten.value.trim())) {
        ten.classList.add("bored");
        loiten3.classList.add("loi");
        value6 = false;
    } else {
        ten.classList.remove("bored");
        loiten3.classList.remove("loi");
        value6 = true;
    }
    if (phone.value.trim() === "" || !pattern4.test(phone.value.trim())) {
        phone.classList.add("bored");
        loiphone.classList.add("loi");
        value7 = false;
    } else {
        phone.classList.remove("bored");
        loiphone.classList.remove("loi");
        value7 = true;
    }
    if (address.value.trim() === "" || !pattern5.test(address.value.trim())) {
        address.classList.add("bored");
        loiaddress.classList.add("loi");
        value8 = false;
    } else {
        address.classList.remove("bored");
        loiaddress.classList.remove("loi");
        value8 = true;
    }
    if (value1 == true && value2 == true && value3 == true && value4 == true && value5 == true && value6 == true && value7 == true && value8 == true) {
        dangky.classList.remove("dangky2");
        document.body.style.overflow = "scroll";
        form2.reset();
    }
})

function checkInp2() {
    let pattern = /^([A-ZÀ-Ỵ][A-Za-zà-ỹÀ-Ỵ]+)(\s[A-ZÀ-Ỵ][A-Za-zà-ỹÀ-Ỵ]+)+$/
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

function checkDate() {
    date.addEventListener("input", function(e) {
        if (date.value.trim() === "") {
            date.classList.add("bored");
            loidate.classList.add("loi");
        } else {
            date.classList.remove("bored");
            loidate.classList.remove("loi");
        }
    })
}
checkDate();

function checkTen() {
    let pattern7 = /^([A-ZÀ-Ỵ][A-Za-zà-ỹÀ-Ỵ]+)(\s[A-ZÀ-Ỵ][A-Za-zà-ỹÀ-Ỵ]+)+$/
    ten.addEventListener("input", function(e) {
        if (ten.value.trim() === "" || !pattern7.test(ten.value.trim()) || ten.value.trim().length < 5) {
            ten.classList.add("bored");
            loiten3.classList.add("loi");
        } else {
            ten.classList.remove("bored");
            loiten3.classList.remove("loi");
        }
    })
}
checkTen();

function checkPhone() {
    let pattern8 = /^0\d{9}$/
    phone.addEventListener("input", function() {
        if (phone.value.trim() === "" || !pattern8.test(phone.value.trim())) {
            phone.classList.add("bored");
            loiphone.classList.add("loi");
        } else {
            phone.classList.remove("bored");
            loiphone.classList.remove("loi");
        }
    })
}
checkPhone();

function checkAddress() {
    let pattern9 = /^([A-Z][A-Za-zà-ỹÀ-Ỵ]+)(\s[A-Z][A-Za-zà-ỹÀ-Ỵ]+)+$/
    address.addEventListener("input", function() {
        if (address.value.trim() === "" || !pattern9.test(address.value.trim())) {
            address.classList.add("bored");
            loiaddress.classList.add("loi");
        } else {
            address.classList.remove("bored");
            loiaddress.classList.remove("loi");
        }
    })
}
checkAddress();
clos2.addEventListener("click", function(e) {
    e.preventDefault();
    dangky.classList.remove("dangky2");
    document.body.style.overflow = "scroll";
    inp2.classList.remove("bored");
    loiten2.classList.remove("loi");
    email.classList.remove("bored");
    loiemail.classList.remove("loi");
    pass2.classList.remove("bored");
    loipass2.classList.remove("loi");
    reset.classList.remove("bored");
    loireset.classList.remove("loi");
    date.classList.remove("bored");
    loidate.classList.remove("loi");
    ten.classList.remove("bored");
    loiten3.classList.remove("loi");
    phone.classList.remove("bored");
    loiphone.classList.remove("loi");
    address.classList.remove("bored");
    loiaddress.classList.remove("loi");
})
dangky.addEventListener("click", function(e) {
    if (!form2.contains(e.target)) {
        dangky.classList.remove("dangky2");
        document.body.style.overflow = "scroll";
        inp2.classList.remove("bored");
        loiten2.classList.remove("loi");
        email.classList.remove("bored");
        loiemail.classList.remove("loi");
        pass2.classList.remove("bored");
        loipass2.classList.remove("loi");
        reset.classList.remove("bored");
        loireset.classList.remove("loi");
        date.classList.remove("bored");
        loidate.classList.remove("loi");
        ten.classList.remove("bored");
        loiten3.classList.remove("loi");
        phone.classList.remove("bored");
        loiphone.classList.remove("loi");
        address.classList.remove("bored");
        loiaddress.classList.remove("loi");
    }
})