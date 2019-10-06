#pragma strict
var speed   : float = 10.0;
var shoot : Transform; 
var weapon1   : Transform; 
var weapon2   : Transform; 
var weapon3   : Transform; 
var vida : int;
var RightJoystick : Joystick;
var LeftJoystick : Joystick;
 
function Start () {

}

function Update () {
    
    //basic movement
    var transV : float = Input.GetAxis ("Vertical") * speed * Time.deltaTime;
    var transH : float = Input.GetAxis ("Horizontal") * speed * Time.deltaTime;
    
   	var currentPosition = transform.TransformPoint(Vector3.zero); 
   	
   	//limits
	if(transform.position.x >= 12)
   		transform.position = currentPosition;
   	if(transform.position.x <= -12)
   		transform.position = currentPosition;
   	if(transform.position.y >= 12)
   		transform.position.y = 12;
   	if(transform.position.y <= -12)
		   transform.position.y = -12;   		
		   
   	//set shoot
   	if ( RightJoystick.tapCount == 1 )
   	{
   	if (Application.loadedLevelName == "1"||Application.loadedLevelName == "2" )
   	 {
   	 	Instantiate(shoot, currentPosition, shoot.rotation);
   	  }
   	 if (Application.loadedLevelName == "3"||Application.loadedLevelName == "4" )
   	 {
   		Instantiate(shoot, weapon1.position, shoot.rotation);
   		Instantiate(shoot, weapon2.position, shoot.rotation);
	 }
	 if (Application.loadedLevelName == "5"||Application.loadedLevelName == "6" )
   	 {
   		Instantiate(shoot, weapon1.position, shoot.rotation);
   		Instantiate(shoot, weapon2.position, shoot.rotation);
   		Instantiate(shoot, weapon3.position, shoot.rotation);
	 }
   	audio.Play();
   	}
}


