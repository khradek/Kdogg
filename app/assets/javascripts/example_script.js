$(".pages.example_script").ready(function() {

  exScriptData = [
    ["Week 2 vs Westlake - Tuesday Practice Script", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ["Vs Air", " ", " ", " ", " ", " ", "Team", " ", " ", " ", " ", " "],  
    ["#", "H", "D-D", "Formation & Play Call", " ", "Defense", "#", "H", "D-D", "Formation & Play Call", " ", "Defense"],
    ["1", " ", " ", "Trips RT Slant", " ", " ", "1", "M", " ", "Pro RT Iso RT", " ", "4-3 C2"],
    ["2", " ", " ", "Trips LT Slant", " ", " ", "2", "M", " ", "Pro LT Iso LT", " ", "4-3 C2"],
    ["3", " ", " ", "Twins Pro RT Fade", " ", " ", "3", "M", " ", "Spread RT Zoom Trap LT", " ", "4-3 C2"],
    ["4", " ", " ", "Twins Pro LT Fade", " ", " ", "4", "M", " ", "Spread LT Zoom Trap RT", " ", "4-3 C2"],
    ["5", " ", " ", "Spread RT Zip Curl", " ", " ", "5", "M", " ", "Wing Over RT Toss RT", " ", "4-3 C2"],
    ["6", " ", " ", "Spread LT Zip Curl", " ", " ", "6", "M", " ", "Wing Over LT Toss LT", " ", "4-3 C2"],
    ["7", " ", " ", "Flex RT Fake LT Post", " ", " ", "7", "M", " ", "Pro RT Fake RT Dig", " ", "4-3 C2"],
    ["8", " ", " ", "Flex LT Fake RT Post", " ", " ", "8", "M", " ", "Doubles LT Mesh", " ", "4-3 C2"],
    ["9", " ", " ", "Doubles RT Mesh", " ", " ", "9", "M", " ", "Trips RT Zone LT", " ", "4-1 C2"],
    ["10", " ", " ", "Doubles LT Mesh", " ", " ", "10", "M", " ", "Spread LT Zip Curl", " ", "4-1 C2"],
    ["11", " ", " ", "Trips RT Sprint RT Flood", " ", " ", "11", "L", " ", "Trips RT Slant", " ", "4-1 C2"],
    ["12", " ", " ", "Trips LT Sprint LT Flood", " ", " ", "12", "L", " ", "Twins Pro RT Fade", " ", "4-1 C2"],
    ["13", " ", " ", "Pro RT Fake RT Dig", " ", " ", "13", "L", " ", "Flex RT Counter RT", " ", "4-1 C2"],
    ["14", " ", " ", "Pro LT Fake LT Dig", " ", " ", "14", "L", " ", "Trips LT Zone RT", " ", "4-1 C2"],
    ["15", " ", " ", " ", " ", " ", "15", "L", " ", "Doubles RT Zip Jet Sweep RT", " ", "4-3 C2"],
    ["16", " ", " ", " ", " ", " ", "16", "R", " ", "Flex LT Fake RT Post", " ", "4-3 C2"],
    ["17", " ", " ", " ", " ", " ", "17", "R", " ", "Flex LT Counter LT", " ", "4-3 C2"],
    ["18", " ", " ", " ", " ", " ", "18", "R", " ", "Pro LT Fake LT Dig", " ", "4-3 C2"],
    ["19", " ", " ", " ", " ", " ", "19", "R", " ", "Twins Pro LT Fade", " ", "4-3 C2"],
    ["20", " ", " ", " ", " ", " ", "20", "R", " ", "Doubles LT Zip Jet Sweep LT", " ", "4-3 C2"],
    ["21", " ", " ", " ", " ", " ", "21", " ", " ", " ", " ", " "],
    ["22", " ", " ", " ", " ", " ", "22", " ", " ", " ", " ", " "],
    ["23", " ", " ", " ", " ", " ", "23", " ", " ", " ", " ", " "],
    ["24", " ", " ", " ", " ", " ", "24", " ", " ", " ", " ", " "],
    ["25", " ", " ", " ", " ", " ", "25", " ", " ", " ", " ", " "],
    ["Perimeter", " ", " ", " ", " ", " ", "Team - Situation", " ", " ", " ", " ", " "],  
    ["#", "H", "D-D", "Formation & Play Call", " ", "Defense", "#", "H", "D-D", "Formation & Play Call", " ", "Defense"], 
    ["1", "L", " ", "Trips RT Slant", " ", "4-3 C2", "1", "M", "1-10", "Spread LT Zoom Trap RT", " ", "4-3 C2"],
    ["2", "L", " ", "Twins Pro RT Fade", " ", "4-3 C2", "2", "M", "1-10", "Pro RT Iso RT", " ", "4-3 C2"],
    ["3", "L", " ", "Spread RT Zip Curl", " ", "4-3 C2", "3", "M", "1-10", "Twins Pro LT Fade", " ", "4-3 C2"],
    ["4", "L", " ", "Flex RT Fake LT Post", " ", "4-3 C2", "4", "M", "1-10", "Pro LT Iso LT", " ", "4-3 C2"],
    ["5", "L", " ", "Doubles RT Mesh", " ", "4-3 C2", "5", "M", "1-10", "Spread RT Zoom Trap LT", " ", "4-3 C2"],
    ["6", "L", " ", "Trips RT Sprint RT Flood", " ", "4-3 C2", "6", "M", "3-3", "Doubles RT Mesh", " ", "GL"],
    ["7", "L", " ", "Pro RT Fake RT Dig", " ", "4-3 C2", "7", "M", "3-3", "Trips LT Slant", " ", "GL"],
    ["8", "R", " ", "Trips LT Slant", " ", "4-3 C2", "8", "M", "3-3", "Wing Over LT Toss LT", " ", "GL"],
    ["9", "R", " ", "Twins Pro LT Fade", " ", "4-3 C2", "9", "L", "4-3", "Flex LT Counter LT", " ", "GL"],
    ["10", "R", " ", "Spread LT Zip Curl", " ", "4-3 C2", "10", "R", "4-3", "Trips LT Sprint LT Flood", " ", "GL"],
    ["11", "R", " ", "Flex LT Fake RT Post", " ", "4-3 C2", "11", "M", "3-5", "Spread LT Zip Curl", " ", "4-3 C2"],
    ["12", "R", " ", "Doubles LT Mesh", " ", "4-3 C2", "12", "M", "3-5", "Doubles RT Zip Jet Sweep RT", " ", "4-3 C2"],
    ["13", "R", " ", "Trips LT Sprint LT Flood", " ", "4-3 C2", "13", "M", "3-5", "Pro RT Fake RT Dig", " ", "4-3 C2"],
    ["14", "R", " ", "Pro LT Fake LT Dig", " ", "4-3 C2", "14", "M", "3-10", "Trips RT Sprint RT Flood", " ", "4-1 C2"],
    ["15", " ", " ", " ", " ", " ", "15", "M", "3-10", "Twins Pro RT Fade", " ", "4-1 C2"],
    ["16", " ", " ", " ", " ", " ", "16", "M", "1-10", "Wing Over LT Toss LT", " ", "4-3 C2"],
    ["17", " ", " ", " ", " ", " ", "17", "M", "1-10", "Flex RT Fake LT Post", " ", "4-3 C2"],
    ["18", " ", " ", " ", " ", " ", "18", "M", "3-G", "Spread RT Zip Curl", " ", "4-3 C2"],
    ["19", " ", " ", " ", " ", " ", "19", "M", "3-G", "Doubles LT Mesh", " ", "4-3 C2"],
    ["20", " ", " ", " ", " ", " ", "20", "M", "3-G", "Trips RT Slant", " ", "4-3 C2"],
    ["21", " ", " ", " ", " ", " ", "21", " ", " ", " ", " ", " "],
    ["22", " ", " ", " ", " ", " ", "22", " ", " ", " ", " ", " "],
    ["23", " ", " ", " ", " ", " ", "23", " ", " ", " ", " ", " "],
    ["24", " ", " ", " ", " ", " ", "24", " ", " ", " ", " ", " "],
    ["25", " ", " ", " ", " ", " ", "25", " ", " ", " ", " ", " "],
    ["Date: 9/20/16", " ", " ", " ", "Additional notes below: ", " ", " ", " ", " ", " ", " ", " "],
    ["Team - Situation: Plays 1-5 = Coming Out; ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ["Plays 6-10 = Goaline;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ["Plays 11-15 = 3rd Down;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "], 
    ["Plays 16-20 = Red Zone - 18,19, & 20 3rd & G from the 7", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
  ]

  ePlays = ["", "Trips RT Slant", "Trips LT Slant", "Twins Pro RT Fade", "Twins Pro LT Fade", "Spread LT Zip Curl", "Spread RT Zip Curl", "Flex RT Fake LT Post", "Flex LT Fake RT Post", "Doubles RT Mesh", "Doubles LT Mesh", "Trips RT Sprint RT Flood", "Trips LT Sprint LT Flood", "Pro RT Fake RT Dig", "Pro LT Fake LT Dig", "Pro RT Iso RT", "Pro LT Iso LT", "Spread RT Zoom Trap LT", "Spread LT Zoom Trap RT", "Wing Over RT Toss RT", "Wing Over LT Toss LT", "Trips RT Zone LT", "Trips LT Zone RT", "Flex RT Counter RT", "Flex LT Counter LT", "Doubles RT Zip Jet Sweep RT", "Doubles LT Zip Jet Sweep LT"];

  //Validates no special characters
  var char_validator = /^[a-zA-Z\d\s-_@&#$/]*$/;

  $("#exampleScript").handsontable({
    data: exScriptData,
    minSpareCols: 0,
    minSpareRows: 0,
    renderAllRows: true,
    rowHeaders: false,
    colHeaders: false,
    contextMenu: ["undo"],
    colWidths: [30, 40, 40, 170, 160, 90, 30, 40, 40, 170, 160, 90],
    manualColumnResize: false,
    manualRowResize: false,
    fillHandle: false,
    className: "htCenter",
    allowInvalid: false,
    allowEmpty: true,
    validator: char_validator,
    mergeCells: [
      {row: 0, col: 0, rowspan: 1, colspan: 12},
      {row: 1, col: 0, rowspan: 1, colspan: 6},
      {row: 1, col: 6, rowspan: 1, colspan: 6},
      {row: 2, col: 3, rowspan: 1, colspan: 2},
      {row: 2, col: 9, rowspan: 1, colspan: 2},
      {row: 3, col: 3, rowspan: 1, colspan: 2},
      {row: 3, col: 9, rowspan: 1, colspan: 2},
      {row: 4, col: 3, rowspan: 1, colspan: 2},
      {row: 4, col: 9, rowspan: 1, colspan: 2},  
      {row: 5, col: 3, rowspan: 1, colspan: 2},
      {row: 5, col: 9, rowspan: 1, colspan: 2}, 
      {row: 6, col: 3, rowspan: 1, colspan: 2},
      {row: 6, col: 9, rowspan: 1, colspan: 2},
      {row: 7, col: 3, rowspan: 1, colspan: 2},
      {row: 7, col: 9, rowspan: 1, colspan: 2},  
      {row: 8, col: 3, rowspan: 1, colspan: 2},
      {row: 8, col: 9, rowspan: 1, colspan: 2},
      {row: 9, col: 3, rowspan: 1, colspan: 2},
      {row: 9, col: 9, rowspan: 1, colspan: 2},
      {row: 10, col: 3, rowspan: 1, colspan: 2},
      {row: 10, col: 9, rowspan: 1, colspan: 2},  
      {row: 11, col: 3, rowspan: 1, colspan: 2},
      {row: 11, col: 9, rowspan: 1, colspan: 2},
      {row: 12, col: 3, rowspan: 1, colspan: 2},
      {row: 12, col: 9, rowspan: 1, colspan: 2},
      {row: 13, col: 3, rowspan: 1, colspan: 2},
      {row: 13, col: 9, rowspan: 1, colspan: 2},  
      {row: 14, col: 3, rowspan: 1, colspan: 2},
      {row: 14, col: 9, rowspan: 1, colspan: 2}, 
      {row: 15, col: 3, rowspan: 1, colspan: 2},
      {row: 15, col: 9, rowspan: 1, colspan: 2},
      {row: 16, col: 3, rowspan: 1, colspan: 2},
      {row: 16, col: 9, rowspan: 1, colspan: 2},  
      {row: 17, col: 3, rowspan: 1, colspan: 2},
      {row: 17, col: 9, rowspan: 1, colspan: 2}, 
      {row: 18, col: 3, rowspan: 1, colspan: 2},
      {row: 18, col: 9, rowspan: 1, colspan: 2},
      {row: 19, col: 3, rowspan: 1, colspan: 2},
      {row: 19, col: 9, rowspan: 1, colspan: 2},  
      {row: 20, col: 3, rowspan: 1, colspan: 2},
      {row: 20, col: 9, rowspan: 1, colspan: 2},
      {row: 21, col: 3, rowspan: 1, colspan: 2},
      {row: 21, col: 9, rowspan: 1, colspan: 2},
      {row: 22, col: 3, rowspan: 1, colspan: 2},
      {row: 22, col: 9, rowspan: 1, colspan: 2},  
      {row: 23, col: 3, rowspan: 1, colspan: 2},
      {row: 23, col: 9, rowspan: 1, colspan: 2},
      {row: 24, col: 3, rowspan: 1, colspan: 2},
      {row: 24, col: 9, rowspan: 1, colspan: 2},
      {row: 25, col: 3, rowspan: 1, colspan: 2},
      {row: 25, col: 9, rowspan: 1, colspan: 2},  
      {row: 26, col: 3, rowspan: 1, colspan: 2},
      {row: 26, col: 9, rowspan: 1, colspan: 2},  
      {row: 27, col: 3, rowspan: 1, colspan: 2},
      {row: 27, col: 9, rowspan: 1, colspan: 2},  
      {row: 28, col: 0, rowspan: 1, colspan: 6},
      {row: 28, col: 6, rowspan: 1, colspan: 6},
      {row: 29, col: 3, rowspan: 1, colspan: 2},
      {row: 29, col: 9, rowspan: 1, colspan: 2},
      {row: 30, col: 3, rowspan: 1, colspan: 2},
      {row: 30, col: 9, rowspan: 1, colspan: 2},
      {row: 31, col: 3, rowspan: 1, colspan: 2},
      {row: 31, col: 9, rowspan: 1, colspan: 2},  
      {row: 32, col: 3, rowspan: 1, colspan: 2},
      {row: 32, col: 9, rowspan: 1, colspan: 2}, 
      {row: 33, col: 3, rowspan: 1, colspan: 2},
      {row: 33, col: 9, rowspan: 1, colspan: 2},
      {row: 34, col: 3, rowspan: 1, colspan: 2},
      {row: 34, col: 9, rowspan: 1, colspan: 2},  
      {row: 35, col: 3, rowspan: 1, colspan: 2},
      {row: 35, col: 9, rowspan: 1, colspan: 2},
      {row: 36, col: 3, rowspan: 1, colspan: 2},
      {row: 36, col: 9, rowspan: 1, colspan: 2},
      {row: 37, col: 3, rowspan: 1, colspan: 2},
      {row: 37, col: 9, rowspan: 1, colspan: 2},  
      {row: 38, col: 3, rowspan: 1, colspan: 2},
      {row: 38, col: 9, rowspan: 1, colspan: 2},
      {row: 39, col: 3, rowspan: 1, colspan: 2},
      {row: 39, col: 9, rowspan: 1, colspan: 2},
      {row: 40, col: 3, rowspan: 1, colspan: 2},
      {row: 40, col: 9, rowspan: 1, colspan: 2},  
      {row: 41, col: 3, rowspan: 1, colspan: 2},
      {row: 41, col: 9, rowspan: 1, colspan: 2}, 
      {row: 42, col: 3, rowspan: 1, colspan: 2},
      {row: 42, col: 9, rowspan: 1, colspan: 2},
      {row: 43, col: 3, rowspan: 1, colspan: 2},
      {row: 43, col: 9, rowspan: 1, colspan: 2},  
      {row: 44, col: 3, rowspan: 1, colspan: 2},
      {row: 44, col: 9, rowspan: 1, colspan: 2}, 
      {row: 45, col: 3, rowspan: 1, colspan: 2},
      {row: 45, col: 9, rowspan: 1, colspan: 2},
      {row: 46, col: 3, rowspan: 1, colspan: 2},
      {row: 46, col: 9, rowspan: 1, colspan: 2},  
      {row: 47, col: 3, rowspan: 1, colspan: 2},
      {row: 47, col: 9, rowspan: 1, colspan: 2},
      {row: 48, col: 3, rowspan: 1, colspan: 2},
      {row: 48, col: 9, rowspan: 1, colspan: 2},
      {row: 49, col: 3, rowspan: 1, colspan: 2},
      {row: 49, col: 9, rowspan: 1, colspan: 2},  
      {row: 50, col: 3, rowspan: 1, colspan: 2},
      {row: 50, col: 9, rowspan: 1, colspan: 2},
      {row: 51, col: 3, rowspan: 1, colspan: 2},
      {row: 51, col: 9, rowspan: 1, colspan: 2},
      {row: 52, col: 3, rowspan: 1, colspan: 2},
      {row: 52, col: 9, rowspan: 1, colspan: 2},  
      {row: 53, col: 3, rowspan: 1, colspan: 2},
      {row: 53, col: 9, rowspan: 1, colspan: 2},  
      {row: 54, col: 3, rowspan: 1, colspan: 2},
      {row: 54, col: 9, rowspan: 1, colspan: 2},
      {row: 55, col: 0, rowspan: 1, colspan: 4},
      {row: 55, col: 4, rowspan: 1, colspan: 8},      
      {row: 56, col: 0, rowspan: 1, colspan: 12},
      {row: 57, col: 0, rowspan: 1, colspan: 12},
      {row: 58, col: 0, rowspan: 1, colspan: 12},   
      {row: 59, col: 0, rowspan: 1, colspan: 12}, 
      {row: 60, col: 0, rowspan: 1, colspan: 12},             
    ], 
    cell: [
      {row: 0, col: 0, className: "ulshade bold fontlarge tallrow htMiddle htCenter"},
      {row: 1, col: 0, className: "shade bold htCenter"},
      {row: 1, col: 6, className: "shade bold htCenter"},
      {row: 2, col: 0, className: "bold htCenter"},
      {row: 2, col: 1, className: "bold htCenter"},
      {row: 2, col: 2, className: "bold htCenter"},
      {row: 2, col: 3, className: "bold htCenter"},
      {row: 2, col: 4, className: "bold htCenter"},
      {row: 2, col: 5, className: "bold htCenter"},
      {row: 2, col: 6, className: "bold htCenter"},
      {row: 2, col: 7, className: "bold htCenter"},
      {row: 2, col: 8, className: "bold htCenter"},
      {row: 2, col: 9, className: "bold htCenter"},
      {row: 2, col: 10, className: "bold htCenter"},
      {row: 2, col: 11, className: "bold htCenter"},  
      {row: 3, col: 0, className: "bold htCenter"},
      {row: 3, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 3, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 3, col: 6, className: "bold htCenter"},
      {row: 3, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 3, col: 9, className: "htCenter", type: "dropdown", source: ePlays},        
      {row: 4, col: 0, className: "bold htCenter"},
      {row: 4, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 4, col: 3, className: "htCenter", type: "dropdown", source: ePlays},        
      {row: 4, col: 6, className: "bold htCenter"},
      {row: 4, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 4, col: 9, className: "htCenter", type: "dropdown", source: ePlays},        
      {row: 5, col: 0, className: "bold htCenter"},
      {row: 5, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 5, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 5, col: 6, className: "bold htCenter"},
      {row: 5, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 5, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 6, col: 0, className: "bold htCenter"},
      {row: 6, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 6, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 6, col: 6, className: "bold htCenter"},
      {row: 6, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 6, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 7, col: 0, className: "bold htCenter"},
      {row: 7, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 7, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 7, col: 6, className: "bold htCenter"},
      {row: 7, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 7, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 8, col: 0, className: "bold htCenter"},
      {row: 8, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 8, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 8, col: 6, className: "bold htCenter"},
      {row: 8, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 8, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 9, col: 0, className: "bold htCenter"},
      {row: 9, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 9, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 9, col: 6, className: "bold htCenter"},
      {row: 9, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 9, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 10, col: 0, className: "bold htCenter"},
      {row: 10, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 10, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 10, col: 6, className: "bold htCenter"},
      {row: 10, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 10, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 11, col: 0, className: "bold htCenter"},
      {row: 11, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 11, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 11, col: 6, className: "bold htCenter"},
      {row: 11, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 11, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 12, col: 0, className: "bold htCenter"},
      {row: 12, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 12, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 12, col: 6, className: "bold htCenter"},
      {row: 12, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 12, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 13, col: 0, className: "bold htCenter"},
      {row: 13, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 13, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 13, col: 6, className: "bold htCenter"}, 
      {row: 13, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 13, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 14, col: 0, className: "bold htCenter"},
      {row: 14, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 14, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 14, col: 6, className: "bold htCenter"},
      {row: 14, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 14, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 15, col: 0, className: "bold htCenter"},
      {row: 15, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 15, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 15, col: 6, className: "bold htCenter"},
      {row: 15, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 15, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 16, col: 0, className: "bold htCenter"},
      {row: 16, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 16, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 16, col: 6, className: "bold htCenter"},
      {row: 16, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 16, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 17, col: 0, className: "bold htCenter"},
      {row: 17, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 17, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 17, col: 6, className: "bold htCenter"},
      {row: 17, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 17, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 18, col: 0, className: "bold htCenter"},
      {row: 18, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 18, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 18, col: 6, className: "bold htCenter"},
      {row: 18, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 18, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 19, col: 0, className: "bold htCenter"},
      {row: 19, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 19, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 19, col: 6, className: "bold htCenter"},
      {row: 19, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 19, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 20, col: 0, className: "bold htCenter"},
      {row: 20, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 20, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 20, col: 6, className: "bold htCenter"},
      {row: 20, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 20, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 21, col: 0, className: "bold htCenter"},
      {row: 21, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 21, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 21, col: 6, className: "bold htCenter"},
      {row: 21, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 21, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 22, col: 0, className: "bold htCenter"},
      {row: 22, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 22, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 22, col: 6, className: "bold htCenter"},
      {row: 22, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 22, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 23, col: 0, className: "bold htCenter"},
      {row: 23, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 23, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 23, col: 6, className: "bold htCenter"},
      {row: 23, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 23, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 24, col: 0, className: "bold htCenter"},
      {row: 24, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 24, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 24, col: 6, className: "bold htCenter"}, 
      {row: 24, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 24, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 25, col: 0, className: "bold htCenter"},
      {row: 25, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 25, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 25, col: 6, className: "bold htCenter"},
      {row: 25, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 25, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 26, col: 0, className: "bold htCenter"},
      {row: 26, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 26, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 26, col: 6, className: "bold htCenter"},
      {row: 26, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 26, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 27, col: 0, className: "bold htCenter"},
      {row: 27, col: 1, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 27, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 27, col: 6, className: "bold htCenter"},
      {row: 27, col: 7, className: "htCenter", type: "dropdown", source: ["","L", "M", "R"]},
      {row: 27, col: 9, className: "htCenter", type: "dropdown", source: ePlays},      
      {row: 28, col: 0, className: "shade bold htCenter"},
      {row: 28, col: 6, className: "shade bold htCenter"},
      {row: 29, col: 0, className: "bold htCenter"},
      {row: 29, col: 1, className: "bold htCenter"},
      {row: 29, col: 2, className: "bold htCenter"},
      {row: 29, col: 3, className: "bold htCenter"},
      {row: 29, col: 4, className: "bold htCenter"},
      {row: 29, col: 5, className: "bold htCenter"},
      {row: 29, col: 6, className: "bold htCenter"},
      {row: 29, col: 7, className: "bold htCenter"},
      {row: 29, col: 8, className: "bold htCenter"},
      {row: 29, col: 9, className: "bold htCenter"},
      {row: 29, col: 10, className: "bold htCenter"},
      {row: 29, col: 11, className: "bold htCenter"},
      {row: 30, col: 0, className: "bold htCenter"},
      {row: 30, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 30, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 30, col: 6, className: "bold htCenter"},
      {row: 30, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 30, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 31, col: 0, className: "bold htCenter"},
      {row: 31, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 31, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 31, col: 6, className: "bold htCenter"},
      {row: 31, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 31, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 32, col: 0, className: "bold htCenter"},
      {row: 32, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 32, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 32, col: 6, className: "bold htCenter"},
      {row: 32, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 32, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 33, col: 0, className: "bold htCenter"},
      {row: 33, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 33, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 33, col: 6, className: "bold htCenter"},
      {row: 33, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 33, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 34, col: 0, className: "bold htCenter"},
      {row: 34, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 34, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 34, col: 6, className: "bold htCenter"},
      {row: 34, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 34, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 35, col: 0, className: "bold htCenter"},
      {row: 35, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 35, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 35, col: 6, className: "bold htCenter"},
      {row: 35, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 35, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 36, col: 0, className: "bold htCenter"},
      {row: 36, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 36, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 36, col: 6, className: "bold htCenter"},
      {row: 36, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 36, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 37, col: 0, className: "bold htCenter"},
      {row: 37, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 37, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 37, col: 6, className: "bold htCenter"},
      {row: 37, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 37, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 38, col: 0, className: "bold htCenter"},
      {row: 38, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 38, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 38, col: 6, className: "bold htCenter"},
      {row: 38, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 38, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 39, col: 0, className: "bold htCenter"},
      {row: 39, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 39, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 39, col: 6, className: "bold htCenter"},
      {row: 39, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 39, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 40, col: 0, className: "bold htCenter"},
      {row: 40, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 40, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 40, col: 6, className: "bold htCenter"}, 
      {row: 40, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 40, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 41, col: 0, className: "bold htCenter"},
      {row: 41, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 41, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 41, col: 6, className: "bold htCenter"},
      {row: 41, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 41, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 42, col: 0, className: "bold htCenter"},
      {row: 42, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 42, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 42, col: 6, className: "bold htCenter"},
      {row: 42, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 42, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 43, col: 0, className: "bold htCenter"},
      {row: 43, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 43, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 43, col: 6, className: "bold htCenter"},
      {row: 43, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 43, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 44, col: 0, className: "bold htCenter"},
      {row: 44, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 44, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 44, col: 6, className: "bold htCenter"},
      {row: 44, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 44, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 45, col: 0, className: "bold htCenter"},
      {row: 45, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 45, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 45, col: 6, className: "bold htCenter"},
      {row: 45, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 45, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 46, col: 0, className: "bold htCenter"},
      {row: 46, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 46, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 46, col: 6, className: "bold htCenter"},
      {row: 46, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 46, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 47, col: 0, className: "bold htCenter"},
      {row: 47, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 47, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 47, col: 6, className: "bold htCenter"},
      {row: 47, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 47, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 48, col: 0, className: "bold htCenter"},
      {row: 48, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 48, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 48, col: 6, className: "bold htCenter"},
      {row: 48, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 48, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 49, col: 0, className: "bold htCenter"},
      {row: 49, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 49, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 49, col: 6, className: "bold htCenter"},
      {row: 49, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 49, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 50, col: 0, className: "bold htCenter"},
      {row: 50, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 50, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 50, col: 6, className: "bold htCenter"},
      {row: 50, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 50, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 51, col: 0, className: "bold htCenter"},
      {row: 51, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 51, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 51, col: 6, className: "bold htCenter"}, 
      {row: 51, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 51, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 52, col: 0, className: "bold htCenter"},
      {row: 52, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 52, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 52, col: 6, className: "bold htCenter"},
      {row: 52, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 52, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 53, col: 0, className: "bold htCenter"},
      {row: 53, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 53, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 53, col: 6, className: "bold htCenter"},
      {row: 53, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 53, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 54, col: 0, className: "bold htCenter"},
      {row: 54, col: 1, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 54, col: 3, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 54, col: 6, className: "bold htCenter"},
      {row: 54, col: 7, className: "htCenter", type: "dropdown", source: ["", "L", "M", "R"]},
      {row: 54, col: 9, className: "htCenter", type: "dropdown", source: ePlays},
      {row: 55, col: 0, className: "shade bold htLeft"},
      {row: 55, col: 4, className: "shade bold htLeft"},
      {row: 56, col: 0, className: "htLeft"},
      {row: 57, col: 0, className: "htLeft"},
      {row: 58, col: 0, className: "htLeft"},
      {row: 59, col: 0, className: "htLeft"},      
    ]    
  });

});