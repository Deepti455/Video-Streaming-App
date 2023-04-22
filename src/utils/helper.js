const nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

export function generateRandomName() {
   return nameList[Math.floor( Math.random() * nameList.length )];
};

export function generaterandomMessage() {  
            //initialize a variable having alpha-numeric characters  
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  
  
            //specify the length for the new string to be generated  
    var string_length = 20;  
    var randomstring = '';  
  
            //put a loop to select a character randomly in each iteration  
    for (var i=0; i<string_length; i++) {  
        var rnum = Math.floor(Math.random() * chars.length);  
        randomstring += chars.substring(rnum,rnum+1);  
    }  
      
    return randomstring         
            
}  


export const findPrime = num => {
    let i, primes = [2, 3], n = 5
    const isPrime = n => {
        let i = 1, p = primes[i],
            limit = Math.ceil(Math.sqrt(n))
        while (p <= limit) {
            if (n % p === 0) {
                return false
            }
            i += 1
            p = primes[i]
        }
        return true
    }
    for (i = 2; i <= num; i += 1) {
        while (!isPrime(n)) {
            n += 2
        }
        primes.push(n)
        n += 2
    };
    return primes[num - 1]
}