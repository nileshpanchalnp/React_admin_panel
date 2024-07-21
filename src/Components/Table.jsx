import React from 'react'
import Profil_img_1 from './img/table1_page_img_1.jpg'
import table_logo_1 from './img/logo_table_1.svg'
import table_logo_2 from './img/github_logo.svg'
import table_logo_3 from './img/table-logo-3.svg'
import table_logo_4 from './img/table-logo-4.svg'
import table_logo_5 from './img/table-logo-5.svg'
import table_logo_6 from './img/table-logo-6.svg'

export default function Table() {

 
  return (
   
         <>
         {/* ------NAvbar--------- */}
      <div>
        <nav className="navbar bg-body-tertiary navbar1 position-fixed">
          <div className="container-fluid">
            <div className="mainname"> <p className='gray '><i class="fa-solid fa-table  font "></i> / Table</p>
            <a className="navbar-brand up"> Tables</a>
            </div>
            <form className="d-flex" role="search">
              <input 
                 className="sidema form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <ul className='navicon'>
                <li><i class="fa-solid fa-circle-user"></i></li>
                <li><i class="fa-solid fa-gear"></i></li>
                <li><i class="fa-solid fa-bell"></i></li>
              </ul>
            </form>
          </div>
        </nav>
      </div>
         {/* ------navbar end--------- */}
<br /><br /><br /><br />
      {/* blue box 1 */}

      <div className="bluebox">
        <p>Authors Table</p>
      </div>
      <div className="firsttablebox">
        <table className='firsttabletxt' >
          <tr className='gray' >
            <td className=' textaling_right'>AUTHOR</td>
            <td  className='textaling_end ' >FUNCTION</td>
            <td className='textaling_end  '>STATUS</td>
            <td className='textaling_end ' >EMPLOYED</td>
            <td className='textaling_end '>ACTION</td>
          </tr>
          {/* tr 1 */}
          <tr>
            <td > <div className="tddiv textaling_right"><img src={Profil_img_1} alt=""  />
            <div><p> Michael Levi</p><p  className=" txtcolum gray">michael@creative-tim.com</p></div>
            </div></td>
            <td  className='textaling_end '> Manager <br /><span className='gray'>Organization</span></td>
            <td className='textaling_end'>ONLINE</td>
            <td className='textaling_end'>	14/02/18</td>
            <td className='textaling_end'>Edit</td>
          </tr>
          {/* tr  2*/}
          <tr>
            
            <td > <div className="tddiv textaling_right"><img src={Profil_img_1} alt=""  />
            <div><p> Alexa Liras</p><p  className=" txtcolum gray">alexa@creative-tim.com</p></div>
            </div></td>
            <td  className='textaling_end '> Executive<br /><span className='gray'>Projects</span></td>
            <td className='textaling_end '>OFFLINE</td>
            <td className='textaling_end'>	12/09/18</td>
            <td className='textaling_end'>Edit</td>
          </tr>
{/* tr  4*/}  
          <tr>
            <td > <div className="tddiv textaling_right"><img src={Profil_img_1} alt=""  />
            <div><p> John Michael</p><p  className=" txtcolum gray">john@creative-tim.com</p></div>
            </div></td>
            <td  className='textaling_end '> 	Programator<br /><span className='gray'>Developer</span></td>
            <td className='textaling_end'>ONLINE</td>
            <td className='textaling_end'>	02/12/17</td>
            <td className='textaling_end'>Edit</td>
          </tr>
          {/* tr  3*/}
          <tr>           
            <td > <div className="tddiv textaling_right"><img src={Profil_img_1} alt=""  />
            <div><p> Laurent Perrier</p><p  className=" txtcolum gray">laurent@creative-tim.com</p></div>
            </div></td>
            <td  className='textaling_end '> Programator<br /><span className='gray'>Developer</span></td>
            <td className='textaling_end '><p className='onlinebtn'>ONLINE</p></td>
            <td className='textaling_end'>	8/06/15</td>
            <td className='textaling_end'>Edit</td>
          </tr>
          {/* tr  5*/}
          <tr>
            <td > <div className="tddiv textaling_right"><img src={Profil_img_1} alt=""  />
            <div><p> Richard Gran</p><p  className=" txtcolum gray">richard@creative-tim.com</p></div>
            </div></td>
            <td  className='textaling_end '> Manager <br /><span className='gray'>Organization</span></td>
            <td className='textaling_end'>OFFLINE</td>
            <td className='textaling_end'>	12/02/20</td>
            <td className='textaling_end'>Edit</td>
          </tr>
          {/* tr  6*/}
          <tr>      
            <td > <div className="tddiv textaling_right"><img src={Profil_img_1} alt=""  />
            <div><p>Miriam Eric</p><p  className=" txtcolum gray">miriam@creative-tim.com</p></div>
            </div></td>
            <td  className='textaling_end '> 	Programator<br /><span className='gray'>Developer </span></td>
            <td className='textaling_end'>OFFLINE</td>
            <td className='textaling_end'>	23/04/18</td>
            <td className='textaling_end'>Edit</td>
          </tr>
        </table>
      </div>
<br /><br />  
      {/* second blue box  */}
       {/* blue box 2 */}
       <div className="bluebox">
        <p>Projects Table</p>
      </div>
      <div className="firsttablebox">
        <table className='firsttabletxt' >
          <tr className='gray' >
            <td className=' textaling_right'>PROJECT</td>
            <td  className='textaling_end ' >BUDGET</td>
            <td className='textaling_end  '>STATUS</td>
            <td className='textaling_end ' >COMPLETION</td>
            <td className='textaling_end '>ACTION</td>
          </tr>
          {/* tr 1 */}
          <tr>  
            <td > <div className="tddiv textaling_right"><img src={table_logo_1} alt=""  />
            <div><p> Asana </p></div>
            </div></td>
            <td  className='textaling_end '> $2,500 </td>
            <td className='textaling_end'>working</td>
            <td className='textaling_end'><div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ 'height': '8px' }}>
                    <div class="progress-bar" style={{ 'width': '60%' }}></div>
                  </div></td>
            <td className='textaling_end'>Edit</td>
          </tr>
          {/* tr  2*/}
          <tr>    
            <td > <div className="tddiv textaling_right"><img src={table_logo_2} alt=""  />
            <div><p> Github</p></div>
            </div></td>
            <td  className='textaling_end '> $5,000 <br /></td>
            <td className='textaling_end '>done</td>
            <td className='textaling_end'><div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ 'height': '8px' }}>
                    <div class="progress-bar bg-success" style={{ 'width': '100%' }}></div>
                  </div></td>
            <td className='textaling_end'>Edit</td>
          </tr>
          {/* tr  3*/}
          <tr>          
            <td > <div className="tddiv textaling_right"><img src={table_logo_3} alt=""  />
            <div><p>Atlassian</p></div>
            </div></td>
            <td  className='textaling_end '> $3,400 <br /></td>
            <td className='textaling_end '><p className='onlinebtn'>canceled</p></td>
            <td className='textaling_end'> <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ 'height': '8px' }}>
             <div class="progress-bar bg-danger" style={{ 'width': '30%' }}></div>
                  </div></td>
            <td className='textaling_end'>Edit</td>
          </tr>
          {/* tr  4*/}
          <tr>           
            <td > <div className="tddiv textaling_right"><img src={table_logo_4} alt=""  />
            <div><p> Spotify</p></div>
            </div></td>
            <td  className='textaling_end '> $14,000 <br /></td>
            <td className='textaling_end'>working</td>
            <td className='textaling_end'><div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ 'height': '8px' }}>
                    <div class="progress-bar" style={{ 'width': '80%' }}></div>
                  </div></td>
            <td className='textaling_end'>Edit</td>
          </tr>
          {/* tr  5*/}
          <tr>   
            <td > <div className="tddiv textaling_right"><img src={table_logo_5} alt=""  />
            <div><p>Slack</p></div>
            </div></td>
            <td  className='textaling_end '> $1,000 <br /></td>
            <td className='textaling_end'>canceled</td>
            <td className='textaling_end'>	<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ 'height': '8px' }}>
                    <div class="progress-bar" style={{ 'width': '0%' }}></div>
                  </div></td>
            <td className='textaling_end'>Edit</td>
          </tr>
          {/* tr  6*/}
          <tr>   
            <td > <div className="tddiv textaling_right"><img src={table_logo_6} alt=""  />
            <div><p> Invesion</p></div>
            </div></td>
            <td  className='textaling_end '> $2,300 <br /></td>
            <td className='textaling_end'>done</td>
            <td className='textaling_end'>	<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ 'height': '8px' }}>
                    <div class="progress-bar" style={{ 'width': '100%' }}></div>
                  </div></td>
            <td className='textaling_end'>Edit</td>
          </tr>
        </table>
      </div>
          <br /><br />

          <h5 className='nilesh'>| This Website is made <i class="fa-solid fa-heart"></i>  by Nilesh Panchal <i class="fa-solid fa-face-grin-wide"></i> |</h5>
          <br /><br />
    </>
      
   
  )
}
// import React, { useState } from 'react'

// export default function Serching() {
//     const [serchData]=useState(["GT musteng","Range Rover","Defender","Discovry","G wagon","RR"])
//     const [serch,setSerch]=useState(serchData)
//     const [val,setValue]=useState("")

//     const handleSerch = (e)=>{
//       setValue(e.target.value)
//       if(e.target.value){
//         let result = serch.filter((item)=>item.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
//         setSerch(result)
//       }else{
//         setSerch(serchData)
//       }
       
//     }
    
//   return (
//     <>
//       <h1>Serching</h1>
//       <input value={val} onChange={(e)=>handleSerch(e)} />
//       <br /><br />

//       {
//         serch.map((item,index)=>{
//           return(
//           <li key={index}>{item}</li>
//           )
//         })
//       }
//     </>
//   )
// }