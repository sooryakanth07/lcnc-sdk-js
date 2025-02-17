import { BaseSDK } from "./core";

import { Form, TableForm } from "./form";
import { Client, Formatter } from "./utils";
import { Application, Page, Component, Popup } from "./app";
import { window } from "./window";

import { SDKContext } from "./types/internal";
import { userObject, accountObject, environmentObject } from "./types/external";

class LowcodeSDK extends BaseSDK {
	context: Component | Form | TableForm | Page | Popup;
	client: Client;
	formatter: Formatter;
	app: Application;
	user: userObject;
	env: environmentObject;
	account: accountObject;
	#csrfToken: string;

	constructor(props: SDKContext) {
		super();
		if (props.tableId && props.tableRowId) {
			this.context = new TableForm(
				props.formInstanceId,
				props.tableId,
				props.tableRowId
			);
		} else if (props.formInstanceId) {
			this.context = new Form(props.formInstanceId);
		} else if (props.popupId) {
			this.context = new Popup(props);
		} else if (props.pageId && !props.componentId) {
			this.context = new Page(props);
		} else if (props.componentId) {
			this.context = new Component(props);
		}
		this.client = new Client();
		this.formatter = new Formatter();
		if (props.appId) {
			this.app = new Application(props);
		}
		this.user = props.user;
		this.env = props.envDetails;
		this.account = props.account;
		this.#csrfToken = props.csrfToken;
	}
	api(
		url: string,
		args?: {
			headers: object;
		}
	) {
		return new Promise((resolve, reject) => {
			globalThis
				.fetch(url, {
					...args,
					headers: {
						...(args?.headers || {}),
						"X-Csrf-Token": this.#csrfToken
					}
				})
				.then(async (response) => {
					if (response.status >= 200 && response.status < 300) {
						let successResponse = response;
						const contentType =
							response.headers.get("content-type");
						if (
							contentType &&
							contentType.includes("application/json")
						) {
							successResponse = await response.json();
						}
						resolve(successResponse);
					} else {
						reject(response);
					}
				})
				.catch((err) => reject(err));
		});
	}
}

function initSDK(config: SDKContext): LowcodeSDK {
	return new LowcodeSDK(config);
}

export { window, initSDK as default };
