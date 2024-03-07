var btn1 = document.getElementById("Box1");
var btn2= document.getElementById("Box2");
var btn3 = document.getElementById("Box3");
var btn4 = document.getElementById("Box4");
var btn5 = document.getElementById("Box5");
var btn6 = document.getElementById("Box6");
var btn7 = document.getElementById("Box7");
var btn8 = document.getElementById("Box8");
var btn9 = document.getElementById("Box9");
var btn10 = document.getElementById("Box10");
var btn11 = document.getElementById("Box11");
var btn12 = document.getElementById("Box12");
var btn13 = document.getElementById("Box13");
var btn14 = document.getElementById("Box14");
var btn15 = document.getElementById("Box15");
var btn16 = document.getElementById("Box16");
var btn17 = document.getElementById("Box17");
var btn18 = document.getElementById("Box18");

var btnsleep = document.getElementById("Sleep-btn");
var btnrandom = document.getElementById("Random-btn");
var btnfocus = document.getElementById("Focus-btn");
var btnrelax = document.getElementById("Relax-btn");
var btnstop = document.getElementById("Stop-btn");
var Sleepmommy = document.getElementById("Sleep-mommy-btn");
var loading = document.getElementById("buttonload");
var audio1 = new Audio('Y2meta.app - SILENCE _ 4 hours gentle wind in the mountains _ sleeping, calming, resting (128 kbps).mp3');
var audio2 = new Audio('Y2meta.app - Overcome Stress to Sleep Instantly with Heavy Rain & Paramount Thunder Sounds on a Tin Roof at Night (128 kbps).mp3');
var audio3 = new Audio('Y2meta.app - SK61 1 Hour Keyboard Typing Sounds ASMR (No talking, No music, No mid-roll ads) (128 kbps).mp3');
var audio4 = new Audio('Y2meta.app - White Noise Shower Sounds for Relaxation _ Black Screen Shower Ambience (128 kbps).mp3');
var audio5 = new Audio('Y2meta.app - The Most Relaxing Waves Ever - Ocean Sounds to Sleep, Study and Chill (128 kbps).mp3');
var audio6 = new Audio('Y2meta.app - Forest Sounds _ Woodland Ambience, Bird Song (128 kbps).mp3');
var audio7 = new Audio('Y2meta.app - City Sounds - 10 HOURS _ for Relaxing Sleep, Meditation, Yoga or Study - City Ambience (128 kbps).mp3');
var audio8 = new Audio('Y2meta.app - asmr Sleeping with your girlfriend [2 hours] [no talking] [soft breathing] (128 kbps).mp3');
var audio9 = new Audio('Y2meta.app - Footsteps - SOUND EFFECTS - Steps Schritte SOUND Walk SFX (128 kbps).mp3');
var audio10 = new Audio('fireplace-burning-35626.mp3');
var audio11 = new Audio('moonlight-sonata-sonate-no-14-1st-movement-ludwig-van-bethoven-12490.mp3');
var audio12 = new Audio('Clock Ticking Noise for STUDYING  RELAXING  MEDITATION.mp3');
var audio13 = new Audio('birds-in-forest-on-sunny-day-14444.mp3');
var audio14 = new Audio('evening-birds-singing-in-spring-background-sounds-of-nature-146388.mp3');
var audio15 = new Audio('night-forest-soundscape-158701.mp3');
var audio16 = new Audio('office-ambience-6322.mp3');
var audio17 = new Audio('Page turn sound effect.mp3');
var audio18 = new Audio('PAINTBRUSH STROKES SOUND EFFECT - FREE.mp3');

var audio19 = new Audio('Y2meta.app - [ASMR Girlfriend RP] Fall Asleep With me! [soft breathing] [sleep-aid] [1 hour] (128 kbps).mp3')
var screenmonitordisplay = document.getElementById("Screen-monitor");
var blurbox = document.getElementById("Screen-monitor-box1");

var audios = [
    audio1, audio2, audio3, audio4, audio5,
    audio6, audio7, audio8, audio9, audio10,
    audio11, audio12, audio13, audio14, audio15,
    audio16, audio17, audio18,audio19
];
var buttonall = [
    document.getElementById('btn1'),
    document.getElementById('btn2'),
    document.getElementById('btn3'),
    document.getElementById('btn4'),
    document.getElementById('btn5'),
    document.getElementById('btn6'),
    document.getElementById('btn7'),
    document.getElementById('btn8'),
    document.getElementById('btn9'),
    document.getElementById('btn10'),
    document.getElementById('btn11'),
    document.getElementById('btn12'),
    document.getElementById('btn13'),
    document.getElementById('btn14'),
    document.getElementById('btn15'),
    document.getElementById('btn16'),
    document.getElementById('btn17'),
    document.getElementById('btn18')
];



