#pragma strict

var multiplyVel:int = 5;


function Update () {

	transform.Rotate(Vector3.up, Time.deltaTime * multiplyVel);

}