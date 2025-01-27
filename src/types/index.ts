export interface State {
  [stateCode: string]: [number, number];
}

export interface TornadoQuery {
  startDate: string;
  endDate: string;
  states?: string[];
  magnitudes?: string[];
}

export interface Tornado {
  om: string;
  yr: string;
  mo: string;
  dy: string;
  date: string;
  time: string;
  tz: string;
  st: string;
  mag: string;
  inj: string;
  fat: string;
  loss: string;
  closs: string;
  slat: string;
  slon: string;
  elat: string;
  elon: string;
  len: string;
  wid: string;
  ns: string;
  sn: string;
  sg: string;
  f1: string;
  f2: string;
  f3: string;
  f4: string;
  fc: string;
}
