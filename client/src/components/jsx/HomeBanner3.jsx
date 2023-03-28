import React from 'react';
import "../css/HomeBanner3Styles.css";

const HomeBanner3 = () => {
  return (
    <div>
      <div className='main_container_homebanner3'>
        <div className='top_section_homebanner3'>
            <h2>What Happens During Pregnancy ?</h2>
            <p>Watch the journey of nine months</p>
        </div>

        <div className='bottom_section_homebanner3'>
          <iframe className='video_homebanner3' src="https://www.youtube.com/embed/izOa3-AX8zQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner3
