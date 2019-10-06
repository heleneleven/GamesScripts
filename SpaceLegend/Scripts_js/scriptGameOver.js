#pragma strict
var customGuiStyle : GUIStyle;
var customSkin : GUISkin;
var lblPoints : String;
var lblGameOver : String;
var lblRestart : String;
var fontCopyright :Font;
var fontPoints :Font;

function Start () {
	switch (PlayerPrefs.GetInt("Language"))
			{
			case 0:
				lblPoints = "Puntos: ";
				lblGameOver = "¡Has perdido!";
				lblRestart = "Reiniciar";
				break;
			case 1:
				lblPoints = "Points: ";
				lblGameOver = "Game Over!";
				lblRestart = "Restart";
				break;
			}

}

function Update () {

    customGuiStyle.fontSize = 5;

    customGuiStyle.fontSize = customGuiStyle.fontSize  * Time.deltaTime;

}

function OnGUI()

{
	GUI.skin = customSkin;

	GUI.Label (Rect (Screen.width/2 - 200,Screen.height/2 - 60,600,80), lblGameOver);
	customGuiStyle.fontSize = 35;
	customGuiStyle.font = fontPoints;
	GUI.Label (Rect (Screen.width/2 - 75,Screen.height/2 + 60,300,40), lblPoints + PlayerPrefs.GetInt("Puntos"), customGuiStyle);
	
	
	if (GUI.Button (Rect (Screen.width/2 - 130, Screen.height/2 + (Screen.height/2 - 70) ,125,40), lblRestart))
	{
		Application.LoadLevel(PlayerPrefs.GetInt("Level").ToString());
	}
		
	if (GUI.Button(Rect(Screen.width/2, Screen.height/2 + (Screen.height/2 - 70),150,40), "Menu"))
	{
		Application.LoadLevel("menuPrincipal");
	}
	
	customGuiStyle.font = fontCopyright;
	customGuiStyle.fontSize = 15;
	
	GUI.Label (Rect (Screen.width - 175, Screen.height - 50 ,250,40), "Elena Siso, 2014", customGuiStyle);
}