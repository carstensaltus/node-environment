declare module NodeEnv {

	export interface Main {
		load(path?: string, overWrite?: boolean): boolean;
		get(key: string, defaultVal?: string): string;
		explode(key: string, character?: string, defaultVal?: Array<string>): Array<string>;
		set(key: string, val: any): void;
	}

}

declare module '@altus/node-environment' {
	var a: NodeEnv.Main;
	export = a;
}
