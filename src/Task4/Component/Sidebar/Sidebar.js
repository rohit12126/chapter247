import React from 'react'
import Accordian from '../../Container/Accordian';
import './SideBar.css'
import Rangeslider from '../../Container/RangeSlider';
import CheckBox from './CheckBox';
import Autosuggestion from '../../Container/Autosuggest';
import Header from '../Header';
import Footer from '../Footer';
const SideBar = () => {
    return (
        <>
            <div className={"container"}>
                <Header />
                <div className={"row"}>
                    <div className={"col-md-3 Sidebar"}>
                        <div>
                            <Accordian />
                        </div>
                        <div>
                            <Rangeslider />
                        </div>

                        <div>
                            <CheckBox />
                        </div>

                    </div>
                </div>

                <div className={"col-md-9"}>
                    <Autosuggestion />
                </div>

            </div>
            <Footer />
        </>
    )
}
export default SideBar;