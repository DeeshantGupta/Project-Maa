import React from 'react';
import "../css/HomeBanner5Styles.css";

const HomeBanner5 = () => {
  return (
    <div>
      <div className='main_container_homebanner5'>
        <div className='top_section_homebanner5'>
            <h2>Did you know?</h2>
            <p>Recent scientific and statistical surveys have revealed shocking results. Here's a summary for you.</p>
        </div>

        <div className='bottom_section_homebanner5'>
          <div className='bottom_first_section_homebanner5'>
            <h3>1 / 5 th</h3>
            <p>With the birth of 25 million children each year India accounts for nearly one fifth of the world’s annual child births. Every minute one of those babies dies.</p>
          </div>

          <div className='bottom_first_section_homebanner5'>
            <h3>15 %</h3>
            <p>India accounts for 15 % of world maternal deaths, second only to Nigeria (19 per cent), the study said.</p>
          </div>

          <div className='bottom_first_section_homebanner5'>
            <h3>2 / 3 rd</h3>
            <p>India has two-thirds of its population living in rural areas. Rural women in India have worse access to healthcare compared to their urban counterparts.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner5
