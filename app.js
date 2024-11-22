const bcrypt = require('bcrypt')
// bcrypt.genSalt(10, (err,salt)=>{
//     console.log(salt)
//     bcrypt.hash('123456',salt, (err,hash)=>{
//         console.log(hash)
//     })
// })
let answer = bcrypt.compareSync('12456','$2b$10$Eir/7GE7N8owtnKliugYyeEeyjuM.DJp8BfvHm2eWaKxQgEAt9FIa')
if(answer){
    console.log('password is correct')
}else{
    console.log('password is incorrect')
}
