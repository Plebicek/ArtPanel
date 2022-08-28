function createGrid() {
    for( row = 0; row < 70; row++) {
        for( col = 0; col < 155; col++) {
            console.log("row :" + row + " col: "+ col);
            const element = document.createElement("div");
            const node = document.querySelector(".content");
            element.addEventListener("mousedown", (e) => {
                console.log(e.keyCode);
                if(element.style.backgroundColor == "black") {
                    element.style.backgroundColor = "white";
                } else {
                    element.style.backgroundColor = "black";
                }
            });            
            node.appendChild(element);
        }
    }
};
createGrid();
