window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const start = sessionStorage.getItem('START');
    const end = sessionStorage.getItem('END');
    
    document.getElementById('result-start').innerHTML = start;
    document.getElementById('result-end').innerHTML = end;

})