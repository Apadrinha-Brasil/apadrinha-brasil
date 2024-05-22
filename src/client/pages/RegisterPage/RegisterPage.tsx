import Image from 'next/image';
import apadrinhaLogo from "../../../../public/apadrinha.svg";
import { ComponentProps } from 'react';
export const RegisterPage = () => {
    return(
        <>
        <body>
            <main className='mx-5'>
                <header className='flex justify-center my-5 '>
                <Image
                    src={apadrinhaLogo}
                    alt="Imagem do Apadrinha Brasil"
                    title='Imagem Apadrinha'
                    
    />
                </header>
                <p className='text-[#7A757F]'>
                    Considerando que você é uma madrinha ou 
                    padrinho já declarada(o) habilitada(o) a 
                    apadrinhar, precisamos que nis informe:
                </p>

                <section className='mt-5'>
                    
                <article className='mb-8'>
                    <h3 className='mb-2 font-sans font-medium text-[16px]'>
                        Qual município você mora?
                    </h3>
                    <select className='bg-green-200 w-full h-14' name="" id="" ></select>
                </article>

                <article className='mb-8'>
                    <h3 className='mb-2 font-sans font-medium text-[16px]'>
                            Qual o Programa de Apadrinhamento Afetivo que o permitiu ser habilitado?
                    </h3>
                    <ImputEnable type='text' placeholder='Digite aqui'/>
                </article>

                <article className='mb-8'>
                    <h3 className='mb-2 font-sans font-medium text-[16px]'>
                        Você tem o contato (site, telefone e/ou e-mail) do Programa?
                    </h3>
                    <ImputEnable type='text' placeholder='Digite aqui'/>
                </article>

                <article className='mb-8'>
                    <h3 className='mb-2 font-sans font-medium text-[16px]'>
                    Você passou por um curso preparatório?
                    </h3>
                    <ImputCheckBox/>
                </article>

                <article className='mb-8'>
                    <h3 className='mb-2 font-sans font-medium text-[16px]'>
                    Você passou por uma entrevista com um(a) técnico(a)?
                    </h3>
                    <ImputCheckBox/>
                </article>

                <article className='mb-8'>
                    <h3 className='mb-2 font-sans font-medium text-[16px]'>
                    Pode indicar a data aproximada dessa entrevista?
                    </h3>
                    <ImputEnable type='date' placeholder='Digite aqui'/>               
                </article>

                <article className='mb-8'>
                    <h3 className='mb-2 font-sans font-medium text-[16px]'>
                    Você já apadrinhou alguém?(a)?
                    </h3>
                    <ImputCheckBox/>
                </article>

                <article className='mb-8'>
                    <h3 className='mb-2 font-sans font-medium text-[16px]'>
                    Se sim, por quanto tempo apadrinhou?
                    </h3>
                    <ImputEnable type='text' placeholder='Digite aqui'/>
                </article>

                <article className='mb-8'>
                    <h3 className='mb-2 font-sans font-medium text-[16px]'>
                    O que te leva a querer apadrinhar?
                    </h3>
                    <ImputEnable type='text' placeholder='Digite aqui'/>
                </article>

                <article className='mb-8'>
                    <h3 className='mb-2 font-sans font-medium text-[16px]'>
                    Digite seu e-mail
                    </h3>
                    <ImputEnable type='email' placeholder='Digite aqui'/>             
                </article>

                <article className='mb-8'>
                    <h3 className='mb-2 font-sans font-medium text-[16px]'>
                    Digite seu telefone celular
                    </h3>
                    <ImputEnable type='tel' placeholder='Digite aqui'/>               
                </article>

                <article className='mb-8'>
                    <h3 className='mb-2 font-sans font-medium text-[16px]'>
                    Crie uma senha
                    </h3>
                    <ImputEnable type='password' placeholder='Digite aqui'/> 
                    <span className="text-xs mx-4">*No mínimo 6 caracteres com letras e números</span>              
               
                </article>

                <article className='mb-8'>
                    <h3 className='mb-2 font-sans font-medium text-[16px]'>
                    Confirme a senha
                    </h3>
                    <ImputEnable type='password' placeholder='Digite aqui'/>  
                </article>

                <article className='mb-8'>
                    
                    <article className='flex'>
                        <div className='flex items-center'><input type="checkbox" name="" id="" className='mx-5'/></div>
                        <div><p>Informo que estou de acordo com os <span className='text-[#1D95F8]'>Termos de Uso</span> e a <span className='text-[#1D95F8]'>Política de Privacidade</span>.</p></div>
                    </article>

                </article>
                </section>

                <footer>
                    <input type="button" value="Confirmar dados" className='bg-pink-300 w-full py-2 rounded-full text-green-950 font-semibold mb-14'/>
                </footer>
            </main>
        </body>
        </>
    )
}



interface PropsImput extends ComponentProps<'input'>{}
const ImputEnable = (props:PropsImput) => {
    return(
        <>
             <input type={props.type} className='border border-zinc-600 w-full h-14 rounded-md indent-5 outline-0' placeholder={props.placeholder}/>
             
        </>
    )
}

const ImputCheckBox = (props:PropsImput) => {
    return(
        <>
            <div><input type="radio" name="" id="" className='mx-5' />Sim</div>  <br />
            <div><input type="radio" name="" id="" className='mx-5' />Não</div>
                 
        </>
    )
}