const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const students = xmlDOM.querySelectorAll('student');
// console.log(student);
const st1 = students[0];
const st2 = students[1];

const names = xmlDOM.querySelectorAll('name');
// console.log(names);

const name1 = names[0];
const name2 = names[1];

const lang1 = name1.getAttribute('lang');
// console.log(lang1); //en

const lang2 = name2.getAttribute('lang');
// console.log(lang2); //ru

const first1 = name1.querySelector('first').textContent;
// console.log(first1);
const first2 = name2.querySelector('first').textContent;
// console.log(first2);

const second1 = name1.querySelector('second').textContent;
// console.log(second1);

const second2 = name2.querySelector('second').textContent;
// console.log(second2);

const age1 = Number(st1.querySelector('age').textContent);
// console.log(age1);
const age2 = Number(st2.querySelector('age').textContent);
// console.log(age2);

const prof1 = st1.querySelector('prof').textContent;
// console.log(prof1);

const prof2 = st2.querySelector('prof').textContent;
// console.log(prof2);

const result = {
  list: [ { name: first1 + ' ' + second1, age: age1, prof: prof1, lang: lang1 },
    { name: first2 + ' ' + second2, age: age2, prof: prof2, lang: lang2 },]
}

console.log(result);