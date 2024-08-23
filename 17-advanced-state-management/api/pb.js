import Pocketbase from 'pocketbase';

const pb = new Pocketbase(import.meta.env.VITE_PB);

pb.autoCancellation = true;

export default pb;
