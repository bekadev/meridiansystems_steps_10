const btn = document.querySelector('button');
const click = document.querySelector('.click');

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i === 1) {
        btn.removeEventListener('click', deleteElement);
        console.log("end");
    }
};

btn.addEventListener('click', deleteElement);

const alertText = (e) => {
    console.log(e.target);
};



btn.addEventListener('click', alertText)

click.onclick = () => {
    console.log('hi');
    i++;
    if (i === 1) {
        click.removeEventListener('click', click);
        console.log('a vse');
    }
};

function handler1() {
    alert('Спасибо!');
}

function handler2() {
    alert('Спасибо ещё раз!');
}

elem.onclick = () => alert("Привет");
elem.addEventListener("click", handler1);
elem.addEventListener("click", handler2);