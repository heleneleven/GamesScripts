#pragma strict
var velShoot: float = 50;
var limShoot: int = -40;
var explosion: Transform;
var game : GameObject;
var explosionSound : AudioClip;

function Update () {

	transform.Translate(Vector3.up * velShoot * Time.deltaTime);

	//Remove shoot in scene
	if (transform.position.z < limShoot)
	{ 
		Destroy(gameObject);
	}

}

//Set objects behavior when collides
function OnTriggerEnter (other : Collider) {
    if (other.gameObject.tag=="rock1")
    {
	    var reset: Vector3 = Vector3(-100, Random.Range(-10.0, 10.0), Random.Range(-120.0, -170.0));
	    other.transform.position = reset;
	    
	    //Start explosion
	    Instantiate(explosion, transform.position, transform.rotation);
	    audio.PlayClipAtPoint(explosionSound, transform.position);
	    Destroy(gameObject);
	    
	    //Add point to  GameState
	    game.transform.GetComponent (scriptGameState).AddScore();
	    
    }
}