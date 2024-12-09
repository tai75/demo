import React, { useContext} from 'react'
import { AppContext } from './Context'
import meal1 from '../assets/meals1.jpg'

const Filters = () => {
    const { sort, updateSort, searchByName, select, updateSelect } = useContext(AppContext);

    return (
        <section className='filter-section'>
            <span>
                <img src={meal1} alt="meal1" />
                <div className='meal-title'>
                    Thực Phẩm
                </div>
            </span>


            <div className='meal-search-bar'>
                <form className='input-bar'>
                    <input type="text" onChange={searchByName} placeholder='Search Your Favourite Meals' />
                    <span className=' bi bi-search'></span>
                </form>
            </div>

            <div className='filtering'>
                <div className='meal-select'>
                    <label htmlFor="select">Loại Thực Phẩm</label>
                    <form>
                        <select className='select-bar' name="category" value={select} onChange={updateSelect} >
                            <option value="all">Tất Cả</option>
                            <option value="breakfast">Bữa Sáng</option>
                            <option value="soup">Súp</option>
                            <option value="salad">SALAD</option>
                            <option value="drink">Thức Uống</option>
                            <option value="main">Món Chính</option>
                        </select>
                    </form>
                </div>

                <div className='sort-select'>
                    <label htmlFor="select">Sắp Xếp</label>
                    <form>
                        <select className='sort-bar' name="sort" id="sort" value={sort} onChange={updateSort}>
                            <option>Sắp Xếp Theo</option>
                            <option value="title">A đến Z</option>
                            <option value="-title">Z đến A</option>
                            <option value="-price">Giá: Cao đến Thấp </option>
                            <option value="price">Giá: Thấp đến Cao</option>
                        </select>
                    </form>
                </div>
            </div>



        </section>
    )
}

export default Filters
