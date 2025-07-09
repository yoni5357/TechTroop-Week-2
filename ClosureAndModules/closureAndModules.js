//Ex1

const StringFormatter = function() {
    const capitalizeFirst = function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const toSkewerCase = function(str) {
        return str.split(' ').join('-');
    }

    return{
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box


//Ex2
const Bank = function(){
    let _money = 500;

    const depositCash = function(cash){
        _money += cash
    }

    const checkBalance = function(){
        console.log(_money)
    }

    return{
        deposit: depositCash,
        showBalance: checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance()


//Ex3
const SongsManager = function(){
    const songs = {}
    const prefix = "https://www.youtube.com/watch?v="

    const addSong = function(name, url){
        songs[name] = url.replace(prefix, '')
    }

    const getSong = function(name){
        console.log(prefix + songs[name])
    }

    return{
        addSong: addSong,
        getSong: getSong
    }
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