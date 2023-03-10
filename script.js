console.log("Welcom to Spotify");

//Initialize the Variable
let songIndex=0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"images/1.jpg"},
    {songName:"kesariya tera ishq hai piya", filePath:"songs/2.mp3", coverPath:"images/2.jpg"},
    {songName:"Pyssr Hota Kayi Baar Hai", filePath:"songs/3.mp3", coverPath:"images/3.jpg"},
    {songName:"Apna Bana Le Piya", filePath:"songs/4.mp3", coverPath:"images/4.jpg"},
    {songName:"Baarish Ban Jaana", filePath:"songs/5.mp3", coverPath:"images/5.jpg"},
    {songName:"Tera Ban Jaunga", filePath:"songs/6.mp3", coverPath:"images/6.jpg"},
    {songName:"Yea Ladka Hai Allah", filePath:"songs/7.mp3", coverPath:"images/7.jpg"},
    {songName:"Mile Ho Tum", filePath:"songs/8.mp3", coverPath:"images/8.jpg"},
    {songName:"Kasam Ki Kasam", filePath:"songs/9.mp3", coverPath:"images/9.jpg"},
    {songName:"Sanam Teri Kasam", filePath:"songs/10.mp3", coverPath:"images/10.jpg"},
]
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
})


//audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-palay-circle');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
    
        songIndex=parseInt(e.target.id);
     // e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src =`songs/${songIndex+1}.mp3`;
      masterSongName.innerText=songs[songIndex].songName;
      audioElement.currentTime =0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
      audioElement.currentTime =0;
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
      audioElement.currentTime =0;
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      
    
})

