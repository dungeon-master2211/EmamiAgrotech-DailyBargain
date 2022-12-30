import React from 'react'
import { useEffect, useState } from 'react';
const Haldia = () => {
    const [wp,setWp]=useState('')
    const [bargain,setBargain] = useState({})
    const [total,setTotal]=useState({
      palmtotal:0,
      palmbp:0,
      palmcp:0,
      soyatotal:0,
      soyabp:0,
      soyacp:0,
      rasoitotal:0,
      rasoibp:0,
      rasoicp:0,
      bibtotal:0,
      mustardtotal:0,
      mustardbp:0,
      mustardcp:0
    })
    const data = {
        palmtotal: 0,
        soyatotal: 0,
        rasoitotal: 0,
        bibtotal:0,
        mustardtotal:0,
        palm15KgTin: {
          qty: 0,
          toMT: 15
        },
        palm15LtrTin: {
          qty: 0,
          toMT: 13.5
        },
        palm1LtrPch: {
          qty: 0,
          toMT: 10.8
        },
        palm500mlPch: {
          qty: 0,
          toMT: 10.8
        },
        soya15KgTin: {
          qty: 0,
          toMT: 15
        },
        soya15LtrTin: {
          qty: 0,
          toMT: 13.5
        },
        soya15LtrJar: {
          qty: 0,
          toMT: 13.5
        },
        soya5LtrJar: {
          qty: 0,
          toMT: 18
        },
        soya1LtrPet: {
          qty: 0,
          toMT: 10.8
        },
        soya500mlPet: {
          qty: 0,
          toMT: 10.8
        },
        soya200mlPet: {
          qty: 0,
          toMT: 10.8
        },
        soya1LtrPch: {
          qty: 0,
          toMT: 10.8
        },
        rasoi15KgTin: {
          qty: 0,
          toMT: 15
        },
        rasoi15KgJar: {
          qty: 0,
          toMT: 15
        },
        rasoi15LtrTin: {
          qty: 0,
          toMT: 13.5
        },
        rasoi15LtrJar: {
          qty: 0,
          toMT: 13.5
        },
        rasoi1LtrPch: {
          qty: 0,
          toMT: 14.4
        },
        rasoi500mlPch: {
          qty: 0,
          toMT: 14.4
        },
        bib: {
          qty: 0,
          toMT: 15
        },
        mustard15KgTin:{
          qty:0,
          toMT:15
        },
        mustard15LtrTin:{
          qty:0,
          toMT:13.65
        },
        mustard1LtrPch:{
          qty:0,
          toMT:10.92
        },
        mustard1LtrPet:{
          qty:0,
          toMT:10.92
        },
        mustard500mlPet:{
          qty:0,
          toMT:10.92
        }
    
      }
    const [formData,setFormData] = useState({
      palmtotal: 0,
      soyatotal: 0,
      rasoitotal: 0,
      bibtotal:0,
      mustardtotal:0,
      palm15KgTin: {
        qty: 0,
        toMT: 15
      },
      palm15LtrTin: {
        qty: 0,
        toMT: 13.5
      },
      palm1LtrPch: {
        qty: 0,
        toMT: 10.8
      },
      palm500mlPch: {
        qty: 0,
        toMT: 10.8
      },
      soya15KgTin: {
        qty: 0,
        toMT: 15
      },
      soya15LtrTin: {
        qty: 0,
        toMT: 13.5
      },
      soya15LtrJar: {
        qty: 0,
        toMT: 13.5
      },
      soya5LtrJar: {
        qty: 0,
        toMT: 18
      },
      soya1LtrPet: {
        qty: 0,
        toMT: 10.8
      },
      soya500mlPet: {
        qty: 0,
        toMT: 10.8
      },
      soya200mlPet: {
        qty: 0,
        toMT: 10.8
      },
      soya1LtrPch: {
        qty: 0,
        toMT: 10.8
      },
      rasoi15KgTin: {
        qty: 0,
        toMT: 15
      },
      rasoi15KgJar: {
        qty: 0,
        toMT: 15
      },
      rasoi15LtrTin: {
        qty: 0,
        toMT: 13.5
      },
      rasoi15LtrJar: {
        qty: 0,
        toMT: 13.5
      },
      rasoi1LtrPch: {
        qty: 0,
        toMT: 14.4
      },
      rasoi500mlPch: {
        qty: 0,
        toMT: 14.4
      },
      bib: {
        qty: 0,
        toMT: 15
      },
      mustard15KgTin:{
        qty:0,
        toMT:15
      },
      mustard15LtrTin:{
        qty:0,
        toMT:13.65
      },
      mustard1LtrPch:{
        qty:0,
        toMT:10.92
      },
      mustard1LtrPet:{
        qty:0,
        toMT:10.92
      },
      mustard500mlPet:{
        qty:0,
        toMT:10.92
      }
  
    })
  
    
    useEffect(()=>{
      let storageData = localStorage.getItem('bargain')
      if(storageData){
        const data = JSON.parse(storageData)
        const totals={palmtotal:0,
          palmbp:0,
          palmcp:0,
          soyatotal:0,
          soyabp:0,
          soyacp:0,
          rasoitotal:0,
          rasoibp:0,
          rasoicp:0,
          bibtotal:0,
          mustardtotal:0,
          mustardbp:0,
          mustardcp:0}
        for(const e in data){
          if(e.toString()==='palmtotal'){
            totals.palmtotal=data[e]
          }else if(e.toString()==='soyatotal'){
            totals.soyatotal=data[e]
          }else if(e.toString()==='rasoitotal'){
            totals.rasoitotal=data[e]
          }else if(e.toString()==='bibtotal'){
            totals.bibtotal=data[e]
          }else if(e.toString()==='mustardtotal'){
            totals.mustardtotal=data[e]
          }
          if(e.toString().startsWith('palm15') && !e.toString().endsWith('total')){
          if(!isNaN(data[e].qty)){totals.palmbp+=(data[e].qty*data[e].toMT)}
        }
        if(e.toString().startsWith('palm') && !e.toString().startsWith('palm15') && !e.toString().endsWith('total')){
          if(!isNaN(data[e].qty)){totals.palmcp+=(data[e].qty*data[e].toMT)}
        }
        if(e.toString().startsWith('soya15') && !e.toString().endsWith('total')){
          if(!isNaN(data[e].qty)){totals.soyabp+=(data[e].qty*data[e].toMT)}
        }
        if(e.toString().startsWith('soya') && !e.toString().startsWith('soya15') && !e.toString().endsWith('total')){
          if(!isNaN(data[e].qty)){totals.soyacp+=(data[e].qty*data[e].toMT)}
        }
        if(e.toString().startsWith('rasoi15') && !e.toString().endsWith('total')){
          if(!isNaN(data[e].qty)){totals.rasoibp+=(data[e].qty*data[e].toMT)}
        }
        if(e.toString().startsWith('rasoi') && !e.toString().startsWith('rasoi15') && !e.toString().endsWith('total')){
          if(!isNaN(data[e].qty)){totals.rasoicp+=(data[e].qty*data[e].toMT)}
        }
        if(e.toString().startsWith('mustard15') && !e.toString().endsWith('total')){
          if(!isNaN(data[e].qty)){totals.mustardbp+=(data[e].qty*data[e].toMT)}
        }
        if(e.toString().startsWith('mustard') && !e.toString().startsWith('mustard15') && !e.toString().endsWith('total')){
          if(!isNaN(data[e].qty)){totals.mustardcp+=(data[e].qty*data[e].toMT)}
        }
        }
        setTotal({...totals})
        setBargain({...data})
      }else{
        const data = {
          palmtotal: 0,
          soyatotal: 0,
          rasoitotal: 0,
          bibtotal:0,
          mustardtotal:0,
          palm15KgTin: {
            qty: 0,
            toMT: 15
          },
          palm15LtrTin: {
            qty: 0,
            toMT: 13.5
          },
          palm1LtrPch: {
            qty: 0,
            toMT: 10.8
          },
          palm500mlPch: {
            qty: 0,
            toMT: 10.8
          },
          soya15KgTin: {
            qty: 0,
            toMT: 15
          },
          soya15LtrTin: {
            qty: 0,
            toMT: 13.5
          },
          soya15LtrJar: {
            qty: 0,
            toMT: 13.5
          },
          soya5LtrJar: {
            qty: 0,
            toMT: 18
          },
          soya1LtrPet: {
            qty: 0,
            toMT: 10.8
          },
          soya500mlPet: {
            qty: 0,
            toMT: 10.8
          },
          soya200mlPet: {
            qty: 0,
            toMT: 10.8
          },
          soya1LtrPch: {
            qty: 0,
            toMT: 10.8
          },
          rasoi15KgTin: {
            qty: 0,
            toMT: 15
          },
          rasoi15KgJar: {
            qty: 0,
            toMT: 15
          },
          rasoi15LtrTin: {
            qty: 0,
            toMT: 13.5
          },
          rasoi15LtrJar: {
            qty: 0,
            toMT: 13.5
          },
          rasoi1LtrPch: {
            qty: 0,
            toMT: 14.4
          },
          rasoi500mlPch: {
            qty: 0,
            toMT: 14.4
          },
          bib: {
            qty: 0,
            toMT: 15
          },
          mustard15KgTin:{
            qty:0,
            toMT:15
          },
          mustard15LtrTin:{
            qty:0,
            toMT:13.65
          },
          mustard1LtrPch:{
            qty:0,
            toMT:10.92
          },
          mustard1LtrPet:{
            qty:0,
            toMT:10.92
          },
          mustard500mlPet:{
            qty:0,
            toMT:10.92
          }
      
        }
        const initialTotal = {
          palmtotal:0,
          palmbp:0,
          palmcp:0,
          soyatotal:0,
          soyabp:0,
          soyacp:0,
          rasoitotal:0,
          rasoibp:0,
          rasoicp:0,
          bibtotal:0,
          mustardtotal:0,
          mustardbp:0,
          mustardcp:0
  
        }
        setTotal({...initialTotal})
        setBargain({...data})
      }
    },[])
    function handlePalm(e) {
      let val = formData[e.target.name]
      val.qty=isNaN(e.target.value)?0:parseInt(e.target.value)
      setFormData({ ...formData, [e.target.name]: val })
      // console.log(formData)
    }
  
    function handleReset(){
      setBargain({...data})
      setTotal({palmtotal:0,
        palmbp:0,
        palmcp:0,
        soyatotal:0,
        soyabp:0,
        soyacp:0,
        rasoitotal:0,
        rasoibp:0,
        rasoicp:0,
        bibtotal:0,
        mustardtotal:0,
        mustardbp:0,
        mustardcp:0})
      localStorage.removeItem('bargain')
      setWp('')
      alert("RESET SUCCESSFUL")
    }
  
    function handleUpdate(){
      const newData = {...formData}
      const totals={palmtotal:0,
        palmbp:0,
        palmcp:0,
        soyatotal:0,
        soyabp:0,
        soyacp:0,
        rasoitotal:0,
        rasoibp:0,
        rasoicp:0,
        bibtotal:0,
        mustardtotal:0,
        mustardbp:0,
        mustardcp:0}
      for(const e in newData){
        if(e.toString().startsWith('palm') && !e.toString().endsWith('total')){
          if(!isNaN(newData[e].qty)){
          newData[e].qty+=bargain[e].qty
          newData.palmtotal+=(newData[e].qty*newData[e].toMT)
          totals.palmtotal+=(newData[e].qty*newData[e].toMT)
          }
        }else if(e.toString().startsWith('soya') && !e.toString().endsWith('total')){
          if(!isNaN(newData[e].qty)){newData[e].qty+=bargain[e].qty
          newData.soyatotal+=(newData[e].qty*newData[e].toMT)
          totals.soyatotal+=(newData[e].qty*newData[e].toMT)}
        }else if(e.toString().startsWith('rasoi') && !e.toString().endsWith('total')){
          if(!isNaN(newData[e].qty)){newData[e].qty+=bargain[e].qty
          newData.rasoitotal+=(newData[e].qty*newData[e].toMT)
          totals.rasoitotal+=(newData[e].qty*newData[e].toMT)}
        }else if(e.toString().startsWith('bib') && !e.toString().endsWith('total')){
          if(!isNaN(newData[e].qty)){newData[e].qty+=bargain[e].qty
          newData.bibtotal+=(newData[e].qty*newData[e].toMT)
          totals.bibtotal+=(newData[e].qty*newData[e].toMT)}
        }else if(e.toString().startsWith('mustard') && !e.toString().endsWith('total')){
          if(!isNaN(newData[e].qty)){newData[e].qty+=bargain[e].qty
          newData.mustardtotal+=(newData[e].qty*newData[e].toMT)
          totals.mustardtotal+=(newData[e].qty*newData[e].toMT)}
        }
        if(e.toString().startsWith('palm15') && !e.toString().endsWith('total')){
          if(!isNaN(newData[e].qty)){totals.palmbp+=(newData[e].qty*newData[e].toMT)}
        }
        if(e.toString().startsWith('palm') && !e.toString().startsWith('palm15') && !e.toString().endsWith('total')){
          if(!isNaN(newData[e].qty)){totals.palmcp+=(newData[e].qty*newData[e].toMT)}
        }
        if(e.toString().startsWith('soya15') && !e.toString().endsWith('total')){
          if(!isNaN(newData[e].qty)){totals.soyabp+=(newData[e].qty*newData[e].toMT)}
        }
        if(e.toString().startsWith('soya') && !e.toString().startsWith('soya15') && !e.toString().endsWith('total')){
          if(!isNaN(newData[e].qty)){totals.soyacp+=(newData[e].qty*newData[e].toMT)}
        }
        if(e.toString().startsWith('rasoi15') && !e.toString().endsWith('total')){
          if(!isNaN(newData[e].qty)){totals.rasoibp+=(newData[e].qty*newData[e].toMT)}
        }
        if(e.toString().startsWith('rasoi') && !e.toString().startsWith('rasoi15') && !e.toString().endsWith('total')){
          if(!isNaN(newData[e].qty)){totals.rasoicp+=(newData[e].qty*newData[e].toMT)}
        }
        if(e.toString().startsWith('mustard15') && !e.toString().endsWith('total')){
          if(!isNaN(newData[e].qty)){totals.mustardbp+=(newData[e].qty*newData[e].toMT)}
        }
        if(e.toString().startsWith('mustard') && !e.toString().startsWith('mustard15') && !e.toString().endsWith('total')){
          if(!isNaN(newData[e].qty)){totals.mustardcp+=(newData[e].qty*newData[e].toMT)}
        }
       }
  
       console.log(newData)
       setBargain({...newData})
       setFormData({...data})
       setTotal({...totals})
       localStorage.setItem('bargain',JSON.stringify(newData))
       alert("ADDED SUCCESSFULLY")
    }
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
    function copyData(){
      const time=new Date().toLocaleTimeString()
      const text ='Till '+time.slice(0,5)+' '+time.slice(9,11)+ '%0a Palm : '+(total.palmtotal)/1000 +'MT %0a Soya :'+ (total.soyatotal)/1000 +'MT%0a Rasoi :'+ (total.rasoitotal)/1000 +'MT%0a Bib :'+ (total.bibtotal)/1000+' MT%0a KGMO : '+(total.mustardtotal)/1000+'MT'
      // navigator.clipboard.writeText(text).then(() => {
      //   alert("successfully copied");
      // })
      // .catch(() => {
      //   alert("something went wrong");
      // });
      // copyTextToClipboard(text)
      console.log(text)
      setWp(text)
      alert('DATA COPIED')
      
    }
    return (
      <div className="App">
        <h1>Haldia</h1>
       <h4>Palm: {total.palmtotal}</h4>
       <h5>Palm-BP: {total.palmbp}</h5>
       <h5>Palm-CP: {total.palmcp}</h5>
      <hr></hr>
       <h4>Soya: {total.soyatotal}</h4>
       <h5>Soya-BP: {total.soyabp}</h5>
       <h5>Soya-CP: {total.soyacp}</h5>
       <hr></hr>
       <h4>Rasoi: {total.rasoitotal}</h4>
       <h5>Rasoi-BP:{total.rasoibp}</h5>
       <h5>Rasoi-CP: {total.rasoicp}</h5>
       <hr></hr>
       <h4>Bib: {total.bibtotal}</h4>
       <hr></hr>
       <h4>Mustard: {total.mustardtotal}</h4>
       <h5>Mustard-BP:{total.mustardbp}</h5>
       <h5>Mustard-CP: {total.mustardcp}</h5>
       <hr></hr>
  
      <button onClick={()=>{copyData()}}>Copy</button>
      <a href={`whatsapp://send?text=${wp}`}>Send to Whatsapp</a>
       <hr></hr>
  
      <section>
      <h4>Palm</h4>
        <form>
          <label>
            15KgTin:
            <input type="number" name="palm15KgTin" value={formData.palm15KgTin.qty} onChange={(e) => handlePalm(e)} />
          </label>
          <label>
            15LtrTin:
            <input type="number" value={formData.palm15LtrTin.qty} onChange={(e) => handlePalm(e)} name="palm15LtrTin" />
          </label>
          <label>
            1 Ltr Pch:
            <input type="number" value={formData.palm1LtrPch.qty} onChange={(e) => handlePalm(e)} name="palm1LtrPch" />
          </label>
          <label>
            500ml Pch:
            <input type="number" value={formData.palm500mlPch.qty} onChange={(e) => handlePalm(e)} name="palm500mlPch" />
          </label>
        </form>
  
        <h4>Soya</h4>
        <form>
          <label>
            15KgTin:
            <input type="number" value={formData.soya15KgTin.qty} onChange={(e) => handlePalm(e)} name="soya15KgTin" />
          </label>
          <label>
            15LtrTin/Jar:
            <input type="number" value={formData.soya15LtrTin.qty} onChange={(e) => handlePalm(e)} name="soya15LtrTin" />
          </label>
          {/* <label>
            15 Ltr Jar:
            <input type="number" value={formData.soya15LtrJar.qty} onChange={(e) => handlePalm(e)} name="soya15LtrJar" />
          </label> */}
          <label>
            5 Ltr Jar:
            <input type="number" value={formData.soya5LtrJar.qty} onChange={(e) => handlePalm(e)} name="soya5LtrJar" />
          </label>
          <label>
            1 Ltr Pet:
            <input type="number" value={formData.soya1LtrPet.qty} onChange={(e) => handlePalm(e)} name="soya1LtrPet" />
          </label>
          <label>
            1 Ltr Pch:
            <input type="number" value={formData.soya1LtrPch.qty} onChange={(e) => handlePalm(e)} name="soya1LtrPch" />
          </label>
          <label>
            500ml Pet:
            <input type="number" value={formData.soya500mlPet.qty} onChange={(e) => handlePalm(e)} name="soya500mlPet" />
          </label>
          <label>
            200ml Pet:
            <input type="number" value={formData.soya200mlPet.qty} onChange={(e) => handlePalm(e)} name="soya200mlPet" />
          </label>
          
        </form>
  
        <h4>Rasoi</h4>
        <form>
          <label>
            15KgTin/Jar:
            <input type="number" value={formData.rasoi15KgTin.qty} onChange={(e) => handlePalm(e)} name="rasoi15KgTin" />
          </label>
          {/* <label>
            15 Kg Jar:
            <input type="number" value={formData.rasoi15KgJar.qty} onChange={(e) => handlePalm(e)} name="rasoi15KgJar" />
          </label> */}
          <label>
            15LtrTin/Jar:
            <input type="number" value={formData.rasoi15LtrTin.qty} onChange={(e) => handlePalm(e)} name="rasoi15LtrTin" />
          </label>
          {/* <label>
            15 Ltr Jar:
            <input type="number" value={formData.rasoi15LtrJar.qty} onChange={(e) => handlePalm(e)} name="rasoi15LtrJar" />
          </label> */}
          <label>
            1 Ltr Pch:
            <input type="number" value={formData.rasoi1LtrPch.qty} onChange={(e) => handlePalm(e)} name="rasoi1LtrPch" />
          </label>
          <label>
            500ml Pch:
            <input type="number" value={formData.rasoi500mlPch.qty} onChange={(e) => handlePalm(e)} name="rasoi500mlPch" />
          </label>
          <h4>BiB</h4>
          <label>
            15KG Bib:
            <input type="number" value={formData.bib.qty} onChange={(e) => handlePalm(e)} name="bib" />
          </label>
  
        </form>
  
        <h4>Mustard</h4>
        <form>
          <label>
            15KgTin:
            <input type="number" value={formData.mustard15KgTin.qty} onChange={(e) => handlePalm(e)} name="mustard15KgTin" />
          </label>
          <label>
            15LtrTin/Jar:
            <input type="number" value={formData.mustard15LtrTin.qty} onChange={(e) => handlePalm(e)} name="mustard15LtrTin" />
          </label>
          <label>
            1 Ltr Pch:
            <input type="number" value={formData.mustard1LtrPch.qty} onChange={(e) => handlePalm(e)} name="mustard1LtrPch" />
          </label>
          <label>
            1 Ltr Pet:
            <input type="number" value={formData.mustard1LtrPet.qty} onChange={(e) => handlePalm(e)} name="mustard1LtrPet" />
          </label>
          <label>
            500ml Pet:
            <input type="number" value={formData.mustard500mlPet.qty} onChange={(e) => handlePalm(e)} name="mustard500mlPet" />
          </label>
          
  
        </form>
  
      </section>
  
      <button onClick={()=>handleUpdate()}>ADD</button>
      <button onClick={()=>handleReset()}>RESET</button>
  
      </div>
    );
  
}

export default Haldia