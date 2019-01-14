module.exports = bubbleSort

function bubbleSort(a) {
  var indexes = a.length - 1;
  do {
    var swapped = false;
    for(var i = 0; i<indexes; ++i){
      if(a[i]> a[i+1]) {
        var num = a[i];
        a[i] = a[i+1];
        a[i+1] = num;
        swapped = true;
      };

    };
  }

  while(swapped);
  return a.slice();
};
