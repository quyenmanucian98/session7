let telephonNumber = ["0975977498","0500000000","07999999999"];
let phone = /^[0-9]{1}9[0-9]{8}$/;
checkNumber();

function checkNumber() {
    for (let i=0;i<telephonNumber.length;i++){
        if (phone.test(telephonNumber[i])){
            alert(telephonNumber[i] + " Là số nhà mạng Viettel");
            break;
        }
        else {}
        alert("Không có số nào của nhà mạng Viettel");
    }
}