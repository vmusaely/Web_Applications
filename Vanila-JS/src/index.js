import { type } from 'os';
import { Model } from './model';
import { Site } from './utils';
import { app } from './app';
import './main.css';


const root = new Site('#root')
root.render(Model)
new app('#app', newBlock => {
    Model.push(newBlock);
    root.render(Model)
})

