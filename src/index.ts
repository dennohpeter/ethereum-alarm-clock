import { mempool } from './core';

const Main = async () => {
  console.info(`Starting...\n- - -`);

  mempool.init();
};

Main();
