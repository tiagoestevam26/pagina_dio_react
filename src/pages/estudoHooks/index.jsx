/*
    useState: muda o estado de um objeto, aqui ele troca o nome e a idade
    useEffect: define um efeito colateral do codigo
    useMemo: memoriza um dado pra nao ter q renderizar sempre
    useCallback: evita q uma funcao tenha q ser executada sempre
*/


import React, { useCallback, useMemo } from 'react'
import { useState, useEffect } from 'react'

const Teste = () => {
  
  const [ Age, setAge] = useState(19);
  const [ Name, setName] = useState("Tiago");

  const CliqueTesteName = useCallback(() =>{
    console.log('mudou o nome')
    setName(previa=>previa==='Tiago' ? 'Estevam' : 'Tiago')
    })

  const CliqueTesteAge = useCallback(() =>{
    setAge(previa=>previa===19 ? 120 : 19)
    })
  
    const calculo = useMemo(()=> {
        console.log('calculou', Age);
        return 10*Age;
    }, [Age]);

    console.log('renderizou', calculo)


    
    useEffect(()=>{
        alert("Ta mudando de nome hein...")
    },[Name]);
   
  
  return (
    <div>
        <p>{Age}</p>
        <br />
        <p>{Name}</p>
        <button onClick={CliqueTesteAge}>Mudar Idade</button>
        <button onClick={CliqueTesteName}>Mudar Nome</button>
    </div>
  )
}

export {Teste}