/// <reference types="react-scripts" />

declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "development" | "production" | "test"
		PUBLIC_URL: string
		REACT_APP_API_KEY_MAIN: string
		REACT_APP_API_KEY_EXTRA: string
		REACT_APP_HOST: string
	}
}
