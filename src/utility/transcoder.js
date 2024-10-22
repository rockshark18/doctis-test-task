class Transcoder {
	constructor() {
		this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	}

	encode(input) {
		let output = "";
		let n, r, i, s, o, u, a;
		let f = 0;
		input = this._utf8_encode(input);
		while (f < input.length) {
			n = input.charCodeAt(f++);
			r = input.charCodeAt(f++);
			i = input.charCodeAt(f++);
			s = n >> 2;
			o = ((n & 3) << 4) | (r >> 4);
			u = ((r & 15) << 2) | (i >> 6);
			a = i & 63;
			if (isNaN(r)) {
				u = a = 64;
			} else if (isNaN(i)) {
				a = 64;
			}
			output = output + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
		}
		return output;
	}

	decode(input) {
		let output = "";
		let n, r, i;
		let s, o, u, a;
		let f = 0;
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		while (f < input.length) {
			s = this._keyStr.indexOf(input.charAt(f++));
			o = this._keyStr.indexOf(input.charAt(f++));
			u = this._keyStr.indexOf(input.charAt(f++));
			a = this._keyStr.indexOf(input.charAt(f++));
			n = (s << 2) | (o >> 4);
			r = ((o & 15) << 4) | (u >> 2);
			i = ((u & 3) << 6) | a;
			output = output + String.fromCharCode(n);
			if (u != 64) {
				output = output + String.fromCharCode(r);
			}
			if (a != 64) {
				output = output + String.fromCharCode(i);
			}
		}
		output = this._utf8_decode(output);
		return output;
	}

	_utf8_encode(string) {
		string = string.replace(/\r\n/g, "\n");
		let utfText = "";
		for (let n = 0; n < string.length; n++) {
			let c = string.charCodeAt(n);
			if (c < 128) {
				utfText += String.fromCharCode(c);
			} else if (c > 127 && c < 2048) {
				utfText += String.fromCharCode((c >> 6) | 192);
				utfText += String.fromCharCode((c & 63) | 128);
			} else {
				utfText += String.fromCharCode((c >> 12) | 224);
				utfText += String.fromCharCode(((c >> 6) & 63) | 128);
				utfText += String.fromCharCode((c & 63) | 128);
			}
		}
		return utfText;
	}

	_utf8_decode(utfText) {
		let string = "";
		let i = 0;
		let c = 0, c1 = 0, c2 = 0;
		while (i < utfText.length) {
			c = utfText.charCodeAt(i);
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if (c > 191 && c < 224) {
				c2 = utfText.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utfText.charCodeAt(i + 1);
				c3 = utfText.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	}
}

export default Transcoder;
