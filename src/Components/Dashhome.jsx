import React from 'react'
import firstimg from './img/booking-img-1.png'
import secondimg from './img/booking-img-2.jpeg'
import third from './img/img-3.png'
import fourth from './img/ima-4.jpeg'
import chart1 from './img/chart-1.png'
import chart2 from './img/chart-2.jpg'
import chart3 from './img/chart-3'
import multi_people from './img/multi_people.png'
import table_logo_1 from './img/logo_table_1.svg'
import table_logo_2 from './img/table_logo_2.svg'
import table_logo_3 from './img/table-logo-3.svg'
import table_logo_4 from './img/table-logo-4.svg'
import table_logo_5 from './img/table-logo-5.svg'
import table_logo_6 from './img/table-logo-6.svg'


export default function Dashhome() {
  return (

    <>
      {/* ------NAvbar--------- */}
      <div>
        <nav className="navbar bg-body-tertiary navbar1 position-fixed">
          <div className="container-fluid">
          <div className="mainname"> <p className='gray '><i class="fa-solid fa-home  font "></i> / Dashboard</p>
            <a className="navbar-brand up"> Dashboard</a>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
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
      {/* 4 Box------- */}

      <div className="fourbox">

        {/* ----------first------------------- */}
        <div className="firstbox">
          <div className="boxcontain">
            <img src={firstimg} alt="" className='firstimg' />
            <ul className='bookingul'>
              <li>Bookings</li>
              <li>281</li>
            </ul>
          </div>
          <div className="ptag">
            <p className='border'></p>
            <p><span style={{ color: 'green', fontWeight: 'bold' }}> +55% </span> than lask week</p>
          </div>
        </div>

        {/* ----------second------------------- */}


        <div className="firstbox">
          <div className="boxcontain">
            <img src={secondimg} alt="" className='firstimg' />
            <ul className='bookingul'>
              <li>Today's Users</li>
              <li>2,300</li>
            </ul>
          </div>
          <div className="ptag">
            <p className='border'></p>
            <p><span style={{ color: 'green', fontWeight: 'bold' }}> +20% </span>  than last month</p>
          </div>
        </div>
        {/* ----------third------------------- */}

        <div className="firstbox">
          <div className="boxcontain">
            <img src={third} alt="" className='firstimg' />
            <ul className='bookingul'>
              <li>Revenue</li>
              <li>34k</li>
            </ul>
          </div>
          <div className="ptag">
            <p className='border'></p>
            <p><span style={{ color: 'green', fontWeight: 'bold' }}> +5% </span> than yesterday</p>
          </div>
        </div>
        {/* ----------four------------------- */}

        <div className="firstbox">
          <div className="boxcontain">
            <img src={fourth} alt="" className='firstimg' />
            <ul className='bookingul'>
              <li>Followers</li>
              <li>+91</li>
            </ul>
          </div>
          <div className="ptag">
            <p className='border'></p>
            <p>  Just updated</p>
          </div>
        </div>
      </div>
      {/* --------------------Chart----------------- */}
      <br /><br />
      <div className="mainchart">
        <div className="firstchart">
          <img src={chart1} alt="" className='chartimg' />
          <div className="charttxt">
            <p className='Website'>Website Views</p>
            <p className='Campaign'>Last Campaign Performance</p>
            <p style={{ color: 'rgb(90, 81, 81)' }}><i class="fa-regular fa-clock"></i> campaign sent 2 days ago</p>
          </div>
        </div>

        <div className="firstchart">
          <img src={chart2} alt="" className='chartimg' />
          <div className="charttxt">
            <p className='Website'>Daily Sales</p>
            <p className='Campaign'>(+15%) increase in today sales.</p>
            <p style={{ color: 'rgb(90, 81, 81)' }}><i class="fa-regular fa-clock"></i> campaign sent 2 days ago</p>
          </div>
        </div>

        <div className="firstchart">
          <img src={chart3} alt="" className='chartimg' />
          <div className="charttxt">
            <p className='Website'>Completed Tasks</p>
            <p className='Campaign'>Last Campaign Performance</p>
            <p style={{ color: 'rgb(90, 81, 81)' }}><i class="fa-regular fa-clock"></i> just updated</p>
          </div>
        </div>
      </div>
      <br /><br />

      {/* last contain */}

      <div className="lastcontain">
        <div className="bigbox">
          <div className="Project">
            <p > Projects <br /> <i class="fa-solid fa-check" style={{ color: 'blue', fontSize: '23px' }}></i><span className='gray '> 30 done this month</span></p>
            <i class="fa-solid fa-ellipsis-vertical thicon"></i>
          </div>
          <div className="tablecontain">
            <table border={0}>
              <thead>
                <tr>
                  <th>COMPANIES</th>
                  <th>MEMBERS</th>
                  <th>BUDGET</th>
                  <th>COMPLETION</th>
                </tr>
{/* one */}
                <tr >
                  <th><img src={table_logo_1} alt="" style={{ 'height': '40px', 'width': '40px' }} /> Material UI XD Version</th>
                  <th><img src={multi_people} alt="" style={{ 'height': '40px', 'width': '120px', 'text-align': 'left' }} /></th>
                  <th>$14,000</th>
                  <th><div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ 'height': '8px' }}>
                    <div class="progress-bar" style={{ 'width': '75%' }}></div>
                  </div></th>
                </tr>
{/* two */}
                <tr >
                  <th><img src={table_logo_2} alt="" style={{ 'height': '40px', 'width': '40px' }} /> Add Progress Track</th>
                  <th><img src={multi_people} alt="" style={{ 'height': '40px', 'width': '120px', 'text-align': 'left' }} /></th>
                  <th>$3,000</th>
                  <th><div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ 'height': '8px' }}>
                    <div class="progress-bar" style={{ 'width': '40%' }}></div>
                  </div></th>
                </tr>
{/* three */}
                <tr >
                  <th><img src={table_logo_3} alt="" style={{ 'height': '40px', 'width': '40px' }} /> Fix Platform Errors</th>
                  <th><img src={multi_people} alt="" style={{ 'height': '40px', 'width': '120px', 'text-align': 'left' }} /></th>
                  <th>Not set</th>
                  <th><div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ 'height': '8px' }}>
                    <div class="progress-bar bg-success" style={{ 'width': '100%' }}></div>
                  </div></th>
                </tr>
{/* four */}
                <tr >
                  <th><img src={table_logo_4} alt="" style={{ 'height': '40px', 'width': '40px' }} /> Launch our Mobile App</th>
                  <th><img src={multi_people} alt="" style={{ 'height': '40px', 'width': '120px', 'text-align': 'left' }} /></th>
                  <th>$20,500</th>
                  <th><div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ 'height': '8px' }}>
                    <div class="progress-bar bg-success" style={{ 'width': '100%' }}></div>
                  </div></th>
                </tr>
{/* five */}
                <tr >
                  <th><img src={table_logo_5} alt="" style={{ 'height': '40px', 'width': '40px' }} /> Add the New Pricing Page</th>
                  <th><img src={multi_people} alt="" style={{ 'height': '40px', 'width': '120px', 'text-align': 'left' }} /></th>
                  <th>$500</th>
                  <th><div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ 'height': '8px' }}>
                    <div class="progress-bar" style={{ 'width': '20%' }}></div>
                  </div></th>
                </tr>
{/* six */}
                <tr >
                  <th><img src={table_logo_6} alt="" style={{ 'height': '40px', 'width': '40px' }} /> Redesign New Online Shop</th>
                  <th><img src={multi_people} alt="" style={{ 'height': '40px', 'width': '120px', 'text-align': 'left' }} /></th>
                  <th>$2,000</th>
                  <th><div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ 'height': '8px' }}>
                    <div class="progress-bar" style={{ 'width': '60%' }}></div>
                  </div></th>
                </tr>
              </thead>
            </table>
          </div>
        </div>

