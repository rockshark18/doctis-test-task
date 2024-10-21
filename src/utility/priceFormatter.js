export class PriceFormatter {
	static currency = 'Rp';

	static format(price) {
		return this.currency + ' ' + Number(price).toLocaleString('de-DE')
	}
}
