///// 1
let a = ["lorem", 123, true, "ipsum"];
console.log(a);
console.log(a.length);
/////

/////2
a = ["lorem", 123, true, "ipsum"];
console.log(a[0]);
console.log(a[a.length - 1]);
/////

/////3
let em = [];
em = ["name"];
em[em.length] = true;
em.unshift("frontend");
em[3] = "js";
em.push(45);
console.log(em);
/////

/////4
em.unshift("username");
em.unshift("web");
em.unshift("age");
console.log(em);
/////

/////5
em.shift();
em.pop();
em.pop();
console.log(em);
/////

/////6
let num = [1, 3, 5, 7, 9];
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 !== 0) {
    num[i] += 1;
  }
}
console.log(num);
/////

/////7
em[3] = 15;
em.splice(1, 1);
console.log(em);
/////
