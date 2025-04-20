const getStoredBook = ( ) => {
    const storedBookSTR = localStorage.getItem("readList")

    if(storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR)
        return storedBookData
    }
    else{
        return [];
    }
}

const addtoStoreDB =(id)=> {
    const storedBookData = getStoredBook();

    if(storedBookData.includes(id)){
        console.log("hwllow")
        alert("vai ai id already exist")
    }
    else{
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
    }
}

export {addtoStoreDB, getStoredBook};