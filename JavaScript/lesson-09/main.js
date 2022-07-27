let out = document.querySelector('.out');
let btn = document.querySelector('.btn');
var playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
    ];
let res = '';

function song() {

    for (i in playList) {
        res += i;
        for (key in playList[i]) {
          res += " " + playList[i][key] + '<br>';
        }
      }
    out.innerHTML=res;
}

btn.onclick=song;

//first end

let out1= document.querySelector('.out-1');
let btn1 = document.querySelector ('.btn-1');
let btn2 = document.querySelector ('.btn-2');

btn1.onclick = () => {
    out1.style.display = 'block';
};
btn2.onclick = () => {
    out1.style.display = 'none';
};

// second end

