export interface INodeEnv {
    /**
     * Splits a string by a specified character and returns an array.
     *
     * @param  {string} key - The key value of the env variable.
     * @param  {string} [splitCharacter=','] - The character you want to use to split the string.
     * @param  {string[]} defaultVal - If key value wasn't found, use default value
     * @return {string[]}
     * @example import env from '@altus/node-env'
     *
     * // If variable was not found, undefined will be returned.
     * env.get('PORT');
     *
     * // If variable is not found, '3000' will be returned as a string.
     * env.get('PORT', '3000');
     */
    explode(key: string, splitCharacter?: string, defaultVal?: string[]): string[];
    /**
     * Check for the current node environemt.
     *
     * @param {string} name
     * @return {string}
     */
    isNodeEnv(name: string): boolean;
    /**
     * Get or set the NODE_ENV variable.
     *
     * @param  {string} name
     * @return {string}
     */
    nodeEnv(env?: string): string;
    /**
     * Loads an environemt file and merges its values with
     * nodes `process.env` object.
     *
     * @param {string} [file='.env'] - the path to the environemnt file.
     * @param  {boolean} [overWrite=true] - Over write previous existing variables.
     * @return {boolean} - returns a boolean indicating if the file has sucessfully been loaded.
     * @example import env from '@altus/node-env'
     *
     * if (!env.load('.env')) {
     * 	console.log('environment file was not found');
     * }
     */
    load(file?: string, overWrite?: boolean): boolean;
    /**
     * Get or set a environment variable.
     *
     * @param  {string} key - The key of the environment variable.
     * @param {any} [val=] - The value you want to assign to the key.
     * @return {string} - The key's value.
     * @example import env from '@altus/node-env'
     *
     * env.set('APP_NAME', 'Hello world');
     * // This will be set as a string '3000'
     * env.set('PORT', 3000);
     * // This will return as a string 'a,b,c'
     * env.set('LOG', ['a', 'b', 'c']);
     *
     */
    var(key: string, val?: any): string;
}
export declare const env: INodeEnv;
export default env;
