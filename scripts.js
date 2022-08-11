// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = function(){
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

/* When the "Land" button is clicked, the following should happen:
A window alert should let the user know "The shuttle is landing. Landing gear engaged."
The flight status should change to "The shuttle has landed."
The background color of the shuttle flight screen should change from blue to green.
The shuttle height should go down to 0. */
        landingButton.onclick = function(event){
            window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerText = "The shuttle has landed.";
            shuttleBackground.style.background = "green";
            spaceShuttleHeight.innerText = 0;
        }
};
