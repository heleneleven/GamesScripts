#pragma strict
var customGuiStyle : GUIStyle;
var customSkin : GUISkin;
var btnRight : String;
var btnLeft : String;
var btnUp : String;
var btnDown : String;
var btnSpaceBar : String;
var btnExit: String;
var btnFullScreen: String;
var lblFullScreen: String;
var image: Texture;


function Start () {

switch (PlayerPrefs.GetInt("Idioma"))
		{
		case 0:
			btnRight = "MOVER A LA DERECHA: Flecha Derecha o D";
			btnLeft = "MOVER A LA IZQUIERDA: Flecha Izquierda o A";
			btnUp = "SUBIR: Flecha Arriba o W";
			btnDown = "BAJAR: Flecha Abajo o S";
			btnSpaceBar = "DISPARAR: Barra Espaciadora";
			lblFullScreen= "PANTALLA COMPLETA: ";
			btnFullScreen = "Pantalla Completa";
			break;
		case 1:
			btnRight = "MOVE RIGHT: Right Arrow Or D";
			btnLeft = "MOVE LEFT: Left Arrow Or A";
			btnUp = "MOVE UP: Up Arrow Or W";
			btnDown = "MOVE DOWN: Down Arrow Or S";
			btnSpaceBar = "FIGHT: Space Bar";
			lblFullScreen= "FULL SCREEN: ";
			btnFullScreen = "Full Screen";
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
	GUI.BeginGroup (Rect (Screen.width / 2-175 , Screen.height / 2-95 , 350, 250));

	customGuiStyle.fontSize = 15;
	GUI.Box (Rect (0,0,350,200),"");
  
	GUI.Label(Rect (7, 10, 350, 250), btnRight, customGuiStyle);
	GUI.Label(Rect (7, 40, 350, 200), btnLeft, customGuiStyle);
	GUI.Label(Rect (7, 70, 350, 200), btnUp,customGuiStyle);
	GUI.Label(Rect (7, 100, 350, 200), btnDown,customGuiStyle);
	GUI.Label(Rect (7, 130, 350, 200), btnSpaceBar,customGuiStyle);
	GUI.Label(Rect (7, 160, 350, 200), lblFullScreen,customGuiStyle);
	
	switch (PlayerPrefs.GetInt("Language"))
		{
		case 0:
			GUI.Button (Rect (180, 155,30,30), GUIContent (image));
			break;
		case 1:
			GUI.Button (Rect (120,155,30,30), GUIContent (image));
			break;
		}
	
	GUI.EndGroup();
	
	 if (GUI.Button (Rect (Screen.width - 125, 0,85,40), "Menu"))
		{
			Application.LoadLevel("menuPrincipal");
		}

	if(GUI.Button (Rect (Screen.width - 40, 0,40,40), GUIContent (image, btnFullScreen)))
	{

		if (Screen.fullScreen != true)
		{
			Screen.SetResolution (Screen.currentResolution.width, Screen.currentResolution.height, true);
		}
		else
		{
			Screen.fullScreen = false;
		}

	}
	
}

	
