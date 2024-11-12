const num=[2,3,4,5,6,7,8]
const a=num.filter((n)=>(n>5));
console.log(a)
const b=num.filter((n)=>(n%2==0));
console.log(b)
const c=num.filter((n)=>(n%2==0)).map((n)=>(n*3)).reduce((n,s)=>(n+s));
console.log(c)
