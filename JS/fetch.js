const link=fetch("https://api.github.com/users/LevishPratap")
link.then((data)=>{
    return data.json()
}).then((d)=>{
    console.log(d)
}).catch((err)=>{
 console.log('error is :err',err)
})