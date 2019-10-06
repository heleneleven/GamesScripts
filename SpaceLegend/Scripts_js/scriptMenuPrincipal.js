#pragma strict
var customSkin : GUISkin;
var customGuiStyle : GUIStyle;
var language : int;
var isPostBack : int;
var isBtnControls : int;
var isBtnCredits : int;
var isBtnPlay : int;
var btnPlayName : String;
var btnExit: String;
var btnControlsName:String;
var btnCreditsName:String;

function Start () 
{
	if (PlayerPrefs.GetInt("Language") == 0)
	{
		btnPlayName= "Jugar";
		btnCreditsName="Creditos";
		btnExit = "Salir";
	
		language = 0;
		PlayerPrefs.SetInt("Language", language);
	}
	
	if (PlayerPrefs.GetInt("Language") == 1)
	{
		btnPlayName= "Play";
		btnCreditsName="Credits";
		btnExit = "Exit";
		
		language = 1;
		PlayerPrefs.SetInt("Language", language);
	}

}

function Update () 
{
	if(PlayerPrefs.GetInt("Language") == 0)
	{
		btnPlayName= "Jugar";
		btnCreditsName="Creditos";
		btnExit = "Salir";
	}
	
	if(PlayerPrefs.GetInt("Language") == 1)
	{
		btnPlayName= "Play";
		btnCreditsName="Credits";
		btnExit = "Exit";
	}
}

function OnGUI()
{
	GUI.skin = customSkin;

	if (GUI.Button (Rect (Screen.width - 255, 0,125,40), "Español"))
	{
		language = 0;
		PlayerPrefs.SetInt("Language", language);
	}
		
	if (GUI.Button(Rect(Screen.width - 130, 0,125,40), "English"))
	{
		language = 1;
		PlayerPrefs.SetInt("Language", language);
	}
	
	if (GUI.Button (Rect (Screen.width/2 - 75, Screen.height/2 + (Screen.height/2 - 70) ,125,40), btnPlayName))
	{
		isBtnPlay = 1;
		PlayerPrefs.SetInt("IsBtnPlay", isBtnPlay);
		Application.LoadLevel("intro");
	}
	
	if (GUI.Button(Rect(0, 0,85,30), btnExit))
	{
		Application.Quit();
	}
	
	if (GUI.Button(Rect(85,0,125,30), btnCreditsName))
	{
		isBtnCredits = 1;
		PlayerPrefs.SetInt("IsBtnCredits", isBtnCredits);
		Application.LoadLevel("credits");
	}
	GUI.Label (Rect (Screen.width - 175, Screen.height - 50 ,250,40), "Elena Siso, 2014");

}