function generateNumber(){
    var num = "123456789098765432156789234565843742983726423826264";
    var lenght = num.length
    var ran = ""
    for(var i = 0; i < 4;i++){
        ran+= num.substr(Math.floor(Math.random() * lenght) + 1)
    }
    return parseInt(ran)
}

module.exports = {
    generateNumber
}

