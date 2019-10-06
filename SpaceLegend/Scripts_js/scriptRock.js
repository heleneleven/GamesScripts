#pragma strict
var rockVelocity: float;
var explosion2: Transform;
var rotationVel: float;
var scene: GameObject;
var explosionSound : AudioClip;

function Start () {

switch (Application.loadedLevelName)
        {
	        case "1":
	        	rockVelocity = 5 ;
	        	rotationVel = 10; 
	        	break;
	        case "2":
	        	rockVelocity = 8 ;
	        	rotationVel = 20; 
	        	break;
	        case "3":
	        	rockVelocity = 11 ;
	        	rotationVel = 30; 
	        	break;
	        case "4":
	        	rockVelocity = 14 ;
	        	rotationVel = 40; 
	        	break;
	        case "5":
	        	rockVelocity = 17 ;
	        	rotationVel = 50; 
	        	break;
	        case "6":
	        	rockVelocity = 20 ;
	        	rotationVel = 60; 
	        	break;
		}
}

function Update () {

	transform.Translate(Vector3.forward * rockVelocity * Time.deltaTime);
	transform.Rotate(Vector3.forward * rotationVel * Time.deltaTime);

	//Reset and when pass gamepplayer position
	if (transform.position.z > 30)
	{
		//create new enemy int random position
		var reset: Vector3 = Vector3(Random.Range(-12.0, 12.0), -12, Random.Range(-60.0, -20.0));
		transform.position = reset;
	}

	if (transform.position.x < -75)
	{
		reset = Vector3(Random.Range(-20.0, -12.0), -12, Random.Range(-60.0, -20.0));
		transform.position = reset;
	}
}

function OnTriggerEnter (other : Collider)
{
	if(other.gameObject.tag == "Player")
	{	
		other.GetComponent(scriptPlayer).life -= 1;
		scene.transform.GetComponent(scriptGameState).substractLife();
	
		Instantiate(explosion2, transform.position, transform.rotation);
		audio.PlayClipAtPoint(explosionSound, transform.position);
		
    	var reset: Vector3 = Vector3(Random.Range(-75.0, 47.0), Random.Range(-15.0, 20.0), Random.Range(-300.0, -20.0));
    	transform.position = reset;
	}
}