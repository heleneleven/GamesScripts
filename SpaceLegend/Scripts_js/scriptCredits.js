#pragma strict
var customGuiStyle : GUIStyle;
var customSkin : GUISkin;
var lblProg : String;
var lblText : String;
var lblMusic : String;
var lblEffects : String;
var lblFonts : String;
var lblSounds : String;
var lblSettings : String;
var lbl3dModel : String;
var btnExit: String;


function Start () {

switch (PlayerPrefs.GetInt("Language"))
		{
		case 0:
			lblProg = "Programación, Diseño de Niveles y de Juego: Elena Siso.";
			lblText = "Se ha utilizado para completar el juego:";
			lblMusic = "Música de AudioDraft.";
			lblEffects = "Efectos de Rilem, Unity Technologies, Ben Throop.";
			lblFonts = "Fuentes de texto de Ray Larabie.";
			lblSounds = "Efectos de sonido de Electrodynamics, polyload.com.";
			lblSettings = "Imágenes de Hedgehog Team.";
			lbl3dModel="Modelo 3D de Duane's Mind.";
			break;
		case 1:
			lblProg = "Programming, Level and Game Design: Elena Siso.";
			lblText = "It has been used to complete the game: ";
			lblMusic = "Music by AudioDraft.";
			lblEffects = "Effects by Rilem, Unity Technologies, Ben Throop.";
			lblFonts = "Text Fonts by Ray Larabie.";
			lblSounds = "Sound Effects by Electrodynamics, polyload.com.";
			lblSettings = "Images by Hedgehog Team.";
			lbl3dModel="3D Model by Duane's Mind.";
			break;
		}
		
			if (PlayerPrefs.GetInt("IsPostBack") == 1)
			{
				print(PlayerPrefs.GetInt("IsPostBack"));
			
			}

}

function Update () {

	
}


function OnGUI()

{
	GUI.skin = customSkin;
	GUI.BeginGroup (Rect (Screen.width / 2-175 , Screen.height / 2-95 , 400, 250));

	customGuiStyle.fontSize = 15;
	switch (PlayerPrefs.GetInt("Idioma"))
		{
		case 0:
			GUI.Box (Rect (0,0,450,200),"");
			break;
		case 1:
			GUI.Box (Rect (0,0,350,200),"");
			break;
		}
    
  
	GUI.Label(Rect (7, 10, 400, 250), lblProg, customGuiStyle);
	GUI.Label(Rect (7, 40, 350, 200), lblText, customGuiStyle);
	GUI.Label(Rect (7, 60, 350, 200), lblMusic, customGuiStyle);
	GUI.Label(Rect (7, 80, 350, 200), lblEffects,customGuiStyle);
	GUI.Label(Rect (7, 100, 350, 200), lblFonts,customGuiStyle);
	GUI.Label(Rect (7, 120, 350, 200), lblSounds,customGuiStyle);
	GUI.Label(Rect (7, 140, 350, 200), lblSettings,customGuiStyle);
	GUI.Label(Rect (7, 160, 350, 200), lbl3dModel,customGuiStyle);
		
	GUI.EndGroup();
	
	 if (GUI.Button (Rect (Screen.width - 125, 0,85,40), "Menu"))
		{
			Application.LoadLevel("menuPrincipal");
		}
	
}

	
