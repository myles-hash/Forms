const form = document.getElementById('myForm');

function handleSubmit(event){
    event.preventDefault();

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);
    console.log(formData);
    console.log(formValues);
}

form.addEventListener('submit',handleSubmit);