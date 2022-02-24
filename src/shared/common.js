export const emailCheck = (email) => {
    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

    return _reg.test(email);
}

export const passwordCheck = (password) => {
    let _reg = /^[a-zA-Z0-9]{8,30}$/;
    
    return _reg.test(password);
}