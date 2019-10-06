using UnityEngine;
using System.Collections;

public class ScriptPlayer : MonoBehaviour {
	
public float speed = 10.0f;
public Transform disparo; //esto carga el disparo
public Transform arma1; //esto carga el arma1
 
	
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () 
	{
	//movimiento básico
	float transV = Input.GetAxis ("Vertical") * speed * Time.deltaTime;
	float transH= Input.GetAxis ("Horizontal") * speed * Time.deltaTime;
		
	transform.Translate(transH,transV,0);
	//limitaciones
		
   	if(transform.position.x >= 12)
		{
   		 transform.position = new Vector3 (12, transform.position.y, transform.position.z);
		}
  	if(transform.position.x <= -12)
		{
   		transform.position = new Vector3 (-12, transform.position.y, transform.position.z);
		}
   	if(transform.position.y >= 9)
		{
   		transform.position = new Vector3 (transform.position.x, 9, transform.position.z);
		}
   	if(transform.position.y <= -9)
		{
   		transform.position = new Vector3 (transform.position.x, -9, transform.position.z);
		}
	
	//definimos el disparo
   	if(Input.GetKeyDown("space"))
	   	{
	   	Instantiate(disparo, arma1.position, arma1.rotation);
	   	}
	}
}

