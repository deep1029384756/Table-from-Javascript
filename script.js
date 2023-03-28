// optimize this code
// create headings
let information = [{"ID": 01,
                    "Name": "Deep",
                    "Designation":"Software Intern", 
                    "Location": "Greater Noida",
                    "Years of Experience": "Fresher"},
                    {"ID": 02,
                    "Name": "Varun",
                    "Designation":"Software Intern", 
                    "Location": "Greater Noida",
                    "Years of Experience": "Fresher"},
                    {"ID": 03,
                    "Name": "Saksham",
                    "Designation":"Software Intern", 
                    "Location": "Greater Noida",
                    "Years of Experience": "Fresher"},
                    {"ID": 04,
                    "Name": "Prerit",
                    "Designation":"Software Intern", 
                    "Location": "Greater Noida",
                    "Years of Experience": "Fresher"},
                    {"ID": 05,
                    "Name": "Riya",
                    "Designation":"Software Intern", 
                    "Location": "Greater Noida",
                    "Years of Experience": "Fresher"}
                    ];

// table
 const table = document.createElement("table")
// getting body
 const body= document.querySelector('body');
 body.appendChild(table);
 // create one thead
 const thead = document.createElement("thead");
 table.appendChild(thead);
// creating headings
let heading = ["ID","Name","Designation","Location","Years of Experience"];
// create row1
let tr = document.createElement("tr")
 thead.appendChild(tr);
heading.forEach(headertext=>{
     let header = document.createElement('th')
    let textNode = document.createTextNode(headertext);
    header.appendChild(textNode);
    tr.appendChild(header)
})

// creating body
 let tbody = document.createElement("tbody")
 table.appendChild(tbody);

//  creating data
information.forEach(info=>{
let tr = document.createElement("tr");
tbody.appendChild(tr);
for(const key in info){
    let td = document.createElement("td")
    td.textContent = info[key];
    tr.appendChild(td);
}
 })




