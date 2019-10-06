using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ActivateEnemy : MonoBehaviour {

	public float time = 5f;
	public SearchNavigation search;

	// Use this for initialization
	void Start () {
		Invoke ("Activate", time);
	}

	// Update is called once per frame
	void Activate(){

		search.enabled = true;

	}
}
