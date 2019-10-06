#pragma strict
var customSkin : GUISkin;
var customGuiStyle : GUIStyle;
var lblPoints : String;
var lblWin : TextMesh;

function Start () {

switch (PlayerPrefs.GetInt("Language"))
		{
		case 0:
			lblPoints = "Puntos: ";
			lblWin.text = "¡Has Ganado!";
			break;
		case 1:
			lblPoints = "Points: ";
			lblWin.text = "Game Win!";
			break;
		}
}

function OnGUI()
{
	GUI.skin = customSkin;
	
	GUI.Label (Rect (Screen.width/2 - 115,Screen.height/2 + 175,300,40), lblPoints + PlayerPrefs.GetInt("Points"));

	if (GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2 + (Screen.height/2 - 110),150,40), "Menu"))
	{
		Application.LoadLevel("menuPrincipal");
	}
	
	GUI.Label (Rect (Screen.width - 175, Screen.height - 50 ,250,40), "Elena Siso, 2014", customGuiStyle);
}