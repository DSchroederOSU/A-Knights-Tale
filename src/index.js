import _ from 'lodash';
import 'bootstrap';
import './scss/app.scss';

function component() {
    //<div class="container m-0" style="max-width: 100%;">
    let element = document.createElement('div');
    element.classList.add('container');
    element.classList.add('m-0');
    element.style.maxWidth = '100%';

    let banner = document.createElement('div');
    banner.classList.add('row');
    banner.style.backgroundColor = '#747d8c';
    let col1 = document.createElement('div');
    col1.classList.add('col-md-3');
    let col2 = document.createElement('div');
    col2.classList.add('col-md-6');
    col2.classList.add('p-3');
    col2.style.textAlign = 'center';
    let headerText = document.createElement('h1');
    headerText.innerText="ARENA";
    col2.appendChild(headerText);
    let col3 = document.createElement('div');
    col3.classList.add('col-md-3');

    banner.appendChild(col1);
    banner.appendChild(col2);
    banner.appendChild(col3);
    element.appendChild(banner);

    // Lodash, currently included via a script, is required for this line to work
    return element;
}

document.body.appendChild(component());