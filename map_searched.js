window.addEventListener('load', () => {
	const startdate = sessionStorage.getItem('startdate');
    const enddate = sessionStorage.getItem('enddate');
    
    document.getElementById('startdate').innerHTML = startdate;
    document.getElementById('enddate').innerHTML = enddate;

})