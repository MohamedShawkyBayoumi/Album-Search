import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { click } from './Albums/albumsActions';

class SingleAlbum extends React.Component {

    click = (album, artist) => {
        this.props.click(album, artist);
    }

    render(){
        const { singleArtist, singleAlbum, language } = this.props;

        const singleAlbumWrapperAr = language === "عربى" ? 'single-album-wrapper-ar' : 'single-album-wrapper';
        const myAlbumsText = language === "عربى" ? 'ألبوماتى' : 'My Albums';

        const directionMargin = language === "عربى" ? { direction: 'rtl', marginRight: '10px' } : { direction: 'ltr', marginRight: '0px' };

        const artistNameHead = language === "عربى" ? 'artist-name-head-ar' : 'artist-name-head';

        const go = language === "عربى" ? 'go-ar' : 'go';

        const home = language === "عربى" ? 'الصفحة الرئيسية' : 'Home';
        

        return (
            <div id="single-album">
                {singleAlbum !== null &&  
                    <Fragment>
                        <div className={go}>
                            <p><Link to="/">{home}</Link> > <Link to={`/abum/${singleArtist.id}/${singleAlbum.id}`}>{language === "EN" ? singleAlbum.name : singleAlbum.nameAr}</Link></p>
                        </div>
                        <div className={`single-album-wrapper ${singleAlbumWrapperAr}`}>
                        <div className="left-img">
                            <div className="bg-above"></div>
                            <img src={singleAlbum.img} alt={language === "EN" ? singleArtist.nameEn : singleArtist.nameAr} />
                        </div>
                        <div className="right-info" style={directionMargin}>
                            <div className={`${artistNameHead}`}>
                                <h1>{language === "EN" ? singleArtist.nameEn : singleArtist.nameAr}</h1>
                                <p>{language === "EN" ? singleArtist.about : singleArtist.aboutAr}</p>
                                <div className="my-albums">
                                    <div className="my-albums-head">
                                        <span>{myAlbumsText}</span>
                                    </div>
                                    <div className="my-abums-container">
                                        {singleArtist.albums.map((album, i) => (
                                            <Link key={i} to={`/album/${singleArtist.id}/${album.id}`}>
                                            <div className={`one-single-album ${album.img === singleAlbum.img ? 'border-active' : ''}`} onClick={() => this.click(album, singleArtist)}>
                                                
                                                <img src={album.img} alt={language === "EN" ? album.name : album.nameAr} />
                                                
                                            </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Fragment>
                    
                }
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        singleArtist: state.data.singleArtist,
        singleAlbum: state.data.singleAlbum,
        language: state.data.language
    }
}

const mapDispatchToProps = dispatch => {
    return {
        click: (album, artist) => dispatch(click(album, artist))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleAlbum);