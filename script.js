function reverseStr(str){
var listofChars=str.split('');
var reverseListOfChars=listOfChars.reverse();
var reversedStr=reverseListOfChars.join('');
return reversedStr;

}
console.log(reverseStr('hello'));



function isPalindrome(str){
  var reverse = reverseStr(str);
  return str === reverse;
}


 function convertDateToStr(date){
  var dateStr={ day:'', month:'',year:'');
     if (date.day<10){
        dateStr.day='0'+ date.day;
     }else{
     dateStr.day=date.day.toString();
    }
     if (date.month<10){
         dateStr.month='0'+date.month;
     } else{
         dateStr.month=date.month.tostring();          
     }
       dateStr.year=date.year.toString();
       return dateStr;
    }

    var date={

      day:5,
      month:9,
      year:2020

     }
   


 function getAllDateFormats(date){

     var dateStr= convertDateToStr(date);

     var ddmmyyyy=dateStr.day+dateStr.month+dateStr.year;
     var mmddyyyy=dateStr.month+daeStr.day+dateStr.year;
     var yyyymmdd=dateStr.year+dateStr.month+dateStr.day;
     var ddmmyyyy=dateStr.day+dateStr.month+dateStr.year.slice(-2);
     var mmddyyyy=dateStr.month+dateStr.day+dateStr.year(-2);
     var yyyymmdd=dateStr.year.slice(-2)+dateStr.month+dateStr.day;

     return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy, yymmdd ];
     }
    var date={

      day:2,
      month:11,
      year:2020

     };
   

     function checkPalindromeForallDateFormats(date){
        var listOfPalindromes=getAllDateFormats(date);
        var isPalindrome=false;

        for(var i=0; i<listOfPalindromes.length;i++){
          if(isPalindrome(listOfPalindromes[i])){
             isPalindrome= true;
             break;
        }     

      }
         return isPalindrome;
    }

 }      

var date={

 day:2,
 month:11,
 year:2020

};

console.log(getAllDateFormats(date));




       

