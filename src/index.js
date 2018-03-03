module.exports = function longestConsecutiveLength(array) {

function cmp(a,b){
   return a-b;
 }

  if(array.length == 0 ) return 0;
  if(array.length == 1 ) return 1;

  var ans = 0;
  var count = 1;

  array.sort(cmp);

  for(i=1;i<array.length;i++){

    if(array[i]-array[i-1]==0){
      continue;
    }

    if(array[i]-array[i-1]==1){
      count++;
    }

    if(array[i]-array[i-1]>1){
      ans = (count>ans)? count : ans ;
      count = 1;
    }
    
  }

  return ans;
}
