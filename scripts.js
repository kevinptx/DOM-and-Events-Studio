// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = function(){
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    if(window.confirm("Confirm that the shuttle is ready for takeoff.")){
/*  The flight status should change to "Shuttle in flight."
The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
 The shuttle height should increase by 10,000 miles. */
        flightStatus.innerText = "Shuttle in flight.";
        shuttleBackground.style.background = "dodgerblue";
        spaceShuttleHeight.innerText = 10000;
    }
};
