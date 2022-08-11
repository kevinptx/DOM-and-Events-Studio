// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = function(){
    const abortMissionButton = document.getElementById("missionAbort");
    const landingButton = document.getElementById("landing");
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    
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

};
