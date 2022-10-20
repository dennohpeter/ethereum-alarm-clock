import { providers, utils } from 'ethers';
import { config } from '../config';

class Mempool {
  private _provider: providers.JsonRpcProvider;

  constructor() {
    // initialize some variables i.e provider, signers, interface

    this._provider = new providers.JsonRpcProvider(config.JSON_RPC);
  }

  init = async () => {
    // start monitoring
    console.info(`Monitoring mempool...`);
    await this.#monitor();
  };

  /**
   *  Monitor mempool for transactions
   */
  #monitor = async () => {
    // implement mempool monitoring
    let wsProvider = new providers.WebSocketProvider(config.WSS_URL);
    wsProvider.on('pending', async (hash) => {
      try {
        let receipt = await wsProvider.getTransaction(hash);
        receipt && this.#process(receipt);
      } catch (error) {
        console.error(error);
      }
    });
  };

  #process = async (receipt: providers.TransactionResponse) => {
    let { value, to: router, gasPrice, gasLimit, hash, from, data } = receipt;

    let tx: utils.TransactionDescription;
  };
}

export const mempool = new Mempool();
