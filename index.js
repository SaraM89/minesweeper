const createTable = () => {
  let rowsInput = document.getElementById("rowsInput").value;
  let colsInput = document.getElementById("colsInput").value;
  let minesInput = document.getElementById("minesInput").value;
  console.log("hello");
  createGrid(colsInput, rowsInput, minesInput);
};

const generateMines = arr => {
  let rowsInput = document.getElementById("rowsInput").value;
  let colsInput = document.getElementById("colsInput").value;
  let minesInput = document.getElementById("minesInput").value;
  let mineX = Math.floor(Math.random() * colsInput);
  let mineY = Math.floor(Math.random() * rowsInput);
  console.log(mineX, mineY);

  /*for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = "X";
    }
  }*/
  /*arr.forEach(function(x) {
    x.forEach(function(y) {
      console.log(arr[mineX][mineY]);

      if (arr[mineX][mineY]) {
        arr[mineX][mineY] = "X";
      }
    });
  });

  return arr;
};*/

const createGrid = (colsInput, rowsInput, minesInput) => {
  let minecordsX = [];
  let minecordsY = [];
  var arr = new Array(colsInput);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rowsInput);
  }

  for (let i = 0; i < minesInput; i++) {
    minecordsX[i] = Math.floor(Math.random() * colsInput);
    minecordsY[i] = Math.floor(Math.random() * rowsInput);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for ()
    }
  return generateMines(arr);
};
