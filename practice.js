var mine = document.createAttribute("data-mine");
      mine.value = "false";
      cell.setAttributeNode(mine);
    }
  }
  let minesInput = document.getElementById("minesInput");
  for (let i = 0; i < minesInput; i++) {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    let cell = grid.rows[row].cells[col];
    if (testMode) cell.innerHTML = "X";
  }
  if (cell.getAttribute("data-mine") == "false") {
    var mineCount = 0;
    var cellRow = cell.parentNode.rowIndex;
    var cellCol = cell.cellIndex;
    //alert(cellRow + " " + cellCol);
    for (var i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, 9); i++) {
      for (
        var j = Math.max(cellCol - 1, 0);
        j <= Math.min(cellCol + 1, 9);
        j++
      ) {
        if (grid.rows[i].cells[j].getAttribute("data-mine") == "true")
          mineCount++;
      }
    }
    cell.innerHTML = mineCount;
    if (mineCount == 0) {
      //Reveal all adjacent cells as they do not have a mine
      for (
        var i = Math.max(cellRow - 1, 0);
        i <= Math.min(cellRow + 1, 9);
        i++
      ) {
        for (
          var j = Math.max(cellCol - 1, 0);
          j <= Math.min(cellCol + 1, 9);
          j++
        ) {
          //Recursive Call
          if (grid.rows[i].cells[j].innerHTML == "")
            clickCell(grid.rows[i].cells[j]);
        }
      }
    }
  }