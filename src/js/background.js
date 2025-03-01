console.log("background.js");
import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener(async (details) => {
	browser.action.setBadgeBackgroundColor({ color: "#ca93fb" });
	const currentVersion = browser.runtime.getManifest().version;

	// Get previously stored version
	const { lastVersion } = await browser.storage.sync.get("lastVersion");

	if (details.reason === "update" && lastVersion !== currentVersion) {
		browser.action.setBadgeText({ text: "NEW" });
		browser.storage.sync.remove("gptheme");
	}

	// Store the current version to prevent repeat triggers
	await browser.storage.sync.set({ lastVersion: currentVersion });
});

// Ensure onMessage listener is added only once
if (!globalThis.hasSetBadgeListener) {
	browser.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
		if (message.action === "setBadge") {
			await browser.action.setBadgeText({ text: browser.runtime.getManifest().version });
			sendResponse({ status: "Badge set" });
			return true;
		}
	});
	globalThis.hasSetBadgeListener = true;
}
