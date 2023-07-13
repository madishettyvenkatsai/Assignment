function getobj(entries) {
  const marksmap=new Map();
  const result={};
  let idx=0;
  for(const key in entries) {
    const entry=entries[key];
    const mark=entry.marks;
    if(!marksmap.has(mark)||entry.marks>marksmap.get(mark).marks||(entry.marks===marksmap.get(mark).marks&&entry.age>marksmap.get(mark).age)){
      marksmap.set(mark, { key, age: entry.age, marks: entry.marks });
    }
  }
  for(const markEntry of marksmap.values()){
    const { key }=markEntry;
    result[idx]=entries[key];
    idx++;
  }
  return result;
}
const example1 = {
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
};
console.log(getobj(example1));
const example2 = {
  0: { age: 18, name: 'john', marks: '400' },
  1: { age: 17, name: 'julie', marks: '400' },
  2: { age: 16, name: 'Robin', marks: '200' },
  3: { age: 16, name: 'Bella', marks: '300' },
  4: { age: 16, name: 'john', marks: '250' },
  5: { age: 15, name: 'julie', marks: '250' }
};
console.log(getobj(example2));
