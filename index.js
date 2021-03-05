function handleSubmit () {
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("START", start);
    sessionStorage.setItem("END", end);

    return;
}