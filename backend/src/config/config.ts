import 'dotenv/config';

if (!process.env.PRIVATE_KEY) {
  throw new Error('PRIVATE_KEY is not defined and must be set in the .env file');
}

export const config = {
  /**
   * @description PRIVATE_KEY is the private key of the account that will be used to sign transactions
   */
  PRIVATE_KEY: process.env.PRIVATE_KEY!,

  /**
   * @description JSON RPC endpoint
   * @type {string}
   */
  JSON_RPC: process.env.JSON_RPC!,

  /**
   * @description WSS_URL is the websocket endpoint of the WSS  endpoint
   */

  WSS_URL: process.env.WSS_URL!,

  /**
   * @description Explorer URL
   */
  EXPLORER_URL: 'https://etherscan.com',

  /**
   * @description Telegram Bot Token
   */

  BOT_TOKEN: process.env.BOT_TOKEN!,

  /**
   * @description Telegram Chat IDs for users to receive notifications
   * @type {string[]}
   */
  WHITELISTED_USERS: ['251669027'],

  /**
   * @description SUBGRAPH_URL is the URL of the GraphQL endpoint
   * @type {string}
   */
  SUBGRAPH_URL: process.env.SUBGRAPH_URL!,
};
