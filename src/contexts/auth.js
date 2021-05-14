import {useState,createContext} from 'react'

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [isClicked, setIsClicked] = useState(true)
    const [isClicked2, setIsClicked2] = useState(false)
    const [isClicked3 , setIsClicked3] = useState(false)
    const [isClicked4, setIsClicked4] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [click, setClick] = useState(false)

    
    function handleToggle(){   
        setClick(!click)
        setToggle(!toggle)
    }

    function closeMenu(e){
        setClick(!click)
        setToggle(!toggle)
        setIsClicked(true)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked4(false) 
    }
    function closeMenu2(e){
        setClick(!click)
        setToggle(!toggle)
        setIsClicked(false)
        setIsClicked2(true)
        setIsClicked3(false)
        setIsClicked4(false) 
    }
    function closeMenu3(e){
        setClick(!click)
        setToggle(!toggle)
        setIsClicked(false)
        setIsClicked2(false)
        setIsClicked3(true)
        setIsClicked4(false) 
    }
    function closeMenu4(e){
        setClick(!click)
        setToggle(!toggle)
        setIsClicked(false)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked4(true) 
    }
    function closeMenuClick(){
        setIsClicked(true)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked4(false) 
    }
    function closeMenuClick2(){
        setIsClicked(false)
        setIsClicked2(true)
        setIsClicked3(false)
        setIsClicked4(false) 
    }
    function closeMenuClick3(){
        setIsClicked(false)
        setIsClicked2(false)
        setIsClicked3(true)
        setIsClicked4(false) 
    }
    function closeMenuClick4(){
        setIsClicked(false)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked4(true) 
    }

    function homebutton(){
        setIsClicked4(true);
        setIsClicked(false)
    }

      return(
     <AuthContext.Provider value={{
    toggle,
    isClicked,
    handleToggle,
    click,
    closeMenu,
    closeMenu2,
    closeMenu3,
    closeMenu4,
    isClicked2,
    isClicked3,
    isClicked4,
    closeMenuClick, closeMenuClick2,closeMenuClick3,closeMenuClick4,
    homebutton

}
}
    >
       {children}
     </AuthContext.Provider>
    )
}
export default AuthProvider