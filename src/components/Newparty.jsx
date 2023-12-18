import React from 'react'
import { useState } from 'react'

import {db} from './firebase'
import {ref, set } from "firebase/database";
import {uid} from "uid"
const Newparty = () => {
    const [partyName,setPartyName]=useState('')
    const data = {
        palmtotal: 0,
        soyatotal: 0,
        rasoitotal: 0,
        bibtotal:0,
        mustardtotal:0,
        kandlapalmtotal:0,


        palm15KgTin: 0,
        palm15LtrTin:0,
        palm1LtrPch: 0,
        palm500mlPch:0,

        soya15KgTin:0,
        soya15LtrTin:0,
        soya15LtrJar:0,
        soya5LtrJar:0,
        soya1LtrPet:0,
        soya500mlPet:0,
        soya200mlPet:0,
        soya1LtrPch:0,

        rasoi15KgTin:0,
        rasoi15KgJar:0,
        rasoi15LtrTin:0,
        rasoi15LtrJar:0,
        rasoi1LtrPch:0,
        rasoi500mlPch:0,
 
        bib:0,

        mustard15KgTin:0,
        mustard15LtrTin:0,
        mustard1LtrPch:0,
        mustard1LtrPet:0,
        mustard500mlPet:0,

        kandlapalm15KgTin: 0,
        kandlapalm15LtrTin:0,
        kandlapalm1LtrPch: 0,
        kandlapalm500mlPch:0,
    
      }
      const toMT = {
        palm15KgTin: 15,
        palm15LtrTin:13.5,
        palm1LtrPch: 10.8,
        palm500mlPch:10.8,

        soya15KgTin:15,
        soya15LtrTin:13.5,
        soya15LtrJar:13.5,
        soya5LtrJar:18,
        soya1LtrPet:10.8,
        soya500mlPet:10.8,
        soya200mlPet:10.8,
        soya1LtrPch:10.8,

        rasoi15KgTin:15,
        rasoi15KgJar:15,
        rasoi15LtrTin:13.5,
        rasoi15LtrJar: 13.5,
        rasoi1LtrPch:14.4,
        rasoi500mlPch:14.4,
 
        bib:15,

        mustard15KgTin:15,
        mustard15LtrTin:13.65,
        mustard1LtrPch:10.92,
        mustard1LtrPet:10.92,
        mustard500mlPet:10.92,

        kandlapalm15KgTin: 15,
        kandlapalm15LtrTin:13.5,
        kandlapalm1LtrPch: 9,
        kandlapalm500mlPch:9,
          
      }
    function handleAdd(){
        if(partyName){
            
            set(ref(db, uid()), {
              name:partyName,
              ...data,
            });
            // console.log(detail)
            alert('Added Successfully')
            setPartyName('')
        }else{
            alert('PLEASE ADD PARTY NAME!')
        }
    }
  return (
    <div>
        <label>Name:
            <input placeholder="Party Name" type='text' value={partyName} onChange={(e)=>setPartyName(e.target.value)}></input>
        </label>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Newparty