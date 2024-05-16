export const WelcomePageSecond = () => {


    return(
        <div className="flex-col justify-center items-center h-screen">
            
            <div className=" h-[300px] bg-[#00923D] rounded-br-[30px] rounded-bl-[30px] mb-16"></div>

            <main className=" justify-center items-center">

                <p  className=" text-lg font-bold mx-5 text-[#00923D] mb-2">
                    O que é o Apadrinha
                </p>
                
                <section className="mx-5">
                    O aplicativo Apadrinha Brasil apresenta <br />
                    para padrinhos habilitados crianças,<br />
                    adolescentes e jovens adultos disponíveis <br />
                    ao apadrinhamento e informa suas <br />
                    principais características, gostos e o que mais sonham.

                    <input type="button" value="Continuar" className="bg-[#FFAEC9] w-full rounded-full py-2 my-8 text-[#345040] font-[250px]"/>
                </section>

                
            </main>
            
            
            
        </div>
    )
}