

const getStoredDataFromLS = () => {

    const storedJobApplication = localStorage.getItem('job-applications')
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveApplicationToLocalStorage = (id) => {

    const storedDataFromLS = getStoredDataFromLS();
    const existsData = storedDataFromLS.find(jobId => jobId === id);
    if(!existsData){
        storedDataFromLS.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedDataFromLS))
    }



}
export { getStoredDataFromLS, saveApplicationToLocalStorage }