enum Languages {
	hu,
	en
}

class Dictionary {
	private lang: Languages;
	
	/**
	 * getLanguage
	 */
	public getLanguage() : Languages {
		return this.lang;
	}
	
	/**
	 * setLanguage
	 */
	public setLanguage(language: Languages) {
		this.lang = language;
	}
	
    constructor(language : Languages = Languages.en) {    
        this.lang = language;
    }
	
	/**
	 * getText
	 */
	public getText(key: string) : string {
		//TODO: Valós megoldás elkészítése
		return "key: "+key;
	}
	
	/**
	 * TranslateText
	 */
	public TranslateText(text: string, from: Languages) {
		return "text: " + text
	}
	
}