audio1.loop = true;
audio2.loop = true;
audio3.loop = true;
audio4.loop = true;
audio5.loop = true;
audio6.loop = true;
audio7.loop = true;
audio8.loop = true;
audio9.loop = true;
audio10.loop = true;
audio11.loop = true;
audio12.loop = true;
audio13.loop = true;
audio14.loop = true;
audio15.loop = true;
audio16.loop = true;
audio17.loop = true;
audio18.loop = true;
audio16.volume = 0.05;
audio7.volume = 0.3;
audio13.volume = 0.5;
audio4.volume = 0.3;

var audiocontrol = document.getElementById("Volume");
var audiocontrol2 = document.getElementById("Volume2");
var audiocontrol3 = document.getElementById("Volume3");
var audiocontrol4 = document.getElementById("Volume4");
var audiocontrol5 = document.getElementById("Volume5");
var audiocontrol6 = document.getElementById("Volume6");

var audiocontrol7 = document.getElementById("Volume7");
var audiocontrol8 = document.getElementById("Volume8");
var audiocontrol9 = document.getElementById("Volume9");
var audiocontrol10 = document.getElementById("Volume10");
var audiocontrol11 = document.getElementById("Volume11");
var audiocontrol12 = document.getElementById("Volume12");

var audiocontrol13 = document.getElementById("Volume13");
var audiocontrol14 = document.getElementById("Volume14");
var audiocontrol15 = document.getElementById("Volume15");
var audiocontrol16 = document.getElementById("Volume16");
var audiocontrol17 = document.getElementById("Volume17");
var audiocontrol18 = document.getElementById("Volume18");
var screenmonitorbutton = document.getElementById("Screen-monitor");
var Buttondonate = document.getElementById("Donation");
var Buttondonation = "https://steamcommunity.com/id/145126314261253/";
var Coffe = "https://www.buymeacoffee.com/nack";

var boxreference = document.getElementById("boxReference");
var reference = document.getElementById("allReference");
var sun = document.getElementById("sun");
    var moon = document.getElementById("moon");

