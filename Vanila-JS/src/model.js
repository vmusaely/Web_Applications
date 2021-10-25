import image from './tools/image.jpg';
import { TitleBlock, TextBlock, ImageBlock, ColumnsBlock } from './classes';

const aboutJS = `JavaScript was initially created to “make web pages alive”. 
The programs in this language are called scripts. They can be written right in a web
 page’s HTML and run automatically as the page loads. 
Scripts are provided and executed as plain text. They don’t need special preparation 
or compilation to run.`;

const aboutNode = `<h4>Node.js</h4> As an asynchronous event-driven JavaScript runtime, Node.js is designed
 to build scalable network applications. In the following "hello world" example, many connections
  can be handled concurrently. Upon each connection, the callback is fired, but if there is no work
   to be done, Node.js will sleep.`;

const aboutVue = `<h4>Vue.js</h4> Vue (pronounced /vjuː/, like view) is a progressive framework for building
 user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally
  adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other
   libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated
    Single-Page Applications when used in combination with modern tooling and supporting libraries.`;

const aboutReact = `<h4>React.js</h4> React makes it painless to create interactive UIs. Design simple views for
 each state in your application, and React will efficiently update and render just the right components when 
 your data changes.`;

export const Model = [
    new TitleBlock('title', 'JavaScript', {
        tag: 'h1',
        style: {
            background: 'linear-gradient(to right, #FBD601, #E9CA32)',
            color: '#3C3E57',
            'text-align': 'center'
        }
    }),
    new ImageBlock('image', image, {
        imgStyle: {
            display: 'flex',
            margin: 'auto'
        },
        style: {
            margin: '10px 0',

        }
    }),
    new TitleBlock('title', 'What\'s JavaScript?', {
        tag: 'h3',
        style: {
            color: '#3C3E57'
        }
    }),
    new TextBlock('text', aboutJS, {
        style: {
            color: '#3C3E57',
            'font-size': '24px',
            'font-family': 'cursiv'
        }
    }),
    new ColumnsBlock('columns', [
        aboutNode,
        aboutVue,
        aboutReact
    ], {
        style: {
            color: 'rgba(0, 0, 0, .5)',
            'margin-top': '10px'
        }
    })
]