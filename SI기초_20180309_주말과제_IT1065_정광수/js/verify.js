
function emailVerify(email) {
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regExp.test(email) === false) {
        return false;
    } else {
        return true;
    }
}

function phoneVerify(phone) {
    var regExp = /^\d{3}-\d{3,4}-\d{4}$/;
    if (regExp.test(phone) === false) {
        return false;
    } else {
        return true;
    }
}
