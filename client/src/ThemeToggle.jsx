import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {

    const [theme , setTheme] = useState("light");

const toggleTheme = ()=>{
    setTheme(theme === "light" ? "dark" :"light");

};
useEffect(()=>{

if (theme === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
}
else{
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
}

},[theme])


  return (
    <div style={{textAlign:"center" , padding:"20px"}} >

<button 
onClick={toggleTheme}
style={{
    padding:"10px 20px",
    fontSize:"18px",
    borderRadius:"8px",
    cursor:"pointer",
    backgroundColor:theme ==="light" ? '#333':'#fff',
    color:theme === 'light' ? '#fff' : '#333',
    border:"none"
}}
>
Switch to {theme === "light" ? "dark" : "light"} mode 

</button>



    </div>
  )
}

export default ThemeToggle
