// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = function(){
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const abortMissionButton = document.getElementById("missionAbort");
    const landingButton = document.getElementById("landing");
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocketImg = document.getElementById("rocket");

    takeOffButton.onclick = function(event){
        if(window.confirm("Confirm that the shuttle is ready for takeoff.")){
            flightStatus.innerText = "Shuttle in flight.";
            shuttleBackground.style.background = "dodgerblue";
            spaceShuttleHeight.innerText = 10000;
        }
    };
        landingButton.onclick = function(event){
            window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerText = "The shuttle has landed.";
            shuttleBackground.style.background = "green";
            spaceShuttleHeight.innerText = 0;
        }
        abortMissionButton.onclick = function(event){
            if(window.confirm("Confirm that you want to abort the mission.")){
                flightStatus.innerText = "Mission aborted";
                shuttleBackground.style.background = "green";
                spaceShuttleHeight.innerText = 0;
            }
        }

        /* When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
The rocket image should move 10 px in the direction of the button that was clicked.
If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.*/
let marginLeft = 0;
let marginTop = 0;
    upButton.addEventListener("click", function (event) {
        const currentHeight = Number(spaceShuttleHeight.innerHTML);
        spaceShuttleHeight.innerHTML = currentHeight + 10000;
        rocketImg.style.position = "relative";
        marginTop -= 10;
        rocketImg.style.marginTop = `${marginTop}px`;
    });
    downButton.addEventListener("click", function (event) {
        const currentHeight = Number(spaceShuttleHeight.innerHTML);
        if (currentHeight > 0){
            shuttleHeight.innerHTML = currentHeight - 10000;
        }
        rocketImg.style.position = "relative";
        marginTop += 10;
        rocketImg.style.marginTop = `${marginTop}px`;
    });
    leftButton.addEventListener("click", function (event) {
        marginLeft -= 10;
        rocketImg.style.marginLeft = `${marginLeft}px`;
    });
    rightButton.addEventListener("click", function (event) {
        marginLeft += 10;
        rocketImg.style.marginLeft = `${marginLeft}px`;
    });
}

//         upButton.onclick = function(event){
//             <style>
//                 img
//             </style>
//         }
// };
