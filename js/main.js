/**Bài 1 : Quy đổi tiền tệ
 * 
 * 
 * K1 : Giá 1 USD hiện nay là 23.500 VNĐ
 * Input 
 * VND = 23500;
 * USD
 * 
 * K2 :
 * B1 : Khai báo biến và gán giá trị :
 * B2 : CT quy đổi USD sang VND
 * soTienDoi = USD * 23.500 ;
 * 
 * 
 * K3 : Kết quả đạt được
 *output: soTienDoi 
 */
 var VND = 23500;
 var USD = 2;
 
 var soTienDoi = USD * VND;
 console.log("Số tiền quy đổi: " + soTienDoi + " VNĐ");
 
 /**
  * BÀI 2 : Tính diện tích và CV HCN
  * 
  * K1: Nhập vào 2 chiều dài và chiều rộng của hcn
  * input :
  * long 
  * withs
  * 
  * 
  * K2
  * B1: Khai báo biến và gán giá trị
  * B2: Lập CT tính
  * DT = long * with;
  * CV = (long + with) * 2
  * 
  * 
  * K3
  * output
  * DT
  * CV
  */
 
 var long = 6;
 var withs = 7;
 
 var DT = long * withs;
 console.log("Diện tích: " + DT);
 
 var CV = (long + withs) * 2;
 console.log("Chu vi: " + CV);
 
 
 /**
  * Bài 3 : Tính tổng 2 ký sôs
  * 
  * K1 : nhập vào một số có 2 chử số : 12
  * input 
  * num = 12
  * 
  * K2
  * ks1 = num % 10
  * ks2 = num /10 
  * tong = ks1 + ks2
  * K3
  */
 
 var num = 12;
 
 var ks1 = num % 10;
 console.log(ks1);
 var ks2 = num / 10;
 console.log(Math.round(ks2));
 var tong = ks1 + Math.round(ks2);
 console.log(tong);