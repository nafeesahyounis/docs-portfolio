import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import coreApi from "./docs/api/core/sidebar";

const sidebars: SidebarsConfig = {
	guides: [
		{
			type: "category",
			label: "What is Paydock?",
			collapsed: false,
			items: ["getting-started/overview"],
		},
		{
			type: "category",
			label: "Setup your Account Dashboard",
			collapsed: false,
			items: ["web-app/overview", "web-app/access-token"],
		},
		{
			type: "category",
			label: "Add a Payment Service",
			collapsed: false,
			items: [
				{
					type: "category",
					label: "Gateway",
					collapsed: true,
					items: [
						"services/gateway/afterpay",
						"services/gateway/eftpos-online",
						"services/gateway/flypay",
						{
							type: "category",
							label: "Mastercard (MPGS)",
							collapsed: true,
							items: ["services/gateway/mpgs/mpgs", "services/gateway/mpgs/mpgs-apple-pay", "services/gateway/mpgs/mpgs-google-pay"],
						},
						"services/gateway/paypal",
						{
							type: "category",
							label: "Vii",
							collapsed: true,
							items: ["services/gateway/vii/vii-gift-card", "services/gateway/vii/vii-split-payments"],
						},
					],
				},
				{
					type: "category",
					label: "Card Scheme",
					collapsed: true,
					items: ["services/card-scheme/visa-src"],
				},
				{
					type: "category",
					label: "3DS",
					collapsed: true,
					items: ["services/3ds/gpayments"],
				},
				{
					type: "category",
					label: "Fraud",
					collapsed: true,
					items: ["services/fraud/accertify"],
				},
				{
					type: "category",
					label: "Proxy Link",
					collapsed: true,
					items: ["services/proxy-link/booking"],
				},
				{
					type: "category",
					label: "SFTP",
					collapsed: true,
					items: ["services/sftp/internal", "services/sftp/external"],
				},
				{
					type: "category",
					label: "Encryption",
					collapsed: true,
					items: ["services/encryption/pgp"],
				},
			],
		},
		{
			type: "category",
			label: "Integrate your Payment flows",
			collapsed: false,
			items: ["integration/overview"],
		},
	],

	integration: [
		{
			type: "category",
			label: "Getting Started",
			collapsed: false,
			items: ["integration/overview"],
		},
		{
			type: "category",
			label: "Customers",
			collapsed: false,
			items: [
				"integration/customers/overview",
				{
					type: "category",
					label: "Create",
					collapsed: true,
					items: ["integration/customers/create/bank-account", "integration/customers/create/credit-card"],
				},
				{
					type: "category",
					label: "Search",
					collapsed: true,
					items: ["integration/customers/search/id", "integration/customers/search/filter", "integration/customers/search/phrase", "integration/customers/search/pagination-and-sort"],
				},
				{
					type: "category",
					label: "Payment Sources",
					collapsed: true,
					items: ["integration/customers/payment-sources/add-payment-source", "integration/customers/payment-sources/modify-payment-source", "integration/customers/payment-sources/archive-payment-source"],
				},
				"integration/customers/archive",
			],
		},
		{
			type: "category",
			label: "Credit Card",
			collapsed: false,
			items: [
				"integration/credit-card/overview",
				{
					type: "category",
					label: "Guest Checkout",
					collapsed: true,
					items: ["integration/credit-card/guest/direct-charge", "integration/credit-card/guest/pre-auth-capture"],
				},
				{
					type: "category",
					label: "Customer Checkout",
					collapsed: true,
					items: ["integration/credit-card/customer/default-payment-source", "integration/credit-card/customer/new-payment-source", "integration/credit-card/customer/non-default-payment-source"],
				},
			],
		},
		{
			type: "category",
			label: "Credit Card + 3DS",
			collapsed: false,
			items: [
				{
					type: "category",
					label: "Guest Checkout",
					collapsed: true,
					items: ["integration/credit-card-with-3ds/guest/direct-charge", "integration/credit-card/guest/pre-auth-capture"],
				},
				{
					type: "category",
					label: "Customer Checkout",
					collapsed: true,
					items: ["integration/credit-card-with-3ds/customer/default-payment-source", "integration/credit-card/customer/new-payment-source", "integration/credit-card/customer/non-default-payment-source"],
				},
			],
		},
		{
			type: "category",
			label: "Wallet",
			collapsed: false,
			items: ["integration/wallet/overview", "integration/wallet/afterpay", "integration/wallet/apple-pay", "integration/wallet/google-pay", "integration/wallet/paypal", "integration/wallet/zipmoney"],
		},
		{
			type: "category",
			label: "Refund",
			collapsed: false,
			items: ["integration/refund/full", "integration/refund/partial"],
		},
	],

	sdk: [
		{
			type: "category",
			label: "Client-SDK",
			collapsed: true,
			items: ["sdk/client-sdk/index"],
		},
		{
			type: "category",
			label: "Mobile-SDK",
			collapsed: true,
			items: [
				"sdk/mobile-sdk/index",
				{ type: "category", label: "Setup", collapsed: true, items: ["sdk/mobile-sdk/setup/installation", "sdk/mobile-sdk/setup/initialise", "sdk/mobile-sdk/setup/theming"] },
				{
					type: "category",
					label: "Widgets",
					collapsed: true,
					items: ["sdk/mobile-sdk/widgets/threeds", "sdk/mobile-sdk/widgets/giftcard", "sdk/mobile-sdk/widgets/address", "sdk/mobile-sdk/widgets/card", "sdk/mobile-sdk/widgets/mastercard-src"],
				},
				{
					type: "category",
					label: "Digital Wallet Widgets",
					collapsed: true,
					items: ["sdk/mobile-sdk/digital-wallet-widgets/overview", "sdk/mobile-sdk/digital-wallet-widgets/applepay", "sdk/mobile-sdk/digital-wallet-widgets/googlepay", "sdk/mobile-sdk/digital-wallet-widgets/paypal"],
				},
			],
		},
	],

	coreApi,
};

export default sidebars
