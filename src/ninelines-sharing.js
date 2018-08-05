export default class Share {
	/**
	 * @param {string} social
	 * @param {string} url
	 * @returns {string|null}
	 */
	static getUrl(social, url) {
		if (Share.urlList[social]) {
			return Share.urlList[social] + encodeURIComponent(url);
		}

		return null;
	}

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
		return Share.openWindow(Share.getUrl('facebook', url));
	}

	/**
	 * @param {string} url
	 * @returns {Window}
	 */
	static vk(url) {
		return Share.openWindow(Share.getUrl('vk', url));
	}

	/**
	 * @param {string} url
	 * @returns {Window}
	 */
	static twitter(url) {
		return Share.openWindow(Share.getUrl('twitter', url));
	}

	/**
	 * @param {string} url
	 * @returns {Window}
	 */
	static google(url) {
		return Share.openWindow(Share.getUrl('google', url));
	}

	/**
	 * @param {string} url
	 * @returns {Window}
	 */
	static ok(url) {
		return Share.openWindow(Share.getUrl('ok', url));
	}
}

Share.urlList = {
	facebook: 'https://facebook.com/sharer/sharer.php?u=',
	vk: 'https://vk.com/share.php?url=',
	twitter: 'http://twitter.com/share?url=',
	google: 'https://plus.google.com/share?url=',
	ok: 'https://connect.ok.ru/offer?url=',
};
