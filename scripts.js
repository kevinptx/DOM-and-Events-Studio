// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = function(){
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
};
