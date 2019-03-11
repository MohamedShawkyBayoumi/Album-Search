import React from 'react';

import { connect } from 'react-redux';

import { changeLanguageToArabic, changeLanguageToEnglish } from './Albums/albumsActions';

class Header extends React.Component {

    changeLanguageToEnglish = () => {
        this.props.changeLanguageToEnglish();
    }


    changeLanguageToArabic = () => {
        this.props.changeLanguageToArabic();
    }

    render(){
        const { language } = this.props;
        return (
            <header>
                <div className="header">
                    <div className="header-container">
                        <div className="logo">
                            <h1>Album Search</h1>
                        </div>
                        <div className="change-language">
                            {language === "EN" && <span onClick={this.changeLanguageToArabic}>عربى</span> }
                            {language === "عربى" && <span onClick={this.changeLanguageToEnglish}>EN</span> }
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}


const mapStateToProps = state => {
    return {
        language: state.data.language
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageToArabic: () => dispatch(changeLanguageToArabic()),
        changeLanguageToEnglish: () => dispatch(changeLanguageToEnglish())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);