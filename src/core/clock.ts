import { Contract, providers, Wallet } from 'ethers';
import { config } from '../config';
import { parseError } from '../helpers';

class AlarmClock {
  provider: providers.JsonRpcProvider;
  constructor() {
    this.provider = new providers.JsonRpcProvider(config.JSON_RPC);
  }

  cancel = async (contractAddress: string) => {
    const contract = new Contract(
      contractAddress,
      [
        {
          inputs: [],
          name: 'cancel',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ],
      new Wallet(config.PRIVATE_KEY, this.provider)
    );

    try {
      let {
        hash,
      }: {
        hash: string;
      } = await contract.cancel();

      return hash;
    } catch (error: any) {
      console.error(error);

      error = parseError(error);

      return error;
    }
  };
}

export const alarmClock = new AlarmClock();
