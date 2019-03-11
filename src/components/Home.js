import React from 'react';

import Albums from './Albums';

import { connect } from 'react-redux';

import { search } from './Albums/albumsActions';


class Home extends React.Component {

    state = {
        inputValue: ""
    }


    onChange = event => {
        this.setState({
            inputValue: event.target.value
        });
    }

    render(){
        const { inputValue } = this.state;
        const { value, language } = this.props;

        const placeholder = language === "عربى" ? 'بحث ألبوم, مطرب ..الخ' : 'Search Album, Artist ..etc';

        const styleAr = language === "عربى" ? 'search-box-ar' : 'search-box';

        return (
            <div id="home">
                <section className="home">
                    <div className={styleAr}>
                        <i className="search-icon"></i>
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={value}
                            onChange={event => this.props.search(event.target.value)}
                        />
                    </div>
                </section>
                <Albums inputValue={inputValue} />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        value: state.data.searchValue,
        language: state.data.language
    }
}

const mapDispatchToProps = dispatch => {
    return {
        search: value => dispatch(search(value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);