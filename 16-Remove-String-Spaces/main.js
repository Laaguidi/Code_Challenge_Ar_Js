// Code wars Kata8 Solutions

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    //Mines:
    //return x.trim();
    //return x.replace(/^\s+|\s+$/gm,'');

    return x.split(" ").join("");
  }
  
  console.log(noSpace("   h e l l o"));