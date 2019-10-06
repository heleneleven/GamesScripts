#pragma strict

var multiplyVel:int = 300;

function Update () {
	transform.Rotate(Vector3.up, Time.deltaTime * multiplyVel);
}