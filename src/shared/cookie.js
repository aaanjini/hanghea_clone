const getCookie = (name) => { //유저의 쿠키확인용
    let value = document.cookie;
    let parts = value.split(`=`);
    parts.shift();
    let result = parts[0];
    return result;
  
  };
  
  const setCookie = (name, value, exp = 5) => { //백엔드에서 받은 토큰 쿠키에 저장하기
    const date = new Date();
    date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * exp);
    document.cookie = `${name}=${value}; expires = ${date.toUTCString()}`;
  
  };
  
  const deleteCookie = (name) => { //로그아웃시 쿠키삭제
    let date = new Date("2020-01-01").toUTCString();
    document.cookie = name + "=; expires=" + date;
  };
  
  export { getCookie, setCookie, deleteCookie };