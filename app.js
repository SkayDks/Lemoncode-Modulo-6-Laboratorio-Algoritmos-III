var square = (n, char) => {
  let text;
  for (let i = 0; i < n; i++) {
    text = "";
    for (let k = 0; k < n; k++) {
      text += char;
    }
    console.log(text);
  }
};

var squareWithBorder = (n, charBorder, charInner) => {
  let text;
  for (let i = 0; i < n; i++) {
    text = "";
    for (let k = 0; k < n; k++) {
      text +=
        k === 0 || k === n - 1 || i === 0 || i === n - 1
          ? charBorder
          : charInner;
    }
    console.log(text);
  }
};

var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {
  let text;
  for (let i = 0; i < n; i++) {
    text = "";
    for (let k = 0; k < n; k++) {
      text += k === i ? charDiagonal : i < k ? charUp : charDown;
    }
    console.log(text);
  }
};

var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
  let text;
  for (let i = n - 1; i >= 0; i--) {
    text = "";
    for (let k = 0; k < n; k++) {
      text += k === i ? charDiagonal : i > k ? charUp : charDown;
    }
    console.log(text);
  }
};

var halfDiamond = (n, char) => {
  let text;
  for (let i = 0 ; i < n; i++) {
    text = "";
    for (let k = 0; k <= i; k++) {
      text += char;
    }
    console.log(text);
  }
  for(let j = n-1 ; j > 0; j--){
    text = "";
    for (let l = j; l > 0; l--) {
      text += char;
    }
    console.log(text);
  }
};

var pyramid = (n, char) => {
  let text;
  for (let i = 0 ; i < n; i++) {
    text = "";
    for (let j = n-i-1; j > 0; j--) {
      text += " ";
    }
    for (let k = n-i-1; k < n+i ; k++) {
      text += char;
    }
    console.log(text);
  }
};

var diamond = (n, char) => {
  let text;
  for (let i = 0 ; i < n; i++) {
    text = "";
    for (let j = n-i-1; j > 0; j--) {
      text += " ";
    }
    for (let k = n-i-1; k < n+i ; k++) {
      text += char;
    }
    console.log(text);
  }
  for (let l = n-1 ; l > 0; l--) {
    text = "";
    for (let p = 0 ; p < n-l; p++) {
      text += " ";
    }
    for (let b = n-l; b < n+l-1 ; b++) {
      text += char;
    }
    console.log(text);
  }
};

square(5, "*");
console.log("");

squareWithBorder(5, "B", "*");
console.log("");

squareDiagonalLR(5, "\\", "A", "B");
console.log("");

squareDiagonalRL(5, "/", "A", "B");
console.log("");

halfDiamond(5, "*");
console.log("");

pyramid(5, "*");
console.log("");

diamond(5, "*");
console.log("");
