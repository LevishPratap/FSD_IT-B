const mypromise=new Promise(
    (  resolve,reject)=>{
        console.log("every thing is fine")
        resolve()
    }
   
);
mypromise.then(()=>{
    console.log('error')
}).catch((err()=>{console.log('something')})
mypromise.finally(()=>{
    console.log('okk')
})
