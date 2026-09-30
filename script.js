let students = [
    {id: 1, name: 'Mark Dariel Bascuguin', program: 'BSIT - 3A'},
    {id: 2, name: 'John Ramwell Dimazana', program: 'BSIT - 3A'},
    {id: 3, name: 'Dylan Supilanas', program: 'BSIT - 3A'},
    {id: 4, name: 'Marvin Consigo', program: 'BSIT - 3A'},
    {id: 5, name: 'Anthony Lawrence Aviles', program: 'BSIT - 3A'}
];

const createListItem = (student) => {
    /* Create Element */
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');

    /* Add Value */
    h2.innerText = student.name;
    p.innerText = student.program;
    button.innerText = 'Delete'
    button.addEventListener ('click', () => {
        const newStudents = students.filter((s) => s.id !== student.id);
        students = newStudents;
        displayList();
    });

    /* Add Class */
    article.classList.add('list-item')

    /* Insert */
    article.append(h2);
    article.append(p);
    article.append(button);
    
    
    return article;
}

const list = document.querySelector('#studentList');

const displayList = () => {
    list.replaceChildren();
const studentList = students.map((s) => createListItem(s));
studentList.forEach((s) => list.append(s));

}

displayList();

const form = document.querySelector('#studentForm');
const nameField = document.querySelector('#name');
const programField = document.querySelector('#program');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameField.value;
    const program = programField.value;
    const newStudent = {
        id: students.length + 1,
        name,
        program
    }



    students.push(newStudent);
    nameField.value = '';
    programField.value = '';
    displayList();
    

});