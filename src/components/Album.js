import React from 'react';

import { Link } from 'react-router-dom';

import { click } from './Albums/albumsActions';

import { connect } from 'react-redux';

class Album extends React.Component {

    click = (album, artist) => {
        this.props.click(album, artist);
    }


    render(){
        const { artist, album } = this.props;
        const { language } = this.props; // Redux


        const albumNameAr = language === "عربى" ? 'album-name-ar' : 'album-name';

        const seeMore = language === "EN" ? 'Click to see more' : 'اقرأ المزيد';

        const artistDesc = language === "عربى" ? 'artist-desc-ar' : 'artist-desc';

        return (
            <div className="album" onClick={() => this.click(album, artist)}>
                <Link to={`/album/${artist.id}/${album.id}`}>
                    <div className="album-img">
                        <img src={album.img} alt={language === "EN" ? album.name : album.nameAr} />
                    </div>
                    
                    <div className="album-info">
                        <p className="artist-name">{language === "EN" ? artist.nameEn : artist.nameAr}</p>
                        <p className={artistDesc}>{language === "EN" ? artist.about.substring(0, 50) : artist.aboutAr.substring(0, 50)}... <b>{seeMore}</b></p>
                        <p className={albumNameAr}>{language === "EN" ? album.name : album.nameAr}</p>
                    </div>
                </Link>
            </div>
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
        click: (album, artist) => dispatch(click(album, artist))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Album);