exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function (el, idx, arr) {
      total += el;
    });
    return total;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
       if(item === arr[i]) {
          arr.splice(i,1);


       }
     }
     return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
       if(item === arr[i]) {
          arr.splice(i,1);
          i-=1;
       }
     }
     return arr;
  },


  append : function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
      var newarr =  arr1.concat(arr2);
        return newarr;

  },

  insert : function(arr, item, index) {
      arr.splice(2, 0, 'z');
      return arr;
  },

  count : function(arr, item) {
    var newArr = [];
    var newCount = _.filter(arr, function(el){
      return el === item
    });
    var theCount = newCount.length;
    return theCount;
  },

  // duplicates : function(arr) {
  //     _.without([1, 3, 4]);
  //
  // },

  square : function(arr) {
      var myArr = [];
    _.each(arr, function(item){
        myArr.push(item*item);
    })
  return myArr;
  },

  findAllOccurrences : function(arr, target) {
        var i, x,
        count = 0;
        var itIdx = [];
    for (i = 0, x = arr.length; i < x; i++) {
        if (arr[i] === target){
            itIdx.push(i);
        }
    }
    return itIdx;
}

};
