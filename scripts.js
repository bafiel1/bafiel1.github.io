var light = document.getElementById("light_img");
var car1 = document.getElementById("car1");
var car2 = document.getElementById("car2");
var car1_win = document.getElementById("win_car1"); 
var car2_win = document.getElementById("win_car2");
var car1_pos = 0;
var car2_pos = 0;
var interval;

//Start indicator green/red
function start_race()
            {
                light.src = "green_light1.png";	
				interval = setInterval( racing, 250 );
            }
			
// car racing function
function racing() {
    var speed  = Math.floor((Math.random() * 15) + 5);
    car1_pos = parseInt(speed) + car1_pos;
    car1.style.left = car1_pos + "px";
	speed  = Math.floor((Math.random() * 15) + 5);
    car2_pos = parseInt(speed) + car2_pos;
    car2.style.left = car2_pos + "px";
    if((car1_pos + 200) >= window.innerWidth){
        car1_win.style.display = "block";
        clearInterval(interval);
    }
	else if( (pos_car2 + 200) >= window.innerWidth) {
		clearInterval(interval);
        car2_win.style.display = "block";
		clearInterval(interval);		
		} 
}
// new game
function new_game()
            {
				light.src = "red_light1.png";
				car1_win.style.display = "none";
				car2_win.style.display = "none";
				car1.style.left = 0;
				car2.style.left = 0;
				car1_pos = 0;
				car2_pos = 0;
            }
