using UnityEngine;
using System.Collections;

public class AnimatedGUIText : MonoBehaviour
{
	public GUIText m_guiText;
	
	public string[] m_textLines;
	
	public float m_letterDelayFrom = 0.02f;
	public float m_letterDelayTo = 0.12f;
	
	public float m_lineDelay = 0.5f;
	
	public float m_displayDuration = 10.0f;
	
	public AudioClip[] m_letterTypeSound;
	public AudioClip m_lineTypeSound;
	
	private int m_curLine = 0;
	private int m_curLetter = 0;
	
	private float m_advanceTime = 0.0f;
	
	private string btnName;
	
	public GUISkin customSkin;

	
	void Start()
	{
		m_guiText.text = "";

		if (Screen.width < 1280)
		{
			switch (PlayerPrefs.GetInt("Idioma"))
			{
			case 0:
				m_textLines = new string[]{"Eres el único que puede salvar la Tierra ",
					"de una avalancha de meteoritos.",
					"Destruye tantos meteoritos como puedas...",
					"Si destruyes el número adecuado pasarás de nivel,",
					"y si superas todos los niveles..." ,
					"serás el salvador de tu amado planeta." ,
					"¡Adelante!... Y que la suerte te acompañe..." } ;
				break;
			case 1:
				m_textLines = new string[] {"You're the only one who can save the Earth from",
					"an onslaught of meteors.",
					"Destroy as many meteors as you can ...",
					"If you destroy the right number you'll pass the level,",
					"and if you surpass all levels...",
					"you'll will be the rescuer of your beloved planet.",
					"Come on! And may the luck be with you ...."};
				
				break;
			}

		}

		else
		{
			switch (PlayerPrefs.GetInt("Idioma"))
			{
			case 0:
				m_textLines = new string[]{"Eres el único que puede salvar la Tierra de una avalancha de meteoritos.",
					"Destruye en cada nivel tantos meteoritos como puedas...",
					"Si destruyes el número adecuado pasarás de nivel,",
					"y si superas todos los niveles serás el salvador de tu amado planeta." ,
					"¡Adelante!... Y que la suerte te acompañe..." } ;
				break;
			case 1:
				m_textLines = new string[] {"You're the only one who can save the Earth from an onslaught of meteors.",
					"Destroy as many meteors in each level as you can ...",
					"If you destroy the right number you'll pass the level,",
					"and if you surpass all levels... you'll will be the rescuer of your beloved planet.",
					"Come on! And may the luck be with you ...."};
				
				break;
			}
		}
	}

	void Update()
	{
		if( m_advanceTime < Time.time )
		{
			float delay = 0.0f;
			
			// we are done!
			if( m_curLine == m_textLines.Length )
			{
				Application.LoadLevel("1");
			}
			else
			{
				if( m_curLetter >= m_textLines[ m_curLine ].Length )
				{
					m_guiText.text += "\n";
					
					PlayLineSound();
					
					++m_curLine;
					m_curLetter = 0;
					if( m_curLine == m_textLines.Length )
					{
						delay = m_displayDuration;

					}
					else
					{
						delay = m_lineDelay;
					}
				}
				else
				{
					m_guiText.text += m_textLines[ m_curLine ][m_curLetter];
					
					PlayLetterSound();
					
					++m_curLetter;
					delay = Random.Range( m_letterDelayFrom, m_letterDelayTo );
				}
			}
			
			m_advanceTime = Time.time + delay;
		}
		
	}
	

	void PlayLetterSound()
	{
		if( m_letterTypeSound.Length > 0 )
		{
			audio.clip = m_letterTypeSound[ Random.Range( 0, m_letterTypeSound.Length) ];
			audio.Play();
		}
	}
	
	void PlayLineSound()
	{
		audio.clip = m_lineTypeSound;
		audio.Play();
	}
	
	void OnGUI()
	{
		GUI.skin = customSkin;
		
		switch (PlayerPrefs.GetInt("Idioma"))
		{
			case 0:
			btnName = "Continuar";
			break;
			case 1:
			btnName = "Continue";
			break;
		}
		
		if (GUI.Button (new Rect (Screen.width - 130, 0,125,40), btnName))
		{
			Application.LoadLevel("1");
		}
		
		
		if (GUI.Button(new Rect(Screen.width - 205, 0,75,40), "Menu"))
		{
			Application.LoadLevel("menuPrincipal");
		}
	
	}
}

