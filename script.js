let rows = 100;
// as there are 26 Alphabets so we will take 26 columns
 let cols = 26;

 let addressColCont = document.querySelector(".address-col-cont");
 let addressRowCont = document.querySelector(".address-row-cont");
 let cellCont       = document.querySelector(".cells-cont");
 let addressBar = document.querySelector(".address-bar")


 for(let i = 0; i < rows; i++){
        let addressCol = document.createElement("div");

        addressCol.innerText = i + 1;
        addressCol.classList.add("address-col");
        //  both  do the same JOB
        //  addressCol.setAttribute("class", "address-col");
        addressColCont.appendChild(addressCol);
 }

 for(let i = 0; i < cols; i++){
    let addressRow = document.createElement("div");
    addressRow.innerText = String.fromCharCode(i + 65);
    addressRow.classList.add("address-row");
    addressRowCont.appendChild(addressRow);
}


for(let i = 0; i < rows; i++){
    let rowCont = document.createElement("div");
    rowCont.classList.add("row-cont");

    for(let j = 0; j < cols; j++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("rid", i+1);
        cell.setAttribute("cid", String.fromCharCode(j+65));
        cell.setAttribute("contenteditable", true);
        rowCont.appendChild(cell);
        addListnerToCell(cell)
    }
    cellCont.appendChild(rowCont);
}

function addListnerToCell(cell){
    cell.addEventListener("click", function(e){
        let rid = e.target.getAttribute("rid");
        let cid = e.target.getAttribute("cid");
        let address = cid + rid;
        addressBar.value = address;
    })
}







