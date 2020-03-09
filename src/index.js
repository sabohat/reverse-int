module.exports = function reverse (n) {
   if(n>=0){
        myStr = n.toString();
}else {
    myStr =  Math.abs(n).toString();
}
myNum = myStr.split('').reverse().join('');
rever = Number(myNum);
 return rever;
      
}