document.addEventListener('DOMContentLoaded', function() {




    reference.onclick = function() {
        if (blurbox.style.display === "block") {
            blurbox.style.display = "none"; // If already visible, hide it
            boxreference.style.display = "none";
            // Remove existing references
            boxreference.innerHTML = "";
        } else {
            blurbox.style.display = "block"; // If hidden, show it
            boxreference.style.display = "block";
            // Create and append HTML elements for each reference
            ref.forEach(function(item) {
                var p = document.createElement("p"); // Create a <p> element
                p.innerHTML = item; // Set its HTML content
                boxreference.appendChild(p); // Append it to boxreference
            });
        }
    };

    Buttondonate.onclick = function() {
    window.open(Buttondonation, "_blank"); // Open link in a new tab
    };
    screenmonitorbutton.onclick = function() {
        if (blurbox.style.display === "block") {
            blurbox.style.display = "none"; // If already visible, hide it
        } else {
            blurbox.style.display = "block"; // If hidden, show it
        }
    };
    
    btn1.onclick = function Playsong() {
        if (audio1.paused) {
            audiocontrol.style.display = "block";
            loading.style.display = "block";
            screenmonitorbutton.style.display = "block";
            console.log("It's work");
            audio1.play();
        } else {
            audio1.pause();
            audiocontrol.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   
        setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
    }
    btn2.onclick = function Playsong() {
        if (audio2.paused) {
            audio2.play();
            audio2.volume = 0.1;
            audiocontrol2.style.display = "block";
            loading.style.display = "block";
            screenmonitorbutton.style.display = "block";
            console.log("It's work");
            youtubeVideo.src="videoplayback (2).mp4"
        } else {
            audio2.pause();
            audiocontrol2.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   
        setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
    }
    btn3.onclick = function Playsong() {
        if (audio3.paused) {
            audio3.play();
            audiocontrol3.style.display = "block";
            screenmonitorbutton.style.display = "block";
        } else {
            audio3.pause();
            audiocontrol3.style.display = "none";
            screenmonitorbutton.style.display = "none";
        } setTimeout(function() {
            loading.style.display = "none";
            
        }, 4000)  
    }

    btn4.onclick = function Playsong() {
        if (audio4.paused) {
            audio4.play();
            loading.style.display = "block";
            audiocontrol4.style.display = "block";
            screenmonitorbutton.style.display = "block";
            console.log("It's work");
            youtubeVideo.src="videoplayback (2).mp4"
        } else {
            audio4.pause();
            audiocontrol4.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   setTimeout(function() {
            loading.style.display = "none";
            
        }, 4000)
    }
    btn5.onclick = function Playsong() {
        if (audio5.paused) {
            audio5.play();
            loading.style.display = "block";
            audiocontrol5.style.display = "block";
            screenmonitorbutton.style.display = "block";
            console.log("It's work");
            youtubeVideo.src="videoplayback (1).mp4"
        } else {
            audio5.pause();
            audiocontrol5.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
    }
    btn6.onclick = function Playsong() {
        if (audio6.paused) {
            audio6.play();
            loading.style.display = "block";
            audiocontrol6.style.display = "block";
            screenmonitorbutton.style.display = "block";
            console.log("It's work");
        } else {
            audio6.pause();
            audiocontrol6.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
    }
    btn7.onclick = function Playsong() {
        if (audio7.paused) {
            audio7.play();
            loading.style.display = "block";
            audiocontrol7.style.display = "block";
            screenmonitorbutton.style.display = "block";
            console.log("It's work");
            youtubeVideo.src="videoplayback (4).mp4"
        } else {
            audio7.pause();
            audiocontrol7.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
    }
    btn8.onclick = function Playsong() {
        if (audio8.paused) {
            audio8.play();
            loading.style.display = "block";
            audiocontrol8.style.display = "block";
            screenmonitorbutton.style.display = "block";
            console.log("It's work");
        } else {
            audio8.pause();
            audiocontrol8.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
    }
    btn9.onclick = function Playsong() {
        if (audio9.paused) {
            audio9.play();
            loading.style.display = "block";
            audiocontrol9.style.display = "block";
            screenmonitorbutton.style.display = "block";
            console.log("It's work");
        } else {
            audio9.pause();
            audiocontrol9.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
    }
    btn10.onclick = function Playsong() {
        if (audio10.paused) {
            audio10.play();
             audiocontrol10.style.display = "block";
             screenmonitorbutton.style.display = "block";
             loading.style.display = "block";
             console.log("It's work");
             youtubeVideo.src="videoplayback.mp4"
        } else {
            audio10.pause();
            audiocontrol10.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }  setTimeout(function() {
            loading.style.display = "none";
        }, 6000) 
    }
    btn11.onclick = function Playsong() {
        if (audio11.paused) {
            audio11.play();
            loading.style.display = "block";
            screenmonitorbutton.style.display = "block";
            audiocontrol11.style.display = "block";
            console.log("It's work");
        } else {
            audio11.pause();
            audiocontrol11.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
        audio11.volume = 0.5 ;
    }
    btn12.onclick = function Playsong() {
        if (audio12.paused) {
            audio12.play();
            audiocontrol12.style.display = "block";
            loading.style.display = "block";
            screenmonitorbutton.style.display = "block";
            console.log("It's work");
        } else {
            audio12.pause();
            audiocontrol12.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
    }
    btn13.onclick = function Playsong() {
        if (audio13.paused) {
            audio13.play();
            audiocontrol13.style.display = "block";
            loading.style.display = "block";
            screenmonitorbutton.style.display = "block";
            console.log("It's work");
        } else {
            audio13.pause();
            audiocontrol13.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
    }
    btn14.onclick = function Playsong() {
        if (audio14.paused) {
            audio14.play();
            audiocontrol14.style.display = "block";
            loading.style.display = "block";
            screenmonitorbutton.style.display = "block";
            console.log("It's work");
        } else {
            audio14.pause();
            audiocontrol14.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
    }
    btn15.onclick = function Playsong() {
        if (audio15.paused) {
            audio15.play();
            audiocontrol15.style.display = "block";
            loading.style.display = "block";
            screenmonitorbutton.style.display = "block";
            console.log("It's work");
            youtubeVideo.src="videoplayback.mp4"
        } else {
            audio15.pause();
            audiocontrol15.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
    }
    btn16.onclick = function Playsong() {
        if (audio16.paused) {
            audio16.play();
            loading.style.display = "block";
            audiocontrol16.style.display = "block";
            screenmonitorbutton.style.display = "block";
            console.log("It's work");
        } else {
            audio16.pause();
            audiocontrol16.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
    }
    btn17.onclick = function Playsong() {
        if (audio17.paused) {
            audio17.play();
            audiocontrol17.style.display = "block";
            screenmonitorbutton.style.display = "block";
        } else {
            audio17.pause();
            audiocontrol17.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
    }
    btn18.onclick = function Playsong() {
        if (audio18.paused) {
            audio18.play();
            audiocontrol18.style.display = "block";
            loading.style.display = "block";
            screenmonitorbutton.style.display = "block";
            console.log("It's work");
        } else {
            audio18.pause();
            audiocontrol18.style.display = "none";
            screenmonitorbutton.style.display = "none";
        }   setTimeout(function() {
            loading.style.display = "none";
        }, 4000)
    }
    setTimeout(function() {
        loading.style.display = "none";
    }, 7000)

    btnstop.onclick = function() {
        // Loop through each audio element and pause it
        audios.forEach (function(audiosElement) {
            audiosElement.pause();
            audio19.pause();
            screenmonitorbutton.style.display = "none";
            screenmonitordisplay.style.display = "none";
        });
        volumeControls.forEach (function(stopallelement){
            stopallelement.style.display = "none";
        });
    }

    btnsleep.onclick = function Playsong() {
        audio1.volume = 0.2; // Set volume of audio5 to 0.5
        audio10.volume = 0.6;
        // Loop through each audio element in audiosleep array
        audiosleep.forEach(function(audioElement) {
            if (audioElement.paused) {
                audioElement.play();
                screenmonitorbutton.style.display = "block";
                
            } else {
                audioElement.pause();
                screenmonitorbutton.style.display = "none";
                
            }   
        });
    };
    // Assuming btn1 is an existing button element
})
    btnrelax.onclick = function() {
        // Set volume levels for audio tracks
        audio2.volume = 0.1; // Adjust volume as needed
        audio4.volume = 0.3; // Adjust volume as needed
        // Loop through each audio element in audiorelax array
        audiorelax.forEach(function(audiorelaxElement) {
            if (audiorelaxElement.paused) {
                // If audio is paused, play it
                audiorelaxElement.play();
                screenmonitorbutton.style.display = "block";
                
            } else {
                // If audio is playing, pause it
                audiorelaxElement.pause();
                screenmonitorbutton.style.display = "none";
                
            }   
        });

    };
    
    Sleepmommy.onclick = function Playsong() {
        audio19.volume = 0.3;
        audio2.volume = 0.4;
        var youtubeLink = "https://www.youtube.com/watch?v=pnHaDDFWtXI&t=1s"
        sleepmommy.forEach(function(Mommy) {
        if (Mommy.paused) {
            Mommy.play();
        } else {
            Mommy.pause();
            window.open(youtubeLink, "_blank"); // Open link in a new tab
        }   
    })
}
    btnfocus.onclick = function Playsong() {
        audio10.volume = 0.5;
        // Loop through each audio element in audiosleep array
        focusaudio.forEach(function(focusaudio) {
            if (focusaudio.paused) {
                focusaudio.play();
                screenmonitorbutton.style.display = "block";
            } else {
                focusaudio.pause();
                screenmonitorbutton.style.display = "none";
            }   
        });
    };
    btnrandom.onclick = function() {
        // Shuffle the audio array
        audios.sort(() => Math.random() - 0.5);
    
        // Play the first three elements in the shuffled array
        for (var i = 0; i < 3; i++) {
            audios[i].play();
        }
    };
var audiosleep = [
   audio1,audio10,audio15,
];
var audiorelax = [
    audio2,audio4
];
var focusaudio= [
    audio1,audio10
]
var sleepmommy = [
    audio19,audio2
]


var cloud = document.getElementById("clound");
var tipbar = document.getElementById("tipbox");
var displaytext = document.getElementById("Tip-bottom-right");

// Array of tips
var tips = [
    "Tip: Wear headphones for better experience",
    "Tip: Take deep breaths to relax",
    "Tip: Drink water to stay hydrated",
    "Tip: Watch nature video for better experience",
    "Click Cloud on top right to go Buyme Coffe"
    // Add more tips as needed
];
var ref = [
    "Icon: from boxicons.com<br>"+
    "YT: Relaxing White Noise,Choolutter,Peaceful Scenes,Relax Top Music,ΣHAANTI, BumbleDee Audios,cozy asmr, Nomadic Ambience,Jason Stephenson - Sleep Meditation Music, SoundEffects (10 Hours)<br>"+
    "webstie:Pixabay"
];

// Function to show a random tip
function showRandomTip() {
    // Function to display a random tip
    var randomIndex = Math.floor(Math.random() * tips.length); // Generate a random index
    var randomTip = tips[randomIndex]; // Get a random tip from the array

    // Set the random tip as the content of displaytext element
    displaytext.textContent = randomTip;

    // Show the tip bar
    tipbar.style.display = "block";
    console.log("Button Work!");

    // Hide the tip after 10 seconds
    setTimeout(function() {
        tipbar.style.display = "none";
    }, 10000);
}

// Call showRandomTip initially
showRandomTip();

setInterval(showRandomTip, 30000);

// Set interval to show a random tip every 40 seconds (30 seconds invisible + 10 seconds visible)
setInterval(function() {
    // Hide the tip for the next 30 seconds
    tipbar.style.display = "none";
    // Show a random tip after 30 seconds
    setTimeout(showRandomTip, 30000);
}, 40000); // Interval of 40 seconds (30 seconds invisible + 10 seconds visible)

var Buttonscreen = document.getElementById("Button-show-Screen");
var screen = document.getElementById("boxscreen");
var Screenbox = [
    Buttonscreen, // Assuming Buttonscreen is defined elsewhere
    btnsleep // Assuming btnsleep is defined elsewhere
];
var youtubeVideo = document.getElementById("youtubeVideo");
var Screenbox = [Buttonscreen, btnsleep];

// Function to mute the video
function muteVideo() {
    youtubeVideo.volume = 0;
    youtubeVideo.muted = true;
}
Screenbox.forEach(function(element) {
    element.onclick = function () {
        if (screen.style.display === "block") {
            screen.style.display = "none"; // If boxscreen is already visible, hide it
            youtubeVideo.src = ""; // Stop the video playback
        } else {
            screen.style.display = "block"; // Otherwise, display the boxscreen
            youtubeVideo.play(); // Play the video
        } 
        {
            youtubeVideo.src = "videoplayback (3).mp4"; // Clear the video source
        }
    };
});

// Define an array to store all audio elements
var audios = [
    audio1, audio2, audio3, audio4, audio5,
    audio6, audio7, audio8, audio9, audio10,
    audio11, audio12, audio13, audio14, audio15,
    audio16, audio17, audio18
];

// Define an array to store all volume control elements
var volumeControls = [
    audiocontrol, audiocontrol2, audiocontrol3, audiocontrol4, audiocontrol5,
    audiocontrol6, audiocontrol7, audiocontrol8, audiocontrol9, audiocontrol10,
    audiocontrol11, audiocontrol12, audiocontrol13, audiocontrol14, audiocontrol15,
    audiocontrol16, audiocontrol17, audiocontrol18
];

// Add event listeners for each audio element
for (var i = 0; i < audios.length; i++) {
    var audio = audios[i];
    var volumeControl = volumeControls[i];
    if (audio && volumeControl) {
        // Event listener for volume slider changes
        volumeControl.addEventListener("input", createChangeVolumeFunction(audio));
    }
}

// Function to create a changeVolume function for a specific audio element
function createChangeVolumeFunction(audio) {
    return function() {
        var volumeLevel = this.value; // Get the value of the volume slider
        changeVolume(audio, volumeLevel); // Change the volume of the corresponding audio element
    };
}

// Function to change the volume of an audio element
function changeVolume(audio, volumeLevel) {
    if (audio) {
        audio.volume = volumeLevel;
    } else {
        console.error("Audio element not found.");
    }
}


// Assuming volumeControls is an array of volume control elements
document.getElementById("volumeControl").addEventListener("input", function() {
    var volumeLevel = this.value; // Get the value of the input
    var inputElement = this;

    // Remove existing color classes
    inputElement.classList.remove("green", "orange", "red");

    // Determine the color based on the volume level
    if (volumeLevel < 0.3) {
        inputElement.classList.add("green");
    } else if (volumeLevel < 0.7) {
        inputElement.classList.add("orange");
    } else {
        inputElement.classList.add("red");
    }
});

// JavaScript to start the moon rise animation
