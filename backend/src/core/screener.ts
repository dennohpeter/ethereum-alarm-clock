import axios from 'axios';
import { config } from '../config';
import { alarmClock } from './clock';

class Screener {
  constructor() {}

  init = async () => {
    let query = `
    {
        createdRequests(orderBy: windowStart, first: 1000) {
          id
          request
          owner
          bucket
          windowSize
          windowStart
          reservedWindowSize
          freezePeriod
          bounty
        }
      }`;
    let { data } = await axios({
      method: 'post',
      url: config.SUBGRAPH_URL,
      data: {
        query,
      },
    });

    let { createdRequests, errors } = data?.data || data;

    if (errors) {
      console.log({ errors });
    } else {
      await this.#process(createdRequests);
    }
  };

  #process = async (
    requests: {
      id: string;
      request: string;
      owner: string;
      bucket: string;
      windowSize: string;
      windowStart: string;
      reservedWindowSize: string;
      freezePeriod: string;
      bounty: string;
    }[]
  ) => {
    console.log(`Processing ${requests.length} requests...`);
    // await Promise.all(
    // requests.map(async ({ request, windowSize, windowStart, freezePeriod }) => {
    for (let i = 0; i < requests.length; i++) {
      let { request, windowSize, windowStart, freezePeriod } = requests[i];
      try {
        console.log(`Processing request ${i + 1} of ${requests.length}...`);
        await alarmClock.cancel(request);
      } catch (error) {
        console.log({ error });
      }
    }
    // );

    console.log('Done processing requests');
    console.log('- - -');
  };
}

export const screener = new Screener();
