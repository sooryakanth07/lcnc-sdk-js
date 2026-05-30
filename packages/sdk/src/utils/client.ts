import { BaseSDK, LISTENER_CMDS } from "../core";

export class Client extends BaseSDK {
	/**
	 * Display an info message toast in the platform.
	 *
	 * @param message - The message to display. Accepts a string or object (serialized to JSON).
	 * @returns A promise that resolves when the message is shown.
	 *
	 * @example
	 * await kf.client.showInfo("Record saved successfully");
	 */
	showInfo(message: string | object) {
		return super._postMessageAsync(LISTENER_CMDS.MESSAGE, { message });
	}

	/**
	 * Display a confirmation dialog and wait for the user's response.
	 *
	 * @param args - Dialog configuration.
	 * @param args.title - Dialog title.
	 * @param args.content - Body text of the dialog.
	 * @param args.okText - Label for the confirm button (default: "Ok").
	 * @param args.cancelText - Label for the cancel button (default: "Cancel").
	 * @returns A promise that resolves with `{ action: "OK" }` or `{ action: "CANCEL" }`.
	 *
	 * @example
	 * const { action } = await kf.client.showConfirm({
	 *   title: "Delete record?",
	 *   content: "This cannot be undone.",
	 *   okText: "Delete",
	 *   cancelText: "Cancel",
	 * });
	 * if (action === "OK") { ... }
	 */
	showConfirm(args: {
		title: string;
		content: string;
		okText: string;
		cancelText: string;
	}) {
		return super._postMessageAsync(LISTENER_CMDS.CONFIRM, {
			data: {
				title: args.title,
				content: args.content,
				okText: args.okText || "Ok",
				cancelText: args.cancelText || "Cancel"
			}
		});
	}

	/**
	 * Navigate the platform to the given URL.
	 *
	 * @param url - The URL to navigate to.
	 *
	 * @example
	 * kf.client.redirect("https://example.com");
	 */
	redirect(url: string) {
		return super._postMessageAsync(LISTENER_CMDS.REDIRECT, { url });
	}

	/**
	 * Resolve a Kissflow image field value to a base64 data URL.
	 *
	 * Custom components (iframes) cannot load Kissflow-hosted images directly due to
	 * CORS restrictions and 302 redirects to signed S3 URLs. This method fetches the
	 * image in the parent window (which has the required session cookies) and returns
	 * a self-contained `data:image/...;base64,...` URL that can be used as `<img src>`
	 * without any CORS issues.
	 *
	 * @param imageValue - The image field value must contain a `key` property and 
	 * optionally a `photos` array. Uses `photos[1]` (preview resolution) when available, 
	 * falls back to `key`.
	 * @returns A promise that resolves with the base64 data URL string.
	 *
	 * @example
	 * const dataUrl = await kf.client.getImageUrl(imageFieldValue);
	 * document.querySelector("#avatar").src = dataUrl;
	 */
	getImageUrl(imageValue: Record<string, unknown>) {
		return this._postMessageAsync(LISTENER_CMDS.GET_IMAGE_URL, { imageValue });
	}

	/**
	 * Open the file preview overlay for one or more files.
	 *
	 * @param file - A file object, an S3 key string, or an array of either.
	 * Each file object should have `name`, `fileExtension`, and `key` properties.
	 * A plain string is treated as an S3 key, with name and extension derived from it.
	 * @param options - Optional settings.
	 * @param options.index - Zero-based index of the file to show first (default: 0).
	 * @returns A promise that resolves with `{ success: true }` when the preview opens.
	 *
	 * @example
	 * // Single file object
	 * await kf.client.previewFile({
	 *   name: "report.pdf",
	 *   fileExtension: "pdf",
	 *   key: "acc123/flow456/file789",
	 * });
	 *
	 * @example
	 * // S3 key string
	 * await kf.client.previewFile("acc123/flow456/report.pdf");
	 *
	 * @example
	 * // Multiple files, start at second file
	 * await kf.client.previewFile(
	 *   [
	 *     { name: "photo1.jpg", fileExtension: "jpg", key: "acc/img1" },
	 *     { name: "photo2.png", fileExtension: "png", key: "acc/img2" },
	 *   ],
	 *   { index: 1 }
	 * );
	 */
	previewFile(
		file:
			| { name: string; fileExtension: string; key: string; size?: number; duration?: number }
			| string
			| Array<{ name: string; fileExtension: string; key: string; size?: number; duration?: number } | string>,
		options?: { index?: number }
	) {
		const files = Array.isArray(file) ? file : [file];
		return this._postMessageAsync(LISTENER_CMDS.PREVIEW_FILE, {
			files,
			index: options?.index ?? 0,
		});
	}
}
