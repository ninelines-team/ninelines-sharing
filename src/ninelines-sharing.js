export default class Share {
	/**
	 * @param {string} url
	 * @returns {Window}
	 */
	static openWindow(url) {
		return window.open(url, 'Поделиться', 'width=640,height=480,location=no,toolbar=no,menubar=no');
	}

	/**
	 * @param {string} url
	 * @returns {Window}
	 */
	static facebook(url) {
		return Share.openWindow(`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
	}

	/**
	 * @param {string} url
	 * @returns {Window}
	 */
	static vk(url) {
		return Share.openWindow(`https://vk.com/share.php?url=${encodeURIComponent(url)}`);
	}

	/**
	 * @param {string} url
	 * @returns {Window}
	 */
	static twitter(url) {
		return Share.openWindow(`http://twitter.com/share?url=${encodeURIComponent(url)}`);
	}

	/**
	 * @param {string} url
	 * @returns {Window}
	 */
	static google(url) {
		return Share.openWindow(`https://plus.google.com/share?url=${encodeURIComponent(url)}`);
	}

	/**
	 * @param {string} url
	 * @returns {Window}
	 */
	static ok(url) {
		return Share.openWindow(`https://connect.ok.ru/offer?url=${encodeURIComponent(url)}`);
	}
}
