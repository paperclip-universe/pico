import nano, { h, render, Component, Store } from "nano-jsx/esm";
import { useState } from "nano-jsx/esm/hooks";
import htm from "htm";

const $ = htm.bind(h);

export default $;
export { render, Component, Store, nano, useState };
