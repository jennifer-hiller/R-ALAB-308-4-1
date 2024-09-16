const csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Part 1
const rows = csv.split("\n");
console.log("Part 1");
for (let i = 0; i < rows.length; i++) {
  const row = rows[i].split(",");
  console.log(row[0], row[1], row[2], row[3]);
}

// Part 2
const rows1 = [];
const lines = csv.split("\n");
for (let i = 0; i < lines.length; i++) {
  const row = lines[i].split(",");
  rows1.push(row);
}
console.log("Part 2: ", rows1);

// Part 3
const rows2 = [];
for (let i = 1; i < rows.length; i++) {
  const row = {};
  row.id = rows1[i][0];
  row.name = rows1[i][1];
  row.occupation = rows1[i][2];
  row.age = rows1[i][3];
  rows2.push(row);
}
console.log("Part 3: ", rows2);

// Part 4
const rows3 = rows2.concat(); // create new array
rows3[1] = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
rows3.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
let totalAge = 0;
for (let i = 0; i < rows3.length; i++) {
  totalAge += Number(rows3[i].age);
}
const avgAge = totalAge / rows3.length;
console.log("Part 4: Average Age", avgAge);

// Part 5
console.log("Part 5: ");
const rows4 = rows3.concat();
rows4[0] = "ID,Name,Occupation,Age";
for (let i = 1; i < rows4.length; i++) {
  rows4[i] =
    rows4[i].id +
    "," +
    rows4[i].name +
    "," +
    rows4[i].occupation +
    "," +
    rows4[i].age;
}
const csv2 = rows4.join("\n");
console.log(csv2);