{/* -------------------------Orders overview--------------------------------- */}

        <div className="smallbox">
          <div className='oo'>
          <h6>Orders overview</h6>
          <p> <i class="fa-solid fa-arrow-up" style={{'color': '#0ced10'}}></i><span className='gray '> 24% this month </span>  </p>
          </div>
{/* lasticon bell text table */}
          <div className="lasticon">
            <div className="belicon" >
            <i class="fa-solid fa-bell" ></i>
            </div>
            <div className="lasttxt">
              
              <h6>$2400, Design changes</h6>
              <p ><span className='gray '> 22 DEC 7:20 PM </span></p>
            </div>
          </div>

          {/* second */}
          <div className="lasticon">
            <div className="belicon" style={{ backgroundColor: 'black'}}>
            <i class="fa-solid fa-cart-shopping"></i>            </div>
            <div className="lasttxt">
              
              <h6>New order #1832412</h6>
              <p ><span className='gray '> 21 DEC 11 PM</span></p>
            </div>
          </div>

                  {/* third */}

                  <div className="lasticon">
            <div className="belicon" style={{ backgroundColor: 'blue'}}>
            <i class="fa-solid fa-money-check-dollar"></i>            </div>
            <div className="lasttxt">
              
              <h6>$2400, Design changes</h6>
              <p ><span className='gray '> 21 DEC 9:34 PM </span></p>
            </div>
          </div>

          {/* fourth */}

          <div className="lasticon">
            <div className="belicon" style={{ backgroundColor: 'rgb(234, 162, 81)'  }}>
            <i class="fa-solid fa-credit-card"></i>            </div>
            <div className="lasttxt">
              
              <h6>New card added for order </h6>
              <p ><span className='gray '>20 DEC 2:20 AM</span></p>
            </div>
          </div>

          {/* five */}

          <div className="lasticon">
            <div className="belicon" style={{ backgroundColor: 'rgb(234, 62, 105)'  }}>
            <i class="fa-solid fa-kiwi-bird" ></i>                   </div>
            <div className="lasttxt">
              
              <h6>New card added for order</h6>
              <p ><span className='gray '> 18 DEC 4:54 AM </span></p>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
<br /><br />

<h5 className='nilesh'>| This Website is made <i class="fa-solid fa-heart"></i>  by Nilesh Panchal <i class="fa-solid fa-face-grin-wide"></i> |</h5>
<br /><br />
    </>
  )
}
