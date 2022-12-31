import React,{useState,useEffect} from 'react'

const Kandla = () => {
    const data = {
        palmtotal: 0,
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
          toMT: 9
        },
        palm500mlPch: {
          qty: 0,
          toMT: 9
        }
      }
    
    const [wp,setWp] = useState('') 
    const [kandlaBargain,setKandlaBargain] = useState({...data})
    const initialTotal={
                palmtotal:0,
                palmbp:0,
                palmcp:0}
    const [total,setTotal]=useState({...initialTotal})
        
    const [formData,setFormData] = useState({...data})
    useEffect(()=>{
        const kandlaData = localStorage.getItem('kandlaBargain')
        if(kandlaData){
            const bargainData = JSON.parse(kandlaData)
            const calTotal = {palmtotal:0,
                palmbp:0,
                palmcp:0}
            setKandlaBargain({...bargainData})
            console.log(bargainData)
            for(const e in bargainData){
                if(e.toString().startsWith('palm') && e.toString()!=='palmtotal') calTotal.palmtotal+=(bargainData[e].qty*bargainData[e].toMT)
                if(e.toString().startsWith('palm15') && e.toString()!=='palmtotal') calTotal.palmbp+=(bargainData[e].qty*bargainData[e].toMT)
                if(!e.toString().startsWith('palm15') && e.toString()!=='palmtotal') calTotal.palmcp+=(bargainData[e].qty*bargainData[e].toMT)
            }
            setTotal({...calTotal})
        }else{
            const localData = {
                palmtotal: 0,
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
                  toMT: 9
                },
                palm500mlPch: {
                  qty: 0,
                  toMT: 9
                }
              }
            
            setKandlaBargain({...localData})
            // console.log('kandla',kandlaBargain)
            // console.log('form data',formData)
            // console.log('totals',total)
        }
    },[])

    function handlePalm(e) {
        let val = formData[e.target.name]
        val.qty=isNaN(e.target.value)?0:parseInt(e.target.value)
        setFormData({ ...formData, [e.target.name]: val })
        // console.log(formData)
        // console.log(kandlaBargain,'kandla')
      }
    
      function handleReset(){
        localStorage.removeItem('kandlaBargain')
        setKandlaBargain({...data})
        setTotal({...initialTotal})
        setWp('')
        alert('RESET SUCCESSFUL')
      }

      function handleUpdate(){
        const curData = {...kandlaBargain}
        console.log(curData,'prev')
        const curTotal = {...total}
        console.log(curTotal,'prevtotal')
        for(const e in formData){
            if(e.toString().startsWith('palm') && e.toString()!=='palmtotal'){
                curData[e].qty+=formData[e].qty
                curData.palmtotal+=(formData[e].qty*formData[e].toMT)
                curTotal.palmtotal+=((formData[e].qty*formData[e].toMT))
            }
            if(e.toString().startsWith('palm15') && e.toString()!=='palmtotal') curTotal.palmbp+=(formData[e].qty*formData[e].toMT)
            if(!e.toString().startsWith('palm15') && e.toString()!=='palmtotal') curTotal.palmcp+=(formData[e].qty*formData[e].toMT)

        }
        console.log(curData)
        console.log('total',curTotal)
        setKandlaBargain({...curData})
        setTotal({...curTotal})
        setFormData({...data})
        localStorage.setItem('kandlaBargain',JSON.stringify(kandlaBargain))
        alert('ADDED SUCCESSFULLY')
      }

      function copyData(){
        const time=new Date().toLocaleTimeString().split(' ')
        const curTime = time[0].split(':')[0]+":"+time[0].split(':')[1]
        const text ='Till '+curTime+' '+time[1]+ '%0a Kandla Palm : '+(total.palmtotal)/1000 +'MT %0a '
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
    <div className='kandlaApp'>
        <h1>Kandla</h1>

        <h4>Palm: {total.palmtotal}</h4>
        <h5>Palm-BP: {total.palmbp}</h5>
        <h5>Palm-CP: {total.palmcp}</h5>
        <hr></hr>

        <button onClick={()=>{copyData()}}>Copy</button>
        <a href={`whatsapp://send?text=${wp}`}>Send to Whatsapp</a>
        <hr></hr>
        <section>
            <h4>Kandla Palm</h4>
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
        </section>
        <button onClick={()=>handleUpdate()}>ADD</button>
        <button onClick={()=>handleReset()}>RESET</button>
    </div>
  )
}

export default Kandla