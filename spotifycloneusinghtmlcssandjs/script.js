console.log("welcome to Spotify");

let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let progress=0,changeinpbar=0;
let gif=document.getElementById('gif');
let gifText=document.getElementById('gifText');
let index=0;
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
{songName:"Dusk till dawn",filePath:"1.mp3",coverPath:"cover1.jpg"},
{songName:"2nd song",filePath:"songs/2.mp3",coverPath:"covers/cover2.jpg"},
{songName:"Song 3",filePath:"songs/3.mp3",coverPath:"covers/cover3.jpg"},
{songName:"Song 4",filePath:"songs/4.mp3",coverPath:"covers/cover4.jpg"},
{songName:"Song 5",filePath:"songs/5.mp3",coverPath:"covers/cover5.jpg"},
{songName:"Song 6",filePath:"songs/6.mp3",coverPath:"covers/cover6.jpg"},
{songName:"Song 7",filePath:"songs/7.mp3",coverPath:"covers/cover7.jpg"},
{songName:"Song 8",filePath:"songs/8.mp3",coverPath:"covers/cover8.jpg"},
{songName:"Song 9",filePath:"songs/9.mp3",coverPath:"covers/cover9.jpg"}

    ];

    songItems.forEach((element,index)=>{
        //console.log(element.getElementsByTagName("img").length);
       // console.log(element.getElementsByTagName("img")[0].alt);
        //console.log(element+ "       "+index);
        element.getElementsByTagName("img")[0].src=songs[index].coverPath;
        element.getElementsByClassName("songName")[0].innerText=songs[index].songName;
        //element.getElementsByTagName("img")[index].src=songs[index].filePath;

    })
//Listen to events
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0  ){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
   
    gif.style.opacity=1;
    }
    else{
        audioElement.pause();   
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        }
        

})
audioElement.addEventListener('timeupdate',()=>{
    progress=((audioElement.currentTime/audioElement.duration)*100);
    console.log('progress  '+progress);
    myProgressBar.value=progress;
    if(progress===100)
    {
       
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

})
//progress bar holds value of the scrolled part in percentage 
myProgressBar.addEventListener('change',()=>{
    changeinpbar=(myProgressBar.value * audioElement.duration)/100;
    audioElement.currentTime=changeinpbar;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((elem)=>{
        elem.classList.remove('fa-pause-circle');
        elem.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((f)=>{
    f.addEventListener('click',(e)=>{
console.log(e.target);
makeAllPlays();
index=parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.currentTime=0;
audioElement.src=songs[index].filePath;
console.log(`audioElement.src  ${audioElement.src}`);
audioElement.play();

masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
gif.style.opacity=1;
console.log(songs[index].songName);
gifText.innerHTML =songs[index].songName;

    })
})

document.getElementById('nextt').addEventListener('click',()=>{
    if(index>8){
        index=0;
    }
    else
    {
        index+=1;
    }
    audioElement.currentTime=0;
audioElement.src=songs[index].filePath;
makeAllPlays();
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
gifText.innerHTML =songs[index].songName;
})

document.getElementById('previous').addEventListener('click',()=>{
    if(index<=0){
        index=0;
    }
    else
    {
        index-=1;
    }
    audioElement.currentTime=0;
audioElement.src=songs[index].filePath;
makeAllPlays();
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
gifText.innerHTML =songs[index].songName;
})