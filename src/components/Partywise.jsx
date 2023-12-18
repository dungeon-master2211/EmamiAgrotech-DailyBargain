import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { ref, onValue,update} from "firebase/database";
import { db } from './firebase';

const Partywise = () => {
    const [selectedParty,setSelectedParty]=useState('')
    const [allParties,setAllParties] = useState([])
    const [showHaldia,setShowHaldia] = useState(true)
    const [showKandla,setShowKandla] = useState(false)
    const [showData,setShowData] = useState(false)
    const [allTotal,setAllTotal] = useState([])
    const [formData,setFormData] = useState({palmtotal: 0,
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
  })
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

    const[haldiaView,setHaldiaView] = useState([])
    const [kandlaView,setKandlaView] = useState([])
    useEffect(()=>{
      const starCountRef = ref(db);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        let partyList = []
        for(const e in data){
          partyList.push({id:e,...data[e]})
        }
        const qtyTotal = {
          palmTotal: 0,
          soyaTotal: 0,
          rasoiTotal: 0,
          bibTotal: 0,
          mustardTotal: 0,
          kandlaPalmTotal: 0
        }
        partyList.forEach(item=>{
          qtyTotal.palmTotal+=item.palmtotal
          qtyTotal.soyaTotal+=item.soyatotal
          qtyTotal.rasoiTotal+=item.rasoitotal
          qtyTotal.bibTotal+=item.bibtotal
          qtyTotal.mustardTotal+=item.mustardtotal
          qtyTotal.kandlaPalmTotal+=item.kandlapalmtotal
        })
        const allSkuTotals=[]
        for(const item in qtyTotal){
          const ele = item.toString().toUpperCase()
          allSkuTotals.push(<h4>{ele}:{qtyTotal[item]}</h4>)
        }

        setAllTotal([...allSkuTotals])
        console.log(partyList)
        setAllParties(partyList)
      });
    },[selectedParty])

    const options = allParties.map(item=>(
      <option value={item.id} key={item.id}>{item.name}</option> 
    ))

    function selectParty(e){
        const id = e.target.value
        if(id){
          const starCountRef = ref(db,`${id}`);
          onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setSelectedParty({id,...data})
            console.log({id,...data})
          })
        }else{
          setSelectedParty('')
        }

    }
    function showHaldiaForm(){
      setShowHaldia(true)
      setShowKandla(false)
      setShowData(false)
    }
    function showKandlaForm(){
      setShowHaldia(false)
      setShowKandla(true)
      setShowData(false)
    }
    function showView(){
      const hV=[] //hV - haldia View
      const kV=[]
      for(const item in selectedParty){
        const ele = item.toString()
        if(ele.startsWith('palm') && ele!=='palmtotal') hV.push(<h4>{item}:{selectedParty[item]}</h4>)
        else if(ele.startsWith('soya') && ele!=='soyatotal') hV.push(<h4>{item}:{selectedParty[item]}</h4>)
        else if(ele.startsWith('rasoi') && ele!=='rasoitotal') hV.push(<h4>{item}:{selectedParty[item]}</h4>)
        else if(ele.startsWith('bib') && ele!=='bibtotal') hV.push(<h4>{item}:{selectedParty[item]}</h4>)
        else if(ele.startsWith('mustard') && ele!=='mustardtotal') hV.push(<h4>{item}:{selectedParty[item]}</h4>)
        else if(ele.startsWith('kandla') && !ele.includes('total')) kV.push(<h4>{item}:{selectedParty[item]}</h4>)
      }
      
      setHaldiaView([...hV])
      setKandlaView([...kV])
      console.log(haldiaView)
      console.log(kandlaView)
      setShowHaldia(false)
      setShowKandla(false)
      setShowData(true)

    }
    function handlePalm(e){
      setFormData({...formData,[e.target.name]:parseInt(e.target.value)})
      console.log(formData)
    }
    function updateData(){
      const oldData = {...selectedParty}
      console.log(oldData,'efore')
      for(const item in formData){
        if(!item.toString().includes('total'))oldData[item]+=formData[item]*toMT[item]
        else oldData[item] = 0
      }
      
      for(const item in oldData){
        const ele = item.toString()
        if(ele.startsWith('palm') && ele!=='palmtotal') oldData.palmtotal+=oldData[item]
        else if(ele.startsWith('soya') && ele!=='soyatotal') oldData.soyatotal+=oldData[item]
        else if(ele.startsWith('rasoi') && ele!=='rasoitotal') oldData.rasoitotal+=oldData[item]
        else if(ele.startsWith('mustard') && ele!=='mustardtotal') oldData.mustardtotal+=oldData[item]
        else if(ele.startsWith('bib') && ele!=='bibtotal') oldData.bibtotal+=oldData[item]
        else if(ele.startsWith('kandla') && ele!=='kandlapalmtotal') oldData.kandlapalmtotal+=oldData[item]
      }
      console.log(oldData)
      setSelectedParty({...oldData})
      setFormData({...data})
      update(ref(db,`${oldData.id}`),{
        ...oldData
      })
      alert('ADDED SUCCESSFULLY')
    }

    function resetData(){
      update(ref(db,`${selectedParty.id}`),{
        ...data
      })
      setSelectedParty({...data})
      alert('DATA RESET')
    }
    
  return (
    <div>
        <div className="header-partywise">
          <select onChange={(e)=>selectParty(e)}>
            <option value=''>Select Party</option>
            {options}
          </select>
          {selectedParty && <button onClick={resetData}>RESET</button>}
        </div>
        
        {selectedParty?<div>
          <div className='btnGrp'>
            <button onClick={showHaldiaForm}>Haldia</button>
            <button onClick={showKandlaForm}>Kandla</button>
            <button onClick={showView}>View</button>
          </div>
          {showHaldia && 
            <section className='haldia-form'>
              <h1>Haldia</h1>
              <h4>Palm</h4>
        <form>
          <label>
            15KgTin:
            <input type="number" name="palm15KgTin" value={formData.palm15KgTin} onChange={(e) => handlePalm(e)} />
          </label>
          <label>
            15LtrTin:
            <input type="number" value={formData.palm15LtrTin} onChange={(e) => handlePalm(e)} name="palm15LtrTin" />
          </label>
          <label>
            1 Ltr Pch:
            <input type="number" value={formData.palm1LtrPch} onChange={(e) => handlePalm(e)} name="palm1LtrPch" />
          </label>
          <label>
            500ml Pch:
            <input type="number" value={formData.palm500mlPch} onChange={(e) => handlePalm(e)} name="palm500mlPch" />
          </label>
        </form>
  
        <h4>Soya</h4>
        <form>
          <label>
            15KgTin:
            <input type="number" value={formData.soya15KgTin} onChange={(e) => handlePalm(e)} name="soya15KgTin" />
          </label>
          <label>
            15LtrTin/Jar:
            <input type="number" value={formData.soya15LtrTin} onChange={(e) => handlePalm(e)} name="soya15LtrTin" />
          </label>
          {/* <label>
            15 Ltr Jar:
            <input type="number" value={formData.soya15LtrJar.qty} onChange={(e) => handlePalm(e)} name="soya15LtrJar" />
          </label> */}
          <label>
            5 Ltr Jar:
            <input type="number" value={formData.soya5LtrJar} onChange={(e) => handlePalm(e)} name="soya5LtrJar" />
          </label>
          <label>
            1 Ltr Pet:
            <input type="number" value={formData.soya1LtrPet} onChange={(e) => handlePalm(e)} name="soya1LtrPet" />
          </label>
          <label>
            1 Ltr Pch:
            <input type="number" value={formData.soya1LtrPch} onChange={(e) => handlePalm(e)} name="soya1LtrPch" />
          </label>
          <label>
            500ml Pet:
            <input type="number" value={formData.soya500mlPet} onChange={(e) => handlePalm(e)} name="soya500mlPet" />
          </label>
          <label>
            200ml Pet:
            <input type="number" value={formData.soya200mlPet} onChange={(e) => handlePalm(e)} name="soya200mlPet" />
          </label>
          
        </form>
  
        <h4>Rasoi</h4>
        <form>
          <label>
            15KgTin/Jar:
            <input type="number" value={formData.rasoi15KgTin} onChange={(e) => handlePalm(e)} name="rasoi15KgTin" />
          </label>
          {/* <label>
            15 Kg Jar:
            <input type="number" value={formData.rasoi15KgJar.qty} onChange={(e) => handlePalm(e)} name="rasoi15KgJar" />
          </label> */}
          <label>
            15LtrTin/Jar:
            <input type="number" value={formData.rasoi15LtrTin} onChange={(e) => handlePalm(e)} name="rasoi15LtrTin" />
          </label>
          {/* <label>
            15 Ltr Jar:
            <input type="number" value={formData.rasoi15LtrJar.qty} onChange={(e) => handlePalm(e)} name="rasoi15LtrJar" />
          </label> */}
          <label>
            1 Ltr Pch:
            <input type="number" value={formData.rasoi1LtrPch} onChange={(e) => handlePalm(e)} name="rasoi1LtrPch" />
          </label>
          <label>
            500ml Pch:
            <input type="number" value={formData.rasoi500mlPch} onChange={(e) => handlePalm(e)} name="rasoi500mlPch" />
          </label>
          <h4>BiB</h4>
          <label>
            15KG Bib:
            <input type="number" value={formData.bib} onChange={(e) => handlePalm(e)} name="bib" />
          </label>
  
        </form>
  
        <h4>Mustard</h4>
        <form>
          <label>
            15KgTin:
            <input type="number" value={formData.mustard15KgTin} onChange={(e) => handlePalm(e)} name="mustard15KgTin" />
          </label>
          <label>
            15LtrTin/Jar:
            <input type="number" value={formData.mustard15LtrTin} onChange={(e) => handlePalm(e)} name="mustard15LtrTin" />
          </label>
          <label>
            1 Ltr Pch:
            <input type="number" value={formData.mustard1LtrPch} onChange={(e) => handlePalm(e)} name="mustard1LtrPch" />
          </label>
          <label>
            1 Ltr Pet:
            <input type="number" value={formData.mustard1LtrPet} onChange={(e) => handlePalm(e)} name="mustard1LtrPet" />
          </label>
          <label>
            500ml Pet:
            <input type="number" value={formData.mustard500mlPet} onChange={(e) => handlePalm(e)} name="mustard500mlPet" />
          </label>
          
  
        </form>
        <button onClick={updateData}>Add</button>
            </section>}
          {showKandla && <section className='kandla-form'>
            <h1>Kandla</h1>

            <h4>Kandla Palm</h4>
            <form>
            <label>
                15KgTin:
                <input type="number" name="kandlapalm15KgTin" value={formData.kandlapalm15KgTin} onChange={(e) => handlePalm(e)} />
            </label>
            <label>
                15LtrTin:
                <input type="number" value={formData.kandlapalm15LtrTin} onChange={(e) => handlePalm(e)} name="kandlapalm15LtrTin" />
            </label>
            <label>
                1 Ltr Pch:
                <input type="number" value={formData.kandlapalm1LtrPch} onChange={(e) => handlePalm(e)} name="kandlapalm1LtrPch" />
            </label>
            <label>
                500ml Pch:
                <input type="number" value={formData.kandlapalm500mlPch} onChange={(e) => handlePalm(e)} name="kandlapalm500mlPch" />
            </label>
            </form>
            <button onClick={updateData}>Add</button>
        </section>}
          {showData && <section>

              <div className='card-holder'>
                <div className='total-card'>
                  <h2>Haldia</h2>
                  <h3>Palm: {selectedParty.palmtotal}</h3>
                  <h3>Soya: {selectedParty.soyatotal}</h3>
                  <h3>Rasoi: {selectedParty.rasoitotal}</h3>
                  <h3>BiB: {selectedParty.bibtotal}</h3>
                  <h3>Mustard: {selectedParty.mustardtotal}</h3>
                </div>
                <div className='total-card'>
                  <h2>Kandla</h2>
                  <h3>Palm: {selectedParty.kandlapalmtotal}</h3>
                </div>
              </div>
              <details>
                <summary>Haldia</summary>
                {haldiaView}
              </details>

              <details>
                <summary>Kandla</summary>
                {kandlaView}
              </details>
            </section>}
        </div>:<div className='allTotal'>
          {allTotal}
          </div>}
        

    </div>
  )
}

export default Partywise