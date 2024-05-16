export const WelcomePage = () => {

    function StartLogin() {
        window.alert("Iniciando Sessão!")
        
    }
    return(
        <div className="flex justify-center items-center bg-gradient-to-b from-pink-200 to-green-200 h-screen">
            
            <main className=" justify-center items-center">
                <div className=" h-[280px] bg-gray-400 my-10
                "></div>
                <h1  className="font-mono text-[30px] font-bold text-center">
                    Apadrinha Brasil
                </h1>
                
                <br />
                
                <p className="text-center">
                    Comheça crianças, adolescentes e jovens <br />
                    adultos disponíveis ao apadrinhamento
                </p>
                <input type="button" value="Começar" className="bg-[#FFAEC9] w-full rounded-full py-2 my-8 text-[#345040] font-[250px]" onClick={StartLogin}/>
            </main>
            
            
            
        </div>
    )
}