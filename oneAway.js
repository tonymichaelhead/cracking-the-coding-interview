
const oneAway = (str1, str2) => {
    let editCount = 0;
    
    if (str1.length === str2.length) {
      for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
          editCount++;
        }
      }
      return editCount <= 1;
    } else if (str2.length === str1.length + 1) {
  
       for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
          editCount++;
          if (str1[i] === str2[i+1]) {
            str2 = str2.split('');
            str2.splice(i, 1);
            str2 = str2.join('');
          }
        }
      }
      return editCount <= 1;
    } else if (str2.length === str1.length - 1) {
  
       for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
          editCount++;
          if (str1[i+1] === str2[i]) {
            str1 = str1.split('');
            str1.splice(i, 1);
            str1 = str1.join('');
          }
        }
      }
      return editCount <= 1;
    } else {
      return false;
    }     
  }