import React from 'react';
import "../components/css/FoodStyles.css"
import HeaderUser from '../components/jsx/HeaderUser';

const Food = () => {
  return (
    <div>
      <HeaderUser />

      <div className='main_container_food'>
        <div className='top_section_food'>
            <h2>Food Requirements</h2>
        </div>

        <div className='food_section_food'>
            <div className='food_box_food'>
                <h3>Vitamin - C</h3>
                <div className='food_need_section_food'>
                    <h5>Need</h5>
                    <ul>
                        <li>It help mom maintain a healthy immune system.</li>
                        <li>It is required for mom\u2019s body to make collagen to help baby 2019s skin, cartilage, tendons, and bone growth.</li>
                        <li>It also acts as an antioxidant in the body, helps to prevent cell damage.</li>
                        <li>It also helps your body absorb iron.</li>
                    </ul>
                </div>
                <div className='food_need_section_food'>
                    <h5>Dosage</h5>
                    <ul>
                        <li>It help mom maintain a healthy immune system.</li>
                        <li>It is required for mom\u2019s body to make collagen to help baby 2019s skin, cartilage, tendons, and bone growth.</li>
                        <li>It also acts as an antioxidant in the body, helps to prevent cell damage.</li>
                        <li>It also helps your body absorb iron.</li>
                    </ul>
                </div>
                <div className='food_detail_section_food'>
                    <h5>Food</h5>
                    <div className='food_category_section_food'>
                        <h6>Fruit</h6>
                        <div className='food_cards_container_food'>
                            <div className='food_card_food'>
                                <img src='https://3.imimg.com/data3/PA/VA/MY-3164894/13-250x250.jpg' alt='food' />
                                <h4>Orange</h4>
                            </div>
                            <div className='food_card_food'>
                                <img src='https://3.imimg.com/data3/PA/VA/MY-3164894/13-250x250.jpg' alt='food' />
                                <h4>Orange</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Food
