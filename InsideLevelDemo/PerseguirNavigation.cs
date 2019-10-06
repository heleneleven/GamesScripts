using UnityEngine;
using System.Collections;

public class SearchNavigation : MonoBehaviour {
	
	public GameObject destiny;
	private UnityEngine.AI.NavMeshAgent agentNavigation;

	void Start ( ) {
		agentNavigation = gameObject.GetComponent<UnityEngine.AI.NavMeshAgent> ( );
	}

	void Update ( ) {
		agentNavigation.SetDestination ( destiny.transform.position );
	}

}
