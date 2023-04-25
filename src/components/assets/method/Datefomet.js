const datefomet = (date, type) => {
    var js_date = new Date(date);

     // 연도, 월, 일 추출
     var year = js_date.getFullYear();
     var month = js_date.getMonth() + 1;
     var day = js_date.getDate();

     // 월, 일의 경우 한자리 수 값이 있기 때문에 공백에 0 처리
     if(month < 10){
       month = '0' + month;
     }

     if(day < 10){
       day = '0' + day;
     }

     // 최종 포맷 (ex - '2021-10-08')
     if(type =="v"){
        return  year + '-' + month + '-' + day;
     }else{
        return  year + month + day;
     }
}

const datelinefomet = (date) => {
    const list = date.spilt('-');
    var result;
     
}

const Datefomet = {
    datefomet
}

export default Datefomet;