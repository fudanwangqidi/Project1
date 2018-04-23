number = 0;

function login() {

    show("logform");
    random();
}

function register() {
    show("regisform");
}

function validate_email(field, alerttxt) {
    with (field) {
        var apos = value.indexOf("@");
        var dotpos = value.lastIndexOf(".");
        if (apos < 1 || dotpos - apos < 2) {
            alert(alerttxt);
            return false
        }
        else {
            return true
        }
    }
}

function validate_password(field, field2, alerttxt) {
    with (field, field2) {
        var apos = field.value;
        var dotpos = field2.value;
        if (apos !== dotpos) {
            alert(alerttxt);
            return false
        }
        else {
            return true
        }
    }
}

function random() {
    number = parseInt(Math.random() * 9000 + 1000);
    document.getElementById("verification").innerHTML = number
}

function registurnoff(name, firstpassword, secondpassword, email) {
    with (name, firstpassword, secondpassword, email) {
        var a = name.value;
        var b = firstpassword.value;
        var c = secondpassword.value;
        var d = email.value;
        if (a == "") {
            alert("请输入用户名");
        }
        else if (b == "") {
            alert("请输入密码");
        }
        else if (c == "") {
            alert("请再次输入密码");
        }
        else if (d == "") {
            alert("请输入邮箱");
        }
        else {
            hidde("regisform");
            hidde("regisbutton");
        }

    }
}

function logturnoff(logname, logpassword, logverification) {
    with (logname, logpassword, logverification) {
        var a = logname.value;
        var b = logpassword.value;
        var c = logverification.value;
        if (a == "") {
            alert("请输入用户名");
        }
        else if (b == "") {
            alert("请输入密码");
        }
        else if (c != number) {
            alert("请输入正确的验证码")
        } else {
            hidde("logform");
            hidde("maybe");
            hidde("notlog")
            document.getElementById("person").style.display = "inline";
        }

    }
}

function hidde(parts) {
    document.getElementById(parts).style.display = "none";
}

function show(parts) {
    document.getElementById(parts).style.display = "block";
}

function out() {
    hidde("person");
    document.getElementById("notlog").style.display = "inline";
    document.getElementById("maybe").style.display = "inline";
}
