declare module NodeEnv {

	export interface Main {
		load(path?: string, overWrite?: boolean): boolean;
		get(key: string, defaultVal: string): string;
		set(key: string, val: any): void;
	}

}

declare module 'node-env' {
	var nodeEnv: NodeEnv.Main;
	export = nodeEnv;
}
