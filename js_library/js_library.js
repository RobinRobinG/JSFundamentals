var _ = {
   map: function(arr, callback) {
     var newarr = [];
     for(var i = 0; i < arr.length; i++) {
        newarr.push(callback(arr[i]));
     }
     return newarr;
   },
   reduce: function(arr, callback) { 
     var output;
     for(var i = 0; i < arr.length; i++) {
      output = callback(output, arr[i]);
     }
     return output;
   },
   find: function(arr, callback) {
    for(var i = 0; i < arr.length; i++) {
      if(callback(arr[i])) {
        return arr[i];
      } else {
        return undefined;
      }
    }
   },
   filter: function(arr, callback) { 
     var newarr = [];
     for(var i = 0; i < arr.length; i++) {
      if(callback(arr[i])) {
        newarr.push(arr[i]);
      }
     }
     return newarr;   
   },
   reject: function(arr, callback) { 
     var newarr = [];
     for(var i = 0; i < arr.length; i++) {
      if(!callback(arr[i])) {
        newarr.push(arr[i]);
      }
     }
     return newarr;  
   }
 }