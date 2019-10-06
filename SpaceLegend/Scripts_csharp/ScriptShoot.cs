using UnityEngine;
using System.Collections;

public class scriptDisparo_csharp : MonoBehaviour
{
public float velShoot = 50.0f;
public int limShoot = 40;
	// Use this for initialization
	void Start ()
	{
	
	}
	
	// Update is called once per frame
	void Update ()
	{
	transform.Translate(Vector3.up * velShoot * Time.deltaTime);
		
	if (transform.position.z >= limShoot)
		{
			Destroy(gameObject);
		}
	}
}

