declare module NodeEnvironment {

	export interface Main {
		load(path?: string, overWrite?: boolean): boolean;
		get(key: string, defaultVal: string): string;
		set(key: string, val: any): void;
	}

}

declare var nodeEnvironment: NodeEnvironment.Main;
