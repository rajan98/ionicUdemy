const courseNameInput = document.querySelector('#courseName');
const courseRatingInput = document.querySelector('#courseRating');
const addButton = document.querySelector('#btn-add');
const courseList = document.querySelector('#courseList');
const alertCtrl = document.querySelector('ion-alert-controller');

const clear = () => {
    courseNameInput.value = '';
    courseRatingInput.value = '';
}

addButton.addEventListener('click', () => {
    const enteredName = courseNameInput.value;
    const enteredRating = courseRatingInput.value;

    if(enteredName.trim().length <=0 || +enteredRating > 5 || +enteredRating < 1 || enteredRating.length <= 0){
        alertCtrl.create({
            message: 'Please Enter valid Course name and rating!',
            header: 'Invalid Input',
            buttons: ['Okey']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }
    
    const newItem = document.createElement('ion-item');
    newItem.innerHTML = '<b>' + enteredName + '</b> - ' + enteredRating + '/5';
    courseList.appendChild(newItem);
    clear();

});