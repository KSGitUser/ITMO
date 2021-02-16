import React from 'react';

const Deg = ({ base: b, exp: e }) => <h1><span>{b}</span><sup>{e}</sup> = {b ** e}</h1>
export default ({ a }) => <ul>{a.map((v, i) => <li key={i}><Deg base={2} exp={v} /></li>)}</ul>