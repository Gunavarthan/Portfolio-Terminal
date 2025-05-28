/**
 * Figlet JS
 * 
 * Copyright (c) 2010 Scott González
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 * 
 * http://github.com/scottgonzalez/figlet-js
 */

(function() {

var Figlet = (typeof exports !== "undefined" ? exports : window).Figlet = {
	fonts: {},

	loadFont: async function(name, callback) {
		$.ajax({
		  url: "Fonts/"+name.toLowerCase()+".flf.txt",
		  dataType: "text",
		  success: function(data) {
			callback(data);
		  },
		  error: function() {
			console.error("Failed to load font:", name);
		  }
		});
	},
	
	parseFont: function(name, fn) {
		if (name in Figlet.fonts) {
			fn();
			return;
		}
		
		Figlet.loadFont(name, function(defn) {
			Figlet._parseFont(name, defn, fn);
		});
	},
	
	_parseFont: function(name, defn, fn) {
		var lines = defn.split("\n"),
			header = lines[0].split(" "),
			hardblank = header[0].charAt(header[0].length - 1),
			height = +header[1],
			comments = +header[5];
		
		Figlet.fonts[name] = {
			defn: lines.slice(comments + 1),
			hardblank: hardblank,
			height: height,
			char: {}
		};
		fn();
	},
	
	parseChar: function(char, font) {
		var fontDefn = Figlet.fonts[font];
		if (char in fontDefn.char) {
			return fontDefn.char[char];
		}
		
		var height = fontDefn.height,
			start = (char - 32) * height,
			charDefn = [],
			i;
		for (i = 0; i < height; i++) {
			charDefn[i] = fontDefn.defn[start + i]
				.replace(/@/g, "")
				.replace(RegExp("\\" + fontDefn.hardblank, "g"), " ");
		}
		return fontDefn.char[char] = charDefn;
	},

	write: function(str, font, term) {
		return new Promise((resolve, reject) => {
			Figlet.parseFont(font, function() {
				try {
					let chars = [], result = "\n";
					for (let i = 0, len = str.length; i < len; i++) {
						chars[i] = Figlet.parseChar(str.charCodeAt(i), font);
					}
					for (let i = 0, height = chars[0].length; i < height; i++) {
						for (let j = 0; j < str.length; j++) {
							result += chars[j][i];
						}
						result += "\n";
					}

					term.write(result, () => {
						console.log('written to terminal...');
						resolve(result);
					});
	
				} catch (err) {
					reject(err);
				}
			});
		});
	}	
};

})();

