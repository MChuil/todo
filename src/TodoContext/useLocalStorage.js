import React from "react";

//Hook (siempre inicia con 'use')
function useLocalStorage(itemName, initialValue){
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(()=>{

        setTimeout(()=>{

            try {
            const localStorageItem = localStorage.getItem(itemName)
            let parsedItem;
    
            if(!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
    
            }else{
                parsedItem = JSON.parse(localStorageItem)
            }
            setItem(parsedItem)
            setLoading(false)
            } catch (error) {
            setError(error)
            }

        }, 1000)

    })
    

    const saveItem = (newItem)=>{
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem))
            setItem(newItem)
        } catch (error) {
            setError(error)
        }
    }

    //Regresamo los datos que necesitamos
    return {
        item,
        saveItem,
        loading,
        error
    }
}

export { useLocalStorage }