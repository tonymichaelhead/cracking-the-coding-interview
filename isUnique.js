const isUnique = (string) => {
    const hist = {};
    
    for (let i = 0; i < string.length; i++) {
      if (hist[string[i]]) {
        hist[string[i]] += 1;
      } else {
        hist[string[i]] = 1;
      }
    }
    
    for (let char in hist) {
      if(hist[char] > 1) {
        return false;
      }
    }
    return true;
} 