#pragma strict
static var points : int = 0;
static var life : int;
var timer : float = 60; //game time

//position variables GUI
var points_guiX: int = 10;
var points_guiY:int = 10;
var life_guiX: int = 10;
var life_guiY:int = 40;

var customGuiStyle : GUIStyle;
var customSkin : GUISkin;

var font: Font;
var lblPoints : String;
var lblLife : String;
var lblTime : String;
var lblLevel : String;


var imagen: Texture;

function Start () 
{
	InvokeRepeating("Timer",1.0,1.0);

	points=0;
	
	SetLife();
	
	switch (PlayerPrefs.GetInt("Language"))
		{
		case 0:
			lblPoints = "Puntos: ";
			lblLife = "Vidas: ";
			lblTime = "Tiempo: ";
			lblLevel = "Nivel: ";
			
			break;
		case 1:
			lblPoints = "Points: ";
			lblLife = "Life: ";
			lblTime = "Time: ";
			lblLevel = "Level: ";
			
			break;		
		}
	
}

function SetLife()
{
		switch (Application.loadedLevelName)
        {
	        case "1":
	        	life = 1;
	        	break;
	        case "2":
	        	life = 2;
	        	break;
	        case "3":
	        	life = 3;
	        	break;
	        case "4":
	        	life = 4;
	        	break;
	        case "5":
	        	life = 5;
	        	break;
	        case "6":
	        	life = 6;
	        	break;
		}
}

function Update () 
{
	
//Condition win level
if (life < 0)
		{
			Application.LoadLevel("gameover");
			SendInfo();
		}

switch (Application.loadedLevelName)
        {
        case "1":
        	if(points >=100)
			{
				Application.LoadLevel("2");
				SendInfo();
			}
			else
			{
				if (timer <= 0)
				{
				Application.LoadLevel("gameover");
				SendInfo();
				}
			
			}
            break;
            
          case "2":
        	if(points >= 300 )
			{
				Application.LoadLevel("3");
				SendInfo();
			}
			else
			{
				if (timer <= 0)
				{
				Application.LoadLevel("gameover");
				SendInfo();
				}
			}
            break;
            
           case "3":
        	if(points >= 500)
			{
				Application.LoadLevel("4");
				SendInfo();
			}
			else
			{
				if (timer <= 0)
				{
				Application.LoadLevel("gameover");
				SendInfo();
				}
			}
            break;
            
            case "4":
        	if(points >= 1200)
			{
				Application.LoadLevel("5");
				SendInfo();
			}
			else
			{
				if (timer <= 0)
				{
				Application.LoadLevel("gameover");
				SendInfo();
				}
			}
            break;

            case "5":
            if(points >= 1300)
			{
				Application.LoadLevel("6");
				SendInfo();
			}
			else
			{
				if (timer <= 0)
				{
				Application.LoadLevel("gameover");
				SendInfo();
				}
			}
            break;
            
            case "6":
        	if(points >= 1400)
			{
				Application.LoadLevel("gamewin");
				SendInfo();
			}
			else
			{
			    if (timer <= 0)
			    {
				Application.LoadLevel("gameover");
				SendInfo();
				}
			}
            break;
 			}
}

//Set game time and substract
function SendInfo()
{
	PlayerPrefs.SetInt("Points", points);
	PlayerPrefs.SetInt("Level", int.Parse(Application.loadedLevelName));
}


function Timer ()
{
	if (--timer == 0)
	{
		CancelInvoke();
	}
}

function AddScore()
{
	switch (Application.loadedLevelName)
        {
        case "4":
        case "5":
        case "6":
	        points += 2;
	        break;
	    default:
	    	points +=1;
        }
}

function OnGUI () 
{
	GUI.skin = customSkin;
    customGuiStyle.fontSize = 30;
    customGuiStyle.font = font;
    customGuiStyle.normal.textColor = Color.yellow;

    GUI.Label (Rect (points_guiX, points_guiY, 100, 20), lblPoints + points, customGuiStyle);
    GUI.Label (Rect (life_guiX, life_guiY, 100, 20), lblLife + life, customGuiStyle);
    GUI.Label (Rect(Screen.width/2 - 50 , Screen.height - 50, 100, 100), lblTime + timer, customGuiStyle);
    GUI.Label (Rect(Screen.width/2 - 50, 0,125,40), lblLevel + Application.loadedLevelName, customGuiStyle);
    
    if (GUI.Button (Rect (Screen.width - 125, 0,85,40), "Menu"))
		{
			Application.LoadLevel("menuPrincipal");
		}
}